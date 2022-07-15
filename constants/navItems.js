import routes from './routes';

const { address, homeSection, patreon, guestList, faq } = routes;

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
    name: { en: 'RSVP', es: '¡Apúntame!' },
    link: guestList,
    divider: true,
    parameters: true,
  },
  {
    name: { en: 'Registry', es: '¿Lista de bodas?' },
    link: patreon,
    divider: true,
    parameters: true,
  },
  {
    name: { en: 'FAQ', es: 'Preguntas frecuentes' },
    link: faq,
    divider: true,
    parameters: true,
  },
];
