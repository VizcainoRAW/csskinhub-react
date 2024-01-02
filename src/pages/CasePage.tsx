import { useEffect, useState } from "react";
import { fetchCaseById } from "../api/apiService";
import SkinList from "../components/SkinList";
import { Case } from "../interfaces/case";
import { useParams } from 'react-router-dom';



export function CasePage(){
   const [selectedCase, setSelectedCase] = useState<Case | null>(null);
   const { caseId } = useParams<{ caseId: string }>();

   useEffect(() => {
     fetchCaseById(Number(caseId))
       .then((caseData) => {
         if (caseData) {
           setSelectedCase(caseData);
         }
       })
       .catch((error: Error) => {
         console.error('Error:', error);
       });
   }, [caseId]);


   return(
       <>
       <main>
        <div>
            {selectedCase ? (
               <>
               <div>
                    <h2>{selectedCase.name}</h2>
                    <p>{selectedCase.description}</p>
                    <img src={selectedCase.image} alt={selectedCase.name} />
               </div>
                <SkinList skins={selectedCase.skins} />
               </>
            ) : (
                <p>No case selected</p>
            )}
        </div>
       </main>
       </>
   );
}
