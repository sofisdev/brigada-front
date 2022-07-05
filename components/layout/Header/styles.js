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
  closedMenu: {
    pr: ['0px', '0px', '50px'],
    alignItems: 'center',
  },
  icon: {
    m: '20px',
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    justifyContent: 'space-between',
  },
  worldIcon: {
    mr: '10px',
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
    width: ['100vw', '100vw', '50vw'],
    maxWidth: ['auto', 'auto', '800px'],
    backgroundColor: 'cream',
    flexDirection: 'column',
    alignItems: ['auto', 'auto', 'flex-end'],
    color: 'darkGreen',
    pr: ['0px', '0px', '50px'],
  },
  closeIcon: {
    width: ['100vw', '100vw', 'auto'],
    justifyContent: 'flex-end',
    mr: ['40px', '40px', '0px'],
  },
  subNavContainer: {
    alignItems: 'center',
    height: '40px',
  },
  navItems: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '70%',
    my: 'auto',
    a: {
      fontSize: '22px',
      textAlign: ['center', 'center', 'right'],
      '&:hover': {
        textDecoration: 'underline',
        textUnderlineOffset: '5px',
        textDecorationThickness: '3px',
      },
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
