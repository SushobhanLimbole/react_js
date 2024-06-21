import Cards from '../Cards/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainContainer.css';
import tab from '../../Assets/tab-bg.webp';
import content from '../../Assets/content.webp';
import { useNavigate } from 'react-router-dom';

export default function MainContainer() {

    const navigate = useNavigate();

    const handleDelete = () => {
        navigate('/delete');
    }

    return (
        <div className="main-container" style={{
            backgroundImage: `url(${content})`,
            backgroundSize: 'contain',
            backgroundPositionY: '150%',
            backgroundRepeat: 'no-repeat'
        }}>

            {/* Tab Section */}
            <div className='tab-section' style={{
                backgroundImage: `url(${tab})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <h1>Books</h1>
                <div className='task-button-section'>
                    <button className='task-button'>
                        <span class="material-symbols-outlined">
                            add
                        </span>
                    </button>
                    <button onClick={handleDelete} className='task-button'>
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>

            <div className='content-section' >
                <div className='guide'>
                    <h2>Id<span class="material-symbols-outlined">
                        arrow_downward
                    </span></h2>
                    <h2>Name<span class="material-symbols-outlined">
                        arrow_downward
                    </span></h2>
                    <h2>Author<span class="material-symbols-outlined">
                        arrow_downward
                    </span></h2>
                </div>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    );
}