import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Test from './components/Test';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'




function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Test />
        </div>
        <div className='App-Link'>
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Route path="/home" render={(props) => {
            return <Home userName="sanjay" {...props}/>
          }} />
          <Route path="/login" component={Login} />
        </div>

      </div>
    </Router>
  );
}

export default App;
