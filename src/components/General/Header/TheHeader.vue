<template>
  <header class="header">
    <BaseContainer class="container">
      <HeaderLogo />
      <HeaderWallet />

      <!-- HeaderMobileHamburger -->
      <div class="hamburger">
        <font-awesome-icon icon="fa-solid fa-bars" class="icon" />
      </div>
    </BaseContainer>
  </header>
</template>

<script>
import BaseContainer from '../BaseContainer.vue';

import HeaderLogo from './HeaderLogo.vue';
import HeaderWallet from './HeaderWallet.vue';

export default {
  name: 'TheHeader',
  components: {
    BaseContainer,
    HeaderLogo,
    HeaderWallet,
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
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {
      justify-content: center;
    }

    .hamburger {
      display: none;
      @media only screen and (max-width: 1000px) {
        display: block;
      }
      .icon {
        font-size: 20px;
        color: $white-4;
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
