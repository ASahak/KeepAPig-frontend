import 'symbol-observable';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import overrideTheme from '@/styles/muiOverrides';
import Styles from '@/styles/globalStyles';
import { wrapper } from '@/store';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  Styles();

  return (
    <ThemeProvider theme={overrideTheme}>
      <Component {...pageProps} />
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} draggable pauseOnHover />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
