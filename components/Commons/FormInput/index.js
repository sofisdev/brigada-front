/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Input, Label, Text } from 'theme-ui';

const FormInput = ({

  label,
  name,
  register,
  isRequired,
  errors,
  errorMessage,
  isHidden,
  ...props
}) => (
  <>
    <Label>{label}</Label>

    <Input {...register(name, { required: isRequired })} {...props} />
    {errors?.[name]?.type === 'required' && (
      <Text variant="error">{errorMessage}</Text>
    )}
  </>
);

export default FormInput;

FormInput.defaultProps = {
  label: 'Enter a label',
  name: 'enterName',
  register: () => { },
  isRequired: false,
  errors: {},
  errorMessage: 'This field is required',
};
FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  isRequired: PropTypes.bool,
  errors: PropTypes.objectOf(PropTypes.object),
  errorMessage: PropTypes.string,
};
