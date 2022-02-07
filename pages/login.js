/** @jsxImportSource theme-ui */

import { PropTypes } from 'prop-types';

import WithMainLayout from '../components/hocs/WithMainLayout';
import LogIn from '../components/LogIn';
import routes from '../constants/routes';

const LoginPage = (props) => {
  const { callbackUrl } = props;

  return <LogIn callbackUrl={callbackUrl} />;
};

LoginPage.defaultProps = {
  callbackUrl: '',
};

LoginPage.propTypes = {
  callbackUrl: PropTypes.string,
};

export default WithMainLayout(LoginPage, { header: false });

export async function getServerSideProps() {
  const callbackUrl = `${routes?.home}`;
  return {
    props: {
      callbackUrl,
    },
  };
}
