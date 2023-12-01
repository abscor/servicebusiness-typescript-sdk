import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonItem } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';

const SetPassword: React.FC = () => {
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