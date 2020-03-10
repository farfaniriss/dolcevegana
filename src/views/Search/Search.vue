<template>
  <v-container>
    <v-row justify="center">
      <v-col :cols="10" :md="10" :sm="12">
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="light-green lighten-1"
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="API"
          placeholder="Search"
          return-object
        >
          <template v-slot:append>
            <v-icon color="grey darken-1">mdi-magnify</v-icon>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Search.ts"></script>

<style scoped>
</style>
