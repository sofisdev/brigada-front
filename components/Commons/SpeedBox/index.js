/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';

import styles from './styles';

const SpeedBox = ({ className, src, speed = '-0.6' }) => (
  <Box data-speed={speed} className={className} sx={() => styles.container(src)} />
);

export default SpeedBox;
