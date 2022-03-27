import teamStyle from '../styles/OurTeam.module.css'
import { teamData } from './OurTeamData'
import FbIcon from 'next/image'
import TwIcon from 'next/image'
import GplusIcon from'next/image'
import LkIcon from 'next/image'
import IgIcon from 'next/image'


const OurTeam = () => {
  return (
    <section className={teamStyle.teamsection}>
      <div className="container">

          <header className={teamStyle.teamheader}>
            <h2> Our Team </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptates, facilis aliquid debitis illum repudiandae quas ipsum impedit quam eum necessitatibus.</p>
            <p className="underline"></p>
          </header>

          <section className={teamStyle.teamcardsection}>
                  {
                    teamData.map(eachItem => {
                      const {id, position, img, name, details, fb, tw, gplus, lk, ig} = eachItem;
                      return (
                        <figure key={id} className={teamStyle.card}>
                            <figure className={img}></figure>

                            <figcaption className={teamStyle.cardtext}>
                                <h4> {name} </h4>
                                <p><em> {position} </em></p>
                                <p> {details} </p>
                                <article className={teamStyle.teamIcons}>
                                  <FbIcon src = {fb} width='25' height='25' priority/>
                                  <TwIcon src= {tw} width='25' height='25' priority/>
                                  <GplusIcon src = {gplus} width='25' height='25' priority/>
                                  <LkIcon src= {lk} width='25' height='25' priority/>
                                  <IgIcon src= {ig} width='25' height='25' priority/>
                                </article>
                            </figcaption>
                        </figure>
                      )
                    })
                  }
          </section>

      </div>
    </section>
  )
}

export default OurTeam