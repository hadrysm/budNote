import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// template
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import PanelTemplate from 'templates/PanelTemplate/PanelTemplate';

// pages
import HomePage from 'views/HomePage/HomePage';
import AboutPage from 'views/AboutPage/AboutPage';
import ContactPage from 'views/ContactPage/ContactPage';
import LoginPage from 'views/LoginPage/LoginPage';
import NotesPage from 'views/NotesPage/NotesPage';
import BudgetPages from 'views/BudgetPages/BudgetPages';
import ChartPages from 'views/ChartPages/ChartPages';

// routes
import PrivateRoute from 'components/hoc/PrivateRoute/PrivateRoutes';
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
                <PrivateRoute path={routes.budget} exact component={BudgetPages} />
                <PrivateRoute path={routes.chart} exact component={ChartPages} />
                <PrivateRoute path={routes.notes} exact component={NotesPage} />
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
