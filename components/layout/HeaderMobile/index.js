/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import { PropTypes } from 'prop-types';
import { Fragment, useState } from 'react';
import { Box, Divider, Flex, Image, NavLink, Text } from 'theme-ui';

import imageRoutes from '../../../constants/imageRoutes';
import { navItems } from '../../../constants/navItems';
import { onNavClick } from '../../../utils/onNavClick';
import styles from './styles';

const HeaderMobile = ({ invitationId }) => {
  const router = useRouter();
  const isNavItemActive = (link) => router?.pathname?.startsWith(link);

  const [showNav, setShowNav] = useState(false);

  return (
    <Box as="header" sx={styles.headerContainer}>
      <Flex sx={styles.topBanner}>
        <Image sx={styles.logo} src={imageRoutes?.primaryLogo} />
        <Box sx={styles.navIconContainer}>
          <Image
            sx={styles.navIcon(showNav)}
            src={imageRoutes?.icons?.crossIcon}
            onClick={() => setShowNav(!showNav)}
          />
          <Image
            sx={styles.navIcon(!showNav)}
            src={imageRoutes?.icons?.barsIcon}
            onClick={() => setShowNav(!showNav)}
          />
        </Box>
      </Flex>
      <Flex sx={styles.navContainer(showNav)}>
        <Flex sx={styles.navItemsContainer}>
          {navItems.map((item) => (
            <Fragment key={item?.name}>
              <NavLink
                sx={styles.navItems(isNavItemActive(item?.link))}
                onClick={onNavClick(item, invitationId)}
              >
                {item?.name}
              </NavLink>
              {item?.divider && <Divider sx={styles.divider} />}
            </Fragment>
          ))}
        </Flex>
        <Flex sx={styles.csmContainer}>
          <Flex sx={styles.csmCircle}>
            <Text sx={styles.csmTitle}>csm</Text>
          </Flex>
          <Text sx={styles.csmText}>powered</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderMobile;

HeaderMobile.defaultProps = {
  invitationId: 0,
};

HeaderMobile.propTypes = {
  invitationId: PropTypes.number,
};
