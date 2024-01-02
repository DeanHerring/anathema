<template>
  <div class="keno">
    <KenoSidebar />
    <KenoGame />
  </div>
</template>

<script>
import KenoSidebar from './KenoSidebar/KenoSidebar.vue';
import KenoGame from './KenoGame/KenoGame.vue';

export default {
  name: 'Keno',
  components: { KenoSidebar, KenoGame },
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
  margin: 25px auto;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1.33fr;
  }
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
}
</style>
