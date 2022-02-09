/** @jsxImportSource theme-ui */
import { useSession } from 'next-auth/react';
import { useQuery } from 'react-query';
import { Box, Themed } from 'theme-ui';

import WithMainLayout from '../components/hocs/WithMainLayout';
import { getLayout } from '../repository/platformApi';

const HomePage = () => {
  const { data: session } = useSession();

  const { data: layout } = useQuery(['layout'], getLayout, {
    enabled: !!session,
  });
  console.log('🚀 ~ file: home.js ~ line 16 ~ HomePage ~ layout', layout);

  return (
    <Box>
      <Themed.h1>OH YES</Themed.h1>
    </Box>
  );
};

HomePage.defaultProps = {};

HomePage.propTypes = {};

export default WithMainLayout(HomePage);

export async function getServerSideProps() {
  return { props: {} };
}
