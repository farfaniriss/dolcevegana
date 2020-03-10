import { Component, Vue, Watch } from "vue-property-decorator";
import { Entry } from "@/interfaces/entry";

@Component
export default class Search extends Vue {
  isLoading = true;
  model = null;
  search = null;
  categories = ["Products"];
  entries = [];
  count = 0;
  descriptionLimit = 60;

  @Watch("search") onChangeSearchKey(value: string, oldValue: string) {
    if (this.items.length > 0) return;

    // Items have already been requested
    if (this.isLoading) return;

    this.isLoading = true;

    // Lazily load input items
    fetch("https://api.publicapis.org/entries")
      .then(res => res.json())
      .then(res => {
        const { count, entries } = res;
        this.count = count;
        this.entries = entries;
        console.log(entries);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => (this.isLoading = false));
  }

  //   get fields() {
  //     if (!this.model) return [];

  //     return Object.keys(this.model).map(key => {
  //       return {
  //         key,
  //         value: this.model[key] || "n/a"
  //       };
  //     });
  //   }

  get items() {
    return this.entries.map((entry: Entry) => {
      const Description =
        entry.Description.length > this.descriptionLimit
          ? entry.Description.slice(0, this.descriptionLimit) + "..."
          : entry.Description;

      return Object.assign({}, entry, { Description });
    });
  }
}
