/** @jsxImportSource theme-ui */
import { signIn } from 'next-auth/react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Box, Button, Flex, Heading, Themed } from 'theme-ui';

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
    <Flex sx={styles.mainContainer}>
      <Flex sx={styles.colOneContainer}>
        <Heading as="h1" sx={styles.signUpHeading}>
          WELCOME!
        </Heading>
        <Flex sx={styles.column} as="form" onSubmit={handleSubmit(submitForm)}>
          <Themed.p>
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
    </Flex>
  );
};

LogIn.defaultProps = {};

LogIn.propTypes = {
  callbackUrl: PropTypes.string.isRequired,
};

export default LogIn;
