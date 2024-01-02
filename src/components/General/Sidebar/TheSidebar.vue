<template>
  <aside class="sidebar">
    <SidebarHamburger />
    <SidebarGames />
  </aside>
</template>

<script>
import SidebarHamburger from './SidebarHamburger.vue';
import SidebarGames from './SidebarGames.vue';

export default {
  name: 'TheSidebar',
  components: {
    SidebarHamburger,
    SidebarGames,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.sidebar {
  min-width: 68px;
  background-color: $white-1;
  min-height: 100vh;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
}
</style>
