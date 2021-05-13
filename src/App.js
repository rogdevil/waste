// import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import {Switch, Route} from 'react-router-dom'
import GetData from './components/GetData';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        <Route exact path="/get">
          <GetData />
        </Route>
        <Route path="/user">
          <UserInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
