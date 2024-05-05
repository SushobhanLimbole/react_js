import { useEffect, useState } from 'react';
import './Category.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import AddButton from '../Buttons/AddButton';
import AddTile from '../Tile Operations/AddTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { deleteAll, deleteCategory, fetchFBData } from '../firebase';
import UpdateTile from '../Tile Operations/UpdateTile';
import { CircularProgress } from '@mui/material';


export default function Category() {
    console.log('Category called');

    const { userName } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [cateHolder, setHolder] = useState('');
    const [updateId, setId] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log('useEffect called');
            const newData = await fetchFBData({ collectionPath: 'categories' , userName: userName});
            setData(newData);
            setLoading(false);
        };
        fetchData();
    }, []);

    const updateData = (newData) => {
        setData(newData);
    };

    const addTile = () => {
        let newObj = ['add', ...data];
        setData(newObj);
    }

    const updateTile = (index) => {
        let newObj = data;
        setHolder(newObj[index].name);
        console.log('updateId == ', newObj[index].id);
        setId(newObj[index].id)
        newObj[index] = 'update';
        setData(newObj);
    }

    const handleDelete = async (cateId) => {
        console.log('handledelte category');
        await deleteCategory(cateId);
        const obj = await fetchFBData({ collectionPath: 'categories' , userName: userName});
        console.log('newwwwData = ', obj);
        setData(obj);
    }

    const handleDeleteAll = async () => {
        console.log('handleDelete called');
        await deleteAll(updateData);
        setData([]);
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
            <div className="category-section">
                <div className='category-title'>
                    <h1>Categories</h1>
                </div>
                {
                    loading ? (
                        <div className='loading'>
                            <CircularProgress color="secondary" size={60} thickness={5} />
                        </div>

                    ) : (
                        <>
                            <div className='category-tiles'>
                                {
                                    data.map((element, index) => {
                                        if (element === 'add') {
                                            console.log('addtile');
                                            return <AddTile collection='categories' data={data} updateData={updateData} userName={userName}/>
                                        } else if (element === 'update') {
                                            console.log('updatetile');
                                            return <UpdateTile collection='categories' data={data} updateData={updateData} cateHolder={cateHolder} updateId={updateId} userName={userName}/>
                                        } else {
                                            console.log('tile');
                                            return (
                                                <div className='category-tile'>
                                                    <Link to={`/tasks/${element.id}/${userName}/${element.name}`} className='anchor'>
                                                        <h1>{element.name}</h1>
                                                    </Link>
                                                    <div className='icon-cate-section'>
                                                        <button className='icons' onClick={() => updateTile(index)}><span className="material-symbols-outlined">edit</span></button>
                                                        <button className='icons' onClick={() => handleDelete(element.id)}><span className="material-symbols-outlined">delete</span></button>
                                                    </div>
                                                </div>
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