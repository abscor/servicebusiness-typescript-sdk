import React from 'react';
import { IonItem, IonLabel, IonCheckbox } from '@ionic/react';

interface ContainerProps {
  label: string;
  value: boolean;
  onChange: any;
  placeholder?: string;
  disabled?: boolean;
  helpText?: string;
}

const InputCheckbox: React.FC<ContainerProps> = ({ label, value, onChange, placeholder, disabled, helpText }) => {
  return (
    <IonItem>
      <IonLabel>{label} <small>{helpText ? `(${helpText})` : ''}</small></IonLabel>
      <IonCheckbox checked={value} onIonChange={
        (event) => {
          let val = event.detail.checked ? true : false;
          onChange(val);
        }
      } placeholder={placeholder} disabled={disabled}></IonCheckbox>
    </IonItem>
  );
};

export default InputCheckbox;