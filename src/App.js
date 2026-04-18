import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './components/layout/MainLayout'; 
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/index';
import CallManagement from './pages/CallManagement';
import Customer from './pages/Customer/index';
import EmployeeManagement from './pages/EmployeeManagement/index';
import MachineBranch from './pages/MachineBranch/MachineBranch';
import CallHistory from './pages/CallHistory/CallHistory';
import QueueManagementPage from './pages/QueueManagementPage/QueueManagementPage';
import MeetingRoom from './pages/MeetingRoom/MeetingRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Các route không có sidebar (login) */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

        {/* Các route có sidebar - bọc trong MainLayout */}
        <Route path="/Dashboard" element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        } />
        
        <Route path="/calls" element={
          <MainLayout>
            <CallManagement />
          </MainLayout>
        } />
        
        <Route path="/customers" element={
          <MainLayout>
            <Customer />
          </MainLayout>
        } />
        
        <Route path="/employees" element={
          <MainLayout>
            <EmployeeManagement />
          </MainLayout>
        } />
        
        <Route path="/MachineBranch" element={
          <MainLayout>
            <MachineBranch />
          </MainLayout>
        } />
        
        <Route path="/CallHistory" element={
          <MainLayout>
            <CallHistory />
          </MainLayout>
        } />
        
        <Route path="/queue" element={
          <MainLayout>
            <QueueManagementPage />
          </MainLayout>
        } />
        
        <Route path="/MeetingRoom" element={
          <MainLayout>
            <MeetingRoom />
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;