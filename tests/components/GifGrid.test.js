import { screen, render } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = "One Punch";

  test('Debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifts = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https//localhost/saitama.jpg'
      },
      {
        id: 'EDV',
        title: 'Dragon Ball',
        url: 'https//localhost/dragon_ball.jpg'
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifts,
      isLoading: true
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
