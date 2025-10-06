<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :ui="{
      container: 'px-0 !pt-0 relative w-full h-[400px] overflow-hidden'
    }"
  >
  <UMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }"
    >
      <NuxtImg
        v-for="(img, index) in page.hero.images.slice(0, 3)"
        :key="index"
        :src="img.src"
        :alt="img.alt"
        width="460"
        height="258"
        class="aspect-video border border-default rounded-lg bg-white object-cover"
      />
    </UMarquee>

    <UMarquee
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[480px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }"
    >
      <NuxtImg
        v-for="(img, index) in page.hero.images.slice(3, 6)"
        :key="index"
        :src="img.src"
        :alt="img.alt"
        width="460"
        height="258"
        class="aspect-video border border-default rounded-lg bg-white object-cover"
      />
    </UMarquee>

    <UMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[300px] left-[1020px] h-[1060px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }"
    >
      <NuxtImg
        v-for="(img, index) in page.hero.images.slice(6, 9)"
        :key="index"
        :src="img.src"
        :alt="img.alt"
        width="460"
        height="258"
        class="aspect-video border border-default rounded-lg bg-white object-cover"
      />
    </UMarquee>
  </UPageSection>
</template>