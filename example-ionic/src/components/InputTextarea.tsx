import React from 'react';
import { IonItem, IonLabel, IonTextarea } from '@ionic/react';

interface ContainerProps {
  label: string;
  value: string;
  onChange: any;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  helpText?: string;
}

const InputTextarea: React.FC<ContainerProps> = ({ label, value, onChange, required, placeholder, disabled, helpText }) => {
  return (
    <IonItem>
      <IonLabel position="floating">{label}</IonLabel>
      <IonTextarea value={value} onIonChange={
        (event) => {
          let val = event.detail.value ? event.detail.value : '';
          onChange(val);
        }
      } required={required} placeholder={placeholder} disabled={disabled}></IonTextarea>
      <small>{helpText}</small>
    </IonItem>
  );
};

export default InputTextarea;