import { Box, Container, Typography, Button } from "@mui/material"
import { useTranslation } from 'next-i18next';
import Navbar from "../navbar/navbar"
import cls from "./header.module.scss"

const Header = () => {
  const { t: translate, i18n } = useTranslation('common');
  
  const handleClick = () => {
    window.location.hash = "#Contact"
  }

  return (
    <Box component="header" className={cls.header__component} sx={{ bgcolor: 'primary.main' }}>
      <Navbar />
      <Container className={cls.header__container} sx={{color: 'text.white'}}>
        <Typography variant="h1" className={`${cls.header__text} ${cls[i18n.language]}`}>{ translate('header.title') }</Typography>
        {/* eslint-disable-next-line */}
        <img src="/imgs/Gallery/1.png" alt="edu ems" className={cls.header__image} />
        <Button className={`${cls.header__button} ${cls[i18n.language]}`} onClick={handleClick}>
          <i className="fa-regular fa-download"></i>
          { translate('header.button') }
        </Button>
      </Container>
    </Box>
  )
}

export default Header
