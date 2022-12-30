import '../Stylesheets/Navbar.scss';
import logo from '../Assets/mainlogo.svg';
import searchicon from '../Assets/searchicon.svg';
import avatar from '../Assets/avatar.svg';
import userdropdown from '../Assets/userdropdown.svg'


const Navbar = () => {

  return (
    <div className='navcontainer'>
        <img src={logo} className='logo' alt="logo" srcset="" />
        <div className='navdiv1'>
            <input type="search" name="search" id="search" />
            <img src={searchicon} alt="searchicon"  />
        </div>
        <div className='navdiv2'>
            <p>Docs</p>
            <img src={avatar} alt="avatar" />
            <p>Adedeji</p>
            <img src={userdropdown} alt="userdropdown"  />
        </div>
    </div>
  )
}

export default Navbar