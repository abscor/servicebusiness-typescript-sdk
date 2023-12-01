import React, { useEffect, useRef, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonCard, IonItemDivider, IonCardSubtitle, IonCardHeader, IonToast } from '@ionic/react';
import AppInfo from '../../components/AppInfo';
import { getItem, setItem } from '../../lib/storage';
import { sdk } from '../../lib/sdk.client';
import { LOCAL_STORAGE_EMAIL_KEY_NAME, LOCAL_STORAGE_TOKEN_KEY_NAME } from '../../lib/config';
import Countdown from '../../components/Countdown';
const LoginOTP: React.FC = () => {
  const emailAddress = new URLSearchParams(document.location.search).get('email');
  const [email, setEmail] = useState<any>(emailAddress);
  const [otp, setOtp] = useState<any>('');
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getResendCodeLink = () => {
    return (<a 
      style={{
        cursor: 'pointer',
      }}
      onClick={() => {
        if (email) {
          sdk.signinOrRegisterRequestForCode({emailAddress: email}).then((response) => {
            if (response.signinOrRegisterRequestForCode?.data) {
              setItem(LOCAL_STORAGE_EMAIL_KEY_NAME, email);
              document.location.href = '/login-otp?email=' + email;
            } else {
              console.error('No data returned from signinOrRegisterRequestForCode');
              setShowErrorToast(true);
              setErrorMessage('No data returned from signinOrRegisterRequestForCode');
            }
          }).catch((error) => {
            console.error(error);
            setShowErrorToast(true);
            setErrorMessage("Unable to send code");
          }
  
          );    
        } else {
          console.error('No email address provided');
          setShowErrorToast(true);
          setErrorMessage('No email address provided');
        }
    }
    }
    >Resend code</a>)
  }

  const sendCode = () => {
    if (email && otp) {
      sdk.signinOrRegisterWithCode({code: otp, emailAddress: email}).then((response) => {
        // check for errors
        if (response.signinOrRegisterWithCode?.errors) {
          console.error(response.signinOrRegisterWithCode.errors);
          setShowErrorToast(true);
          setErrorMessage("Unable to sign in with code");
          return;
        }
        if (response.signinOrRegisterWithCode?.data) {
          console.log("response", response);
          setItem(LOCAL_STORAGE_TOKEN_KEY_NAME, response.signinOrRegisterWithCode.data)
          document.location.href = '/dashboard-home';
        } else {
          console.error('No data returned from signinOrRegisterWithCode');
          setShowErrorToast(true);
          setErrorMessage("Unable to sign in with code");
        }
      }
      ).catch((error) => {
        console.error(error);
        setShowErrorToast(true);
        setErrorMessage("Unable to sign in with code");
      }
      );
    } else {
      console.error('No email address and/or code provided');
      setShowErrorToast(true);
      setErrorMessage("No email address and/or code provided");
    }
  }
  
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
        <IonCardHeader>Let's confirm it's you</IonCardHeader>
        <IonCardSubtitle>Enter the secure code we sent to your email. Check junk mail if it's not in your inbox.</IonCardSubtitle>
        <IonItemDivider style={{ '--background': 'none' }} />
        <IonCardSubtitle>Email address: {email}</IonCardSubtitle>
        <IonItemDivider style={{ '--background': 'none' }} />
        <IonInput 
          inputMode="numeric"
          maxlength={6}
          fill="outline" 
          placeholder="6-digit code" 
          value={otp} 
          onIonChange={(event) => setOtp(event.detail.value)} />
        <IonButton expand="block" fill="outline"
          onClick={sendCode}
        >Continue</IonButton>
        <IonItemDivider style={{ '--background': 'none' }} />
        <Countdown seconds={5} renderComponent={getResendCodeLink} />

        <IonItemDivider style={{ '--background': 'none' }} />
        <IonCardSubtitle>
          <a href='/login-password'>Enter password instead</a>  
        </IonCardSubtitle>
        <IonItemDivider style={{ '--background': 'none' }} />
        <IonCardSubtitle>
          <a href='/login'>Sign in with a different email</a>
        </IonCardSubtitle>
        <AppInfo />
        </IonCard>
      </IonContent>

            <IonToast
              isOpen={showErrorToast}
              onDidDismiss={() => setShowErrorToast(false)}
              message={errorMessage}
              duration={3000}
              color="danger"
            />

    </IonPage>
  );
};

export default LoginOTP;
