import TopText from './TopText'
import tourStyle from '../styles/TourHero.module.css'
import TourArticle from './TourArticle'

const TourHero = () => {
  return (
    <section className={tourStyle.tourherosection}>
        <div className="container">
            <TopText headertext= 'TAKE A CITY TOUR'
                paragraphtext = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, repudiandae quisquam.' />
            <TourArticle tourarticlebg= {tourStyle.tourarticlesection} tourarticlecontent ={tourStyle.tourarticlecontent} 
            tourarticle = {tourStyle.tourarticle}  tourarticleheader = {tourStyle.tourarticleheader} 
            tourarticletext = {tourStyle.tourarticletext} />
        </div>
    </section>
  )
}

export default TourHero