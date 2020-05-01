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
      to: "/tienda",
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
        response.data.forEach((element: category) => {
          element.active = false;
          element.subcategorys.forEach((subelement: subcategory) => {
            subelement.active = false;
          });
        });

        this.categories = response.data;
      })
      .catch((error) => console.log(error));
  }

  get activeCategory() {
    const index = this.categories.findIndex((c) => c.active);
    if (index != -1) {
      return this.categories[index].categoryName;
    }
    return "";
  }

  get activeSubcategory() {
    const index = this.categories.findIndex((c) => c.active);
    if (index != -1) {
      const subIndex = this.categories[index].subcategorys.findIndex(
        (c) => c.active
      );
      if (subIndex != -1) {
        return this.categories[index].subcategorys[subIndex].name;
      }
    }
    return "";
  }

  selectCategory(index: number) {
    // inactive nested subcategories
    this.categories.forEach((element: category) => {
      element.subcategorys.forEach((subelement: subcategory) => {
        subelement.active = false;
      });
    });
  }

  selectSubcategory(subItemIndex: number, index: number) {
    for (let i = 0; i < this.categories[index].subcategorys.length; i++) {
      if (i == subItemIndex) continue;
      this.categories[index].subcategorys[i].active = false;
    }
    this.categories[index].subcategorys[subItemIndex].active = true;
  }
}
