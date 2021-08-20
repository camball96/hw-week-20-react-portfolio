import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
//import { Container } from 'semantic-ui-react'

import Home from './Pages/home'
import ContactForm from './Pages/contact'
import MenuHeader from './Pages/Components/MenuHeader'
import PortfolioCards from './Pages/portfolio';
import ResumePage from './Pages/resume';
import Footer from './Pages/Components/footer'



function App() {
  return (
    <Router>
      <MenuHeader/>
      
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={ContactForm}/>
      <Route exact path='/portfolio' component={PortfolioCards}/>
      <Route exact path='/resume' component={ResumePage}/>
      
    </Router>
  );
}

export default App;
