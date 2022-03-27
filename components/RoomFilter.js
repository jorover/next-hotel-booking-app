import filterStyle from '../styles/Roomfilter.module.css'
import { roomdata } from './RoomData'
import { useState, useEffect} from 'react';



const suiteOptions = Array.from(['All', ...new Set(roomdata.map(suite => {
    return suite.Suite}))]);


const bedOptions = Array.from(['All Sizes', ...new Set(roomdata.map(beds => {
    return beds.bed}))]);

const roomOptions = Array.from(new Set(roomdata.map(room =>  {
    return room.roomSize})));


const RoomFilter = ( { filterSuite } ) => {

    const [roomPrice, setRoomPrice] = useState('');

    useEffect(()=> {
        let roomsPrice = localStorage.getItem('roomPrice');
        setRoomPrice(roomsPrice);
    }, [])

  return (
    <header>
        <article className={filterStyle.headerText}>
            <h2> Search Rooms </h2>
            <p className="underline"></p>
        </article>
    <section className={filterStyle.filterContainer} onChange= {(e)=> filterSuite(e.target.value)}>
        <article className={filterStyle.filterOptionContent}>
            <h4> Suite Type </h4>
            <select className={filterStyle.filterOption}>
                {
                   suiteOptions.map((option, index) => {
                       return <option value={option} key={index}> {option} </option>
                   }) 
                }
            </select>
        </article>

        <article className={filterStyle.filterOptionContent}>
            <h4> Room Size </h4>
            <select className={filterStyle.filterOption}>
                {
                    roomOptions.map((eachRoom, index) => {
                        return <option key={index} value= {eachRoom}> {eachRoom} </option>
                    })
                }
            </select>
        </article>

        <article className={filterStyle.filterOptionContent}>
            <h4> Room Price ${roomPrice} </h4>
            <form action="#">
                <input type="range" min='175' max='300' step='25' defaultValue='150' className={filterStyle.range} onChange= {(e)=> filterSuite(e.target.value)} />
            </form>
        </article>


        <article className={filterStyle.filterOptionContent}>
            <h4> Bed Size </h4>
            <select className={filterStyle.filterOption} onChange= {(e)=> filterSuite(e.target.value)}>
              {
                  bedOptions.map((eachBed, index) => {
                      return <option key= {index} value={eachBed}> {eachBed} </option>
                  })
              }
            </select>
        </article>
    </section>
    </header>
  )
}

export default RoomFilter