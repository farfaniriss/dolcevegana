<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-parallax
        dark
        src="https://firebasestorage.googleapis.com/v0/b/veganshop-b5be1.appspot.com/o/home%2Fbackground.png?alt=media&token=298a7166-cd28-4b3f-b432-d20c5ddb8b52"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <!-- <h1 class="font-weight-thin mb-4 main-header">VeganSuperfoods</h1> -->
            <div class="d-flex justify-center">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/veganshop-b5be1.appspot.com/o/home%2Fvegansuperfoods.png?alt=media&token=ada906fa-4f9f-4e61-a9c1-001e6c343c0a"
                :aspect-ratio="7.565"
                contain
                max-height="76"
              ></v-img>
            </div>
            <h4
              class="subheading mx-4"
            >Deje que los alimentos sean su medicina y la medicina sea su alimento</h4>
            <v-btn outlined color="#ffffff" class="mt-5" to="/tienda">Comprar ahora</v-btn>
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
<script lang="ts" src="./Home.ts"></script>
<style lang="scss" scoped>
.main-header {
  font-family: "PT Serif", serif;
  font-size: 4rem;
  color: $font-color-green;
}

.subheading {
  color: #ffffff;
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
