<template>
  <div class="hamburger">
    <font-awesome-icon icon="fa-solid fa-bars" class="icon" />
  </div>
</template>

<script>
export default {
  name: 'SidebarHamburger',
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';
.hamburger {
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    color: $white-3;
    font-size: 30px;
  }
}
</style>
