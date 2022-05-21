/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';

import styles from './styles';

const SpeedBox = ({
  className,
  src,
  srcMobile,
  speed = '-0.6',
  name = 'container',
}) => (
  <Box
    data-speed={speed}
    className={className}
    sx={() => styles?.[name](src, srcMobile)}
  />
);

export default SpeedBox;
