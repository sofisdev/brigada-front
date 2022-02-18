/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import {useState} from 'react'
import { Box, Image,NavLink } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes'
import { navItems } from '../../../constants/navItems';
import { onNavClick } from '../../../utils/onNavClick';
import styles from './styles';

const Header = () => {
  const router = useRouter();
  const isNavItemActive = (link) => router?.pathname?.startsWith(link);
  const {menu, close} = imageRoutes
  const [isNavActive, setNavActive] = useState(false)

  return (
    <Box as="header" sx={styles.headerContainer}>
      {isNavActive ? (
        <Box sx={styles.navContainer}>
          <Box sx={styles.navItems}>
            {navItems.map((item) => (
              <NavLink
              key={item?.name}
              sx={styles.isItemActive(isNavItemActive(item?.link))}
              onClick={onNavClick(item)}
            >
                {item?.name}
              </NavLink>
          ))}
          </Box>
          <Box as="aside" sx={styles.navItems}>
            <NavLink
            variant="user"
            onClick={() => signOut({ callbackUrl: '/login' })}
          >
              Log out
            </NavLink>
          </Box>
      
        </Box>) : (<Box>
          <Image alt="menu_icon" src={menu}/>
        </Box>)}</Box>
  );
};

export default Header;

Header.defaultProps = {};

Header.propTypes = {};
