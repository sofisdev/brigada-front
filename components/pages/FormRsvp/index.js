/** @jsxImportSource theme-ui */
import Router from 'next/router';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { Box, Button, Flex } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import {
  kidsQty,
  menus,
  sitting,
  transportation,
} from '../../../constants/options';
import routes from '../../../constants/routes';
import { postForm } from '../../../repository/platformApi';
import { scrollControll } from '../../../utils/scrollControll';
import FormAdult from '../../Commons/FormAdult';
import FormKids from '../../Commons/FormKids';
import FormRadio from '../../Commons/FormRadio';
import FormTextArea from '../../Commons/FormTextArea';
import SpeedBox from '../../Commons/SpeedBox';
import styles from './styles';

const FormRsvp = ({ layout, language }) => {
  const { title, place, href, street, description, warning } = layout.address;
  const [plusOne, setPlusOne] = useState(false);
  const [kid, addKid] = useState(false);
  const [addGuestLabel, setAddGuestLabel] = useState();
  const [addKidLabel, setAddKidLabel] = useState();
  const [optionsRadio, setOptionsRadio] = useState([]);
  window.addEventListener('scroll', scrollControll);

  useEffect(() => {
    setAddGuestLabel(
      language === 'es' ? '¿Vienes con acompañante?' : 'Add Plus-One',
    );
    setAddKidLabel(
      language === 'es'
        ? '¿Vienes con tu(s) peque(s)?'
        : 'Are you bringing kids?',
    );
    setOptionsRadio(language === 'es' ? ['Si', 'No'] : ['Yes', 'No']);
  }, [language]);

  const handleChangeGuest = () => {
    setPlusOne(!plusOne);
  };
  const handleChangeKid = () => {
    addKid(!kid);
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
      guest_name: data?.guest_name || null,
      guest_lastName: data?.guest_lastName || null,
      guest_diet: data?.guest_diet?.value || null,
      guest_allergy: data?.guest_allergy || null,
      kids_qty: data?.kids_qty?.value || null,
      kids_sitType: data?.kids_sitType?.value || null,
      kids_diet: data?.kids_diet?.value || null,
      kid_allergy: data?.kid_allergy || null,
      comments: data?.comments || null,
      date: new Date().toISOString(),
    };
    await postForm(newData);
  };

  const { mutate: submitForm } = useMutation(onSubmit, {
    onSuccess: async () => {
      Router.push(routes?.patreon);
    },
    onError: console.log,
  });
  return (
    <section id="rsvp">
      <SpeedBox
        className="form"
        src={imageRoutes?.desktop_0_Home_back}
        speed="-0.3"
      />
      <Box
        className="reveal"
        sx={styles.container(kid && plusOne)}
        as="form"
        onSubmit={handleSubmit(submitForm)}
      >
        <Flex sx={styles.options}>
          <FormRadio
            label={addGuestLabel}
            handleChange={handleChangeGuest}
            option1={optionsRadio?.[0]}
            option2={optionsRadio?.[1]}
            name="guestQuery"
          />
          <FormRadio
            label={addKidLabel}
            handleChange={handleChangeKid}
            option1={optionsRadio?.[0]}
            option2={optionsRadio?.[1]}
            name="kidsQuery"
          />
        </Flex>

        <Box>
          <Box sx={styles.formSection}>
            <FormAdult
              title="Datos de invitado 1"
              errors={errors}
              register={register}
              optionsMenus={menus}
              optionsTransport={transportation}
              control={control}
              name="main_"
              isRequired
              selectBus
              language={language}
            />
            {plusOne && (
              <FormAdult
                title="Datos de acompañante"
                errors={errors}
                register={register}
                optionsMenus={menus}
                control={control}
                name="guest_"
                isRequired={!!plusOne}
                language={language}
              />
            )}
            {kid && (
              <FormKids
                control={control}
                errors={errors}
                optionsQty={kidsQty}
                optionsSitting={sitting}
                register={register}
                kid={kid}
                language={language}
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
            />
          </Box>

          <Button sx={styles.button} type="submit">
            SAVE
          </Button>
        </Box>
      </Box>
    </section>
  );
};

export default FormRsvp;

FormRsvp.defaultProps = {};
FormRsvp.propTypes = {};
