/* eslint-disable @next/next/no-img-element */
import { Grid, Container, Typography, Box, Button, Tooltip } from "@mui/material"
import Image from "next/image"
import cls from "./About.module.scss"

const About = () => {
  return (
    <Container component="section" id="About" className={cls.about}>
      <Grid container>
        <Grid item md={6} sm={12} sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } }}>
          <img src="/imgs/Edu-Thumb.jpg" alt="Edu Thumb" />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography variant="h5" component="p" color="primary" sx={{ mb: 2 }}>Our System</Typography>
          <Typography variant="h3" component="h2" color="primary" sx={{ fontFamily: "LittleGroovyRegular", mb: 2 }}>Edu EMS</Typography>
          <Typography variant="body1" color="primary" sx={{ mb: 3, lineHeight: '30px' }}>
            Edu. EMS is an educational center management system that has many features that make it distinct from other educational center management programs.
            Our program simply created based on web technologies, React.js, Scss, Node.js, MongoDB and Electron.js
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
          <Button variant="outlined" color="primary" className={cls.request__button}>
            <i className="fi fi-rr-cloud-check" style={{ margin: '3px 5px 0 0' }}></i>
            Request Demo Version
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
