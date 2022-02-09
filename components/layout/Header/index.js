/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { Box, Flex, NavLink } from 'theme-ui';

import { navItems } from '../../../constants/navItems';
import { onNavClick } from '../../../utils/onNavClick';
import styles from './styles';

const Header = () => {
  const router = useRouter();
  const isNavItemActive = (link) => router?.pathname?.startsWith(link);

  return (
    <Box as="header" sx={styles.headerContainer}>
      <Flex sx={styles.navContainer}>
        <Flex sx={styles.navItems}>
          {navItems.map((item) => (
            <NavLink
              key={item?.name}
              sx={styles.isItemActive(isNavItemActive(item?.link))}
              onClick={onNavClick(item)}
            >
              {item?.name}
            </NavLink>
          ))}
        </Flex>
        <Flex as="aside" sx={styles.navItems}>
          <NavLink
            variant="user"
            onClick={() => signOut({ callbackUrl: '/login' })}
          >
            log out
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;

Header.defaultProps = {};

Header.propTypes = {};
