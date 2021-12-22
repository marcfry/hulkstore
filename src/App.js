import './App.css';
import {useState, useEffect} from 'react'
import Inicio from './components/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import Login from './components/Login';
import ListarProductos from './components/ListarProductos';
import AgregarProducto from './components/AgregarProducto';
import EditarProducto from './components/EditarProducto';
import Error404 from './components/Error404';

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
consultarAPI()
  }, []);

  const consultarAPI = async() =>{
    try{
      const respuesta = await fetch(URL);
if(respuesta.status === 200){
  const datos= await respuesta.json();
  setProductos(datos);
}
    }catch(error){
      console.log(error)
    }
  }


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
      <Route exact path='/productos'>
          <ListarProductos productos={productos} consultarAPI={consultarAPI}></ListarProductos>
        </Route>
        <Route exact path='/productos/nuevo'>
          <AgregarProducto consultarAPI={consultarAPI}></AgregarProducto>
        </Route>
        <Route exact path='/productos/editar/:id'>
          <EditarProducto consultarAPI={consultarAPI} ></EditarProducto>
        </Route>
        <Route path='*'>
          <Error404></Error404></Route>
      </Switch>
      <Footer></Footer>
      </Router>
    
  );
}

export default App;
