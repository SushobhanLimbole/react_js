import { useState } from 'react';
import { fetchFBData, updateContent } from '../firebase';
import './AddTile.css';

export default function UpdateTile(props) {

    const[category,setCategory] = useState('');
    const[taskName,setTaskName] = useState('');
    const[taskDate,setTaskDate] = useState('');

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    const handleCategorySubmit = async () => {
        await updateContent({collectionPath:'categories',name:category,cateId:props.updateId});
        console.log('before data === ',props.updateId);
        const newData = await fetchFBData({collectionPath:'categories' , userName: props.userName});
        console.log('before data === ',newData);
        props.updateData(newData);
        console.log('end');
    }

    const handleCategoryDelete = async () => {
        // await deleteContent({collectionPath:collection});
        const newData = await fetchFBData({collectionPath:'categories' , userName: props.userName});
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
        await updateContent({collectionPath:props.collection,name:taskName,date:formattedDate,taskId:props.updateId});
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

    if (props.collection === 'categories') {
        return (
            <div className='add-tile'>
                <div className='textfield-section'>
                    <input value={category} type='text' placeholder={props.cateHolder} className='inside-add-tile' onChange={handleCategory}/>
                    <button className='icons' onClick={handleCategorySubmit}><span class="material-symbols-outlined">done</span></button>
                    <button className='icons' onClick={handleCategoryDelete}><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        );
    } else {
        return (
            <div className='add-tile'>
                <div className='textfield-section'>
                    <input value={taskName} type='text' placeholder={props.taskHolder} className='inside-add-tile' onChange={handleTaskName}/>
                    <input value={taskDate} type='date' placeholder='Enter Category' className='inside-add-tile' onChange={handleTaskDate}/>
                    <button className='icons' onClick={handleTaskSubmit}><span class="material-symbols-outlined">done</span></button>
                    <button className='icons' onClick={handleTaskDelete}><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        );
    }
}