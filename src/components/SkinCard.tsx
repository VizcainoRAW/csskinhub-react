import { Skin } from "../interfaces/skin";

interface SkinCardProps {
  skin: Skin;
}

export default function SkinCard({ skin }: SkinCardProps) {
  return (
    <div>
      <h2>{skin.weapon.name} | {skin.name}</h2>
    </div>
  );
}

