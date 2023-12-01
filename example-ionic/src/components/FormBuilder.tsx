import React from 'react';
import { IonButton, IonIcon, IonItem, IonContent } from '@ionic/react';
import { addCircleOutline, trashBinOutline } from 'ionicons/icons';
import InputImage from './InputImage';
import InputPhonenumber from './InputPhonenumber';
import InputText from './InputText';
import InputTextarea from './InputTextarea';
import InputCheckbox from './InputCheckbox';
import InputList from './InputList';

type Item = {
  name: string;
  type: string;
  value: string | boolean | number | any[];
  setValue?: any;
}

interface ContainerProps {
  fields?: Item[];
}

const FormBuilder: React.FC<ContainerProps> = ({ fields }) => {
    
  return (
    <IonContent className="ion-padding">
    {fields ? fields.map((field, index) => (
      <>
      {field.type === 'text' && (
        <InputText
          label={field.name}
          value={field.value as string}
          onChange={field.setValue}
          required={true}
          type='text'
          placeholder={field.name}
          disabled={false}
          helpText=''
        />
      )}
      {field.type === 'textarea' && (
        <InputTextarea
          label={field.name}
          value={field.value as string}
          onChange={field.setValue}
          required={true}
          placeholder={field.name}
          disabled={false}
          helpText=''
        />
      )}
      {field.type === 'image' && (
        <InputImage
          label={field.name}
          value={field.value as string}
          onChange={field.setValue}
          required={true}
        />
      )}
      {field.type === 'phonenumber' && (
        <InputPhonenumber
          label={field.name}
          value={field.value as string}
          onChange={field.setValue}
          required={true}
          placeholder={field.name}
          disabled={false}
        />
      )}
      {field.type === 'number' && (
        <InputText
          label={field.name}
          value={field.value as string}
          onChange={field.setValue}
          required={true}
          type='number'
          placeholder={field.name}
          disabled={false}
          helpText=''
        />
      )}
      {field.type === 'email' && (
        <InputText
          label={field.name}
          value={field.value as string}
          onChange={field.setValue}
          required={true}
          type='email'
          placeholder={field.name}
          disabled={false}
          helpText=''
        />
      )}
      {field.type === 'phone' && (
        <InputText
          label={field.name}
          value={field.value as string}
          onChange={field.setValue}
          required={true}
          type='tel'
          placeholder={field.name}
          disabled={false}
          helpText=''
        />
      )}
      {field.type === 'checkbox' && (
        <InputCheckbox
          label={field.name}
          value={field.value as boolean}
          onChange={field.setValue}
          placeholder={field.name}
          disabled={false}
          helpText=''
        />
      )}
      {field.type === 'list' && (
        <InputList
            label={field.name}
            onChange={field.setValue}
            required={true}
            type='text'
            placeholder={field.name}
            disabled={false}
            helpText=''
            items={field.value as any[]} value={''}        />
      )}
      </>
    )) : (
      <></>
    )}

      <IonItem 
      color="dark"
      lines="none" 
      style={{
        border: '1px solid #000000',
        marginTop: '20px',
        bottom: '0px',
        width: '100%',
        borderRadius: '10px',
      }}>
        <IonButton color="light" expand="block" fill="clear" size='small' slot="start">
          <IonIcon slot="start" icon={trashBinOutline} />
          Delete record
        </IonButton>
        
        <IonButton color="light" expand="block" fill="clear" size='small' slot="end">
          <IonIcon slot="start" icon={addCircleOutline} />
          Save
        </IonButton>
      </IonItem>

    </IonContent>
  );
}

export default FormBuilder;