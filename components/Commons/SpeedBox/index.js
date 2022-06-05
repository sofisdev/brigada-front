/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';

import styles from './styles';

const SpeedBox = ({
  className,
  src,
  srcMobile,
  name = 'container',
}) => (
  <Box
    className={className}
    sx={() => styles?.[name](src, srcMobile)}
  />
);

export default SpeedBox;
