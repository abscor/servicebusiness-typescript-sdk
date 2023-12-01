import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonLabel, IonIcon, IonTabs, IonTabButton, IonRouterOutlet, IonTabBar } from '@ionic/react';
import { Route } from 'react-router-dom';
import { build, business, cog, listCircle } from 'ionicons/icons';
import SectionHeader from '../components/SectionHeader';
import ItemList from '../components/ItemList';
import FormBuilder from '../components/FormBuilder';
import { sdk } from '../lib/sdk.client';
import { WebsiteQuery, WebsitesQuery } from '../lib/sdk';

const Websites: React.FC = () => {
  const url = window.location.href;
  const isList = url.endsWith('/websites');
  
  // contact info
  const [businessName, setBusinessName] = useState('My HVAC Company');
  const [businessDescription, setBusinessDescription] = useState('We are a full service HVAC company serving the San Francisco Bay Area. We specialize in residential and commercial HVAC services, including installation, repair, and maintenance.' );
  const [businessLogo, setBusinessLogo] = useState('https://www.plummy.io/assets/img/logo.png');
  const [address1, setAddress1] = useState('123 Main St.');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('San Francisco');
  const [state, setState] = useState('CA');
  const [zipCode, setZipCode] = useState('94105');
  const [phoneNumber, setPhoneNumber] = useState('(415) 555-5555');
  const [emailAddress, setEmailAddress] = useState('team@abscorp.co');
  const [licenseNumber, setLicenseNumber] = useState('123456');
  const [insuranceNumber, setInsuranceNumber] = useState('123456');
  const [businessManagerPersonName, setBusinessManagerPersonName] = useState('John Smith');
  const [businessEINnumber, setBusinessEINNumber] = useState('123456');

  // design
  const [themeColor, setThemeColor] = useState('#3880ff');
  const [homepageBackground, setHomepageBackground] = useState('https://www.plummy.io/assets/img/logo.png');
  const [customHeaderCode, setCustomHeaderCode] = useState('');
  const [customFooterCode, setCustomFooterCode] = useState('');
  const [ctaHtml, setCtaHtml] = useState('');
  const [ctaButtonHtml, setCtaButtonHtml] = useState('');
  const [navbarMessageHtml, setNavbarMessageHtml] = useState('');
  const [navbarLink1Html, setNavbarLink1Html] = useState('');
  const [navbarLink2Html, setNavbarLink2Html] = useState('');
  const [navbarShowServices, setNavbarShowServices] = useState(3);
  const [navbarShowAreas, setNavbarShowAreas] = useState(3);
  const [navbarShowCtaButton, setNavbarShowCtaButton] = useState(true);
  const [footerMessageHtml, setFooterMessageHtml] = useState('');
  const [footerShowServices, setFooterShowServices] = useState(3);
  const [footerShowAreas, setFooterShowAreas] = useState(3);
  const [footerShowReviews, setFooterShowReviews] = useState(3);
  const [footerShowLicenseNumber, setFooterShowLicenseNumber] = useState(true);
  const [footerShowEmailAddress, setFooterShowEmailAddress] = useState(true);
  const [footerLink1Html, setFooterLink1Html] = useState('');
  const [footerLink2Html, setFooterLink2Html] = useState('');
  const [footerLink3Html, setFooterLink3Html] = useState('');
  const [footerLink4Html, setFooterLink4Html] = useState('');
  const [footerLink5Html, setFooterLink5Html] = useState('');
  const [homepageJumbotronCustomCss, setHomepageJumbotronCustomCss] = useState('');

  // availability
  const [active, setActive] = useState(true);
  const [tld, setTLD] = useState('myhvaccompany.com');

  // integrations
  const [googleAnalytics, setGoogleAnalytics] = useState('');
  const [googleVerificationFileName, setGoogleVerificationFileName] = useState('');
  const [googleVerificationFileContent, setGoogleVerificationFileContent] = useState('');
  
  const [websites, setWebsites] = useState<WebsitesQuery['websites']>([]);

  // useEffect(() => {
  //   const getWebsites = async () => {
  //     const response = await sdk.websites();
  //     setWebsites(response.websites);
  //   }
  //   getWebsites();

  // }
  // , []);

  return (
    <IonPage>
      <SectionHeader 
      title={isList ? "Business websites" : businessName } 
      newLink={'/websites/general?new=true'}
      />
      <IonContent>
      <IonTabs>
        <IonRouterOutlet>


          <Route path="/websites">
            <ItemList items={
              [
                { name: 'My HVAC Company', href: '/websites/general', icon: business },
                { name: 'My Landscaping business', href: '/websites/general', icon: business },
                { name: 'My Plumbing business', href: '/websites/general', icon: business },
                { name: 'My Electrical business', href: '/websites/general', icon: business },
                { name: 'My Cleaning business', href: '/websites/general', icon: business },
                { name: 'My Handyman business', href: '/websites/general', icon: business },
              ]
            } />

          </Route>

          <Route path="/websites/general">
            
            <FormBuilder fields={
              [
                { name: 'Business Name', type: 'text', value: businessName, setValue: setBusinessName },
                { name: 'Business Description', type: 'textarea', value: businessDescription, setValue: setBusinessDescription },
                { name: 'Business Logo', type: 'image', value: businessLogo, setValue: setBusinessLogo },
                { name: 'Address 1', type: 'text', value: address1, setValue: setAddress1 },
                { name: 'Address 2', type: 'text', value: address2, setValue: setAddress2 },
                { name: 'City', type: 'text', value: city, setValue: setCity },
                { name: 'State', type: 'text', value: state, setValue: setState },
                { name: 'Zip Code', type: 'number', value: zipCode, setValue: setZipCode },
                { name: 'Phone Number', type: 'phone', value: phoneNumber, setValue: setPhoneNumber },
                { name: 'Email Address', type: 'email', value: emailAddress, setValue: setEmailAddress },
                { name: 'License Number', type: 'number', value: licenseNumber, setValue: setLicenseNumber },
                { name: 'Insurance Number', type: 'number', value: insuranceNumber, setValue: setInsuranceNumber },
                { name: 'Business Manager Person Name', type: 'text', value: businessManagerPersonName, setValue: setBusinessManagerPersonName },
                { name: 'Business EIN Number', type: 'number', value: businessEINnumber, setValue: setBusinessEINNumber },
              ]
            } />
          </Route>
          <Route path="/websites/design">

          <FormBuilder fields={
            [
              { name: 'Theme Color', type: 'text', value: themeColor, setValue: setThemeColor },
              { name: 'Homepage Background', type: 'image', value: homepageBackground, setValue: setHomepageBackground },
              { name: 'Custom Header Code', type: 'textarea', value: customHeaderCode, setValue: setCustomHeaderCode },
              { name: 'Custom Footer Code', type: 'textarea', value: customFooterCode, setValue: setCustomFooterCode },
              { name: 'CTA HTML', type: 'textarea', value: ctaHtml, setValue: setCtaHtml },
              { name: 'CTA Button HTML', type: 'textarea', value: ctaButtonHtml, setValue: setCtaButtonHtml },
              { name: 'Navbar Message HTML', type: 'textarea', value: navbarMessageHtml, setValue: setNavbarMessageHtml },
              { name: 'Navbar Link 1 HTML', type: 'textarea', value: navbarLink1Html, setValue: setNavbarLink1Html },
              { name: 'Navbar Link 2 HTML', type: 'textarea', value: navbarLink2Html, setValue: setNavbarLink2Html },
              { name: 'Navbar Show Services', type: 'number', value: navbarShowServices, setValue: setNavbarShowServices },
              { name: 'Navbar Show Areas', type: 'number', value: navbarShowAreas, setValue: setNavbarShowAreas },
              { name: 'Navbar Show CTA Button', type: 'checkbox', value: navbarShowCtaButton, setValue: setNavbarShowCtaButton },
              { name: 'Footer Message HTML', type: 'textarea', value: footerMessageHtml, setValue: setFooterMessageHtml },
              { name: 'Footer Show Services', type: 'number', value: footerShowServices, setValue: setFooterShowServices },
              { name: 'Footer Show Areas', type: 'number', value: footerShowAreas, setValue: setFooterShowAreas },
              { name: 'Footer Show Reviews', type: 'number', value: footerShowReviews, setValue: setFooterShowReviews },
              { name: 'Footer Show License Number', type: 'checkbox', value: footerShowLicenseNumber, setValue: setFooterShowLicenseNumber },
              { name: 'Footer Show Email Address', type: 'checkbox', value: footerShowEmailAddress, setValue: setFooterShowEmailAddress },
              { name: 'Footer Link 1 HTML', type: 'textarea', value: footerLink1Html, setValue: setFooterLink1Html },
              { name: 'Footer Link 2 HTML', type: 'textarea', value: footerLink2Html, setValue: setFooterLink2Html },
              { name: 'Footer Link 3 HTML', type: 'textarea', value: footerLink3Html, setValue: setFooterLink3Html },
              { name: 'Footer Link 4 HTML', type: 'textarea', value: footerLink4Html, setValue: setFooterLink4Html },
              { name: 'Footer Link 5 HTML', type: 'textarea', value: footerLink5Html, setValue: setFooterLink5Html },
              { name: 'Homepage Jumbotron Custom CSS', type: 'textarea', value: homepageJumbotronCustomCss, setValue: setHomepageJumbotronCustomCss },
            ]
          }
          />

          </Route>
          <Route path="/websites/availability">

          <FormBuilder fields={
            [
              { name: 'Active', type: 'checkbox', value: active, setValue: setActive },
              { name: 'Domains', type: 'text', value: tld, setValue: setTLD },
            ]
          }
          />

          </Route>
          <Route path="/websites/integrations">

          <FormBuilder fields={
            [
              { name: 'Google Analytics', type: 'textarea', value: googleAnalytics, setValue: setGoogleAnalytics },
              { name: 'Google Verification File Name', type: 'text', value: googleVerificationFileName, setValue: setGoogleVerificationFileName },
              { name: 'Google Verification File Content', type: 'text', value: googleVerificationFileContent, setValue: setGoogleVerificationFileContent },
            ]
          }
          />


          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" color="white"
          style={{
            '--ion-color-primary': '#fff',
          }}>
          <IonTabButton tab="general" href="/websites/general">
            <IonLabel>Contact info</IonLabel>
            <IonIcon icon={business} size='large' />
          </IonTabButton>
          <IonTabButton tab="design" href="/websites/design">
            <IonLabel>Website design</IonLabel>
            <IonIcon icon={build} size='large' />
          </IonTabButton>
          <IonTabButton tab="availability" href="/websites/availability">
            <IonLabel>Settings</IonLabel>
            <IonIcon icon={cog} size='large' />
          </IonTabButton>
          <IonTabButton tab="integrations" href="/websites/integrations">
            <IonLabel>Integrations</IonLabel>
            <IonIcon icon={listCircle} size='large' />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      </IonContent>
    </IonPage>
  );
};

export default Websites;