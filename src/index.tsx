import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Spinner } from "react-bootstrap";


const rootEle = document.getElementById('root');

if (rootEle != null) {
  const root = ReactDOM.createRoot(rootEle);
  root.render(
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>

  );
}
