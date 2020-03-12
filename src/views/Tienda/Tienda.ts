import { Component, Vue } from "vue-property-decorator";

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
      to: "/"
    },
    {
      text: "Supermercado",
      disabled: false,
      link: true,
      to: "/blog"
    },
    {
      text: "Frutas deshidratadas",
      disabled: true,
      link: true,
      to: "/blog"
    }
  ];
  categories = [
    {
      action: "restaurant",
      title: "Supermercado",
      active: true,
      items: [
        { title: "Frutas deshidratadas", active: true },
        { title: "Frutos secos", active: false },
        { title: "Semillas", active: false }
      ]
    },
    {
      action: "restaurant",
      title: "Suplementos",
      items: [
        { title: "Proteína en polvo", active: false },
        { title: "BCAA", active: false }
      ]
    }
  ];

  reserve() {
    this.isAddingToCart = true;
    setTimeout(() => (this.isAddingToCart = false), 2000);
  }

  created() {
    this.isLoading = false;
    setTimeout(() => (this.isLoading = false), 2000);
  }

  filterProducts(subItemIndex: number, index: number) {
    for (let i = 0; i < this.categories[index].items.length; i++) {
      if (i == subItemIndex) continue;
      this.categories[index].items[i].active = false;
    }
    this.categories[index].items[subItemIndex].active = true;
  }
}
