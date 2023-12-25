import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Renders the Booking Form Header', () => {
  render(<BookingForm />);
  const headerElement = screen.getByText("Reserve a Table");
  expect(headerElement).toBeInTheDocument();
})

