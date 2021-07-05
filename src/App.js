import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/Landing/Landing.page';
import SignInPage from './pages/sign-in/SignIn.pages';
import SignUpPage from './pages/sign-up/Signup.page';
import { useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import Dashboard from './pages/dashboard/Dashboard.page';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    // const { setCurrentUser } = this.props;

    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  });
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
        <Route
          exact
          path="/dashboard"
          component={() => <Dashboard user={currentUser} />}
        />
      </Switch>
    </div>
  );
}

export default App;
