import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css'

class App extends React.Component {
  render() {
    return (
        <header className="App-header">
          <Header />
          <Content />
          <Footer />
        </header>
    );
  }
}

export default App;