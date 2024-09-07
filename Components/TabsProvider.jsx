import React, { createContext, useContext, useState } from 'react';

// Create a context to manage tabs state
const TabsContext = createContext();

// TabsProvider component to provide context to its children
export const TabsProvider = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const value = {
    activeTab,
    setActiveTab,
  };

  return (
    <TabsContext.Provider value={value}>
      {children}
    </TabsContext.Provider>
  );
};

// Hook to use the tabs context
export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};
