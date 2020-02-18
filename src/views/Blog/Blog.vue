<template>
  <v-layout row wrap>
    <!-- <v-flex xs12 sm12>
      <v-skeleton-loader :loading="loading" transition="fade-transition" height="94" type="image">
        <v-card>
          <v-card-title>Title</v-card-title>
          <v-card-text>Card Text</v-card-text>
        </v-card>
      </v-skeleton-loader>
    </v-flex>-->
    <div v-if="!loading">
      <v-flex xs2 sm4 v-for="(post, $index) in posts" :key="$index">
        <v-img :src="post.download_url + '.jpg'" aspect-ratio="2"></v-img>
      </v-flex>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
  </v-layout>
</template>
<script lang="ts" src="./Blog.ts">