<template>
  <div class="keno__sidebar-buttons">
    <button @click="autoPick">Auto Pick</button>
    <button @click="reset">Clear Table</button>
    <button @click="play">Play $76678</button>
  </div>
</template>

<script>
import { Config } from '@/config/config.js';
import { useKenoStore } from '@/stores/useKenoStore.js';

import sampleSize from 'lodash.sampleSize';
import range from 'lodash.range';

export default {
  name: 'KenoSidebarButtonGroup',
  data() {
    return {
      userId: Config.USER_ID,
    };
  },
  methods: {
    play() {
      const store = useKenoStore();

      store.setPlayer(this.userId);

      const { btcAmount, activeCells, userId } = store;

      // Час подумати над бекендом
    },
    autoPick() {
      const uniqueCells = sampleSize(range(40), 10);

      this.$emitter.emit('auto-pick', uniqueCells);
    },
    reset() {
      this.$emitter.emit('reset');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.keno__sidebar-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  button {
    padding: 10px 0;
    border-radius: 3px;
    background-color: $white-5;
    border: 0;
    font: 600 15px 'Gilroy';
    color: $purpure-1;
    cursor: pointer;
    &:last-child {
      grid-column: span 2;
      font: 700 16px 'Gilroy';
      background-color: $yellow-2;
      color: $white-1;
      transition: all 0.1s;
      &:hover {
        background-color: $yellow-1;
      }
    }
  }
}
</style>
