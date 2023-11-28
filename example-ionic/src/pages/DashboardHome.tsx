// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonItem, IonBadge, IonNote, IonList, IonText } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { book, build, business, chevronForward, help, listCircle, location, logoApple, logoGoogle, person, personCircleOutline, star, starHalf } from 'ionicons/icons';

const DashboardHome: React.FC = () => {
  const loggedIn = false;
  const [otp, setOtp] = useState('');
  const [resendCodeTimer, setResendCodeTimer] = useState(4);

  // start the timer
  setTimeout(() => {
    if (resendCodeTimer < 1) {
      setResendCodeTimer(<a href='/login-password'>Resend code</a>);
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
              textAlign: 'center'
            }}
          >Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText
            style={{
                marginBottom: '20px',
                fontWeight: 'bold',
                fontSize: '20px',
            }}
        >Hi, ASAF</IonText>
        <br />
        <br />
        <IonLabel>discobeta@gmail.com</IonLabel>
        <IonBadge 
          style={{
            right: '0px',
            float: 'right',
          }}
          color="primary">Verified</IonBadge>

          <IonList inset={true}
            style={{
              marginLeft: '-20px',
              marginRight: '-20px',
            }}
          >
          <IonItem button={true} detail={true} href="/profile">
            <IonIcon slot="start" icon={person} />
            <IonLabel>
              <strong>Profile</strong>
            </IonLabel>
          </IonItem>

          <IonItem button={true} detail={true} href="/websites">
            <IonIcon slot="start" icon={business} />
            <IonLabel>
              <strong>Business Websites</strong>
            </IonLabel>
            <IonBadge 
              style={{
                right: '0px',
                float: 'right',
              }}
              color="light">2</IonBadge>
          </IonItem>

          <IonItem button={true} detail={true} href="/services">
            <IonIcon slot="start" icon={build} />
            <IonLabel>
              <strong>Services</strong>
            </IonLabel>
            <IonBadge 
              style={{
                right: '0px',
                float: 'right',
              }}
              color="light">3</IonBadge>

          </IonItem>

          <IonItem button={true} detail={true} href="/areas">
            <IonIcon slot="start" icon={location} />
            <IonLabel>
              <strong>Locations</strong>
            </IonLabel>
            <IonBadge
              style={{
                right: '0px',
                float: 'right',
              }}
              color="light">1</IonBadge>
          </IonItem>

          <IonItem button={true} detail={true} href="/reviews">
            <IonIcon slot="start" icon={star} />
            <IonLabel>
              <strong>Reviews</strong>
            </IonLabel>
            <IonBadge
              style={{
                right: '0px',
                float: 'right',
              }}
              color="light">3</IonBadge>
          </IonItem>

          <IonItem button={true} detail={true} href="/pages">
            <IonIcon slot="start" icon={book} />
            <IonLabel>
              <strong>Articles</strong>
            </IonLabel>
            <IonBadge
              style={{
                right: '0px',
                float: 'right',
              }}
              color="light">3</IonBadge>
          </IonItem>

          <IonItem button={true} detail={true} href="/faqs">
            <IonIcon slot="start" icon={help} />
            <IonLabel>
              <strong>FAQs</strong>
            </IonLabel>
            <IonBadge
              style={{
                right: '0px',
                float: 'right',
              }}
              color="light">9</IonBadge>
          </IonItem>

          </IonList>

        <div style={{
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center'
        }}>
          <a href='/login'>Sign out</a>
        </div>
        <div style={{
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center'
        }}>
          <img src="/public/plummy_logo.png" alt="Plummy logo"
            style={{
              width: '150px',
              
            }}
          />
        </div>
        <div style={{
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '12px',
        }}>
          Version: Plummy 2023.45 Build 4038
        </div>

        <div style={{
            marginTop: '20px',
            marginBottom: '20px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '12px',
        }}>
          © Copyright 2023 American Business Software.
          <br/>
          All rights reserved.
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DashboardHome;