import { Link } from 'react-router-dom';
import './SideBar.css';
import { deleteAll } from '../firebase';
import { useState } from 'react';

export default function SideBar() {

    const [del,setDelete] = useState('');

    const updateData = (newData) => {
        setDelete(newData);
    };

    const handleDelete = async () => {
        console.log('handleDelete called');
        await deleteAll(updateData);

    }

    return (
        <div className="sidebar">
            <div className='inside-sidebar'>
                <Link to='/category' className='sidebar-anchor'><h1 className='sidebar-title'>Todo-list</h1></Link>
                <div className='line'></div>
                <h1 className='username'>Hello</h1>
                <h1 className='username'>Sushobhan</h1>
                <div className="sidebar-footer">
                    <button className='sidebar-tile' onClick={handleDelete}>Delete all</button>
                    <button className='sidebar-tile' id='logout'>Logout</button>
                </div>
            </div>
        </div>
    );
}