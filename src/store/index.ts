import Vue from "vue";
import Vuex from "vuex";
import { product } from "@/interfaces/product";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: Array<product>(),
  },

  mutations: {
    addToCart(state, product: product) {
      state.cartItems.push(product);
    },
  },
  actions: {
    addToCart(context, product: product) {
      return new Promise((resolve, reject) => {
        context.commit("addToCart", product);
        resolve();
      });
    },
  },
  modules: {},
});
