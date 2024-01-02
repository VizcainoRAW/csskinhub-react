import { Case } from '../interfaces/case';
import { Category } from '../interfaces/category';
import { api } from './api';


export const fetchCaseById = async (caseId: number): Promise<Case | null> => {
  try {
    const response = await api.get(`cases/${caseId}`);
    return response.data as Case;
  } catch (error) {
    console.error('Error fetching case:', error);
    return null;
  }
};

export const fetchall = async(): Promise<{categories: Category[], cases: Case[]} | null> => {
  try {
    const response = await api.get(`all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
 };