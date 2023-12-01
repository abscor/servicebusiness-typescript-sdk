import React, { useState } from 'react';
import { IonContent, IonPage, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import { star, starHalf } from 'ionicons/icons';
import SectionHeader from '../components/SectionHeader';
import FormBuilder from '../components/FormBuilder';
import ItemList from '../components/ItemList';

const Reviews: React.FC = () => {
  const [active, setActive] = useState(true)
  const [title, setTitle] = useState('5 Star - Eric from Brooklyn, NY')
  const [body, setBody] = useState('They did a great job cleaning my carpets')
  const [personName, setPersonName] = useState('Eric')
  const [personZipCode, setPersonZipCode] = useState('11201')
  const [rating, setRating] = useState(5)
  const [personImage, setPersonImage] = useState('https://via.placeholder.com/450x300')

  return (
    <IonPage>
      <SectionHeader title={'Reviews'} />
      <IonContent>
        <IonRouterOutlet>
          <Route path="/reviews/:reviewId">
            <FormBuilder fields={[
              {
                name: 'Active',
                type: 'checkbox',
                value: active,
                setValue: setActive,
              },
              {
                name: 'Title',
                type: 'text',
                value: title,
                setValue: setTitle,
              },
              {
                name: 'Body',
                type: 'textarea',
                value: body,
                setValue: setBody,
              },
              {
                name: 'Person Name',
                type: 'text',
                value: personName,
                setValue: setPersonName,
              },
              {
                name: 'Person Zip Code',
                type: 'text',
                value: personZipCode,
                setValue: setPersonZipCode,
              },
              {
                name: 'Rating',
                type: 'number',
                value: rating,
                setValue: setRating,
              },
              {
                name: 'Person Image',
                type: 'image',
                value: personImage,
                setValue: setPersonImage,
              },
            ]} />

          </Route>
          <Route exact path="/reviews">
            <ItemList items={[
              {
                name: '5 Star - Eric from Brooklyn, NY',
                icon: star,
                href: '/reviews/1',
              },
              {
                name: '3 Star - John from Queens, NY',
                icon: starHalf,
                href: '/reviews/2',
              },
            ]} />
          </Route>
          </IonRouterOutlet>
      </IonContent>
    </IonPage>
  );
};

export default Reviews;