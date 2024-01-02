<template>
  <div class="swiper-next">
    <font-awesome-icon icon="fa-solid fa-angle-right" class="icon" />
  </div>
</template>

<script>
export default {
  name: 'KenoStepNext',
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';
.swiper-next {
  border-radius: 5px;
  background-color: $white-10;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  margin-left: 10px;
}
</style>
