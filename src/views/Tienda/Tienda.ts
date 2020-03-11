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
      title: "Frutas deshidratadas",
      active: true,
      items: [
        { title: "Naranja deshidratada" },
        { title: "Fresa deshidratada" },
        { title: "Manzana deshidratada" },
        { title: "Cocktail de frutas deshidratadas" }
      ]
    },
    {
      action: "restaurant",
      title: "Frutos secos",
      items: [
        { title: "Pasas negras" },
        { title: "Pasas rubias" },
        { title: "Avellanas" },
        { title: "Almendras" }
      ]
    },
    {
      action: "restaurant",
      title: "Semillas",
      items: [
        { title: "Semillas de sésamo" },
        { title: "Semillas de calabaza" },
        { title: "Semillas de girasol" },
        { title: "Semillas de linaza" },
        { title: "Semillas de chia" }
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
}
