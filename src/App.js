import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import routs from './route/routs';
import Modal from './components/Modal';

const { home, contact, about } = routs;

const HomePage = lazy(() => import('./Views/HomePage'));
const AboutPage = lazy(() => import('./Views/AboutPage'));
const ContactPage = lazy(() => import('./Views/ContactPage'));

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Suspense fallback="loading">
          <Switch>
            <Route path={home} exact component={HomePage} />
            <Route path={about} component={AboutPage} />
            <Route path={contact} component={ContactPage} />
          </Switch>
        </Suspense>
      </div>
      <Modal />
    </>
  );
}

export default App;
