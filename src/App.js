import './App.css';
import Body from './Body.js'
import TopCloset from './TopCloset'
import {BrowserView, MobileView} from 'react-device-detect';
import React, {useState} from 'react';
import bodyImage from './img/body.png';

function App() {
  const [currentImage, setCurrentImage] = useState(bodyImage);

  const changeBodyImage = (newImage) => {
    setCurrentImage(newImage);
  }

  return (
    <div className="App">
      <BrowserView>
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
