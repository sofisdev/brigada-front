/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Box, Flex, Image, Link, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import { scrollControll } from '../../../utils/scrollControll';
import styles from './styles';

const PatreonSection = ({ layout }) => {
  const { language } = layout.address;
  window.addEventListener('scroll', scrollControll);

  return (
    <section id="patreon" sx={styles?.container} className="reveal">
      <Themed.h2>
        {language === 'es'
          ? '¿Quieres patrocinar nuestra boda?'
          : '¿Do you want to be a patreon of our wedding?'}
      </Themed.h2>
      <Themed.h2>{`IBAN: ${
        process.env.NEXT_PUBLIC_IBAN_NUMBER_COUNTRY
      } ${process.env.NEXT_PUBLIC_IBAN_NUMBER?.replace(
        /-+/g,
        ' ',
      )}`}</Themed.h2>
    </section>
  );
};

export default PatreonSection;

PatreonSection.defaultProps = {};
PatreonSection.propTypes = {};
