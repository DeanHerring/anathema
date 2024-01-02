<template>
  <div class="keno__game">
    <KenoGrid />
    <KenoHistory />
  </div>
</template>

<script>
import KenoGrid from './KenoGrid.vue';
import KenoHistory from './KenoHistory.vue';

export default {
  name: 'KenoGame',
  components: {
    KenoGrid,
    KenoHistory,
  },
};
</script>

<style lang="scss" scoped>
.keno__game {
  flex-grow: 1;
  border-radius: 0 10px 10px 0;
}
</style>
