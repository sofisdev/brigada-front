/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-this-in-sfc */
/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { Box, Flex, Image, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
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
          console.log(
            '🚀 ~ file: index.js ~ line 19 ~ scrollHandler ~ parallaxEl',
            parallaxEl,
          );
          const direction = parallaxEl.dataset.direction == 'up' ? '-' : '';
          const transformY = this.pageYOffset * parallaxEl.dataset.speed;
          parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
        }
      }
    }
    window.addEventListener('scroll', scrollHandler);
  }, [window.pageYOffset]);

  return (
    <section id="home">
      <SpeedBox src={imageRoutes?.desktop_0_Home_back} />
      <Box sx={styles?.container}>
        <Image src={imageRoutes?.couple} sx={styles?.image} />
        <Flex sx={styles?.column}>
          <Box>
            <Themed.h1>{title}</Themed.h1>
            <Themed.h1>{date}</Themed.h1>
          </Box>
          <Image src={imageRoutes?.arrowDown} sx={styles?.arrow} />
        </Flex>
      </Box>
    </section>
  );
};

export default WelcomeSection;

WelcomeSection.defaultProps = {};
WelcomeSection.propTypes = {};
