<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

import IconLightMode from '~icons/feather/sun'
import IconDarkMode from '~icons/feather/moon'

const route = useRoute()
const router = useRouter()
const isDark = useDark()
const toggleDark = useToggle(isDark)

const navBlobClass = computed(() => {
  switch (route.name) {
    case 'index':
      return 'bg-red-200 dark:bg-red-500 left-2'
  }
})

const { setMeta } = useCustomMeta()
setMeta('Talai Map')
</script>

<template>
  <Html lang="en-US">
    <div
      class="-z-10 w-full min-h-screen flex justify-center bg-white dark:bg-dark-900 text-dark-200 dark:text-light-900 transition duration-300"
    >
      <div
        class="max-w-screen-lg w-full relative p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between"
      >
        <div class="z-10 w-full flex justify-end items-center mb-6 md:mb-12">
          <nav
            class="relative flex space-x-4 md:space-x-6 items-center text-base md:text-lg font-space"
          >
            <NuxtLink to="/">Home</NuxtLink>

            <Blob
              :class="navBlobClass"
              class="top-0 !ml-0 !w-8 !h-8 !blur-md !animate-none"
            ></Blob>
          </nav>
          <button
            class="mt-2 ml-4 text-lg md:text-2xl"
            aria-label="Toggle Dark mode"
            @click="toggleDark()"
          >
            <transition name="fade" mode="out-in">
              <IconLightMode v-if="isDark"></IconLightMode>
              <IconDarkMode v-else></IconDarkMode>
            </transition>
          </button>
        </div>

        <NuxtPage class="z-10" />
      </div>
    </div>
  </Html>
</template>
