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

const Review: React.FC = ({}) => {
  // /** This indicates whether this review is active and visible to users */
  // active?: InputMaybe<Scalars['Boolean']['input']>;
  // /** The body of the review. max length 7500 */
  // body?: InputMaybe<Scalars['String']['input']>;
  // /** The order of displaying this review. Higher priority means it will be displayed first */
  // displayOrder?: InputMaybe<Scalars['Int']['input']>;
  // id: Scalars['ID']['input'];
  // /** Min size (450 x 300)px max length 100 */
  // personImage?: InputMaybe<Scalars['String']['input']>;
  // /** The name of the person that wrote the review. max length 200 */
  // personName?: InputMaybe<Scalars['String']['input']>;
  // /** The zip code of the person location. max length 5 */
  // personZipCode?: InputMaybe<Scalars['String']['input']>;
  // /** The rating of this review. (from 1 to 4.5 to 5) */
  // rating?: InputMaybe<Scalars['Int']['input']>;
  // /** A brief description of the review. max length 200 */
  // title?: InputMaybe<Scalars['String']['input']>;
  const [active, setActive] = useState(true);
  const [body, setBody] = useState('John and his team did a great job cleaning my carpets');
  const [displayOrder, setDisplayOrder] = useState(1);
  const [personImage, setPersonImage] = useState('https://via.placeholder.com/450x300');
  const [personName, setPersonName] = useState('Eric');
  const [personZipCode, setPersonZipCode] = useState('11201');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('Great service');
  


  return (
    
      <IonContent className="ion-padding">

<InputCheckbox
              label="Active"
              value={true}
              onChange={(e: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setActive(e.detail.checked)}
              helpText="Whether this area will be displayed on the website"
            />

            <InputText
              label="Title"
              value={title}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setTitle(e.detail.value!)}
              helpText="The title of the review"
            />

            <InputTextarea
              label="Body"
              value={body}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setBody(e.detail.value!)}
              helpText="The body of the review"
            />

            <InputText
              label="Person Name"
              value={personName}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setPersonName(e.detail.value!)}
              helpText="The name of the person that wrote the review"
            />

            <InputText
              label="Person Zip Code"
              value={personZipCode}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setPersonZipCode(e.detail.value!)}
              helpText="The zip code of the person location"
            />

            <InputText
              label="Rating"
              type="number"
              value={rating}
              onChange={(e: { detail: { value: string; }; }) => setRating(parseInt(e.detail.value!, 10))}
              helpText="The rating of this review. (from 1 to 4.5 to 5)"
            />

            <InputImage
              label="Person Image"
              value={personImage}
              onChange={setPersonImage}
              previewWidth="100px"
              previewHeight="100px"
              removeButtonLabel="Remove Image"
            />

            <br />

          <IonButton expand="block" routerLink="/login-password">Save</IonButton>
          

      </IonContent>

);
};

export default Review;