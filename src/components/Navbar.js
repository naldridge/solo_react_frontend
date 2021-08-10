import Home from './Home';
import Weather from './Weather';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AuthenticationButton from './AuthenticationButton';
import './styles/Navbar.css';


const Navbar = () => {


    return (
        <div className="Nav-bar">
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/weather">Weather</Link>
                        <div className="userLogin">
                            <AuthenticationButton />
                        </div>
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
                </Switch>
            </Router>
        </div>
    );
};

export default Navbar;