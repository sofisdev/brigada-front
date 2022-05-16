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
  row: (disabled = false) => ({
    flexDirection: ['column', 'row'],
    opacity: disabled && '0.5',
  }),
};

export default styles;
