import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from "@mui/material";
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const theme = createTheme({
  palette: {
    primary: {
      main: "#11717d"
    },
    secondary: {
      main: "#f4673c",
      lighter: "#64bfc4"
    },
    white: {
      main: "#fffaf6"
    },
    customColor: {
      main: "#FFF",
      darker: "#CCC"
    }
  },
  typography: {
    title: {
      fontSize: "3rem",
      color: '#000000',
      textDecoration: 'underline #f4673c',
      borderBottom: '3px solid #f4673c',
      height: "66px"
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
