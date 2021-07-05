import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useToggletheme } from '../../../localFields/useDarkMode';

const StyledList = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledItem = styled.li`
  list-style: none;
`;

const StyledImgDiv = styled.div`
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  margin-right: 1rem;
`;

export const Menu = () => {
  const [theme, toggleTheme] = useToggletheme();

  return (
    <nav>
      <StyledList>
        <Button onClick={() => toggleTheme(!theme)}>Switch Theme</Button>
        <StyledItem>
          <Button>Talk To Us</Button>
        </StyledItem>
        <StyledImgDiv>
          <Image
            src="/menu.png"
            alt="Particle Forward Logo"
            width={30}
            height={28}
          />
        </StyledImgDiv>
      </StyledList>
    </nav>
  );
};
