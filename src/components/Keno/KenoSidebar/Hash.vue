<template>
  <div class="keno__sidebar-hash">
    <h3>Hash: 879asd7asd079a079sda09sd7980as</h3>
    <font-awesome-icon icon="fa-solid fa-copy" class="icon" />
  </div>
</template>

<script>
export default {
  name: 'Hash',
};
</script>

<style lang="scss" scoped>
.keno__sidebar-hash {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccd2e8;
  margin-top: 25px;
  cursor: pointer;
  h3 {
    font: 600 14px 'Gilroy';
  }
  .icon {
    margin-left: 5px;
  }
}
</style>
