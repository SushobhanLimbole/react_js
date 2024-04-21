import './services.css';
import img1 from '../assets/2.avif';

export default function Services() {
    return (
        <div className='services'>
            <div className="services-text">
            <div className='title-text flex'>
                    <p>SERVICES</p>
                </div>
                <h1 className='h1-title'>We Provide Better</h1>
                <div className='service-box'>
                    {/* <div className='single-box' style={{
                        backgroundImage: `url(${img1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}> */}
                        {/* <img src={img1}></img> */}
                        <div className='single-box'>
                        <img src={img1}></img>
                        <div className='overlay'></div>
                        <div className='overlay-text'>
                            <h1>Hello</h1>
                            <p>snbn a ugggjh gg hg h gj g jjghg jj ggujjgjhsdbk h jsjhd gjjshgd gsj sjd j</p>
                        </div>
                    </div>
                    <div className='single-box'>
                        <img src={img1}></img>
                        <div className='overlay'></div>
                        <div className='overlay-text'>
                            <h1>Hello</h1>
                            <p>snbn a ugggjh gg hg h gj g jjghg jj ggujjgjhsdbk h jsjhd gjjshgd gsj sjd j</p>
                        </div>
                    </div>
                    <div className='single-box'>
                        <img src={img1}></img>
                        <div className='overlay'></div>
                        <div className='overlay-text'>
                            <h1>Hello</h1>
                            <p>snbn a ugggjh gg hg h gj g jjghg jj ggujjgjhsdbk h jsjhd gjjshgd gsj sjd j</p>
                        </div>
                    </div>
                    <div className='single-box'>
                        <img src={img1}></img>
                        <div className='overlay'></div>
                        <div className='overlay-text'>
                            <h1>Hello</h1>
                            <p>snbn a ugggjh gg hg h gj g jjghg jj ggujjgjhsdbk h jsjhd gjjshgd gsj sjd j</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}