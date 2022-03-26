/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import { PropTypes } from 'prop-types';
import { Box, Text, Themed } from 'theme-ui';

import { scrollControll } from '../../../utils/scrollControll';
import styles from './styles';

const PatreonSection = ({ language }) => {
  window.addEventListener('scroll', scrollControll);
  const router = useRouter();
  const { isKid, success } = router.query;

  return (
    <section id="patreon" sx={styles?.container} className="reveal">
      <Box sx={styles.formSection}>
        {success && (
          <Themed.h2>
            {language === 'es'
              ? '¡Gracias! Ya formas parte del clan brigada!'
              : 'Thanks! You are now part of our clan "Brigada"!'}
          </Themed.h2>
        )}
        {isKid === 'true' && (
          <Themed.h2>
            {language === 'es'
              ? 'Si has marcado que vienes con tus peques, nos pondremos en contacto contigo'
              : 'If you said you will bring your kids, we will contact you'}
          </Themed.h2>
        )}
      </Box>
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
