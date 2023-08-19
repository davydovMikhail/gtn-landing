import { useState } from 'react'
import Logo from "../img/Logo.svg"
import { slide as Menu } from 'react-burger-menu'

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
          width: '70%'
          
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
          marginBottom: '30px'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
    

    return (
      <>
        <div className="header">
            <img src={Logo} alt="logo"/>
            <div className="header__bar">
                <div className="header__item header__item_active">
                    <div className="header__text_active">
                        Main page
                    </div>
                </div>
                <div className="header__item header__item_hover">
                    <div>
                        About us
                    </div>
                </div>
                <div className="header__item header__item_hover">
                    <div>
                        Tokenomics
                    </div>
                </div>
            </div>
            <div className="header__buttons">
                <a className="button__size button__transparent" href="#">Start app</a>
                <a className="button__size button__style" href="#">Buy tokens</a>
            </div>
            <div className='mob-menu'>
                <Menu styles={styles} right>
                    <a id="home" className="menu-item" href="/">Main page</a>
                    <a id="about" className="menu-item" href="/about">About us</a>
                    <a id="contact" className="menu-item" href="/contact">Tokenomics</a>
                    <a id="contact" className="menu-item" href="/contact">Start App</a>
                    <a id="contact" className="menu-item" href="/contact">Buy tokens</a>
                </Menu>
            </div>
            
        </div>
      </>
    );
  };
  
export default Header;