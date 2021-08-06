import Home from './Home';
import Weather from './Weather';
import Register from './Register';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="Nav-bar">
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/weather">Weather</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </nav>
{/*                     <div className="NavSearch">
                        <ZipForm />
                    </div> */}
                </div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/weather">
                        <Weather />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Navbar;