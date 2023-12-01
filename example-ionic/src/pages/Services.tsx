import React, { useState } from 'react';
import { IonContent, IonPage, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import { business } from 'ionicons/icons';
import SectionHeader from '../components/SectionHeader';
import ItemList from '../components/ItemList';
import FormBuilder from '../components/FormBuilder';

const Services: React.FC = () => {

  const [active, setActive] = useState(true);
  const [description, setDescription] = useState('We clean carpets');
  const [displayOrder, setDisplayOrder] = useState(1);
  const [enableSchemaOrgServiceObject, setEnableSchemaOrgServiceObject] = useState(true);
  const [htmlBlock1, setHtmlBlock1] = useState('We clean carpets');
  const [htmlBlock2, setHtmlBlock2] = useState('We clean carpets');
  const [image, setImage] = useState('https://via.placeholder.com/450x300');
  const [name, setName] = useState('Carpet cleaning');
  const [showInsuranceCompanyWidget, setShowInsuranceCompanyWidget] = useState(true);
  const [slug, setSlug] = useState('carpet-cleaning');

  return (
    <IonPage>
      <SectionHeader title={'Services'} />
      <IonContent>
        <IonRouterOutlet>
          <Route path="/services/:serviceId">
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
              name: 'Image',
              type: 'image',
              value: image,
              setValue: setImage,
            },
            {
              name: 'Description',
              type: 'text',
              value: description,
              setValue: setDescription,
            },
            {
              name: 'Slug',
              type: 'text',
              value: slug,
              setValue: setSlug,
            },
            {
              name: 'Display Order',
              type: 'number',
              value: displayOrder,
              setValue: setDisplayOrder,
            },
            {
              name: 'Enable Schema.org Service Object',
              type: 'checkbox',
              value: enableSchemaOrgServiceObject,
              setValue: setEnableSchemaOrgServiceObject,
            },
            {
              name: 'Show Insurance Company Widget',
              type: 'checkbox',
              value: showInsuranceCompanyWidget,
              setValue: setShowInsuranceCompanyWidget,
            },
            {
              name: 'HTML Block 1',
              type: 'textarea',
              value: htmlBlock1,
              setValue: setHtmlBlock1,
            },
            {
              name: 'HTML Block 2',
              type: 'textarea',
              value: htmlBlock2,
              setValue: setHtmlBlock2,
            },
          ]} />
          </Route>
          <Route exact path="/services">
            <ItemList items={[
              {
                name: 'Carpet cleaning',
                icon: business,
                href: '/services/1',
              },
              {
                name: 'Landscaping',
                icon: business,
                href: '/services/2',
              },
            ]} />
          </Route>
          </IonRouterOutlet>
      </IonContent>
    </IonPage>
  );
};

export default Services;