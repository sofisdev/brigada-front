import { keyframes } from '@emotion/react';

const fadeIn = keyframes({ from: { right: '-200px' }, to: { right: 0 } });

const styles = {
  headerContainer: {
    position: 'fixed',
    width: '100vw',
    zIndex: 10,
    justifyContent: 'flex-end',
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
    animation: `${fadeIn} 0.5s linear`,
    position: 'absolute',
    height: '100vh',
    width:'50vw',
    maxWidth:'800px',
    backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: 'darkGreen',
  },
  subNavContainer: {
    alignItems: 'center',
    height: '40px',
    boxShadow: '0px 5px 15px 4px rgba(0,0,0,0.1)',
  },
  navItems: { justifyContent: 'space-between', flexDirection: 'column' },
  verticalDivider: {
    borderLeft: '1px solid',
    height: '20px',
  },
  isItemActive: {
    fontFamily: 'bold',
  },
};

export default styles;
