import './TopCloset.css';
import image1 from './img/close1.png';
import image2 from './img/close2.png';
import image3 from './img/close3.png';
import image4 from './img/close4.png';
import image5 from './img/close5.png';

import closed1 from './img/closed1.png';
import closed2 from './img/closed2.png';
import closed3 from './img/closed3.png';
import closed4 from './img/closed4.png';
import closed5 from './img/closed5.png';

function TopCloset(props) {
  return (
    <div>
        <img src={image1} className='image1' onClick={() => props.changeImage(closed1)} alt=""/>
        <img src={image2} className='image2' onClick={() => props.changeImage(closed2)} alt=""/>
        <img src={image3} className='image3' onClick={() => props.changeImage(closed3)} alt=""/>
        <img src={image4} className='image4' onClick={() => props.changeImage(closed4)} alt=""/>
        <img src={image5} className='image5' onClick={() => props.changeImage(closed5)} alt=""/>
    </div>
  );
}

export default TopCloset;