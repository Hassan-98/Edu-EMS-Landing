import { useTranslation } from 'next-i18next';
import { Typography, Grid } from '@mui/material'
import cls from "../Features.module.scss"

const Feature = ({ text, icon }) => {
  const { i18n: { language } } = useTranslation('common');

  return (
    <Grid item xs={12} md={6}>
      <Grid container className={`${cls.feature} ${cls[language]}`}>
        <Grid item xs={3} sm={2} className={cls.feature__icon}>
          { icon }
        </Grid>
        <Grid item xs={9} sm={10}>
          <Typography variant="body1" color="textWhite">
            { text }
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Feature;
