import React, { ReactNode } from "react";

export interface ISortParameterContextData {
  sortParameter: string;
  setSortParameter: React.Dispatch<React.SetStateAction<string>>;
  handleUpdateSortParameter: (newSortParameter: string) => void;
}

export interface ISortParameterProviderProps {
  children: ReactNode;
}
