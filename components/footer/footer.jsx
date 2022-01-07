import { Container, Typography } from '@mui/material'
import cls from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <Container>
        <Typography component="p" className={cls.footer__text}>
          ©2021 | Made with ❤️ Hassan Ali
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer
