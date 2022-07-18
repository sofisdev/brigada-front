/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Box, Flex, Label, Radio, Text } from 'theme-ui';

import styles from './styles';

const FormRadio = ({
  label,
  name,
  defaultChecked,
  disabled,
  register,
  handleChange,
  option1,
  option2,
  errors,
  errorMessage,
  ...props
}) => (
  <Box sx={styles.field}>
    <Label variant={!disabled ? 'forms.label' : 'forms.labelDisabled'}>{label}</Label>
    <Flex>
      <Label variant={!disabled ? 'forms.label' : 'forms.labelDisabled'}>
        <Radio
          {...register(name, { required: true })}
          {...props}
          type="radio"
          value="true"
          onChange={handleChange}
          disabled={disabled}
        />
        <p sx={{ m: '0' }}>{option1}</p>
      </Label>
      <Label variant={!disabled ? 'forms.label' : 'forms.labelDisabled'}>
        <Radio
          {...register(name, { required: true })}
          type="radio"
          value="false"
          onChange={handleChange}
          disabled={disabled}
          defaultChecked
        />
        <p sx={{ m: '0' }}>{option2}</p>
      </Label>
    </Flex>
    {errors?.[name]?.type === 'required' && (
      <Text variant="error">{errorMessage}</Text>
    )}
  </Box>
);

export default FormRadio;

FormRadio.defaultProps = {
  label: '',
  name: 'enterName',
  control: {},
  isRequired: false,
  errors: {},
  errorMessage: 'This field is required',
};
FormRadio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.objectOf(PropTypes.any),
  isRequired: PropTypes.bool,
  errors: PropTypes.objectOf(PropTypes.object),
  errorMessage: PropTypes.string,
};
