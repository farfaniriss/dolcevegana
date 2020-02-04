<template>
  <v-container class="pa-0 ma-0">
    <v-row no-gutters>
      <v-col :cols="10">
        <v-img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1ee0b673308513.5c0583ba816d9.png"
          class="grey lighten-2"
          aspect-ratio="1"
          height="100vh"
        ></v-img>
      </v-col>
      <v-col :cols="2">
        <p class="main-title">Not your mother, not your milk</p>
        <p
          class="main-content"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in mauris sed sem tincidunt suscipit vel ac nisi. Morbi turpis velit, tincidunt non finibus id, vestibulum in orci. Sed varius nec orci cursus facilisis. Sed aliquet porttitor vehicula. Praesent non nisi ut sem ultricies congue. Donec blandit libero vitae dui tempus hendrerit. Praesent euismod cursus libero vitae laoreet. Integer mattis nulla vitae tincidunt congue. Morbi tortor nibh, rutrum non velit id, gravida accumsan enim.</p>
      </v-col>
    </v-row>
    <v-row v-for="n in 50" :key="n" no-gutters>
      <p>Hey!</p>
    </v-row>
  </v-container>
</template>
<script lang="ts" src="./Home.ts"></script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap");

.main-title {
  font-family: "Bebas Neue", cursive;
  font-size: 4em;
  margin-left: -2rem;
  margin-top: 10rem;
  z-index: 1000;
  position: relative;
}

.main-content {
  margin-left: 2rem;
  width: 130%;
}
</style>