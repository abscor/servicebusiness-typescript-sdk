// A simple input checkbox component
// Props:
// - label: string
// - value: string
// - onChange: function
// - placeholder: string
// - disabled: boolean
// - helpText: string

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
      <IonLabel>{label} <small>({helpText})</small></IonLabel>
      <IonCheckbox checked={value} onIonChange={onChange} placeholder={placeholder} disabled={disabled}></IonCheckbox>
    </IonItem>
  );
};

export default InputCheckbox;