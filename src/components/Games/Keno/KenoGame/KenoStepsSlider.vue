<template>
  <swiper-container
    class="swiper"
    slides-per-view="5"
    space-between="10"
    :navigation="{
      prevEl: '.swiper-prev',
      nextEl: '.swiper-next',
    }"
    :breakpoints="{
      375: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 5,
      },
    }"
  >
    <KenoStep v-for="step in steps" :key="step.id" :step="step" />
  </swiper-container>
</template>

<script>
import KenoStep from './KenoStep.vue';

export default {
  name: 'KenoStepsSlider',
  components: {
    KenoStep,
  },
  data() {
    return {
      steps: [
        { id: 1, multiplier: 0.0 },
        { id: 2, multiplier: 0.0 },
        { id: 3, multiplier: 0.0 },
        { id: 4, multiplier: 0.0 },
        { id: 5, multiplier: 3.5 },
        { id: 6, multiplier: 8.0 },
        { id: 7, multiplier: 13.0 },
        { id: 8, multiplier: 63.0 },
        { id: 9, multiplier: 500.0 },
        { id: 10, multiplier: 800.0 },
        { id: 11, multiplier: 1000.0 },
      ],
    };
  },
};
</script>
