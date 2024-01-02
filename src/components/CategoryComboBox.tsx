// CategoryComboBox.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../interfaces/category';
import { Weapon } from '../interfaces/Weapon';

interface ComboboxListProps {
 categories: Category[];
}

const CategoryComboBox: React.FC<ComboboxListProps> = ({ categories }) => {
 const navigate = useNavigate();

 const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
 const weaponId = event.target.value;
 navigate(`/weapon/${weaponId}`);
 };

 return (
 <div>
   {categories.map((category) => (
     <select key={category.id} onChange={handleSelectChange}>
       <option disabled>{category.name}</option>
       {category.weapons.map((weapon: Weapon) => (
         <option value={weapon.id}><img src={weapon.image} alt={weapon.name} />{weapon.name}</option>
       ))}
     </select>
   ))}
 </div>
 );
};

export default CategoryComboBox;