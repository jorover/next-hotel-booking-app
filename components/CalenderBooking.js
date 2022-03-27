import { useState } from "react"
import Arrowup from 'next/image'
import ArrowDown from 'next/image'
import Up from '../public/Images/up.png'
import Down from '../public/Images/down.png'
import formStyles from '../styles/CalenderBooking.module.css'
import CalenderHeader from "../components/CalenderHeader"
import CalenderGallery from "./CalenderGallery"
import Link from 'next/link'


const CalenderBooking = ({ children }) => {

    const [adultCount, setAdultCount] = useState(1);
    const [kidsCount, setkidsCount] = useState(0);



  return (
    <section className={formStyles.calendersection}>
        <div className="container">
            <header className={formStyles.formcontainer}>
                <form action="#" className={formStyles.formcontrolcontainer}>
                    <article className={formStyles.formcontrol}>
                        <label htmlFor="#"> Check In </label>
                        <input type="date" className="calender"/>
                    </article>

                    <article className={formStyles.formcontrol}>
                        <label htmlFor="#"> Check Out </label>
                        <input type="date" className="calender"/>
                    </article>
                </form>

                <section className={formStyles.countingcontainer}>
                    <article className={formStyles.counting}>
                            <label> Adults </label>
                        <figure className={formStyles.count}>
                            <p>{adultCount}</p>
                            <figure className={formStyles.counter}>
                                <Arrowup src={Up} alt="#" width="15" height="15" onClick = {()=> setAdultCount(adultCount + 1)}/>
                                <ArrowDown src={Down} alt="#" width="15" height="15" 
                                onClick= {()=> setAdultCount(()=> {
                                    if(adultCount === 1){
                                        setAdultCount(1)
                                    } else {
                                        setAdultCount(adultCount - 1)
                                    }
                                })}/>
                            </figure>
                        </figure>
                    </article>

                    <article className={formStyles.counting}>
                            <label> kids </label>
                        <figure className={formStyles.count}>
                            <p>{kidsCount}</p>
                            <figure className={formStyles.counter}>
                                <Arrowup src={Up} alt="#" width="15" height="15" onClick = {()=> setkidsCount (kidsCount + 1)}/>
                                <ArrowDown src={Down} alt="#" width="15" height="15"
                                onClick = {()=> setkidsCount (()=> {
                                    if(kidsCount === 0){
                                        setkidsCount(0)
                                    } else {
                                        setkidsCount(kidsCount - 1)
                                    }
                                }) }/>
                            </figure>
                        </figure>
                    </article>           
                </section>

                <button className={formStyles.searchbtn}>
                    <Link href='/apartment'>
                        SEARCH 
                     </Link>
                </button>
            </header>

            <section className={formStyles.calenderheader}>
                {children}
                <CalenderHeader headerStyle ={formStyles.headercontent}/>
                <CalenderGallery gallery={formStyles.gallery} gallerytitle={formStyles.gallerytitle}/>
            </section>
      
        </div>    
    </section>
  )
}

export default CalenderBooking