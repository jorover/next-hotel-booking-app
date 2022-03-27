import SuiteHeaderContent from "./SuiteHeaderContent"
import SuiteDetails from "./SuiteDetails"

const Suitethree = () => {
  return (
    <div className="container">
        <section className="suitecontainer">
            <SuiteHeaderContent 
            suiteprice = "$225"
            roomType = "Suite A" 
            galleryImg = 'SuiteAImgThree'
            galleryFooterImg = 'SuiteAImggThree' />

            <SuiteDetails person="2" 
            bedsize= "2 Doubles(s)" 
            size="235sq ft" />
        </section>


    </div>
  )
}

export default Suitethree