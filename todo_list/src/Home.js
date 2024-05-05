import { useState } from "react";
import Category from "./Category/Category";
import SideBar from "./SideBar/SideBar";
import { deleteAll } from "./firebase";
import { Link } from "react-router-dom";

export default function Home() {
    console.log('Home called');

    const [del,setDelete] = useState('Delete');

    const updateData = (newData) => {
        setDelete(newData);
    };

    const handleDelete = async () => {
        console.log('handleDelete called');
        await deleteAll(updateData);
        setDelete('Delete');
        console.log('handledelete end');
    }

    return (
        <div className="main-section">
            {/* <SideBar/> */}
            <div className="sidebar">
            <div className='inside-sidebar'>
                <Link to='/home' className='sidebar-anchor'><h1 className='sidebar-title'>Todo-list</h1></Link>
                <div className='line'></div>
                <h1 className='username'>Hello</h1>
                <h1 className='username'>Sushobhan</h1>
                <div className="sidebar-footer">
                    <button className='sidebar-tile' onClick={handleDelete}>Delete all</button>
                    <button className='sidebar-tile' id='logout'>Logout</button>
                </div>
            </div>
        </div>
            <Category/>
        </div>
    );
}