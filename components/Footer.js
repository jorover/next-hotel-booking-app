import FbIcon from 'next/image'
import TwIcon from 'next/image'
import IgIcon from 'next/image'
import GIcon from 'next/image'
import IconOne from '../public/Images/fb1.png'
import IconTwo from '../public/Images/tw.png'
import IconThree from '../public/Images/ig1.png'
import IconFour from '../public/Images/gg1.png'
import footerStyle from '../styles/Footer.module.css'


const Footer = () => {
  return (
    <section className={footerStyle.footersection}>
        <div className="container">
            <section className={footerStyle.footercontentsection}>
                <article className ={footerStyle.footercontent}>
                    <h5> Contact Us </h5>
                    <p className="underline"></p>
                    <p>Feel free to ask us anything, We are here <br /> to answer any questions you may have</p>
                    <p> Email: info@rover.com </p>
                </article>

                <article className ={footerStyle.footercontent}>
                    <h5> Follow us </h5>
                    <p className="underline"></p>
                    <article className={footerStyle.footersocials}>
                        <FbIcon src= {IconOne} width="30" height="30" priority />
                        <TwIcon src={IconTwo} width="30" height="30" priority />
                        <IgIcon src={IconThree} width="30" height="30" priority />
                        <GIcon src={IconFour} width="30" height="30" priority />
                    </article>
                </article>
                
                <article className={footerStyle.footerformsection}>
                    <h5> Subscribe for Updates and offers </h5>
                    <p className="underline"></p>
                        <form action="#" className={footerStyle.footerform}>
                            <input type="email" placeholder="Enter your email here" required/>
                            <input type="submit" value="Subcribe Now"/>
                        </form>

                </article>
            </section>
        </div>

    </section>
  )
}

export default Footer