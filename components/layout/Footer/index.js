/** @jsxImportSource theme-ui */
import { Flex, Themed } from 'theme-ui';

import styles from './styles';

const Footer = () => (
  <Flex as="footer" sx={styles.container}>
    <Themed.p>Designed by Sofía and Javi 💃🏻🕺🏽</Themed.p>
  </Flex>
);

export default Footer;

Footer.defaultProps = {};
