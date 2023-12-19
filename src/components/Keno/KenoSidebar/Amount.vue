<template>
  <div class="keno__sidebar-amount">
    <header class="amount__header">
      <h3>Bet Amount</h3>
      <h3>$981.22</h3>
    </header>

    <div class="amount__input">
      <div class="amount__action">
        <button>Min</button>
        <button>/2</button>
      </div>

      <input type="text" placeholder="0.1000" />

      <div class="amount__action">
        <button>X2</button>
        <button>Max</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Amount',
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.keno__sidebar-amount {
  margin: 20px 0;
  .amount__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font: 600 14px 'Gilroy';
      &:first-child {
        color: $white-7;
      }
      &:last-child {
        color: $black-1;
      }
    }
  }
  .amount__input {
    margin-top: 5px;
    width: 100%;
    background-color: $white-6;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .amount__action {
      padding: 7.5px;
      display: flex;
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      button {
        border-radius: 3px;
        font: 600 14px 'Gilroy';
        color: $white-1;
        background: linear-gradient(90deg, #bab1ed, #8370ef);
        border: 0;
        padding: 5px 0;
        cursor: pointer;
        &:hover {
          background: linear-gradient(-90deg, #bab1ed, #8370ef);
        }
        &:last-child {
          margin-left: 5px;
        }
      }
    }
    input {
      width: 100%;
      padding: 5px 0;
      border-radius: 3px;
      background-color: $white-11;
      text-align: center;
      font: 600 14px 'Gilroy';
      color: $black-1;
      border: none;
      outline: none;
      margin: 7.5px 0;
    }
  }
}
</style>
