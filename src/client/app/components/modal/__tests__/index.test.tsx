import '@testing-library/jest-dom/extend-expect';
import { RenderResult, render } from '@testing-library/react';
import React from 'react';
import { GalleryModal } from '..';

describe('GalleryModal', () => {
  let renderResult: RenderResult;
  const images = [
    {
      uri: 'https://particleforward.com/api/challenge/assets/image1',
      set: 'fe4cfedffdffffffff',
    },
    {
      uri: 'https://particleforward.com/api/challenge/assets/image1',
      set: 'fe4cfedffdffffffff',
    },
    {
      uri: 'https://particleforward.com/api/challenge/assets/image2',
      set: 'fe4cfedffdffffffff',
    },
    {
      uri: 'https://particleforward.com/api/challenge/assets/image3',
      set: 'fe4cfedffdffffffff',
    },
    {
      uri: 'https://particleforward.com/api/challenge/assets/image4',
      set: 'fe4cfedffdffffffff',
    },
  ];
  const doRender = () => {
    renderResult = render(
      <GalleryModal
        closeModal={jest.fn()}
        findPrev={jest.fn()}
        findNext={jest.fn()}
        hasPrev={false}
        hasNext={true}
        src={images[0].uri}
      />,
    );
  };

  it('renders correctly with modal component', () => {
    doRender();

    const { container } = renderResult;

    expect(container).toMatchSnapshot();
  });
});
