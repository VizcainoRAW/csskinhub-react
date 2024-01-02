import { Weapon } from "./Weapon"

export interface Category{
    id: number
    name: string
    weapons: Weapon[]
}