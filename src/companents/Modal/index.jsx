import './style.css'
import Roleta from '../../assets/Roleta.svg'


export default function Modal() {
    return (
        <div className="modal-container">
            <div className="img-modal">
                <img src={Roleta} alt="icon" />
            </div>
        </div>
    )
}



