import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Main } from './main/Main';
import { View } from './view/View';
import { DevView } from './devView/DevView';
import { TextPlaceholder } from '../components';

export const Routes: React.FC = (): JSX.Element => {
  const routing = useRoutes([
    { path: '/', element: <Main /> },
    {
      path: '/view',
      element: <View />,
      children: [
        { path: '', element: <TextPlaceholder text="Main view" /> },
        { path: 'collection', element: <TextPlaceholder text="Toy collection" /> },
      ],
    },
    { path: process.env.REACT_APP_DEV_PATH, element: <DevView /> },
  ]);

  return <>{routing}</>;
};
