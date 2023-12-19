<template>
  <div class="keno">
    <keno-sidebar></keno-sidebar>
    <div class="keno__game">
      <keno-grid></keno-grid>
      <keno-history></keno-history>
    </div>
  </div>
</template>

<script>
import KenoSidebar from './KenoSidebar/KenoSidebar.vue';
import KenoGrid from './KenoGrid/KenoGrid.vue';
import KenoHistory from './KenoHistory/KenoHistory.vue';

export default {
  name: 'Keno',
  components: { KenoSidebar, KenoGrid, KenoHistory },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.keno {
  width: 100%;
  background-color: $white-1;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1.33fr;
  }
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
  &__game {
    flex-grow: 1;
    border-radius: 0 10px 10px 0;
  }
}
</style>
