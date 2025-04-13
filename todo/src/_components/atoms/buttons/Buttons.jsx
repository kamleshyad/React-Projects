export const PrimaryButton = ({children = "Button Name", buttonType = "submit", customStyle= {}}) => {
    return (
        <button type={buttonType} className='primarybtn' style={customStyle}>{children}</button>
    )
}

export const SecondaryButton = ({children = "Button Name", buttonType = "submit", customStyle= {}}) => {
    return (
        <button type={buttonType} className='secondarybtn' style={customStyle}>{children}</button>
    )
}
