export const Primarybutton = ({children = "Button Name", buttonType, customStyle={}, onclick}) => {
    return (
        <button type={buttonType} className='primarybtn' style={customStyle} onClick={onclick}>{children}</button>
    )
}

export const SecondaryButton = ({children = "Button Name", buttonType, customStyle= {}, onclick}) => {
    return (
        <button type={buttonType} className='secondarybtn' style={customStyle} onClick={onclick}>{children}</button>
    )
}
