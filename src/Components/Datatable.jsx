import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import tableicon from '../Assets/tableicon.svg';



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
    userData === undefined ? null : 
    <table>
        <tr>
            <th>Organization <img src={tableicon} alt="tableicon" /></th>
            <th>Username <img src={tableicon} alt="tableicon" /></th>
            <th>Email <img src={tableicon} alt="tableicon" /></th>
            <th>Phone number <img src={tableicon} alt="tableicon" /></th>
            <th>Date joined <img src={tableicon} alt="tableicon" /></th>
            <th>Status <img src={tableicon} alt="tableicon" /></th>
        </tr>
        <tr>
            <td>
                {userData.map((data, index) => {
                    return (
                        <div key={index}>
                                    {data.profile.firstName}
        
                        </div>
                    )
                })} 

            </td>
            <td>
                {userData.map((data, index) => {
                    return (
                        <div key={index}>
                                    {data.email}
        
                        </div>
                    )
                })} 

            </td>
        </tr>
    </table>
  )
}

export default Datatable