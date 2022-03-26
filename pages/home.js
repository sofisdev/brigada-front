/** @jsxImportSource theme-ui */
import { Box, Flex, Spinner, Themed } from 'theme-ui';

import WithMainLayout from '../components/hocs/WithMainLayout';
import AddressSection from '../components/pages/AddressSection';
import FormRsvp from '../components/pages/FormRsvp';
import PatreonSection from '../components/pages/PatreonSection';
import WelcomeSection from '../components/pages/welcomeSection';

const HomePage = ({ layout, language }) => (
  <Box>
    {layout ? (
      <>
        <WelcomeSection layout={layout} />
        <AddressSection layout={layout} />
        <FormRsvp layout={layout} language={language} />
        <PatreonSection layout={layout} language={language} />
      </>
    ) : (
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 85px)',
        }}
      >
        <Spinner variant="spinner.default" />
        <Themed.h3>Loading...</Themed.h3>
      </Flex>
    )}
  </Box>
);

HomePage.defaultProps = {};

HomePage.propTypes = {};

export default WithMainLayout(HomePage);

export async function getServerSideProps() {
  return { props: {} };
}
