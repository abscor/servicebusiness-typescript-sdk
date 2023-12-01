import React, { useState } from 'react';
import { IonContent, IonPage, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import { business } from 'ionicons/icons';
import SectionHeader from '../components/SectionHeader';
import ItemList from '../components/ItemList';
import FormBuilder from '../components/FormBuilder';

const FAQs: React.FC = () => {
  const loggedIn = false;
  const [active, setActive] = useState(true)
  const [name, setName] = useState('How to clean your carpets')
  const [questions, setQuestions] = useState([
    { id: 1, question: 'How long does it take to clean my carpets?', answer: 'It takes about 2 hours to clean your carpets' },
    { id: 2, question: 'Do you clean carpets?', answer: 'Yes, we clean carpets' },
  ])

  return (
    <IonPage>
      <SectionHeader title={'FAQs'} />
      <IonContent>
        <IonRouterOutlet>
          <Route path="/faqs/:faqId">

          <FormBuilder fields={[
            {
              name: 'Active',
              type: 'checkbox',
              value: active,
              setValue: setActive,
            },
            {
              name: 'Name',
              type: 'text',
              value: name,
              setValue: setName,
            },
            {
              name: 'Questions',
              type: 'list',
              value: questions,
              setValue: setQuestions,
            },
          ]} />
          </Route>
          <Route exact path="/faqs">

            <ItemList items={[
              {
                icon: business,
                name: 'Carpet cleaning FAQ',
                href: '/faqs/1'
              },
              {
                icon: business,
                name: 'Landscaping FAQ',
                href: '/faqs/2'
              },
            ]} />

          </Route>
          </IonRouterOutlet>
      </IonContent>
    </IonPage>
  );
};

export default FAQs;