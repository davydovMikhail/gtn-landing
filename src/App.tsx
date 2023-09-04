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
import graph from "./img/graph.svg"
import clever from "./img/clever.gif"
import fox from "./img/fox.svg"
import vector from "./img/vector.svg"
import MiniLogo from "./img/MiniLogo.svg"
import Telegram from "./img/Telegram.svg"
import XxX from "./img/twitter.png"
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

            <a id="main" className="anchor" href=""></a>
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
                <a id="about" className="anchor" href=""></a>
                <div className="about">
                    <div className="about__1 about__section">
                        <div className="one__title">
                            Decentralized casino games with revenue share for <span className="one__title_span">$RBET</span> holders
                        </div>
                        <div className="one__text">
                            Range bet ($RBET) — is a decentralized casino that provides fair games and offers a revenue share system for holders of $RBET tokens.
                        </div>
                        <div className="provide">
                            <div className="provide__links">
                                <a href="#">
                                    <img src={twitter} alt="x"/>
                                </a>
                                <a href="#">
                                    <img src={telega} alt="tg"/>
                                </a>
                            </div>
                            <div className="provide__address">
                                <div className="provide__contract">{address}</div>
                                <div className="provide__copy" onClick={() => {copyToClipboard()}}>
                                    <img src={copyIcon} alt="copy icon"/>
                                </div>
                            </div>
                            <a className="provide__buy button__size button__style" target='_blank' href="https://app.uniswap.org/#/swap">Buy tokens</a>
                        </div>
                    </div>
                    <div className="about__2 about__section">
                        <img src={clever} className="about__2__pic" alt="clever" />
                        <div className="about__2__text">
                            Predict the winning range of numbers, earn <span className="about__2__text_span">$RBET</span> and enjoy instant withdrawals
                        </div>
                    </div>
                    <div className="about__3 about__section">
                        <div className="about__3__text">
                            With <span className="about__3__text_span">Metamask</span> integration, our platform ensures seamless and secure gameplay
                        </div>
                        <img className="about__3__text" src={fox} alt="" />
                    </div>
                </div>
                <div className="title">
                    <img className="title__logo" src={flash} alt="about"/>
                    <div className="title__text">
                        Make a bets and win <span className="title__text_span">$RBET</span> tokens
                    </div>
                </div>
                <div className="banner">
                    <div className="banner__buttons">
                        <a className="banner__button button__transparent" target='_blank' href="https://play.rangebet.xyz/" style={{marginRight: "8px"}}>Start app</a>
                        <a className="banner__button button__style" target='_blank' href="https://app.uniswap.org/#/swap">Buy tokens</a>
                    </div>
                </div>

                <div className="title">
                    <img className="title__logo" src={graph} alt="about"/>
                    <div className="title__text">
                        Tokenomics
                    </div>
                </div>
                <a id="tokenomics" className="anchor" href=""></a>
                <div className="tokenomics">
                    <img className="tokenomics__pic" src={vector} alt="" />
                    <div className="tokenomics__item tokenomics__casino">
                        <span className="tokenomics__item_span" >6%</span> Casino Bank
                    </div>
                    <div className="tokenomics__item tokenomics__liquidity">
                        <span className="tokenomics__item_span">90%</span> Liquidity
                    </div>
                    <div className="tokenomics__item tokenomics__team">
                        <span className="tokenomics__item_span">4%</span> Team
                    </div>
                </div>
            </div>
            <div className="footer">
                <img src={MiniLogo} alt="mini logo" />
                <div className="footer__text">Privacy Policy</div>
                <div className="footer__text">Copyright 2023. RabgeBet. All Rights Reserved.</div>
                <div className="footer__links">
                    <a href="#">
                        <img src={Telegram} alt="telegram"/>
                    </a>
                    <a href="#">
                        <img src={XxX} alt="X"/>
                    </a>
                </div>
            </div>
    </main>
  );
}

export default App;
