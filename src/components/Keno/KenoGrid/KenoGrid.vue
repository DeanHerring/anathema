<template>
  <div class="keno__grid">
    <grid-list></grid-list>
  </div>
</template>

<script>
import GridList from './GridList.vue';

export default {
  name: 'KenoGrid',
  components: { GridList },
};
</script>

<style lang="scss" scoped>
.keno__grid {
  padding: 20px;
}
</style>
