import { Skin } from "./skin";

export interface Case{
    id: number;
    name: string;
    description: string;
    image: string;
    skins: Skin[];
}