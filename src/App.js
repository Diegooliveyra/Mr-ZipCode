import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Address from './pages/Address/Address';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/address/:cep" exact component={Address} />
        <Route path="/favorites" component={Favorites} />
        <Route path="*" component={Home} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
