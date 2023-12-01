import React, { useState } from 'react';
import { IonContent, IonPage, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import { location } from 'ionicons/icons';
import SectionHeader from '../components/SectionHeader';
import FormBuilder from '../components/FormBuilder';
import ItemList from '../components/ItemList';

const Areas: React.FC = () => {
  const [active, setActive] = useState(true)
  const [name, setName] = useState('Brooklyn, NY')
  const [description, setDescription] = useState('We clean carpets')
  const [slug, setSlug] = useState('brooklyn-ny')
  const [displayOrder, setDisplayOrder] = useState(1)
  const [enableSchemaOrgAreaServedObject, setEnableSchemaOrgAreaServedObject] = useState(true)
  const [showInsuranceCompanyWidget, setShowInsuranceCompanyWidget] = useState(true)
  const [htmlBlock1, setHtmlBlock1] = useState('We clean carpets')
  const [htmlBlock2, setHtmlBlock2] = useState('We clean carpets')
  const [image, setImage] = useState('https://via.placeholder.com/450x300')
  const [zipCode, setZipCode] = useState('11201')
  const [keywordTargeting, setKeywordTargeting] = useState(['carpet cleaning', 'carpet cleaner'])
  return (
    <IonPage>
      <SectionHeader title={'Locations'} />
      <IonContent>
        <IonRouterOutlet>
          <Route path="/areas/:areaId">
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
                name: 'Enable Schema.org Area Object',
                type: 'checkbox',
                value: enableSchemaOrgAreaServedObject,
                setValue: setEnableSchemaOrgAreaServedObject,
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
              {
                name: 'Image',
                type: 'image',
                value: image,
                setValue: setImage,
              },
              {
                name: 'Zip Code',
                type: 'text',
                value: zipCode,
                setValue: setZipCode,
              },
              {
                name: 'Keyword Targeting',
                type: 'text',
                value: keywordTargeting.join(', '),
                setValue: (value: string) => setKeywordTargeting(value.split(', ')),
              },
            ]} />
          </Route>
          <Route exact path="/areas">
            <ItemList items={[
              {
                name: 'Brooklyn, NY',
                icon: location,
                href: '/areas/1',
              },
              {
                name: 'Queens, NY',
                icon: location,
                href: '/areas/2',
              },
            ]} />
          </Route>
          </IonRouterOutlet>
      </IonContent>
    </IonPage>
  );
};

export default Areas;