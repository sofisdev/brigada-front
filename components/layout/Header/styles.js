import { keyframes } from '@emotion/react';

const fadeInMobile = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
});

const styles = {
  headerContainer: {
    position: 'fixed',
    width: '100vw',
    zIndex: 10,
    justifyContent: 'flex-end',
    bg: '(background, 0.5)',
    boxShadow: '0px 5px 15px 4px rgba(0,0,0,0.1)',
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: 'blur(10px)',
  },
  icon: {
    m: '20px',
  },
  topBanner: {
    alignItems: 'center',
    bg: 'darkBlue',
  },
  logo: {
    ml: '40px',
    height: '95px',
    width: '300px',
  },
  navContainer: {
    animation: `${fadeInMobile} 0.5s linear`,
    position: 'absolute',
    height: '100vh',
    width: ['100vw', '50vw'],
    maxWidth: ['auto', '800px'],
    backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: 'darkGreen',
    p: '20px',
  },
  subNavContainer: {
    alignItems: 'center',
    height: '40px',
    boxShadow: '0px 5px 15px 4px rgba(0,0,0,0.1)',
  },
  navItems: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '70%',
    my: 'auto',
    a: {
      fontSize: '22px',
      textAlign: ['center', 'right'],
    },
  },
  verticalDivider: {
    borderLeft: '1px solid',
    height: '13px 20px',
  },
  isItemActive: {
    fontFamily: 'bold',
  },
};

export default styles;
