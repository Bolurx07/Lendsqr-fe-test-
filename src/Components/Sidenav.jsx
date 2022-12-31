import '../Stylesheets/Sidenav.scss';
import dashboard from '../Assets/dashboard.svg';
import briefcase from '../Assets/briefcase.svg';
import users from '../Assets/users.svg';
import saving from '../Assets/saving.svg';
import whitelist from '../Assets/whitelist.svg';
import guarantor from '../Assets/guarantor.svg';


const Sidenav = () => {
    // Usestate for sidenavcard component
    const [sidenavcard] = useState([
      { Image: dashboard, paragraph: "Dashboard", active: false },
      { Image: users, paragraph: "Users", active: false  },
      { Image: event, paragraph: "Virtual Events", active: true },
      { Image: studio, paragraph: "Studio", active: false },
      { Image: video, paragraph: "My Video", active: false },
      { Image: mychannel, paragraph: "My Channel", active: false },
      { Image: subscribe, paragraph: "Subscription", active: false },
      { Image: library, paragraph: "Library", active: false },
      { Image: history, paragraph: "History", active: false },
      { Image: channel, paragraph: "Channels", active: false },
      { Image: setting, paragraph: "Settings", active: false },
      { Image: help, paragraph: "Help", active: false }
  ])

  return (
    <div>
        
    </div>
  )
}

export default Sidenav