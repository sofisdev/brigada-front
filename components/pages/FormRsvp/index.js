/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { Box, Button, Flex, Label, Radio, Text, Themed } from 'theme-ui';

import { options } from '../../../constants/options';
import { postForm } from '../../../repository/platformApi';
import FormAdult from '../../Commons/FormAdult';
import FormInput from '../../Commons/FormInput';
import FormSelect from '../../Commons/FormSelect';
import Select from '../../Commons/ReactSelect';
import styles from './styles';

const FormRsvp = ({ layout }) => {
  const { title, place, href, street, description, warning } = layout.address;
  const [plusOne, setPlusOne] = useState(false);
  const [kid, addKid] = useState(false);

  const queryClient = useQueryClient();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
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
    };
    await postForm(newData);
  };

  const { mutate: submitForm } = useMutation(onSubmit, {
    onSuccess: async () => {
      console.log('SUCCESS');
    },
    onError: console.log,
  });
  return (
    <section id="rsvp" sx={styles?.container}>
      <Box sx={styles.container} as="form" onSubmit={handleSubmit(submitForm)}>
        <Box>
          <Box>
            <FormAdult
              title="Datos de invitado 1"
              errors={errors}
              register={register}
              options={options}
              control={control}
              name="main_"
              isRequired
              selectBus
            />
            <Flex sx={styles.options}>
              <Button onClick={() => setPlusOne(!plusOne)}>
                {plusOne ? 'Quitar acompañante' : 'Añadir acompañante'}
              </Button>
              <Button onClick={() => addKid(!kid)}>
                {kid ? 'Iré sin peques' : '¿Vienes con tus peques?'}
              </Button>
            </Flex>
            {plusOne && (
              <FormAdult
                title="Datos de acompañante"
                errors={errors}
                register={register}
                options={options}
                control={control}
                name="guest_"
                isRequired={!!plusOne}
              />
            )}
            {kid && (
              <>
                <Themed.p>Niños</Themed.p>
                <Flex>
                  <FormSelect
                    label="¿Cuántos peques?"
                    name="kids_qty"
                    control={control}
                    isRequired={!!kid}
                    placeholder="Selecciona una opción."
                    options={options}
                    isSearchable={false}
                    errors={errors}
                  />
                  <FormSelect
                    label="¿Necesitan silla o trona?"
                    name="kids_sitType"
                    control={control}
                    isRequired={!!kid}
                    placeholder="Selecciona una opción"
                    options={options}
                    isSearchable={false}
                    errors={errors}
                  />
                  <Label>¿Quieres menú infantil?</Label>
                  <Label>
                    <Radio
                      {...register('kids_diet', { required: !!kid })}
                      type="radio"
                      value="yes"
                    />
                    <p sx={{ m: '0' }}>Si por favor</p>
                  </Label>
                  <Label>
                    <Radio
                      {...register('kids_diet', { required: !!kid })}
                      type="radio"
                      value="no"
                    />
                    <p sx={{ m: '0' }}>No gracias</p>
                  </Label>
                  {errors?.kids_diet?.type === 'required' && (
                    <Text variant="error">error</Text>
                  )}

                  <FormInput
                    label="Intolerancias / Alergias"
                    name="kid_allergy"
                    placeholder="Celiaco, diabético, intolerancia a la fructosa"
                    register={register}
                    errors={errors}
                  />
                </Flex>
              </>
            )}
          </Box>
          <Button sx={styles.Button} type="submit">
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
