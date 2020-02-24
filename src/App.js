import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

import Home from './pages/Home';
import Channel from './pages/Channel';
import ModalLoading from './components/ModalLoading';

function App() {
  return (
    <IonApp className="App">
      <IonReactRouter>
          <Route path='/' component={Home} exact />
          <Route path='/channel/:id' component={Channel} exact />
      </IonReactRouter>
      <ModalLoading />
    </IonApp>
  );
}

export default App;
