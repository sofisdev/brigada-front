/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';

import styles from './styles';

const Container = ({ className, src, children }) => (
  <Flex data-speed="-0.6" className={className} sx={() => styles.container(src)}>
    {children}
  </Flex>
);

export default Container;
