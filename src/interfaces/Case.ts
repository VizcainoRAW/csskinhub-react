import { Skin } from "./Skin";

export interface Case{
    id: number;
    name: string;
    description: string;
    image: string;
    skins: Skin[];
}