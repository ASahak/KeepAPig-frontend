import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes';
import overrideTheme from 'styles/muiOverrides';
import Styles from 'styles/globalStyles';

function App() {
    Styles();

    return (
        <ThemeProvider theme={overrideTheme}>
            <BrowserRouter>
                <main className="main-app">
                    <AppRoutes />
                    <ToastContainer position="top-right" autoClose={4000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} draggable pauseOnHover />
                </main>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
