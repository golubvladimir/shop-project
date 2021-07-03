import { Category } from "~/ts/interfaces/Category.interface";
import { Manufacturer } from "~/ts/interfaces/Manufacturer.interface";

export interface CatalogItem {
  id: number;
  name: string;
  quantity: number;
  date: string;
  description: string;
  category: Category[];
  categoryId: number;
  manufacturer: Manufacturer[],
  manufacturerId: number;
}
