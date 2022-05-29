/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';

import styles from './styles';

const Container = ({ className, src, srcMobile, children }) => (
  <Flex data-speed="-0.6" className={className} sx={() => styles.container(src, srcMobile)}>
    {children}
  </Flex>
);

export default Container;
