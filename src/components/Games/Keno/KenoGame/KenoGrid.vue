<template>
  <div class="keno__grid">
    <ul class="keno__grid-list">
      <KenoGridCell
        v-for="cell in cells"
        :key="cell.id"
        :id="cell.id"
        :status="cell.status"
        @click="setCell(cell.id - 1)"
      />
    </ul>
  </div>
</template>

<script>
import { useKenoStore } from '@/stores/useKenoStore.js';
import KenoGridCell from './KenoGridCell.vue';

export default {
  name: 'KenoGrid',
  components: {
    KenoGridCell,
  },
  mounted() {
    this.$emitter.on('auto-pick', (uniqueCells) => this.autoPick(uniqueCells));
    this.$emitter.on('reset', () => this.reset());
  },
  updated() {
    const store = useKenoStore();

    store.setActiveCells(this.getActiveCells());
  },
  data() {
    return {
      cells: [
        { id: 1, status: 0 },
        { id: 2, status: 0 },
        { id: 3, status: 0 },
        { id: 4, status: 0 },
        { id: 5, status: 0 },
        { id: 6, status: 0 },
        { id: 7, status: 0 },
        { id: 8, status: 0 },
        { id: 9, status: 0 },
        { id: 10, status: 0 },
        { id: 11, status: 0 },
        { id: 12, status: 0 },
        { id: 13, status: 0 },
        { id: 14, status: 0 },
        { id: 15, status: 0 },
        { id: 16, status: 0 },
        { id: 17, status: 0 },
        { id: 18, status: 0 },
        { id: 19, status: 0 },
        { id: 20, status: 0 },
        { id: 21, status: 0 },
        { id: 22, status: 0 },
        { id: 23, status: 0 },
        { id: 24, status: 0 },
        { id: 25, status: 0 },
        { id: 26, status: 0 },
        { id: 27, status: 0 },
        { id: 28, status: 0 },
        { id: 29, status: 0 },
        { id: 30, status: 0 },
        { id: 31, status: 0 },
        { id: 32, status: 0 },
        { id: 33, status: 0 },
        { id: 34, status: 0 },
        { id: 35, status: 0 },
        { id: 36, status: 0 },
        { id: 37, status: 0 },
        { id: 38, status: 0 },
        { id: 39, status: 0 },
        { id: 40, status: 0 },
      ],
    };
  },
  methods: {
    reset() {
      this.cells.forEach((cell) => (cell.status = 0));
    },
    autoPick(uniqueCells) {
      this.reset();

      uniqueCells.forEach((cell) => {
        this.cells[cell].status = 1;
      });
    },
    setCell(id) {
      this.getActiveCells().length < 10 && this.cells[id].status !== 1
        ? (this.cells[id].status = 1)
        : (this.cells[id].status = 0);
    },
    getActiveCells() {
      return this.cells.filter((cell) => cell.status === 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.keno__grid {
  padding: 20px;
  &-list {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 5px;
  }
}
</style>
