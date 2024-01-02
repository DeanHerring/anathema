<template>
  <li class="keno__grid-item">{{ id }}</li>
</template>

<script>
export default {
  name: 'KenoGridCell',
  props: {
    id: Number,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.keno__grid-item {
  background-color: $white-5;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  font: 600 24px 'Gilroy';
  color: $black-1;
  border-radius: 5px;
  transition: all 0.2s;
  user-select: none;
  @media only screen and (max-width: 1100px) {
    font-size: 16px;
  }
  cursor: pointer;
  &:hover {
    background-color: $white-8;
  }
  &.selected {
    background-color: $yellow-1;
    color: $white-1;
    &:hover {
      background-color: $yellow-2;
    }
  }
  &.lose {
    background-color: $red-1;
  }
  &.win {
    background-color: $green-1;
  }
}
</style>
