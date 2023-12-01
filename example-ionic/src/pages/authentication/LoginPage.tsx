import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonIcon, IonCardHeader, IonCardSubtitle, IonCard, IonItemDivider, IonToast } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { logoApple, logoGoogle } from 'ionicons/icons';
import AppInfo from '../../components/AppInfo';
import { getItem, setItem } from '../../lib/storage';
import { sdk } from '../../lib/sdk.client';
import { LOCAL_STORAGE_EMAIL_KEY_NAME, LOCAL_STORAGE_TOKEN_KEY_NAME } from '../../lib/config';

const LoginPage: React.FC = () => {

  const [email, setEmail] = useState<string>();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const token = getItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const login = () => {
    // alert(document.location.href)
    if (email) {
      sdk.signinOrRegisterRequestForCode({emailAddress: email}).then((response) => {
        // alert('response' + JSON.stringify(response));
        if (response?.signinOrRegisterRequestForCode?.data) {
          setItem(LOCAL_STORAGE_EMAIL_KEY_NAME, email);
          document.location.href = '/login-otp?email=' + email;
        } else {
          setShowErrorToast(true);
          setErrorMessage('Invalid email address');
        }
      }).catch((error) => {
        // alert(error)
        console.error(email);
        setShowErrorToast(true);
        setErrorMessage("Unable to send email");
      }
      );
    } else {
      console.error('No email address provided');
      setShowErrorToast(true);
      setErrorMessage('No email address provided');
    }
  }

  if (loggedIn) {
    return <Redirect to="/dashboard-home" />;
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
        <IonCardHeader>Sign in or create an account</IonCardHeader>
        <IonCardSubtitle>Unlock a world of business with one account across Plummy and Service Business.</IonCardSubtitle>
        <IonItemDivider style={{ '--background': 'none' }} />
        <IonButton expand="block" fill="outline">
            <IonIcon slot="start" icon={logoGoogle} 
                            style={{
                                position: 'absolute',
                                left: '5px',
                            }}
            />
            Sign in with Google
        </IonButton>
        <IonCardHeader>or enter your email address below</IonCardHeader>
        <IonInput fill="outline" placeholder="email" value={email} onIonChange={(event) => setEmail(event.detail.value)} />
        <IonButton expand="block" 
            onClick={login}
        >Continue</IonButton>
        <IonCardHeader>or use one of the options below</IonCardHeader>
        <IonButton expand="block" fill="outline">
            <IonIcon slot="start" icon={logoApple} 
                style={{
                    position: 'absolute',
                    left: '5px',
                }}
            />
            Sign in with Apple
        </IonButton>
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

export default LoginPage;