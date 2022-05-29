/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Controller } from 'react-hook-form';
import { Box, Label, Text } from 'theme-ui';

import Select from '../ReactSelect';
import styles from './styles';

const FormSelect = ({
  label,
  name,
  control,
  isRequired,
  errors,
  errorMessage,
  disabled,
  ...props
}) => (
  <Box sx={styles.field}>
    {label && <Label variant={!disabled ? 'forms.label' : 'forms.labelDisabled'}>{label}</Label>}
    <Controller
      name={name}
      control={control}
      rules={{ required: isRequired }}
      render={({ field }) => (
        <Select {...field} {...props} isDisabled={disabled} />
      )}
    />
    {errors?.[name]?.type === 'required' && (
      <Text variant="error">{errorMessage}</Text>
    )}
  </Box>
);

export default FormSelect;

FormSelect.defaultProps = {
  label: '',
  name: 'enterName',
  control: {},
  isRequired: false,
  errors: {},
  errorMessage: 'This field is required',
};
FormSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.objectOf(PropTypes.any),
  isRequired: PropTypes.bool,
  errors: PropTypes.objectOf(PropTypes.object),
  errorMessage: PropTypes.string,
};
