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
      text: "Leches vegetales",
      disabled: true,
      link: true,
      to: "/blog"
    }
  ];
  categories = [
    {
      action: "restaurant",
      title: "Leches vegetales",
      active: true,
      items: [
        { title: "Leche de almendras" },
        { title: "Leche de soja" },
        { title: "Leche de avena" },
        { title: "Leche de arroz" },
        { title: "Leche de cashews" }
      ]
    },
    {
      action: "school",
      title: "Quesos vegetales",
      items: [{ title: "List Item" }]
    },
    {
      action: "school",
      title: "Yogurts veganos",
      items: [{ title: "List Item" }]
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
