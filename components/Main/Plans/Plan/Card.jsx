import cls from "../Plans.module.scss";
import { Typography, Grid, Card, CardActions, CardContent, Box, Button } from '@mui/material';

const PlanCard = ({ xs, sm, md, title, description, features, colored }) => {
  return (
    <Grid item xs={xs} sm={sm} md={md}>
      <Card variant="outlined" className={`${cls.card__section} ${colored && cls.colored__background}`}>
        <CardContent>
          <Typography variant="h5" component="h2" className={cls.plan__title}>{ title }</Typography>
          <Typography variant="body1" component="p" className={cls.plan__description}>{ description }</Typography>
          <hr />
          <Box className={cls.plan__features}>
            {
              features.map((feature, idx) => (
                <Typography key={idx} variant="body2" component="p" className={cls.plan__feature}>
                  {feature.icon}
                  { feature.text }
                </Typography>
              ))
            }
          </Box>
        </CardContent>
        <CardActions>
          <Button className={cls.request__button} variant="outlined" color="primary" disableElevation> Request </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default PlanCard