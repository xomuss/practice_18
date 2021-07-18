import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import routs from './route/routs';
import Modal from './components/Modal';
import {toggleModalOperation} from './redux/operations';
import { connect } from 'react-redux';
import { isModalOpen } from './redux/selectors';

const { home, contact, about } = routs;

const HomePage = lazy(() => import('./Views/HomePage'));
const AboutPage = lazy(() => import('./Views/AboutPage'));
const ContactPage = lazy(() => import('./Views/ContactPage'));

// console.log(operations);


function App({ toggleModal, modal }) {
  
  console.log(modal)
  return (
    <>
      <div className="App">
        <Header  toggleModal={toggleModal }/>
        <Suspense fallback="loading">
          <Switch>
            <Route path={home} exact component={HomePage} />
            <Route path={about} component={AboutPage} />
            <Route path={contact} component={ContactPage} />
          </Switch>
        </Suspense>
      </div>
      {modal && (<Modal toggleModal={toggleModal} valueState={modal}/>)}
    </>
  );
};

const mapStateToProps = state => ({
  modal: isModalOpen(state)
})

const mapDispatchToProps = {
  toggleModal: toggleModalOperation,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(App) ;
