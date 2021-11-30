import React from 'react';
import { TextPlaceholderWrapper } from './TextPlaceholder.styled';

type TextPlaceholderProps = {
  text: string;
}

export const TextPlaceholder: React.FC<TextPlaceholderProps> = ({ text }) => (
  <TextPlaceholderWrapper>{text}</TextPlaceholderWrapper>
);
