<template>
  <div class="keno__history">
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
        <swiper-slide v-for="n in 10" :key="n" class="swiper-slide">
          <div class="swiper-slide-content">
            <h3>Step 1</h3>
            <h2>x0.00</h2>
          </div>
        </swiper-slide>
      </swiper-container>

      <div class="swiper-next">
        <font-awesome-icon icon="fa-solid fa-angle-right" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KenoHistory',
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
}

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
