import { createContext, useState, useContext } from "react";
import {
  ISortParameterContextData,
  ISortParameterProviderProps,
} from "./types";

export const SortParameterContext = createContext(
  {} as ISortParameterContextData
);

export function SortParameterProvider(
  props: ISortParameterProviderProps
): JSX.Element {
  const [sortParameter, setSortParameter] = useState<string>("title%2Casc");

  return (
    <SortParameterContext.Provider
      value={{ sortParameter, setSortParameter, handleUpdateSortParameter }}
    >
      {props.children}
    </SortParameterContext.Provider>
  );

  function handleUpdateSortParameter(newSortParameter: string) {
    setSortParameter(newSortParameter);
  }
}

export function useSortParameter(): ISortParameterContextData {
  const context = useContext(SortParameterContext);

  if (!context) {
    throw new Error(
      "useSortParameter must be used within a SortParameterProvider"
    );
  }

  return context;
}
