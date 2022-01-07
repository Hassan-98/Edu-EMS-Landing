import { useEffect, useState } from "react"
import cls from "./Gallery.module.scss"
import { Typography, NoSsr } from '@mui/material'
import { Carousel } from "@trendyol-js/react-carousel"
import Screenshot from "./Screenshot/Screenshot.jsx"
import ScreenshotModal from "./Modal/ScreenshotModal.jsx"

// Screenshot Images Links
const screenshots = [];
for (var i = 1; i <= 21; i++) { screenshots.push(`${i}.png`) };

const Gallery = () => {
  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false);
  const [screenshotModalImage, setScreenshotModalImage] = useState(false);
  const [slides, setSlides] = useState(3);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setSlides(1);
    }

    window.onresize = (e) => {
      const width = e.target.innerWidth;
      if (width < 700) {
        setSlides(1);
      } else if (width > 700 && width < 1024)  {
        setSlides(2);
      } else {
        setSlides(3);
      }
    }
  }, []);

  const openScreenshotModal = (image) => {
    setScreenshotModalImage(`/imgs/Gallery/${image}`);
    setIsScreenshotModalOpen(true);
  }

  const goToNextSlide = () => {
    const currentSlide = screenshotModalImage.split("/").at(-1).split(".").at(0);

    if (currentSlide == '21') {
      return setScreenshotModalImage(`/imgs/Gallery/1.png`);
    }

    setScreenshotModalImage(`/imgs/Gallery/${+currentSlide + 1}.png`);
  }

  const goToPrevSlide = () => {
    const currentSlide = screenshotModalImage.split("/").at(-1).split(".").at(0);

    if (currentSlide == '1') {
      return setScreenshotModalImage(`/imgs/Gallery/21.png`);
    }

    setScreenshotModalImage(`/imgs/Gallery/${+currentSlide - 1}.png`);
  }

  return (
    <>
      <div className={cls.section__divider_top}></div>
      <section id="Gallery" className={cls.gallery}>
        <Typography component="h2" className={cls.section__title}>Screens</Typography>
        <Typography variant="body1" component="p" color="primary" className={cls.section__description}>
          Screenshots for each page & interface of the program
        </Typography>

        <NoSsr>
          <Carousel
            show={slides}
            slide={1}
            swiping={true}
            responsive={true}
            rightArrow={<i className={`fa-duotone fa-chevrons-right ${cls.rightArrow}`}></i>}
            leftArrow={<i className={`fa-duotone fa-angles-left ${cls.leftArrow}`}></i>}
          >
            {
              screenshots.map((screenshot, idx) => (
                <Screenshot key={idx} image={screenshot} openScreenshotModal={() => openScreenshotModal(screenshot, idx+1)} />
              ))
            }
          </Carousel>
        </NoSsr>

        {
          isScreenshotModalOpen && (
            <ScreenshotModal
              closeModal={() => setIsScreenshotModalOpen(false)}
              image={screenshotModalImage}
              next={goToNextSlide}
              prev={goToPrevSlide}
            />
          )
        }
      </section>
      <div className={cls.section__divider_bottom}></div>
    </>
  )
}

export default Gallery
