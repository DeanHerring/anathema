<template>
  <form class="keno__sidebar" @click.prevent>
    <KenoSidebarLogo />
    <KenoSidebarInput />
    <KenoSidebarButtonGroup />
    <KenoSidebarHash />
  </form>
</template>

<script>
import KenoSidebarLogo from './KenoSidebarLogo.vue';
import KenoSidebarInput from './KenoSidebarInput.vue';
import KenoSidebarButtonGroup from './KenoSidebarButtonGroup.vue';
import KenoSidebarHash from './KenoSidebarHash.vue';

export default {
  name: 'KenoSidebar',
  components: {
    KenoSidebarLogo,
    KenoSidebarInput,
    KenoSidebarButtonGroup,
    KenoSidebarHash,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.keno__sidebar {
  border-radius: 10px 0 0 10px;
  padding: 20px;
  border-right: 1px solid $white-6;
  position: relative;
}
</style>
