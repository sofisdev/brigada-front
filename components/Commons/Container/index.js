/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';

import styles from './styles';

const Container = ({ className, src, children }) => (
  <Box data-speed="-0.6" className={className} sx={() => styles.container(src)}>
    {children}
  </Box>
);

export default Container;
