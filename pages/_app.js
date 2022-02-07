import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { ThemeProvider } from 'theme-ui';

// import GlobalComponent from '../styles/global';
// import { theme } from '../styles/theme';
// import { FontLinks } from '../utils/getFonts';

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
        <title>Alteryx Guest Portal</title>
        {/* <FontLinks /> */}
        <link rel="icon" href="/static/assets/images/icons/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        {/* <ThemeProvider theme={theme}> */}
        {/* <GlobalComponent /> */}
        <Hydrate state={pageProps.dehydratedState}>
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </Hydrate>
        {/* </ThemeProvider> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
