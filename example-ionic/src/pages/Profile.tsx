// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonItem, IonBadge, IonNote, IonList, IonText } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { book, build, business, chevronBack, chevronForward, help, listCircle, location, logoApple, logoGoogle, person, personCircleOutline, star, starHalf } from 'ionicons/icons';
import InputText from '../components/InputText';

const Profile: React.FC = () => {
  const loggedIn = false;
  const [firstname, setFirstname] = useState('Danny');
  const [lastname, setLastname] = useState('Devito');
  const [phonenumber, setPhonenumber] = useState('(646) 441-1234');
  const [email, setEmail] = useState('dannyd@gmail.com');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton
            slot="start"
            fill="clear"
            href="/dashboard-home"
          >
            <IonIcon icon={chevronBack} />
          </IonButton>
          <IonTitle
            style={{
              textAlign: 'center'
            }}
          >Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        

          {/* <IonItem>
            <IonLabel position="floating">First Name</IonLabel>
            <IonInput type="text" value={firstname}></IonInput>
          </IonItem> */}
          <InputText
            label="First Name"
            value={firstname}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setFirstname(e.detail.value)}
            required={false}
            type="text"
            placeholder="First Name"
            disabled={false}
          />


          {/* <IonItem>
            <IonLabel position="floating">Last Name</IonLabel>
            <IonInput type="text" value={lastname}></IonInput>
          </IonItem> */}
          <InputText
            label="Last Name"
            value={lastname}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setLastname(e.detail.value)}
            required={false}
            type="text"
            placeholder="Last Name"
            disabled={false}
          />

          {/* <IonItem>
            <IonLabel position="floating">Phone Number</IonLabel>
            <IonInput type="text" value={phonenumber}></IonInput>
          </IonItem> */}
          <InputText
            label="Phone Number"
            value={phonenumber}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setPhonenumber(e.detail.value)}
            required={false}
            type="text"
            placeholder="Phone Number"
            disabled={false}
          />

          {/* <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="text" value={email}></IonInput>
          </IonItem> */}
          <InputText
            label="Email"
            value={email}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setEmail(e.detail.value)}
            required={false}
            type="text"
            placeholder="Email"
            disabled={false}
          />

          <br />
          <IonButton expand="block" routerLink="/login-password">Save</IonButton>
          <br />
          <br />
          <IonButton expand="block" routerLink="/set-password">Set Password</IonButton>

         

      </IonContent>
    </IonPage>
  );
};

export default Profile;