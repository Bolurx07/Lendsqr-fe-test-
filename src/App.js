import './App.css';
import { Route, Routes } from 'react-router-dom';
import TablePaginationDemo from './Components/Pagination';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import UserDetails from './Pages/UserDetails/UserDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='UserDetails' element={<UserDetails />} />
      </Routes>
    
      {/* <TablePaginationDemo /> */}
    </div>
  );
}

export default App;
