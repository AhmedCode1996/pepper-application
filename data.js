import { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

const Context = ({ children }) => {
  const [formState, setformState] = useState({
    url: '',
    status: '',
    output: 0
  });
  return (
    <ImageContext.Provider
      value={{
        formState,
        setformState,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(ImageContext);
};

export { Context, ImageContext };
