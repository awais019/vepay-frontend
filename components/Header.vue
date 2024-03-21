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

  const { openMenu, toggleMenu } = useMenu();

  function useMenu() {
    const openMenu = ref(false);

    function toggleMenu() {
      openMenu.value = !openMenu.value;
    }

    return {
      openMenu: computed(() => openMenu.value),
      toggleMenu,
    };
  }
</script>

<template>
  <header class="py-5 flex items-center justify-between">
    <NuxtLink to="/">
      <img
        src="~/assets/images/vepay-logo.png
      "
        alt="vepay-logo"
      />
    </NuxtLink>
    <nav
      class="sm:gap-4 lg:gap-8 text-lg font-medium sm:items-center hidden sm:flex"
    >
      <NuxtLink v-for="(link, index) in links" :key="index" :to="link.path">
        {{ link.name }}
      </NuxtLink>
    </nav>
    <button
      class="bg-green-50 rounded-lg py-2 px-4 lg:py-4 lg:px-6 text-grey-15 text-lg font-medium hidden sm:block"
    >
      Download App
    </button>
    <button
      class="sm:hidden p-2 bg-grey-15 rounded-md"
      v-if="!openMenu"
      @click="toggleMenu"
    >
      <Hamburger />
    </button>
    <button
      class="sm:hidden p-2 bg-grey-15 rounded-md flex items-center justify-center"
      v-else
      @click="toggleMenu"
    >
      <Close />
    </button>
    <MobileMenu v-if="openMenu" :links="links" />
  </header>
</template>

<style scoped></style>
