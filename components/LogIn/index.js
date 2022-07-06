/** @jsxImportSource theme-ui */
import { signIn } from 'next-auth/react';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Box, Button, Flex, Heading, Spinner } from 'theme-ui';

import imageRoutes from '../../constants/imageRoutes';
import Container from '../Commons/Container';
import FormInputLogin from '../Commons/FormInputLogin';
import styles from './styles';

const LogIn = ({ callbackUrl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [isErrorForm, setErrorForm] = useState(false);

  const onSubmit = async (data) => {
    const { weddingId } = data;
    await signIn('credentials', { weddingId, callbackUrl });
  };

  const { mutate: submitForm } = useMutation(onSubmit, {
    onMutate: async () => {
      await setLoading(true);
    },
    onSuccess: async () => {
      // await setLoading(false);
      console.log('success');
    },
    onError: async () => {
      // await setLoading(false);
      await setErrorForm(true);
    },
  });
  return (
    <Container
      src={imageRoutes?.desktop_0_Home}
      srcMobile={imageRoutes?.mobile_login}
    >
      <Flex sx={styles.colOneContainer}>
        <Heading as="h1" sx={styles.text}>
          ¡SOMOS BRIGADA!
        </Heading>
        <Flex sx={styles.column} as="form" onSubmit={handleSubmit(submitForm)}>
          <FormInputLogin
            label="Contraseña / Password:"
            name="weddingId"
            placeholder="password"
            register={register}
            isRequired
            errors={errors}
            type="password"
          />
          {!isLoading && (
            <Button sx={styles.button} type="submit">
              ENVIAR / SUBMIT
            </Button>
          )}
          {isLoading && !isErrorForm && (
            <Spinner sx={styles.spinner} variant="spinner.form" />
          )}
          {isErrorForm && (
            <Box sx={styles.errorForm}>
              Error en el formulario, por favor contacte a los novios
            </Box>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

LogIn.defaultProps = {};

LogIn.propTypes = {
  callbackUrl: PropTypes.string.isRequired,
};

export default LogIn;
