import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    change(state, loggedIn) {
      state.loggedIn = loggedIn;
    }
  },
  getters: {
    loggedIn: state => state.loggedIn
  },
  actions: {}
});
