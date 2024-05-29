import './ContentBox2.css';

export default function ContentBox2(props) {
    console.log('content box1 called');

    console.log('bhjbjdxbvbjsbdjvbjb', props.contentData.image);
    return (
        <div className="content-castles">
            <img src={props.contentData.image} />
            <div className="content-name-castles">
                <h1>{props.contentData.title}</h1>
                <h3><span class="material-symbols-outlined location-on">
                    location_on
                </span> {props.contentData.loc}</h3>
            </div>
            <div className='overlay-castles-bg' ></div>
            <div className='overlay-castles-content' >
                <h1>{props.contentData.title}</h1>
                <p>{props.contentData.para}</p>
                <h3><span class="material-symbols-outlined location-on">
                    location_on
                </span>{props.contentData.loc}</h3>
            </div>
        </div>
    );
}