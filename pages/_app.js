import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'theme-ui';

import GlobalComponent from '../styles/global';
import { theme } from '../styles/theme';
import { FontLinks } from '../utils/getFonts';

const MyApp = function ({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 1000,
          },
        },
      }),
  );

  return (
    <>
      <Head>
        <title>Somos Brigada</title>
        <FontLinks />
        <link rel="icon" href="/static/assets/images/icons/favicon.png" />
        <meta name="description" content="Web de registro para invitados" />
        <meta property="og:title" content="Somos brigada" />
        <meta property="og:url" content="https://www.somosbrigada.net/" />
        <meta property="og:description" content="Web de registro para invitados" />
        <meta property="og:image" content="https://www.ezzential.es/finca-aal-cachucho.html" />
        <meta name="googlebot" content="notranslate"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalComponent />
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
