import { Route } from 'react-router-dom';
import Landing from './components/Landing-Page/Landing.jsx';
import Home from './components/Home/Home.jsx';
import Create from './components/Create/Create-Form';
import Details from './components/Pokedex/Details';


function App() {
  return (
    <div className="App">
      <Route
      exact path={'/'}
      component={Landing}
      />
      <Route
      exact path={'/home'}
      component={Home}
      />
      <Route
      exact path={'/create'}
      component={Create}
      />
      <Route
      exact path={"/details/:id"}
      component={Details}
      />
      </div>)
}

export default App;
