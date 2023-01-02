import '../Stylesheets/Dashboard.scss';
import { useState } from 'react';
import Dashboardcard from '../Components/Dashboardcard';
import Navbar from '../Components/Navbar';
import Sidenav from '../Components/Sidenav';
import usericon1 from '../Assets/usericon1.svg';
import usericon2 from '../Assets/usericon2.svg';
import usericon3 from '../Assets/usericon3.svg';
import usericon4 from '../Assets/usericon4.svg';
import Datatable from '../Components/Datatable';

const Dashboard = () => {

    // Usestate for Dashboardcard component
    const [user] = useState([
        { Image: usericon1, content: "Users", data: "2,453", alt: "preference" },
        { Image: usericon2, content: "Active users", data: "2,453", alt: "pricing" },
        { Image: usericon3, content: "Users with Loans", data: "12,453", alt: "audit" },
        { Image: usericon4, content: "Users with Savings", data: "102,453", alt: "audit" },
      ]);


  return (
    <div className='dashboardcontainer'>
        {/* <div className='navbardiv'>
            <Navbar />
        </div>
        <div className='sidenavdiv'>
            <Sidenav />
        </div> */}
        <h1 className='userdash'>Users</h1>
        <div className='dashcarddiv'>
            {user.map((item) => (
                          
                          <Dashboardcard imgsrc={item.Image} content={item.content} data={item.data} alt={item.alt}/>
                      ))}
        </div>
        <Datatable />
    </div>
  )
}

export default Dashboard