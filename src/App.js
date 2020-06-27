import React from 'react';
import './App.css';
import store from './redux/redux-store.js'
import {Provider} from 'react-redux'
import GifContainer from './components/Gif/GifContainer.js'
import HeaderContainer from './components/Header/HeaderContainer.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderContainer />
        <div className="container">          
          <GifContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
