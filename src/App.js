import 'bootstrap/dist/css/bootstrap.min.css';
import { Route} from 'react-router-dom'
import Acomponent from './components/Acomponent';
import FormLogin from './components/FormLogin';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div>
      
      <NavBar></NavBar>
      <Route path="/componentA">
        <Acomponent/>
      </Route>
      <Route path="/Login">
        <FormLogin/>
      </Route>
    </div>
  );
}

export default App;
