<template>
  <div class="wallet" @click="this.showWalletDropdown" v-if="this.userId && this.currentWallet">
    <WalletAmount :amount="this.currentWallet.amount" />
    <WalletTicker :isShow="this.isShowWalletDropdown" :ticker="this.currentWallet.ticker" />
    <WalletDropdown :isShow="this.isShowWalletDropdown" :otherWallets="this.otherWallets" />
  </div>
</template>

<script>
import WalletAmount from './WalletAmount.vue';
import WalletTicker from './WalletTicker.vue';
import WalletDropdown from './WalletDropdown.vue';

import bitcoin from '@/assets/images/bitcoin.svg';
import ethereum from '@/assets/images/ethereum.svg';
import litecoin from '@/assets/images/litecoin.svg';

import { Config } from '@/config/config.js';

import axios from 'axios';

export default {
  name: 'HeaderWallet',
  components: {
    WalletAmount,
    WalletTicker,
    WalletDropdown,
  },
  provide() {
    return {
      getTickerImage: (ticker) => {
        switch (ticker) {
          case 'BTC':
            return this.tickers.bitcoin;
          case 'ETH':
            return this.tickers.ethereum;
          case 'LTC':
            return this.tickers.litecoin;
          default:
            return 'default.jpg';
        }
      },
      setCurrentWallet: (wallet) => {
        const { id, amount, ticker } = wallet;

        this.currentWallet = { id, amount, ticker };
      },
    };
  },
  data() {
    return {
      userId: Config.USER_ID,
      otherWallets: [],
      currentWallet: {},
      tickers: {
        bitcoin,
        ethereum,
        litecoin,
      },
      isShowWalletDropdown: false,
    };
  },
  async mounted() {
    try {
      const res = await axios.get(`http://localhost:3000/user/${this.userId}`);

      if (!res.data.ok) {
        throw new Error(res.data.error);
      }

      const otherWallets = res.data.data.map((wallet) => {
        return {
          ...wallet,
          isActive: wallet.ticker === 'BTC',
        };
      });

      this.otherWallets = otherWallets;
      this.getCurrentWallet();
    } catch (e) {
      console.error(`Помилка: ${e.message}`);
    }
  },
  methods: {
    showWalletDropdown() {
      this.isShowWalletDropdown = !this.isShowWalletDropdown;
    },
    getCurrentWallet() {
      const currentWallet = this.otherWallets.filter((wallet) => wallet.isActive);
      const { id, amount, ticker } = currentWallet[0];

      this.currentWallet = { id, amount, ticker };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.wallet {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $white-2;
  padding: 10px 20px;
  border-radius: 50px;
  width: 200px;
  margin: 0 10px;
  position: relative;
  cursor: pointer;
  user-select: none;
}
</style>
