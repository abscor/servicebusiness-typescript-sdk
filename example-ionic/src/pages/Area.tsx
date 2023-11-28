// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonButton } from '@ionic/react';
import InputCheckbox from '../components/InputCheckbox';
import InputText from '../components/InputText';
import InputTextarea from '../components/InputTextarea';
import InputImage from '../components/InputImage';

const Area: React.FC = ({}) => {

  const [active, setActive] = useState(true);
  const [description, setDescription] = useState('We clean carpets');
  const [displayOrder, setDisplayOrder] = useState(1);
  const [enableSchemaOrgAreaServedObject, setEnableSchemaOrgAreaServedObject] = useState(true);
  const [htmlBlock1, setHtmlBlock1] = useState('We clean carpets');
  const [htmlBlock2, setHtmlBlock2] = useState('We clean carpets');
  const [image, setImage] = useState('https://via.placeholder.com/450x300');
  const [keywordTargeting, setKeywordTargeting] = useState(['carpet cleaning', 'carpet cleaner']);
  const [name, setName] = useState('Brooklyn, NY');
  const [showInsuranceCompanyWidget, setShowInsuranceCompanyWidget] = useState(true);
  const [slug, setSlug] = useState('brooklyn-ny');
  const [zipCode, setZipCode] = useState('11201');

  return (
    
      <IonContent className="ion-padding">

            <InputCheckbox
              label="Active"
              value={active}
              onChange={(e: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setActive(e.detail.checked)}
              helpText="Whether this area will be displayed on the website"
            />

            <InputText
              label="Name"
              value={name}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setName(e.detail.value!)}
              helpText="The name of the area that the business services"
            />

            <InputText
              label="Description"
              value={description}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setDescription(e.detail.value!)}
              helpText="The description of the area"
            />

            <InputText
              label="Slug"
              value={slug}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setSlug(e.detail.value!)}
              helpText="The URL slug of the area"
            />

            <InputText
              label="Display Order"
              type="number"
              value={displayOrder}
              onChange={(e: { detail: { value: string; }; }) => setDisplayOrder(parseInt(e.detail.value!, 10))}
              helpText="The order of displaying this area. Higher priority means it will be displayed first"
            />

            <InputCheckbox
              label="Enable Schema.org Area Object"
              value={enableSchemaOrgAreaServedObject}
              onChange={(e: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setEnableSchemaOrgAreaServedObject(e.detail.checked)}
              helpText="This indicates whether this site will use the areaServed object"
            />

            <InputCheckbox
              label="Show Insurance Company Widget"
              value={showInsuranceCompanyWidget}
              onChange={(e: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setShowInsuranceCompanyWidget(e.detail.checked)}
              helpText="This indicates whether this area will display the Insurance company widget"
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

            <InputText
              label="Zip Code"
              value={zipCode}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setZipCode(e.detail.value!)}
              helpText="The zip code of the area"
            />

            <InputText
              label="Keyword Targeting"
              value={keywordTargeting.join(', ')}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setKeywordTargeting(e.detail.value!.split(', '))}
              helpText="Keywords that this area will target"
            />

            <br />
          <IonButton expand="block" routerLink="/login-password">Save</IonButton>
          

      </IonContent>

);
};

export default Area;