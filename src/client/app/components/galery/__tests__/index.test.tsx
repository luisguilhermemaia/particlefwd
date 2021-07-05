import '@testing-library/jest-dom/extend-expect';
import { RenderResult, render } from '@testing-library/react';
import React from 'react';

import { Gallery } from '..';

describe('Gallery', () => {
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
    renderResult = render(<Gallery images={images} loading={false} />);
  };

  it('renders correctly with Gallery component', () => {
    doRender();

    const { container } = renderResult;

    expect(container).toMatchSnapshot();
  });
});
