/** @jsxImportSource theme-ui */
import { useSession } from 'next-auth/react';
import { PropTypes } from 'prop-types';
import { Box, Themed } from 'theme-ui';

import WithMainLayout from '../components/hocs/WithMainLayout';
import LogIn from '../components/LogIn';
import routes from '../constants/routes';

const HomePage = (props) => {
  const { callbackUrl } = props;
  const { data: session } = useSession();

  return (
    <Box>
      <Themed.h1>OH YES</Themed.h1>
    </Box>
  );
};

HomePage.defaultProps = {
  callbackUrl: '',
};

HomePage.propTypes = {
  callbackUrl: PropTypes.string,
};

export default WithMainLayout(HomePage, { header: false });

export async function getServerSideProps() {
  const callbackUrl = `${routes?.home}`;
  return {
    props: {
      callbackUrl,
    },
  };
}
