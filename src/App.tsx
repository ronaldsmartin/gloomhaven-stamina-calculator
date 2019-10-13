import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Calculator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
