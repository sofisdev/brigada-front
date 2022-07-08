/** @jsxImportSource theme-ui */

import { Box, Text } from 'theme-ui';

import styles from './styles';

const errors = {
  CredentialsSignin: { es: 'Contraseña errónea', en: 'Wrong password' },
  default: { es: 'Error de acceso', en: 'Unable to sign in' },
};
const LoginError = ({ error }) => {
  const errorMessage = error && (errors[error] ?? errors.default);
  return (
    <Box sx={styles.errorForm}>
      <Text as="p" variant="errorClear">
        {errorMessage.es}
      </Text>
      <Text as="p" variant="errorClear">
        {errorMessage.en}
      </Text>
    </Box>
  );
};
export default LoginError;
