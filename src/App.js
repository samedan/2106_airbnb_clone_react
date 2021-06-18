import React from "react";
import Header from "./components/shared/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { initStore } from "./store";

const store = initStore();

// Explaining how everyhing works (:
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;