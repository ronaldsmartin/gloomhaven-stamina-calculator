import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Footer from './components/Footer';
import NavigationBarContainer from './containers/NavigationBarContainer';
import StatefulCalculator from './containers/StatefulCalculator';
import rootReducer from './redux/reducers/app';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <NavigationBarContainer />
        <main>
          <StatefulCalculator />
        </main>  
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
