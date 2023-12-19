<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style lang="scss" scoped>
.container {
  width: 95%;
  max-width: 1244px;
  margin: 25px auto;
}
</style>
