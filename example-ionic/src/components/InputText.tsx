import React from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';

interface ContainerProps {
  label: string;
  value: string | number;
  onChange: any;
  required?: boolean;
  type?: 'text' | 'number' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'time' | 'date' | 'month' | 'week' | 'datetime-local';
  placeholder?: string;
  disabled?: boolean;
  helpText?: string;
}

const InputText: React.FC<ContainerProps> = ({ label, value, onChange, required, type, placeholder, disabled, helpText }) => {
  return (
    <IonItem>
      <IonLabel position="floating">{label}</IonLabel>
      <IonInput value={value} onIonChange={
        (event) => {
          let val = event.detail.value ? event.detail.value : '';
          onChange(val);
        }
      } required={required} type={type} placeholder={placeholder} disabled={disabled}></IonInput>
      <small>{helpText}</small>
    </IonItem>
  );
};

export default InputText;