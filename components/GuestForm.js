import {useState, useEffect } from "react";
import OrderSummary from "./OrderSummary"
import Link from 'next/link'


const GuestForm = ({ children }) => {

    const [store, setStore] = useState('');
    const [firstVal, setFirstVal] = useState('')

    useEffect(()=> {
        const items = localStorage.getItem(('All Details'));
        setStore(JSON.parse(items));
    }, [])

    const saveFirstName = () => {
        if(firstVal){
            return localStorage.setItem('FirstName', firstVal)
        }
    }




  return (
    <section className="guestdetailsheader">
        <header className="guestdetails">
        <form action="#" className="formcontrolcontainer">
            <div className="formcontrol">
                <h2> Guest Details </h2>
                <label htmlFor="#"> First Name </label>
                <input type="text" value={firstVal} onChange = {(e)=> setFirstVal(e.target.value)} required />
            </div>

            <div className="formcontrol">
                <label htmlFor="#"> Last Name </label>
                <input type="text" required />
            </div>

            <div className="formcontrol">
                <label htmlFor="#"> Email Address </label>
                <input type="email" required />
            </div>

            <div className="formcontrol">
                <label htmlFor="#"> Phone Number </label>
                <input type="number" required />
            </div>

            <div className="formcontrol">
                <label htmlFor="#"> Special request </label>
                <textarea cols="20" rows="5"></textarea>
            </div>
            <article className="checkout">
                <p>  By completing this booking <br/> I acknowledge I have read and accepted the Property Policies. </p>
                <button type="submit" onClick ={saveFirstName}> 
                    <Link href="/confirmation">
                        CHECKOUT    
                    </Link>    
                </button>
            </article>
        </form>
        </header>

        <main className="ordersummarysection">
            { children }
        <OrderSummary checkInDate = {store.date} 
        checkOutDate = {store.dateOut} 
        dayNum ={store.days}
        subTotal ={store.subTotal}
        total ={store.total}
        roomTypes = {store.roomType} />
        </main>

       
    </section>
  )
}

export default GuestForm