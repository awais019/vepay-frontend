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
  <footer class="py-7">
    <div class="flex flex-col md:flex-row md:justify-between gap-7">
      <img
        src="~/assets/images/vepay-logo.png
      "
        alt="vepay-logo"
      />
      <div class="h-[1px] bg-grey-15"></div>
      <nav
        class="gap-4 lg:gap-8 text-lg font-medium flex items-center self-center"
      >
        <NuxtLink v-for="(link, index) in links" :key="index" :to="link.path">
          {{ link.name }}
        </NuxtLink>
      </nav>
      <div
        class="py-4 px-5 rounded-lg border border-grey-15 flex flex-col md:flex-row gap-4 items-center"
      >
        <h4 class="text-grey-90 font-semibold">Stay Connected</h4>
        <div class="flex gap-2">
          <div class="rounded-lg bg-gradient1 border border-grey-12 p-4">
            <Facebook />
          </div>
          <div class="rounded-lg bg-gradient1 border border-grey-12 p-4">
            <Twitter />
          </div>
          <div class="rounded-lg bg-gradient1 border border-grey-12 p-4">
            <LinkedIn />
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex items-center justify-between lg:mt-12">
      <div class="text-grey-90 flex flex-col md:flex-row md:gap-7">
        <div
          class="text-lg flex gap-2 items-center justify-center py-5 border-b border-b-grey-15"
        >
          <Email /> vepaysolutions@gmail.com
        </div>
        <div
          class="text-lg flex gap-2 items-center justify-center py-5 border-b border-b-grey-15"
        >
          <Phone /> +91 00000 00000
        </div>
        <div
          class="text-lg flex gap-2 items-center justify-center py-5 border-b border-b-grey-15"
        >
          <Marker /> Soonami Venturethon
        </div>
      </div>
      <p class="text-grey-60 text-center">
        &copy; 2024 VePay. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped></style>
