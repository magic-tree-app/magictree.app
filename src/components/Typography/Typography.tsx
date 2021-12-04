import React from 'react';
import {
  TypographyWrapper,
  TypographyWrapper2,
  TypographyWrapper3,
  TypographyWrapper4,
  TypographyWrapper5,
  TypographyWrapper6,
  TypographyWrapperText,
} from './Typography.styled';

type TypographyProps = {
  text: string;
}

export const Typography: React.FC<TypographyProps> = ({ text }) => (
  <div>
    <TypographyWrapper>{text}</TypographyWrapper>
    <TypographyWrapper2>{text}</TypographyWrapper2>
    <TypographyWrapper3>{text}</TypographyWrapper3>
    <TypographyWrapper4>{text}</TypographyWrapper4>
    <TypographyWrapper5>{text}</TypographyWrapper5>
    <TypographyWrapper6>{text}</TypographyWrapper6>
    <TypographyWrapperText>{text}</TypographyWrapperText>
  </div>
);
