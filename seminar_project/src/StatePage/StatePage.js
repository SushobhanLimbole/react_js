import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import heroSection from '../assets/collo.jpg';
import './StatePage.css';
import { useState } from 'react';
import ContentBox1 from '../ContentBox/ContentBox1';
import ContentBox2 from '../ContentBox/ContentBox2';

export default function StatePage() {

    // const { data } = useParams();
    const [content, setContent] = useState(1);
    // const { state } = useLocation().state;
    // const location = useLocation();
    // const state = location.state && location.state.state;
    const location = useLocation();
    const state = location.state;

    console.log(state);
    // console.log(state && state.content && state.content[0]);


    const changeUNESCO = () => {
        setContent(1);
    }

    const changeCastles = () => {
        setContent(2);
    }

    const renderContent = () => {
        switch (content) {
            case 1:
                if (state.content[0].slides.length % 2 === 0) {
                    return (<>
                        <div className="unmissable-sites-content inner-container">
                            {
                                state.content[0].slides.map((state) => (
                                    <ContentBox1 contentData={state} />
                                ))
                            }
                        </div>
                    </>
                    );
                } else {
                    return (<>
                        <div style={{ justifyContent: "space-evenly" }} className="unmissable-sites-content inner-container">
                            {
                                state.content[0].slides.map((state) => (
                                    <ContentBox1 contentData={state} />
                                ))
                            }
                        </div>
                    </>
                    );
                }

            case 2:
                if (state.content[1].slides.length % 2 === 0) {
                    return (<>
                        <div className="unmissable-sites-content inner-container">
                            {
                                state.content[1].slides.map((state) => (
                                    <ContentBox2 contentData={state} />
                                ))
                            }
                        </div>
                    </>
                    );
                } else {
                    return (<>
                        <div style={{ justifyContent: "space-evenly" }} className="unmissable-sites-content inner-container">
                            {
                                state.content[1].slides.map((state) => (
                                    <ContentBox2 contentData={state} />
                                ))
                            }
                        </div>
                    </>
                    );
                }

            default:
                if (state.content[0].slides.length % 2 === 0) {
                    return (<>
                        <div className="unmissable-sites-content inner-container">
                            {
                                state.content[0].slides.map((state) => (
                                    <ContentBox1 contentData={state} />
                                ))
                            }
                        </div>
                    </>
                    );
                } else {
                    return (<>
                        <div style={{ justifyContent: "space-evenly" }} className="unmissable-sites-content inner-container">
                            {
                                state.content[0].slides.map((state) => (
                                    <ContentBox1 contentData={state} />
                                ))
                            }
                        </div>
                    </>
                    );
                }
        }
    }

    const renderSection = () => {
        if (state.content.length === 2) {

            return <>

                <div className="destinations">
                    <h3>Unmissable places</h3>
                    <h1>What to see in {state.name}</h1>
                </div>

                <div className="dest-bar inner-container">
                    <button onClick={changeUNESCO} className="nav-links"><h2>UNESCO sites</h2><div className="underline"></div></button>
                    <button onClick={changeCastles} className="nav-links"><h2>Castles</h2><div className="underline"></div></button>
                </div>

                {
                    renderContent()
                }
            </>

        } else if (state.content.length === 1) {

            return <>

                <div className="destinations">
                    <h3>Unmissable places</h3>
                    <h1>What to see in {state.name}</h1>
                </div>

                <div className="dest-bar inner-container">
                    <button className="nav-links"><h2>{state.content[0].nav}</h2><div className="underline"></div></button>
                </div>

                <div className="unmissable-sites-content inner-container">
                    {
                        state.content[0].nav === 'UNESCO Sites' ?
                            state.content[0].slides.map((state) => (
                                <ContentBox1 contentData={state} />
                            )) : state.content[0].slides.map((state) => (
                                <ContentBox2 contentData={state} />
                            ))
                    }
                </div>
            </>

        } else {
            return <></>;
        }
    };

    return (
        <>
            <Navbar />
            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${state.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            ></div>
            <div className='carousel-caption'>
                <h1 className='carousel-label'>{state.name}</h1>
            </div>

            <div className="state-banner">
                <h1>
                    {state.banner}
                </h1>
            </div>

            <div className='info-section'>
                <div className='info-text'>
                    <h1>{state.title}</h1>
                    <h3>{state.longDesc}</h3>
                </div>
                <img className='info-pic' src={heroSection} />
            </div>

            {/* <div className="destinations">
                <h3>Unmissable places</h3>
                <h1>What to see in </h1>
            </div>

            <div className="dest-bar inner-container">
                <button className="nav-links"><h2>UNESCO sites</h2><div className="underline"></div></button>
                <button className="nav-links"><h2>Castles</h2><div className="underline"></div></button>
            </div> */}

            {/* <div className="unmissable-sites-content inner-container">
                {
                    props.state.map((state) => (
                        <ContentBox contentData={state} />
                    ))
                }
            </div> */}

            {
                renderSection()
            }

            <footer style={{ height: '10vh' }}></footer>
        </>
    );
}