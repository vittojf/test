import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import HeaderNav from './components/HeaderNav/HeaderNav';
import ItemListContainer from './components/ItemListContainer/itemListContainer'


function App() {
  return (<>
<Router>

    <HeaderNav></HeaderNav>
<Switch>

  
<Route exact path="/">
    <div className="container">      
      <ItemListContainer></ItemListContainer>
    </div>
</Route>

<Route  path="/:ap" >
    <div className="container">      
      <ItemListContainer></ItemListContainer>
    </div>
</Route>
</Switch>

</Router>
    </>
  );
}

export default App;
