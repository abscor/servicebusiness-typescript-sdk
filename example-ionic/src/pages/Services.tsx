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

const Services: React.FC = () => {
  const loggedIn = false;
  // GET param 'new'
  const newParam = new URLSearchParams(window.location.search).get('new');

  // {/* active?: InputMaybe<Scalars['Boolean']['input']>;
  // /** The description of the service max length 15500 */
  // description: Scalars['String']['input'];
  // /** The order of displaying this service. Higher priority means it will be displayed first. max length 200 */
  // displayOrder?: InputMaybe<Scalars['Int']['input']>;
  // /** This indicates whether this site will use the Service object. */
  // enableSchemaOrgServiceObject?: InputMaybe<Scalars['Boolean']['input']>;
  // /** HTML (markup) block 1) max length 15500 */
  // htmlBlock1?: InputMaybe<Scalars['String']['input']>;
  // /** HTML (markup) block 2) max length 15500 */
  // htmlBlock2?: InputMaybe<Scalars['String']['input']>;
  // /** Min size (450 x 300)px max length 5000 */
  // image?: InputMaybe<Scalars['String']['input']>;
  // /** A list of images for this service */
  // images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  // keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  // /**  max length 5000 */
  // metadata?: InputMaybe<Scalars['String']['input']>;
  // /** The name of the service that the business provides. max length 200 */
  // name: Scalars['String']['input'];
  // pages?: InputMaybe<Array<InputMaybe<PageUpdateObject>>>;
  // /** This indicates whether this service will display the Insurance company widget. */
  // showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  // /** The slug of the service max length 200 */
  // slug?: InputMaybe<Scalars['String']['input']>; */}

  const [name, setName] = useState('Carpet Cleaning');



  return (
    <IonPage>
      <SectionHeader title={'Services'} />
      <IonContent>
        <IonRouterOutlet>
          <Route path="/services/:serviceId">

          <Service />


          </Route>
          <Route exact path="/services">
            <IonList inset={true}>
              <IonItem button={true} detail={true} href="/services/1">
                <IonIcon slot="start" icon={business} />
                <IonLabel>
                  <strong>Carpet cleaning</strong>
                </IonLabel>
              </IonItem>

              <IonItem button={true} detail={true} href="/services/2">
                <IonIcon slot="start" icon={business} />
                <IonLabel>
                  <strong>Landscaping</strong>
                </IonLabel>
              </IonItem>
            </IonList>
          </Route>
          </IonRouterOutlet>
          

         

      </IonContent>
    </IonPage>
  );
};

export default Services;