import { Primarybutton, SecondaryButton } from "../../atoms/buttons/Buttons";

export const Modal = ({onClose, modalMessage, onConfirm}) => {
    return (
        <div className="modalsec">
            <div className="modalbox">
                <div className="messagesec">
                    <p>{modalMessage}</p>
                </div>
                <div className="btnsec">
                    <ul className="reset">
                        <li>
                            <Primarybutton customStyle={{width : '80px', padding: '8px', fontSize: '14px'}} onclick={onConfirm}>Yes</Primarybutton>
                        </li>
                        <li>
                            <SecondaryButton customStyle={{width : '80px', padding: '8px', fontSize: '14px'}} onclick={onClose}>No</SecondaryButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
