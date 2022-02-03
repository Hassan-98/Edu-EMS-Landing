import cls from "../Plans.module.scss";
import { Typography, Grid, Card, CardActions, CardContent, Box, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

const PlanCard = ({ xs, sm, md, title, price, description, features, colored }) => {
  
  const handleClick = () => {
    window.location.hash = "#Contact"
  }

  const download = () => {
    toast.error('Demo Version download will be available soon!');
  }

  return (
    <>
      <Grid item xs={xs} sm={sm} md={md}>
        <Card variant="outlined" className={`${cls.card__section} ${colored && cls.colored__background}`}>
          <CardContent>
            <Typography variant="h5" component="h2" className={cls.plan__title}>{ title }</Typography>
            <Typography variant="h3" component="h3" className={cls.plan__price}>{ price }<sup>$</sup></Typography>
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
            {
              title === 'Demo Ver' ? 
              <Button className={cls.request__button} variant="outlined" color="primary" disableElevation onClick={download}> Download </Button>
              :
              <Button className={cls.request__button} variant="outlined" color="primary" disableElevation onClick={handleClick}> Request </Button>
            }
          </CardActions>
        </Card>
      </Grid>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </>
  )
}

export default PlanCard
