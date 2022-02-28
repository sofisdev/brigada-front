/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Flex, Input, Label, Text } from 'theme-ui';

import styles from './styles';

const FormPhone = ({
  label,
  name,
  register,
  isRequired,
  errors,
  errorMessage,
  isHidden,
  ...props
}) => (
  <Flex sx={styles?.field}>
    {label && <Label>{label}</Label>}

    <Input {...register(name, { required: isRequired })} {...props} />
    {errors?.[name]?.type === 'required' && (
      <Text variant="error">{errorMessage}</Text>
    )}
  </Flex>
);

export default FormInput;

FormInput.defaultProps = {
  label: 'Enter a label',
  name: 'enterName',
  register: () => {},
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
