// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonItem, IonBadge, IonNote, IonList, IonText } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { book, build, business, chevronBack, chevronForward, help, listCircle, location, logoApple, logoGoogle, person, personCircleOutline, star, starHalf } from 'ionicons/icons';

const SetPassword: React.FC = () => {
  const loggedIn = false;
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton
            slot="start"
            fill="clear"
            href="/profile"
          >
            <IonIcon icon={chevronBack} />
          </IonButton>
          <IonTitle
            style={{
              textAlign: 'center'
            }}
          >Set Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value={password}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput type="password" value={confirmpassword}></IonInput>
          </IonItem>

          <br />
          <IonButton expand="block" routerLink="/login-password">Save</IonButton>

         

      </IonContent>
    </IonPage>
  );
};

export default SetPassword;