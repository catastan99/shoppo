import React from 'react'
import './Header.css'
import {ReactComponent as HeartIcon} from '../../assets/icons/heart-red.svg'
import {ReactComponent as CartIcon} from '../../assets/icons/cart.svg'
import {ReactComponent as MenuIcon} from '../../assets/icons/menu.svg'
import {Link} from 'react-router-dom';


class Header extends React.Component {

    constructor(){
        super();
        this.state={
            heightMenu:"0"
        }
    }

    handelClickMenu(){
        if(this.state.heightMenu==='0')
            this.setState({heightMenu:"25vh"})
        else
            this.setState({heightMenu:"0"})
    }


    render(){
    return (
        <div className="Header">
            <div className="header-section1">
                {/* <img src={logo} alt="logo" className="logo"/> */}
                <Link to='/' className="text-link"><p>SHOPPO</p></Link>
                <input type="text" placeholder="Cauta un produs..." className="search-input"/>
                <Link to='/favorite'>
                    <HeartIcon title="Favorite" className="heart-icon"/>
                </Link>
                <Link to='/cart'>
                    <CartIcon title="Cosul meu"  className="cart-icon"/>
                </Link>
                <p className="my-account">Contul meu</p>
                <MenuIcon className="menu-icon" onClick={()=>this.handelClickMenu()} />
            </div>
            <div className="header-mobile" style={{height:this.state.heightMenu}}>
                <Link to='/favorite' className="text-link">
                    <p>FAVORITE</p>
                </Link>
                <Link to='/cart' className="text-link">
                    <p>COSUL MEU</p>
                </Link>
                <Link to='/' className="text-link">
                    <p>CONTUL MEU</p>
                </Link>

            </div>
        </div>
    )
    }
}

export default Header
