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
  errorMessage,
  register,
  optionsMenus,
  optionsTransport,
  control,
  language,
  disabled,
}) => (
  <>
    <Themed.h3 sx={styles.heading}>{title}</Themed.h3>
    <Flex sx={styles.row}>
      <FormInput
        label={language === 'es' ? 'Nombre *' : 'First name *'}
        name={`${name}name`}
        placeholder={language === 'es' ? 'Nombre' : 'First name'}
        register={register}
        isRequired={isRequired}
        errors={errors}
        disabled={disabled}
        errorMessage={errorMessage}
      />
      <FormInput
        label={language === 'es' ? 'Apellidos * ' : 'Last name *'}
        name={`${name}lastName`}
        placeholder={language === 'es' ? 'Apellidos' : 'Last name'}
        register={register}
        isRequired={isRequired}
        errors={errors}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    </Flex>

    <Flex sx={styles.row}>
      <FormSelect
        label={language === 'es' ? 'Menú *' : 'Menu *'}
        name={`${name}diet`}
        control={control}
        isRequired={isRequired}
        placeholder={
          language === 'es' ? 'Selecciona un menú' : 'Please select a menu'
        }
        options={optionsMenus?.[language]}
        isSearchable={false}
        errors={errors}
        disabled={disabled}
        errorMessage={errorMessage}
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
        disabled={disabled}
        errorMessage={errorMessage}
      />
      {selectBus && (
        <FormSelect
          label={
            language === 'es'
              ? '¿Vienes en Bus o en coche? *'
              : 'Transportation *'
          }
          name={`${name}bus`}
          control={control}
          placeholder={
            language === 'es'
              ? 'Selecciona un método de transporte'
              : 'Please select one option'
          }
          options={optionsTransport?.[language]}
          isSearchable={false}
          errors={errors}
          isRequired={isRequired}
          disabled={disabled}
          errorMessage={errorMessage}
        />
      )}
    </Flex>
  </>
);

export default FormAdult;
