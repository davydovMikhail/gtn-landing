import React, { useState, useContext } from 'react';
import Logo from "../img/Logo.svg";
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
    var styles = {
        bmBurgerButton: {
          position: 'relative',
          width: '36px',
          height: '30px',
        },
        bmBurgerBars: {
          background: '#fff',
          borderRadius: '5px'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '30px',
          width: '30px'
        },
        bmCross: {
          background: '#fff'
        },
        bmMenuWrap: {
          top: '0',
          position: 'fixed',
          height: '100vh',
          width: '100%'
          
        },
        bmMenu: {
            background: '#101010',
          padding: '2.5em 1.5em 0',
          fontSize: '30pxpx',
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
            color: '#fff',
          padding: '0.8em',
          display: 'flex',
          flexDirection: 'column'
        },
        bmItem: {
          display: 'inline-block',
          color: '#fff',
          marginBottom: '70px',
          fontSize: '28px'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
    
      const [isOpen, setOpen] = useState(false)
      const [tab, setTab] = useState(0);

      const handleIsOpen = () => {
        setOpen(!isOpen)
      }

      const closeSideBar = () => {
        setOpen(false)
      }

      async function chooseTab(tab: number) {
        setTab(tab);
      }

    return (
      <>
        <div className="header">
            <img src={Logo} alt="logo"/>
            <div className="header__bar">
                <a href="#main" onClick={() => {chooseTab(1)}} className={"header__item " + (tab === 1 ? "header__item_active" : "header__item_hover")}>
                    <div className={tab === 1 ? "header__text_active" : ""}>
                        Main page
                    </div>
                </a>
                <a href="#about" onClick={() => {chooseTab(2)}} className={"header__item " + (tab === 2 ? "header__item_active" : "header__item_hover")}>
                    <div className={tab === 2 ? "header__text_active" : ""}>
                      About the project
                    </div>
                </a>
                <a href="#tokenomics" onClick={() => {chooseTab(3)}} className={"header__item " + (tab === 3 ? "header__item_active" : "header__item_hover")}>
                    <div className={tab === 3 ? "header__text_active" : ""}>
                        Tokenomics
                    </div>
                </a>
            </div>
            <div className="header__buttons">
                <a className="button__size button__transparent" target='_blank' href="https://play.rangebet.xyz/" style={{marginRight: "8px"}}>Start app</a>
                <a className="button__size button__style" target='_blank' href="https://app.uniswap.org/#/swap">Buy tokens</a> {/*  // here */}
            </div>
            <div className='mob-menu'>
                <Menu
                  isOpen={isOpen}
                  onOpen={handleIsOpen}
                  onClose={handleIsOpen}
                  styles={styles} right>
                    <a onClick={closeSideBar} className="menu-item" href="#main">Main page</a>
                    <a onClick={closeSideBar} className="menu-item" href="#about">About the project</a>
                    <a onClick={closeSideBar} className="menu-item" href="#tokenomics">Tokenomics</a>
                    <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://play.rangebet.xyz/">Start App</a>
                    <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://app.uniswap.org/#/swap">Buy tokens</a> {/*  // here */}
                </Menu>
            </div>
        </div>
      </>
    );
  };
  
export default Header;