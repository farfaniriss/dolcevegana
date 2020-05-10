import { subcategory } from "./subcategory";

export interface category {
  id: number;
  categoryName: string;
  active: boolean;
  subcategorys: subcategory[];
}
