import { subcategory } from "./../../interfaces/subcategory";
import { Component, Vue } from "vue-property-decorator";
import categoryService from "@/services/category.service";
import { category } from "@/interfaces/category";

@Component
export default class Tienda extends Vue {
  isLoading = true;
  isAddingToCart = false;
  hearted = false;
  isActive = false;
  selection = 1;
  items = ["Gluten free", "Orgánico", "Non GMO", "Libre de soja"];
  model = ["Carrots"];
  navigation = [
    {
      text: "Tienda",
      disabled: false,
      link: true,
      to: "/",
    },
    {
      text: "Supermercado",
      disabled: false,
      link: true,
      to: "/blog",
    },
    {
      text: "Frutas deshidratadas",
      disabled: true,
      link: true,
      to: "/blog",
    },
  ];

  categories: category[] = [];

  reserve() {
    this.isAddingToCart = true;
    setTimeout(() => (this.isAddingToCart = false), 2000);
  }

  created() {
    this.isLoading = false;
    categoryService
      .getCategories()
      .then((response) => {
        console.log(response.data);
        this.categories = response.data;
      })
      .catch((error) => console.log(error));
  }

  filterProducts(subItemIndex: number, index: number) {
    for (let i = 0; i < this.categories[index].subcategorys.length; i++) {
      if (i == subItemIndex) continue;
      this.categories[index].subcategorys[i].active = false;
    }
    this.categories[index].subcategorys[subItemIndex].active = true;
  }
}
