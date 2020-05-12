import { sku } from "./sku";
import { productAttribute } from "./productAttribute";

export interface product {
  id: number;
  name: string;
  description: string;
  thumbnail_url: string;
  image_url: string;
  productSkus: sku[];
  productAttributes: productAttribute[];

  skuCode: string;
  price: number;
  quantity: number;

  isAddingToCart: boolean;
  isAddedToCart: boolean;
  isFavorite: boolean;
}
