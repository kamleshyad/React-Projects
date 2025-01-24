import './Modal.css';

export const Modal = ({children, onClose}) => {
    return (
        <div className="modalsec">
            <div className="modalbox">
                <button className='closebtn' onClick={() => onClose()}>X</button>
                {children}
            </div>
        </div>
    )
}
