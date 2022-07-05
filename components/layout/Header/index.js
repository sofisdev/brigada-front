/** @jsxImportSource theme-ui */
import Router from 'next/router';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { Box, Button, Flex, Image, NavLink } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import { navItems } from '../../../constants/navItems';
import { postLogout } from '../../../repository/platformApi';
import styles from './styles';

const Header = ({ setLanguage, language }) => {
  const { menu, close, world } = imageRoutes;
  const [isNavActive, setNavActive] = useState(false);

  const handleSelect = (item) => async () => {
    await Router.push({
      hash: item?.link,
    });
    setNavActive(false);
  };

  const handleLogout = async () => {
    await postLogout();
    signOut({ callbackUrl: '/login' });
  };

  return (
    <Flex as="header" sx={styles.headerContainer}>
      {isNavActive && (
        <Flex sx={styles.navContainer}>
          <Flex sx={styles.closeIcon}>
            <Button
              sx={styles.icon}
              onClick={() => {
                setNavActive(false);
              }}
              variant="close"
            >
              <Image loading="lazy" alt="close_icon" src={close} />
            </Button>
          </Flex>
          <Flex sx={styles.navItems}>
            {navItems.map((item) => (
              <NavLink
                key={item?.name[language]}
                sx={styles.isItemActive}
                onClick={handleSelect(item)}
              >
                {item?.name[language]}
              </NavLink>
            ))}
            <NavLink
              variant="user"
              sx={styles.isItemActive}
              onClick={handleLogout}
            >
              Log out
            </NavLink>
          </Flex>
        </Flex>
      )}
      <Flex sx={styles.closedMenu}>
        <Button
          sx={styles.icon}
          onClick={() => {
            setLanguage(language === 'es' ? 'en' : 'es');
          }}
          variant="transparent"
        >
          <Image
            loading="lazy"
            alt="menu_icon"
            src={world}
            sx={styles.worldIcon}
          />
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
    </Flex>
  );
};

export default Header;

Header.defaultProps = {};

Header.propTypes = {};
