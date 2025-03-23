import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // ✅ Use Switch instead of Routes
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/ContactUs';

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
      <Switch> {/* ✅ Use Switch instead of Routes */}
        <Route exact path="/" component={Home} /> {/* ✅ Use component prop */}
        <Route exact path="/contact" component={Contact} />
      </Switch>
      </div>
    </Router>
  );
};

export default App;