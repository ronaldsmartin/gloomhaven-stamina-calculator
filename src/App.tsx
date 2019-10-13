import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="App">
      <Calculator />
      <Footer />
    </main>
  );
}

export default App;
