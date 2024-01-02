<template>
  <div class="swiper-prev">
    <font-awesome-icon icon="fa-solid fa-angle-left" class="icon" />
  </div>
</template>

<script>
export default {
  name: 'KenoStepPrevious',
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';
.swiper-prev {
  border-radius: 5px;
  background-color: $white-10;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  margin-right: 10px;
}
</style>
