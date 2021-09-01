import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import UserList from './pages/userList/UserList';
import User from './pages/userPage/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route  path="/users"><UserList/></Route>
        <Route  path="/user/:userId"><User/></Route>
        <Route  path="/newUser"><NewUser/></Route>
        <Route  path="/newProduct"><NewProduct/></Route>
        <Route  path="/products"><ProductList/></Route>
        <Route  path="/product/:productId"><Product/></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;