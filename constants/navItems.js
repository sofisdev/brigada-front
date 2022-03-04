import routes from './routes';

const { address, homeSection, patreon, guestList, timing } = routes;

export const navItems = [
  {
    name: { en: 'Home', es: 'Home' },
    link: homeSection,
    divider: true,
    parameters: true,
  },
  {
    name: { en: 'Address', es: 'Mapa' },
    link: address,
    divider: true,
    parameters: true,
  },
  {
    name: { en: 'Timing', es: 'Horario' },
    link: timing,
    divider: true,
    parameters: true,
  },
  {
    name: { en: 'RSVP', es: '¡Apúntame!' },
    link: guestList,
    divider: true,
    parameters: true,
  },
  {
    name: { en: 'Registry', es: 'Patrocina nuestra boda' },
    link: patreon,
    divider: true,
    parameters: true,
  },
];
