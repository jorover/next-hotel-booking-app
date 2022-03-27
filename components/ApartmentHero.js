import apartmentStyle from '../styles/Apartment.module.css'
import RoomDisplay from './RoomDisplay'
import TopText from './TopText'




const ApartmentHero = ({ children }) => {
  return (
    <section className={apartmentStyle.apartmentsection}>
        <div className="container">

            <TopText headertext= 'BROWSE OUR APARTMENTS'
            paragraphtext = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, repudiandae quisquam.' />

            <main>
                { children }
                <RoomDisplay roomsection = {apartmentStyle.roomdisplay} roomcontent ={apartmentStyle.roomcontent}
                rooms = {apartmentStyle.rooms} roomtextcontent = {apartmentStyle.roomtextcontent} roomdetails = {apartmentStyle.roomdetails}
                roomlist = {apartmentStyle.roomlist} iconslist={apartmentStyle.iconslist} roomprice={apartmentStyle.roomprice} />
            </main>

        </div>
    </section>
  )
}

export default ApartmentHero