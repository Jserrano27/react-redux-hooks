import React from 'react';
import { Provider } from 'react-redux';
import Video from './components/Video';
import Sidebar from './components/Sidebar';

import store from './store';
 
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Video />
        <br/>
        <Sidebar store={store}/>
      </div>
    </Provider>
  );
}

export default App;
