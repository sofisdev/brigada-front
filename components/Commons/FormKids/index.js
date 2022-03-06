/** @jsxImportSource theme-ui */
import { Box, Flex, Label, Radio, Text, Themed } from 'theme-ui';

import FormInput from '../FormInput';
import FormSelect from '../FormSelect';

const FormKids = ({ errors, register, options, control, kid }) => (
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
    </Flex>
    <Flex>
      <Box>
        <Label>¿Quieres menú infantil?</Label>
        <Flex>
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
        </Flex>

        {errors?.kids_diet?.type === 'required' && (
          <Text variant="error">error</Text>
        )}
      </Box>

      <FormInput
        label="Intolerancias / Alergias"
        name="kid_allergy"
        placeholder="Celiaco, diabético, intolerancia a la fructosa"
        register={register}
        errors={errors}
      />
    </Flex>
  </>
);

export default FormKids;
