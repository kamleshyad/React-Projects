import React from 'react'

export const TextInput = ( {inputType, placeHolder, inputValue, onChange={onChange} } ) => {
    return (
        <input type={inputType} placeholder={placeHolder ? placeHolder : null} value={inputValue} onChange={onChange} />
    )
}
