<template>
  <aside class="keno__sidebar">
    <Logo />
    <Amount />
    <Actions />
    <Hash />
  </aside>
</template>

<script>
import Logo from './Logo.vue';
import Amount from './Amount.vue';
import Actions from './Actions.vue';
import Hash from './Hash.vue';

export default {
  name: 'KenoSidebar',
  components: { Logo, Amount, Actions, Hash },
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
