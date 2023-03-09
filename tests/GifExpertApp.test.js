import { GifExpertApp } from '../src/GifExpertApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas en el componente <GifExpertApp />', () => {
  test('Prueba en mostrar elemento por defecto One punch', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('One punch'));
  });

  test('probar que addcategory no repita valores', () => {
    const inputValue = 'Saitama';

    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(screen.getByText('One punch'));
    expect(screen.getByText(inputValue));
    expect(screen.getAllByText(inputValue).length).toBe(1);
  });
});
