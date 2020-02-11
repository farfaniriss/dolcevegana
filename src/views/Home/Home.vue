<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-parallax
        dark
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c094ca54837729.5a74c2079a4fd.jpg"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">Eat with conscius</h1>
            <h4 class="subheading">Lorem impsum</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-flex>
    <v-container>
      <v-row no-gutters>
        <p class="main-title text-center">
          Nuestros productos más queridos
        </p>
      </v-row>
    </v-container>
  </v-layout>
</template>
<script lang="ts" src="./Home.ts"></script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Merriweather:300i&display=swap");

.main-title {
  font-family: "Merriweather", serif;
  font-size: 4em;
  margin-left: -2rem;
  margin-top: 10rem;
  z-index: 2;
  position: relative;
}

.main-content {
  margin-left: 2rem;
  width: 130%;
}
</style>
