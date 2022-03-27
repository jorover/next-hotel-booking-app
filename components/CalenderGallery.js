import { galleryData } from "./CalenderGalleryData"
import BgImg from 'next/image'
import Link from 'next/link'

const CalenderGallery = ({ gallery, gallerytitle }) => {
  return (
    <section>
        {
            galleryData.map(eachitem => {
                const {id, img, buttonText, title, titleText} = eachitem;
                return (
                    <section key={id} className={gallery}>
                        <article className={gallerytitle}>
                            <h2> {title}</h2>
                            <p>{titleText} </p>
                            <button className="btn">
                                <Link href='/apartment'>
                                    {buttonText} 
                                 </Link>
                            </button>
                        </article>
                        <BgImg src={img} width="500" height="350" priority/>
                    </section>
                )
            })
        }
    </section>
  )
}

export default CalenderGallery