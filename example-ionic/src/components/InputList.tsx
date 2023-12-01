import React from 'react';
import { IonItem, IonLabel, IonInput, IonList } from '@ionic/react';

interface ContainerProps {
  label: string;
  value: string | number;
  onChange: any;
  required?: boolean;
  type?: 'text' | 'number' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'time' | 'date' | 'month' | 'week' | 'datetime-local';
  placeholder?: string;
  disabled?: boolean;
  helpText?: string;
  items?: any[];
}

const InputText: React.FC<ContainerProps> = ({ label, value, onChange, required, type, placeholder, disabled, helpText, items }) => {
  return (
    <IonItem>
      <IonLabel position="floating">{label}</IonLabel>
      <IonList>
        {items ? items.map((item, index) => (
          <IonItem key={index}>
            {JSON.stringify(item)}
          </IonItem>
        )) : ''}
      </IonList>
      <small>{helpText}</small>
    </IonItem>
  );
};

export default InputText;