// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { logoApple, logoGoogle } from 'ionicons/icons';

const LoginPassword: React.FC = () => {
  const loggedIn = false;
  const [password, setPassword] = useState('');
  const [resendCodeTimer, setResendCodeTimer] = useState(4);

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
        Enter your password
        </IonTitle>
        <IonLabel>Email</IonLabel>
        <br />
        <IonLabel>discobeta@gmail.com</IonLabel>
        <br />
        <br />
      

        <IonInput fill="outline" placeholder="Password" value={password} onIonChange={(event) => setOtp(event.detail.value)} />
        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
        <a href='/forgot-password'>Forgot Password?</a>  
        </div>
        <IonButton expand="block" 
            href='/dashboard-home/'
        >Sign in</IonButton>
        

        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >
        <a href='/login-otp'>Enter secure code instead</a>  
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPassword;