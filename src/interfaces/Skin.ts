import { Weapon } from "./Weapon";

export interface Skin{
    name: string;
    weapon: Weapon;
    pattern: string;
    image: string;
    rarity: string;
}