import './AddTile.css';

export default function AddTile() {
    if (false) {
        return (
            <div className='add-tile'>
                <div className='textfield-section'>
                    <input value={'hello'} type='text' placeholder='Enter Category' className='inside-add-tile' />
                    <button className='icons' onClick={console.log('OnClick')}><span class="material-symbols-outlined">done</span></button>
                    <button className='icons' onClick={console.log('OnClick')}><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        );
    } else {
        return (
            <div className='add-tile'>
                <div className='textfield-section'>
                    <input value={'hello'} type='text' placeholder='Enter Category' className='inside-add-tile' />
                    <input value={'hello'} type='date' placeholder='Enter Category' className='inside-add-tile' />
                    <button className='icons' onClick={console.log('OnClick')}><span class="material-symbols-outlined">done</span></button>
                    <button className='icons' onClick={console.log('OnClick')}><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        );
    }
}