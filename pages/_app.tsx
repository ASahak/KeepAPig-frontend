import React, { useEffect } from 'react';
import 'symbol-observable';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '@/styles/theme';
import { wrapper } from '@/store';
import { useAuth } from '@/hooks';
import { RouterAnimation } from '@/hoc';

function App({ Component, pageProps, router }: AppProps) {
  const { checkLoggedUser } = useAuth();

  useEffect(() => {
    checkLoggedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <RouterAnimation routerName={router.route}>
        <Component {...pageProps} />
      </RouterAnimation>
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} draggable pauseOnHover />
    </ChakraProvider>
  );
}

export default wrapper.withRedux(App);
