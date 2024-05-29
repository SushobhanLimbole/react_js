import './ContentBox1.css';

export default function ContentBox1(props) {
  console.log('content box1 called');

  console.log('bhjbjdxbvbjsbdjvbjb',props.contentData.image);
    return (
        <div className="content-unesco">
          <img src={props.contentData.image} />
          <div className="content-name-unesco">
            <h1>{props.contentData.title}</h1>
          </div>
          <div className='overlay-unesco-bg' ></div>
          <div className='overlay-unesco-content' >
          <h1>{props.contentData.title}</h1>
            <p>{props.contentData.para}</p>
          </div>
        </div>
    );
}