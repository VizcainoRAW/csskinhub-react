import { Skin } from "../interfaces/Skin";

interface SkinCardProps {
  skin: Skin;
}

export default function SkinCard({ skin }: SkinCardProps) {
  return (
    <div>
      <h2>{skin.weapon.name} | {skin.name}</h2>
      <img src={skin.image} alt={skin.name} />
    </div>
  );
}

