import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from './components/CalendarBoard/container';
import Navigation from './components/Navigation/container';
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';

dayjs.locale("ja");

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Navigation />
    <CalendarBoard />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
