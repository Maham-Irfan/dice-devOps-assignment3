import Home from '../src/app/page'
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

test('renders hello world text', () => {
    const { getByText } = render(<Home/>);
    const helloWorldText = getByText(/Hello World/i);
    expect(helloWorldText).toBeInTheDocument();
  });