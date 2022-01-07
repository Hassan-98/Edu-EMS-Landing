/* eslint-disable @next/next/no-img-element */
import cls from "../Gallery.module.scss"

const ScreenshotModal = ({ image, closeModal, next, prev }) => {

  return (
    <div className={cls.screenshot__modal}>
      <i onClick={closeModal} className={`fa-thin fa-circle-xmark ${cls.closeModalIcon}`}></i>
      <i className={`fa-duotone fa-angles-left ${cls.leftModalArrow}`} onClick={prev}></i>
      <img src={image} alt="screenshot image" />
      <i className={`fa-duotone fa-chevrons-right ${cls.rightModalArrow}`} onClick={next}></i>
    </div>
  )
}

export default ScreenshotModal
