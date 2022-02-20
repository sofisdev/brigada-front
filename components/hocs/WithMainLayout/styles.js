import imageRoutes from '../../../constants/imageRoutes';

const styles = {
  container: {
    flexDirection: 'column',
    m: '0',
    '::before': {
      content: '""',
      backgroundImage: `url(${imageRoutes?.background})`,
      minHeight: '100vh',
      width: 'auto',
      height: '100%',
      backgroundSize: 'cover',
      opacity: '0.5',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  },
  content: {
    position: 'relative',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: '50px',
    m: '0px auto auto auto',
  },
};

export default styles;
