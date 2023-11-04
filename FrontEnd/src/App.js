import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Templates from './pages/templates/Templates';
import './App.css';

// import 'antd/dist/antd.min.css';


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Templateshome from './pages/Templateshome';

function App() {

  return (
    <>
      <section className='Appp'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/home" element={<ProtectedRoute>< Home /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute>< Profile /></ProtectedRoute>} />
            <Route path="/templates/:id" element={<ProtectedRoute><Templates /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/templates" element={<Templateshome />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;

// ---->>> this is called protected Routes 
// this is protection used to make sure that user cannot able to visit home page without login or register 

export function ProtectedRoute(props) {
  if (localStorage.getItem("sheyresume-user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}