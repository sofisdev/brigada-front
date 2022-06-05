/** @jsxImportSource theme-ui */
import { Box, Flex } from 'theme-ui';

import styles from './styles';

const Container = ({ question, answer }) => (
  <Box sx={styles?.question} >
    <details>
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  </Box>
);

export default Container;
