// a Section header component

import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import { add, chevronBack, chevronForward } from 'ionicons/icons';

interface ContainerProps {
  title: string;
}

const SectionHeader: React.FC<ContainerProps> = ({ title }) => {
    const [website, setWebsite] = useState('myhvaccompany.com');
  return (
    <IonHeader>
    <IonToolbar>
      <IonButton
        slot="start"
        fill="clear"
        onClick={() => {
          window.history.back();
        }}
      >
        <IonIcon icon={chevronBack} />
      </IonButton>
      
      <IonItem>
        <IonLabel>Website</IonLabel>
        <IonSelect value={website} placeholder="Select One" onIonChange={e => {
          setWebsite(e.detail.value)
          document.location.href = '/websites/general';
        }}>
          <IonSelectOption value="myhvaccompany.com">myhvaccompany.com</IonSelectOption>
          <IonSelectOption value="land-scaper.com">land-scaper.com</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonButton
        slot="end"
        fill="clear"
        href="/websites/general?new=true"
      >
        <IonIcon icon={add} />
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