/** @jsxImportSource theme-ui */
import { signIn } from 'next-auth/react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Box, Button, Flex, Grid, Heading, Input, Themed } from 'theme-ui';

import styles from './styles';

const LogIn = ({ callbackUrl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await signIn('credentials', { callbackUrl });
  };

  const { mutate: submitForm } = useMutation(onSubmit, {
    onSuccess: async () => {
      console.log('success');
    },
    onError: console.log,
  });
  return (
    <Grid sx={styles.gridContainer}>
      <Flex sx={styles.colOneContainer}>
        <Heading as="h1" sx={styles.signUpHeading}>
          WELCOME!
        </Heading>
        <Flex sx={styles.container}>
          <Box as="form" onSubmit={handleSubmit(submitForm)}>
            <Grid sx={styles.gridContainer}>
              <Flex sx={styles.cardContainer}>
                <Box>
                  <Themed.p>
                    Enter required fields and hit save to create new contact.
                  </Themed.p>
                  <Input
                    label="Enter Password"
                    name="weddingId"
                    placeholder="password"
                    register={register}
                    isRequired
                    errors={errors}
                    // defaultValue={isEditMode && contactByIdData?.firstName}
                  />
                </Box>
                <Button sx={styles.Button} type="submit">
                  CONTINUE
                </Button>
              </Flex>
            </Grid>
          </Box>
        </Flex>
      </Flex>
    </Grid>
  );
};

LogIn.defaultProps = {};

LogIn.propTypes = {
  callbackUrl: PropTypes.string.isRequired,
};

export default LogIn;
