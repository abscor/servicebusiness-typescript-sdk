# Project Overview

We are looking for a skilled developer to design and build an Ionic mobile app that is ready for deployment on both iOS and Android platforms. The app will include an authentication process and feature 7 forms and list views. The backend for the app is already deployed and utilizes GraphQL. It provides an API SDK in TypeScript, which contains all the necessary functions required to complete the project. Additionally, there may be a need to create custom components, such as color representation within the form view.

## Technical Details:

### Code quality and submission

You will be granted access to a pre-existing shared repository for code submission.
Upon completing a milestone, please submit your code to the repository for review and approval.
Ensure that the code you submit is clean, readable, and fully functional.

### SDK and backend service:

Refer to the example client at GitHub Example.
Utilize the TypeScript SDK available at GitHub SDK. https://github.com/abscor/servicebusiness-typescript-sdk/blob/main/src/sdk.ts

### UI Guidelines

The overall app UI should closely follow the provided screenshot examples.
The screenshots currently available cover aspects of the authentication process, profiles, and the Website section.
The Website section functionality includes:
Displaying a list of websites.
Allowing users to create new websites.
Enabling the selection of an active website.
Providing a website editor.

Incorporating tabs to break long forms into manageable sections. You will decide how to break the form into tabs, as well as the name for each tab.

The specific fields for each section or type can be found in the provided SDK as TypeScript types.
Form Inputs and Functionality:

Some UI elements cannot be represented using 'input type="text"'. You may need to design custom UI components. i.e. theme-colors which needs to be a palette of colors. Another example is file uploading, specifically for images. Please ensure to display a preview of the image using base64, and set the value of the field to be base64 where the server will process the base64 encoded image and return a URL to a hosted file in return. See the example in the example-client app. 

Successful form submissions should trigger a green "Success" Toast component.
Failed form submissions should trigger a red "Failure" Toast component.

### Sections (Types)

In addition to the provided screenshots for managing the Website(s) section and forms, and the authentication and profile views, there are additional sections, including:

- Services
- Locations
- Reviews
- Articles
- FAQs (Questions and Answers)

### Bug Handling

While we understand that bugs may occasionally arise, we expect you to promptly address and fix any bugs to ensure a flawless user experience, in accordance with the project requirements.

Feel free to reach out to me for clarifications.

### Form fields

#### Area (Location)
- active - Boolean - This indicates whether this page is active and available
- description - String - The description of the page
- displayOrder - Int - The order of displaying this page. Higher priority means it will be displayed first.
- enableSchemaOrgAreaServedObject - Boolean - This indicates whether this page will use the areaServed object.
- htmlBlock1 - String - HTML (markup) block 1)
- htmlBlock2 - String - HTML (markup) block 2)
- id - ID - The ID of the page
- image - String - Min size (450 x 300)px
- keywordTargeting - [String] - A list of keywords that this page is targeting
- metadata - JSONString - The metadata for this page
- name - String - The name of the page
- pk - ID - The primary key of the page
- showInsuranceCompanyWidget - Boolean - This indicates whether this page will display the Insurance company widget.
- zipCode - String - The zip code of the page
- slug - String - The URL slug of the page

#### Page
- active - Boolean - This indicates whether this page is active and available
- body - String - The HTML markup of the page
- description - String - A brief text description of the page
- displayOrder - Int - The order of displaying this service. Higher priority means it will be displayed first.
- enableSchemaOrgArticleObject - Boolean - This indicates whether this page will use the Article object.
- image - String - Min size (450 x 300)px
- keywordTargeting - [String] - A list of keywords that this page is targeting
- name - String - The name of the page that the business provides.
- pk - ID - The primary key of the page
- servicePages - [ServiceObject] - A list of services that this page is available in
- showInsuranceCompanyWidget - Boolean - This indicates whether this page will display the Insurance company widget.
- slug - String - The URL slug of the page

#### Service
- active - Boolean - This indicates whether this service is active and available
- description - String - The description of the service
- displayOrder - Int - The order of displaying this service. Higher priority means it will be displayed first.
- enableSchemaOrgServiceObject - Boolean - This indicates whether this site will use the Service object.
- htmlBlock1 - String - HTML (markup) block 1)
- htmlBlock2 - String - HTML (markup) block 2)
- image - String - Min size (450 x 300)px
- keywordTargeting - [String] - A list of keywords that this service is targeting
- name - String - The name of the service that the business provides.
- pages - [PageObject] - A list of pages that this service is available in
- showInsuranceCompanyWidget - Boolean - This indicates whether this service will display the Insurance company widget.
- slug - String - The URL slug of the service

#### Website
- active - Boolean - This indicates whether this website is active at the moment.
- address1 - String - The address of the business
- address2 - String - The second address line of address
- businessDescription - String - The description of the business
- businessEinNumber - String - The business EIN (corporation) number.
- businessLogo - String - Min size (450 x 300)px
- businessManagerPersonName - String - The business manager name.
- businessName - String - The name of the business
- city - String - The city where the business is located
- ctaButtonHtml - String - The markup to use with the button call-to-action.
- ctaHtml - String - The markup to use with the main call-to-action.
- customFooterCode - String - The custom footer HTML code. This will be used right before the closing </BODY> tag.
- customHeaderCode - String - The custom header HTML code. This will be used in the <HEAD> section of the website markup.
- editor - [String] - A list of emails that are allowed to edit this website
- emailAddress - String - The email address of the business
- enableGoogleSitemaps - Boolean - This indicates whether Google SiteMaps is available.
- enableSchemaOrgLocalbusinessObject - Boolean - This indicates whether this site will use the LocalBusiness object.
- enableSchemaOrgOrganizationObject - Boolean - This indicates whether this site will use the Organization object.
- enableSchemaOrgWebpageObject - Boolean - This indicates whether this site will use the WebPage object.
- faqs - [FaqObject] - A list of FAQs that this business has
- footerLink1Html - String - The footer first link markup.
- footerLink2Html - String - The footer second link markup.
- footerLink3Html - String - The footer third link markup.
- footerLink4Html - String - The footer fourth link markup.
- footerLink5Html - String - The footer fifth link markup.
- footerMessageHtml - String - The footer message markup.
- footerShowAreas - Int - The number of areas to show in the footer component.
- footerShowEmailAddress - Boolean - This indicates whether the email address will be visible in the footer component.
- footerShowLicenseNumber - Boolean - This indicates whether the business license number will be visible in the footer component.
- footerShowReviews - Int - The number of reviews to show in the footer component.
- footerShowServices - Int - The number of services to show in the footer component.
- googleAnalytics - String - The Google Analytics ID to use with this website. For example IX-123213-923s
- googleVerificationFileContent - String - The phone number of the business
- googleVerificationFileName - String - The phone number of the business
- homepageBackground - String - Min size (450 x 300)px
- homepageJumbotronCustomCss - String - The custom CSS used in the homepage jumobotron.
- id - ID - The ID of the website
- insuranceNumber - String - The insurance number of the business
- licenseNumber - String - The license number of the business
- navbarLink1Html - String - The navigation bar first link markup.
- navbarLink2Html - String - The navigation bar second link markup.
- navbarMessageHtml - String - The navigation bar message markup.
- navbarShowAreas - Int - The number of areas to show in the navigation bar component.
- navbarShowCtaButton - Boolean - This indicates whether the button CTA will be visible in the navigation bar component.
- navbarShowServices - Int - The number of services to show in the navigation bar component.
- pages - [PageObject] - A list of pages that this business has
- phoneNumber - String - The phone number of the business
- state - String - The state where the business is located
- themeColor - JSONString - The theme color for this website
- tld - [String] - The top level domain to use with this website. Example: my-local-business.com
- zipCode - String - The zip code where the business is located

#### Faq

- active - Boolean - This indicates whether this faq is active and available
- name - String - The name of the faq that the business provides.
- questions - [QuestionObject] - A list of questions that this faq has

#### Question

- active - Boolean - This indicates whether this question is active and available
- answer - String - The answer of the question
- displayOrder - Int - The order of displaying this question. Higher priority means it will be displayed first.
- faq - FaqObject - The faq that this question belongs to
- answer - String - The answer of the question

#### Review

- active - Boolean - This indicates whether this review is active and available
- body - String - The body of the review.
- displayOrder - Int - The order of displaying this review. Higher priority means it will be displayed first.
- personImage - String - Min size (450 x 300)px
- personName - String - The name of the person that wrote the review.
- personZipCode - String - The zip code of the person location.
- rating - Int - The rating of this review. (from 1 to 4.5 to 5)
- title - String - A brief description of the review.
