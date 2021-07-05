import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Menu } from '../Menu';

const StyledHeader = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors['yellow-100']};
  display: flex;
  justify-content: space-between;
`;

export const Header = () => (
  <StyledHeader>
    <Image
      src="/particleForward-full-black.svg"
      alt="Particle Forward Logo"
      width={184}
      height={45}
    />
    <Menu />
  </StyledHeader>
);
