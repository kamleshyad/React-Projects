export const Primarybutton = ({children = 'Enter Button Name', buttonType="submit", customStyle={}, onClick}) => {
    return (
        <button type={buttonType} className='primarybtn' style={customStyle} onClick={onClick}>{children}</button>
    )
}

export const SecondaryButton = ({children = "Button Name", buttonType="submit", customStyle={}, onClick}) => {
    return (
        <button type={buttonType} className='secondarybtn' style={customStyle} onClick={onClick}>{children}</button>
    )
}
