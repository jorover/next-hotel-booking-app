import { useState, useEffect } from 'react'
import ArrowUp from 'next/image'
import ArrowDown from 'next/image'
import Room from './Room'
import CheckIn from './Date'
import CheckOutDate from './CheckOutDate'
import Days from './Days'
import Guests from './Guests'
import SubtTotal from './SubtTotal'
import Total from './Total'
import Link from 'next/link'
import LightBoxContent from './LightBoxContent'

const SuiteHeaderContent = ( { suiteprice, roomType, galleryImg, galleryFooterImg } ) => {

    const [firstDate, setFirstDate] = useState('');
    const [secondDate, setSecondDate] = useState('');
    const [date, setDate] = useState('');
    const [dateOut, setDateOut] = useState('');
    const [days, setDays] = useState('');
    const [guest, setGuest] = useState(1);
    const [kidsCount, setKidsCount] = useState(0);
    const [total, setTotal] = useState('');
    const [subTotal, setSubtotal] = useState('')



    const buttonSubmit = (e) => {
        e.preventDefault();
        const allDetails = {
            date: date,
            dateOut: dateOut,
            days: days,
            subTotal: subTotal,
            total: total,
            roomType: roomType,
        };

        if(firstDate && secondDate){
            return localStorage.setItem('All Details', JSON.stringify(allDetails));
        }    
    }

    useEffect (()=> {
        let firstVal = parseFloat(firstDate.replaceAll('-', ''))
        let secondVal = parseFloat(secondDate.replaceAll('-', ''))
        let numOfDays = secondVal - firstVal;
        let totalPrice = suiteprice.replace('$', '');

        const calenderDay = () => {
            let firstDay = firstDate.slice(8, 10);
            let secondDay = secondDate.slice(8,10);
            let firstMonth = firstDate.slice(5, 7);
            let secondMonth = secondDate.slice(5, 7);
            let firstYear = firstDate.slice(0,4)
            let secondYear = secondDate.slice(0,4)
            let fullFirstDate = [firstDay, firstMonth, firstYear].join('/');
            let fullSecondDate = [secondDay, secondMonth, secondYear].join('/');
            setDate(fullFirstDate)
            setDateOut(fullSecondDate)
        }

        calenderDay();
       
        
        if(firstDate && secondDate){
            setDays(numOfDays);
            setSubtotal( () => {
                let subValue = 12 * totalPrice / 100;
                return subValue;
            })
            setTotal((totalPrice * numOfDays) + subTotal);
        }

    }, [firstDate, secondDate, suiteprice, subTotal]);



  return (
    <section className="suiteheader">
       <figure className="suitelightbox">
           <LightBoxContent galleryImg = {galleryImg} galleryFooterImg = {galleryFooterImg} />
       </figure>
       <aside className="suitecalendercontent">
           <article className="suite">
               <p> From </p>
               <h2> {suiteprice} </h2>
               <p> Per Night </p>
           </article>
           <form action="#" className="suitecalender" onSubmit={buttonSubmit}>
               <input type="date" name="date" id="date" 
               value={firstDate} 
               onChange={(e) => setFirstDate(e.target.value)} required />
               <input type="date" name="date" id="date"
               value={secondDate} 
               onChange={(e) => setSecondDate(e.target.value)} 
               required />
               <article> 
                    <p> {guest} Adults </p>
                    <figure className="suiteicons">
                        <ArrowUp src="/Images/up.png" alt="up" width="15" height="15" onClick ={()=> setGuest(guest + 1) } />
                        <ArrowDown src="/Images/down.png" alt="down" width="15" height="15" 
                        onClick = {()=> setGuest(()=> {
                            if(guest <= 1 ){
                                return guest = 1
                            } else {
                                return guest - 1;
                            }
                        })} />
                    </figure>
               </article>
               <article>
                    <p> {kidsCount} kids </p>
                    <figure className="suiteicons">
                        <ArrowUp src="/Images/up.png" alt="up" width="15" height="15" onClick={()=> setKidsCount(kidsCount + 1)} />
                        <ArrowDown src="/Images/down.png" alt="down" width="15" height="15"
                        onClick = {()=> setKidsCount( () => {
                            if(kidsCount <= 0){
                                return kidsCount = 0;
                            } else {
                                return kidsCount - 1;
                            }
                        }) 

                        } />
                    </figure>
                </article>
                
                { firstDate && secondDate ? <section className="room-details"> 
                <Room roomtype = {roomType} />
                <CheckIn dateIn = {date} />
                <CheckOutDate dateOut = {dateOut} />
                <Days days={days} />
                <Guests guests = {guest + kidsCount} />
                <SubtTotal subTotal = {subTotal} />
                <Total total = {total} /> 
                </section> : console.log('Kindly fill in the dates')}
                <button type="submit" onClick= {buttonSubmit}> 
                <Link href="/guestdetails">
                    BOOK NOW    
                </Link>
                </button>
           </form>
       </aside>
    </section>
  )
}

export default SuiteHeaderContent