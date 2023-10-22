import './App.css';
import Body from './Body.js'
import TopCloset from './TopCloset'
import {BrowserView, MobileView} from 'react-device-detect';
import React, {useState} from 'react';
import bodyImage from './img/body.png';
import backgroundImage from './img/bg.png';

function App() {
  const [currentImage, setCurrentImage] = useState(bodyImage);

  const changeBodyImage = (newImage) => {
    setCurrentImage(newImage);
  }

  return (
    <div className="App">
      <BrowserView>
        <img src={backgroundImage} className='bg'/>
        <TopCloset changeImage={changeBodyImage}/>
        <Body bodyImage={currentImage}/>
      </BrowserView>
      <MobileView>
        <TopCloset changeImage={changeBodyImage}/>
        <Body bodyImage={currentImage}/>
      </MobileView>
    </div>
  );
}

export default App;
