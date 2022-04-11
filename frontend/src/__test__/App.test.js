import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render no result', async () => {
    render(<App />);
    const inputEl = screen.getByPlaceholderText(/Search movie/i);

    fireEvent.change(inputEl, { target: { value: 'space' } });
    fireEvent.click(screen.getByText(/Search Movies/i));

    const results = screen.getAllByRole('row');

    expect(results).toBe();
  });
});
