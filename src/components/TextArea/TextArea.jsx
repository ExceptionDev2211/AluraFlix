import "./TextArea.css"
const TextArea = ({labelText,placeholder}) => {
  return (
    <div className="container"> 
    <label>{labelText}</label>
    <textarea rows="10" cols="" placeholder={placeholder}></textarea>
</div>
  )
}

export default TextArea