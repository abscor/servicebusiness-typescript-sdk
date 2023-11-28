// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonItem, IonBadge, IonNote, IonList, IonText, IonImg } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { book, build, business, chevronBack, chevronForward, help, listCircle, location, logoApple, logoGoogle, person, personCircleOutline, star, starHalf } from 'ionicons/icons';
import InputText from '../components/InputText';
import InputTextarea from '../components/InputTextarea';

const WebsiteIntegrations: React.FC = () => {
  const loggedIn = false;
  const [business_name, setBusinessName] = useState('My HVAC Company');
  const [slug, setSlug] = useState('my-hvac-company');
  const [business_description, setBusinessDescription] = useState('NYC Comfort Climate Solutions is your trusted partner for all your heating, ventilation, and air conditioning needs in the bustling heart of New York City. With years of experience serving the city that never sleeps, we understand the unique challenges of keeping your indoor environment comfortable year-round.');
  const [business_logo, setBusinessLogo] = useState('https://getplummy.com/static/logo.png?random=99');
  const [license_number, setLicenseNumber] = useState('');
  const [insurance_number, setInsuranceNumber] = useState('');
  const [address_1, setAddress1] = useState('');
  const [address_2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip_code, setZipCode] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [email_address, setEmailAddress] = useState('');
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
        
          {/* <IonItem>
            <IonLabel position="floating">Google Analytics</IonLabel>
            <IonInput type="text" value={google_analytics} onIonChange={e => setGoogleAnalytics(e.detail.value!)}></IonInput>
          </IonItem> */}
          <InputTextarea
            label="Google Analytics"
            value={google_analytics}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setGoogleAnalytics(e.detail.value!)}
            required={false}
            placeholder="Google Analytics"
            disabled={false}
            helpText="Google Analytics code snippet."
          />

          {/* <IonItem>
            <IonLabel position="floating">Google Verification File Name</IonLabel>
            <IonInput type="text" value={google_verification_file_name} onIonChange={e => setGoogleVerificationFileName(e.detail.value!)}></IonInput>
          </IonItem> */}
          <InputText
            label="Google Verification File Name"
            value={google_verification_file_name}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setGoogleVerificationFileName(e.detail.value!)}
            required={false}
            type="text"
            placeholder="Google Verification File Name"
            disabled={false}
            helpText="Google Verification File Name."
          />

          {/* <IonItem>
            <IonLabel position="floating">Google Verification File Content</IonLabel>
            <IonInput type="text" value={google_verification_file_content} onIonChange={e => setGoogleVerificationFileContent(e.detail.value!)}></IonInput>
          </IonItem> */}
          <InputText
            label="Google Verification File Content"
            value={google_verification_file_content}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setGoogleVerificationFileContent(e.detail.value!)}
            required={false}
            type="text"
            placeholder="Google Verification File Content"
            disabled={false}
            helpText="Google Verification File Content."
          />

          <br />
          <IonButton expand="block" routerLink="/login-password">Save</IonButton>
          

      </IonContent>

);
};

export default WebsiteIntegrations;