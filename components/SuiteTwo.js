import SuiteHeaderContent from "./SuiteHeaderContent"
import SuiteDetails from "./SuiteDetails"

const SuiteTwo = () => {
  return (
    <div className="container">
            <section className="suitecontainer">
                <SuiteHeaderContent 
                suiteprice = "$275" 
                roomType = "Suite B"
                galleryImg = 'SuiteBImgOne'
                galleryFooterImg = 'SuiteBImgFour' />

                <SuiteDetails 
                person="1" 
                bedsize= "1 king(s)" 
                size="240sq ft" />

            </section>
        </div>
  )
}

export default SuiteTwo