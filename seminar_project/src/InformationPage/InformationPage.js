import './InformationPage.css';
import { infoPageContent } from './InfoPageContent';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function InformationPage(params) {

    const location = useLocation();
    const state = location.state;
    const index = state - 1;

    console.log(state);

    return (
        <>

            <h1 className="info-page-header info-inner-container">
                {infoPageContent[index].heading}
            </h1>

            <p className="info-page-para info-inner-container">
                {infoPageContent[index].para}
            </p>

            <div className='centre-cont'>
                <img className='info-page-pic' src={infoPageContent[index].image} />
            </div>

            {
                infoPageContent[index].infoSection.map((section) => (

                    <div className="info-page-section info-inner-container">

                        <h3>
                            {section.header}
                        </h3>

                        {
                            section.para.map((para) => (
                                <p>
                                    {para}
                                </p>
                            ))
                        }

                    </div>

                ))
            }

            <Footer/>
        </>
    );
}