const styles = {
  container: (src, srcMobile) => ({
    backgroundImage: [`url(${srcMobile || src})`, `url(${src})`],
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition:'center',
    my:'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    height: '100vh',
    width: '100vw',
    maxWidth: '100%',
  }),
};

export default styles;
