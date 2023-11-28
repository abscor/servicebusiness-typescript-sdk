// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import InputCheckbox from '../components/InputCheckbox';
import InputText from '../components/InputText';
import InputTextarea from '../components/InputTextarea';
import InputImage from '../components/InputImage';

const FAQ: React.FC = ({}) => {
  const [active, setActive] = useState(true);
  const [name, setName] = useState('How long does it take to clean my carpets?');
  const [questions, setQuestions] = useState([]);

  return (
    
      <IonContent className="ion-padding">

            <InputCheckbox
              label="Active"
              value={active}
              onChange={(e: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => setActive(e.detail.checked)}
              helpText="Whether this FAQ will be displayed on the website"
            />

            <InputText
              label="Name"
              value={name}
              onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setName(e.detail.value!)}
                  helpText="The name of the FAQ that the business services"
                />

                {/* each question is a question and an answer */}
                {/* the question is a string */}
                {/* the answer is a string */}

                {/* there is a list of questions */}

                {/* list of available questions */}
                <IonSelect
                  interface="popover"
                  value={questions}
                  onIonChange={(e: { detail: { value: string[]; }; }) => setQuestions(e.detail.value)}
                >
                <IonSelectOption value="How long does it take to clean my carpets?">How long does it take to clean my carpets?</IonSelectOption>
                <IonSelectOption value="How much does it cost to clean my carpets?">How much does it cost to clean my carpets?</IonSelectOption>
                <IonSelectOption value="How do I clean my carpets?">How do I clean my carpets?</IonSelectOption>
            </IonSelect>

            // add a new question
            <IonButton expand="block" routerLink="/login-password">Add Question</IonButton>



            <br />
          <IonButton expand="block" routerLink="/login-password">Save</IonButton>
          

      </IonContent>

);
};

export default FAQ;