import {useState, useEffect } from "react";
import OrderSummary from "./OrderSummary"



const Confirmation = ( {children} ) => {

    const [store, setStore] = useState('');
    const [firstName, setFirstName] = useState('');


    useEffect(()=> {
        const roomDetails = JSON.parse(localStorage.getItem('All Details'));
        const name = localStorage.getItem('FirstName');
        setStore(roomDetails)
        setFirstName(name)
    }, [])


  return (
    <main className="suitebg">
        <div className="container">
            <section className="suitecontainer confirmSummary">
                <section className="confirmationsummary">
                    <header className="confirmationheader">
                        <h1> Congratulations {firstName}, </h1>
                        <p> Your reservation has been booked!! </p>
                    </header>

                    <main className="confirmationcontent">
                        <section className="confirmationtext">
                            <article className="confirmation">
                                <p> Once your reservation is confirmed, you will get an email. </p>
                            </article>

                            <article className="confirmation">
                                <article className="confirmation">
                                    <h4> Check-in Time </h4>
                                    <p> 01:00PM</p>
                                </article>

                                <article className="confirmation">
                                    <h4> Check-Out Time </h4>
                                    <p> 12:00PM</p>
                                </article>
                            </article>

                            <section className="hoteldetailscontent">
                                <h3> Hotel Details </h3>
                                <article className="hoteldetails">
                                    <p> Phone Number </p>
                                    <p> +123456789 </p>
                                </article>
                                <article className="hoteldetails">
                                    <p> Email </p>
                                    <p> info@hotels.com </p>
                                </article>
                                <article className="hoteldetails">
                                    <p> Address </p>
                                    <p> 12, Parkway Road, <br /> CapeTown, <br />South Africa </p>
                                </article>
                            </section>
                        </section>
                        </main>



                        <main className="confirmationOrder">
                                { children }
                            <OrderSummary checkInDate = {store.date} 
                            checkOutDate = {store.dateOut} 
                            dayNum ={store.days}
                            subTotal ={store.subTotal}
                            total ={store.total}
                            roomTypes = {store.roomType} />
                        </main>

                        <div className="confirmationBtn">
                            <button className="confirmBtn"> RETURN HOME </button>
                        </div>
                </section>
            </section>
        </div>
    </main>
  )
}

export default Confirmation