import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import PrivateComponent from './components/privatecomponent';
import Login from './components/Login';
import AddProduct from './components/admin/addproducts'
import ProductList from './components/admin/productlist';
import UpdateProfile from './components/admin/updateprofile';
import UpdatePhoto from './components/admin/updatephoto';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}> 
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/add" element={<AddProduct />}></Route> 
        <Route path="/update/:id" element={<UpdatePhoto/>}></Route>
        <Route path="/logout" element={<h1>Logout</h1>}></Route>
        <Route path="/profile/:id" element={<UpdateProfile />}></Route>
        </Route>
        
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
      
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
