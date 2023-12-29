import { Skin } from "../interfaces/skin";
import SkinCard from "./SkinCard";

interface Props{
    skins: Skin[];
}

export default function SkinList({skins}: Props){
    return(
        <>
        {skins.map((skin)=> (
            <div>
                <SkinCard skin={skin}/>
            </div>
        ))}
        </>
    );
}

