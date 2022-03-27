import IconOne from 'next/image'
import IconTwo from 'next/image'
import IconThree from 'next/image'
import IconFour from 'next/image'
import IconFive from 'next/image'
import IconSix from 'next/image'
import IconSeven  from 'next/image'

const SuiteDetails = ({ person, bedsize, size }) => {
  return (
    <section className="suitedetailsection">
        <header className="suitedetailsheader suiteflex">
            <h3> Properties: </h3>

                <ul className ="suiteinfotext">
                    <li> Accomodates: {person} </li>
                    <li> Beds: {bedsize} </li>
                    <li> Size: {size} </li>
                </ul>
        </header>


        <section className="suiteinfo suiteflex">
            <h3> More Info: </h3>
                <article className="suiteinfotext">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et nostrum tempore laborum corporis dolores cupiditate consectetur nisi. <br /> Nostrum perferendis dignissimos enim at alias excepturi. Dolores cupiditate dolorem assumenda non.</p>
                </article>
        </section>

        <section className="suiteamenities suiteflex">
            <h3> Amenities: </h3>
            <figure className="suiteinfotext">
                <IconOne src='/Images/i.png' width='40' height='40' />
                <IconTwo src='/Images/i0.png' width='40' height='40' />
                <IconThree src='/Images/i1.png' width='40' height='40' />
                <IconFour src='/Images/i2.png' width='40' height='40' />
                <IconFive src='/Images/i3.png' width='40' height='40' />
                <IconSix src='/Images/i4.png' width='40' height='40' />
                <IconSeven src='/Images/i5.png' width='40' height='40' />
            </figure>
        </section>


    </section>
  )
}

export default SuiteDetails