<template>
  <div class="content">
    <TheHeader />

    <BaseContainer>
      <router-view></router-view>
    </BaseContainer>
  </div>
</template>

<script>
import TheHeader from './Header/TheHeader.vue';
import TheSidebar from './Sidebar/TheSidebar.vue';

import BaseContainer from './BaseContainer.vue';

export default {
  name: 'TheContent',
  components: {
    TheHeader,
    TheSidebar,
    BaseContainer,
  },
};
</script>

<style lang="scss" scoped>
.content {
  flex-grow: 1;
}
</style>
