<template>
  <v-container>
    <div>
      <!-- Tienda
      <span v-show="activeCategory != ''">></span>
      {{ activeCategory }}
      <span v-show="activeSubcategory != ''">></span>
      {{ activeSubcategory }}-->
    </div>
    <v-row>
      <v-col :cols="12" :md="3" :lg="2">
        <v-card class="mx-auto" flat tile outlined>
          <v-card class="mx-auto" flat tile>
            <v-card-title>
              <span class="title font-weight-light">Categorías</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-skeleton-loader
              :loading="isLoadingCategories"
              transition="fade-transition"
              type="list-item"
            >
              <v-list>
                <v-list-group
                  v-for="(category, index) in categories"
                  :key="category.categoryName"
                  v-model="category.active"
                  no-action
                  @click="selectCategory(index)"
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title v-text="category.categoryName"></v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item
                    v-for="(subcategory, subcategoryIndex) in category.subcategorys"
                    :key="subcategory.name"
                    v-model="subcategory.active"
                    @click="selectSubcategory(subcategoryIndex, index)"
                  >
                    <v-list-item-content>
                      <v-list-item-title active-class="pink--text" v-text="subcategory.name"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-skeleton-loader>
          </v-card>
          <v-divider></v-divider>
          <v-card-title>
            <span class="title font-weight-light">Filtros</span>
          </v-card-title>
          <v-skeleton-loader
            :loading="isLoadingAttributes"
            transition="fade-transition"
            type="list-item"
          >
            <v-list shaped>
              <v-list-item-group multiple>
                <template v-for="(item, i) in attributes">
                  <v-list-item :key="i" :value="item.id" active-class="primary--text">
                    <template v-slot:default="{ active, toggle }">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-checkbox
                          :input-value="active"
                          :true-value="item.id"
                          color="secondary accent-4"
                          @click="toggle"
                        ></v-checkbox>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-skeleton-loader>
        </v-card>
      </v-col>
      <v-col :cols="12" :md="9" :lg="10">
        <v-container class="pa-0">
          <v-row no-gutters>
            <v-col
              v-for="(product, index) in products"
              :key="index"
              class="px-1 px-lg-12"
              lg="3"
              md="4"
              sm="12"
              xs="12"
            >
              <v-lazy
                v-model="isActive"
                :options="{
                    threshold: 0.5
                  }"
                min-height="200"
                transition="fade-transition"
              >
                <v-card :loading="false" class="mx-auto mb-12" flat tile outlined>
                  <v-container>
                    <v-row justify="start">
                      <v-col lg="12" md="12" sm="6" xs="6" class="pa-xs-0 pa-sm-0">
                        <v-hover v-slot:default="{ hover }">
                          <v-img
                            height="250"
                            aspect-ratio="1"
                            :src="product.image_url"
                            :lazy-src="product.thumbnail_url"
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
                      </v-col>

                      <v-col lg="12" md="12" sm="6" xs="6" class="pa-xs-0 pa-sm-0">
                        <v-card-title class="mb-0 pb-0">
                          {{ product.name }}
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <v-btn
                                text
                                icon
                                :color="product.isFavorite ? 'red lighten-1' : 'grey lighten-1'"
                                @click="product.isFavorite = !product.isFavorite"
                              >
                                <v-icon v-on="on">mdi-heart</v-icon>
                              </v-btn>
                            </template>
                            <span v-show="!product.isFavorite">Agregar a favoritos</span>
                            <span v-show="product.isFavorite">Remover de favoritos</span>
                          </v-tooltip>
                        </v-card-title>

                        <v-card-text class="py-0 my-0">
                          <v-row align="center" class="mx-0">
                            <v-avatar color="secondary" class="mr-1" left size="24">
                              <span class="white--text" style="font-size: 10px;">V</span>
                            </v-avatar>
                            <v-avatar color="deep-purple lighten-1" class="mx-1" left size="24">
                              <span class="white--text" style="font-size: 10px;">GF</span>
                            </v-avatar>
                            <v-avatar color="deep-orange darken-1" class="mx-1" left size="24">
                              <span class="white--text" style="font-size: 10px;">O</span>
                            </v-avatar>
                          </v-row>
                          <div class="my-4 subtitle-1 black--text">S/ 12.00</div>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="red lighten-1"
                            class="white--text"
                            @click="addToCart(index)"
                            :loading="product.isAddingToCart"
                            outlined
                          >
                            <v-icon>mdi-cart</v-icon>
                            <span style="font-size: 11px;">Añadir al carrito</span>
                            <template v-slot:loader>
                              <span
                                style="font-size: 11px;"
                                v-show="!product.isAddedToCart"
                              >Añadiendo...</span>
                              <span class="custom-loader" v-show="product.isAddedToCart">
                                <v-icon light>mdi-check</v-icon>
                              </span>
                            </template>
                          </v-btn>
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-lazy>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Tienda.ts"></script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.v-card--hover {
  cursor: auto;
}

.v-card__title {
  font-size: 1.05rem !important;
  white-space: pre-line;
  word-break: break-word;
}

.v-application a {
  color: #99c36b !important;
}

.v-btn.v-size--default {
  font-size: 0.5em !important;
}

.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > div
  > .v-list-item {
  padding-left: 4rem;
}
</style>
