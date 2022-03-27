import SuiteHeaderContent from "./SuiteHeaderContent"
import SuiteDetails from "./SuiteDetails"

const SuiteFive = () => {
  return (
    <div className="container">
        <section className="suitecontainer">
            <SuiteHeaderContent 
            suiteprice = "$225" 
            roomType = "Suite A"
            galleryImg = 'SuiteAImggOne'
            galleryFooterImg = 'SuiteAImgFour'/>
            <SuiteDetails person="2" bedsize= "2 Doubles(s)" size="250sq ft" />
        </section>
    </div>
  )
}

export default SuiteFive