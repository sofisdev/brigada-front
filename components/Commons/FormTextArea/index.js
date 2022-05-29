/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Flex, Label, Text, Textarea } from 'theme-ui';

import styles from './styles';

const FormTextArea = ({
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
    {label && <Label variant={!disabled ? 'forms.label' : 'forms.labelDisabled'}>{label}</Label>}

    <Textarea disabled={disabled} {...register(name, { required: isRequired })} {...props} />
    {errors?.[name]?.type === 'required' && (
      <Text variant="error">{errorMessage}</Text>
    )}
  </Flex>
);

export default FormTextArea;

FormTextArea.defaultProps = {
  label: 'Enter a label',
  name: 'enterName',
  register: () => {},
  isRequired: false,
  errors: {},
  errorMessage: 'This field is required',
};
FormTextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  isRequired: PropTypes.bool,
  errors: PropTypes.objectOf(PropTypes.object),
  errorMessage: PropTypes.string,
};
