/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { Box, Button, Flex, Image, NavLink } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import { navItems } from '../../../constants/navItems';
import { onNavClick } from '../../../utils/onNavClick';
import styles from './styles';

const Header = () => {
  const router = useRouter();
  const isNavItemActive = (link) => router?.pathname?.startsWith(link);
  const { menu, close } = imageRoutes;
  const [isNavActive, setNavActive] = useState(false);

  return (
    <Flex as="header" sx={styles.headerContainer}>
      {isNavActive ? (
        <Flex sx={styles.navContainer}>
          <Button
            onClick={() => {
              setNavActive(false);
            }}
            variant="transparent"
          >
            <Image alt="close_icon" src={close} />
          </Button>
          <Flex sx={styles.navItems}>
            {navItems.map((item) => (
              <NavLink
                key={item?.name}
                sx={styles.isItemActive}
                onClick={onNavClick(item)}
              >
                {item?.name}
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
      ) : (
        <Button
          sx={styles.icon}
          onClick={() => {
            setNavActive(true);
          }}
          variant="transparent"
        >
          <Image alt="menu_icon" src={menu} />
        </Button>
      )}
    </Flex>
  );
};

export default Header;

Header.defaultProps = {};

Header.propTypes = {};
