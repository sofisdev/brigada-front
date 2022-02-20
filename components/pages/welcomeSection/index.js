/** @jsxImportSource theme-ui */
import { PropTypes } from 'prop-types';
import { Image, Input, Label, Text, Themed } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';

const WelcomeSection = ({ layout }) => {
console.log("🚀 ~ file: index.js ~ line 8 ~ WelcomeSection ~ layout", layout)
  // const { date, title } = layout;
  return (
    <section id="home">
      <Image src={imageRoutes.couple} />
      {/* <Themed.h1>{title}</Themed.h1>
      <Themed.h1>{date}</Themed.h1> */}
    </section>
  );
};

export default WelcomeSection;

WelcomeSection.defaultProps = {};
WelcomeSection.propTypes = {};
