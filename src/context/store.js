import { createContext, useReducer } from 'react';

export const DataStore = createContext();

const DataStoreProvider = ({ initialState, reducer, children }) => {
  return (
    <DataStore.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataStore.Provider>
  );
};

export default DataStoreProvider;
