<template>
  <nav class="navbar">
    <header class="header">
      <h3>Games</h3>
    </header>

    <ul class="list">
      <SidebarGame v-for="game in games" :key="game.id" :name="game.name" :url="game.url" />
    </ul>
  </nav>
</template>

<script>
import SidebarGame from './SidebarGame.vue';

export default {
  name: 'SidebarGames',
  components: {
    SidebarGame,
  },
  data() {
    return {
      games: [
        {
          id: 1,
          name: 'Keno',
          url: '/',
        },
        {
          id: 2,
          name: 'Mines',
          url: '/games/mines',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';
.navbar {
  margin-top: 15px;
  .header {
    h3 {
      font: 600 14px 'Gilroy';
      color: $white-3;
      text-align: center;
    }
  }
  .list {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
