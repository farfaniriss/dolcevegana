<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-parallax
        dark
        src="https://happychristmasnewyeargreetings.com/wp-content/uploads/2017/12/Christmas-iphone-Wallpaper-JD5bLw4.jpg"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="font-weight-thin mb-4 main-header">You are what you eat</h1>
            <h4
              class="subheading"
            >There is no fundamental difference between man and animals in their ability to feel pleasure and pain, happiness, and misery</h4>
            <v-btn outlined class="mt-5">Comprar ahora</v-btn>
          </v-col>
        </v-row>
      </v-parallax>
    </v-flex>
    <v-container>
      <v-row no-gutters>
        <v-col class="text-center" cols="12">
          <h2 class="sub-title text-center">Ofertas especiales</h2>
          <p>Aprovecha nuestros descuentos</p>
          <v-card flat height="500px" color="grey lighten-2"></v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="text-center" cols="12">
          <h2 class="sub-title text-center">Best sellers</h2>
          <p>Nuestros productos más queridos</p>
          <v-card flat>
            <v-carousel cycle hide-delimiters show-arrows-on-hover height="100%" interval="3000">
              <v-carousel-item v-for="(bestSeller, i) in bestSellers" :key="i">
                <v-row no-gutters class="fill-height ma-0 pa-0" align="center" justify="center">
                  <v-col cols="12">
                    <v-img
                      :src="bestSeller.backgroundImage"
                      aspect-ratio="3"
                      gradient="to top right, rgba(198, 201, 172, 0.49), rgba(148, 148, 148, 0.54)"
                    >
                      <v-row align="center" class="lightbox white--text fill-height">
                        <v-col>
                          <div class="display-1">{{ bestSeller.productTitle }}</div>
                          <div class="body-1">{{ bestSeller.productDescription }}</div>
                        </v-col>
                      </v-row>
                    </v-img>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="text-center" cols="12">
          <h2 class="sub-title text-center">Nuevos productos</h2>
          <p>Descubre nuestros nuevos ingresos</p>
          <v-card flat height="500px" color="grey lighten-2"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
<script lang="ts" src="./Home.ts">
</script>
<style lang="scss" scoped>
.main-header {
  font-family: "PT Serif", serif;
  font-size: 4rem;
  color: $font-color-green;
}

.subheading {
  color: $font-color-gray;
  font-weight: lighter;
}

.sub-title {
  font-family: "Merriweather", serif;
  font-size: 3rem;
  margin-top: 3rem;
  z-index: 2;
  position: relative;
}

.main-content {
  margin-left: 2rem;
  width: 130%;
}

.v-parallax {
  height: 100vh !important;
}

.fill-width {
  width: 100%;
}
</style>
