import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import MainTemplate from 'templates/MainTemplate/MainTemplate';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import HomePage from 'views/HomePage/HomePage';
import AboutPage from 'views/AboutPage/AboutPage';
import ContactPage from 'views/ContactPage/ContactPage';
import LoginPage from 'views/LoginPage/LoginPage';
import NotesPage from 'views/NotesPage/NotesPage';

import routes from 'routes';
import { useAuthUser } from 'hooks/useAuthUser';

const Root = () => {
  const location = useLocation();

  useAuthUser();

  return (
    <MainTemplate>
      <PageTemplate>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Switch location={location} key={location.key}>
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
            <Route path={routes.notes} exact>
              <NotesPage />
            </Route>
          </Switch>
        </AnimatePresence>
      </PageTemplate>
    </MainTemplate>
  );
};

export default Root;
