<template>
  <v-app>
    <v-app-bar class="info" fixed flat app height="50px">
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-btn dark text medium class="ma-1 logo">{{ title }}</v-btn>

      <v-tabs centered background-color="transparent" class="d-none d-sm-flex justify-center">
        <v-tab v-for="(menu, index) in menus" :key="index" :to="menu.to">{{ menu.title }}</v-tab>
      </v-tabs>
      <div class="d-none d-sm-flex">
        <v-btn icon to="search">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon @click.stop="cartDrawer = !cartDrawer">
          <v-icon>shopping_cart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>person</v-icon>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="d-flex d-sm-none mr-1" icon dark to="search">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        class="d-flex d-sm-none mr-1"
        dark
        icon
        @click.stop="navigationDrawer = !navigationDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <transition name="routerAnimation" enter-active-class="animated faster fadeIn">
        <router-view></router-view>
      </transition>
      <v-fab-transition>
        <v-btn
          class="d-none d-sm-flex"
          v-show="fab"
          v-scroll="onScroll"
          fab
          dark
          fixed
          bottom
          right
          color="info"
          @click="toTop"
        >
          <font-awesome-icon :icon="['fas', 'chevron-up']" />
        </v-btn>
      </v-fab-transition>
    </v-content>
    <v-navigation-drawer v-model="navigationDrawer" right temporary fixed>
      <v-list>
        <v-list-item v-for="(menu, index) in userMenus" :key="index" :to="menu.to">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list>
          <v-list-item :to="'logout'">
            <v-list-item-icon>
              <v-icon>arrow_back</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cerrar sesion</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <ShoppingCartDrawer :cartDrawer="cartDrawer" v-on:changedCartVisibility="cartDrawer = $event"></ShoppingCartDrawer>
    <v-footer dark padless absolute app class="d-none d-sm-flex justify-center">
      <v-card flat tile class="lighten-1 white--text text-center footer-color">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="white--text pt-0"
        >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>{{title}}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <v-bottom-navigation light fixed class="d-flex d-sm-none mr-1" active-class="active-menu">
      <v-btn v-for="(menu, index) in menus" :key="index" :to="menu.to">
        <span>{{ menu.title }}</span>
        <v-icon>{{ menu.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ShoppingCartDrawer from "@/components/ShoppingCartDrawer.vue";

export default Vue.extend({
  name: "App",
  components: {
    ShoppingCartDrawer
  },

  data: () => ({
    searchKey: "",
    searchItems: [],
    isLoadingSearch: false,
    search: "",
    drawer: false,
    fixed: false,
    fab: false,
    menus: [
      {
        icon: "mdi-home",
        title: "Inicio",
        to: "/"
      },
      {
        icon: "store",
        title: "Tienda",
        to: "/tienda"
      },
      {
        icon: "menu_book",
        title: "Blog",
        to: "/blog"
      }
    ],
    userMenus: [
      {
        icon: "person",
        title: "Perfil",
        to: "/perfil"
      },
      {
        icon: "local_shipping",
        title: "Mis ordenes",
        to: "/ordernes"
      },
      {
        icon: "favorite",
        title: "Favoritos",
        to: "/favoritos"
      },
      {
        icon: "shopping_cart",
        title: "Carrito",
        to: "/carrito"
      }
    ],
    icons: ["fab fa-facebook", "fab fa-google-plus", "fab fa-instagram"],
    navigationDrawer: false,
    cartDrawer: false,
    title: "Vegan Superfoods"
  }),
  methods: {
    onScroll(e: any) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
});
</script>

<style lang="scss">
.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title {
  color: #ffffff;
  padding-bottom: 0px !important;
}

.v-tab.v-tab {
  color: #ffffff !important;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon,
.theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: rgba(0, 0, 0, 0.54) !important;
}

.container {
  max-width: 100% !important;
}

.active-menu {
  color: #9ebf6e !important;
}
</style>
