import './SideBar.css';

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className='inside-sidebar'>
            
                <h1 className='sidebar-title'>Todo-list</h1>
                <div className='line'></div>
                <h1 className='username'>Hello</h1>
                <h1 className='username'>Sushobhan</h1>
                <div className="sidebar-footer">
                    <button className='sidebar-tile'>Delete all</button>
                    <button className='sidebar-tile' id='logout'>Logout</button>
                </div>
            </div>
        </div>
    );
}