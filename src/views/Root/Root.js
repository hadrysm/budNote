import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// templates
import MainTemplate from 'templates/MainTemplate';
import PageTemplate from 'templates/PageTemplate';
import PanelTemplate from 'templates/PanelTemplate';

// pages
import HomePage from 'views/HomePage';
import AboutPage from 'views/AboutPage';
import ContactPage from 'views/ContactPage';
import LoginPage from 'views/LoginPage';
import NotesPage from 'views/NotesPage';
import BudgetPage from 'views/BudgetPage';
import ChartPage from 'views/ChartPage';
import NotePage from 'views/NotePage';
import SettingsPage from 'views/SettingsPage';

// routes
import PrivateRoute from 'components/utility/PrivateRoute';
import routes from 'routes';

const Root = () => {
  const location = useLocation();

  return (
    <MainTemplate>
      <Switch>
        <Route path={routes.user} exact>
          <PanelTemplate>
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <PrivateRoute path={routes.budget} exact component={BudgetPage} />
                <PrivateRoute path={routes.chart} exact component={ChartPage} />
                <PrivateRoute path={routes.settings} exact component={SettingsPage} />
                <PrivateRoute path={routes.notes} exact component={NotesPage} />
                <PrivateRoute path={routes.note} exact component={NotePage} />
              </Switch>
            </AnimatePresence>
          </PanelTemplate>
        </Route>

        <Route>
          <PageTemplate>
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route path={routes.home} exact component={HomePage} />
                <Route path={routes.about} exact component={AboutPage} />
                <Route path={routes.contact} exact component={ContactPage} />
                <Route path={routes.login} exact component={LoginPage} />
              </Switch>
            </AnimatePresence>
          </PageTemplate>
        </Route>
      </Switch>
    </MainTemplate>
  );
};

export default Root;
