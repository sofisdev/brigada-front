/** @jsxImportSource theme-ui */
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Flex, Themed } from 'theme-ui';

import { getLayout } from '../../../repository/platformApi';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import styles from './styles';

const defaultOptions = {
  header: true,
};

const WithMainLayout = (Page, options = defaultOptions) =>
  function Component(props) {
    const { header } = options;
    const { data: session } = useSession();

    const [language, setLanguage] = useState('ES');

    const { data: layout } = useQuery(['layout'], getLayout, {
      enabled: !!session,
    });
    console.log('🚀 ~ file: index.js ~ line 24 ~ Component ~ layout', layout);

    const pageProps = { ...props, layout: layout?.data?.[language] };
    return (
      <Flex sx={styles.container}>
        {header && <Header setLanguage={setLanguage} language={language} />}
        <Flex as="main" sx={styles.content}>
          {layout ? <Page {...pageProps} /> : <Themed.p>loading...</Themed.p>}
        </Flex>
        <Footer />
      </Flex>
    );
  };

export default WithMainLayout;
