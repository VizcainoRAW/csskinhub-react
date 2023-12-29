import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Case } from './interfaces/Case';
import { fetchCaseById } from './api/caseService';

import SkinList from './components/SkinList';

function App() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  useEffect(() => {
    const caseId = 21;

    fetchCaseById(caseId)
      .then((caseData) => {
        if (caseData) {
          setSelectedCase(caseData);
        } else {
          console.log('Case not found.');
        }
      })
      .catch((error: Error) => {  // Especifica el tipo de error explícitamente como Error
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <header>
        <div className="nav-wrapper">
          <img src={reactLogo} alt="React Logo" />
          <span>CS SkinHub</span>
          <nav>
          </nav>
        </div>
      </header>
      <main>
        {selectedCase ? (
          <>
            <h2>{selectedCase.name}</h2>
            <p>{selectedCase.description}</p>
            <SkinList skins={selectedCase.skins} />
          </>
        ) : (
          <p>No case selected</p>
        )}
      </main>
    </>
  );
}

export default App;