import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PopupChangePassword } from './Components/Popup/PopupChangePassword';
import { PopupEmail } from './Components/Popup/PopupEmail';
import { AccountPage } from './Pages/AccoutPage';
import { LandingPage } from './Pages/LandingPage';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';

function App() {
  return (
    <div id = "root">
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<LandingPage></LandingPage>}></Route>
            <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/account" element={<AccountPage></AccountPage>}></Route>
            <Route path="/editemail" element={<PopupEmail></PopupEmail>}></Route>
            <Route path="/editpassword" element={<PopupChangePassword></PopupChangePassword>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
