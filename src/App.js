import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import AddService from './components/Pages/AddService/AddService';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';
import ManageOrder from './components/Pages/ManageOrders/ManageOrder';
import UpdateOrder from './components/Pages/ManageOrders/UpdateOrder';
import Notfound from './components/Pages/Notfound/Notfound';
import Purchase from './components/Pages/Purchase/Purchase';
import Services from './components/Pages/Services/Services';
import  AuthProvider from './context/AuthProvider';
function App() {

  return (
        <AuthProvider>
              <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
              <Home></Home>
        </Route>
        <Route exact path="/home">
              <Home></Home>
        </Route>
        <Route exact path="/services">
              <Services></Services>
        </Route>
        <Route exact path="/contact">
              <Contact></Contact>
        </Route>
        <Route exact path="/addservice">
              <AddService></AddService>
        </Route>
        <Route exact path="/purchase/:id">
              <Purchase></Purchase>
        </Route>
        <Route exact path="/manageorder">
              <ManageOrder></ManageOrder>
        </Route>
        <Route exact path="/order/update/:id">
              <UpdateOrder></UpdateOrder>
        </Route>
        <Route exact path="/login">
              <LogIn></LogIn>
        </Route>
        <Route path="/*">
          <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
