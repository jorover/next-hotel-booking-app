import Room from "./Room"

const OrderSummary = ( { checkInDate, checkOutDate, dayNum, subTotal, total, roomTypes } ) => {
  return (
    <section className="ordersummarycontent">
        <h2> Order Summary </h2>
        <article className="orderdetails innerRoomDetails">
           <Room roomtype = {roomTypes} />
        </article>
        <article className="orderdetails innerRoomDetails">
            <p> CheckIn Date </p>
            <h5> {checkInDate} </h5>
        </article>

        <article className="orderdetails innerRoomDetails">
            <p> CheckOut Date </p>
            <h5> {checkOutDate} </h5>
        </article>
        <article className="orderdetails innerRoomDetails">
            <p> No. of nights </p>
            <h5> {dayNum} </h5>
        </article>
        <article className="orderdetails innerRoomDetails">
            <p> SubTotal(Tax 12%)  </p>
            <h5> ${subTotal} </h5>
        </article>

        <article className="orderdetails innerRoomDetails">
            <h5> Total  </h5>
            <h5> ${total} </h5>
        </article>
    </section>
  )
}

export default OrderSummary