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
  productSkus: product[] = [];

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
        this.getProductSkus();
      })
      .catch((error) => console.log(error));
  }

  getProductSkus() {
    let newProducts: product[] = [];
    for (let index = 0; index < this.products.length; index++) {
      let cloneProduct = Object.assign({}, this.products[index]);
      for (
        let skuI = 0;
        skuI < this.products[index].productSkus.length;
        skuI++
      ) {
        const sku = this.products[index].productSkus[skuI];
        if (skuI == 0) {
          this.products[index].price = sku.price;
          this.products[index].skuCode = sku.skuCode;
          this.products[
            index
          ].name = `${this.products[index].name} (${sku.size})`;
          newProducts.push(this.products[index]);
        } else {
          cloneProduct.price = sku.price;
          cloneProduct.skuCode = sku.skuCode;
          cloneProduct.name = `${cloneProduct.name} (${sku.size})`;
          newProducts.push(cloneProduct);
        }
      }
    }
    this.productSkus = newProducts;
  }

  addToCart(productIndex: number) {
    const product = this.productSkus[productIndex];
    this.productSkus[productIndex].isAddingToCart = true;
    this.$store
      .dispatch("addToCart", product)
      .then(() => {
        setTimeout(() => {
          this.productSkus[productIndex].isAddedToCart = true;
          setTimeout(() => {
            this.productSkus[productIndex].isAddingToCart = false;
          }, 500);
        }, 900);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
