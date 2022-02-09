const styles = {
  container: {
    mt: 'auto',
    gridTemplateColumns: ['1fr', '1fr 1fr 1fr'],
    backgroundColor: 'darkBlue',
  },
  colOneContainer: {
    flexDirection: ['column', 'row'],
    justifyContent: 'space-around',
    alignItems: 'center',
    justifySelf: 'center',
    alignSelf: 'center',
    width: '330px',
    order: ['2', '1'],
  },
  colTwoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    bottom: '30px',
    order: ['1', '2'],
    mb: ['-30px', '0'],
  },
  colTwoCirlce: {
    height: '60px',
    width: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 'circle',
  },
  colTwoLogo: {
    fontFamily: 'bold',
    fontSize: 3,
    fontWeight: 'bold',
    color: 'darkBlue',
    mb: '2px',
  },
  colTwoText: { fontSize: 1, color: 'background', textTransform: 'uppercase' },
  colThreeContainer: {
    justifySelf: 'center',
    alignSelf: 'center',
    fontSize: 1,
    color: 'background',
    order: '3',
    mb: ['10px', '0'],
  },
};

export default styles;
