// // src/App.test.js
// import React from 'react';
// import { Provider } from 'react-redux';
// import { render, cleanup, screen } from '@testing-library/react';
// import App from './App';
// import { createStore, combineReducers } from 'redux';
// import clickReducer from './reducers';
// import userEvent from '@testing-library/user-event';

// const renderWithRedux = (
//   component,
//   {
//     initialState,
//     store = createStore(combineReducers({ clickReducer }), initialState),
//   } = {},
// ) => ({
//   ...render(<Provider store={ store }>{component}</Provider>),
//   store}
// );

// describe('testing clicks', () => {
//   beforeEach(cleanup);
//   test('the page should have a button and a text 0', () => {
//     renderWithRedux(<App />);
//     const buttonAdicionar = screen.queryByText('Clique aquiiii');

//     expect(buttonAdicionar).toBeInTheDocument();
//     expect(screen.getByText('0')).toBeInTheDocument();
//   });

//   test('a click in a button should increment the value of clicks', () => {
//     renderWithRedux(<App />, { initialState: { clickReducer: { counter: 8 } } });
  
//     expect(screen.getByText('8')).toBeInTheDocument();
//   });

//   test('clicking the button to add +1 to the counter', () => {
//     renderWithRedux(<App />);
//     const buttonAdicionar = screen.queryByText('Clique aquiiii');

//     expect(screen.getByText('0')).toBeInTheDocument();

//     userEvent.click(buttonAdicionar);

//     expect(screen.getByText('1')).toBeInTheDocument();
//   })

//   test('clicking the button with an initial state of 10 should increase it to 11', () => {
//     renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
//     const buttonAdicionar = screen.queryByText('Clique aquiiii');

//     expect(screen.getByText('10')).toBeInTheDocument();

//     userEvent.click(buttonAdicionar);

//     expect(screen.getByText('11')).toBeInTheDocument();
//   })
// });

// src/App.test.js

import { waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import fetchMock from 'fetch-mock-jest';
import App from './App';
import renderWithRedux from './helper';

describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    renderWithRedux(<App />);
    const buttonDoguinho = screen.queryByText('Novo Doguinho');

    expect(buttonDoguinho).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    userEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});