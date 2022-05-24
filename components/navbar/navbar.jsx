import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { AppBar, Box, Toolbar, IconButton, Typography, Container, SwipeableDrawer  } from '@mui/material';
import LanguageSwitch from "../LanguageSwitch/LangSwitch";
import cls from "./navbar.module.scss";

const Navbar = () => {
  const [isNavInTop, setIsNavInTop] = useState(true);
  const [drawerOpend, setDrawerOpend] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { t: translate, i18n } = useTranslation('common');

  const pages = useMemo(() => ([
    {
      title: translate('About'),
      path: "#About",
      icon: <i className="fa-thin fa-circle-info"></i>
    },
    {
      title: translate('Features'),
      path: "#Features",
      icon: <i className="fa-thin fa-globe"></i>
    },
    {
      title: translate('Gallery'),
      path: "#Gallery",
      icon: <i className="fa-thin fa-images"></i>
    },
    {
      title: translate('Plans'),
      path: "#Plans",
      icon: <i className="fa-thin fa-list-timeline"></i>
    },
    {
      title: translate('FAQ'),
      path: "#FAQ",
      icon: <i className="fa-thin fa-circle-question"></i>
    },
    {
      title: translate('Contact'),
      path: "#Contact",
      icon: <i className="fa-thin fa-headset"></i>
    },
  ]), []);

  useEffect(() => {
    window.onscroll = () => {
      var pageSelected = false;

      // Add Active Class To InView Section
      pages.forEach(page => {
        const pageNavLink = document.getElementById(page.path.split('#')[1]);
        const elementTop = +pageNavLink.offsetTop;
        const elementHeight = +pageNavLink.getBoundingClientRect().height;
        const visibleDistance = 450;
        if (window.pageYOffset + visibleDistance > elementTop && window.pageYOffset < elementTop + elementHeight) {
          setActiveSection(page.title);
          pageSelected = true;
        }
      });

      // If There are no sections in view
      if (!pageSelected) setActiveSection('');

      // Check if the navbar is in the top level
      if (window.pageYOffset > 0) return setIsNavInTop(false)
      setIsNavInTop(true)
    }
  }, [pages]);

  const goToSection = (section) => {
    location.hash = section;
    setDrawerOpend(false)
  }

  const goToDashboard = () => {
    window.open("https://my.edu-ems.cf", "_blank")
  }

  return (
    <AppBar
      className={isNavInTop ? `${cls.navbar}` : `${cls.navbar} ${cls.navbar_scroll}`}
      component="nav"
      position="fixed"
      sx={{ bgcolor: isNavInTop ? 'transparent' : 'background.paper', py: isNavInTop ? 0.75 : 0, boxShadow: 'none', borderBottom: isNavInTop && '1px solid #ccc' }}
      style={{backgroundImage: 'unset', transition: 'all 0.2s ease'}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Large Screens */}
          {/* App Logo */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className={cls.navbar__logo}>
            {
              isNavInTop ?
              <Image src="/imgs/logoWhite.png" alt="logo" width="30" height="30" />
              :
              <Image src="/imgs/logoColored.png" alt="logo" width="30" height="30" />
            }
          </Box>
          {/* Navbar Items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {
              pages.map((page) => (
                <Typography
                  key={page.title}
                  onClick={() => (location.hash = page.path)}
                  className={`${cls.navbar__navlink} ${activeSection == page.title && cls.active}`}
                  sx={{ color: 'text.white' }}
                >
                  <IconButton size="small" color="inherit" sx={{ mr: i18n.language === 'en' ? 1 : 0, ml: i18n.language === 'ar' ? 1 : 0, p: 0 }}>
                    { page.icon }
                  </IconButton>
                  {page.title}
                </Typography>
              ))
            }
          </Box>

          <LanguageSwitch locale={i18n.language} navTop={isNavInTop} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography onClick={goToDashboard} sx={{ color: 'text.white' }} className={cls.navbar__navlink}>
              <IconButton size="small" color="inherit" sx={{ mr: i18n.language === 'en' ? 1 : 0, ml: i18n.language === 'ar' ? 1 : 0, p: 0 }}>
                <i className="fa-thin fa-arrow-right-to-bracket"></i>
              </IconButton>
              { translate("Login") }
            </Typography>
          </Box>

          {/* Mobile Screens */}
          {/* App Logo */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {
              isNavInTop ?
              <Image src="/imgs/logoWhite.png" alt="logo" width="30" height="30" />
              :
              <Image src="/imgs/logoColored.png" alt="logo" width="30" height="30" />
            }
          </Box>
          {/* Navbar Items */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Box onClick={() => setDrawerOpend(true)}>
              <i className={`fi fi-rr-apps ${cls.navbar__toggler}`}></i>
            </Box>
            <SwipeableDrawer
              anchor="right"
              open={drawerOpend}
              onClose={() => setDrawerOpend(false)}
              onOpen={() => setDrawerOpend(true)}
            >
              <Box sx={{ px: 2 }}>
                {
                  pages.map((page) => (
                    <Typography key={page.title} onClick={() => goToSection(page.path)} sx={{ color: 'text.primary', textAlign: i18n.language === 'en' ? 'left' : 'right', direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }} className={cls.navbar__navlink_mobile}>
                      <IconButton size="small" color="inherit" sx={{ mr: i18n.language === 'en' ? 1 : 0, ml: i18n.language === 'ar' ? 1 : 0, p: 0 }}>
                        { page.icon }
                      </IconButton>
                      {page.title}
                    </Typography>
                  ))
                }
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography onClick={goToDashboard} sx={{ color: 'text.primary', textAlign: i18n.language === 'en' ? 'left' : 'right', direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }} className={cls.navbar__navlink_mobile}>
                  <IconButton size="small" color="inherit" sx={{ mr: i18n.language === 'en' ? 1 : 0, ml: i18n.language === 'ar' ? 1 : 0, p: 0 }}>
                    <i className="fa-thin fa-arrow-right-to-bracket"></i>
                  </IconButton>
                  { translate("Login") }
                </Typography>
              </Box>
            </SwipeableDrawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
