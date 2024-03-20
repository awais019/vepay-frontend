<script lang="ts" setup>
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Why Us?",
      path: "/why-us",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
</script>

<template>
  <header class="py-5 flex items-center justify-between">
    <NuxtLink to="/">
      <span class="text-2xl font-extrabold">VePay</span>
    </NuxtLink>
    <nav class="flex gap-8 text-lg font-medium items-center">
      <NuxtLink v-for="(link, index) in links" :key="index" :to="link.path">
        {{ link.name }}
      </NuxtLink>
    </nav>
    <button
      class="bg-green-50 rounded-lg py-4 px-6 text-grey-15 text-lg font-medium"
    >
      Download App
    </button>
  </header>
</template>

<style scoped></style>
