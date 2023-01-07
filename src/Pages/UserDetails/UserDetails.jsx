import './UserDetails.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../../Components/Navbar/Navbar";
import Sidenav from "../../Components/Sidenav/Sidenav";
import backarrow from '../../Assets/back-arrow.svg';
import rating from '../../Assets/rating.svg';

const UserDetails = () => {

  const [user, setUser] = useState();
    
  useEffect(() => {
      const getUserData = () => {
          try {
              axios
              .get(' https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/15')
              .then((result) => {
                      const singleUser = result;
                      console.log(singleUser);
                      setUser(singleUser);
              })
          } catch (error) {
              console.log(error)
          }
      };
      
      getUserData()
  }, []);




  return (
    user === undefined ? null :

    <div className='userdetail-maindiv'>
      <div className='navbar-div'>
          <Navbar />
      </div>
      <div className='userdetail-subdiv'>
        <div className='sidenavdiv'>
          <Sidenav />
        </div>
        <div className='detail-subdiv'>
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
          <section className='details-section1'>
            <div>
              <div className='username-div'>
                <img src={user.data.profile.avatar} alt="avatar"  />
                <div>
                  <h6>{user.data.profile.firstName + " " + user.data.profile.lastName}</h6>
                  <p>{user.data.userName}</p>
                </div>
                <div id='usertier'>
                  <p>User's Tier</p>
                  <img src={rating} alt="rating"  />
                </div>
                <div>
                  <h6>₦{user.data.accountBalance}</h6>
                  <p>{user.data.accountNumber}/Providus Bank</p>
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
                  <p>{user.data.profile.firstName + " " + user.data.profile.lastName}</p>
                </div>
                <div>
                  <h5>Phone Number</h5>
                  <p>{user.data.phoneNumber}</p>
                </div>
                <div>
                  <h5>Email Address</h5>
                  <p className='font-special'>{user.data.email}</p>
                </div>
                <div>
                  <h5>Bvn</h5>
                  <p>{user.data.profile.bvn}</p>
                </div>
                <div>
                  <h5>Gender</h5>
                  <p>{user.data.profile.gender}</p>
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
                  <p>{user.data.education.level}</p>
                </div>
                <div>
                  <h5>Employment status</h5>
                  <p>{user.data.education.employmentStatus}</p>
                </div>
                <div>
                  <h5>Sector of employment</h5>
                  <p>{user.data.education.sector}</p>
                </div>
                <div>
                  <h5>Duration of employment</h5>
                  <p>{user.data.education.duration}</p>
                </div>
                <div>
                  <h5>Office email</h5>
                  <p className='font-special'>{user.data.education.officeEmail}</p>
                </div>
                <div>
                  <h5>Monthly income</h5>
                  <p>₦{user.data.education.monthlyIncome[0]}- ₦{user.data.education.monthlyIncome[1]}</p>
                </div>
                <div>
                  <h5>Loan repayment</h5>
                  <p>₦{user.data.education.loanRepayment}</p>
                </div>
              </div>
            </section>
            <hr />
            <section>
              <h4>Socials</h4>
              <div className='details-div'>
                <div>
                  <h5>Twitter</h5>
                  <p>{user.data.socials.twitter}</p>
                </div>
                <div>
                  <h5>Facebook</h5>
                  <p>{user.data.socials.facebook}</p>
                </div>
                <div>
                  <h5>Instagram</h5>
                  <p>{user.data.socials.instagram}</p>
                </div>
              </div>
            </section>
            <hr />
            <section>
              <h4>Guarantor</h4>
              <div className='details-div'>
                <div>
                  <h5>full Name</h5>
                  <p>{user.data.guarantor.firstName + " " + user.data.guarantor.lastName}</p>
                </div>
                <div>
                  <h5>Phone Number</h5>
                  <p>{user.data.guarantor.phoneNumber}</p>
                </div>
                <div>
                  <h5>Email Address</h5>
                  <p>daniel@gmail.com</p>
                </div>
                <div>
                  <h5>Relationship</h5>
                  <p>Brother</p>
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