import { tourdata } from "./TourData"


const TourArticle = ( { tourarticlebg, tourarticlecontent, tourarticle, tourarticleheader, tourarticletext }) => {
  return (
    <section className={ tourarticlebg }>
        <article className= { tourarticlecontent }>
            {
                tourdata.map(eachitem => {
                    const { id, text, title } = eachitem;
                    return (
                        <article key = {id} className = { tourarticle }>
                            <article className={ tourarticleheader } >
                                <h2> { title } </h2>
                                <p className="underline"></p>
                            </article>

                            <aside className={tourarticletext}>
                                <p> {text} </p>
                                <button> LEARN MORE </button>
                            </aside>

                        </article>
                    )
                })
            }

        </article>
    </section>
  )
}

export default TourArticle