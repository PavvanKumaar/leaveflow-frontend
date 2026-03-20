import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/login.jsx';
import HR from './components/hr.jsx';
import Employee from './components/employee.jsx';
import Manager from './components/manager.jsx';
import { useAuth } from './components/auth.jsx';
import RequestForm from './components/requestForm.jsx';
import ManagerDashboard from './Pages/ManagerDashboard.jsx';
function AuthController({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path = "/managerdash" element ={<ManagerDashboard/>}></Route>
        <Route path="/" element={<Login />} />
          
          
            {/* PAVVAN ADD THE NAVBAR COMPONENT CALL HERE */}

              
                <Route path="/HR" element={<AuthController>
                    <HR />
                    </AuthController>}/>
                <Route path="/employee" element={<AuthController><Employee /></AuthController>} />
                <Route path="/manager" element={<AuthController><Manager /></AuthController>} />
                
            
       
         
        
      </Routes>
    </div>
  );
}

export default App;

