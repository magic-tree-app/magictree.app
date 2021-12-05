import React from 'react';
import {
  H1, H2, H3, H4, H5, H6, Text,
} from '../../styled/general/typography.styled';

type DevViewProps = {
  text: string;
}

export const DevView: React.FC<DevViewProps> = ({ text }) => (
  <>
    <H1>{text}</H1>
    <H2>{text}</H2>
    <H3>{text}</H3>
    <H4>{text}</H4>
    <H5>{text}</H5>
    <H6>{text}</H6>
    <Text>{text}</Text>
  </>
);
