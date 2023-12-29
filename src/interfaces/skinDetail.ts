import { Weapon } from "./Weapon"
import { rarity } from "./rarity";

export interface skinDatail{
    id: number,
    name: string,
    image: string,
    rarity: rarity,
    SteamUrls: URL[],
    weapon: Weapon,
}