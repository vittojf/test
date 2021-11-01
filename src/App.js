import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import HeaderNav from './components/HeaderNav/HeaderNav';
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import ItemListContainer2 from './components/ItemListContainer/itemListContainer2'

function App() {
  return (<>
<BrowserRouter>
    <HeaderNav></HeaderNav>
<Switch>

  
<Route path="/">
    <div className="container">      
      <ItemListContainer></ItemListContainer>
    </div>
</Route>

<Route exact path="/pag2">
    <div className="container">      
      <ItemListContainer2></ItemListContainer2>
    </div>
</Route>
</Switch>
</BrowserRouter>
    </>
  );
}

export default App;
