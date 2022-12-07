import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
//------------------------------------------------------------------------------------------
import Footer from './components/Footer';
//------------------------------------------------------------------------------------------
import Login from './components/Login';
import SignUp from './components/SignUp';
import Resetpass from './components/resetpasswrord';
import Resetpasspage from './components/resetpasspage';
//------------------------------------------------------------------------------------------
import Managecategory from './components/admin/managecategory';
import Displaycategory from './components/admin/displaycategories';
import AddProduct from './components/admin/addproducts'
import ProductList from './components/admin/productlist';
import UpdateProfile from './components/admin/updateprofile';
import UpdatePhoto from './components/admin/updatephoto';
import Updatecategory from './components/admin/updatecategory';
import Photographerlist from './components/admin/photographerlist';
import Viewerlist from './components/admin/viewerlist';
import Homepagetry from './components/admin/homepagetry';
//------------------------------------------------------------------------------------------
import Photoadd from './components/photographer/photoadd';
import Photoupdate from './components/photographer/photoupdate';
import Photoview from './components/photographer/photoview';
import Tryviewpage from './components/admin/tryviewpage';
import Profilephotog from './components/photographer/profilephotog';
//------------------------------------------------------------------------------------------
import PrivateComponent from './components/privatecomponent';
import Privatecomponentadmin from './components/privatecomponentadmin';
import Privatecomponentphotographer from './components/privatecomponentphotographer';
import Privatecomponentviewer from './components/privatecomponentviewer';
//------------------------------------------------------------------------------------------
import Homepage from './components/viewer/homepage';
import Viewerprofile from './components/viewer/viewerprofile';
import AboutUS from './components/Aboutus';
import Photographerlistv from './components/viewer/photographerlistv';
//------------------------------------------------------------------------------------------
import Nav from './components/Nav';
import Navphotographer from './components/navphotgrapher';
import Navviewer from './components/navviewer';
//------------------------------------------------------------------------------------------
import CommonNav from './components/common_nav';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <CommonNav />
        <Routes>
          {/* <Route element={<PrivateComponent />}> 
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/add" element={<AddProduct />}></Route> 
        <Route path="/update/:id" element={<UpdatePhoto/>}></Route>
        <Route path="/logout" element={<h1>Logout</h1>}></Route>
        <Route path="/profile/:id" element={<UpdateProfile />}></Route>
        </Route> */}

          <Route element={<Privatecomponentadmin />}>
            <Route path="/adminphotolist" element={<ProductList />}></Route>
            <Route path="/categories" element={<Managecategory />}></Route>
            <Route path="/photoglist" element={<Photographerlist />}></Route>
            <Route path='/update/:id' element={<UpdatePhoto />}></Route>
            <Route path='/Uppdate/:id' element={<Updatecategory />}></Route>
            <Route path="/managecategories" element={<Displaycategory />}></Route>
            <Route path="/viewerlist" element={<Viewerlist />}></Route>
            <Route path="/logout" element={<h1>Logout</h1>}></Route>
          </Route>

          <Route element={<Privatecomponentphotographer />}>
            <Route path='/photolist' element={<Photoview />}></Route>
            <Route path='/photoadd' element={<AddProduct />}></Route>
            <Route path='/photoupdate/:id' element={<Photoupdate />}></Route>
            <Route path='/profileg/:id' element={<Profilephotog />}></Route>
            <Route path="/logout" element={<h1>Logout</h1>}></Route>
          </Route>

          <Route element={<Privatecomponentviewer />}>
            <Route path='/home' element={<Homepage />}></Route>
            <Route path='/profilev/:id' element={<Viewerprofile />}></Route>
            <Route path="/photoglistv" element={<Photographerlistv />}></Route>
            <Route path="/logout" element={<h1>Logout</h1>}></Route>
          </Route>

          {/* <Route path='/main' element={<Pagemain />}></Route> */}
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/aboutus" element={<AboutUS />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/resetpasspage" element={<Resetpasspage />}></Route>
          <Route path="/resetpass/" element={<Resetpass />}></Route>
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
