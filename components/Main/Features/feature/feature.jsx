import { Typography, Grid } from '@mui/material'
import cls from "../Features.module.scss"

const Feature = ({ text, icon }) => {
  return (
    <Grid item xs={12} md={6}>
      <Grid container className={cls.feature}>
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
