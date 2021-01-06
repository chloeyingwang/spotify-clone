import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();
//prepare the datalayer

//create the datalayer, children is what we wrapped inside of the datalayer, here is <App />
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
