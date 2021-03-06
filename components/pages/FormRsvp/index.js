/** @jsxImportSource theme-ui */
import Router from 'next/router';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Box, Button, Flex, Image, Spinner, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import { menus, transportation } from '../../../constants/options';
import routes from '../../../constants/routes';
import { postForm } from '../../../repository/platformApi';
import FormAdult from '../../Commons/FormAdult';
import FormRadio from '../../Commons/FormRadio';
import FormTextArea from '../../Commons/FormTextArea';
import styles from './styles';

const FormRsvp = ({ layout, language }) => {
  const {
    titleGuestData,
    titlePlusOneData,
    guestLabel,
    kidLabel,
    optionsRadio,
    errorMessage,
    caption,
    success,
    title,
  } = layout.form;

  const [plusOne, setPlusOne] = useState('false');
  const [kid, addKid] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState();
  const [isErrorForm, setErrorForm] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    resetField,
    formState: { errors },
    setValue,
  } = useForm();

  const handleChangeGuest = (e) => {
    setPlusOne(e.target.value);
    setValue('guest_plusOne', e.target.value);
  };
  const handleChangeKid = (e) => {
    addKid(e.target.value);
    setValue('kids', e.target.value);
  };

  useEffect(() => {
    if (plusOne === 'false') {
      const fieldsToReset = [
        'guest_name',
        'guest_lastName',
        'guest_diet',
        'guest_allergy',
      ];
      fieldsToReset.forEach((field) => resetField(field));
    }
  }, [plusOne]);

  const onSubmit = async (data) => {
    const newData = {
      main_name: data?.main_name,
      main_lastName: data?.main_lastName,
      main_diet: data?.main_diet?.value,
      main_allergy: data?.main_allergy || null,
      main_bus: data?.main_bus?.value,
      guest_plusOne: data?.guest_plusOne || null,
      kids: data?.kids || null,
      guest_name: data?.guest_name || null,
      guest_lastName: data?.guest_lastName || null,
      guest_diet: data?.guest_diet?.value || null,
      guest_allergy: data?.guest_allergy || null,
      comments: data?.comments || null,
      date: new Date().toISOString(),
    };
    await postForm(newData);
  };

  const { mutate: submitForm } = useMutation(onSubmit, {
    onMutate: async () => {
      await setLoading(true);
    },
    onSuccess: async () => {
      console.log('success');
      await setLoading(false);
      await setSuccess(true);
      Router.push({
        hash: routes?.patreon,
      });
    },
    onError: async (err) => {
      await setLoading(false);
      await setErrorForm(true);
    },
  });

  const handleArrow = () =>
    Router.push({
      hash: routes?.patreon,
    });

  return (
    <section
      id="rsvp"
      sx={styles.section(
        kid && plusOne,
        imageRoutes?.desktop_0_back,
        imageRoutes?.mobile_0_back4,
      )}
    >
      <Box
        sx={() => styles.container}
        as="form"
        onSubmit={handleSubmit(submitForm)}
      >
        <Themed.h1>{title}</Themed.h1>
        <Box sx={styles.formSection}>
          <Flex sx={styles.options}>
            <FormRadio
              register={register}
              label={guestLabel}
              handleChange={handleChangeGuest}
              option1={optionsRadio?.[0]}
              option2={optionsRadio?.[1]}
              name="guest_plusOne"
              errors={errors}
              disabled={isLoading || isSuccess || isErrorForm}
              errorMessage={errorMessage}
            />
            <FormRadio
              register={register}
              label={kidLabel}
              handleChange={handleChangeKid}
              option1={optionsRadio?.[0]}
              option2={optionsRadio?.[1]}
              name="kids"
              errors={errors}
              disabled={isLoading || isSuccess || isErrorForm}
              errorMessage={errorMessage}
            />
          </Flex>
          <FormAdult
            title={titleGuestData}
            errors={errors}
            register={register}
            optionsMenus={menus}
            optionsTransport={transportation}
            control={control}
            name="main_"
            isRequired
            selectBus
            language={language}
            disabled={isLoading || isSuccess || isErrorForm}
            errorMessage={errorMessage}
          />
          <FormAdult
            title={titlePlusOneData}
            errors={errors}
            register={register}
            optionsMenus={menus}
            control={control}
            name="guest_"
            isRequired={!!plusOne}
            language={language}
            disabled={
              isLoading || plusOne === 'false' || isSuccess || isErrorForm
            }
            errorMessage={errorMessage}
          />
          <FormTextArea
            label={
              language === 'es'
                ? 'D??janos comentarios o preguntas (opcional)'
                : 'Do you have any questions or comments? (optional)'
            }
            name="comments"
            placeholder={
              language === 'es'
                ? 'D??janos tus comentarios...'
                : 'Leave us your comments...'
            }
            register={register}
            errors={errors}
            disabled={isLoading || isSuccess || isErrorForm}
            errorMessage={errorMessage}
          />
          {!isLoading && (
            <Button
              sx={styles.button}
              type="submit"
              disabled={isLoading || isSuccess || isErrorForm}
            >
              {!isLoading && !isSuccess ? caption : isSuccess && success}
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
          <Flex sx={styles?.rowCenter}>
            <Image
              loading="lazy"
              alt="arrow-icon"
              src={imageRoutes?.arrowDown}
              sx={styles?.arrow}
              onClick={handleArrow}
            />
          </Flex>
        </Box>
      </Box>
    </section>
  );
};

export default FormRsvp;

FormRsvp.defaultProps = {};
FormRsvp.propTypes = {
  layout: PropTypes.shape({}).isRequired,
};
