import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

it(' App.js renders correctly', () => {
  const tree = renderer
    .create(< App.js />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
