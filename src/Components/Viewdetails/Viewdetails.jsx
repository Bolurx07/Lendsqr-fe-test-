import './Viewdetails.scss'
import blacklist from '../../Assets/blacklist.svg';
import activate from '../../Assets/activate.svg';
import viewdetails from '../../Assets/view-details.svg';



const Viewdetails = () => {
  return (
    <div className='viewdetail-container'>
        <div>
            <img src={viewdetails} alt="view-details" />
            <p>View details</p>
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