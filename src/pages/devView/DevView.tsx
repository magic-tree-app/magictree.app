import React from 'react';
import { Button } from '../../components/Button/Button';

type DevViewProps = {};

export const DevView: React.FC<DevViewProps> = ({ }) => (
  <>
    <Button>default</Button>
    <Button primary>primary</Button>
    <Button disabled>default disabled</Button>
    <Button primary disabled>primary disabled</Button>
  </>
);
