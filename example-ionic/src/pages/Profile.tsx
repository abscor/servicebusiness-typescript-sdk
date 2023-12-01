import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonItemDivider } from '@ionic/react';
import { chevronBack} from 'ionicons/icons';
import FormBuilder from '../components/FormBuilder';

const Profile: React.FC = () => {
  const [firstname, setFirstname] = useState('Danny');
  const [lastname, setLastname] = useState('Devito');
  const [phonenumber, setPhonenumber] = useState('(646) 441-1234');
  const [email, setEmail] = useState('dannyd@gmail.com');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton
            slot="start"
            fill="clear"
            href="/dashboard-home"
          >
            <IonIcon icon={chevronBack} />
          </IonButton>
          <IonTitle
            style={{
              textAlign: 'center'
            }}
          >Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <FormBuilder fields={[
            {
              name: 'First Name',
              type: 'text',
              value: firstname,
              setValue: setFirstname,
            },
            {
              name: 'Last Name',
              type: 'text',
              value: lastname,
              setValue: setLastname,
            },
            {
              name: 'Phone Number',
              type: 'phonenumber',
              value: phonenumber,
              setValue: setPhonenumber,
            },
            {
              name: 'Email',
              type: 'email',
              value: email,
              setValue: setEmail,
            },
          ]} />

      </IonContent>
    </IonPage>
  );
};

export default Profile;