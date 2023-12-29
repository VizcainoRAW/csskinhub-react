import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Case } from './interfaces/Case';
import SkinList from './components/SkinList';

function App() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

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
