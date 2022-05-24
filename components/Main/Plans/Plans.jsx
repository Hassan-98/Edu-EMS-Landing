import { useTranslation } from 'next-i18next';
import { Container, Typography, Grid } from '@mui/material';
import PlanCard from "./Plan/Card";
import cls from "./Plans.module.scss";

const Plans = () => {
  const { t: translate, i18n: { language } } = useTranslation('common');
  
  const plans = [
    {
      title: translate('plans.plan1.title'),
      description: translate('plans.plan1.desc'),
      price: 0,
      features: [
        {
          text: translate('plans.feature1'),
          icon: <i className={`fa-duotone fa-circle-check ${cls.checked} ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature2'),
          icon: <i className={`fa-duotone fa-circle-xmark ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature3'),
          icon: <i className={`fa-duotone fa-circle-xmark ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature4'),
          icon: <i className={`fa-duotone fa-circle-xmark ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature5'),
          icon: <i className={`fa-duotone fa-circle-xmark ${cls[language]}`}></i>
        }
      ],
    },
    {
      title: translate('plans.plan2.title'),
      description: translate('plans.plan2.desc'),
      price: 149,
      features: [
        {
          text: translate('plans.feature1Full'),
          icon: <i className={`fa-duotone fa-circle-check ${cls.checked} ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature2'),
          icon: <i className={`fa-duotone fa-circle-check ${cls.checked} ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature3'),
          icon: <i className={`fa-duotone fa-circle-check ${cls.checked} ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature4'),
          icon: <i className={`fa-duotone fa-circle-check ${cls.checked} ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature5'),
          icon: <i className={`fa-duotone fa-circle-xmark ${cls[language]}`}></i>
        }
      ],
    },
    {
      title: translate('plans.plan3.title'),
      description: translate('plans.plan3.desc'),
      price: 999,
      features: [
        {
          text: translate('plans.feature1Full'),
          icon: <i className={`fa-duotone fa-circle-check ${cls.checked} ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature2'),
          icon: <i className={`fa-duotone fa-circle-check ${cls.checked} ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature3'),
          icon: <i className={`fa-duotone fa-circle-check ${cls.checked} ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature4'),
          icon: <i className={`fa-duotone fa-circle-check ${cls.checked} ${cls[language]}`}></i>
        },
        {
          text: translate('plans.feature5'),
          icon: <i className={`fa-duotone fa-circle-check ${cls.checked} ${cls[language]}`}></i>
        }
      ],
    }
  ]

  return (
    <Container component="section" id="Plans" className={cls.plans}>
      <Typography component="h2" color="primary" className={`${cls.section__title} section_title`}>
        { translate('Plans') }
      </Typography>
      <Typography variant="body1" component="p" color="primary" className={cls.section__description}>
        { translate('plans.desc') }
      </Typography>

      <Grid container spacing={3}>
        <PlanCard
          xs={12}
          sm={6}
          md={4}
          title={plans[0].title}
          price={plans[0].price}
          description={plans[0].description}
          features={plans[0].features}
        />
        <PlanCard
          xs={12}
          sm={6}
          md={4}
          title={plans[1].title}
          price={plans[1].price}
          description={plans[1].description}
          features={plans[1].features}
          colored
        />
        <PlanCard
          xs={12}
          sm={12}
          md={4}
          title={plans[2].title}
          price={plans[2].price}
          description={plans[2].description}
          features={plans[2].features}
        />
      </Grid>
    </Container>
  )
}

export default Plans
