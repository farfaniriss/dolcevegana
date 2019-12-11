<template>
  <v-app>
    <v-app-bar
      class="info"
      :clipped-left="clipped"
      fixed
      prominent
      app
      :height="'50px'"
    >
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-autocomplete
        v-model="searchKey"
        :items="searchItems"
        :loading="isLoadingSearch"
        :search-input.sync="search"
        clearable
        hide-details
        hide-selected
        item-text="name"
        item-value="symbol"
        label="¿Qué estás buscando hoy?"
        class="ma-1 d-none d-sm-flex"
        solo
      >
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-title>
              ¿Qué estás buscando hoy?
            </v-list-item-title>
          </v-list-item>
        </template>
        <template v-slot:item="{ item }">
          <v-list-item-avatar
            color="indigo"
            class="headline font-weight-light white--text"
          >
            {{ item.name.charAt(0) }}
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
            <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-autocomplete>

      <v-btn outlined icon small class="ma-1">
        <font-awesome-icon :icon="['fas', 'user']" />
      </v-btn>
      <v-btn outlined icon small class="ma-1">
        <font-awesome-icon :icon="['fas', 'heart']" />
      </v-btn>
      <v-btn outlined icon small class="ma-1">
        <font-awesome-icon :icon="['fas', 'shopping-cart']" />
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          centered
          background-color="transparent"
          class="d-none d-sm-flex justify-center"
        >
          <v-tab v-for="(menu, index) in menus" :key="index" :to="menu.to">{{
            menu.title
          }}</v-tab>
        </v-tabs>
        <v-autocomplete
          v-model="searchKey"
          :items="searchItems"
          :loading="isLoadingSearch"
          :search-input.sync="search"
          clearable
          hide-details
          hide-selected
          item-text="name"
          item-value="symbol"
          label="¿Qué estás buscando hoy?"
          class="ma-1 d-flex d-sm-none"
          solo
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-title>
                ¿Qué estás buscando hoy?
              </v-list-item-title>
            </v-list-item>
          </template>
          <template v-slot:item="{ item }">
            <v-list-item-avatar
              color="indigo"
              class="headline font-weight-light white--text"
            >
              {{ item.name.charAt(0) }}
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
              <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </template>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
      <v-fab-transition>
        <v-btn
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
    <v-navigation-drawer v-model="rightDrawer" left temporary fixed>
      <v-list>
        <v-list-item v-for="(menu, index) in menus" :key="index" :to="menu.to">
          <v-list-item-action>
            <font-awesome-icon :icon="['fas', menu.icon]" />
          </v-list-item-action>
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer absolute app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    searchKey: "",
    searchItems: [],
    isLoadingSearch: false,
    search: "",
    clipped: false,
    drawer: false,
    fixed: false,
    fab: false,
    menus: [
      {
        icon: "th",
        title: "Inicio",
        to: "/"
      },
      {
        icon: "store-alt",
        title: "Tienda",
        to: "/tienda"
      },
      {
        icon: "utensils",
        title: "Recetas",
        to: "/recetas"
      },
      {
        icon: "book-open",
        title: "Blog",
        to: "/blog"
      }
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: "Dolce Vegana"
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
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
$body-font-family: "Josefin Sans", sans-serif;
$title-font: "Josefin Sans", sans-serif;

.v-application {
  font-family: $body-font-family, sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: $title-font, sans-serif !important;
  }
}

.v-text-field.v-text-field--solo .v-input__control,
.v-list-item {
  min-height: 26px;
}

.v-list-item__title,
.v-label {
  font-size: 13px;
}

.v-toolbar__content .v-btn.v-btn--icon.v-size--default,
.v-toolbar__extension .v-btn.v-btn--icon.v-size--default {
  height: 38px;
  width: 38px;
}

.v-application .primary--text {
  color: #ffffff !important;
  caret-color: #dfddc5 !important;
}

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
</style>
