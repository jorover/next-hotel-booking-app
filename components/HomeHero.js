import homeHero from '../styles/HomeHero.module.css'
import Link from 'next/link'


const HomeHero = () => {
  return (
    <section className={homeHero.homeHero}>
      <div className="container">
        <article className={homeHero.homeherocontent}>
          <h1><em><span>  Our Apartments </span></em> <br />will make you feel at home</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="btn"> 
            <Link href="/apartment">
              VIEW APARTMENTS 
            </Link>
          </button>
        </article>
      </div>

    </section>
  )
}

export default HomeHero