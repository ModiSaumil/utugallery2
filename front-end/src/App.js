import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import PrivateComponent from './components/privatecomponent';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}> 
        <Route path="/" element={<h1>Product listing component</h1>}></Route>
        <Route path="/add" element={<h1>Add component</h1>}></Route> 
        <Route path="/update" element={<h1>Update component</h1>}></Route>
        <Route path="/logout" element={<h1>Logout</h1>}></Route>
        <Route path="/profile" element={<h1>Profile</h1>}></Route>
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
