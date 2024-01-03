import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const rootEle = document.getElementById('root');

if (rootEle != null) {
  const root = ReactDOM.createRoot(rootEle);
  root.render(
    <App />
  );
}
