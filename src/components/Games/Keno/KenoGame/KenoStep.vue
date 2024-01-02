<template>
  <swiper-slide class="swiper-slide">
    <div class="swiper-slide-content">
      <h3>Step {{ step.id }}</h3>
      <h2>x{{ step.multiplier.toFixed(2) }}</h2>
    </div>
  </swiper-slide>
</template>

<script>
import { SwiperSlide } from 'swiper/vue';

export default {
  name: 'KenoStep',
  props: {
    step: {
      id: Number,
      multiplier: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.swiper-slide-content {
  border-radius: 5px;
  background-color: $white-10;
  padding: 10px;
  h3,
  h2 {
    user-select: none;
  }
  h3 {
    font: 600 13px 'Gilroy';
    color: $white-4;
  }
  h2 {
    font: 600 15px 'Gilroy';
    color: $black-1;
  }
}
</style>
