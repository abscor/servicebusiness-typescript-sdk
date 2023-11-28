// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { logoApple, logoGoogle } from 'ionicons/icons';

const LoginOTP: React.FC = () => {
  const loggedIn = false;
  const [otp, setOtp] = useState('');
  const [resendCodeTimer, setResendCodeTimer] = useState(4);

  // start the timer
  setTimeout(() => {
    if (resendCodeTimer < 1) {
      setResendCodeTimer(<a href='/login-otp'>Resend code</a>);
    } else {
      // if is number
      if (!isNaN(resendCodeTimer)) {
        setResendCodeTimer(resendCodeTimer - 1);
      }
    }
  }, 1000);

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
        Let's confirm it's you
        </IonTitle>
        <IonLabel>Enter the secure code we sent to your email. Check junk mail if it's not in your inbox.</IonLabel>
        <br />
        <br />
      

        <IonInput fill="outline" placeholder="6-digit code" value={otp} onIonChange={(event) => setOtp(event.detail.value)} />

        <IonButton expand="block" 
            href='/dashboard-home/'
        >Continue</IonButton>
        
        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >{!isNaN(resendCodeTimer) ? "Resend code in " : ""} {resendCodeTimer} </div>
        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >
        <a href='/login-password'>Enter password instead</a>  
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginOTP;