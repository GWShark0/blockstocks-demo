import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

it('should render search textbox', () => {
  render(<App />);
  const textbox = screen.getByRole('textbox');
  expect(textbox).toBeInTheDocument();
});

it('should submit a search on enter', async () => {
  render(<App />);
  const textbox = screen.getByRole('textbox');

  // TODO: Do something?

  expect(await screen.findByText(150.12)).toBeInTheDocument();
});
