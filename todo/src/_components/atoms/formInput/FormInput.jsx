export const Forminput = ({ inputType, placeHolder, inputValue, onchange }) => {
    return (
        <input type={inputType} placeholder={placeHolder ? placeHolder : null } value={inputValue} onChange={onchange}/>
    )
}
