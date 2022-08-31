import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import AboutUs from './AboutUs';
import Contact from './Contsct';
import Featurs from './Featurs';
import Home from './Home';
import LogIn from './LogIn';
import NavBar from './NavBar';


function App() {
  return (
      
       <Router>
         <div className='content'>

          <Switch>
              <Route exact path="/">
                 <Home/>
              </Route>
              <Route path="/AboutUs">
                 <NavBar/>
                 <AboutUs/>
             </Route>
             <Route path="/featurs">
                 <NavBar/>
                 <Featurs/>
             </Route>
             <Route path="/contact">
                 <NavBar/>
                 <Contact/>
             </Route>
             <Route path="/login">
                <NavBar/>
                <LogIn/> 
             </Route>
          </Switch>
         </div>
       </Router>

  );

}

export default App;
