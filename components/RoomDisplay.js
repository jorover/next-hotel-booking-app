import { useState } from 'react';
import { roomdata } from "./RoomData"
import IconOne from 'next/image'
import IconTwo from 'next/image'
import IconThree from 'next/image'
import IconFour from 'next/image'
import IconFive from 'next/image'
import IconSix from 'next/image'
import IconSeven  from 'next/image'
import Link from 'next/link'
import RoomFilter from "./RoomFilter"
import ErrorMessage from './ErrorMessage';


const RoomDisplay = ({roomsection, roomcontent, rooms, roomtextcontent, roomdetails, roomlist, iconslist, roomprice}) => {

    const [option, setOption] = useState(roomdata);

    const filterSuite = (roomType) => { 
        if(roomType === 'All' || roomType === 'All Sizes'){
            setOption(roomdata);
            return;
        }

        const suites = roomdata.filter(eachItem => {
            const {bed, Suite, price, roomSize} = eachItem;
            if(bed === roomType){
                return eachItem;
            }

            if(Suite === roomType){
                return eachItem;
            }

            if(price.replace('$', '') === roomType){
                localStorage.setItem('roomPrice', roomType);
                return eachItem;
            }

            if(roomSize === roomType){
                return eachItem;
            }
        })

        setOption(suites)
    }


 
  return (
    <section className={roomsection}>

        <RoomFilter filterSuite={filterSuite} />

        {option.length === 0 ? <ErrorMessage /> : <section className={roomcontent}>

                {
                    option.map(eachItem => {
                        const {id, imgs, title, titletext, firstlisttext, secondlisttext, icon, icon1, icon2, icon3, icon4, icon5, icon6, price, buttontext, link} = eachItem;
                        return (
                            <figure key={id} className={rooms}>
                                <figure className={imgs} id="roomInnerImg"> </figure>
                                <figcaption className={roomtextcontent}>
                                    <article className={roomdetails}>
                                        <h4> {title} </h4>
                                        <p> {titletext}</p>

                                        <ul className={roomlist}>
                                            <li> {firstlisttext} </li>
                                            <li> {secondlisttext} </li>
                                        </ul>

                                        <article className={iconslist}>
                                            <IconOne src={icon} width='25' height='25' priority/>
                                            <IconTwo src={icon1} width='25' height='25' priority/>
                                            <IconThree src={icon2} width='25' height='25' priority/>
                                            <IconFour src={icon3} width='25' height='25' priority/>
                                            <IconFive src={icon4} width='25' height='25' priority/>
                                            <IconSix src={icon5} width='25' height='25' priority/>
                                            <IconSeven src={icon6} width='25' height='25' priority/>
                                        </article>
                                    </article>

                                    <aside className={roomprice}>
                                        <p> From </p>
                                        <h4> {price} </h4>
                                        <button> 
                                            <Link href = {link}>
                                            {buttontext} 
                                            </Link>
                                        </button>
                                    </aside>
                                </figcaption>
                            </figure>
                        )
                    })
                }

        </section>
      }
    </section>
  )
}

export default RoomDisplay