/** @jsxImportSource theme-ui */
import { Grid, Themed } from 'theme-ui';

import styles from './styles';

const Footer = () => (
  <Grid as="footer" sx={styles.container}>
    <Themed.p>Test</Themed.p>
  </Grid>
);

export default Footer;

Footer.defaultProps = {};
