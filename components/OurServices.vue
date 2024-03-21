<script lang="ts" setup></script>

<template>
  <section class="py-12 border border-grey-15">
    <h2 class="text-3xl md:text-5xl font-semibold text-center">Our Products</h2>
    <div class="flex items-center justify-center flex-wrap">
      <div
        class="flex flex-col gap-10 items-start p-4 sm:p-8 md:p-12 lg:basis-1/3 border-r border-b lg:border-b-0 border-grey-15"
      >
        <div class="p-4 md:p-6 rounded-lg bg-gradient1"><Brush /></div>
        <div class="flex flex-col gap-5">
          <h3 class="text-3xl font-semibold">Scan, Verify, Pay & Go App</h3>
          <p class="text-grey-90 text-lg">
            This is a consumer app that is the best shopping companion. It help
            you verify if any product is genuine by either scanning barcode,
            QRcode or UniqueID. The app also allow you to add products to cart,
            and checkout using any available payment options from a given
            merchant.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col gap-10 items-start p-4 sm:p-8 md:p-12 lg:basis-1/3 border-r border-b lg:border-b-0 border-grey-15"
      >
        <div class="p-4 md:p-6 rounded-lg bg-gradient1"><Jigsaw /></div>
        <div class="flex flex-col gap-5">
          <h3 class="text-3xl font-semibold">Resellers' Platform</h3>
          <p class="text-grey-90 text-lg">
            The platform will help you verify , manage, order, pay and track
            stock. It offers end to end solutions from stock management, payment
            to sales monitoring.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col gap-10 items-start p-4 sm:p-8 md:p-12 lg:basis-1/3"
      >
        <div class="p-4 md:p-6 rounded-lg bg-gradient1"><Battery /></div>
        <div class="flex flex-col gap-5">
          <h3 class="text-3xl font-semibold">Manufacturer's Solutions</h3>
          <p class="text-grey-90 text-lg">
            The best way to capture, verify, manage and sell your products. We
            Ensure that your product can be authenticated anywhere along the
            supply chain that it is from your company. Our systems are easily
            and quickly interporable with your current systems.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
