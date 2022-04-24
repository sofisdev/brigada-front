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
  const { date, title } = layout.home;
  useEffect(() => {
    const parallaxEls = document.querySelectorAll('[data-speed]');
    function scrollHandler() {
      const windowHeight = window.innerHeight;
      for (const parallaxEl of parallaxEls) {
        const elementTop = parallaxEl.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
          const direction = parallaxEl.dataset.direction == 'up' ? '-' : '';
          const transformY = this.pageYOffset * parallaxEl.dataset.speed;
          parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
        }
      }
    }
    window.addEventListener('scroll', scrollHandler);
  }, [window.pageYOffset]);

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
      />
      <Box sx={styles?.container}>
        <Image src={imageRoutes?.couple} sx={styles?.image} />
        <Flex sx={styles?.column}>
          <Box>
            <Themed.h1 sx={styles?.title}>SOFIA & JAVI</Themed.h1>
            <Themed.h2>{date}</Themed.h2>
            <Themed.h2 sx={styles?.brigada}>{title}</Themed.h2>

          </Box>
          <Image
            onClick={handleArrow}
            src={imageRoutes?.arrowDown}
            sx={styles?.arrow}
          />
        </Flex>
      </Box>
    </section>
  );
};

export default WelcomeSection;

WelcomeSection.defaultProps = {};
WelcomeSection.propTypes = {};
