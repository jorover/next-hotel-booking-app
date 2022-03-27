import SuiteHeaderContent from "./SuiteHeaderContent"
import SuiteDetails from "./SuiteDetails"

const SuiteOne = () => {
  return (
        <div className="container">
            <section className="suitecontainer">
                <SuiteHeaderContent 
                suiteprice = "$250" 
                roomType = "Suite A" 
                galleryImg = 'SuiteAImgOne'
                galleryFooterImg = 'SuiteAImgFour' />

                <SuiteDetails 
                person="2" 
                bedsize= "2 Double(s)" 
                size="280sq ft" />
            </section>
        </div>
  )
}

export default SuiteOne