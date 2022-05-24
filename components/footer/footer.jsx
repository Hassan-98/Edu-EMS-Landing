import { Container, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next';
import cls from "./footer.module.scss"

const Footer = () => {
  const { t: translate } = useTranslation('common');

  return (
    <footer className={cls.footer}>
      <Container>
        <Typography component="p" className={cls.footer__text}>
          { translate('footerText') }
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer
