import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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

/* Import the LoginPage component */
import LoginPage from './pages/LoginPage';
import LoginPassword from './pages/LoginPassword';
import DashboardHome from './pages/DashboardHome';
import LoginOTP from './pages/LoginOTP';
import Profile from './pages/Profile';
import SetPassword from './pages/SetPassword';
import Websites from './pages/Websites';
import Services from './pages/Services';
import Areas from './pages/Areas';
import Reviews from './pages/Reviews';
import Pages from './pages/Pages';
import FAQs from './pages/FAQs';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/login-otp">
            <LoginOTP />
          </Route>

          <Route exact path="/login-password">
            <LoginPassword />
          </Route>

          <Route exact path="/dashboard-home">
            <DashboardHome />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/set-password">
            <SetPassword />
          </Route>

          <Route path="/websites">
            <Websites />
          </Route>

          <Route path="/services">
            <Services />
          </Route>

          <Route path="/areas">
            <Areas />
          </Route>

          <Route path="/reviews">
            <Reviews />
          </Route>

          <Route path="/pages">
            <Pages />
          </Route>

          <Route path="/faqs">
            <FAQs />
          </Route>

        </IonRouterOutlet>
        
    </IonReactRouter>
  </IonApp>
);

export default App;
