/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { Grid, Container, Typography, Box, Button, Tooltip } from "@mui/material";
import cls from "./About.module.scss";

const About = () => {
  const { t: translate, i18n: { language } } = useTranslation('common');
  
  const handleClick = () => {
    window.location.hash = "#Contact"
  }

  return (
    <Container component="section" id="About" className={cls.about}>
      <Grid container>
        <Grid item md={6} sm={12} sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } }}>
          <img src="/imgs/Edu-Thumb.jpg" alt="Edu Thumb" />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography variant="h5" component="p" color="primary" sx={{ mb: { xs: '35px', md: '20px' } }}>
            { translate('about.sub_title') }
          </Typography>
          <Typography variant="h3" component="h2" color="primary" sx={{ fontFamily: "LittleGroovyRegular", mb: 2 }}>
            { translate('about.title') }
          </Typography>
          <Typography variant="body1" color="primary" sx={{ mb: 3, lineHeight: '30px' }}>
            { translate('about.text') }
          </Typography>
          <Box className={cls.presentaion__icons}>
          <Tooltip title="Educational">
            <img src="/imgs/educational.png" alt="educational icon" />
          </Tooltip>
          <Tooltip title="Cheap">
            <img src="/imgs/cheap.png" alt="cheap icon" />
          </Tooltip>
          <Tooltip title="Customizable">
            <img src="/imgs/customizable.png" alt="customizable icon" />
          </Tooltip>
          </Box>
          <Button variant="outlined" color="primary" className={cls.request__button} onClick={handleClick}>
            <i className="fa-regular fa-download" style={{ margin: language === 'en' ? '00 5px 0 0':'0 0 0 5px' }}></i>
            { translate('header.button') }
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
