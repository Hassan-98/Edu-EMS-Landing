import { useTranslation } from 'next-i18next';
import { Typography, Grid, Container } from '@mui/material'
import Feature from "./feature/feature"
import cls from "./Features.module.scss"

const Features = () => {
  const { t: translate } = useTranslation('common');
  
  const features = [
    {
      text: translate('features.feature1'),
      icon: <i className="fa-thin fa-browsers"></i>
    },
    {
      text: translate('features.feature2'),
      icon: <i className="fa-thin fa-user-graduate"></i>
    },
    {
      text: translate('features.feature3'),
      icon: <i className="fa-thin fa-user-tie"></i>
    },
    {
      text: translate('features.feature4'),
      icon: <i className="fa-thin fa-screen-users"></i>
    },
    {
      text: translate('features.feature5'),
      icon: <i className="fa-thin fa-money-check-dollar-pen"></i>
    },
    {
      text: translate('features.feature6'),
      icon: <i className="fa-thin fa-envelopes-bulk"></i>
    },
    {
      text: translate('features.feature7'),
      icon: <i className="fa-thin fa-file-spreadsheet"></i>
    },
    {
      text: translate('features.feature8'),
      icon: <i className="fa-thin fa-print"></i>
    },
    {
      text: translate('features.feature9'),
      icon: <i className="fa-thin fa-shield-keyhole"></i>
    },
    {
      text: translate('features.feature10'),
      icon: <i className="fa-thin fa-user-group-crown"></i>
    },
    {
      text: translate('features.feature11'),
      icon: <i className="fa-thin fa-gauge-max"></i>
    }
  ]

  return (
    <Container component="section" id="Features" className={cls.features}>
      <Typography component="h2" color="primary" className={`${cls.section__title} section_title`}>
        { translate('Features') }
      </Typography>
      <Typography variant="body1" component="p" color="primary" className={cls.section__description}>
        { translate('features.desc') }
      </Typography>

      {/* Features */}
      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        {
          features.map((feature, idx) => (
            <Feature key={idx} text={feature.text} icon={feature.icon} />
          ))
        }
      </Grid>
    </Container>
  )
}

export default Features
