import { Category } from "./category";

export interface Weapon{
    id: number
    name: string;
    category: Category;
    description: string;
    image: string;
}