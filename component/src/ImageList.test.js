import React from 'react';
import ImageList from './ImageList.js';
import renderer from 'react-test-renderer';

it(' ImageList.js renders correctly', () => {
  const tree = renderer
    .create(< ImageList.js />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});