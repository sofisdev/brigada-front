const styles = {
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100vw',
    zIndex: 10,
    justifyContent: 'flex-end',
    // px: '50px',
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
    position: 'absolute',
    height: '100vh',
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
