const styles = {
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  section: (bool, src, srcMobile) => ({
    minHeight: bool ? '900px' : '90vh',
    backgroundImage: [`url(${srcMobile || src})`, `url(${src})`],
    backgroundRepeat: 'no-repeat',
    backgroundSize: ['100vw 150vh', 'contain'],
    backgroundPosition: 'initial',
    width: ['auto', '100vw'],
    maxWidth: ['auto', '100%'],
    maxHeight: ['100%', 'calc(100vh + 85px)'],
    my: '100px',
    p: ['90px 30px', '150px 80px'],  }),
};

export default styles;
