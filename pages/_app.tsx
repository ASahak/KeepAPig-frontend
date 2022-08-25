import React, { useEffect } from 'react';
import 'symbol-observable';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import overrideTheme from '@/styles/muiOverrides';
import Styles from '@/styles/globalStyles';
import { wrapper } from '@/store';
import { useAuth } from '@/hooks';

function App({ Component, pageProps }: AppProps) {
  const { checkLoggedUser } = useAuth();
  Styles();

  useEffect(() => {
    checkLoggedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={overrideTheme}>
      <Component {...pageProps} />
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} draggable pauseOnHover />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
