/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { Box, Button, Flex, Label, Radio, Text, Themed } from 'theme-ui';

import { options } from '../../../constants/options';
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
      <Box sx={styles.container} as="form" onSubmit={handleSubmit(submitForm)}>
        <Box>
          <Box>
            <FormAdult
              title="Datos de invitado 1"
              errors={errors}
              register={register}
              options={options}
              control={control}
              name=""
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
                name=""
                isRequired={!!plusOne}
              />
            )}
            {kid && (
              <>
                <Themed.p>Niños</Themed.p>
                <Flex>
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
