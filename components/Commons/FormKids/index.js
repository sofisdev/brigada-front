/** @jsxImportSource theme-ui */
import { Box, Flex, Label, Radio, Text, Themed } from 'theme-ui';

import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import styles from './styles';

const FormKids = ({
  errors,
  register,
  options,
  control,
  kid,
  language,
  optionsSitting,
  optionsQty,
}) => (
  <>
    <Themed.h3 sx={styles.heading}>
      {language === 'es' ? 'Niños' : 'Kids'}
    </Themed.h3>
    <Flex>
      <Box sx={styles?.menu}>
        <FormSelect
          label={language === 'es' ? '¿Cuántos peques? * ' : 'How many kids? *'}
          name="kids_qty"
          control={control}
          isRequired={!!kid}
          placeholder={
            language === 'es'
              ? 'Selecciona una opción'
              : 'Please select an option'
          }
          options={optionsQty}
          isSearchable={false}
          errors={errors}
        />
      </Box>
      <Box sx={styles?.menu}>
        <FormSelect
          label={
            language === 'es'
              ? '¿Necesitan silla o trona? *'
              : 'Do you need a chair or a hight chair? *'
          }
          name="kids_sitType"
          control={control}
          isRequired={!!kid}
          placeholder={
            language === 'es'
              ? 'Selecciona una opción'
              : 'Please select an option'
          }
          options={optionsSitting?.[language]}
          isSearchable={false}
          errors={errors}
        />
      </Box>
    </Flex>
    <Flex>
      <Box sx={styles?.menu}>
        <Label>
          {language === 'es'
            ? '¿Quieres menú infantil? * '
            : 'Do you want children menu? *'}
        </Label>
        <Flex>
          <Label>
            <Radio
              {...register('kids_diet', { required: !!kid })}
              type="radio"
              value="yes"
            />
            <p sx={{ m: '0' }}>
              {language === 'es' ? 'Si, por favor' : 'Yes please'}
            </p>
          </Label>
          <Label>
            <Radio
              {...register('kids_diet', { required: !!kid })}
              type="radio"
              value="no"
            />
            <p sx={{ m: '0' }}>
              {language === 'es' ? 'No, gracias' : 'No thanks'}
            </p>
          </Label>
        </Flex>

        {errors?.kids_diet?.type === 'required' && (
          <Text variant="error">error</Text>
        )}
      </Box>

      <FormInput
        label={language === 'es' ? 'Intolerancias' : 'Allergies'}
        name="kid_allergy"
        placeholder={
          language === 'es'
            ? 'Celiaco, diabético, intolerancia a la fructosa'
            : 'Diabetic, lactose-intolerant, etc'
        }
        register={register}
        errors={errors}
      />
    </Flex>
  </>
);

export default FormKids;
