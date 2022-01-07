import { Typography, Grid, Container } from '@mui/material'
import Feature from "./feature/feature"
import cls from "./Features.module.scss"

const features = [
  {
    text: "Easy, convenient and modern user interface",
    icon: <i className="fa-thin fa-browsers"></i>
  },
  {
    text: "Complete management of students and their financial reports",
    icon: <i className="fa-thin fa-user-graduate"></i>
  },
  {
    text: "Complete management of employees and teachers and their financial reports",
    icon: <i className="fa-thin fa-user-tie"></i>
  },
  {
    text: "Complete management of courses, classes, exams and resources",
    icon: <i className="fa-thin fa-screen-users"></i>
  },
  {
    text: "Control and management of all financial services and reports",
    icon: <i className="fa-thin fa-money-check-dollar-pen"></i>
  },
  {
    text: "Ability to send emails to students and employees through the system",
    icon: <i className="fa-thin fa-envelopes-bulk"></i>
  },
  {
    text: "Ability to export students, employees, courses and finances reports to excel",
    icon: <i className="fa-thin fa-file-spreadsheet"></i>
  },
  {
    text: "Print periodic records and logs for the system",
    icon: <i className="fa-thin fa-print"></i>
  },
  {
    text: "Full protection of data from lose using backup and restore feature",
    icon: <i className="fa-thin fa-shield-keyhole"></i>
  },
  {
    text: "Professional system for distributing roles and permissions to users",
    icon: <i className="fa-thin fa-user-group-crown"></i>
  },
  {
    text: "The system is fast and works efficiently under heavy load",
    icon: <i className="fa-thin fa-gauge-max"></i>
  }
]

const Features = () => {
  return (
    <Container component="section" id="Features" className={cls.features}>
      <Typography component="h2" color="primary" className={cls.section__title}>Features</Typography>
      <Typography variant="body1" component="p" color="primary" className={cls.section__description}>
        Features & advantages and what the program offers
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
