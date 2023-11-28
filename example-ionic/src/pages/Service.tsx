// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonItem, IonBadge, IonNote, IonList, IonText, IonImg, IonCheckbox } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { book, build, business, chevronBack, chevronForward, help, listCircle, location, logoApple, logoGoogle, person, personCircleOutline, star, starHalf } from 'ionicons/icons';
import InputCheckbox from '../components/InputCheckbox';
import InputText from '../components/InputText';
import InputTextarea from '../components/InputTextarea';
import InputImage from '../components/InputImage';

const Service: React.FC = ({}) => {
  const [active, setActive] = useState(true);
  const [description, setDescription] = useState('We clean carpets');
  const [displayOrder, setDisplayOrder] = useState(1);
  const [enableSchemaOrgServiceObject, setEnableSchemaOrgServiceObject] = useState(true);
  const [htmlBlock1, setHtmlBlock1] = useState('We clean carpets');
  const [htmlBlock2, setHtmlBlock2] = useState('We clean carpets');
  const [image, setImage] = useState('https://via.placeholder.com/450x300');
  const [keywordTargeting, setKeywordTargeting] = useState(['carpet cleaning', 'carpet cleaner']);
  const [name, setName] = useState('Carpet cleaning');
  const [showInsuranceCompanyWidget, setShowInsuranceCompanyWidget] = useState(true);
  const [slug, setSlug] = useState('carpet-cleaning');

  return (
    
      <IonContent className="ion-padding">

<InputCheckbox
              label="Active"
              value={true}
              onChange={(e: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setActive(e.detail.checked)}
              helpText="Whether this service will be displayed on the website"
            />

            <InputText
              label="Name"
              value={name}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setName(e.detail.value!)}
              helpText="The name of the service that the business provides"
            />

            <InputText
              label="Description"
              value={description}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setDescription(e.detail.value!)}
              helpText="The description of the service"
            />

            <InputText
              label="Slug"
              value={slug}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setSlug(e.detail.value!)}
              helpText="The URL slug of the service"
            />

            <InputText
              label="Display Order"
              type="number"
              value={displayOrder}
              onChange={(e: { detail: { value: string; }; }) => setDisplayOrder(parseInt(e.detail.value!, 10))}
              helpText="The order of displaying this service. Higher priority means it will be displayed first"
            />

            <InputCheckbox
              label="Enable Schema.org Service Object"
              value={true}
              onChange={(e: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setEnableSchemaOrgServiceObject(e.detail.checked)}
              helpText="This indicates whether this site will use the Service object"
            />

            <InputCheckbox
              label="Show Insurance Company Widget"
              value={true}
              onChange={(e: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setShowInsuranceCompanyWidget(e.detail.checked)}
              helpText="This indicates whether this service will display the Insurance company widget"
            />

            <InputTextarea
              label="HTML Block 1"
              value={htmlBlock1}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setHtmlBlock1(e.detail.value!)}
              helpText="HTML (markup) block 1)"
            />

            <InputTextarea
              label="HTML Block 2"
              value={htmlBlock2}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setHtmlBlock2(e.detail.value!)}
              helpText="HTML (markup) block 2)"
            />

            <InputImage
              label="Image"
              value={image}
              onChange={setImage}
              previewWidth="450px"
              previewHeight="300px"
              removeButtonLabel="Remove Image"
            />

          <br />
          <IonButton expand="block" routerLink="/login-password">Save</IonButton>
          

      </IonContent>

);
};

export default Service;