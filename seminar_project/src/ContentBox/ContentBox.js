import '../Home/Home.css';

export default function ContentBox(props) {
  console.log('content box called');

  console.log('bhjbjdxbvbjsbdjvbjb',props.contentData.image);
    return (
        <div className="content">
          <img src={props.contentData.image} />
          <div className="content-name">
            <h1>{props.contentData.title}</h1>
            <p>{props.contentData.para}</p>
            <h3><span class="material-symbols-outlined location-on">
              location_on
            </span>{props.contentData.loc}</h3>
          </div>
          {/* <div className='overlay-bg' ></div>
          <div className='overlay-content' >
          <h1>{props.contentData.title}</h1>
            <p>{props.contentData.para}</p>
          </div> */}
        </div>
    );
}