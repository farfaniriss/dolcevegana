<template>
  <v-navigation-drawer
    :value="isVisible"
    width="400"
    right
    temporary
    fixed
    @input="$emit('changedCartVisibility', $event)"
  >
    <v-row justify="center">
      <v-col cols="12" class="mt-4 ml-6 pl-6">
        <p class="title text-uppercase font-weight-bold">carrito de compras</p>
        <v-divider></v-divider>
        <p class="mt-6" v-show="cartItems.length == 0">Tu carrito está vacío</p>
        <template>
          <v-container v-show="cartItems.length > 0">
            <v-row dense no-gutters v-for="(cartItem, i) in cartItems" :key="i" class="my-3">
              <v-col cols="6">
                <v-card flat>
                  <div class="d-flex flex-no-wrap align-center justify-space-between">
                    <v-avatar size="80" tile>
                      <v-img :src="cartItem.image_url"></v-img>
                    </v-avatar>
                    <span class="ml-2" v-text="cartItem.name"></span>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="3" class="d-flex align-center">
                <v-text-field
                  v-model="cartItem.quantity"
                  @input="updateQuantity($event, cartItem)"
                  :suffix="cartItem.quantity == 1 ? 'unid' : 'unids'"
                  height="26"
                  hide-details
                  single-line
                  :min="1"
                  type="number"
                />
              </v-col>
              <v-col
                cols="3"
                class="d-flex align-center"
              >S/ {{ cartItem.quantity*cartItem.price | formatNumber }}</v-col>
            </v-row>
            <v-row dense no-gutters class="mt-6">
              <v-col cols="9">
                <p class="font-weight-bold">Subtotal</p>
              </v-col>
              <v-col cols="3">
                <p class="font-weight-bold">S/ {{ getSubtotal() | formatNumber }}</p>
              </v-col>
            </v-row>
            <v-row dense no-gutters>
              <v-col cols="9">
                <p class="font-weight-bold">Delivery</p>
              </v-col>
              <v-col cols="3">
                <p
                  class="font-weight-bold"
                >{{ getDelivery() == 0 ? 'Gratis!' : 'S/ ' + getDelivery()}}</p>
              </v-col>
            </v-row>
            <v-row dense no-gutters>
              <v-col cols="9">
                <p class="font-weight-bold">Total</p>
              </v-col>
              <v-col cols="3">
                <p class="font-weight-bold">S/ {{getSubtotal() + getDelivery() | formatNumber}}</p>
              </v-col>
            </v-row>
          </v-container>
          <v-container v-show="cartItems.length > 0">
            <v-row>
              <v-col>
                <v-btn depressed color="primary">Ir a pagar</v-btn>
              </v-col>
              <v-col>
                <v-btn depressed color="primary">Seguir comprando</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { product } from "@/interfaces/product";

export default Vue.extend({
  name: "ShoppingCartDrawer",
  props: {
    cartDrawer: Boolean
  },
  data: () => ({}),
  methods: {
    keepShopping() {
      // Seguir comprando
    },
    goToPay() {
      //Ir a pagar
    },
    updateQuantity(value: any, product: product) {
      product.quantity = value;
      const index = this.cartItems.findIndex(p => p.skuCode == product.skuCode);
      this.$store
        .dispatch("updateQuantity", product)
        .then(() => {
          //This for vue caveat in array change detections
          //Set the reactivity this way
          Vue.set(this.cartItems, index, product);
        })
        .catch(error => {
          console.error(error);
        });
    },
    getSubtotal() {
      return this.cartItems.reduce((a, b) => +a + +b.quantity * b.price, 0);
    },
    getDelivery() {
      const subtotal = this.getSubtotal();
      if (subtotal >= 100) {
        return 0;
      } else {
        return 12;
      }
    }
  },
  computed: {
    cartItems: function(): product[] {
      return this.$store.state.cartItems;
    },
    isVisible: function() {
      return this.cartDrawer;
    }
  }
});
</script>

<style lang="scss">
.v-text-field {
  padding-top: 0px !important;
  margin-top: 0px !important;
  max-width: 65px !important;
  font-size: 13px !important;
}
</style>
