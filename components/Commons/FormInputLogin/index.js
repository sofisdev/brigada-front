/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Flex, Input, Label, Text } from 'theme-ui';

import styles from './styles';

const FormInputLogin = ({
  label,
  name,
  register,
  isRequired,
  errors,
  errorMessage,
  isHidden,
  disabled,
  ...props
}) => (
  <Flex sx={styles?.field}>
    {label && (
      <Label variant={!disabled ? 'forms.label' : 'forms.labelDisabled'}>
        {label}
      </Label>
    )}
    <Input
      {...register(name, { required: isRequired })}
      {...props}
      disabled={disabled}
    />
    {errors?.[name]?.type === 'required' && (
      <Text variant="errorClear">{errorMessage}</Text>
    )}
  </Flex>
);

export default FormInputLogin;

FormInputLogin.defaultProps = {
  label: 'Enter a label',
  name: 'enterName',
  register: () => {},
  isRequired: false,
  errors: {},
  errorMessage: 'Campo requerido / Required field',
};
FormInputLogin.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  isRequired: PropTypes.bool,
  errors: PropTypes.objectOf(PropTypes.object),
  errorMessage: PropTypes.string,
};
