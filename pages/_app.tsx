import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@definitions/chakra/theme';
import { initializeApollo } from '@services/graphql';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { appWithTranslation } from 'next-i18next';
import '@styles/global.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = initializeApollo();
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
