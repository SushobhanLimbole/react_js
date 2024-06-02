import { Link, useNavigate } from 'react-router-dom';
import bullet from '../assets/bullet.png';
import forward from '../assets/forward.png';
import { dropContent } from './DropContent';
import './DropDown.css';


export default function DropDown(props) {

    const data = dropContent[props.load];
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        console.log(path);
        navigate(`${path}`);
    }

    return (
        <div className="drop-down">
            <h1 className="drop-down-title">
                {data.heading}
            </h1>
            <p className='drop-down-para'>
                {data.para}
            </p>

            <div className="drop-inner-section">
                {
                    data.columns.map((content) => (

                        <div className="drop-inner-column">
                            <h3>{content.title}</h3>

                            {
                                content.data.map((links) => (

                                    <div className='drop-content'>
                                        <div style={{
                                            backgroundImage: `url(${bullet})`,
                                            height: "2rem",
                                            width: "2rem",
                                            backgroundSize: 'cover'
                                        }}></div><h5>{links}</h5>
                                    </div>

                                ))
                            }

                            {
                                content.seeAll ? <div onClick={() => handleNavigate(content.seeAllRoute)} className='drop-see-all'>
                                    <h3>See all</h3>
                                    <div style={{
                                        backgroundImage: `url(${forward})`,
                                        height: "1.8rem",
                                        width: "1.8rem",
                                        backgroundSize: 'cover',
                                        backgroundPosition: "center",
                                        marginLeft: '0.8rem'
                                    }}></div>
                                </div> : <></>
                            }

                        </div>

                    ))
                }
            </div >
        </div >
    );
}