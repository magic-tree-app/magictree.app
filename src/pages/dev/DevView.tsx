import React from 'react';
import { Button } from '../../components/Button/Button';
import { FullScreenView } from './DevView.styled';

export const DevView: React.FC = () => (
  <FullScreenView>
    <div>
      <Button>Default</Button>
      <Button disabled>Default disabled</Button>
      <Button primary>Primary</Button>
      <Button primary disabled>Primary disabled</Button>
    </div>
    <div>
      <Button type="light">Default</Button>
      <Button type="light" disabled>Default disabled</Button>
      <Button type="light" primary>Primary</Button>
      <Button type="light" primary disabled>Primary disabled</Button>
    </div>
  </FullScreenView>
);
