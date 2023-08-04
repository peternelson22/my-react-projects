import { createContext, useContext, useState } from 'react';

const GLobalContext = createContext();

export const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <GLobalContext.Provider
        value={{
          isModalOpen,
          isSidebarOpen,
          openModal,
          openSidebar,
          closeModal,
          closeSidebar,
        }}
      >
        {children}
      </GLobalContext.Provider>
    </div>
  );
};
export const useGlobalContext = () => useContext(GLobalContext);
