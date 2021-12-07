import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Product from './pages/Product/Product';
import Favorite from './pages/Favorite/Favorite';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
       <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/favorite" component={Favorite} />
         <Route path="/cart" component={Cart} />
         <Route path="/category/:categoryName" component={Category} />
         <Route path="/product/:productId" component={Product} />
       </Switch>
      
    </div>
  );
}

export default App;
