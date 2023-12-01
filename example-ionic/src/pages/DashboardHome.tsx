import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonIcon, IonItem, IonBadge, IonList, IonText, IonCardSubtitle, IonItemDivider, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import { book, build, business, chevronForward, help, location, person, star } from 'ionicons/icons';
import AppInfo from '../components/AppInfo';
import { removeItem } from '../lib/storage';
import { LOCAL_STORAGE_TOKEN_KEY_NAME } from '../lib/config';

const DashboardHome: React.FC = () => {
  const [resendCodeTimer, setResendCodeTimer] = useState(4);

  // start the timer
  setTimeout(() => {
    if (resendCodeTimer < 1) {
      setResendCodeTimer(<a href='/login-password'>Resend code</a>);
    } else {
      if (!isNaN(resendCodeTimer)) {
        setResendCodeTimer(resendCodeTimer - 1);
      }
    }
  }, 1000);

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
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard
            style={{
              boxShadow: 'none',
              textAlign: 'center',
          }}
        >
        <IonText
            style={{
                marginBottom: '20px',
                fontWeight: 'bold',
                fontSize: '20px',
                textAlign: 'left'
            }}
        >Hi, ASAF</IonText>
        <IonItemDivider style={{ '--background': 'none' }} />
        <IonItem>
          <IonLabel>discobeta@gmail.com</IonLabel>
        <IonBadge 
          style={{
            right: '0px',
            float: 'right',
          }}
          color="primary">Verified</IonBadge>
        </IonItem>
        <IonItem>
        <IonCardSubtitle>Current website: myhvaccompany.com <IonIcon icon={chevronForward} color='primary' /></IonCardSubtitle>

        </IonItem>
        <IonItemDivider style={{ '--background': 'none' }} />

          <IonList inset={true}
            style={{
              marginLeft: '-20px',
              marginRight: '-10px',
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
            <IonBadge color="light">2</IonBadge>
          </IonItem>

          <IonItem button={true} detail={true} href="/services">
            <IonIcon slot="start" icon={build} />
            <IonLabel>
              <strong>Services</strong>
            </IonLabel>
            <IonBadge color="light">3</IonBadge>

          </IonItem>

          <IonItem button={true} detail={true} href="/areas">
            <IonIcon slot="start" icon={location} />
            <IonLabel>
              <strong>Locations</strong>
            </IonLabel>
            <IonBadge color="light">1</IonBadge>
          </IonItem>

          <IonItem button={true} detail={true} href="/reviews">
            <IonIcon slot="start" icon={star} />
            <IonLabel>
              <strong>Reviews</strong>
            </IonLabel>
            <IonBadge color="light">3</IonBadge>
          </IonItem>

          <IonItem button={true} detail={true} href="/pages">
            <IonIcon slot="start" icon={book} />
            <IonLabel>
              <strong>Articles</strong>
            </IonLabel>
            <IonBadge color="light">3</IonBadge>
          </IonItem>

          <IonItem button={true} detail={true} href="/faqs">
            <IonIcon slot="start" icon={help} />
            <IonLabel>
              <strong>FAQs</strong>
            </IonLabel>
            <IonBadge color="light">9</IonBadge>
          </IonItem>

          </IonList>

        <IonCardContent
            style={{
                textAlign: 'center',
            }}
        >
        <IonCardHeader>
          <a 
          href='/login'
          onClick={() => {
            removeItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
          }}
          
          >Sign out</a>
        </IonCardHeader>
        
        
        </IonCardContent>
        <AppInfo />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DashboardHome;