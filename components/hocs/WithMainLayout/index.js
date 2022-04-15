
/** @jsxImportSource theme-ui */
import { useSession } from 'next-auth/react';
import { useEffect,useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch,useSelector } from 'react-redux';
import { Flex } from 'theme-ui';

import { fetchLayoutAsync, selectLayout } from '../../../redux/layoutSlice';
import { getLayout } from '../../../repository/platformApi';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import styles from './styles';

const defaultOptions = {
  header: true,
};

const WithMainLayout = (Page, options = defaultOptions) =>
  function Component(props) {
    const dispatch = useDispatch();
    const { header } = options;
    const { data: session } = useSession();

    const [language, setLanguage] = useState('es');

    const { data: layout } = useQuery(['layout'], getLayout, {
      enabled: !!session,
    });

    const pageProps = { ...props };
    const data = layout?.data;

    useEffect(() => {
      dispatch(fetchLayoutAsync());
    }, []);

    const skills = useSelector(selectLayout);
    console.log('LAYOUT REDUX', skills);

    return (
      <Flex sx={styles.container}>
        {header && <Header setLanguage={setLanguage} language={language} />}
        <Flex as="main" sx={styles.content}>
          <Page {...pageProps} layout={data?.[language]} language={language} />
        </Flex>
        <Footer />
      </Flex>
    );
  };

export default WithMainLayout;
