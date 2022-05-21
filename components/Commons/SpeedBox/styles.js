const styles = {
  container: (src, srcMobile) => ({
    backgroundImage: [`url(${srcMobile || src})`, `url(${src})`],
    backgroundRepeat: 'no-repeat',
    backgroundSize: ['contain', 'cover'],
    height: '100%',
    width: '100vw',
    position: 'absolute',
    top: ['60px', '0px'],
    zIndex: '-1',
    maxWidth: '100%',
    maxHeight: ['100vh', 'calc(100vh + 85px)'],
    opacity: ['0.8', '1'],
  }),

  drops: (src) => ({
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '220px',
    width: '500px',
    position: 'absolute',
    zIndex: '-1',
    left: '30vw',
  }),

  mancha1: (src) => ({
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '400px',
    width: '400px',
    position: 'absolute',
    zIndex: '-1',
    right: '10px',
    bottom: '-50px',
  }),

  mancha3: (src) => ({
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '600px',
    width: '600px',
    position: 'absolute',
    zIndex: '-1',
    left: '50px',
    bottom: '200px',
    opacity: '0.5',
  }),

  right: (src) => ({
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 600px',
    height: '600px',
    width: '100%',
    position: 'absolute',
    right: 0,
    zIndex: '-1',
  }),
};

export default styles;
