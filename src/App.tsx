import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import { ToastContainer} from 'react-toastify';
function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<LandingPage></LandingPage>}></Route>
            <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
