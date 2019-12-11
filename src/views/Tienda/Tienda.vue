<template>
  <v-container>
    <div>
      <v-breadcrumbs :items="navigation" :large="true" :divider="'>'">
        <!-- <template v-slot:item="props">
          <v-breadcrumbs-item
            :href="props.item.href"
            :class="[props.item.disabled && 'disabled']"
          >
            {{ props.item.text.toUpperCase() }}
          </v-breadcrumbs-item>
        </template> -->
      </v-breadcrumbs>
    </div>
    <v-row>
      <v-col :cols="12" :md="3">
        <v-card class="mx-auto" max-width="500" flat tile>
          <v-card max-width="500" class="mx-auto" flat tile>
            <v-card-title>
              <span class="title font-weight-light">Categorías</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-list>
              <v-list-group
                v-for="item in categories"
                :key="item.title"
                v-model="item.active"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="subItem in item.items"
                  :key="subItem.title"
                  @click="hearted = hearted"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="subItem.title"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
          <v-divider></v-divider>
          <v-card-title>
            <span class="title font-weight-light">Filtros</span>
          </v-card-title>
          <v-list shaped>
            <v-list-item-group v-model="model" multiple>
              <template v-for="(item, i) in items">
                <v-list-item
                  :key="`item-${i}`"
                  :value="item"
                  active-class="secondary--text text--accent-4"
                >
                  <template v-slot:default="{ active, toggle }">
                    <v-list-item-content>
                      <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-checkbox
                        :input-value="active"
                        :true-value="item"
                        color="secondary accent-4"
                        @click="toggle"
                      ></v-checkbox>
                    </v-list-item-action>
                  </template>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col :cols="12" :md="9">
        <v-container>
          <v-row>
            <v-col v-for="(n, index) in 12" :key="index" class="px-1">
              <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="274"
                hover
                flat
                tile
              >
                <v-hover v-slot:default="{ hover }">
                  <v-img
                    height="250"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white v-card--reveal display-3"
                        style="height: 100%;"
                      >
                        <v-btn class="ma-2" fab x-large color="black" icon>
                          <font-awesome-icon :icon="['fas', 'eye']" />
                        </v-btn>
                      </div>
                    </v-expand-transition>
                  </v-img>
                </v-hover>

                <v-card-title class="mb-0 pb-0"
                  >Leche de almendras
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        text
                        icon
                        :color="hearted ? 'red lighten-1' : 'grey lighten-1'"
                        @click="hearted = !hearted"
                      >
                        <v-icon v-on="on">mdi-heart</v-icon>
                      </v-btn>
                    </template>
                    <span v-show="!hearted">Agregar a favoritos</span>
                    <span v-show="hearted">Remover de favoritos</span>
                  </v-tooltip>
                </v-card-title>

                <v-card-text class="py-0 my-0">
                  <v-row align="center" class="mx-0">
                    <v-avatar color="secondary" class="mr-1" left size="24">
                      <span class="white--text" style="font-size: 10px;"
                        >V</span
                      >
                    </v-avatar>
                    <v-avatar
                      color="deep-purple lighten-1"
                      class="mx-1"
                      left
                      size="24"
                    >
                      <span class="white--text" style="font-size: 10px;"
                        >GF</span
                      >
                    </v-avatar>
                    <v-avatar
                      color="deep-orange darken-1"
                      class="mx-1"
                      left
                      size="24"
                    >
                      <span class="white--text" style="font-size: 10px;"
                        >O</span
                      >
                    </v-avatar>
                  </v-row>
                  <div class="my-4 subtitle-1 black--text">
                    S/ 12.00
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="red lighten-1"
                    class="white--text"
                    @click="reserve"
                  >
                    <v-icon>mdi-cart</v-icon>
                    <span style="font-size: 11px;">Añadir al carrito</span>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Tienda.ts">
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
