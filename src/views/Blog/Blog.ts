import { Component, Vue } from "vue-property-decorator";
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";

@Component({
  components: {
    InfiniteLoading
  }
})
export default class Blog extends Vue {
  posts: any[] = [];
  page = 1;

  mounted() {
    axios
      .get(`https://picsum.photos/v2/list?page=${this.page}&limit=10`)
      .then(response => {
        if (response.data.length > 0) {
          this.page += 1;
          response.data.forEach((element: any) => {
            element.url =
              "https://image.freepik.com/foto-gratis/bocadillos-anacardos-tazon-ceramica-cucharas-madera_34056-458.jpg";
          });
          this.posts = response.data;
        }
      });
  }

  infiniteHandler($state: any) {
    axios
      .get(`https://picsum.photos/v2/list?page=${this.page}&limit=10`)
      .then(response => {
        if (response.data.length > 0) {
          this.page += 1;
          response.data.forEach((element: any) => {
            element.url =
              "https://image.freepik.com/foto-gratis/quinua-cruda-cerca-tazon-madera_136346-2133.jpg";
            this.posts.push(element);
          });
          $state.loaded();
        } else {
          $state.complete();
        }
      });
  }
}
