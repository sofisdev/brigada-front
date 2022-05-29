const styles = {
  field: {
    flexDirection: 'column',
    mr: ['0px', '20px'],
    flexGrow: '2',
  },
  heading:(disabled = false) => ( {
    mt: '35px',
    textTransform: 'uppercase',
    fontFamily: 'headingBold',
    opacity: disabled && '0.5',
  }),
  row: {
    flexDirection: ['column', 'row'],
  },
};

export default styles;
