import './App.css';
import Inicio from './Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navegacion from './common/Navegacion';
import Footer from './common/Footer';
import Login from './Login';

function App() {
  return (
          <Router>
            <Navegacion></Navegacion>
            <Switch>
              <Route exact path='/'>
      <Inicio></Inicio>
      </Route>
      <Route exact path='/login'>
<Login></Login>
      </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    
  );
}

export default App;
