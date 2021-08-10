import { render, screen } from '@testing-library/react';
import ZipForm from '../ZipForm'

describe("<Zipform />", () => {

  test('renders location search input', () => {
    render(<ZipForm />);
    
    const inputEl = screen.getByTestId("loc_input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

 
});
