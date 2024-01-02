<template>
  <li class="wallet-dropdown__item" @click="setCurrentWallet(wallet)">
    <h1>
      {{ this.$formatNumber(wallet.amount) }}
    </h1>
    <img :src="getTickerImage(wallet.ticker)" :alt="wallet.ticker" />
  </li>
</template>

<script>
export default {
  name: 'WalletDropdownItem',
  inject: ['getTickerImage', 'setCurrentWallet'],
  props: {
    wallet: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.wallet-dropdown__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: $white-5;
  }
  &.active {
    background-color: red;
  }
  h1 {
    font: 600 14px 'Gilroy';
    color: $white-4;
  }
}
</style>
