<template>
  <div class="keno__sidebar-hash">
    <h3>Hash: None</h3>
    <font-awesome-icon icon="fa-solid fa-copy" class="icon" />
  </div>
</template>

<script>
export default {
  name: 'KenoSidebarHash',
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
