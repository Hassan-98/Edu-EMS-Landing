import cls from "./FAQ.module.scss"
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const FAQ = () => {
  return (
    <>
      <section id="FAQ" className={cls.faq}>
      <div className={cls.section__divider_top}></div>
        <Box sx={{ bgcolor: 'primary.main' }}>
          <Container maxWidth="md" sx={{ alignItems: "center", display: 'flex', flexWrap: 'wrap' }}>
            <Typography component="h2" className={cls.section__title}>FAQ</Typography>
            <Typography variant="body1" component="p" className={cls.section__description}>Frequently Asked Questions</Typography>

            <Accordion defaultExpanded={true} sx={{ borderRadius: "10px!important", mb: 1 }}>
              <AccordionSummary className={cls.accordion__summary}>
                <i className="fa-duotone fa-circle-question"></i>
                <Typography component="p">How can i try the program ?</Typography>
              </AccordionSummary>
              <AccordionDetails className={cls.accordion__details}>
                You can just request the demo version of the system, it&apos;s totally free, but it has limited trail time and less features and capabilities
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: "10px!important", mb: 1 }}>
              <AccordionSummary className={cls.accordion__summary}>
                <i className="fa-duotone fa-circle-question"></i>
                <Typography component="p">Is system works with any operating system ?</Typography>
              </AccordionSummary>
              <AccordionDetails className={cls.accordion__details}>
                No, the program only tested on Win 7 - 10 - 11, it&apos;s not developed to work with any other operating system such as Linux or MacOs
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: "10px!important", mb: 1 }}>
              <AccordionSummary className={cls.accordion__summary}>
                <i className="fa-duotone fa-circle-question"></i>
                <Typography component="p">How can i request the full version ?</Typography>
              </AccordionSummary>
              <AccordionDetails className={cls.accordion__details}>
                You can send us a request for full version and type your contact info and we will contact you as soon as possible
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: "10px!important", mb: 1 }}>
              <AccordionSummary className={cls.accordion__summary}>
                <i className="fa-duotone fa-circle-question"></i>
                <Typography component="p">Can i use full version on multiple devices?</Typography>
              </AccordionSummary>
              <AccordionDetails className={cls.accordion__details}>
                No, you can&apos;t run the program on multiple devices unless you buy another serial number or cancel the first one
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ borderRadius: "10px!important", mb: 1 }}>
              <AccordionSummary className={cls.accordion__summary}>
                <i className="fa-duotone fa-circle-question"></i>
                <Typography component="p">Which languages used to develop the program ?</Typography>
              </AccordionSummary>
              <AccordionDetails className={cls.accordion__details}>
                The program developed using web technologies such as HTML, CSS, Scss, React.js, Electron.js, Node.js, Express and MongoDB
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
