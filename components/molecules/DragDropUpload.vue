<template>
  <div :class="['relative', wrapperClass]" @dragenter.prevent="isDraggingOver = true"
    @dragover.prevent="isDraggingOver = true" @dragleave.prevent="isDraggingOver = false" @drop.prevent="handleDrop">
    <input type="file" :accept="accept" class="absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer z-10"
      :id="inputIdValue" @change="handleFileChange" ref="fileInputRef" />
    <label :for="inputIdValue"
      :class="['block cursor-pointer w-full h-full', dropzoneItselfClass, isDraggingOver ? dragOverClass : '']">
      <div v-if="!objectUrl" class="flex flex-col items-center justify-center h-full text-center p-4">
        <slot name="placeholder">
          <Icon v-if="placeholderIconName" :name="placeholderIconName"
            :class="['text-3xl mb-2', placeholderIconClass]" />
          <p v-if="placeholderText" :class="placeholderTextClass">{{ placeholderText }}</p>
          <p v-if="placeholderDetailsText" :class="['text-xs', placeholderDetailsClass]">{{
            placeholderDetailsText
          }}</p>
        </slot>
      </div>
      <div v-else class="relative w-full h-full flex items-center justify-center">
        <img v-if="isImageFile" :src="objectUrl"
          :class="['max-h-full max-w-full object-contain', previewImageClassValue]" alt="Preview" />
        <div v-else class="p-4 text-center">
          <Icon name="mdi:file" class="text-4xl text-gray-500 mb-2" />
          <p class="text-sm font-medium">{{ currentFile?.name || 'Uploaded file' }}</p>
          <p v-if="currentFile?.size" class="text-xs text-gray-500">{{ formatFileSize(currentFile.size) }}</p>
        </div>
        <BaseButton v-if="showRemoveButton" @click.stop.prevent="removeFile"
          class="size-7 flex items-center justify-center"
          :class="['absolute top-2 right-2 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors z-20', removeButtonCustomClass]"
          type="button">
          <Icon name="mdi:close" :class="['text-white', removeButtonIconClassValue]" />
        </BaseButton>
        <slot name="preview-overlay"></slot>
      </div>
    </label>
  </div>
</template>

<script setup>
import { ref, watch, computed, onBeforeUnmount } from 'vue';
import { BaseButton } from '@atoms';

const props = defineProps({
  modelValue: {
    type: null,
    default: null,
    validator: (value) => {
      return (
        value === null ||
        value === '' ||
        (typeof File !== 'undefined' && value instanceof File) ||
        (typeof value === 'string' && (
          value.startsWith('data:image') ||         // base64
          value.startsWith('http://') ||            // full image URL
          value.startsWith('https://')              // full image URL
        ))
      );
    }
  },
  inputId: {
    type: String,
    default: null,
  },
  accept: {
    type: String,
    default: 'image/*',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  dropzoneItselfClass: {
    type: String,
    default: 'border-2 border-dashed border-gray-400 rounded-lg',
  },
  dragOverClass: {
    type: String,
    default: 'border-blue-500',
  },
  previewImageClassValue: {
    type: String,
    default: 'rounded',
  },
  placeholderIconName: {
    type: String,
    default: 'mdi:cloud-upload-outline',
  },
  placeholderIconClass: {
    type: String,
    default: 'text-gray-500',
  },
  placeholderText: {
    type: String,
    default: 'Drag and drop your file here, or click to select file',
  },
  placeholderTextClass: {
    type: String,
    default: 'text-sm text-gray-400',
  },
  placeholderDetailsText: {
    type: String,
    default: '',
  },
  placeholderDetailsClass: {
    type: String,
    default: 'text-xs text-gray-500',
  },
  showRemoveButton: {
    type: Boolean,
    default: true,
  },
  removeButtonCustomClass: {
    type: String,
    default: '',
  },
  removeButtonIconClassValue: {
    type: String,
    default: 'text-lg',
  }
});

const emit = defineEmits(['update:modelValue', 'file-selected', 'file-removed']);

const fileInputRef = ref(null);
const currentFile = ref(null);
const objectUrl = ref(null);
const isDraggingOver = ref(false);

// Generate consistent ID for SSR
const inputIdValue = computed(() => props.inputId || 'file-upload-default');

const isImageFile = computed(() => {
  if (!currentFile.value) return false;
  if (typeof File !== 'undefined' && currentFile.value instanceof File) {
    return currentFile.value.type?.startsWith('image/');
  }
  if (typeof objectUrl.value === 'string') {
    return objectUrl.value.startsWith('data:image') ||
      objectUrl.value.startsWith('http') ||
      objectUrl.value.startsWith('/');
  }
  return false;
});

watch(() => props.modelValue, (newVal) => {
  if (!newVal) return
  if (newVal !== currentFile.value) {
    setCurrentFile(newVal);
  }
}, { immediate: true });

const setCurrentFile = (file) => {
  // Clean up previous object URL if it exists
  if (objectUrl.value) {
    URL.revokeObjectURL(objectUrl.value);
    objectUrl.value = null;
  }

  currentFile.value = file;

  if (file) {
    if (typeof File !== 'undefined' && file instanceof File && isImageFile.value) {
      objectUrl.value = URL.createObjectURL(file);
    } else if (typeof file === 'string' && (file.startsWith('data:image') || file.startsWith('http') || file.startsWith('/'))) {
      objectUrl.value = file;
      // Create a dummy file object for display purposes
      if (typeof File !== 'undefined') {
        currentFile.value = new File([], 'uploaded-image.png', { type: 'image/png' });
      } else {
        currentFile.value = { name: 'uploaded-image.png', type: 'image/png', size: 0 };
      }
    }
  }
};

const formatFileSize = (bytes) => {
  if (!bytes) return '';
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const processFile = (file) => {
  if (file) {
    setCurrentFile(file);
    emit('update:modelValue', file);
    emit('file-selected', file);
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  processFile(file);
};

const handleDrop = (event) => {
  isDraggingOver.value = false;
  const file = event.dataTransfer.files[0];
  processFile(file);
  if (file && fileInputRef.value) {
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    fileInputRef.value.files = dataTransfer.files;
  }
};

const removeFile = () => {
  setCurrentFile(null);
  if (fileInputRef.value) {
    fileInputRef.value.value = '';
  }
  emit('update:modelValue', null);
  emit('file-removed');
};

// Clean up object URLs when component is unmounted
onBeforeUnmount(() => {
  if (objectUrl.value && typeof objectUrl.value === 'string' && objectUrl.value.startsWith('blob:')) {
    URL.revokeObjectURL(objectUrl.value);
  }
});
</script>
