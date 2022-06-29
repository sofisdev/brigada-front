/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-this-in-sfc */
/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Box, Themed } from 'theme-ui';

import Question from '../../Commons/Question';
import styles from './styles';

const FaqSection = ({ layout }) => {
  const { questions, title } = layout.faq;

  return (
    <section id="faq" sx={styles.section}>
      <Themed.h1>{title}</Themed.h1>
      <Box sx={styles?.container}>
        {questions.map((el, id) => (
          <Question key={id} question={el.question} answer={el.answer} />
        ))}
      </Box>
    </section>
  );
};

export default FaqSection;

FaqSection.defaultProps = {};
FaqSection.propTypes = {
  layout: PropTypes.shape({}).isRequired,
};
