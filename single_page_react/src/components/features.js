import './features.css';
import Featureimg from '../assets/featureimg.jpg';

function Features() {
    return (
        <>
            <section className='Features'>
                <div className='title-text'>
                    <p>Features</p>
                    <h1>Why Choose Us</h1>
                </div>
                <main className='Feature_main'>
                    <div className='feature'>
                        <h1>Exprienced Staff</h1>
                        <div className='feature_desc'>
                            <div className='favicons'>
                                <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" /></svg>
                            </div>
                            <div className='feature_text'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
                            </div>
                        </div>
                        <h1>Pre Booking Online</h1>
                        <div className='feature_desc'>
                            <div className='favicons'>
                                <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                            </div>
                            <div className='feature_text'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
                            </div>
                        </div>
                        <h1>Affordable Cost</h1>
                        <div className='feature_desc'>
                            <div className='favicons'>
                                <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" /></svg>
                            </div>
                            <div className='feature_text'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
                            </div>
                        </div>
                    </div>
                    <div className='Feature_img'>
                        <img src={`${Featureimg}`} />
                    </div>
                </main>
            </section>
        </>
    )
}

export default Features;