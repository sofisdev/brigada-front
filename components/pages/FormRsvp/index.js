/** @jsxImportSource theme-ui */
import Router from 'next/router';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Box, Button, Flex, Image, Spinner } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import { menus, transportation } from '../../../constants/options';
import routes from '../../../constants/routes';
import { postForm } from '../../../repository/platformApi';
import { scrollControll } from '../../../utils/scrollControll';
import FormAdult from '../../Commons/FormAdult';
import FormRadio from '../../Commons/FormRadio';
import FormTextArea from '../../Commons/FormTextArea';
import SpeedBox from '../../Commons/SpeedBox';
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
  } = layout.form;

  const [plusOne, setPlusOne] = useState(null);
  const [kid, addKid] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  window.addEventListener('scroll', scrollControll);

  const handleChangeGuest = (e) => {
    setPlusOne(e.target.value);
  };
  const handleChangeKid = (e) => {
    addKid(e.target.value);
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      await setLoading(false);
      await setSuccess(true);
      Router.push({
        hash: routes?.patreon,
        query: { isKid: kid, success: true },
      });
    },
    onError: console.log,
  });

  const handleArrow = () =>
    Router.push({
      hash: routes?.patreon,
      query: { isKid: kid, success: true },
    });

  return (
    <section id="rsvp" sx={styles.section(kid && plusOne, imageRoutes?.desktop_0_back)}>
      {/* <SpeedBox
        speed="0.1"
        src={imageRoutes?.desktop_0_back}
      /> */}
      <Box sx={() => styles.container} as="form" onSubmit={handleSubmit(submitForm)}>
        <Box sx={styles.formSection}>
          <Flex sx={styles.options}>
            <FormRadio
              register={register}
              label={guestLabel}
              handleChange={(event) => handleChangeGuest(event)}
              option1={optionsRadio?.[0]}
              option2={optionsRadio?.[1]}
              name="guest_plusOne"
              errors={errors}
              disabled={isLoading || isSuccess}
              errorMessage={errorMessage}
            />
            <FormRadio
              register={register}
              label={kidLabel}
              handleChange={(event) => handleChangeKid(event)}
              option1={optionsRadio?.[0]}
              option2={optionsRadio?.[1]}
              name="kids"
              errors={errors}
              disabled={isLoading || isSuccess}
              errorMessage={errorMessage}
            />
          </Flex>
          <FormAdult
            title={titlePlusOneData}
            errors={errors}
            register={register}
            optionsMenus={menus}
            optionsTransport={transportation}
            control={control}
            name="main_"
            isRequired
            selectBus
            language={language}
            disabled={isLoading || isSuccess}
            errorMessage={errorMessage}
          />
          {plusOne === 'true' && (
            <FormAdult
              title={titleGuestData}
              errors={errors}
              register={register}
              optionsMenus={menus}
              control={control}
              name="guest_"
              isRequired={!!plusOne}
              language={language}
              disabled={isLoading || isSuccess}
              errorMessage={errorMessage}
            />
          )}
          <FormTextArea
            label={
              language === 'es'
                ? 'Déjanos comentarios o preguntas (opcional)'
                : 'Do you any questions or comments? (optional)'
            }
            name="comments"
            placeholder={
              language === 'es'
                ? 'Déjanos tus comentarios...'
                : 'Leave us your comments...'
            }
            register={register}
            errors={errors}
            disabled={isLoading || isSuccess}
            errorMessage={errorMessage}
          />
          <Button
            sx={styles.button}
            type="submit"
            disabled={isLoading || isSuccess}
          >
            {!isLoading && !isSuccess ? caption : isSuccess && success}
            {isLoading && <Spinner variant="spinner.form" />}
          </Button>

          <Flex sx={styles?.rowCenter}>
            <Image
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
FormRsvp.propTypes = {};
