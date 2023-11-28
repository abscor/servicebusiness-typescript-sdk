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

const Reviews: React.FC = () => {
  const loggedIn = false;

  return (
    <IonPage>
      <SectionHeader title={'Reviews'} />
      <IonContent>
        <IonRouterOutlet>
          <Route path="/reviews/:reviewId">

          <Review />


          </Route>
          <Route exact path="/reviews">
            <IonList inset={true}>
              <IonItem button={true} detail={true} href="/reviews/1">
                <IonIcon slot="start" icon={business} />
                <IonLabel>
                  <strong>5 Star - Eric from Brooklyn, NY</strong>
                </IonLabel>
              </IonItem>

              <IonItem button={true} detail={true} href="/reviews/2">
                <IonIcon slot="start" icon={business} />
                <IonLabel>
                  <strong>3 Star - John from Queens, NY</strong>
                </IonLabel>
              </IonItem>
            </IonList>
          </Route>
          </IonRouterOutlet>
          

         

      </IonContent>
    </IonPage>
  );
};

export default Reviews;