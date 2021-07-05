import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { GalleryModal } from '../modal/index';
import { ImagesEntity } from '../../types/graphql-zeus';
import { Spinner } from '../../shared/components/Spinner/index';
import { device } from '../../shared/theme';

const StyledContainer = styled.div`
  padding: 0.9375rem 0;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    width: 100%;
    border: 5px solid #fff;
  }
`;

const StyledDiv = styled.div`
  cursor: pointer;
`;

type GalleryPropsType = {
  images: ImagesEntity[];
  loading: boolean;
};

export const Gallery: FC<GalleryPropsType> = ({ images = [], loading }) => {
  const [currentIndexState, setCurrentIndexState] = useState(null);
  const [hasImageError, onImageError] = useState(false);

  const openModal = (e, index) => setCurrentIndexState(index);
  const renderImageContent = ({ uri }, index) => {
    const imgSrc = !hasImageError ? uri : '/broken-image.png';
    return (
      <StyledDiv key={index} onClick={(e) => openModal(e, index)}>
        {hasImageError ? (
          <Image src="/broken-image.png" width={800} height={600} />
        ) : (
          <img src={`${imgSrc}_2.jpg`} onError={() => onImageError(true)} />
        )}
      </StyledDiv>
    );
  };

  const closeModal = (e) => {
    e?.preventDefault();
    setCurrentIndexState(null);
  };

  const findPrev = (e) => {
    e?.preventDefault();
    setCurrentIndexState((prevState) => prevState - 1);
  };

  const findNext = (e) => {
    e?.preventDefault();
    setCurrentIndexState((prevState) => prevState + 1);
  };

  return (
    <StyledContainer>
      {loading ? (
        <Spinner />
      ) : (
        <StyledGrid>{images?.map(renderImageContent)}</StyledGrid>
      )}
      {!hasImageError ? (
        <GalleryModal
          closeModal={closeModal}
          findPrev={findPrev}
          findNext={findNext}
          hasPrev={currentIndexState > 0}
          hasNext={currentIndexState + 1 < images?.length}
          src={images[currentIndexState]?.uri}
        />
      ) : null}
    </StyledContainer>
  );
};
