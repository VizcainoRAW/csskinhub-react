import { Weapon } from "./Weapon";

export interface Skin{
    name: String;
    weapon: Weapon;
    pattern: String;
    image: URL;
    rarity: string;
}