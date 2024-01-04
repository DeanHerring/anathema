<template>
  <div class="keno__sidebar-amount">
    <header class="amount__header">
      <h3>Bet Amount</h3>
      <h3>${{ this.$formatNumber(this.amount * this.BTC_QUOT) }}</h3>
    </header>

    <div class="amount__input">
      <div class="amount__action">
        <button @click="this.min">Min</button>
        <button @click="this.divide">/2</button>
      </div>

      <input name="amount" :placeholder="this.USD_MIN_LIMIT" v-model.number="this.amount" />

      <div class="amount__action">
        <button @click="this.multiply">X2</button>
        <button @click="this.max">Max</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Config } from '@/config/config.js';
import { useKenoStore } from '@/stores/useKenoStore.js';

export default {
  name: 'KenoSidebarInput',
  updated() {
    const store = useKenoStore();

    store.setBet(this.amount);
  },
  data() {
    return {
      amount: 0,
      BTC_QUOT: Config.BTC_QUOT,
      USD_MIN_LIMIT: Config.USD_MIN_LIMIT,
      USD_MAX_LIMIT: Config.USD_MAX_LIMIT,
    };
  },
  methods: {
    min() {
      const min = Number(this.USD_MIN_LIMIT / this.BTC_QUOT);

      this.amount = min;
    },
    divide() {
      const divide = this.amount / 2;

      this.amount = divide;
    },
    multiply() {
      const multiply = this.amount * 2;

      this.amount = multiply;
    },
    max() {
      const max = Number(this.USD_MAX_LIMIT / this.BTC_QUOT);

      this.amount = max;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.keno__sidebar-amount {
  margin: 20px 0;
  .amount__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font: 600 14px 'Gilroy';
      &:first-child {
        color: $white-7;
      }
      &:last-child {
        color: $black-1;
      }
    }
  }
  .amount__input {
    margin-top: 5px;
    width: 100%;
    background-color: $white-6;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .amount__action {
      padding: 7.5px;
      display: flex;
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      button {
        border-radius: 3px;
        font: 600 14px 'Gilroy';
        color: $white-1;
        background: linear-gradient(90deg, #bab1ed, #8370ef);
        border: 0;
        padding: 5px 0;
        cursor: pointer;
        &:hover {
          background: linear-gradient(-90deg, #bab1ed, #8370ef);
        }
        &:last-child {
          margin-left: 5px;
        }
      }
    }
    input {
      width: 100%;
      padding: 5px;
      border-radius: 3px;
      background-color: $white-11;
      text-align: center;
      font: 600 14px 'Gilroy';
      color: $black-1;
      border: none;
      outline: none;
      margin: 7.5px 0;
    }
  }
}
</style>
