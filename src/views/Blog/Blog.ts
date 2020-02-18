import { Component, Vue } from "vue-property-decorator";
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";

@Component({
  components: {
    InfiniteLoading
  }
})
export default class Blog extends Vue {
  loading = true;
  posts: any[] = [];
  page = 1;

  mounted() {
    axios
      .get(`https://picsum.photos/v2/list?page=${this.page}&limit=10`)
      .then(response => {
        console.log(response.data);
        if (response.data.length > 0) {
          this.page += 1;
          this.posts.push(response.data);
          this.loading = false;
        }
      });
    // setTimeout(() => {
    //   this.loading = false;
    // }, 1000);
  }

  infiniteHandler($state: any) {
    axios
      .get(`https://picsum.photos/v2/list?page=${this.page}&limit=10`)
      .then(response => {
        if (response.data.length > 0) {
          this.page += 1;
          this.posts.push(response.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
  }
}
