import React from 'react';
import './App.css';
import Family from "./family/pages/Family";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
            <BrowserRouter>
                <>
                    <div className="App">
                        <Family/>
                    </div>
            </>
            </BrowserRouter>


      </Provider>

  );
}

export default App;
