// A simple input textarea component
// Props:
// - label: string
// - value: string
// - onChange: function
// - required: boolean
// - placeholder: string
// - disabled: boolean
// - helpText: string

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
      <IonTextarea value={value} onIonChange={onChange} required={required} placeholder={placeholder} disabled={disabled}></IonTextarea>
      <small>{helpText}</small>
    </IonItem>
  );
};

export default InputTextarea;