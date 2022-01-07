/* eslint-disable @next/next/no-img-element */
import cls from "../Gallery.module.scss"

const Screenshot = ({ image, openScreenshotModal }) => {
  return (
    <div className={cls.gallery__screenshot} onClick={openScreenshotModal}>
      <img src={`/imgs/Gallery/${image}`} alt="screenshot" />
    </div>
  )
}

export default Screenshot
