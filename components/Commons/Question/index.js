/** @jsxImportSource theme-ui */
import { Box, Flex } from 'theme-ui';

import styles from './styles';

const Container = ({ question, answer }) => (
  <Box sx={styles?.question}>
    <details>
      <summary sx={styles?.title}>{question}</summary>
      <p sx={styles?.answer}>{answer}</p>
    </details>
  </Box>
);

export default Container;
