/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Box, Divider, Flex, NavLink, Text } from 'theme-ui';

import { navItems } from '../../../constants/navItems';
import { onNavClick } from '../../../utils/onNavClick';
import styles from './styles';

const HeaderMobile = () => {
  const router = useRouter();
  const isNavItemActive = (link) => router?.pathname?.startsWith(link);

  const [showNav] = useState(false);

  return (
    <Box as="header" sx={styles.headerContainer}>
      <Flex sx={styles.navContainer(showNav)}>
        <Flex sx={styles.navItemsContainer}>
          {navItems.map((item) => (
            <Fragment key={item?.name}>
              <NavLink
                sx={styles.navItems(isNavItemActive(item?.link))}
                onClick={onNavClick(item)}
              >
                {item?.name}
              </NavLink>
              {item?.divider && <Divider sx={styles.divider} />}
            </Fragment>
          ))}
        </Flex>
        <Flex sx={styles.Container}>
          <Flex sx={styles.Circle}>
            <Text sx={styles.Title}>Test</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderMobile;

