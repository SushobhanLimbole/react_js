import { useLocation } from 'react-router-dom';
import heroSection from '../assets/collo.jpg';
import './StatePage.css';
import { useEffect, useState } from 'react';
import ContentBox1 from '../ContentBox/ContentBox1';
import ContentBox2 from '../ContentBox/ContentBox2';
import banner from '../assets/banner/quote_banner_2.webp';
import Footer from '../Footer/Footer';

export default function StatePage() {

    const [content, setContent] = useState(1);
    const location = useLocation();
    const state = location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log(state);


    const changeUNESCO = () => {
        setContent(1);
    }

    const changeCastles = () => {
        setContent(2);
    }

    const renderContent = () => {
        switch (content) {
            case 1:
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

            case 2:
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

            default:
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

            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${state.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className='hero-section-caption'>
                    <h1 className='hero-section-label'>{state.name}</h1>
                </div>

            </div>

            <div className="state-banner" style={{
                backgroundImage: `url(${banner})`
            }}>
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

            {
                renderSection()
            }

            <Footer />
        </>
    );
}