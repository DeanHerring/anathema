<template>
  <div class="logo">
    <img :src="logo" alt="Huh?" />
    <h1>Anathema</h1>
  </div>
</template>

<script>
import logo from '@/assets/images/logo.svg';

export default {
  name: 'HeaderLogo',
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';
.logo {
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
</style>
