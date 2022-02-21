/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Box, Flex, Image, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import styles from './styles';

const AddressSection = ({ layout }) => {
  const { title, place, href, street, description, warning } = layout.address;
  return (
    <section id="address" sx={styles?.container}>
      {/* <Image src={imageRoutes?.couple} sx={styles?.image} /> */}
      <Flex sx={styles?.column}>
        <Box>
          <Themed.h1>{title}</Themed.h1>
          {/* <Themed.h1>{date}</Themed.h1> */}
        </Box>
        <Image src={imageRoutes?.arrowDown} sx={styles?.arrow}/>
      </Flex>
    </section>
  );
};

export default AddressSection;

AddressSection.defaultProps = {};
AddressSection.propTypes = {};
