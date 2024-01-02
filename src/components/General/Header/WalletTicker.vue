<template>
  <div class="wallet__ticker">
    <img :src="getTickerImage(this.ticker)" :alt="this.ticker" />

    <font-awesome-icon icon="fa-solid fa-sort-down" class="icon" v-if="!this.isShow" />
    <font-awesome-icon icon="fa-solid fa-sort-up" class="icon" v-if="this.isShow" />
  </div>
</template>

<script>
export default {
  name: 'WalletTicker',
  inject: ['getTickerImage'],
  props: {
    isShow: Boolean,
    ticker: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.wallet__ticker {
  display: flex;
  align-items: center;
  .icon {
    margin-left: 5px;
    color: $black-1;
  }
}
</style>
