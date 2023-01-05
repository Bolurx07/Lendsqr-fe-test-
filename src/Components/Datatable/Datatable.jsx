import './Datatable.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import tableicon from '../../Assets/tableicon.svg';
import dots from '../../Assets/dots.svg';
import Viewdetails from '../Viewdetails/Viewdetails';
import UserFilter from '../Userfilter/UserFilter';



const Datatable = () => {

    // React hooks for Data fetched from mockapi

    const [userData, setUserData] = useState()

    
    useEffect(() => {
        const getData = () => {
            try {
                axios
                .get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
                .then((result) => {
                        const users = result.data;
                        console.log(users);
                        setUserData(users);
                })
            } catch (error) {
                console.log(error)
            }
        };
        
        getData()
    }, []);

    // Usestate for Viewdetails toggle display
    const [toggle1, setToggle1] = useState(false)

    const viewdetailClick1 = () => {
      return setToggle1(prevToggle =>!prevToggle)
    }

    const [toggle2, setToggle2] = useState(false)

    const viewdetailClick2 = () => {
        return setToggle2(prevToggle =>!prevToggle)
      };

    const [toggle3, setToggle3] = useState(false)
    
    const viewdetailClick3 = () => {
        return setToggle3(prevToggle =>!prevToggle)
        };

    // Usestate for Userfilter toggle display
        const [filterToggle, setFilterToggle] = useState(false)
    
        const filterToggleClick = () => {
            return setFilterToggle(prevToggle =>!prevToggle)
            };

  return (
<div >
        
        {userData === undefined ? null : 
         
            <table className='tablecontainer'>
        
                <tr>
                    <th>Organization <span><img src={tableicon} alt="tableicon" onClick={filterToggleClick} /></span></th>
                    <th>Username <span><img src={tableicon} alt="tableicon" onClick={filterToggleClick} /></span></th>
                    <th>Email <span><img src={tableicon} alt="tableicon" onClick={filterToggleClick} /></span></th>
                    <th>Phone number <span><img src={tableicon} alt="tableicon" onClick={filterToggleClick} /></span></th>
                    <th>Date joined <span><img src={tableicon} alt="tableicon" onClick={filterToggleClick} /></span></th>
                    <th>Status <span><img src={tableicon} alt="tableicon" onClick={filterToggleClick} /></span></th>
                </tr>   

                <div className={filterToggle ? 'showFilter' : 'hideFilter'}>
                    <UserFilter />
                </div>
         
                {userData === undefined ? null :
            <tr>
                    <td>
                        {userData[15].orgName}    
                    </td>
                    <td >
                        {userData[15].userName}
                    </td>
                    <td >
                        {userData[15].email}
                    </td>
                    <td >
                        {userData[15].phoneNumber}
                    </td>
                    <td >
                        {userData[15].createdAt}
                    </td>
                    <td>
                                    <div className='status-div'>
                                        { userData[15].phoneNumber.length === 12 ? 
                                            <div className='inactive' ><p>Inactive</p></div> : 
                                            <div className='active'><p>Active</p></div>
                                        }
                                        
                                        <img src={dots} alt="dots" onClick={viewdetailClick1} />
                                        <div className={toggle1 ? 'showViewDetail1' : 'hideViewDetail1'} >
                                        <Viewdetails />
                                        </div>
                                    </div>

                    </td>
            </tr>
        }

        {userData === undefined ? null :
                <tr>
                        <td>
                            {userData[96].orgName}    
                        </td>
                        <td >
                            {userData[96].userName}
                        </td>
                        <td >
                            {userData[96].email}
                        </td>
                        <td >
                            {userData[96].phoneNumber}
                        </td>
                        <td >
                            {userData[96].createdAt}
                        </td>
                        <td>
                                        <div className='status-div'>
                                            { userData[96].phoneNumber.length === 12 ? 
                                                <div className='inactive' ><p>Inactive</p></div> : 
                                                <div className='active'><p>Active</p></div>
                                            }
                                            
                                            <img src={dots} alt="dots" onClick={viewdetailClick2} />
                                            <div className={toggle2 ? 'showViewDetail2' : 'hideViewDetail2'} >
                                            <Viewdetails />
                                            </div>
                                        </div>

                        </td>
                </tr>
                }

        {userData === undefined ? null :
                <tr>
                        <td>
                            {userData[55].orgName}    
                        </td>
                        <td >
                            {userData[55].userName}
                        </td>
                        <td >
                            {userData[55].email}
                        </td>
                        <td >
                            {userData[55].phoneNumber}
                        </td>
                        <td >
                            {userData[55].createdAt}
                        </td>
                        <td>
                                        <div className='status-div'>
                                            { userData[55].phoneNumber.length === 12 ? 
                                                <div className='inactive' ><p>Inactive</p></div> : 
                                                <div className='active'><p>Active</p></div>
                                            }
                                            
                                            <img src={dots} alt="dots" onClick={viewdetailClick3} />
                                            <div className={toggle3 ? 'showViewDetail3' : 'hideViewDetail3'} >
                                            <Viewdetails />
                                            </div>
                                        </div>

                        </td>
                </tr>
                }
         
               {userData.map((data, index) => {
                   
                   return (
                        
                       <tr key={index}>
                            <td >
                                {data.orgName}
                            </td>
                            <td >
                                {data.userName}
                            </td>
                            <td >
                                {data.email}
                            </td>
                            <td >
                                {data.profile.phoneNumber}
                            </td>
                            <td >
                                {data.createdAt}
                            </td>
                            <td>
                                <div className='status-div'>
                                    { data.profile.phoneNumber.length === 12 ? 
                                        <div className='inactive' ><p>Inactive</p></div> : 
                                        <div className='active'><p>Active</p></div>
                                    }
                                    <img src={dots} alt="dots"  />
                                </div>
                            </td>
                       </tr>
                   )}
                )} 
        </table>           
    }
</div>
  )
}

export default Datatable