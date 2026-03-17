import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/login.jsx';
import HR from './components/hr.jsx';
import Employee from './components/employee.jsx';
import Manager from './components/manager.jsx';
import { useAuth } from './components/auth.jsx';

function AuthController({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <AuthController>
            <div className="container mx-auto p-8 max-w-7xl">
              <Routes>
                <Route path="/HR" element={<HR />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/manager" element={<Manager />} />
                <Route index element={<Navigate to="/employee" replace />} />
              </Routes>
            </div>
          </AuthController>
        } />
      </Routes>
    </div>
  );
}

export default App;

