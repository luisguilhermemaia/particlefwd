import React, { useEffect } from 'react';
import styled from 'styled-components';

import { device } from '../../shared/theme';

const StyledContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 50%;
  max-width: 800px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  @media ${device.mobileS} {
    width: 95%;
  }
  @media ${device.tablet} {
    width: 80%;
  }
  @media ${device.laptop} {
    width: 60%;
  }
  img {
    width: 100%;
    border: 5px solid #fff;
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
`;

const StyledAnchorClose = styled.a`
  right: 0;
  top: 0;
  border-radius: 0 0 0 5px;
`;

const StyledAnchorNext = styled.a`
  right: 0;
  top: calc(50% - 25px);
  border-radius: 5px 0 0 5px;
  height: 50px;
  line-height: 40px;
  font-size: 60px;
`;

const StyledAnchorPrev = styled.a`
  right: 0;
  top: calc(50% - 25px);
  border-radius: 5px 0 0 5px;
  height: 50px;
  line-height: 40px;
  font-size: 60px;
  left: 0;
  right: auto;
  border-radius: 0 5px 5px 0;
`;

const StyledBody = styled.div`
  position: relative;
  a {
    position: absolute;
    display: inline;
    color: $black;
    text-decoration: none;
    line-height: 36px;
    font-size: 30px;
    font-weight: lighter;
    background: #fff;
    border-radius: 5px;
    height: 40px;
    width: 40px;
    text-align: center;
  }
`;

export const GalleryModal = (props) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) props.closeModal();
    if (e.keyCode === 37 && props.hasPrev) props.findPrev();
    if (e.keyCode === 39 && props.hasNext) props.findNext();
  };

  const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = props;

  return src ? (
    <div>
      <StyledOverlay onClick={closeModal}></StyledOverlay>
      <StyledContainer isOpen={!!src}>
        <StyledBody>
          <StyledAnchorClose
            href="#"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
          >
            &times;
          </StyledAnchorClose>
          {hasPrev && (
            <StyledAnchorPrev
              href="#"
              onClick={findPrev}
              onKeyDown={handleKeyDown}
            >
              &lsaquo;
            </StyledAnchorPrev>
          )}
          {hasNext && (
            <StyledAnchorNext
              href="#"
              onClick={findNext}
              onKeyDown={handleKeyDown}
            >
              &rsaquo;
            </StyledAnchorNext>
          )}
          <img src={`${src}_27.jpg`} />
        </StyledBody>
      </StyledContainer>
    </div>
  ) : null;
};
