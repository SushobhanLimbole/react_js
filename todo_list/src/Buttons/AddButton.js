import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Buttons.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { firestore } from './firebase';
import AddTile from '../AddTile';

export default function AddButton() {
    return (
        <button className="add-button" onClick={<AddTile/>}><FontAwesomeIcon icon={faPlus} className="add-icon" /></button>
    );
}

