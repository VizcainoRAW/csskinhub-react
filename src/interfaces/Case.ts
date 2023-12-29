import { Skin } from "./skin";

export interface Case{
    name: String;
    description: String;
    image: URL;
    skins: Skin[];
}