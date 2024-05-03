import { useState } from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
import AddButton from '../Buttons/AddButton';
import AddTile from '../AddTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export default function Category() {

    const [obj, setObj] = useState([{ id: '1', name: 'Hello' }, { id: '1', name: 'Hello' }, { id: '1', name: 'Hello' }, { id: '1', name: 'Hello' }, { id: '1', name: 'Hello' }, { id: '1', name: 'Hello' }, { id: '1', name: 'Hello' }, { id: '1', name: 'Hello' }, { id: '1', name: 'Hello' }]);

    const addTile = () => {
        let newObj = [true, ...obj];
        setObj(newObj);
    }

    return (
        <div className="category-section">
            <div className='category-title'>
                <h1>Categories</h1>
            </div>
            <div className='category-tiles'>
                {
                    obj.map((element) => {
                        if (element == true) {
                            console.log('addtile');
                            return <AddTile />
                        } else {
                            console.log('tile');
                            return (
                                <div className='category-tile'>
                                    <Link to={'/tasks'} className='anchor'>
                                        <h1>{element.name}</h1>
                                    </Link>
                                    <div className='icon-cate-section'>
                                        <button className='icons' onClick={console.log('OnClick')}><span className="material-symbols-outlined">edit</span></button>
                                        <button className='icons' onClick={console.log('OnClick')}><span className="material-symbols-outlined">delete</span></button>
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