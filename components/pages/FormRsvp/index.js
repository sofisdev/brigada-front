/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { Box, Button, Flex, Label, Radio, Text, Themed } from 'theme-ui';

import { options } from '../../../constants/options';
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
    console.log('🚀 ~ file: index.js ~ line 11 ~ onSubmit ~ data', data);
  };

  const { mutate: submitForm } = useMutation(onSubmit, {
    onSuccess: async () => {
      console.log('SUCCESS');
    },
    onError: console.log,
  });
  return (
    <section id="rsvp" sx={styles?.container}>
      <Flex sx={styles.container}>
        <Box as="form" onSubmit={handleSubmit(submitForm)}>
          <Flex sx={styles.cardContainer}>
            <Box>
              <Label>Confirma tu asistencia</Label>
              <Label>
                <Radio
                  {...register('rsvp', { required: true })}
                  type="radio"
                  value="yes"
                />
                <p sx={{ m: '0' }}>¡Allí estaré!</p>
              </Label>
              <Label>
                <Radio
                  {...register('rsvp', { required: true })}
                  type="radio"
                  value="no"
                />
                <p sx={{ m: '0' }}>No podré asistir</p>
              </Label>
              <Button onClick={() => setPlusOne(!plusOne)}>
                {plusOne ? 'Quitar acompañante' : 'Añadir acompañante'}
              </Button>
              <Button onClick={() => addKid(!kid)}>
                {kid ? 'Iré sin peques' : '¿Vienes con tus peques?'}
              </Button>

              <Themed.p>Datos de invitado 1</Themed.p>
              <Box>
                <FormInput
                  label="Nombre"
                  name="nombre"
                  placeholder="Nombre"
                  register={register}
                  isRequired
                  errors={errors}
                />
                <FormInput
                  label="Apellidos"
                  name="apellidos"
                  placeholder="Apellidos"
                  register={register}
                  isRequired
                  errors={errors}
                />
                <FormSelect
                  label="Dieta"
                  name="dieta"
                  control={control}
                  isRequired
                  placeholder="Selecciona dieta"
                  options={options}
                  isSearchable={false}
                  errors={errors}
                />
                <FormInput
                  label="Intolerancias / Alergias"
                  name="intolerancias"
                  placeholder="Celiaco, diabético, intolerancia a la fructosa"
                  register={register}
                  errors={errors}
                />
                <FormSelect
                  label="¿Vas a venir en Bus? Selecciona horario de vuelta"
                  name="bus"
                  control={control}
                  placeholder="Selecciona horario de vuelta"
                  options={options}
                  isSearchable={false}
                  errors={errors}
                />
              </Box>

              {plusOne && (
                <>
                  <Themed.p>Datos de invitado 1</Themed.p>
                  <Box>
                    <FormInput
                      label="Nombre"
                      name="plusOne_nombre"
                      placeholder="Nombre"
                      register={register}
                      isRequired={!!plusOne}
                      errors={errors}
                    />
                    <FormInput
                      label="Apellidos"
                      name="plusOne_apellidos"
                      placeholder="Apellidos"
                      register={register}
                      isRequired={!!plusOne}
                      errors={errors}
                    />
                    <FormSelect
                      label="Dieta"
                      name="plusOne_dieta"
                      control={control}
                      isRequired={!!plusOne}
                      placeholder="Selecciona dieta"
                      options={options}
                      isSearchable={false}
                      errors={errors}
                    />
                    <FormInput
                      label="Intolerancias / Alergias"
                      name="plusOne_intolerancias"
                      placeholder="Celiaco, diabético, intolerancia a la fructosa"
                      register={register}
                      errors={errors}
                    />
                  </Box>
                </>
              )}
              {kid && (
                <>
                  <Themed.p>Datos de invitado 1</Themed.p>
                  <Box>
                    <FormSelect
                      label="¿Cuántos peques?"
                      name="kids_cantidad"
                      control={control}
                      isRequired={!!kid}
                      placeholder="Selecciona una opción."
                      options={options}
                      isSearchable={false}
                      errors={errors}
                    />
                    <FormSelect
                      label="¿Necesitan silla o trona?"
                      name="kids_asiento"
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
                        {...register('kids_dieta', { required: !!kid })}
                        type="radio"
                        value="yes"
                      />
                      <p sx={{ m: '0' }}>Si por favor</p>
                    </Label>
                    <Label>
                      <Radio
                        {...register('kids_dieta', { required: !!kid })}
                        type="radio"
                        value="no"
                      />
                      <p sx={{ m: '0' }}>No gracias</p>
                    </Label>
                    {errors?.kids_dieta?.type === 'required' && (
                      <Text variant="error">error</Text>
                    )}

                    <FormInput
                      label="Intolerancias / Alergias"
                      name="plusOne_intolerancias"
                      placeholder="Celiaco, diabético, intolerancia a la fructosa"
                      register={register}
                      errors={errors}
                    />
                  </Box>
                </>
              )}
            </Box>
            <Button sx={styles.Button} type="submit">
              SAVE
            </Button>
          </Flex>
        </Box>
      </Flex>
    </section>
  );
};

export default FormRsvp;

FormRsvp.defaultProps = {};
FormRsvp.propTypes = {};
