<template>
  <aside class="sidebar">
    <div class="sidebar__hamburger">
      <font-awesome-icon icon="fa-solid fa-bars" class="icon" />
    </div>

    <nav class="sidebar__navbar">
      <header class="navbar__header">
        <h3>Games</h3>
      </header>

      <!-- Dice, Mines, Wheel, Roulette -->
      <ul class="navbar__list">
        <li class="navbar__item">
          <a href="#" class="navbar__link">
            <font-awesome-icon icon="fa-solid fa-border-all" class="icon" />
          </a>
          <div class="navbar__item-title">
            <h1>Keno</h1>
          </div>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.sidebar {
  min-width: 68px;
  background-color: $white-1;
  min-height: 100vh;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  &__hamburger {
    width: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      color: $white-3;
      font-size: 30px;
    }
  }
  .sidebar__navbar {
    margin-top: 15px;
    .navbar__header {
      h3 {
        font: 600 14px 'Gilroy';
        color: $white-3;
        text-align: center;
      }
    }
    .navbar__list {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .navbar__item {
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
        .navbar__link {
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
        &-title {
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
    }
  }
}
</style>
