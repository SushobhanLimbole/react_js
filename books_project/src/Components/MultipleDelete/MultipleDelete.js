import DeleteCards from "../DeleteCards/DeleteCards";
import tab from '../../Assets/tab-bg.webp';
import content from '../../Assets/content.webp';
import { useNavigate } from "react-router-dom";

export default function MultipleDelete() {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
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
                <h1 onClick={navigateHome}>Books</h1>
                <div className='task-button-section'>
                    <button className='delete-all-button'>
                        Delete All
                    </button>
                </div>
            </div>

            <div className='content-section' >
                <div className='delete-guide'>
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
                <DeleteCards />
                <DeleteCards />
                <DeleteCards />
                <DeleteCards />
                <DeleteCards />
                <DeleteCards />
                <DeleteCards />
                <DeleteCards />
                <DeleteCards />
                <DeleteCards />
            </div>

            <button className="add-button" ><span class="material-symbols-outlined">
                check
            </span></button>
        </div>
    );
}