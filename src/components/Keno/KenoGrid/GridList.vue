<template>
  <ul class="keno__grid-list">
    <grid-item v-for="n in 40" :id="n"></grid-item>
  </ul>
</template>

<script>
import GridItem from './GridItem.vue';

export default {
  name: 'GridList',
  components: { GridItem },
};
</script>

<style lang="scss" scoped>
.keno__grid-list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 5px;
}
</style>
