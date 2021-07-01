import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from "./Header";

test('renders link', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Начало/i);
    expect(linkElement).toBeInTheDocument();
});
