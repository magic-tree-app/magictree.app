import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Main } from './main/Main';
import { View } from './view/View';
import { TextPlaceholder, Typography } from '../components';

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
    { path: '/typography', element: <Typography text="The quick brown fox jumps over the lazy dog." /> },
  ]);

  return <>{routing}</>;
};
