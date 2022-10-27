import React, { useEffect } from 'react';
import 'symbol-observable';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '@/styles/theme';
import { wrapper } from '@/store';
import { useAuth } from '@/hooks';

function App({ Component, pageProps }: AppProps) {
  const { checkLoggedUser } = useAuth();

  useEffect(() => {
    checkLoggedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} draggable pauseOnHover />
    </ChakraProvider>
  );
}

export default wrapper.withRedux(App);
