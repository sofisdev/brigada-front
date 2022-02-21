/** @jsxImportSource theme-ui */
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Box, Themed } from 'theme-ui';

import WithMainLayout from '../components/hocs/WithMainLayout';
import WelcomeSection from '../components/pages/welcomeSection';
import { getLayout } from '../repository/platformApi';

const HomePage = ({ layout }) => (
  <Box>
    {layout ? (
      <WelcomeSection layout={layout} />
    ) : (
      <Themed.p>Loading..</Themed.p>
    )}
  </Box>
);

HomePage.defaultProps = {};

HomePage.propTypes = {};

export default WithMainLayout(HomePage);

export async function getServerSideProps() {
  return { props: {} };
}
