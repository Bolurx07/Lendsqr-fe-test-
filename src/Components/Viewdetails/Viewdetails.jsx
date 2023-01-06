import './Viewdetails.scss';
import { Link } from 'react-router-dom';
import blacklist from '../../Assets/blacklist.svg';
import activate from '../../Assets/activate.svg';
import viewdetails from '../../Assets/view-details.svg';



const Viewdetails = () => {
  return (
    <div className='viewdetail-container'>
        <div>
            <img src={viewdetails} alt="view-details" />
            <Link to="/UserDetails">
                <p>View details</p>
            </Link>
        </div>
        <div>
            <img src={blacklist} alt="blacklist" />
            <p>Blacklist User</p>
        </div>
        <div>
            <img src={activate} alt="activate" />
            <p>Activate User</p>
        </div>
    </div>
  )
}

export default Viewdetails