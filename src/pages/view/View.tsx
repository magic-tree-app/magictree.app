import React from 'react';
import { Outlet } from 'react-router-dom';
import { ViewSection, OutletSection } from './View.styled';
import { useBoolean } from '../../hooks/useBoolean';
import { Sidebar } from '../../components';
import logo from '../../svg/logo.svg';

export const View: React.FC = () => {
  const [isCollapsed] = useBoolean(window.innerWidth < 1024);

  return (
    <ViewSection>
      <Sidebar isCollapsed={isCollapsed}>
        <img src={logo} alt="Logo" />
      </Sidebar>
      <OutletSection><Outlet /></OutletSection>
    </ViewSection>
  );
};
