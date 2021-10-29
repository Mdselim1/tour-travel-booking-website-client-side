import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import Home from './components/Pages/Home/Home';
import Notfound from './components/Pages/Notfound/Notfound';
import Services from './components/Pages/Services/Services';

function App() {
  return (
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
        <Route exact path="/login">
              <LogIn></LogIn>
        </Route>
        <Route path="/*">
          <Notfound></Notfound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
