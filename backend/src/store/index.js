import {createStore} from "vuex";
import * as actions from "../store/action.js";
import * as mutations from "../store/mutation.js";

const store = createStore({
  state: {
    user: {
      token: sessionStorage.getItem('TOKEN'),
      data: {}
    },
  },
  getters: {},
  actions,
  mutations,
})

export default store
