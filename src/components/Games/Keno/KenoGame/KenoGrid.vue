<template>
  <div class="keno__grid">
    <ul class="keno__grid-list">
      <KenoGridCell v-for="n in 40" :key="n" :id="n" />
    </ul>
  </div>
</template>

<script>
import KenoGridCell from './KenoGridCell.vue';

export default {
  name: 'KenoGrid',
  components: {
    KenoGridCell,
  },
};
</script>

<style lang="scss" scoped>
.keno__grid {
  padding: 20px;
  &-list {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 5px;
  }
}
</style>
