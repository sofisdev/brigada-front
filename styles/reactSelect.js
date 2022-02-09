export const requestsSelectStyle = (theme) => ({
  control: (provided) => ({
    ...provided,
    fontSize: theme?.fontSizes[1],
    boxShadow: 'inset 5px 5px 5px #e1e1e1',
    backgroundColor: '#f8f8f8',
    '&:hover': { backgroundColor: '#dfdfdf' },
    border: 'none',
    borderRadius: '0px',
    cursor: 'pointer',
  }),
  option: (provided) => ({
    ...provided,
    fontSize: theme?.fontSizes[1],
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({}),
});
