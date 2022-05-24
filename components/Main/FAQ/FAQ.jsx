import { useTranslation } from 'next-i18next';
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import cls from "./FAQ.module.scss";

const FAQ = () => {
  const { t: translate, i18n: { language } } = useTranslation('common');

  return (
    <>
      <section id="FAQ" className={cls.faq}>
      <div className={cls.section__divider_top}></div>
        <Box sx={{ bgcolor: 'primary.main' }}>
          <Container maxWidth="md" sx={{ alignItems: "center", display: 'flex', flexWrap: 'wrap', py: { xs: '30px', md: '10px' } }}>
            <Typography component="h2"  className={`${cls.section__title} section_title`}>
              { translate('FAQ') }
            </Typography>
            <Typography variant="body1" component="p" className={cls.section__description}>
              { translate('faq.desc') }
            </Typography>

            <Accordion defaultExpanded={true} sx={{ borderRadius: "10px!important", mb: 1, width: '100%' }}>
              <AccordionSummary className={cls.accordion__summary}>
                <i className={`fa-duotone fa-circle-question ${cls[language]}`}></i>
                <Typography component="p">
                  { translate('faq.question1.q') }
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={cls.accordion__details}>
                { translate('faq.question1.a') }
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: "10px!important", mb: 1, width: '100%' }}>
              <AccordionSummary className={cls.accordion__summary}>
                <i className={`fa-duotone fa-circle-question ${cls[language]}`}></i>
                <Typography component="p">
                  { translate('faq.question2.q') }
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={cls.accordion__details}>
                { translate('faq.question2.a') }
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: "10px!important", mb: 1, width: '100%' }}>
              <AccordionSummary className={cls.accordion__summary}>
                <i className={`fa-duotone fa-circle-question ${cls[language]}`}></i>
                <Typography component="p">
                  { translate('faq.question3.q') }
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={cls.accordion__details}>
                { translate('faq.question3.a') }
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: "10px!important", mb: 1, width: '100%' }}>
              <AccordionSummary className={cls.accordion__summary}>
                <i className={`fa-duotone fa-circle-question ${cls[language]}`}></i>
                <Typography component="p">
                  { translate('faq.question4.q') }
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={cls.accordion__details}>
                { translate('faq.question4.a') }
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: "10px!important", mb: 1, width: '100%' }}>
              <AccordionSummary className={cls.accordion__summary}>
                <i className={`fa-duotone fa-circle-question ${cls[language]}`}></i>
                <Typography component="p">
                  { translate('faq.question5.q') }
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={cls.accordion__details}>
                { translate('faq.question5.a') }
              </AccordionDetails>
            </Accordion>
          </Container>
        </Box>
        <div className={cls.section__divider_bottom}></div>
      </section>
    </>
  )
}

export default FAQ
