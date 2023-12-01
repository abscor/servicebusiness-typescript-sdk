import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonCardTitle } from '@ionic/react';
import { addCircleOutline, chevronBack } from 'ionicons/icons';

interface ContainerProps {
  title: string;
  newLink?: string;
}

const SectionHeader: React.FC<ContainerProps> = ({ title, newLink }) => {
    const [website, setWebsite] = useState('myhvaccompany.com');
  return (
    
    <IonHeader>
    <IonToolbar
      style={{
        '--background': '#3880ff',
        '--ion-color-primary': '#fff'
      }}
    >
      <IonButton
        slot="start"
        fill="clear"
        onClick={() => {
          window.history.back();
        }}
      >
        <IonIcon icon={chevronBack} /> Back
      </IonButton>
      
      <IonCardTitle
        style={{
          margin: 'auto',
          width: '100%',
          fontSize: '20px',
          color: 'white',
        }}
      >
        {title}
      </IonCardTitle>
      <IonButton
        slot="end"
        fill="clear"
        href={newLink ? newLink : '/dashboard-home'}
      >
        <IonIcon icon={addCircleOutline} />
      </IonButton>
    </IonToolbar>
    <IonTitle style={{
      background: 'white',
      textAlign: 'center',
    }}>{title}</IonTitle>
  </IonHeader>
  );
};

export default SectionHeader;