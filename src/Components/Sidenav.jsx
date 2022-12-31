import '../Stylesheets/Sidenav.scss';
import { useState } from 'react';
import dashboard from '../Assets/dashboard.svg';
import vicon from '../Assets/v-icon.svg';
import briefcase from '../Assets/briefcase.svg';
import users from '../Assets/users.svg';
import saving from '../Assets/saving.svg';
import whitelist from '../Assets/whitelist.svg';
import guarantor from '../Assets/guarantor.svg';
import loan from '../Assets/loan.svg';
import decision from '../Assets/decision.svg';
import karma from '../Assets/karma.svg';
import Sidenavcard from './Sidenavcard';
import savingprod from '../Assets/savingsprod.svg';
import service from '../Assets/service.svg';
import serviceacct from '../Assets/serviceacct.svg';
import settlement from '../Assets/settlement.svg';
import fees from '../Assets/fees.svg';
import report from '../Assets/report.svg';
import preference from '../Assets/preferences.svg';
import pricing from '../Assets/pricing.svg';
import system from '../Assets/system.svg';
import audit from '../Assets/audit.svg';

const Sidenav = () => {

    // Usestate for sidenavcard component
    const [customers] = useState([
      { Image: users, content: "Users", alt:"Users", active: true  },
      { Image: guarantor, content: "Guarantor", alt:"Guarantor", active: false },
      { Image: loan, content: "Loans", alt:"loan", active: false },
      { Image: decision, content: "Decision Models", alt:"decision", active: false },
      { Image: saving, content: "Savings", alt:"saving", active: false },
      { Image: loan, content: "Loan Requests", alt:"loan", active: false },
      { Image: whitelist, content: "Whitelist", alt:"whitelist", active: false },
      { Image: karma, content: "Karma", alt:"karma", active: false }

  ]);

    const [business] = useState([
      { Image: briefcase, content: "Organization", alt: "briefcase", active: false  },
      { Image: loan, content: "Loan Products", alt: "loan", active: false },
      { Image: savingprod, content: "Savings Products", alt: "savingprod", active: false },
      { Image: fees, content: "Fees and Charges", alt: "fees", active: false },
      { Image: service, content: "Services", alt: "service", active: false },
      { Image: serviceacct, content: "Service Account", alt: "serviceacct", active: false },
      { Image: settlement, content: "Settlements", alt: "settlement", active: false },
      { Image: report, content: "Reports", alt: "report", active: false }

  ]);

  const [setting] = useState([
    { Image: preference, content: "Preferences", alt: "preference", active: false  },
    { Image: pricing, content: "Fees and Pricing", alt: "pricing", active: false },
    { Image: audit, content: "Audit Logs", alt: "audit", active: false },
    { Image: system, content: "Systems Messages", alt: "system", active: false }
  ]);

  return (
    <div>

      <div className='orgdiv'>
        <img src={briefcase} alt="organisation" />
        <p>Switch Organization</p>
        <img src={vicon} alt="v-icon" />
      </div>

      <div className='dashboardcontent'>
        <Sidenavcard image={dashboard} content='Dashboard' active='false'/>
      </div>

      <div className='dashboarddiv'>
        <p className='sidenavheading'>Customers</p>
        {customers.map((item) => (
                        <Sidenavcard image={item.Image} content={item.content} alt={item.alt} active={item.active}/>
                    ))}
      </div>

      <div className='dashboarddiv'>
        <p className='sidenavheading'>Businesses</p>
        {business.map((item) => (
                        <Sidenavcard image={item.Image} content={item.content} active={item.active}/>
                    ))}
      </div>

      <div className='dashboarddiv'>
        <p className='sidenavheading'>Settings</p>
          {setting.map((item) => (
                          <Sidenavcard image={item.Image} content={item.content} active={item.active}/>
                      ))}
      </div>
    </div>
  )
}

export default Sidenav