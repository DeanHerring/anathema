<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img :src="images.logo" alt="Huh?" />
        <h1>Anathema</h1>
      </div>

      <div class="header__wallet" @click="displayWalletDropdown" v-if="user_id">
        <div class="wallet__amount">
          <h1>{{ this.formatNumber(activeWallet.amount) }}</h1>
        </div>
        <div class="wallet__ticker">
          <img :src="getTickerImage(activeWallet.ticker)" :alt="activeWallet.ticker" />

          <font-awesome-icon icon="fa-solid fa-sort-down" class="icon" v-if="!UI.isShowWalletDropdown" />
          <font-awesome-icon icon="fa-solid fa-sort-up" class="icon" v-if="UI.isShowWalletDropdown" />
        </div>

        <Transition>
          <div class="wallet-dropdown" v-if="UI.isShowWalletDropdown">
            <ul class="wallet-dropdown__list">
              <li
                class="wallet-dropdown__item"
                v-for="wallet in wallets"
                :key="wallet.id"
                @click="setActiveWallet(wallet)"
              >
                <h1>
                  {{ this.formatNumber(wallet.amount) }}
                </h1>
                <img :src="getTickerImage(wallet.ticker)" alt="Bitcoin" />
              </li>
            </ul>
          </div>
        </Transition>
      </div>

      <div class="mobile-hamburger">
        <font-awesome-icon icon="fa-solid fa-bars" class="icon" />
      </div>
    </div>
  </header>
</template>

<script>
import logo from '@/assets/images/logo.svg';
import bitcoin from '@/assets/images/bitcoin.svg';
import ethereum from '@/assets/images/ethereum.svg';
import litecoin from '@/assets/images/litecoin.svg';

import axios from 'axios';

import { Config } from '@/config/config.js';

export default {
  name: 'Header',
  data() {
    return {
      images: {
        logo,
        bitcoin,
        ethereum,
        litecoin,
      },
      UI: {
        isShowWalletDropdown: false,
      },

      user_id: Config.user_id,
      wallets: [],
      activeWallet: {
        amount: 0.0,
        ticker: 'BTC',
      },
    };
  },
  methods: {
    displayWalletDropdown() {
      this.UI.isShowWalletDropdown = !this.UI.isShowWalletDropdown;
    },
    getTickerImage(ticker) {
      switch (ticker) {
        case 'BTC':
          return this.images.bitcoin;
        case 'ETH':
          return this.images.ethereum;
        case 'LTC':
          return this.images.litecoin;
        default:
          return 'ass.jpg';
      }
    },
    formatNumber(number) {
      if (number) {
        return number > 1 ? number.toFixed(4) : number.toFixed(8);
      }
      return (0).toFixed(8);
    },
    setActiveWallet(wallet) {
      this.activeWallet.amount = wallet.amount;
      this.activeWallet.ticker = wallet.ticker;
    },
  },
  async mounted() {
    try {
      const res = await axios.get(`http://localhost:3000/user/${Config.user_id}`);

      if (!res.data.ok) {
        throw new Error(res.data.error);
      }

      const wallets = res.data.data.map((wallet) => {
        return {
          ...wallet,
          isActive: wallet.ticker === 'BTC',
        };
      });
      const activeWallet = wallets.filter((wallet) => wallet.isActive);

      this.wallets = wallets;

      this.activeWallet.amount = activeWallet[0].amount;
      this.activeWallet.ticker = activeWallet[0].ticker;
    } catch (e) {
      console.error(e.message, e);
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

// header
.header {
  width: 100%;
  height: 68px;
  background-color: $white-1;
  display: flex;
  align-items: center;
  &__container {
    width: 95%;
    max-width: 1244px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {
      justify-content: center;
    }
    .header__logo {
      display: flex;
      align-items: center;
      h1 {
        font: 700 24px 'Gilroy';
        color: $black-1;
        margin-left: 10px;
        @media only screen and (max-width: 600px) {
          display: none;
        }
      }
    }
    .header__wallet {
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
      .wallet__amount {
        h1 {
          font: 600 16px 'Gilroy';
          color: $black-1;
        }
      }
      .wallet__ticker {
        display: flex;
        align-items: center;
        .icon {
          margin-left: 5px;
          color: $black-1;
        }
      }
      .wallet-dropdown {
        position: absolute;
        top: calc(100% + 10px);
        left: 0;
        width: 100%;
        background-color: $white-2;
        border-radius: 10px;
        box-shadow: 0 0 10px -5px rgba($white-4, 0.22);
        z-index: 2;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -10px;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 10px solid $white-2;
          clear: both;
        }
        &__list {
          border-radius: 10px;
          overflow: hidden;
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
        }
      }
    }
    .mobile-hamburger {
      display: none;
      @media only screen and (max-width: 1000px) {
        display: block;
      }
      .icon {
        font-size: 20px;
        color: $white-4;
      }
    }
    .mobile-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: $white-1;
      z-index: 3;
      display: none;
      .mobile-navbar {
        &__list {
          .mobile-navbar__item {
            .mobile-navbar__link {
              display: flex;
              align-items: center;
              padding: 15px;
              text-decoration: none;
              .mobile-navbar__icon {
                width: 30px;
                aspect-ratio: 1 / 1;
                background-color: $white-9;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                .icon {
                  color: $white-4;
                }
              }
              h3 {
                font: 600 18px 'Gilroy';
                color: $white-4;
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
