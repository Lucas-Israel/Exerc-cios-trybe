import React from 'react';
import { screen, act } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, {About} from './App';
import userEvent from '@testing-library/user-event';

describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(homeTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading',
      { level: 1, name: /você está na página sobre/i });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente 404', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/abouts/abc')
    });

    const notFoundTitle = screen.getByRole('heading',
      { level: 1, name: /página não encontrada/i });
    expect(notFoundTitle).toBeInTheDocument();
  });

  it('deve renderizar apenas o componente about.', () => {
    renderWithRouter(<About />);

    const abc = screen.getByRole('heading',
    {level: 1, name: 'Você está na página Sobre'})

    expect(abc).toBeInTheDocument();
  });
})
