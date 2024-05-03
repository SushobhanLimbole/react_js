import { useState } from 'react';
import './AddTile.css';
import { addDocument, deleteContent, fetchFBData } from './firebase';

export default function AddTile(props) {
    console.log('props = ',props);

    const[category,setCategory] = useState('');
    const {collection , data , setData} = props;

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }
    const handleCategorySubmit = async () => {
        await addDocument({collectionPath:collection,name:category});
        console.log('before data === ',props.data);
        const newData = await fetchFBData('category');
        props.updateData(newData);
        console.log('end');
    }
    const handleCategoryDelete = async () => {
        // await deleteContent({collectionPath:collection});
        const newData = await fetchFBData('category');
        props.updateData(newData);
    }
    if (true) {
        return (
            <div className='add-tile'>
                <div className='textfield-section'>
                    <input value={category} type='text' placeholder='Enter Category' className='inside-add-tile' onChange={handleCategory}/>
                    <button className='icons' onClick={handleCategorySubmit}><span class="material-symbols-outlined">done</span></button>
                    <button className='icons' onClick={handleCategoryDelete}><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        );
    } else {
        return (
            <div className='add-tile'>
                <div className='textfield-section'>
                    <input value={'hello'} type='text' placeholder='Enter Category' className='inside-add-tile' />
                    <input value={'hello'} type='date' placeholder='Enter Category' className='inside-add-tile' />
                    <button className='icons' ><span class="material-symbols-outlined">done</span></button>
                    <button className='icons' ><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        );
    }
}