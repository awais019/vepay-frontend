<script lang="ts" setup>
  defineProps<{
    links: { name: string; path: string }[];
  }>();
</script>

<template>
  <div class="sm:hidden absolute top-24 py-6 px-4 bg-grey-10 inset-x-0">
    <nav class="text-lg font-medium flex flex-col gap-4">
      <NuxtLink v-for="(link, index) in links" :key="index" :to="link.path">
        {{ link.name }}
      </NuxtLink>
    </nav>
    <a
      class="bg-green-50 rounded-lg py-2 px-4 lg:py-4 lg:px-6 text-grey-15 text-lg font-medium mt-4 inline-block"
      href="https://f005.backblazeb2.com/file/test1021/Vepay.apk"
    >
      Download App
    </a>
  </div>
</template>

<style scoped></style>
