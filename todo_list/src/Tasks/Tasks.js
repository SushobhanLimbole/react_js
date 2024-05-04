import { useEffect, useState } from "react";
import './Tasks.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { fetchFBData } from "../firebase";
import AddTile from "../AddTile";
import { useParams } from "react-router-dom";
// import AddButton from "../Buttons/AddButton";

export default function Tasks() {

    const { id } = useParams();

    const [taskData, setTaskData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log('useEffect called');
            const newData = await fetchFBData({collectionPath:'tasks',cateId:id});
            setTaskData(newData);
        };
        fetchData();
    }, []);

    const updateData = (newData) => {
        setTaskData(newData);
    };

    const addTile = () => {
        let newObj = [true, ...taskData];
        setTaskData(newObj);
    }

    return (
        <div className="tasks-section">
            <div className='tasks-title'>
                <h1>Tasks</h1>
            </div>
            <div className='tasks-tiles'>
                {
                    taskData.map((element) => {
                        if (element === true) {
                            console.log('addtile');
                            return <AddTile collection='tasks' data={taskData} updateData={updateData} cateId={id}/>
                        } else {
                            return (
                                <button className='tasks-tile'>
                                    <div className="tile-title">
                                        <h2>{element.title}</h2>
                                        <p>{element.date}</p>
                                    </div>
                                    <div className='icon-cate-section'>
                                        {/* <FontAwesomeIcon icon={faPen} className='icons' />
                                        <FontAwesomeIcon icon={faTrash} className='icons' /> */}
                                        <button className="icons"><span className="material-symbols-outlined">edit</span></button>
                                        <button className="icons"><span className="material-symbols-outlined">delete</span></button>
                                    </div>
                                </button>
                            );
                        }

                        
                    })
                }
            </div>
            <button className="add-button" onClick={addTile}><FontAwesomeIcon icon={faPlus} className="add-icon" /></button>
        </div>
    );
}