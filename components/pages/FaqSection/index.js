/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-this-in-sfc */
/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Box, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import Question from '../../Commons/Question';
import SpeedBox from '../../Commons/SpeedBox';
import styles from './styles';

const FaqSection = ({ layout }) => {
  const { questions } = layout.faq;

  return (
    <section id="faq" sx={styles.section()}>
      <SpeedBox
        speed="0.1"
        className="welcome"
        src={imageRoutes?.desktop_0_Home_back}
        srcMobile={imageRoutes?.mobile_0_back}
      />
      <Themed.h1>PREGUNTAS FRECUENTES - FAQ</Themed.h1>
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
FaqSection.propTypes = {};
