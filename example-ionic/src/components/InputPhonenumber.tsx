import React from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';

function formatPhoneNumber(phoneNumberString: string) {
  let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  };
  return null
}

interface ContainerProps {
  label: string;
  value: string;
  onChange: any;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

const InputPhonenumber: React.FC<ContainerProps> = ({ label, value, onChange, required, placeholder, disabled }) => {
  return (
    <IonItem>
      <IonLabel position="floating">{label}</IonLabel>
      <IonInput value={formatPhoneNumber(value)} onIonChange={onChange} required={required} placeholder={placeholder} disabled={disabled}></IonInput>
    </IonItem>
  );
};

export default InputPhonenumber;