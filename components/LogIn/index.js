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
    <Box sx={styles.colOneContainer}>
      <Heading as="h1" sx={styles.signUpHeading}>
        WELCOME!
      </Heading>
      <Flex sx={styles.container}>
        <Box as="form" onSubmit={handleSubmit(submitForm)}>
          <Flex sx={styles.cardContainer}>
            <Box>
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
            </Box>
            <Button sx={styles.Button} type="submit">
              CONTINUE
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

LogIn.defaultProps = {};

LogIn.propTypes = {
  callbackUrl: PropTypes.string.isRequired,
};

export default LogIn;
