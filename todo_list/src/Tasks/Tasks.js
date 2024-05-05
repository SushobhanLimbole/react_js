import { useEffect, useState } from "react";
import './Tasks.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { deleteAll, deleteTask, fetchFBData } from "../firebase";
import AddTile from "../Tile Operations/AddTile";
import { Link, useNavigate, useParams } from "react-router-dom";
import UpdateTile from "../Tile Operations/UpdateTile";
import { CircularProgress } from "@mui/material";
// import SideBar from "../SideBar/SideBar";
// import AddButton from "../Buttons/AddButton";

export default function Tasks() {

    const { id , userName , title } = useParams();
    const navigate = useNavigate();

    const [taskData, setTaskData] = useState([]);
    const [taskHolder, setHolder] = useState('');
    const [updateId, setId] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log('useEffect called');
            const newData = await fetchFBData({ collectionPath: 'tasks', cateId: id });
            setTaskData(newData);
            setLoading(false);
        };
        fetchData();
    }, []);

    const updateData = (newData) => {
        setTaskData(newData);
    };

    const addTile = () => {
        let newObj = ['add', ...taskData];
        setTaskData(newObj);
    }

    const updateTile = (index) => {
        let newObj = taskData;
        setHolder(newObj[index].title);
        console.log('updateId == ', newObj[index].id);
        setId(newObj[index].id);
        newObj[index] = 'update';
        setTaskData(newObj);
    }

    const handleDelete = async (taskId) => {
        console.log('handledelte category');
        await deleteTask(taskId);
        const obj = await fetchFBData({ collectionPath: 'tasks', cateId: id });
        console.log('newwwwData = ', obj);
        setTaskData(obj);
    }

    const handleDeleteAll = async () => {
        console.log('handleDelete called');
        await deleteAll(updateData);
        setTaskData([]);
        console.log('handledelete end');
    }

    const handleLogOut = async (userName) => {
        alert(`${userName} logged out Successfully`);
        navigate('/', { replace: true } );
    }

    return (
        <div className="main-section">
            <div className="sidebar">
                <div className='inside-sidebar'>
                    <Link to={`/category/${userName}`} className='sidebar-anchor'><h1 className='sidebar-title'>Todo-list</h1></Link>
                    <div className='line'></div>
                    <h1 className='username'>Hello</h1>
                    <h1 className='username'>{userName}</h1>
                    <div className="sidebar-footer">
                        <button className='sidebar-tile' onClick={handleDeleteAll}>Delete all</button>
                        <button className='sidebar-tile' id='logout' onClick={() => handleLogOut(userName)}>Logout</button>
                    </div>
                </div>
            </div>
            <div className="tasks-section">
                <div className='tasks-title'>
                    <h1>{title}</h1>
                </div>
                {
                    loading ? (
                        <div className='loading'>
                            <CircularProgress color="secondary" size={60} thickness={5} />
                        </div>

                    ) : (
                        <>
                            <div className='tasks-tiles'>
                                {
                                    taskData.map((element, index) => {
                                        if (element === 'add') {
                                            console.log('addtile');
                                            return <AddTile collection='tasks' data={taskData} updateData={updateData} cateId={id} />
                                        } else if (element === 'update') {
                                            console.log('addtile');
                                            return <UpdateTile collection='tasks' data={taskData} updateData={updateData} cateId={id} taskHolder={taskHolder} updateId={updateId} />
                                        } else {
                                            return (
                                                <button className='tasks-tile'>
                                                    <div className="tile-title">
                                                        <h2>{element.title}</h2>
                                                        <p>{element.date}</p>
                                                    </div>
                                                    <div className='icon-cate-section'>
                                                        <button className="icons" onClick={() => updateTile(index)}><span className="material-symbols-outlined">edit</span></button>
                                                        <button className="icons" onClick={() => handleDelete(element.id)}><span className="material-symbols-outlined">delete</span></button>
                                                    </div>
                                                </button>
                                            );
                                        }
                                    })
                                }
                            </div>
                            <button className="add-button" onClick={addTile}><FontAwesomeIcon icon={faPlus} className="add-icon" /></button>
                        </>
                    )
                }
            </div>
        </div>
    );
}