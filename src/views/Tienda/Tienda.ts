import { Component, Vue } from "vue-property-decorator";

import categoryService from "@/services/category.service";
import subcategoryService from "@/services/subcategory.service";
import attributeService from "@/services/attribute.service";

import { subcategory } from "@/interfaces/subcategory";
import { category } from "@/interfaces/category";
import { productAttribute } from "@/interfaces/productAttribute";
import { product } from "@/interfaces/product";

@Component
export default class Tienda extends Vue {
  isActive = false;
  navigation = [
    {
      text: "Tienda",
      disabled: false,
      link: true,
      to: "/tienda",
    },
  ];

  attributes: productAttribute[] = [];
  categories: category[] = [];
  products: product[] = [];

  isLoadingCategories = true;
  isLoadingAttributes = true;

  created() {
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
        this.isLoadingCategories = false;
      })
      .catch((error) => console.log(error));

    attributeService
      .getAttributes()
      .then((response) => {
        this.attributes = response.data;
        this.isLoadingAttributes = false;
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

    this.getSubcategoryProducts(
      this.categories[index].subcategorys[subItemIndex].id
    );
  }

  getSubcategoryProducts(id: number) {
    subcategoryService
      .getSubcategories(id)
      .then((response) => {
        response.data.products.forEach((element: product) => {
          element.isAddingToCart = false;
          element.isAddedToCart = false;
          element.isFavorite = false;
        });

        this.products = response.data.products;
      })
      .catch((error) => console.log(error));
  }

  addToCart(productIndex: number) {
    const product = this.products[productIndex];
    this.products[productIndex].isAddingToCart = true;
    this.$store
      .dispatch("addToCart", product)
      .then(() => {
        setTimeout(() => {
          this.products[productIndex].isAddedToCart = true;
          setTimeout(() => {
            this.products[productIndex].isAddingToCart = false;
          }, 500);
        }, 900);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
