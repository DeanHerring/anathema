<template>
  <Transition>
    <div class="wallet-dropdown" v-if="this.isShow">
      <ul class="wallet-dropdown__list">
        <WalletDropdownItem v-for="wallet in otherWallets" :key="wallet.id" :wallet="wallet" />
      </ul>
    </div>
  </Transition>
</template>

<script>
import WalletDropdownItem from './WalletDropdownItem.vue';

export default {
  name: 'WalletDropdown',
  components: {
    WalletDropdownItem,
    WalletDropdownItem,
  },
  props: {
    isShow: Boolean,
    otherWallets: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

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
  }
}
</style>
