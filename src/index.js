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
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontFamily: "commuters-sans, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        body2: {
          fontFamily: "museo-sans, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        title: {
          fontSize: "3rem",
          color: '#000000',
          textDecoration: 'underline #f4673c',
          borderBottom: '3px solid #f4673c',
          height: "66px",
          fontFamily: "commuters-sans, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        header: {
          fontSize: "22px", 
          marginLeft: "10px", 
          color: "#000000", 
          fontWeight: "bold" ,
          fontFamily: "commuters-sans, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        agendaTitle: {
          fontSize: "22px", 
          marginLeft: "10px", 
          color: "#fffaf5", 
          fontWeight: "bold" ,
          fontFamily: "commuters-sans, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        agendaTitleStart: {
          fontSize: "44px", 
          marginLeft: "10px", 
          color: "#64bfc3", 
          fontWeight: "bold" ,
          fontFamily: "commuters-sans, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        agendaTopicStart: {
          fontSize: "36px", 
          color: "#11717d", 
          fontWeight: "bold" ,
          fontFamily: "commuters-sans, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        agendaEstimateStart: {
          fontSize: "28px", 
          color: "#000000", 
          marginTop: "25px",
          fontFamily: "museo-sans, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        agendaDescriptionStart: {
          fontSize: "18px", 
          color: "#000000", 
          marginTop: "25px",
          fontFamily: "museo-sans, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        descriptor: {
          color: "#12707d", 
          textAlign: "center",
          fontFamily: "museo-sans, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        topicList: {
          textAlign: "center", 
          color: "#fffaf6",
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "museo-sans, 'Open Sans', 'Helvetica Neue', sans-serif",
          marginLeft: "30px",
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltipArrow: {
          height: "30px",
          width: "120px",
          color: "#fffaf6",
          backgroundColor: "#f4673c",
          fontSize: "14px",
          fontWeight: "bold",
          textAlign: "center",
          textJustify: "center",
        }
      }
    },
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