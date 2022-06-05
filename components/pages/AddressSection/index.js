/** @jsxImportSource theme-ui */
import Router from 'next/router';
import { PropTypes } from 'prop-types';
import { Box, Flex, Image, Link, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import routes from '../../../constants/routes';
import SpeedBox from '../../Commons/SpeedBox';
import styles from './styles';

const AddressSection = ({ layout }) => {
  const {
    title,
    link,
    place,
    href,
    street,
    descriptionTitle,
    description,
    warningTitle,
    warning,
  } = layout.address;
  const handleArrow = () =>
    Router.push({
      hash: routes.guestList,
    });
  return (
    <section id="address" sx={styles?.section}>
      <SpeedBox src={imageRoutes?.desktop_1_Gotis} name="drops" />
      <SpeedBox src={imageRoutes?.mancha_1} name="mancha1" />
      <Box sx={styles?.container}>
        <Box>
          <Themed.h1>{title}</Themed.h1>
          <Themed.h1 sx={styles.undercase}>{place}</Themed.h1>
          <Link href={href} target="_blank">
            {link}
          </Link>
        </Box>
        <Flex sx={styles?.row}>
          <Image
            loading="lazy"
            sx={styles?.map}
            src={imageRoutes?.mobile_2_Finca}
            alt="finca"
          />
          <Box sx={styles.rightColumn}>
            <Themed.h2>{street}</Themed.h2>
            <Flex sx={styles?.street}>
              <Box>
                <Themed.h3>{descriptionTitle}</Themed.h3>
                <Themed.p sx={styles?.text}>{description}</Themed.p>
                <Themed.h3>{warningTitle}</Themed.h3>
                <Themed.p sx={styles?.text}>{warning}</Themed.p>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex sx={styles?.rowCenter}>
          <Image
            loading="lazy"
            alt="arrow-icon"
            src={imageRoutes?.arrowDown}
            sx={styles?.arrow}
            onClick={handleArrow}
          />
        </Flex>
      </Box>
    </section>
  );
};

export default AddressSection;

AddressSection.defaultProps = {};
AddressSection.propTypes = {};
