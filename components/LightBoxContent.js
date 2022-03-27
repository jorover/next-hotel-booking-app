import React from 'react'

const LightBoxContent = ( {galleryImg, galleryFooterImg} ) => {
  return (
    <section className="roomSuiteGallery">
        <figure className="roomGallery roomGalleryOne" id = { galleryImg } ></figure>
        <figure className="roomGallery roomGalleryTwo"></figure>
        <figure className="roomGallery roomGalleryThree"></figure>
        <figure className="roomGallery roomGalleryFour" id= {galleryFooterImg}></figure>
    </section>
  )
}

export default LightBoxContent