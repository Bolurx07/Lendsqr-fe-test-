import './UserDetails.scss';
import { Link } from 'react-router-dom';
import Navbar from "../../Components/Navbar/Navbar";
import Sidenav from "../../Components/Sidenav/Sidenav";
import backarrow from '../../Assets/back-arrow.svg';
import rating from '../../Assets/rating.svg';

const UserDetails = () => {

  return (
    <div>
      <div className='navbardiv'>
          <Navbar />
      </div>
      <div className='userdetail-maindiv'>
        <div className='sidenavdiv'>
          <Sidenav />
        </div>
        <div>
          <section>
            <div className='details-link'>
              <Link to="/Dashboard">
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
              <div className='username-div'>
                <img src="" alt="avatar"  />
                <div>
                  <p>Grace Effiom</p>
                  <p>LSQFf587g90</p>
                </div>
                <div id='usertier'>
                  <p>User's Tier</p>
                  <img src={rating} alt="rating"  />
                </div>
                <div>
                  <p>₦200,000.00</p>
                  <p>9912345678/Providus Bank</p>
                </div>
              </div>
              <div className='user-footer'>
                <p id='active-footer'>General Details</p>
                <p>Documents</p>
                <p>Bank Details</p>
                <p>Loans</p>
                <p>Savings</p>
                <p>App and System</p>
              </div>
            </div>
          </section>
          <section className='details-section2'>
            <section>
              <h4>Personal Information</h4>
              <div className='details-div'>
                <div>
                  <h5>full Name</h5>
                  <p>Grace Effiom</p>
                </div>
                <div>
                  <h5>Phone Number</h5>
                  <p>07060780922</p>
                </div>
                <div>
                  <h5>Email Address</h5>
                  <p>grace@gmail.com</p>
                </div>
                <div>
                  <h5>Bvn</h5>
                  <p>07060780922</p>
                </div>
                <div>
                  <h5>Gender</h5>
                  <p>Female</p>
                </div>
                <div>
                  <h5>Marital status</h5>
                  <p>Single</p>
                </div>
                <div>
                  <h5>Children</h5>
                  <p>None</p>
                </div>
                <div>
                  <h5>Type of residence</h5>
                  <p>Parent's Apartment</p>
                </div>
              </div>
            </section>
            <hr />
            <section>
              <h4>Education and Employment</h4>
              <div className='details-div'>
                <div>
                  <h5>Level of education</h5>
                  <p>B.Sc</p>
                </div>
                <div>
                  <h5>Employment status</h5>
                  <p>Employed</p>
                </div>
                <div>
                  <h5>Sector of employment</h5>
                  <p>FinTech</p>
                </div>
                <div>
                  <h5>Duration of employment</h5>
                  <p>2 years</p>
                </div>
                <div>
                  <h5>Office email</h5>
                  <p>grace@lendsqr.com</p>
                </div>
                <div>
                  <h5>Monthly income</h5>
                  <p>₦200,000.00- ₦400,000.00</p>
                </div>
                <div>
                  <h5>Loan repayment</h5>
                  <p>40,000</p>
                </div>
              </div>
            </section>
            <hr />
            <section>
              <h4>Socials</h4>
              <div className='details-div'>
                <div>
                  <h5>Twitter</h5>
                  <p>@grace_effiom</p>
                </div>
                <div>
                  <h5>Facebook</h5>
                  <p>Grace Effiom</p>
                </div>
                <div>
                  <h5>Instagram</h5>
                  <p>@grace_effiom</p>
                </div>
              </div>
            </section>
            <hr />
            <section>
              <h4>Guarantor</h4>
              <div className='details-div'>
                <div>
                  <h5>full Name</h5>
                  <p>Debby Ogana</p>
                </div>
                <div>
                  <h5>Phone Number</h5>
                  <p>07060780922</p>
                </div>
                <div>
                  <h5>Email Address</h5>
                  <p>debby@gmail.com</p>
                </div>
                <div>
                  <h5>Relationship</h5>
                  <p>Sister</p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  )
}

export default UserDetails