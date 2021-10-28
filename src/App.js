import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';
import WallCalculator from './pages/WallCalculator/WallCalculator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/calculator/:wall" component={WallCalculator}/>
          <Route path="/result" component={Result}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
