import routes from './routes';

const { address, homeSection } = routes;

export const navItems = [
  { name: 'Home', link: homeSection, divider: true, parameters: true },
  { name: 'Address', link: address, divider: true, parameters: true },
];
