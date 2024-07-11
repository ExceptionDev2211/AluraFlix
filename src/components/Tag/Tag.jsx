import "./Tag.css"

const Tag = ({title}) => {
  return (
    <div className="tagContainer">
        <h2 className="titleCard">{title.toUpperCase()}</h2>
    </div>
  )
}

export default Tag