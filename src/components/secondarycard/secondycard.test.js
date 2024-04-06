import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Marvel from './';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

jest.mock('axios');

test('renders Marvel component with data', async () => {
  const mockData = {
    id: 1,
    name: 'Test Name',
    description: 'Test Description',
    thumbnail: {
      path: 'path/to/image',
      extension: 'jpg'
    }
  };

  axios.get.mockResolvedValueOnce({ data: { data: { results: [mockData] } } });

  const { getByText, getByAltText } = render(
    <Router>
      <Route path="/:id">
        <Marvel />
      </Route>
    </Router>
  );

  await waitFor(() => {
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });

  expect(getByText('Test Name')).toBeInTheDocument();
  expect(getByText('Test Description')).toBeInTheDocument();
  expect(getByAltText('')).toHaveAttribute('src', 'path/to/image.jpg');
});
