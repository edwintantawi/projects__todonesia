import { useContext } from 'react';
import { DataStore } from '../context/store';

const useDataStore = () => useContext(DataStore);

export default useDataStore;
