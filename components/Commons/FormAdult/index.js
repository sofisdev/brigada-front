/** @jsxImportSource theme-ui */
import { Flex, Themed } from 'theme-ui';

import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import styles from './styles';

const FormAdult = ({
  selectBus,
  isRequired,
  name,
  title,
  errors,
  register,
  options,
  control,
  language,
}) => (
  <>
    <Themed.h3 sx={styles.heading}>{title}</Themed.h3>
    <Flex sx={styles.row}>
      <FormInput
        label={language === 'es' ? 'Nombre' : 'First name'}
        name={`${name}name`}
        placeholder={language === 'es' ? 'Nombre' : 'First name'}
        register={register}
        isRequired={isRequired}
        errors={errors}
      />
      <FormInput
        label={language === 'es' ? 'Apellidos' : 'Last name'}
        name={`${name}lastName`}
        placeholder={language === 'es' ? 'Apellidos' : 'Last name'}
        register={register}
        isRequired={isRequired}
        errors={errors}
      />
    </Flex>

    <Flex sx={styles.row}>
      <FormSelect
        label={language === 'es' ? 'Menú' : 'Menu'}
        name={`${name}diet`}
        control={control}
        isRequired={isRequired}
        placeholder={
          language === 'es' ? 'Selecciona un menú' : 'Please select a menu'
        }
        options={options}
        isSearchable={false}
        errors={errors}
      />
      <FormInput
        label={language === 'es' ? 'Intolerancias' : 'Allergies'}
        name={`${name}allergy`}
        placeholder={
          language === 'es'
            ? 'Celiaco, diabético, intolerancia a la fructosa'
            : 'Diabetic, lactose-intolerant, etc'
        }
        register={register}
        errors={errors}
      />
      {selectBus && (
        <FormSelect
          label={
            language === 'es' ? '¿Vienes en Bus o en coche?' : 'Transportation'
          }
          name={`${name}bus`}
          control={control}
          placeholder={
            language === 'es' ? 'Selecciona un método de transporta' : 'Please select one option'
          }
          options={options}
          isSearchable={false}
          errors={errors}
          isRequired={isRequired}
        />
      )}
    </Flex>
  </>
);

export default FormAdult;