<template>
    <NuxtLink
      v-if="to"
      :to="to"
      :class="buttonClasses"
    >
      <div class="w-full ">
        <slot />
      </div>
    </NuxtLink>
  
    <a
      v-else-if="href"
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      :class="buttonClasses"
    >
      <div class="w-full">
        <slot />
      </div>
    </a>
  
    <button
      v-else
      :class="buttonClasses"
      :disabled="disabled"
      class="relative group"
    >
      <div class="w-full">
        <slot />
      </div>
      <!-- Tooltip -->
      <div
        v-if="disabled && tooltip.text"
        class="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-coral text-white text-sm px-2 py-1 rounded shadow"
      >
        {{ tooltip.text }}
      </div>
    </button>
  </template>
  
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    to: {
      type: [String, Object],
      default: undefined
    },
    href: {
      type: String,
      default: undefined
    },
    variant: {
      type: String,
      default: 'white',
      validator: (value) => ['white', 'raspberry', 'purple', 'yellow', 'outlined', 'green','coral', 'orange'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: Object,
      default: () => ({
        text: '',
      })
    }
  })
  
  const buttonClasses = computed(() => [
    'inline-flex items-center justify-center rounded-full px-4 py-3 cursor-pointer',
    'min-w-[180px]',
    'text-sm sm:text-sm md:text-base font-bold text-wrap text-center ',
    'transition-all duration-[500ms] ease-in-out',
    'border border-transparent',
    {
      'bg-white text-purple hover:bg-yellow': props.variant === 'white' && !props.disabled,
      'bg-raspberry text-white hover:bg-transparent hover:text-raspberry hover:border-[1px] hover:border-raspberry': props.variant === 'raspberry' && !props.disabled,
      'bg-coral text-white hover:bg-transparent hover:text-coral hover:border-[1px] hover:border-coral': props.variant === 'coral' && !props.disabled,
      'bg-purple text-white hover:bg-transparent hover:text-purple hover:border-[1px] hover:border-purple': props.variant === 'purple' && !props.disabled,
      'bg-yellow text-purple hover:bg-transparent hover:text-purple hover:border-[1px] hover:border-purple': props.variant === 'yellow' && !props.disabled,
      'bg-nightsky text-white hover:bg-transparent hover:text-nightsky hover:border-[1px] hover:border-nightsky': props.variant === 'nightsky' && !props.disabled,
      'bg-transparent text-coral border border-raspberry hover:bg-white hover:text-purple': props.variant === 'outlined' && !props.disabled,
      'bg-orange text-white hover:bg-transparent hover:text-orange hover:border-[1px] hover:border-orange': props.variant === 'orange' && !props.disabled,
      'bg-green text-white hover:bg-transparent hover:text-green hover:border-[1px] hover:border-green': props.variant === 'green' && !props.disabled,
    },
    props.disabled && 'bg-yellow'
  ])
  </script>
  