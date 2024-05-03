import { useEffect, useState } from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
// import AddButton from '../Buttons/AddButton';
import AddTile from '../AddTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { fetchFBData } from '../firebase';


export default function Category() {
    console.log('Category called');

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log('useEffect called');
            const newData = await fetchFBData('category');
            setData(newData);
        };
        fetchData();
    }, []);

    const updateData = (newData) => {
        setData(newData);
    };

    const addTile = () => {
        let newObj = [true, ...data];
        setData(newObj);
    }

    return (
        <div className="category-section">
            <div className='category-title'>
                <h1>Categories</h1>
            </div>
            <div className='category-tiles'>
                {
                    data.map((element) => {
                        if (element === true) {
                            console.log('addtile');
                            return <AddTile collection='category' data={data} updateData={updateData} />
                        } else {
                            console.log('tile');
                            return (
                                <div className='category-tile'>
                                    <Link to={'/tasks'} className='anchor'>
                                        <h1>{element.name}</h1>
                                    </Link>
                                    <div className='icon-cate-section'>
                                        <button className='icons' ><span className="material-symbols-outlined">edit</span></button>
                                        <button className='icons' ><span className="material-symbols-outlined">delete</span></button>
                                    </div>
                                </div>
                            );
                        }
                    })
                }
            </div>
            <button className="add-button" onClick={addTile}><FontAwesomeIcon icon={faPlus} className="add-icon" /></button>
        </div>
    );
}