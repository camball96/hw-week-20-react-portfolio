import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Home from './Pages/home'
import MenuHeader from './Pages/Components/MenuHeader'


function App() {
  return (
    <Router>
      <MenuHeader/>
      <Route exact path='/' component={Home}/>
    </Router>
  );
}

export default App;
