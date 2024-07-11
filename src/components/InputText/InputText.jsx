import "./InputText.css"

export const InputText = ({labelText,inputPlaceHolder}) => {
  return (
    <div className="container"> 
        <label>{labelText}</label>
        <input type="text" value="" placeholder={inputPlaceHolder}/>
    </div>
  )
}
