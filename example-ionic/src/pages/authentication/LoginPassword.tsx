import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonCard, IonCardHeader, IonItemDivider, IonCardSubtitle } from '@ionic/react';
import AppInfo from '../../components/AppInfo';

const LoginPassword: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          style={{
            '--background': '#3880ff',
            '--ion-toolbar-background': '#3880ff',
            '--color': 'white',
          }}
        >
          <IonTitle>Please sign in</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard
            style={{
                boxShadow: 'none',
                textAlign: 'center',
            }}
        >
        <IonCardHeader>Enter your password</IonCardHeader>
        <IonItemDivider style={{ '--background': 'none' }} />
        <IonLabel>Email</IonLabel>
        <br />
        <IonLabel>discobeta@gmail.com</IonLabel>
        <br />
        <br />
        <IonInput fill="outline" placeholder="Password" onIonChange={(event) => setOtp(event.detail.value)} />
        <IonButton expand="block" fill="outline"
            href='/dashboard-home/'
        >Continue</IonButton>
        <IonItemDivider style={{ '--background': 'none' }} />
        <IonCardSubtitle>
          <a href='/login-otp'>Enter secure code instead</a>
        </IonCardSubtitle>
        <IonItemDivider style={{ '--background': 'none' }} />
        <IonCardSubtitle>
          <a href='/login'>Sign in with a different email</a>
        </IonCardSubtitle>
        <AppInfo />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LoginPassword;