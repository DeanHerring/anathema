<template>
  <main class="app">
    <TheSidebar />
    <TheContent />
  </main>
</template>

<script>
import TheSidebar from '@/components/General/Sidebar/TheSidebar.vue';
import TheContent from '@/components/General/TheContent.vue';

export default {
  name: 'App',
  components: {
    TheSidebar,
    TheContent,
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  display: flex;
  min-height: 100vh;
}
</style>
