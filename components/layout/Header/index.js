/** @jsxImportSource theme-ui */
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { Button, Flex, Image, NavLink } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import { navItems } from '../../../constants/navItems';
import { onNavClick } from '../../../utils/onNavClick';
import styles from './styles';

const Header = ({ setLanguage, language }) => {
  const { menu, close } = imageRoutes;
  const [isNavActive, setNavActive] = useState(false);

  return (
    <Flex as="header" sx={styles.headerContainer}>
      {isNavActive && (
        <Flex sx={styles.navContainer}>
          <Button
            onClick={() => {
              setNavActive(false);
            }}
            variant="transparent"
          >
            <Image loading="lazy" alt="close_icon" src={close} />
          </Button>
          <Flex sx={styles.navItems}>
            {navItems.map((item) => (
              <NavLink
                key={item?.name[language]}
                sx={styles.isItemActive}
                onClick={onNavClick(item)}
              >
                {item?.name[language]}
              </NavLink>
            ))}
            <NavLink
              variant="user"
              sx={styles.isItemActive}
              onClick={() => signOut({ callbackUrl: '/login' })}
            >
              Log out
            </NavLink>
          </Flex>
        </Flex>
      )}

      <Button
        sx={styles.icon}
        onClick={() => {
          setLanguage(language === 'es' ? 'en' : 'es');
        }}
        variant="transparent"
      >
        {language}
      </Button>
      <Button
        sx={styles.icon}
        onClick={() => {
          setNavActive(true);
        }}
        variant="transparent"
      >
        <Image loading="lazy" alt="menu_icon" src={menu} />
      </Button>
    </Flex>
  );
};

export default Header;

Header.defaultProps = {};

Header.propTypes = {};
