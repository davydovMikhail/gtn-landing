import React, { useState } from 'react';
import './App.css';
import copy from 'copy-to-clipboard';
import Timeout from 'await-timeout';
import BigLogo from "./img/BigLogo.svg"
import twitter from "./img/twitter.svg"
import telega from "./img/telega.svg"
import copyIcon from "./img/copy.svg"
import verify from "./img/verify.svg"
import flash from "./img/flash.svg"
import Header from './components/header';


function App() {
  const [address, setAddress] = useState("0x12a...0949");

  async function copyToClipboard() {
    copy("0x12a804d83957Dd32E7f8bC997681E7Ecd4920949");
    setAddress("Copied");
    await Timeout.set(1000);
    setAddress("0x12a...0949");
  }


  return (
    <main>
            <Header/>

            <div className="wrapper">
                <div className="logo">
                    <img className="logo__img" src={BigLogo} alt=""/>
                </div>
                <div className="title">
                    <img className="title__logo" src={verify} alt="about"/>
                    <div className="title__text">
                        About the project
                    </div>
                </div>
                <div className="about">
                    <div className="about__1 about__section">
                        <div className="one__title">
                            Meet range bet!
                        </div>
                        <div className="one__text">
                            Jinko Chino (jap. 人工知能 — Artificial Intelligence) is a next generation AI powered meme token ($JCAi) on Ethereum with a first of its kind use-case.
                        </div>
                        <div className="meet__info">
                            
                            <div className="meet__address">
                                <div className="meet__contract">{address}</div>
                                <div className="meet__copy" onClick={() => {copyToClipboard()}}>
                                    <img src={copyIcon} alt="copy icon"/>
                                </div>
                            </div>
                            <a className="button__size button__style" href="#">Buy tokens</a>
                        </div>
                    </div>
                    <div className="about__2 about__section">
                       
                    </div>
                    <div className="about__3 about__section">
                       
                    </div>
                    
                </div>
                <div className="title">
                <img className="title__logo" src={flash} alt="about"/>
                <div className="title__text">
                    Place a bet — win <span className="title__text_span">$RBET</span> tokens
                </div>
            </div>
            </div>



{/* <div className="meet__links">
                                <a href="#">
                                    <img src={twitter} alt=""/>
                                </a>
                                <a href="#">
                                    <img src={telega} alt=""/>
                                </a>
                            </div> */}


{/* <div className="meet">
                    <div className="meet__title">
                        Meet range bet!
                    </div>
                    <div className="meet__text">
                        Jinko Chino (jap. 人工知能 — Artificial Intelligence) is a next generation AI powered meme token ($JCAi) on Ethereum with a first of its kind use-case.
                    </div>
                    <div className="meet__info">
                        <div className="meet__links">
                            <a href="#">
                                <img src="img/twitter.svg" alt="">
                            </a>
                            <a href="#">
                                <img src="img/telega.svg" alt="">
                            </a>
                        </div>
                        <div className="meet__address">
                            <div className="meet__contract">0x012...3a5f</div>
                            <div className="meet__copy">
                                <img src="img/copy.svg" alt="">
                            </div>
                        </div>
                        <a className="button__size button__style" href="#">Buy tokens</a>
                    </div>
                </div> */}




            
    </main>
  );
}

export default App;
