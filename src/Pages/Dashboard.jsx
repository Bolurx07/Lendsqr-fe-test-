import Navbar from '../Components/Navbar';
import Sidenav from '../Components/Sidenav';
import '../Stylesheets/Dashboard.scss';

const Dashboard = () => {
  return (
    <div className='dashboardcontainer'>
        <Navbar />
        <div className='sidenavdiv'>
            <Sidenav />
        </div>

    </div>
  )
}

export default Dashboard