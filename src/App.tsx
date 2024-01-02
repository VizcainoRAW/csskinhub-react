import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { CasePage } from './pages/CasePage';
import { useEffect, useState } from 'react';
import { fetchall } from './api/apiService';
import CategoryComboBox from './components/CategoryComboBox';
import CaseComboBox from './components/CaseComboBox';
import { Category } from './interfaces/category';
import { Case } from './interfaces/case';

function App() {
  const [data, setData] = useState<{ categories: Category[], cases: Case[] }>({ categories: [], cases: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchall();
        if (result !== null) {
          setData(result);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
      <header>
        <div>
          <img src={reactLogo} alt="React Logo" />
          <span>CS SkinHub</span>
        </div>
        <nav className="nav-wrapper">
          <CategoryComboBox categories={data.categories}/>
          <CaseComboBox cases={data.cases}/>
        </nav>
      </header>
      <Routes>
          <Route path="/" element={<Navigate to="/case/21" replace />} />
          <Route path="/case/:caseId" element={<CasePage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;