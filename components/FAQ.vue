<script lang="ts" setup>
  export type FAQ = {
    index: string;
    question: string;
    answer: string;
  };
  defineProps<{
    faq: FAQ;
  }>();

  const { showAnswer, toggleAnswer } = useFAQ();

  function useFAQ() {
    const showAnswer = ref(false);

    function toggleAnswer() {
      showAnswer.value = !showAnswer.value;
    }
    return { showAnswer, toggleAnswer };
  }
</script>

<template>
  <div
    class="flex gap-5 items-start p-4 sm:p-6 lg:p-8 border-r border-b border-t lg:border-t-0 border-grey-15"
  >
    <div
      class="p-4 md:p-5 rounded-lg bg-gradient1 text-lg md:text-xl lg:text-2xl xl:text-3xl"
      :class="{ 'text-green-50': showAnswer }"
    >
      {{ faq.index }}
    </div>
    <div class="flex flex-col gap-4 lg:gap-10 grow">
      <div class="flex justify-between">
        <h3
          class="text-xl md:text-3xl font-semibold"
          :class="{ 'text-green-70': showAnswer }"
        >
          {{ faq.question }}
        </h3>
        <button v-if="showAnswer" @click="toggleAnswer"><Close /></button>
        <button v-else @click="toggleAnswer"><Plus /></button>
      </div>
      <p class="text-grey-90 text-sm md:text-lg" v-show="showAnswer">
        {{ faq.answer }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
