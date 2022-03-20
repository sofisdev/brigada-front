/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Box, Flex, Image, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import Container from '../../Commons/Container';
import styles from './styles';

const WelcomeSection = ({ layout }) => {
  const { date, title } = layout.home;
  let lastScrollTop = window.pageYOffset;

  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener(
    'scroll',
    () => {
      // or window.addEventListener("scroll"....
      const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        console.log('DOWN');
      } else {
        console.log('UPPP');
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false,
  );

  
  return (
    <section id="home">
      <Container src={imageRoutes?.desktop_0_Home_back}>
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
      </Container>
    </section>
  );
};

export default WelcomeSection;

WelcomeSection.defaultProps = {};
WelcomeSection.propTypes = {};
