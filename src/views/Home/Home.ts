import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  bestSellers = [
    {
      productTitle: "Queso vegano de aceitunas",
      productDescription:
        "Queso elaborado a base de cashews con sabor a aceituna. Perfecto para untar.",
      src:
        "https://i0.wp.com/fullofplants.com/wp-content/uploads/2015/09/vegan-aged-camembert-cheese-1.jpg",
      backgroundImage:
        "https://easyfood.ie/wp-content/uploads/2019/12/vegan-cheeses.jpg"
    },
    {
      productTitle: "Leche de almendras",
      productDescription:
        "Queso elaborado a base de cashews con sabor a aceituna. Perfecto para untar.",
      src:
        "https://i0.wp.com/fullofplants.com/wp-content/uploads/2015/09/vegan-aged-camembert-cheese-1.jpg",
      backgroundImage:
        "https://easyfood.ie/wp-content/uploads/2019/12/vegan-cheeses.jpg"
    },
    {
      productTitle: "Hummus",
      productDescription:
        "Queso elaborado a base de cashews con sabor a aceituna. Perfecto para untar.",
      src:
        "https://i0.wp.com/fullofplants.com/wp-content/uploads/2015/09/vegan-aged-camembert-cheese-1.jpg",
      backgroundImage:
        "https://easyfood.ie/wp-content/uploads/2019/12/vegan-cheeses.jpg"
    },
    {
      productTitle: "Helado de mango",
      productDescription:
        "Queso elaborado a base de cashews con sabor a aceituna. Perfecto para untar.",
      src:
        "https://i0.wp.com/fullofplants.com/wp-content/uploads/2015/09/vegan-aged-camembert-cheese-1.jpg",
      backgroundImage:
        "https://easyfood.ie/wp-content/uploads/2019/12/vegan-cheeses.jpg"
    }
  ];
  colors = [
    "indigo",
    "warning",
    "pink darken-2",
    "red lighten-1",
    "deep-purple accent-4"
  ];
  slides = ["First", "Second", "Third", "Fourth", "Fifth"];
}
