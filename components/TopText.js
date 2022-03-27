
const TopText = ( { headertext, paragraphtext }) => {
  return (
    <header className="toptext">
        <h1><em><span> {headertext} </span></em></h1>
        <p>{paragraphtext}</p>
    </header>
  )
}

export default TopText;