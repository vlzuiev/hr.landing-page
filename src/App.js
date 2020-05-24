import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Spinner from './components/spinner/spinner.component';
const HomePage = lazy(() => import('./pages/home/home.compoenent'));
const App = () => {
  return (
    <Router>
      <Suspense fallback={Spinner}>
        <Switch> 
          <Route path="/" component={HomePage} />
        </Switch>
      </Suspense> 
    </Router>
  );
}

export default App;
