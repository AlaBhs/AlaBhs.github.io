import React, { useState } from "react";

export const PaginationContext = React.createContext({
    toSlideIndex: 0,
    onNavigateIndustryHandler: () => {},
    setToSlideIndex: () => {},
  });

  
export const PaginationProvider = (props) => {
  const [toSlideIndex, setToSlideIndex] = useState(0);

  const onNavigateIndustryHandler = (pageIndex) => {
    setToSlideIndex(pageIndex);
  };

  const value = {
    toSlideIndex,
    onNavigateIndustryHandler,
    setToSlideIndex,
  };
  return (
    <PaginationContext.Provider value={value}>
      {props.children}
    </PaginationContext.Provider>
  );
};
