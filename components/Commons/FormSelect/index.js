/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Controller } from 'react-hook-form';
import { Label, Text } from 'theme-ui';

import Select from '../ReactSelect';

const FormSelect = ({
  label,
  name,
  control,
  isRequired,
  errors,
  errorMessage,
  ...props
}) => (
  <>
    {label && <Label>{label}</Label>}
    <Controller
      name={name}
      control={control}
      rules={{ required: isRequired }}
      render={({ field }) => <Select {...field} {...props} />}
    />
    {errors?.[name]?.type === 'required' && (
      <Text variant="error">{errorMessage}</Text>
    )}
  </>
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
