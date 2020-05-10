import Vue from "vue";

const attributeService = {
  getAttributes() {
    return Vue.axios.get(`/api/v1/attributes`);
  },
};

export default attributeService;
