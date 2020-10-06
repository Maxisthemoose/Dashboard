import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset />
        <Router>
          <App />
        </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
