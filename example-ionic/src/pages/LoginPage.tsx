// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonCardHeader } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { logoApple, logoGoogle } from 'ionicons/icons';

const LoginPage: React.FC = () => {
  const loggedIn = false;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (loggedIn) {
    return <Redirect to="/my/entries" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle
            style={{
                marginTop: '20px',
              textAlign: 'center'
            }}
          ></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle
            style={{
                marginLeft: '-20px',
                marginBottom: '20px',
            }}
        >
        Sign in or create an account
        </IonTitle>
        <IonLabel>Unlock a world of business with one account across Plummy and Service Business.</IonLabel>
        <br />
        <br />
        <IonButton routerLink="/my/entries" expand="block">
            <IonIcon slot="start" icon={logoGoogle} 
                            style={{
                                position: 'absolute',
                                left: '5px',
                            }}
            />
            Sign in with Google
        </IonButton>
        
        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >or</div>

        <IonInput fill="outline" placeholder="email" value={email} onIonChange={(event) => setEmail(event.detail.value)} />

        <IonButton expand="block" 
            href='/login-otp/'
        >Continue</IonButton>
        
        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >Other options</div>
        <IonButton routerLink="/my/entries" expand="block">
            <IonIcon slot="start" icon={logoApple} 
                style={{
                    position: 'absolute',
                    left: '5px',
                }}
            />
            Sign in with Apple
        </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;