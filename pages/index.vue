<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})

const { setMeta } = useCustomMeta()
setMeta('Talai Map')
</script>

<template>
  <div class="wrapper">
    <MenuBar />
    <Map />
  </div>
</template>
