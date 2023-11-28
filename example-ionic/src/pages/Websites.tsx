// an ionic login page with a username and password field
// and a login button
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonIcon, IonItem, IonBadge, IonNote, IonList, IonText, IonRadioGroup, IonRadio, IonCheckbox, IonImg, IonTabs, IonTabButton, IonRouterOutlet, IonTabBar, IonSelect, IonSelectOption } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { add, book, build, business, chevronBack, chevronForward, help, listCircle, location, logoApple, logoGoogle, person, personCircleOutline, star, starHalf } from 'ionicons/icons';
import LoginOTP from './LoginOTP';
import WebsiteGeneral from './WebsiteGeneral';
import WebsiteDesign from './WebsiteDesign';
import WebsiteAvailability from './WebsiteAvailability';
import WebsiteIntegrations from './WebsiteIntegrations';
import SectionHeader from '../components/SectionHeader';

const Websites: React.FC = () => {
  const loggedIn = false;
  // GET param 'new'
  const newParam = new URLSearchParams(window.location.search).get('new');

  const [hidden, setHidden] = useState(true);
  const [website, setWebsite] = useState('myhvaccompany.com');
  const [tld, setTld] = useState('myhvaccompany.com');
  const [business_name, setBusinessName] = useState('My HVAC Company');
  const [slug, setSlug] = useState('my-hvac-company');
  const [business_description, setBusinessDescription] = useState('NYC Comfort Climate Solutions is your trusted partner for all your heating, ventilation, and air conditioning needs in the bustling heart of New York City. With years of experience serving the city that never sleeps, we understand the unique challenges of keeping your indoor environment comfortable year-round.');
  const [business_logo, setBusinessLogo] = useState('https://getplummy.com/static/logo.png?random=99');
  const [license_number, setLicenseNumber] = useState('');
  const [insurance_number, setInsuranceNumber] = useState('');
  const [address_1, setAddress1] = useState('500B Grand St');
  const [address_2, setAddress2] = useState('Apt 2');
  const [city, setCity] = useState('New York');
  const [state, setState] = useState('NY');
  const [zip_code, setZipCode] = useState('10002');
  const [phone_number, setPhoneNumber] = useState('2125551234');
  const [email_address, setEmailAddress] = useState('test@email.com');
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
    <IonPage>
      <SectionHeader title="Websites" />
      <IonContent className="ion-padding">
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/websites/general">
            <WebsiteGeneral />
          </Route>
          <Route path="/websites/design" exact={true}>
            <WebsiteDesign />
          </Route>
          <Route path="/websites/availability">
          <WebsiteAvailability />
          </Route>
          <Route path="/websites/integrations">
          <WebsiteIntegrations />
          </Route>
          <Route exact path="/websites">
            <IonList inset={true}>
              <IonItem button={true} detail={true} href="/websites/general">
                <IonIcon slot="start" icon={business} />
                <IonLabel>
                  <strong>My HVAC Company</strong>
                </IonLabel>
              </IonItem>

              <IonItem button={true} detail={true} href="/websites/general">
                <IonIcon slot="start" icon={business} />
                <IonLabel>
                  <strong>My Landscaping business</strong>
                </IonLabel>
              </IonItem>
            </IonList>
          </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="general" href="/websites/general">
              <IonLabel>General</IonLabel>
            </IonTabButton>
            <IonTabButton tab="design" href="/websites/design">
              <IonLabel>Design</IonLabel>
            </IonTabButton>
            <IonTabButton tab="availability" href="/websites/availability">
              <IonLabel>Availability</IonLabel>
            </IonTabButton>
            <IonTabButton tab="integrations" href="/websites/integrations">
              <IonLabel>Integrations</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>

         

      </IonContent>
    </IonPage>
  );
};

export default Websites;