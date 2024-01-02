<template>
  <header class="keno__sidebar-header">
    <div class="game-icon">
      <font-awesome-icon icon="fa-solid fa-border-all" class="icon" />
    </div>
    <h1>Keno</h1>
  </header>
</template>

<script>
export default {
  name: 'KenoSidebarLogo',
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.keno__sidebar-header {
  display: flex;
  align-items: center;
  .game-icon {
    width: 40px;
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    background-color: $white-5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font: 700 20px 'Gilroy';
    color: $black-1;
    margin-left: 10px;
  }
}
</style>
