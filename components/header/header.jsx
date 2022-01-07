import Image from "next/image"
import { Box, Container, Typography, Button } from "@mui/material"
import Navbar from "../navbar/navbar"
import cls from "./header.module.scss"

const Header = () => {
  return (
    <Box component="header" className={cls.header__component} sx={{ bgcolor: 'primary.main' }}>
      <Navbar />
      <Container className={cls.header__container} sx={{color: 'text.white'}}>
        <Typography variant="h1" className={cls.header__text}>Edu EMS System</Typography>
        {/* eslint-disable-next-line */}
        <img src="/imgs/gallery/1.png" alt="edu ems" className={cls.header__image} />
        <Button className={cls.header__button}>
          <i className="fi fi-rr-cloud-check"></i>
          Request Demo Version
        </Button>
      </Container>
    </Box>
  )
}

export default Header
