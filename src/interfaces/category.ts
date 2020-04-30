import { subcategory } from "./subcategory";

export interface category {
  id: string;
  categoryName: string;
  active: boolean;
  subcategorys: subcategory[];
}
