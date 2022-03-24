/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Box, Flex, Image, Link, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import { scrollControll } from '../../../utils/scrollControll';
import SpeedBox from '../../Commons/SpeedBox';
import styles from './styles';

const AddressSection = ({ layout }) => {
  const { title, place, href, street, description, warning } = layout.address;

  window.addEventListener('scroll', scrollControll);
  return (
    <section id="address" sx={styles?.section}>
      <SpeedBox
        speed="-0.2"
        className="welcome"
        src={imageRoutes?.desktop_0_Home_back}
      />
      <Box className="reveal" sx={styles?.container}>
        <Box>
          <Themed.h1>{title}</Themed.h1>
          <Themed.h1>{place}</Themed.h1>
          <Link href={href} target="_blank">
            Página Web
          </Link>
        </Box>
        <Flex sx={styles?.row}>
          <Image sx={styles?.map} src={imageRoutes?.test} />
          <Box sx={styles.rightColumn}>
            <Flex sx={styles?.street}>
              <Image
                alt="compass-icon"
                src={imageRoutes?.icon_compass}
                sx={styles?.icon}
              />

              <Themed.h3 sx={styles?.text}>{street}</Themed.h3>
            </Flex>
            <Flex>
              <Image
                alt="warning-icon"
                src={imageRoutes?.icon_warning}
                sx={styles?.icon}
              />

              <Box>
                <Themed.h3 sx={styles?.text}>{description}</Themed.h3>
                <Themed.h3 sx={styles?.text}>{warning}</Themed.h3>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex sx={styles?.rowCenter}>
          <Image
            alt="arrow-icon"
            src={imageRoutes?.arrowDown}
            sx={styles?.arrow}
          />
        </Flex>
      </Box>
    </section>
  );
};

export default AddressSection;

AddressSection.defaultProps = {};
AddressSection.propTypes = {};
