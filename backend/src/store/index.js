import {createStore} from "vuex";

const store = createStore({
  state: {
    user: {
      // token: '12345',
      token: null,
      data: {}
    },
  },
  getters: {},
  actions: {},
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
    }
  },
})

export default store
