import React from 'react';
import { useTabs } from './TabsProvider';

// TabsContent component to render content based on the active tab
export const TabsContent = ({ value, children }) => {
  const { activeTab } = useTabs();

  return activeTab === value ? <div>{children}</div> : null;
};
