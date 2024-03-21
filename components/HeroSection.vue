<script lang="ts" setup></script>

<template>
  <section class="py-20 md:py24 xl:py-28">
    <h1
      class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-center"
    >
      VePay
    </h1>
    <h2
      class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-center"
    >
      Transforming Product Authenticity
    </h2>
    <p
      class="my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12 2xl:my-14 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-center"
    >
      Empowering Consumers, Resellers, and Manufacturers with Blockchain-Enabled
      Verification and Seamless Transactions
    </p>
    <div class="my-7 flex flex-col justify-center items-center gap-7 md:hidden">
      <div
        class="py-2 px-8 rounded-lg border border-grey-15 bg-grey-12 bg-opacity-20 backdrop-blur-sm"
      >
        <div
          class="py-3 px-10 border border-grey-15 rounded-xl text-xl bg-grey-12 bg-opacity-20 backdrop-blur-sm"
        >
          For
        </div>
      </div>
      <div class="py-3 px-4 rounded-lg bg-grey-1 text-sm">Consumers</div>
      <div class="py-3 px-4 rounded-lg bg-grey-1 text-sm">Resellers</div>
      <div class="py-3 px-4 rounded-lg bg-grey-1 text-sm">Manufacturers</div>
      <div class="py-3 px-4 rounded-lg bg-grey-1 text-sm">Social Good</div>
    </div>
    <div
      class="py-4 my-7 px-8 max-w-fit mx-auto rounded-lg border border-grey-15 items-center gap-2 bg-grey-12 bg-opacity-20 backdrop-blur-sm hidden md:flex"
    >
      <div class="text-2xl text-grey-60">For</div>
      <div class="py-3 px-4 rounded-lg text-xl lg:text-2xl bg-grey-15">
        Consumers
      </div>
      <span class="text-grey-60 self-end">,</span>
      <div class="py-3 px-4 rounded-lg text-xl lg:text-2xl bg-grey-15">
        Resellers
      </div>
      <div class="py-3 px-4 rounded-lg text-xl lg:text-2xl bg-grey-15">
        Manufacturers
      </div>
      <span class="text-grey-60 text-2xl"> and </span>
      <div class="py-3 px-4 rounded-lg text-xl lg:text-2xl bg-grey-15">
        Social Good
      </div>
    </div>
    <div class="flex items-center justify-center gap-4">
      <NuxtLink
        to="/about"
        class="border border-grey-20 bg-grey-12 bg-opacity-20 backdrop-blur-sm py-3 px-5 md:py-5 md:px-7 rounded-lg text-sm md:text-lg font-medium"
        >About</NuxtLink
      >
      <NuxtLink
        to="/contact"
        class="py-3 px-5 bg-green-50 rounded-lg text-grey-15 text-sm font-medium md:py-5 md:px-7 md:text-lg"
        >Contact Us</NuxtLink
      >
    </div>
  </section>
</template>

<style scoped></style>
