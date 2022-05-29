/** @jsxImportSource theme-ui */
import { signIn } from 'next-auth/react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Button, Flex, Heading } from 'theme-ui';

import imageRoutes from '../../constants/imageRoutes';
import Container from '../Commons/Container';
import FormInput from '../Commons/FormInput';
import styles from './styles';

const LogIn = ({ callbackUrl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { weddingId } = data;
    await signIn('credentials', { weddingId, callbackUrl });
  };

  const { mutate: submitForm } = useMutation(onSubmit, {
    onSuccess: async () => {
      console.log('success');
    },
    onError: console.log('error on submit login'),
  });
  return (
    <Container src={imageRoutes?.desktop_0_Home} srcMobile={imageRoutes?.mobile_login}>
      <Flex sx={styles.colOneContainer}>
        <Heading as="h1" sx={styles.text}>
          ¡SOMOS BRIGADA!
        </Heading>
        <Flex sx={styles.column} as="form" onSubmit={handleSubmit(submitForm)}>
          <FormInput
            label="Contraseña / Password:"
            name="weddingId"
            placeholder="password"
            register={register}
            isRequired
            errors={errors}
            type="password"
          />
          <Button sx={styles.button} type="submit">
            ENVIAR / SUBMIT
          </Button>
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
