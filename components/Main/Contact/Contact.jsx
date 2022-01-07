import cls from "./Contact.module.scss"
import { Container, Grid, Box, Typography, TextField } from '@mui/material';
import ContactUsForm from "./ContactUsForm/ContactUsForm.jsx"

const Contact = () => {
  return (
    <Container component="section" id="Contact" className={cls.contact}>
      <Typography component="h2" color="primary" className={cls.section__title}>Contact Us</Typography>
      <Typography variant="body1" color="primary" component="p" className={cls.section__description}>
        Contact us to request demo or full version of the program
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Box className={cls.contact__box}>
            <div className={cls.box__icon}>
              <i className="fa-thin fa-mobile" style={{ position: 'relative', left: '2px' }}></i>
            </div>
            <Typography variant="body1" color="primary">
              +201146321817
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box className={cls.contact__box}>
            <div className={cls.box__icon}>
              <i className="fa-thin fa-envelope"></i>
            </div>
            <Typography variant="body1" color="primary">
              7assan.3li1998@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={cls.contact__box}>
            <div className={cls.box__icon}>
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <Typography variant="body1" color="primary">
              @/hassan2231998
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <ContactUsForm />
      
    </Container>
  )
}

export default Contact
