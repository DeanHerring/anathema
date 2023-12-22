<template>
  <div class="keno__history">
    <history-list></history-list>
  </div>
</template>

<script>
import HistoryList from './HistoryList.vue';

export default {
  name: 'KenoHistory',
  components: { HistoryList },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.keno__history {
  border-top: 1px solid $white-6;
  min-width: 0;
  padding: 20px;
}
</style>
