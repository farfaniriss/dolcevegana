<template>
  <v-container class="pa-0 ma-0">
    <v-row no-gutters>
      <v-col :cols="7">
        <!-- <v-img
          src="https://i.pinimg.com/564x/4d/f7/92/4df7926af2594523c3fe7718528daf9b.jpg"
          class="grey lighten-2"
          aspect-ratio="1"
          height="100vh"
        ></v-img> -->
        <v-responsive
          :aspect-ratio="16 / 9"
          height="100vh"
          style="background-color: gainsboro;"
        >
        </v-responsive>
      </v-col>
      <v-col :cols="5" align-self="center">
        <blockquote class="blockquote">
          &#8220;Not your mother, not your milk.&#8221;
          <footer>
            <small>
              <em>&mdash;All wise people</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-row>
    <v-row v-for="n in 50" :key="n" no-gutters>
      <p>Hey!</p>
    </v-row>
  </v-container>
</template>
<script lang="ts" src="./Home.ts"></script>
