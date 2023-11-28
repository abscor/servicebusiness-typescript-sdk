// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonItem, IonBadge, IonNote, IonList, IonText, IonImg, IonCheckbox } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { book, build, business, chevronBack, chevronForward, help, listCircle, location, logoApple, logoGoogle, person, personCircleOutline, star, starHalf } from 'ionicons/icons';
import InputCheckbox from '../components/InputCheckbox';
import InputText from '../components/InputText';

const WebsiteAvailability: React.FC = () => {
  const loggedIn = false;
  const [business_name, setBusinessName] = useState('My HVAC Company');
  const [tld, setTLD] = useState('myhvaccompany.com');
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
  const [hidden, setHidden] = useState(false);

  return (
    
      <IonContent className="ion-padding">

          <InputCheckbox
            label="Hidden"
            value={hidden}
            onChange={(e: { detail: { checked: React.SetStateAction<boolean>; }; }) => setHidden(e.detail.checked!)}
            placeholder=""
            disabled={false}
            helpText="Hide this website from public view."
          />
          
          <InputText
            label="Domains"
            value={tld}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setTLD(e.detail.value!)}
            required={true}
            type="text"
            placeholder="Domains"
            disabled={false}
            helpText="The domain names for this website."
          />

          <br />
          <IonButton expand="block" routerLink="/login-password">Save</IonButton>
          

      </IonContent>

);
};

export default WebsiteAvailability;