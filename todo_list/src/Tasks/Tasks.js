import { useState } from "react";
import './Tasks.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddButton from "../Buttons/AddButton";

export default function Tasks() {

    const [object, setObject] = useState(["Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello"]);

    return (
        <div className="tasks-section">
            <div className='tasks-title'>
                <h1>Tasks</h1>
            </div>
            <div className='tasks-tiles'>
                {
                    object.map((element) => (
                        <button className='tasks-tile'>
                            <div className="tile-title">
                                <h2>{element}</h2>
                                <p>17-05-2024</p>
                            </div>
                            <div className='icon-cate-section'>
                                {/* <FontAwesomeIcon icon={faPen} className='icons' />
                                <FontAwesomeIcon icon={faTrash} className='icons' /> */}
                                <button className="icons"><span className="material-symbols-outlined">edit</span></button>
                                <button className="icons"><span className="material-symbols-outlined">delete</span></button>
                            </div>
                        </button>
                    ))
                }
            </div>
            <AddButton />
        </div>
    );
}