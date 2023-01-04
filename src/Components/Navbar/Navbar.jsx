import './Navbar.scss';
import logo from '../../Assets/mainlogo.svg';
import searchicon from '../../Assets/searchicon.svg';
import avatar from '../../Assets/avatar.svg';
import userdropdown from '../../Assets/userdropdown.svg'
import notification from '../../Assets/notification.svg';

const Navbar = () => {

  return (
    <div className='navcontainer'>
        <img src={logo} className='logo' alt="logo" />
        <div className='navdiv1'>
            <input type="search" name="search" placeholder='Search for anything' id="search" />
            <div>
                <img src={searchicon} alt="searchicon"  />
            </div>
        </div>
        <div className='navdiv2'>
            <p>Docs</p>
            <img src={notification} alt="notificaton-icon" />
            <div>
                <img src={avatar} alt="avatar" />
                <p className='username'>Adedeji</p>
                <img className='dropdownicon' src={userdropdown} alt="userdropdown"  />
            </div>
        </div>
    </div>
  )
}

export default Navbar