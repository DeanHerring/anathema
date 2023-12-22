<template>
  <div class="swiper-container">
    <div class="swiper-prev">
      <font-awesome-icon icon="fa-solid fa-angle-left" class="icon" />
    </div>

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
      <history-item v-for="step in steps" :key="step.id" :step="step"></history-item>
    </swiper-container>

    <div class="swiper-next">
      <font-awesome-icon icon="fa-solid fa-angle-right" class="icon" />
    </div>
  </div>
</template>

<script>
import HistoryItem from './HistoryItem.vue';
import { Swiper } from 'swiper/vue';

export default {
  name: 'HistoryList',
  components: { HistoryItem, Swiper },
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

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.swiper-container {
  display: flex;
  .swiper-prev,
  .swiper-next {
    border-radius: 5px;
    background-color: $white-10;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
  }
  .swiper-prev {
    margin-right: 10px;
  }
  .swiper-next {
    margin-left: 10px;
  }
  .swiper {
    display: grid;
    .swiper-wrapper {
      min-width: 0;
    }
  }
}
</style>
