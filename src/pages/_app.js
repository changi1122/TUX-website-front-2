import '@/styles/globals.css'
import '@/styles/markdown.scss'
import '@/styles/Pagination.scss';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { SnackbarProvider } from 'notistack'
import { useReducer } from 'react';
import CustomContext from '@/reducers/customContext';
import { initialState, reducer } from '@/reducers';
import configDayjsLocale from '@/config/configDayjsLocale';

configDayjsLocale();

export default function App({ Component, pageProps }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const providerState = {
    state,
    dispatch
  };

  return (
    <>
    <div>
      <CustomContext.Provider value={providerState}>
        <Header />
        <SnackbarProvider />
        <Component {...pageProps} />
        <Footer />
      </CustomContext.Provider>
    </div>
    </>
  );
}
