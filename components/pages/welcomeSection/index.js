/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-this-in-sfc */
/** @jsxImportSource theme-ui */
import Router from 'next/router';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { Box, Button, Flex, Image, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import routes from '../../../constants/routes';
import SpeedBox from '../../Commons/SpeedBox';
import styles from './styles';

const WelcomeSection = ({ layout }) => {
  const { date } = layout.home;

  const handleArrow = () =>
    Router.push({
      hash: routes.address,
    });

  return (
    <section id="home">
      <SpeedBox
        speed="0.1"
        className="welcome"
        src={imageRoutes?.desktop_0_Home_back}
        srcMobile={imageRoutes?.mobile_0_Home_back}
      />
      <Box sx={styles?.container}>
        <Image src={imageRoutes?.couple} sx={styles?.image} alt="couple" />
        <Flex sx={styles?.column}>
          <Box>
            <Themed.h1 sx={styles?.title}>SOFI & JAVI</Themed.h1>
            <Themed.p sx={styles?.date}>{date}</Themed.p>
            <div sx={styles.brigadaContainer}>
              <Themed.p sx={styles?.brigada}>
                y decidieron ser más que pareja
              </Themed.p>
              <Themed.p sx={styles?.brigada}> decidieron ser brigada</Themed.p>
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
WelcomeSection.propTypes = {};
