import SuiteHeaderContent from "./SuiteHeaderContent"
import SuiteDetails from "./SuiteDetails"

const SuiteFour = () => {
  return (
    <div className="container">
        <section className="suitecontainer">
            <SuiteHeaderContent 
            suiteprice = "$175"
            roomType = "Suite C"
            galleryImg = 'SuiteCImgOne'
            galleryFooterImg = 'SuiteCImgFour' />

            <SuiteDetails person="1" 
            bedsize= "1 king(s)" 
            size="220sq ft" />
        </section>
    </div>
  )
}

export default SuiteFour