import { useEffect, useState } from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
// import AddButton from '../Buttons/AddButton';
import AddTile from '../Tile Operations/AddTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { deleteCategory, fetchFBData, updateContent } from '../firebase';
import UpdateTile from '../Tile Operations/UpdateTile';
import { CircularProgress } from '@mui/material';


export default function Category() {
    console.log('Category called');

    const [data, setData] = useState([]);
    const [cateHolder, setHolder] = useState('');
    const [updateId, setId] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log('useEffect called');
            const newData = await fetchFBData({ collectionPath: 'category' });
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
        const obj = await fetchFBData({ collectionPath: 'category' });
        console.log('newwwwData = ', obj);
        setData(obj);
    }

    return (
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
                                        return <AddTile collection='category' data={data} updateData={updateData} />
                                    } else if (element === 'update') {
                                        console.log('updatetile');
                                        return <UpdateTile collection='category' data={data} updateData={updateData} cateHolder={cateHolder} updateId={updateId} />
                                    } else {
                                        console.log('tile');
                                        return (
                                            <div className='category-tile'>
                                                <Link to={`/tasks/${element.id}`} className='anchor'>
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
    );
}