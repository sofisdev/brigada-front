/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-this-in-sfc */

export const scrollControll = () => {
  const windowHeight = window.innerHeight;
  const reveals = document.querySelectorAll('.reveal');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < reveals.length; i++) {
    const elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
};
