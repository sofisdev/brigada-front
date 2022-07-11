/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-this-in-sfc */
/** @jsxImportSource theme-ui */
import Router from 'next/router';
import { PropTypes } from 'prop-types';
import { Box, Flex, Image, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import routes from '../../../constants/routes';
import SpeedBox from '../../Commons/SpeedBox';
import styles from './styles';

const WelcomeSection = ({ layout, language }) => {
console.log("🚀 ~ file: index.js ~ line 15 ~ WelcomeSection ~ language", language)
  const { date } = layout.home;

  const handleArrow = () =>
    Router.push({
      hash: routes.address,
    });

  return (
    <section id="home">
      <SpeedBox
        className="welcome"
        src={imageRoutes?.desktop_0_Home_back}
        srcMobile={imageRoutes?.mobile_0_back}
      />
      <Box sx={styles?.container}>
        <svg height="0" width="0">
          <clipPath id="blob">
            <path
              transform="translate(0 0)"
              d="M429.5,286.5Q401,333,357.5,350.5Q314,368,277,390Q240,412,187.5,416.5Q135,421,85,390Q35,359,42,299.5Q49,240,54.5,188Q60,136,96.5,95.5Q133,55,186.5,52.5Q240,50,278.5,78Q317,106,355.5,128.5Q394,151,426,195.5Q458,240,429.5,286.5Z"
            />
          </clipPath>
        </svg>
        <Image src={imageRoutes?.couple} sx={styles?.image} alt="couple" />
        <Image
          src={imageRoutes?.coupleMobile}
          sx={styles?.imageMobile}
          alt="couple"
        />
        <Flex sx={styles?.column}>
          <Box>
            <Themed.h1 sx={styles?.title}>SOFI & JAVI</Themed.h1>
            <Themed.p sx={styles?.date}>
              {date} | {language === 'es' ? '18:00' : '6PM'}
            </Themed.p>
            <div sx={styles.brigadaContainer}>
              <Themed.p sx={styles?.brigada}>
                "y decidieron ser más que pareja
              </Themed.p>
              <Themed.p sx={styles?.brigada}> decidieron ser brigada"</Themed.p>
            </div>
          </Box>
          <Image
            loading="lazy"
            onClick={handleArrow}
            src={imageRoutes?.arrowDown}
            sx={styles?.arrow}
            alt="arrow"
          />
        </Flex>
      </Box>
    </section>
  );
};

export default WelcomeSection;

WelcomeSection.defaultProps = {};
WelcomeSection.propTypes = {
  layout: PropTypes.shape({}).isRequired,
};
