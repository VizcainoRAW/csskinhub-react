import { Case } from '../interfaces/Case';
import { api } from './api';


export const fetchCaseById = async (caseId: number): Promise<Case | null> => {
  try {
    const response = await api.get(`cases/${caseId}/?format=json`);
    return response.data as Case;
  } catch (error) {
    console.error('Error fetching case:', error);
    return null;
  }
};
