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
      const existingProductIndex = state.cartItems.findIndex(
        (p: product) => p.skuCode == product.skuCode
      );
      if (existingProductIndex == -1) {
        product.quantity = 1;
        state.cartItems.push(product);
      } else {
        state.cartItems[existingProductIndex].quantity++;
      }
    },
    removeFromCart(state, product: product) {
      const index = state.cartItems.findIndex(
        (p) => p.skuCode == product.skuCode
      );
      state.cartItems.splice(index, 1);
    },
    updateQuantity(state, product: product) {
      const index = state.cartItems.findIndex(
        (p) => p.skuCode == product.skuCode
      );
      state.cartItems[index].quantity = product.quantity;
      Vue.set(state.cartItems, index, product);
    },
  },
  actions: {
    addToCart(context, product: product) {
      return new Promise((resolve, reject) => {
        context.commit("addToCart", product);
        resolve();
      });
    },
    removeFromCart(context, product: product) {
      return new Promise((resolve, reject) => {
        context.commit("removeFromCart", product);
        resolve();
      });
    },
    updateQuantity(context, product: product) {
      return new Promise((resolve, reject) => {
        context.commit("updateQuantity", product);
        resolve();
      });
    },
  },
  modules: {},
});
