/** @jsxImportSource theme-ui */
import { Box, Themed } from 'theme-ui';

import WithMainLayout from '../components/hocs/WithMainLayout';
import AddressSection from '../components/pages/AddressSection';
import FormRsvp from '../components/pages/FormRsvp';
import WelcomeSection from '../components/pages/welcomeSection';

const HomePage = ({ layout }) => (
  <Box>
    {layout ? (
      <>
        <WelcomeSection layout={layout} />
        <AddressSection layout={layout} />
        <FormRsvp layout={layout} />
      </>
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
