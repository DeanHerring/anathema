<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img :src="logo" alt="Huh?" />
        <h1>Anathema</h1>
      </div>

      <div class="header__wallet">
        <div class="wallet__amount">
          <h1>0.0000000</h1>
        </div>
        <div class="wallet__currency">
          <img :src="bitcoin" alt="Bitcoin" />
          <font-awesome-icon icon="fa-solid fa-sort-down" class="icon" />
        </div>
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

export default {
  name: 'Header',
  data() {
    return {
      logo,
      bitcoin,
    };
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
      .wallet__amount {
        h1 {
          font: 600 16px 'Gilroy';
          color: $black-1;
        }
      }
      .wallet__currency {
        display: flex;
        .icon {
          margin-left: 5px;
          color: $black-1;
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
</style>
