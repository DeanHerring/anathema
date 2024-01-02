<template>
  <li class="item">
    <router-link :to="url" class="link">
      <font-awesome-icon icon="fa-solid fa-border-all" class="icon" />
    </router-link>

    <div class="name">
      <h1>{{ name }}</h1>
    </div>
  </li>
</template>

<script>
export default {
  name: 'SidebarGame',
  props: {
    name: String,
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';
.item {
  width: 60%;
  aspect-ratio: 1 / 1;
  border-radius: 5px;
  position: relative;
  margin-top: 10px;
  transition: all 0.3s;
  &:hover {
    background-color: $white-5;
  }
  &:first-child {
    margin-top: 0;
  }
  .link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    .icon {
      color: $white-4;
      font-size: 20px;
    }
  }
  .name {
    display: none;
    position: absolute;
    top: 50%;
    left: 70px;
    background-color: $white-5;
    padding: 5px 20px;
    border-radius: 5px;
    transform: translateY(-50%);
    &.show {
      display: block;
    }
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 5px solid $white-5;
      transform: translate(-100%, -50%);
    }
    h1 {
      font: 600 14px 'Gilroy';
      color: $black-1;
    }
  }
}
</style>
