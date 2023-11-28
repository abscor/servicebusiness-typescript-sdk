// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonItem, IonBadge, IonNote, IonList, IonText, IonImg, IonCheckbox } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { book, build, business, chevronBack, chevronForward, help, listCircle, location, logoApple, logoGoogle, person, personCircleOutline, star, starHalf } from 'ionicons/icons';
import InputText from '../components/InputText';
import InputImage from '../components/InputImage';
import InputTextarea from '../components/InputTextarea';
import InputCheckbox from '../components/InputCheckbox';

const WebsiteDesign: React.FC = () => {
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
        
          <InputText 
            label="Theme Color"
            value={theme_color}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setThemeColor(e.detail.value!)}
            required={true}
            type="text"
            placeholder="Theme Color"
            disabled={false}
          />

          <InputImage
            label="Homepage Background"
            value={homepage_background}
            onChange={setHomepageBackground}
            required={true}
            removeButtonLabel="remove"
            previewWidth="80px"
            previewHeight="80px"
          />

          <InputTextarea
            label="Custom Header Code"
            helpText="This code will be inserted into the <head> tag of every page."
            value={custom_header_code}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setCustomHeaderCode(e.detail.value!)}
            required={true}
            placeholder="Custom Header Code"
            disabled={false}
          />

          <InputTextarea
            label="Custom Footer Code"
            helpText="This code will be inserted into the <body> tag of every page."
            value={custom_footer_code}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setCustomFooterCode(e.detail.value!)}
            required={true}
            placeholder="Custom Footer Code"
            disabled={false}
          />

          <InputTextarea
            label="CTA HTML"
            helpText="This is the HTML that will be displayed in the Call-to-action part of the navbar."
            value={cta_html}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setCtaHtml(e.detail.value!)}
            required={true}
            placeholder="CTA HTML"
            disabled={false}
          />

          <InputTextarea
            label="CTA Button HTML"
            helpText="This is the HTML that will be displayed in the Call-to-action button part of the navbar."
            value={cta_button_html}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setCtaButtonHtml(e.detail.value!)}
            required={true}
            placeholder="CTA Button HTML"
            disabled={false}
          />

          <InputTextarea
            label="Navbar Message HTML"
            helpText="This is the HTML that will be displayed in the Message part of the navbar."
            value={navbar_message_html}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setNavbarMessageHtml(e.detail.value!)}
            required={true}
            placeholder="Navbar Message HTML"
            disabled={false}
          />

          <InputTextarea
            label="Navbar Link 1 HTML"
            helpText="This is the HTML that will be displayed in the first link part of the navbar."
            value={navbar_link_1_html}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setNavbarLink1Html(e.detail.value!)}
            required={true}
            placeholder="Navbar Link 1 HTML"
            disabled={false}
          />

          <InputTextarea
            label="Navbar Link 2 HTML"
            helpText="This is the HTML that will be displayed in the second link part of the navbar."
            value={navbar_link_2_html}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setNavbarLink2Html(e.detail.value!)}
            required={true}
            placeholder="Navbar Link 2 HTML"
            disabled={false}
          />

          <InputText
            label="Navbar Show Services"
            helpText="This is the number of services that will be displayed in the navbar."
            value={navbar_show_services}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setNavbarShowServices(e.detail.value!)}
            required={true}
            type="number"
            placeholder="Navbar Show Services"
            disabled={false}
          />

          <InputText
            label="Navbar Show Areas"
            helpText="This is the number of areas that will be displayed in the navbar."
            value={navbar_show_areas}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setNavbarShowAreas(e.detail.value!)}
            required={true}
            type="number"
            placeholder="Navbar Show Areas"
            disabled={false}
          />

          <InputCheckbox
            label="Navbar Show CTA Button"
            helpText="This is whether the Call-to-action button will be displayed in the navbar."
            value={navbar_show_cta_button}
            onChange={setNavbarShowCtaButton}
            disabled={false}
          />

          <InputTextarea
            label="Footer Message HTML"
            helpText="This is the HTML that will be displayed in the Message part of the footer."
            value={footer_message_html}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setFooterMessageHtml(e.detail.value!)}
            required={true}
            placeholder="Footer Message HTML"
            disabled={false}
          />

          <InputText
            label="Footer Show Services"
            helpText="This is the number of services that will be displayed in the footer."
            value={footer_show_services}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setFooterShowServices(e.detail.value!)}
            required={true}
            type="number"
            placeholder="Footer Show Services"
            disabled={false}
          />

          <InputText
            label="Footer Show Areas"
            helpText="This is the number of areas that will be displayed in the footer."
            value={footer_show_areas}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setFooterShowAreas(e.detail.value!)}
            required={true}
            type="number"
            placeholder="Footer Show Areas"
            disabled={false}
          />

          <InputText
            label="Footer Show Reviews"
            helpText="This is the number of reviews that will be displayed in the footer."
            value={footer_show_reviews}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setFooterShowReviews(e.detail.value!)}
            required={true}
            type="number"
            placeholder="Footer Show Reviews"
            disabled={false}
          />

          <InputCheckbox
            label="Footer Show License Number"
            helpText="This is whether the license number will be displayed in the footer."
            value={footer_show_license_number}
            onChange={setFooterShowLicenseNumber}
            disabled={false}
          />

          <InputCheckbox
            label="Footer Show Email Address"
            helpText="This is whether the email address will be displayed in the footer."
            value={footer_show_email_address}
            onChange={setFooterShowEmailAddress}
            disabled={false}
          />

          <InputTextarea
            label="Footer Link 1 HTML"
            helpText="This is the HTML that will be displayed in the first link part of the footer."
            value={footer_link_1_html}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setFooterLink1Html(e.detail.value!)}
            required={true}
            placeholder="Footer Link 1 HTML"
            disabled={false}
          />

          <InputTextarea
            label="Footer Link 2 HTML"
            helpText="This is the HTML that will be displayed in the second link part of the footer."
            value={footer_link_2_html}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setFooterLink2Html(e.detail.value!)}
            required={true}
            placeholder="Footer Link 2 HTML"
            disabled={false}
          />

          <InputTextarea
            label="Footer Link 3 HTML"
            helpText="This is the HTML that will be displayed in the third link part of the footer."
            value={footer_link_3_html}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setFooterLink3Html(e.detail.value!)}
            required={true}
            placeholder="Footer Link 3 HTML"
            disabled={false}
          />

          <InputTextarea
            label="Footer Link 4 HTML"
            helpText="This is the HTML that will be displayed in the fourth link part of the footer."
            value={footer_link_4_html}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setFooterLink4Html(e.detail.value!)}
            required={true}
            placeholder="Footer Link 4 HTML"
            disabled={false}
          />

          <InputTextarea
            label="Footer Link 5 HTML"
            helpText="This is the HTML that will be displayed in the fifth link part of the footer."
            value={footer_link_5_html}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setFooterLink5Html(e.detail.value!)}
            required={true}
            placeholder="Footer Link 5 HTML"
            disabled={false}
          />

          <InputTextarea
            label="Homepage Jumbotron Custom CSS"
            helpText="This is the CSS that will be applied to the homepage jumbotron."
            value={homepage_jumbotron_custom_css}
            onChange={(e: { detail: { value: React.SetStateAction<string>; }; }) => setHomepageJumbotronCustomCss(e.detail.value!)}
            required={true}
            placeholder="Homepage Jumbotron Custom CSS"
            disabled={false}
          />

          <br />
          <IonButton expand="block" routerLink="/login-password">Save</IonButton>
          
         

      </IonContent>

);
};

export default WebsiteDesign;