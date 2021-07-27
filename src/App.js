import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Address from './pages/Address/Address';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/address/:cep" exact component={Address} />
        <Route path="/favorites" component={Favorites} />
        <Route path="*" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
