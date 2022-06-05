/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import { PropTypes } from 'prop-types';
import { Box, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import styles from './styles';

const PatreonSection = ({ language }) => {
  const router = useRouter();
  const { isKid, success } = router.query;

  return (
    <section id="patreon" sx={styles?.container(imageRoutes.mancha_4)}>
      <Box sx={styles?.textContainer}>
        <Box>
          {success && (
            <Themed.h2 sx={styles.text}>
              {language === 'es'
                ? '¡Gracias! Ya formas parte del clan brigada!'
                : 'Thanks! You are now part of our clan "Brigada"!'}
            </Themed.h2>
          )}
          {isKid === 'true' && (
            <Themed.h2 sx={styles.text}>
              {language === 'es'
                ? 'Si has marcado que vienes con tus peques, nos pondremos en contacto contigo'
                : 'If you said you will bring your kids, we will contact you'}
            </Themed.h2>
          )}
        </Box>
        <Themed.h2 sx={styles.text}>
          {language === 'es'
            ? 'No tenemos lista de bodas,\n¡Lo que sí tenemos son ganas de celebrar, bailar, comer y beber con todos vosotros!\nAnte las preguntas recibidas, si os apetece patrocinar nuestra luna de miel os dejamos el siguiente número de cuenta:'
            : "We don't have a wedding registry,\n¡What we are so excited about is celebrating, dancing and drinking with all of you!\nAfter receiving some questions about this, if you'd still want to be a patreon to our honeymoon, here's the following bank account:"}
        </Themed.h2>
        <Themed.h2 sx={styles.iban}>{`IBAN: ${
          process.env.NEXT_PUBLIC_IBAN_NUMBER_COUNTRY
        } ${process.env.NEXT_PUBLIC_IBAN_NUMBER?.replace(
          /-+/g,
          ' ',
        )}`}</Themed.h2>
      </Box>
    </section>
  );
};

export default PatreonSection;

PatreonSection.defaultProps = {};
PatreonSection.propTypes = {};
