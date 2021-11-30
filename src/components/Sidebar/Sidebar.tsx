import React from 'react';
import { SidebarSection } from './Sidebar.styled';

type SidebarProps = {
  isCollapsed: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, children }) => (
  <SidebarSection $isCollapsed={isCollapsed}>
    {children}
  </SidebarSection>
);
