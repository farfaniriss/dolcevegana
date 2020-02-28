<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-row
        no-gutters
        v-for="(post, index) in posts"
        :key="index"
        :justify="(index+2)%3 == 0 ? 'start' : 'end'"
      >
        <v-col cols="12" :sm="index%3 == 0 ? '12' : '8'">
          <v-lazy
            :options="{
                    threshold: 0.5
                  }"
            transition="fade-transition"
          >
            <v-hover v-slot:default="{ hover }">
              <v-img
                id="img"
                :src="post.url"
                :class="{ 'on-hover': hover }"
                :height="index%3 == 0 ? '100vh' : '50vh'"
              >
                <v-row align="end" justify="end" class="white--text fill-height pb-12">
                  <v-col class="brown-pastel mb-12 pl-10">
                    <h1 class="text-capitalize">El boom de las frutas deshidratadas</h1>
                    <h2>¿Frutas frescas o deshidratadas? ¿Cuál es mejor?</h2>
                  </v-col>
                </v-row>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out gray v-card--reveal display-2 font-weight-bold white--text text--lighten-5"
                    style="height: 100%;"
                  ></div>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </v-lazy>
        </v-col>
      </v-row>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </v-flex>
  </v-layout>
</template>
<script lang="ts" src="./Blog.ts"></script>
<style scoped>
#img {
  transition: opacity 0.4s ease-in-out;
}

#img:not(.on-hover) {
  opacity: 0.6;
}

.brown-pastel {
  background-color: #958072 !important;
  border-color: #958072 !important;
}
</style>
