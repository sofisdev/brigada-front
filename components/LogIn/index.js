/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Box, Button, Flex, Heading, Image, Spinner } from 'theme-ui';

import imageRoutes from '../../constants/imageRoutes';
import Container from '../Commons/Container';
import FormInputLogin from '../Commons/FormInputLogin';
import LoginError from '../Commons/LoginError';
import styles from './styles';

const LogIn = ({ callbackUrl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isErrorForm, setErrorForm] = useState(false);
  const [isPassword, setIsPassword] = useState(true);

  const onSubmit = async (data) => {
    const { weddingId } = data;
    const res = await signIn('credentials', {
      redirect: false,
      weddingId,
      callbackUrl,
    });
    if (res?.error) {
      setError(res.error);
    } else {
      setError(null);
    }
    if (res.url) router.push(res.url);
  };

  const { mutate: submitForm } = useMutation(onSubmit, {
    onMutate: async () => {
      await setLoading(true);
    },
    onSuccess: async () => {
      await setLoading(false);
      console.log('success');
    },
    onError: async (err) => {
      console.log('error', err);

      await setLoading(false);
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
          <Flex sx={styles.inputWrapper}>
            <FormInputLogin
              maxLength={11}
              data-lpignore="true"
              autocomplete="off"
              label="Contraseña / Password:"
              name="weddingId"
              placeholder="password"
              register={register}
              isRequired
              errors={errors}
              type={isPassword ? 'password' : 'text'}
            />
            <Image
              sx={styles.iconPassword}
              onClick={() => setIsPassword(!isPassword)}
              loading="lazy"
              alt="close_icon"
              src={
                isPassword
                  ? imageRoutes.passNotVisible
                  : imageRoutes.passVisible
              }
            />
          </Flex>
          {!isLoading && (
            <Button sx={styles.button} type="submit" variant="login">
              ENVIAR / SUBMIT
            </Button>
          )}
          {isLoading && !isErrorForm && (
            <Spinner sx={styles.spinner} variant="spinner.form" />
          )}
          {error && <LoginError error={error} />}
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
