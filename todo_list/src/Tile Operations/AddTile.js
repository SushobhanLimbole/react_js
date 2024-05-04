import { useState } from 'react';
import './AddTile.css';
import { addDocument , fetchFBData } from '../firebase';
// import { useParams } from 'react-router-dom';

export default function AddTile(props) {
    console.log('props = ',props);

    const[category,setCategory] = useState('');
    const[taskName,setTaskName] = useState('');
    const[taskDate,setTaskDate] = useState('');

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    const handleCategorySubmit = async () => {
        await addDocument({collectionPath:props.collection,name:category});
        console.log('before data === ',props.data);
        const newData = await fetchFBData({collectionPath:'category'});
        props.updateData(newData);
        console.log('end');
    }

    const handleCategoryDelete = async () => {
        // await deleteContent({collectionPath:collection});
        const newData = await fetchFBData({collectionPath:'category'});
        props.updateData(newData);
    }

    const handleTaskName = (event) => {
        setTaskName(event.target.value);
    }

    const handleTaskDate = (event) => {
        setTaskDate(event.target.value);
    }
    

    const handleTaskSubmit = async () => {
        const inputValue = taskDate;
        const [year, month, day] = inputValue.split('-');
        const formattedDate = `${day}-${month}-${year}`;
        await addDocument({collectionPath:props.collection,name:taskName,date:formattedDate,cateId:props.cateId});
        console.log('before data === ',props.data);
        const newData = await fetchFBData({collectionPath:props.collection,cateId:props.cateId});
        props.updateData(newData);
        console.log('end');
    }

    const handleTaskDelete = async () => {
        // await deleteContent({collectionPath:collection});
        const newData = await fetchFBData({collectionPath:'tasks',cateId:props.cateId});
        console.log('taskdata === ',newData);
        props.updateData(newData);
    }

    if (props.collection === 'category') {
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
                    <input value={taskName} type='text' placeholder='Enter Category' className='inside-add-tile' onChange={handleTaskName}/>
                    <input value={taskDate} type='date' placeholder='Enter Category' className='inside-add-tile' onChange={handleTaskDate}/>
                    <button className='icons' onClick={handleTaskSubmit}><span class="material-symbols-outlined">done</span></button>
                    <button className='icons' onClick={handleTaskDelete}><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        );
    }
}