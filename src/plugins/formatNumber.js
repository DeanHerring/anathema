export default {
  install: (app) => {
    app.config.globalProperties.$formatNumber = (number) => {
      if (number) {
        return number > 1 ? number.toFixed(4) : number.toFixed(8);
      }
      return (0).toFixed(8);
    };
  },
};
