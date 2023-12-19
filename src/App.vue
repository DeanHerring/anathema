<template>
  <section class="content">
    <Sidebar />

    <div class="hero">
      <Header />
      <Container>
        <Keno />
      </Container>
    </div>
  </section>
</template>

<script>
import Header from '@/components/General/Header/Header.vue';
import Sidebar from '@/components/General/Sidebar/Sidebar.vue';
import Container from '@/components/General/Container/Container.vue';
import Keno from '@/components/Keno/Keno.vue';

export default {
  name: 'App',
  components: { Header, Sidebar, Container, Keno },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  display: flex;
  min-height: 100vh;
  .hero {
    flex-grow: 1;
  }
}
</style>
