export const Textinput = ({inputType, placeHolder, inputValue, onChange }) => {
    return (
        <input type={inputType} placeholder={placeHolder} value={inputValue} onChange={onChange} />
    )
}
