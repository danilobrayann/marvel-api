import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  test('renders card items correctly', () => {
    const data = [
      {
        id: 1,
        name: 'Spider-Man',
        thumbnail: {
          path: 'path/to/image',
          extension: 'jpg'
        }
      },
      {
        id: 2,
        name: 'Iron Man',
        thumbnail: {
          path: 'path/to/image2',
          extension: 'jpg'
        }
      }
    ];

    const { getByText, getByAltText } = render(<Card data={data} />);

    // Verifica se os títulos dos cards são renderizados corretamente
    expect(getByText('Spider-Man')).toBeInTheDocument();
    expect(getByText('Iron Man')).toBeInTheDocument();

    // Verifica se as imagens dos cards são renderizadas corretamente
    expect(getByAltText('Spider-Man')).toHaveAttribute('src', 'path/to/image.jpg');
    expect(getByAltText('Iron Man')).toHaveAttribute('src', 'path/to/image2.jpg');
  });

  test('clicking on a card triggers navigation', () => {
    const data = [
      {
        id: 1,
        name: 'Spider-Man',
        thumbnail: {
          path: 'path/to/image',
          extension: 'jpg'
        }
      }
    ];

    const navigate = jest.fn(); // Simula a função navigate

    const { getByTestId } = render(<Card data={data} navigate={navigate} />);

    const card = getByTestId('card-1'); // Assumindo que você tenha um data-testid 'card-1'
    fireEvent.click(card);

    expect(navigate).toHaveBeenCalledWith('/1'); // Verifica se a função navigate foi chamada com o caminho correto
  });
});
