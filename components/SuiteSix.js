import SuiteHeaderContent from "./SuiteHeaderContent"
import SuiteDetails from "./SuiteDetails"

const SuiteSix = () => {
  return (
    <div className="container">
        <section className="suitecontainer">
            <SuiteHeaderContent suiteprice = "$200" 
            roomType = "Suite B" 
            galleryImg = 'SuiteBImggOnne'
            galleryFooterImg = 'SuiteAImggThree' />


            <SuiteDetails 
            person="1" bedsize= 
            "1 king(s)" 
            size="240sq ft" />
        </section>
</div>
  )
}

export default SuiteSix