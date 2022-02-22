/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { forwardRef } from 'react';
import ReactSelect from 'react-select';
import { useThemeUI } from 'theme-ui';

const Select = forwardRef(({ styles, ...props }, ref) => {
  const { theme } = useThemeUI();
  return <ReactSelect styles={styles(theme)} ref={ref} {...props} />;
});

export default Select;

Select.defaultProps = {
  styles: () => {},
};
Select.propTypes = {
  styles: PropTypes.func,
};
