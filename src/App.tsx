import Menu from "./components/Menu";
import Page from "./pages/Page";
import React, { useEffect } from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonLoading,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import TabRootPage from "./pages/TabRootPage";

const prefersDark = window.matchMedia('(prefers-color-scheme: light)');

toggleDarkTheme(prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

// Add or remove the "dark" class based on if the media query matches
function toggleDarkTheme(shouldAdd) {
  document.body.classList.toggle('light', shouldAdd);
}

const App: React.FC = () => {
    return(
        <IonApp>
            <IonReactRouter>
              <IonSplitPane contentId="main">
                <Menu/>
                <IonRouterOutlet id="main">
                  <Switch>
                  <Route path="/page/:name" component={Page} exact />
                  <Route path="/tabs" component={TabRootPage} />
                  <Redirect from="/" to="/page/Dashboard" exact />
                  </Switch>
                </IonRouterOutlet>
              </IonSplitPane>
            </IonReactRouter>
      </IonApp>
    )
};
export default App;
