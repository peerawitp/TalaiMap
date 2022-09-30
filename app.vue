<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const { setMeta } = useCustomMeta()
setMeta('Talai Map')
</script>

<template>
  <Html lang="en-US" data-theme="emerald">
    <NuxtPage class="z-10" />
  </Html>
</template>
