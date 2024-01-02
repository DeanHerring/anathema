<template>
  <div class="keno__history">
    <div class="swiper-container">
      <KenoStepPrevious />
      <KenoStepsSlider />
      <KenoStepNext />
    </div>
  </div>
</template>

<script>
import KenoStepPrevious from './KenoStepPrevious.vue';
import KenoStepNext from './KenoStepNext.vue';
import KenoStepsSlider from './KenoStepsSlider.vue';

import { Swiper } from 'swiper/vue';

export default {
  name: 'KenoHistory',
  components: {
    KenoStepPrevious,
    KenoStepNext,
    KenoStepsSlider,
    Swiper,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.keno__history {
  border-top: 1px solid $white-6;
  min-width: 0;
  padding: 20px;
  .swiper-container {
    display: flex;
    .swiper {
      display: grid;
      .swiper-wrapper {
        min-width: 0;
      }
    }
  }
}
</style>
