/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-this-in-sfc */

export const scrollControll = () => {
  const windowHeight = window.innerHeight;
  const reveals = document.querySelectorAll('.reveal');
  console.log("🚀 ~ file: scrollControll.js ~ line 8 ~ scrollControll ~ reveals", reveals)

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < reveals.length; i++) {
    const elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      reveals[i].classList.add('active');
      const parallaxEl = reveals[i]?.querySelector('[data-speed]');
      console.log(
        '🚀 ~ file: scrollControll.js ~ line 14 ~ scrollControll ~ parallaxEls',
        parallaxEl,
      );

      const direction = parallaxEl?.dataset.direction == 'up' ? '-' : '';
      const transformY = parallaxEl?.dataset.speed;
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
    } else {
      reveals[i].classList.remove('active');
    }
  }
};
