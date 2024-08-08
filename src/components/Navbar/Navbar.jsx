import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {


  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=>{
    switch (event.target.value){
      case "usd":
        setCurrency({name: "usd", symbol: "$"});
        break;
      case "eur":
        setCurrency({name:"eur", symbol:"Є"});
        break;
      case "inr":
        setCurrency({name: "inr", symbol:"₹"});
        break; 
      default:
        setCurrency({name: "usd", symbol: "$"});
        break;  // default currency is USD if no selected option is found.
    }
  }
  return (
    <div className='navbar'>
    <Link to={'/'}>
      <div className="image_And_text">
          <img src={logo} alt="" className='logo-image'/> <h2>cRypto</h2>
        </div>
        </Link>
      <ul>
        <Link to={'/'}><li>Home</li> </Link>
        <Link to={'/Feature'}><li>Markets</li> </Link>
        <Link to={'/Blog'}><li>Future</li> </Link>
        <Link to={'/Order'}><li>Orders</li> </Link>
        <Link to={'/Portfolio'}><li>Portfolio</li> </Link>
        <Link to={'/HelpSupport'}><li>Help & Support</li> </Link>
        
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}> 
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
        <button>Sign up <img src={arrow_icon} alt="" className='Signup-image' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
