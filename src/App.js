import './App.css';
import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/Landing/Landing.page';
import SignInPage from './pages/sign-in/SignIn.pages';
import SignUpPage from './pages/sign-up/Signup.page';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import Dashboard from './pages/dashboard/Dashboard.page';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(userAuth);
    });
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/signin"
          component={() =>
            currentUser ? <Redirect to="/dashboard" /> : <SignInPage />
          }
        />
        <Route exact path="/signup" component={SignUpPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route
          path="/"
          component={() =>
            currentUser ? <Redirect to="/dashboard" /> : <LandingPage />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
