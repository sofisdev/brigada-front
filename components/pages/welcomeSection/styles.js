const styles = {
  container: {
    display: 'flex',
    flexDirection: ['column', 'row'],
    justifyContent: 'center',
    textAlign: 'right',
    alignItems: 'center',
    minHeight: ['80vh', '100vh'],
    p: ['105px 30px 0px 30px', '20px 80px'],
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    clipPath: 'polygon(30% 70% 70% 30% / 30% 30% 70% 70%)',
    maxWidth: ['80vw', '380px', '480px'],
    height: 'auto',
  },
  arrow: {
    width: '50px',
    height: 'auto',
    mt: ['40px', '80px'],
  },
  brigada: {
    fontFamily: 'regular',
    fontSize: '18px',
    mt: '0px',
  },
  brigadaContainer: {
    fontFamily: 'regular',
    fontSize: '20px',
    mt: '45px',
  },
  date: {
    fontSize: '45px',
    variant: 'text.heading',
    fontWeight: 'body',
    mb: '45px',
    color: 'black',
  },
  title: {
    color: 'black',
    fontSize: [8, '60px'],
    pt: ['20px', '0px'],
  },
};

export default styles;
