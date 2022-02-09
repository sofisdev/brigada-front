const styles = {
  headerContainer: {
    display: ['none', 'inline'],
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 10,
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
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    px: '25px',
    backgroundColor: 'white',
    boxShadow: '0px 5px 15px 4px rgba(0,0,0,0.1)',
  },
  subNavContainer: {
    alignItems: 'center',
    height: '40px',
    px: '25px',
    backgroundColor: 'lightGray',
    boxShadow: '0px 5px 15px 4px rgba(0,0,0,0.1)',
  },
  navItems: { justifyContent: 'space-around' },
  verticalDivider: {
    borderLeft: '1px solid',
    height: '20px',
  },
  isItemActive: (bool) => ({
    fontFamily: bool ? 'bold' : 'regular',
  }),
};

export default styles;
