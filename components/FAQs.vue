<script lang="ts" setup>
  const faqs = [
    {
      index: "01",
      question: "What is VePay?",
      answer:
        "VePay is a cutting-edge platform leveraging blockchain technology, artificial intelligence (AI), and the Internet of Things (IoT) to ensure product authenticity, streamline payment processes, and manage the value chain effectively for consumers, resellers, and manufacturers.",
    },
    {
      index: "02",
      question: "How does VePay combat counterfeit products?",
      answer:
        "VePay is a cutting-edge platform leveraging blockchain technology, artificial intelligence (AI), and the Internet of Things (IoT) to ensure product authenticity, streamline payment processes, and manage the value chain effectively for consumers, resellers, and manufacturers.",
    },
    {
      index: "03",
      question: "Is VePay easy to integrate with existing systems?",
      answer:
        "VePay is a cutting-edge platform leveraging blockchain technology, artificial intelligence (AI), and the Internet of Things (IoT) to ensure product authenticity, streamline payment processes, and manage the value chain effectively for consumers, resellers, and manufacturers.",
    },
    {
      index: "04",
      question: "How can I verify the authenticity of products with VePay?",
      answer:
        "VePay is a cutting-edge platform leveraging blockchain technology, artificial intelligence (AI), and the Internet of Things (IoT) to ensure product authenticity, streamline payment processes, and manage the value chain effectively for consumers, resellers, and manufacturers.",
    },
    {
      index: "05",
      question: "Is the VePay app free to download and use?",
      answer:
        "VePay is a cutting-edge platform leveraging blockchain technology, artificial intelligence (AI), and the Internet of Things (IoT) to ensure product authenticity, streamline payment processes, and manage the value chain effectively for consumers, resellers, and manufacturers.",
    },
    {
      index: "06",
      question: "How does VePay benefit resellers?",
      answer:
        "VePay is a cutting-edge platform leveraging blockchain technology, artificial intelligence (AI), and the Internet of Things (IoT) to ensure product authenticity, streamline payment processes, and manage the value chain effectively for consumers, resellers, and manufacturers.",
    },
    {
      index: "07",
      question: "Can VePay integrate with online and brick-and-mortar stores?",
      answer:
        "VePay is a cutting-edge platform leveraging blockchain technology, artificial intelligence (AI), and the Internet of Things (IoT) to ensure product authenticity, streamline payment processes, and manage the value chain effectively for consumers, resellers, and manufacturers.",
    },
    {
      index: "08",
      question:
        "How can manufacturers ensure their products are protected with VePay?",
      answer:
        "VePay is a cutting-edge platform leveraging blockchain technology, artificial intelligence (AI), and the Internet of Things (IoT) to ensure product authenticity, streamline payment processes, and manage the value chain effectively for consumers, resellers, and manufacturers.",
    },
  ];
</script>

<template>
  <section class="mt-6 border border-grey-15">
    <div class="p-8 sm:p-12 md:p-16 lg:p-20 xl:py-24 2xl:py-28">
      <h2 class="text-3xl md:text-5xl font-semibold text-center">
        Frequently Asked Questions
      </h2>
      <p class="text-sm md:text-lg text-center">
        Still you have any questions? Contact our Team
      </p>
    </div>
    <div
      class="my-6 sm:my-8 md:my-10 lg:my-12 xl:my-16 2xl:my-20 border-t border-grey-15 grid lg:grid-cols-2"
    >
      <FAQ v-for="(faq, index) in faqs" :key="index" :faq="faq" />
    </div>
  </section>
</template>

<style scoped></style>
