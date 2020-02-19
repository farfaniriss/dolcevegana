<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="(post, index) in posts" :key="index" cols="12" sm="4">
        <v-skeleton-loader
          :loading="loading"
          transition="fade-transition"
          type="image"
          height="417"
        >
          <v-hover v-slot:default="{ hover }">
            <v-img id="img" :src="post.url" :class="{ 'on-hover': hover }">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out gray v-card--reveal display-2 font-weight-bold white--text text--lighten-5"
                  style="height: 100%;"
                >
                  Cashews
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </v-skeleton-loader>
      </v-col>
    </v-row>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </v-container>
</template>
<script lang="ts" src="./Blog.ts"></script>
<style scoped>
#img {
  transition: opacity 0.4s ease-in-out;
}

#img:not(.on-hover) {
  opacity: 0.6;
}
</style>
