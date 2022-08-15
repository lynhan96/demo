import React, { useState, useRef } from 'react';
import { Dropdown } from 'antd';
import Cookie from 'js-cookie';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { PAGE_ROUTES } from '@utils/routes';
import { CURRENCIES, LANGUAGES } from '@utils/constants';
import { useAppState } from 'src/context/AppContext';

import LanguageModal, { ModalHandle } from './LanguageModal';
import MenuAccounts from './SubMenu/Accounts';

import {
  DropdownAntd,
  ButtonAnt,
  Flex,
  ThemeText,
  Text,
} from 'views/components/styled';
import {
  StyledHeader,
  StyledBrand,
  NavbarWrapper,
  NavRight,
  NavLeft,
  MenuItem,
  TextButton,
  NavToggle,
  DownLoadText,
  StyledDropdownMenu,
  CustomOverlay,
  PCAuthWrapper,
  MobileAuthWrapper,
  ThemeButton,
  SmallMenuWrapper,
  QRWrapper,
} from './styled';
import QRCode from 'react-qr-code';

export default function Header() {
  const languageRef = useRef<ModalHandle>(null);
  const { user, isDark, switchTheme, localeSetting } = useAppState();
  const [navToggle, setNavToggle] = useState(false);
  const { t } = useTranslation('header');

  const menuClick = () => {
    setNavToggle(false);
  };

  const changeTheme = () => {
    switchTheme(!isDark);
    Cookie.set('THEME_DARK_MODE', !isDark);
  };

  return (
    <>
      <LanguageModal ref={languageRef} />
      <StyledHeader className='light-bb'>
        <Link href={PAGE_ROUTES.HOME}>
          <a>
            <StyledBrand className='navbar-brand'>
              <img src={'/img/logo.png'} alt='logo' style={{ width: 200 }} />
            </StyledBrand>
          </a>
        </Link>
        <NavToggle onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </NavToggle>
        <CustomOverlay
          onClick={() => setNavToggle(!navToggle)}
          navToggle={navToggle}
        />
        <NavbarWrapper navToggle={navToggle}>
          <NavLeft>
            {!user?.email && (
              <MobileAuthWrapper>
                <Link href={PAGE_ROUTES.LOGIN}>
                  <Flex justify='center'>
                    <ThemeText fs='16px' primary ma='0 0 16px'>
                      {t('nav.login')}
                    </ThemeText>
                  </Flex>
                </Link>

                <ButtonAnt>
                  <Link href={PAGE_ROUTES.REGISTER}>{t('nav.register')}</Link>
                </ButtonAnt>
              </MobileAuthWrapper>
            )}
          </NavLeft>

          <NavRight>
            <PCAuthWrapper>
              <Link href={PAGE_ROUTES.LOGIN}>
                <MenuItem>{t('nav.login')}</MenuItem>
              </Link>

              <ButtonAnt style={{ marginRight: 26 }} size='small'>
                <Link href={PAGE_ROUTES.REGISTER}>{t('nav.register')}</Link>
              </ButtonAnt>
            </PCAuthWrapper>

            <SmallMenuWrapper
              alignItems='center'
              expanded
              justify='space-between'
            >
              <Dropdown
                overlay={
                  <StyledDropdownMenu>
                    <StyledDropdownMenu.Item>
                      <QRWrapper>
                        <QRCode size={186} value={'https://piex.io/'} />
                      </QRWrapper>

                      <DownLoadText>
                        {t('downloadApp.hint_1')}
                        <br />
                        {t('downloadApp.hint_2')}
                      </DownLoadText>
                      <ButtonAnt size='small'>
                        <Link href={`${PAGE_ROUTES.HOME}#trade-intro`}>
                          <a>{t('downloadApp.link')}</a>
                        </Link>
                      </ButtonAnt>
                    </StyledDropdownMenu.Item>
                  </StyledDropdownMenu>
                }
                trigger={['click', 'hover']}
              >
                <TextButton>{t('downloadApp.title')}</TextButton>
              </Dropdown>
              <TextButton
                onClick={() => {
                  languageRef.current.open();
                  menuClick();
                }}
                className='language'
                style={{ whiteSpace: 'nowrap' }}
              >
                {LANGUAGES[localeSetting.lang]} /
                {CURRENCIES[localeSetting.currency]}
              </TextButton>

              <ThemeButton onClick={changeTheme} style={{ marginRight: 0 }}>
                {isDark ? (
                  <WbSunnyOutlinedIcon
                    htmlColor='#fff'
                    style={{ fontSize: 18 }}
                  />
                ) : (
                  <DarkModeOutlinedIcon style={{ fontSize: 18 }} />
                )}
              </ThemeButton>
            </SmallMenuWrapper>
          </NavRight>
        </NavbarWrapper>
      </StyledHeader>
    </>
  );
}
