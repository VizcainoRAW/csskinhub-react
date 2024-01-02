import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { Case } from '../interfaces/case';


interface CaseDropdownProps {
 cases: Case[];
}

const CaseDropdown: React.FC<CaseDropdownProps> = ({ cases }) => {
 const navigate = useNavigate();
 const [, setSelectedOption] = useState<Case | null>(null);

 const options = cases.map((caseItem) => ({
 value: caseItem.id,
 label: caseItem.name,
 imageUrl: caseItem.image,
 }));

 const handleChange = (option: any) => {
 setSelectedOption(option);
 if (option) {
   navigate(`/case/${option.value}`);
 }
 };

 return (
 <Select
   options={options}
   onChange={handleChange}
   isClearable
   placeholder="Selecciona un caso..."
 />
 );
};

export default CaseDropdown;