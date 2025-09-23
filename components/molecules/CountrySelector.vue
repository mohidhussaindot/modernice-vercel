<template>
  <div class="relative country-selector" ref="selectorRef">
    <div
      @click="toggleCountryDropdown"
      class="w-full text-white placeholder-gray-400 px-3 sm:px-4 py-2 sm:py-3 rounded-md focus:outline-none flex justify-between items-center cursor-pointer"
      ref="triggerRef"
      :class="bgClass"
    >
      <span v-if="modelValue">{{ getCountryName(modelValue) }}</span>
      <span v-else class="text-gray-400">Select country</span>
      <Icon
        name="mdi:chevron-down"
        class="text-gray-400"
        :class="{ 'transform rotate-180': showCountryDropdown }"
      />
    </div>

    <Transition name="dropdown">
      <div
        v-show="showCountryDropdown"
        class="absolute left-0 right-0 mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto country-dropdown z-[100]"
        :class="(dropdownPosition === 'top' ? 'bottom-full' : 'top-full', bgClass)"
        ref="dropdownRef"
      >
        <div class="p-3 sticky top-0" :class="bgClass">
          <input
            type="text"
            v-model="countrySearch"
            placeholder="Search country..."
            :class="bgClass"
            class="w-full border-[var(--yellowish)] border border-dashed text-white placeholder-gray-400 px-3 py-2 rounded-md focus:outline-none"
            @click.stop
          />
        </div>
        <div class="py-1">
          <div
            v-for="country in filteredCountries"
            :key="country.code"
            @click.stop="selectCountry(country.code)"
            class="px-3 py-2 hover:bg-gray-700 cursor-pointer flex items-center"
          >
            <span>{{ country.name }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

  const props = defineProps({
    modelValue: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    bgClass: {
      type: String,
      default: 'bg-[#292929]'
    }
  })

  const emit = defineEmits(['update:modelValue'])

  const countries = ref([
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Brunei', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'East Timor', code: 'TL' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Greece', code: 'GR' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'North Korea', code: 'KP' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Laos', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia', code: 'FM' },
    { name: 'Moldova', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestine', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russia', code: 'RU' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Sudan', code: 'SS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syria', code: 'SY' },
    { name: 'Taiwan', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Vatican City', code: 'VA' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Vietnam', code: 'VN' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
  ])

  const showCountryDropdown = ref(false)
  const countrySearch = ref('')
  const selectorRef = ref(null)
  const triggerRef = ref(null)
  const dropdownRef = ref(null)
  const dropdownPosition = ref('bottom') // Default position (can be 'top' or 'bottom')

  const filteredCountries = computed(() => {
    if (!countrySearch.value) return countries.value
    return countries.value.filter(country =>
      country.name.toLowerCase().includes(countrySearch.value.toLowerCase())
    )
  })

  const toggleCountryDropdown = event => {
    event.stopPropagation()

    // Before showing dropdown, determine its position
    if (!showCountryDropdown.value) {
      // Calculate position only when opening the dropdown
      nextTick(() => calculateDropdownPosition())
    }

    showCountryDropdown.value = !showCountryDropdown.value
  }

  // Calculate if dropdown should open upward or downward
  const calculateDropdownPosition = () => {
    if (!triggerRef.value) return

    const triggerRect = triggerRef.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const spaceBelow = viewportHeight - triggerRect.bottom
    const spaceAbove = triggerRect.top
    const dropdownHeight = 300 // Approximate height of dropdown

    // If there's not enough space below but enough space above
    if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
      dropdownPosition.value = 'top'
    } else {
      dropdownPosition.value = 'bottom'
    }
  }

  const selectCountry = code => {
    emit('update:modelValue', code)
    showCountryDropdown.value = false
  }

  const getCountryName = code => {
    const country = countries.value.find(c => c.code === code)
    return country ? country.name : 'Select country'
  }

  // Improved outside click detection
  const closeDropdown = e => {
    if (!selectorRef.value) return

    // Don't close if clicking inside the selector component
    if (selectorRef.value.contains(e.target)) return

    showCountryDropdown.value = false
  }

  // Reset search when dropdown closes
  watch(showCountryDropdown, isOpen => {
    if (!isOpen) {
      countrySearch.value = ''
    }
  })

  onMounted(() => {
    // Use capture phase to ensure we get the event
    document.addEventListener('click', closeDropdown, true)

    // Add resize listener to recalculate position if window size changes
    window.addEventListener('resize', () => {
      if (showCountryDropdown.value) {
        calculateDropdownPosition()
      }
    })
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', closeDropdown, true)
    window.removeEventListener('resize', calculateDropdownPosition)
  })
</script>

<style scoped>
  .country-dropdown {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid #4b5563;
  }

  /* Positioning for dropdown */
  .country-dropdown.top-full {
    margin-top: 4px;
  }

  .country-dropdown.bottom-full {
    margin-bottom: 4px;
  }

  /* Animation for dropdown */
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition:
      opacity 0.2s,
      transform 0.2s;
  }

  .dropdown-enter-from,
  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  /* Make sure the dropdown is above other elements */
  .country-selector {
    position: relative;
    z-index: 50;
  }
</style>
