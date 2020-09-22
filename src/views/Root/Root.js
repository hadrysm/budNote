import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from 'routes';

import MainTemplate from 'templates/MainTemplate/MainTemplate';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import HomePage from 'views/HomePage/HomePage';
import AboutPage from 'views/AboutPage/AboutPage';
import ContactPage from 'views/ContactPage/ContactPage';
import LoginPage from 'views/LoginPage/LoginPage';

const Root = () => {
  return (
    <Router>
      <MainTemplate>
        <PageTemplate>
          <Switch>
            <Route path={routes.home} exact>
              <HomePage />
            </Route>
            <Route path={routes.about} exact>
              <AboutPage />
            </Route>
            <Route path={routes.contact} exact>
              <ContactPage />
            </Route>
            <Route path={routes.login} exact>
              <LoginPage />
            </Route>
          </Switch>
        </PageTemplate>
      </MainTemplate>
    </Router>
  );
};

export default Root;
