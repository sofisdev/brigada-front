const styles = {
  container: (src) => ({
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 100vh',
    height:'100vh',
    width:'100vw',
    position:'absolute',
    zIndex:'-1'
  }),
};

export default styles;
