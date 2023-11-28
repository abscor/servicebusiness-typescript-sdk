// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonItem, IonBadge, IonNote, IonList, IonText, IonRadioGroup, IonRadio, IonCheckbox, IonImg, IonTabs, IonTabButton, IonRouterOutlet, IonTabBar, IonSelect, IonSelectOption } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { add, book, build, business, chevronBack, chevronForward, help, listCircle, location, logoApple, logoGoogle, person, personCircleOutline, star, starHalf } from 'ionicons/icons';
import LoginOTP from './LoginOTP';
import WebsiteGeneral from './WebsiteGeneral';
import WebsiteDesign from './WebsiteDesign';
import WebsiteAvailability from './WebsiteAvailability';
import WebsiteIntegrations from './WebsiteIntegrations';
import SectionHeader from '../components/SectionHeader';
import InputCheckbox from '../components/InputCheckbox';
import InputText from '../components/InputText';
import InputTextarea from '../components/InputTextarea';
import InputImage from '../components/InputImage';
import Service from './Service';
import Area from './Area';
import Review from './Review';
import Page from './Page';

const Pages: React.FC = () => {
  const loggedIn = false;

  return (
    <IonPage>
      <SectionHeader title={'Pages'} />
      <IonContent>
        <IonRouterOutlet>
          <Route path="/pages/:pageId">

          <Page />


          </Route>
          <Route exact path="/pages">
            <IonList inset={true}>
              <IonItem button={true} detail={true} href="/pages/1">
                <IonIcon slot="start" icon={business} />
                <IonLabel>
                  <strong>How to clean your carpets</strong>
                </IonLabel>
              </IonItem>

              <IonItem button={true} detail={true} href="/pages/2">
                <IonIcon slot="start" icon={business} />
                <IonLabel>
                  <strong>Sofa cleaning in New York City</strong>
                </IonLabel>
              </IonItem>
            </IonList>
          </Route>
          </IonRouterOutlet>
          

         

      </IonContent>
    </IonPage>
  );
};

export default Pages;