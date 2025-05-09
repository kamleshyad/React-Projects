import { PrimaryButton } from "../../atoms/buttons/Buttons";
import { SecondaryButton } from "../../atoms/buttons/Buttons";

export const ConfirmModal = ({message, onClose, onConfirm}) => {
    return (
        <div className="modalsec">
            <div className="modalbox">
                <div className="messagesec">
                    <p>{message}</p>
                </div>
                <div className="btnsec">
                    <ul className="reset">
                        <li>
                            <PrimaryButton customStyle={{width : '80px', padding: '8px', fontSize: '14px'}} onClick={() => onConfirm()}>Yes</PrimaryButton>
                        </li>
                        <li>
                            <SecondaryButton customStyle={{width : '80px', padding: '8px', fontSize: '14px'}} onClick={onClose}>No</SecondaryButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
