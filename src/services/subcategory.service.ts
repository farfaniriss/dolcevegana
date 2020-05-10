import Vue from "vue";

const subcategoryService = {
  getSubcategories(id: number) {
    return Vue.axios.get(`/api/v1/subcategories/${id}`);
  },
};

export default subcategoryService;
