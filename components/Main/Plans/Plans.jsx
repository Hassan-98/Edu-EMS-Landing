import cls from "./Plans.module.scss";
import { Container, Typography, Grid } from '@mui/material';
import PlanCard from "./Plan/Card";

const plans = [
  {
    title: "Demo Ver",
    description: "Demo version of the system with limited capabilities",
    features: [
      {
        text: "Limited program trail time",
        icon: <i className={`fa-duotone fa-circle-check ${cls.checked}`}></i>
      },
      {
        text: "Full system guide & explaination",
        icon: <i className={`fa-duotone fa-circle-xmark`}></i>
      },
      {
        text: "Full system pro features",
        icon: <i className={`fa-duotone fa-circle-xmark`}></i>
      },
      {
        text: "Support & operation of the system",
        icon: <i className={`fa-duotone fa-circle-xmark`}></i>
      },
      {
        text: "Source code of the program",
        icon: <i className={`fa-duotone fa-circle-xmark`}></i>
      }
    ],
  },
  {
    title: "Full Ver",
    description: "Full version of the system ready to be used in your center",
    features: [
      {
        text: "Lifetime program no trail",
        icon: <i className={`fa-duotone fa-circle-check ${cls.checked}`}></i>
      },
      {
        text: "Full system guide & explaination",
        icon: <i className={`fa-duotone fa-circle-check ${cls.checked}`}></i>
      },
      {
        text: "Full system pro features",
        icon: <i className={`fa-duotone fa-circle-check ${cls.checked}`}></i>
      },
      {
        text: "Support & operation of the system",
        icon: <i className={`fa-duotone fa-circle-check ${cls.checked}`}></i>
      },
      {
        text: "Source code of the program",
        icon: <i className={`fa-duotone fa-circle-xmark`}></i>
      }
    ],
  },
  {
    title: "Source Code",
    description: "Full version with the source code, ready to be customized",
    features: [
      {
        text: "Lifetime program no trail",
        icon: <i className={`fa-duotone fa-circle-check ${cls.checked}`}></i>
      },
      {
        text: "Full system guide & explaination",
        icon: <i className={`fa-duotone fa-circle-check ${cls.checked}`}></i>
      },
      {
        text: "Full system pro features",
        icon: <i className={`fa-duotone fa-circle-check ${cls.checked}`}></i>
      },
      {
        text: "Support & operation of the system",
        icon: <i className={`fa-duotone fa-circle-check ${cls.checked}`}></i>
      },
      {
        text: "Source code of the program",
        icon: <i className={`fa-duotone fa-circle-check ${cls.checked}`}></i>
      }
    ],
  }
]

const Plans = () => {
  return (
    <Container component="section" id="Plans" className={cls.plans}>
      <Typography component="h2" color="primary" className={cls.section__title}>Plans</Typography>
      <Typography variant="body1" component="p" color="primary" className={cls.section__description}>Ready To Get Started ?</Typography>

      <Grid container spacing={3}>
        <PlanCard
          xs={12}
          sm={6}
          md={4}
          title={plans[0].title}
          description={plans[0].description}
          features={plans[0].features}
        />
        <PlanCard
          xs={12}
          sm={6}
          md={4}
          title={plans[1].title}
          description={plans[1].description}
          features={plans[1].features}
          colored
        />
        <PlanCard
          xs={12}
          sm={12}
          md={4}
          title={plans[2].title}
          description={plans[2].description}
          features={plans[2].features}
        />
      </Grid>
    </Container>
  )
}

export default Plans
