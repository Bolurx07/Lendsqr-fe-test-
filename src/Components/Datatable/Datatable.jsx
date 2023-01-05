import './Datatable.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import tableicon from '../../Assets/tableicon.svg';
import dots from '../../Assets/dots.svg';



const Datatable = () => {

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


  return (
//   <div>
//       {userData === undefined ? null :
//         <div>
//             <h1>
    
//                 {userData[0].email}    
//             </h1>
//         </div>}
//   </div>

<div >
        
        {userData === undefined ? null : 
         
         <table className='tablecontainer'>

                        
         <tr>
             <th>Organization <img src={tableicon} alt="tableicon" /></th>
             <th>Username <img src={tableicon} alt="tableicon" /></th>
             <th>Email <img src={tableicon} alt="tableicon" /></th>
             <th>Phone number <img src={tableicon} alt="tableicon" /></th>
             <th>Date joined <img src={tableicon} alt="tableicon" /></th>
             <th>Status <img src={tableicon} alt="tableicon" /></th>
         </tr>   
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
                                        <div><p>Inactive</p></div> : 
                                        <div><p>Active</p></div>}
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