import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
  tooltip: {
    custom: {
      backgroundColor: "#f4673c",
      color: "#f4673c",
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "3px solid #f4673c", 
          maxWidth: 500,
          width: "60%", 
          minHeight: 400, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifySelf: "center", 
          marginTop: 30, 
          marginBottom: 5, 
          padding: 2, 
          overflow: "scroll" 
        }
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);