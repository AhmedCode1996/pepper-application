import { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

const Context = ({ children }) => {
  const [formData, setFormData] = useState({
    url: '',
    status: ''
  });
  return (
    <ImageContext.Provider
      value={{
        formData,
        setFormData,
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
