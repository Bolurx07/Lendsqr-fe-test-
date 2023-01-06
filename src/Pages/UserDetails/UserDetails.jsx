import './UserDetails.scss';
import { Link } from 'react-router-dom';
import backarrow from '../../Assets/back-arrow.svg';
import rating from '../../Assets/rating.svg';

const UserDetails = () => {

  return (
    <div>
      <section>
        <div className='details-link'>
          <Link>
            <img src={backarrow} alt="back-arrow"  />
            <span>Back to Users</span>
          </Link>
        </div>
        <div className='details-header'>
          <p>User Details</p>
          <div>
            <button className='button1'>Blacklist User</button>
            <button className='button2'>Activate User</button>
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="avatar"  />
            <div>
              <p>Grace Effiom</p>
              <p>LSQFf587g90</p>
            </div>
            <div>
              <p>User's Tier</p>
              <img src={rating} alt="rating"  />
            </div>
            <div>
              <p>₦200,000.00</p>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>
          <div>
            <p>General Details</p>
            <p>Documents</p>
            <p>Bank Details</p>
            <p>Loans</p>
            <p>Savings</p>
            <p>App and System</p>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  )
}

export default UserDetails