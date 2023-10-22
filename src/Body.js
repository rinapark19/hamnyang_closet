import './Body.css';

function Body(props) {
  return (
    <div>
        <img src={props.bodyImage} className='bodyImage' alt=""/>
    </div>
  );
}

export default Body;