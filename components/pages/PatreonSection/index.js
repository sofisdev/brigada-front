/** @jsxImportSource theme-ui */
import Router, { useRouter } from 'next/router';
import { PropTypes } from 'prop-types';
import { Box, Flex, Image, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import routes from '../../../constants/routes';
import styles from './styles';

const PatreonSection = ({ layout }) => {
  const router = useRouter();
  const { isKid, success } = router.query;

  const handleArrow = () =>
    Router.push({
      hash: routes.faq,
    });

  const { title, thanks, kidComment, paragraph } = layout.patreon;

  return (
    <section
      id="patreon"
      sx={styles?.container(
        imageRoutes.desktop_0_iban,
        imageRoutes.mobile_0_back3,
      )}
    >
      <Themed.h1>{title}</Themed.h1>
      <Box sx={styles?.textContainer}>
        {paragraph?.map((line, id) => (
          <Themed.h4 key={id} sx={styles.text}>
            {line}
          </Themed.h4>
        ))}

        <Themed.h2 sx={styles.iban}>{`IBAN:\n${
          process.env.NEXT_PUBLIC_IBAN_NUMBER_COUNTRY
        } ${process.env.NEXT_PUBLIC_IBAN_NUMBER?.replace(
          /-+/g,
          ' ',
        )}`}</Themed.h2>
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

export default PatreonSection;

PatreonSection.defaultProps = {};
PatreonSection.propTypes = {
  layout: PropTypes.shape({}).isRequired,
};
