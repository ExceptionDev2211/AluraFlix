import Card from "../Card/Card"
import Tag from "../Tag/Tag"
import "./CardSection.css"

const   CardSection = ({sectionName}) => {
  return (
    <div className="CardSection" > 
        <div className="tagCont">
        <Tag title={sectionName}/>    
        </div>
        <div className="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
    </div>
  )
}

export default CardSection
