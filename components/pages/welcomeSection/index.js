/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Box, Image, Input, Label, Text, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import styles from './styles';

const WelcomeSection = ({ layout }) => {
  const { date, title } = layout.home;
  return (
    <section id="home" sx={styles?.container}>
      <Image src={imageRoutes.couple} sx={styles?.image} />
      <Box>
        <Themed.h1>{title}</Themed.h1>
        <Themed.h1>{date}</Themed.h1>
      </Box>
    </section>
  );
};

export default WelcomeSection;

WelcomeSection.defaultProps = {};
WelcomeSection.propTypes = {};
