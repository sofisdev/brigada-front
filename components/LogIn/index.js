/** @jsxImportSource theme-ui */
import { signIn } from 'next-auth/react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Button, Flex, Heading, Themed } from 'theme-ui';

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
    onError: console.log,
  });
  return (
    <Container src={imageRoutes?.desktop_0_Home}>
      <Flex sx={styles.colOneContainer}>
        <Heading as="h1" sx={styles.text}>
          WELCOME!
        </Heading>
        <Flex sx={styles.column} as="form" onSubmit={handleSubmit(submitForm)}>
          <Themed.p sx={styles.text}>
            Enter required fields and hit save to create new contact.
          </Themed.p>
          <FormInput
            label="Enter Password"
            name="weddingId"
            placeholder="password"
            register={register}
            isRequired
            errors={errors}
          />
          <Button sx={styles.button} type="submit">
            CONTINUE
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
