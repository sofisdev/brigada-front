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
}) => (
  <>
    <Themed.p>{title}</Themed.p>
    <Flex sx={styles.row}>
      <FormInput
        label="Nombre"
        name={`${name}name`}
        placeholder="Nombre"
        register={register}
        isRequired={isRequired}
        errors={errors}
      />
      <FormInput
        label="Apellidos"
        name={`${name}lastName`}
        placeholder="Apellidos"
        register={register}
        isRequired={isRequired}
        errors={errors}
      />
    </Flex>

    <Flex sx={styles.row}>
      <FormSelect
        label="Dieta"
        name={`${name}diet`}
        control={control}
        isRequired={isRequired}
        placeholder="Selecciona dieta"
        options={options}
        isSearchable={false}
        errors={errors}
      />
      <FormInput
        label="Intolerancias"
        name={`${name}allergy`}
        placeholder="Celiaco, diabético, intolerancia a la fructosa"
        register={register}
        errors={errors}
      />
      {selectBus && <FormSelect
        label="¿Vienes en Bus o en coche?"
        name={`${name}bus`}
        control={control}
        placeholder="Selecciona horario de vuelta"
        options={options}
        isSearchable={false}
        errors={errors}
        isRequired={isRequired}
      />}
    </Flex>
  </>
);

export default FormAdult;
