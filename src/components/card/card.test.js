import React from 'react';
import { render } from '@testing-library/react';
import Card from './';

test('renders card component with data', () => {
  const data = [
    {
      id: 1,
      name: 'Test Name',
      thumbnail: {
        path: 'path/to/image',
        extension: 'jpg'
      }
    }
  ];

  const { getByText, getByAltText } = render(<Card data={data} />);

  // Verifica se o título do card é renderizado corretamente
  expect(getByText('Test Name')).toBeInTheDocument();

  // Verifica se a imagem do card é renderizada corretamente
  expect(getByAltText('')).toHaveAttribute('src', 'path/to/image.jpg');
});
