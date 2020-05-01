import Vue from "vue";

const categoryService = {
  getCategories() {
    return Vue.axios.get(`/api/v1/categories`);
  },
};

export default categoryService;
