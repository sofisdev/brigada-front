/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Box, Flex, Label, Radio, Text } from 'theme-ui';

import styles from './styles';

const FormRadio = ({
  label,
  name,
  register,
  handleChange,
  option1,
  option2,
  errors,
  errorMessage,
  ...props
}) => (
  <Box sx={styles.field}>
    <Label>{label}</Label>
    <Flex>
      <Label>
        <Radio
          {...register(name, { required: true })}
          {...props}
          type="radio"
          value
          onChange={handleChange}
        />
        <p sx={{ m: '0' }}>{option1}</p>
      </Label>
      <Label>
        <Radio
          {...register(name, { required: true })}
          type="radio"
          value={false}
          onChange={handleChange}
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
