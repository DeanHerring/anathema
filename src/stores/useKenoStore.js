import { defineStore } from 'pinia';

export const useKenoStore = defineStore('keno', {
  state: () => ({
    btcAmount: 0,
    activeCells: [],
    userId: undefined,
  }),
  getters: {},
  actions: {
    setBet(amount) {
      this.btcAmount = amount;
    },
    setActiveCells(activeCells) {
      this.activeCells = activeCells;
    },
    setPlayer(userId) {
      this.userId = userId;
    },
  },
});
