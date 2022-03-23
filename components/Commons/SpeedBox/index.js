/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';

import styles from './styles';

const SpeedBox = ({ className, src, children }) => (
  <Box data-speed="-0.6" sx={() => styles.container(src)}/>
);

export default SpeedBox;
