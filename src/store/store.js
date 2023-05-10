import { createStore } from 'vuex';

const store = createStore({
  state: {
    productClicks: {},
  },
  mutations: {
    updateTotalClicks(state, productClicks) {
      state.productClicks = productClicks;
    },
    resetData(state) {
      state.productClicks = {};
    },
  },
});

export default store;