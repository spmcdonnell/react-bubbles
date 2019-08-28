import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import BubblePage from './components/BubblePage';
import './styles.scss';

function App() {
    // const [colorList, setColorList] = useState([]);

    return (
        <Router>
            <div className="App">
                <Route exact path="/" render={props => <Login {...props} />} />
                {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
                <PrivateRoute path="/bubbles" component={BubblePage} />
            </div>
        </Router>
    );
}

export default App;
