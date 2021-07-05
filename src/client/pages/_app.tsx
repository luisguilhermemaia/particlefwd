import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme, GlobalStyle } from '../app/shared/theme/index';
import { useToggletheme } from '../app/localFields/useDarkMode';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme] = useToggletheme();
  const themeMode = theme ? darkTheme : lightTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};
export default MyApp;
