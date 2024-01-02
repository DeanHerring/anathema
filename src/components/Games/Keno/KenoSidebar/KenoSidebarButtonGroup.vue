<template>
  <div class="keno__sidebar-buttons">
    <button>Auto Pick</button>
    <button>Clear Table</button>
    <button @click="takeBet">Play $9 188.99</button>
  </div>
</template>

<script>
export default {
  name: 'KenoSidebarButtonGroup',
  methods: {
    takeBet() {
      console.log('Take a bet');
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
