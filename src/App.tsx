import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PopupChangePassword } from './Components/Popup/PopupChangePassword';
import { PopupEditPhoneNumber } from './Components/Popup/PopupEditPhoneNumber';
import { PopupEmail } from './Components/Popup/PopupEmail';
import { AccountPage } from './Pages/AccoutPage';
import { AddAddress } from './Pages/AddAddress';
import { LandingPage } from './Pages/LandingPage';
import { LoginPage } from './Pages/LoginPage';
import { MyAddressPage } from './Pages/MyAddressPage';
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
            <Route path="/editphonenumber" element={<PopupEditPhoneNumber></PopupEditPhoneNumber>}></Route>
            <Route path="/myaddress" element={<MyAddressPage></MyAddressPage>}></Route>
            <Route path="/addaddress" element={<AddAddress></AddAddress>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
