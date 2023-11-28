// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonItem, IonBadge, IonNote, IonList, IonText, IonImg } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { book, build, business, chevronBack, chevronForward, closeCircleOutline, help, listCircle, location, logoApple, logoGoogle, person, personCircleOutline, star, starHalf } from 'ionicons/icons';
import InputText from '../components/InputText';
import InputTextarea from '../components/InputTextarea';
import InputImage from '../components/InputImage';
import InputPhonenumber from '../components/InputPhonenumber';

const WebsiteGeneral: React.FC = () => {
  const loggedIn = false;
  const newParam = new URLSearchParams(window.location.search).get('new');
  const [business_name, setBusinessName] = useState(newParam ? '' : 'My HVAC Company');
  const [slug, setSlug] = useState(newParam ? '' : 'my-hvac-company');
  const [business_description, setBusinessDescription] = useState(newParam ? '' : 'NYC Comfort Climate Solutions is your trusted partner for all your heating, ventilation, and air conditioning needs in the bustling heart of New York City. With years of experience serving the city that never sleeps, we understand the unique challenges of keeping your indoor environment comfortable year-round.');
  const [business_logo, setBusinessLogo] = useState(newParam ? '' : 'https://getplummy.com/static/logo.png?random=99');
  const [license_number, setLicenseNumber] = useState('');
  const [insurance_number, setInsuranceNumber] = useState('');
  const [address_1, setAddress1] = useState(newParam ? '' : '500B Grand St');
  const [address_2, setAddress2] = useState(newParam ? '' : 'Apt 2');
  const [city, setCity] = useState(newParam ? '' : 'New York');
  const [state, setState] = useState(newParam ? '' : 'NY');
  const [zip_code, setZipCode] = useState(newParam ? '' : '10002');
  const [phone_number, setPhoneNumber] = useState(newParam ? '' : '2125551234');
  const [email_address, setEmailAddress] = useState(newParam ? '' : 'test@email.com');
  const [editor, setEditor] = useState('');
  const [google_analytics, setGoogleAnalytics] = useState('');
  const [google_verification_file_name, setGoogleVerificationFileName] = useState('');
  const [google_verification_file_content, setGoogleVerificationFileContent] = useState('');
  const [enable_google_sitemaps, setEnableGoogleSitemaps] = useState(false);
  const [enable_schema_org_webpage_object, setEnableSchemaOrgWebpageObject] = useState(false);
  const [enable_schema_org_organization_object, setEnableSchemaOrgOrganizationObject] = useState(false);
  const [enable_schema_org_localbusiness_object, setEnableSchemaOrgLocalbusinessObject] = useState(false);
  const [theme_color, setThemeColor] = useState('');
  const [homepage_background, setHomepageBackground] = useState('');
  const [business_manager_person_name, setBusinessManagerPersonName] = useState('');
  const [business_ein_number, setBusinessEinNumber] = useState('');
  const [custom_header_code, setCustomHeaderCode] = useState('');
  const [custom_footer_code, setCustomFooterCode] = useState('');
  const [cta_html, setCtaHtml] = useState('');
  const [cta_button_html, setCtaButtonHtml] = useState('');
  const [navbar_message_html, setNavbarMessageHtml] = useState('');
  const [navbar_link_1_html, setNavbarLink1Html] = useState('');
  const [navbar_link_2_html, setNavbarLink2Html] = useState('');
  const [navbar_show_services, setNavbarShowServices] = useState(0);
  const [navbar_show_areas, setNavbarShowAreas] = useState(0);
  const [navbar_show_cta_button, setNavbarShowCtaButton] = useState(false);
  const [footer_message_html, setFooterMessageHtml] = useState('');
  const [footer_show_services, setFooterShowServices] = useState(0);
  const [footer_show_areas, setFooterShowAreas] = useState(0);
  const [footer_show_reviews, setFooterShowReviews] = useState(0);
  const [footer_show_license_number, setFooterShowLicenseNumber] = useState(false);
  const [footer_show_email_address, setFooterShowEmailAddress] = useState(false);
  const [footer_link_1_html, setFooterLink1Html] = useState('');
  const [footer_link_2_html, setFooterLink2Html] = useState('');
  const [footer_link_3_html, setFooterLink3Html] = useState('');
  const [footer_link_4_html, setFooterLink4Html] = useState('');
  const [footer_link_5_html, setFooterLink5Html] = useState('');
  const [homepage_jumbotron_custom_css, setHomepageJumbotronCustomCss] = useState('');

  return (
    
      <IonContent className="ion-padding">
        
          <InputText
            label="Business Name"
            value={business_name}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setBusinessName(e.detail.value!)}
            required={true}
            type="text"
            placeholder="Business Name"
            disabled={false}
          />

          <InputTextarea
            label="Business Description"
            value={business_description}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setBusinessDescription(e.detail.value!)}
            required={true}
            placeholder="Business Description"
            disabled={false}
          />

          <InputImage
            label="Business Logo"
            value={business_logo}
            onChange={setBusinessLogo}
            required={true}
            removeButtonLabel="remove"
            previewWidth="80px"
            previewHeight="80px"
          />

          <InputText
            label="Address 1"
            value={address_1}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setAddress1(e.detail.value!)}
            required={true}
            type="text"
            placeholder="Address 1"
            disabled={false}
          />

          <InputText
            label="Address 2"
            value={address_2}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setAddress2(e.detail.value!)}
            required={true}
            type="text"
            placeholder="Address 2"
            disabled={false}
          />

          <InputText
            label="City"
            value={city}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setCity(e.detail.value!)}
            required={true}
            type="text"
            placeholder="City"
            disabled={false}
          />

          <InputText
            label="State"
            value={state}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setState(e.detail.value!)}
            required={true}
            type="text"
            placeholder="State"
            disabled={false}
          />

          <InputText
            label="Zip Code"
            value={zip_code}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setZipCode(e.detail.value!)}
            required={true}
            type="text"
            placeholder="Zip Code"
            disabled={false}
          />

          <InputPhonenumber
            label="Phone Number"
            value={phone_number}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setPhoneNumber(e.detail.value!)}
            required={true}
            placeholder="Phone Number"
            disabled={false}
          />

          <InputText
            label="Email Address"
            value={email_address}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setEmailAddress(e.detail.value!)}
            required={true}
            type="email"
            placeholder="Email Address"
            disabled={false}
          />

          <InputText
            label="License Number"
            value={license_number}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setLicenseNumber(e.detail.value!)}
            required={true}
            type="text"
            placeholder="License Number"
            disabled={false}
          />

          <InputText
            label="Insurance Number"
            value={insurance_number}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setInsuranceNumber(e.detail.value!)}
            required={true}
            type="text"
            placeholder="Insurance Number"
            disabled={false}
          />

          <InputText
            label="Business Manager Person Name"
            value={business_manager_person_name}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setBusinessManagerPersonName(e.detail.value!)}
            required={true}
            type="text"
            placeholder="Business Manager Person Name"
            disabled={false}
          />

          <InputText
            label="Business EIN Number"
            value={business_ein_number}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setBusinessEinNumber(e.detail.value!)}
            required={true}
            type="text"
            placeholder="Business EIN Number"
            disabled={false}
          />

          <br />
          <IonButton expand="block" routerLink="/login-password">Save</IonButton>
          
      </IonContent>

);
};

export default WebsiteGeneral;