/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';

import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import styles from './styles';

const defaultOptions = {
  header: true,
};

const WithMainLayout = (Page, options = defaultOptions) =>
  function Component(props) {
    const { header } = options;

    const pageProps = { ...props };
    return (
      <Flex sx={styles.container}>
        {header && <Header />}
        <Flex as="main" sx={styles.content}>
          <Page {...pageProps} />
        </Flex>
        <Footer />
      </Flex>
    );
  };

export default WithMainLayout;
