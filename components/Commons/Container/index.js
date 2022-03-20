/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';

import styles from './styles';

const Container = ({ src, children }) => (
  <Box sx={() => styles.container(src)}>{children}</Box>
);

export default Container;
