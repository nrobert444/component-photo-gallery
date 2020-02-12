import React from 'react';
import ImageItem from './ImageItem.js';
import renderer from 'react-test-renderer';

it(' ImageItem.js renders correctly', () => {
  const tree = renderer
    .create(< ImageItem.js />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});