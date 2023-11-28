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

const Page: React.FC = ({}) => {  /** This indicates whether this page is active and available */
// active: Scalars['Boolean']['output'];
// areaPages: Array<AreaObject>;
// /** The HTML markup of the page */
// body: Scalars['String']['output'];
// created: Scalars['DateTime']['output'];
// /** A brief text description of the page */
// description: Scalars['String']['output'];
// /** The order of displaying this service. Higher priority means it will be displayed first. */
// displayOrder: Scalars['Int']['output'];
// /** This indicates whether this page will use the Article object. */
// enableSchemaOrgArticleObject: Scalars['Boolean']['output'];
// id: Scalars['ID']['output'];
// /** Min size (450 x 300)px */
// image: Scalars['String']['output'];
// keywordTargeting?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
// metadata?: Maybe<Scalars['JSONString']['output']>;
// /** The name of the page that the business provides. */
// name: Scalars['String']['output'];
// pk?: Maybe<Scalars['ID']['output']>;
// servicePages: Array<ServiceObject>;
// /** This indicates whether this page will display the Insurance company widget. */
// showInsuranceCompanyWidget: Scalars['Boolean']['output'];
// /** The URL slug of the page */
// slug?: Maybe<Scalars['String']['output']>;
  const [active, setActive] = useState(true);
  const [body, setBody] = useState('John and his team did a great job cleaning my carpets');
  const [description, setDescription] = useState('John and his team did a great job cleaning my carpets');
  const [displayOrder, setDisplayOrder] = useState(1);
  const [enableSchemaOrgArticleObject, setEnableSchemaOrgArticleObject] = useState(true);
  const [image, setImage] = useState('https://via.placeholder.com/450x300');
  const [keywordTargeting, setKeywordTargeting] = useState(['carpet cleaning', 'rug cleaning']);
  const [name, setName] = useState('Great service');
  const [showInsuranceCompanyWidget, setShowInsuranceCompanyWidget] = useState(true);
  const [slug, setSlug] = useState('great-service');
  


  return (
    
      <IonContent className="ion-padding">

            <InputCheckbox
              label="Active"
              value={true}
              onChange={(e: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setActive(e.detail.checked)}
              helpText="Whether this article will be displayed on the website"
            />

            <InputText
              label="Name"
              value={name}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setName(e.detail.value!)}
              helpText="The name of the article that the business services"
            />

            <InputText
              label="Description"
              value={description}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setDescription(e.detail.value!)}
              helpText="A short description of the article"
            />

            <InputText
              label="Slug"
              value={slug}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setSlug(e.detail.value!)}
              helpText="The URL slug of the article"
            />

            <InputText
              label="Display Order"
              type="number"
              value={displayOrder}
              onChange={(e: { detail: { value: string; }; }) => setDisplayOrder(parseInt(e.detail.value!, 10))}
              helpText="The order of displaying this article. Higher priority means it will be displayed first"
            />

            <InputCheckbox
              label="Enable Schema.org Article Object"
              value={enableSchemaOrgArticleObject}
              onChange={(e: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setEnableSchemaOrgArticleObject(e.detail.checked)}
              helpText="This indicates whether this site will use the Article object"
            />

            <InputCheckbox
              label="Show Insurance Company Widget"
              value={showInsuranceCompanyWidget}
              onChange={(e: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setShowInsuranceCompanyWidget(e.detail.checked)}
              helpText="This indicates whether this site will display the Insurance company widget"
            />

            <InputImage
              label="Image"
              value={image}
              onChange={setImage}
              previewWidth="450px"
              previewHeight="300px"
              removeButtonLabel="Remove Image"
            />

            <InputTextarea
              label="Body"
              value={body}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setBody(e.detail.value!)}
              helpText="The body of the article"
            />

            <InputText
              label="Keyword Targeting"
              value={keywordTargeting.join(', ')}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setKeywordTargeting(e.detail.value!.split(', '))}
              helpText="The keywords that this article is targeting"
            />




            <br />

          <IonButton expand="block" routerLink="/login-password">Save</IonButton>
          

      </IonContent>

);
};

export default Page;