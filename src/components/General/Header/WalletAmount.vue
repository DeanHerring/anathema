<template>
  <div class="wallet__amount">
    <h1>{{ this.$formatNumber(amount) }}</h1>
  </div>
</template>

<script>
export default {
  name: 'WalletAmount',
  props: {
    amount: Number,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.wallet__amount {
  h1 {
    font: 600 16px 'Gilroy';
    color: $black-1;
  }
}
</style>
