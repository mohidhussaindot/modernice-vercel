<template>
  <div :class="mainClass">
    <Icon :name="iconSrc" :iconClass="iconClass" v-if="isIcon"/>
    <div :class="secondaryClass">
      <p :class="textClass">
        {{ text }}
      </p>
      <p :class="secondTextClass" v-if="isSecond">
        {{ secondText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Image as Icon} from '@atoms';
import {withDefaults} from 'vue';

interface Props {
  iconSrc?: string;
  iconClass?: string;
  text?: string;
  textClass?: string;
  secondText?: string;
  secondTextClass?: string;
  isIcon?: boolean;
  mainClass?: string;
  secondaryClass?: string;
  // Animation props
  animationEnabled?: boolean;
  iconAnimationEnabled?: boolean;
  isSecond?: boolean | string;
}

const props = withDefaults(defineProps<Props>(), {
  iconClass: "p-[5px] rounded-full bg-gradient-to-r from-[#6E1AB8] via-[#9A2BFF] to-[#BB23FB] w-[92px] h-[92px]",
  iconSrc: '/svg/organizer/dashboard/avatar.svg',
  mainClass: 'flex flex-col items-center space-y-4',
  isIcon: true,
  text: "irfanalee_721",
  textClass: 'font-rajdhani font-bold text-[20px]',
  secondText: 'Elite Player',
  secondTextClass: 'text-white text-rajdhani text-[16px] font-medium',
  secondaryClass: 'flex flex-col items-center space-y-2',
  isSecond: false,
  animationEnabled: true,
  iconAnimationEnabled: true,
});
</script>
