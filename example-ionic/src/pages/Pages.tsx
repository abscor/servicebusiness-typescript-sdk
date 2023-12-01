import React, { useState } from 'react';
import { IonContent, IonPage, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import { business } from 'ionicons/icons';
import SectionHeader from '../components/SectionHeader';
import FormBuilder from '../components/FormBuilder';
import ItemList from '../components/ItemList';

const Pages: React.FC = () => {
  const [active, setActive] = useState(true)
  const [name, setName] = useState('How to clean your carpets')
  const [description, setDescription] = useState('How to clean your carpets')
  const [slug, setSlug] = useState('how-to-clean-your-carpets')
  const [displayOrder, setDisplayOrder] = useState(1)
  const [enableSchemaOrgArticleObject, setEnableSchemaOrgArticleObject] = useState(true)
  const [showInsuranceCompanyWidget, setShowInsuranceCompanyWidget] = useState(true)
  const [image, setImage] = useState('https://via.placeholder.com/450x300')
  const [body, setBody] = useState('How to clean your carpets')
  const [keywordTargeting, setKeywordTargeting] = useState(['carpet cleaning', 'carpet cleaner'])

  return (
    <IonPage>
      <SectionHeader title={'Pages'} />
      <IonContent>
        <IonRouterOutlet>
          <Route path="/pages/:pageId">
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
                name: 'Enable Schema.org Article Object',
                type: 'checkbox',
                value: enableSchemaOrgArticleObject,
                setValue: setEnableSchemaOrgArticleObject,
              },
              {
                name: 'Show Insurance Company Widget',
                type: 'checkbox',
                value: showInsuranceCompanyWidget,
                setValue: setShowInsuranceCompanyWidget,
              },
              {
                name: 'Image',
                type: 'image',
                value: image,
                setValue: setImage,
              },
              {
                name: 'Body',
                type: 'textarea',
                value: body,
                setValue: setBody,
              },
              {
                name: 'Keyword Targeting',
                type: 'text',
                value: keywordTargeting.join(', '),
                setValue: (value: string) => setKeywordTargeting(value.split(', ')),
              },
            ]} />
          </Route>
          <Route exact path="/pages">
            <ItemList items={[
              {
                name: 'How to clean your carpets',
                icon: business,
                href: '/pages/1',
              },
              {
                name: 'Sofa cleaning in New York City',
                icon: business,
                href: '/pages/2',
              },
            ]} />
          </Route>
          </IonRouterOutlet>
      </IonContent>
    </IonPage>
  );
};

export default Pages;