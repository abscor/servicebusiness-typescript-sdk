import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSONString: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  GenericScalar: { input: any; output: any; }
  FileUploadField: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  area?: Maybe<AreaObject>;
  areas?: Maybe<Array<Maybe<AreaObject>>>;
  faq?: Maybe<FaqObject>;
  faqs?: Maybe<Array<Maybe<FaqObject>>>;
  invitationsReceived?: Maybe<Array<Maybe<CollaboratorObject>>>;
  invitationsSent?: Maybe<Array<Maybe<CollaboratorObject>>>;
  ipAddress?: Maybe<IpAddress>;
  page?: Maybe<PageObject>;
  pages?: Maybe<Array<Maybe<PageObject>>>;
  postdata?: Maybe<DataObject>;
  postdatas?: Maybe<Array<Maybe<DataObject>>>;
  profile?: Maybe<ProfileObject>;
  question?: Maybe<QuestionObject>;
  questions?: Maybe<Array<Maybe<QuestionObject>>>;
  review?: Maybe<ReviewObject>;
  reviews?: Maybe<Array<Maybe<ReviewObject>>>;
  service?: Maybe<ServiceObject>;
  services?: Maybe<Array<Maybe<ServiceObject>>>;
  website?: Maybe<WebsiteObject>;
  websites?: Maybe<Array<Maybe<WebsiteObject>>>;
  zipCode?: Maybe<ZipCode>;
};


export type QueryAreaArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAreasArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFaqArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFaqsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInvitationsReceivedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInvitationsSentArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIpAddressArgs = {
  ipAddress?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPostdataArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostdatasArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuestionArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQuestionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryReviewsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryServicesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWebsiteArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWebsitesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryZipCodeArgs = {
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type AreaObject = {
  __typename?: 'AreaObject';
  /** Boolean: Indicates if the area is currently active and available for display or use. */
  active: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  /** Text: A detailed description of the area and its characteristics. */
  description?: Maybe<Scalars['String']['output']>;
  /** Integer: The display priority of this area. Higher values indicate higher priority for display. */
  displayOrder: Scalars['Int']['output'];
  /** Boolean: Determines if Schema.org areaServed object tags are used for this area. */
  enableSchemaOrgAreaServedObject: Scalars['Boolean']['output'];
  /** Text: First customizable HTML content block for additional information or markup related to the area. */
  htmlBlock1?: Maybe<Scalars['String']['output']>;
  /** Text: Second customizable HTML content block for additional information or markup related to the area. */
  htmlBlock2?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** String: URL or path to the image representing the area. Recommended minimum size is 450x300 pixels. */
  image?: Maybe<Scalars['String']['output']>;
  keywordTargeting?: Maybe<Array<Scalars['String']['output']>>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** String: The official name of the area. */
  name?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** Boolean: Specifies whether to display an insurance company widget on the area page. */
  showInsuranceCompanyWidget: Scalars['Boolean']['output'];
  /** String: URL-friendly identifier for the area, used in web addresses. */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
  /** String: The postal code associated with the area. */
  zipCode: Scalars['String']['output'];
};

export type WebsiteObject = {
  __typename?: 'WebsiteObject';
  /** Boolean: Specifies if the website is currently active. */
  active: Scalars['Boolean']['output'];
  /** String: Primary street address of the business. */
  address1?: Maybe<Scalars['String']['output']>;
  /** String: Secondary address line, if any. */
  address2?: Maybe<Scalars['String']['output']>;
  areas: Array<AreaObject>;
  /** Text: Detailed description of the business's activities and services. */
  businessDescription?: Maybe<Scalars['String']['output']>;
  /** String: Employer Identification Number (EIN) of the business. */
  businessEinNumber?: Maybe<Scalars['String']['output']>;
  /** Image: Logo of the business. Recommended minimum size is 450x300 pixels. */
  businessLogo?: Maybe<Scalars['String']['output']>;
  /** String: Name of the business manager. */
  businessManagerPersonName?: Maybe<Scalars['String']['output']>;
  /** String: The official name of the business. */
  businessName: Scalars['String']['output'];
  /** String: Color of the button border. */
  buttonBorderColor?: Maybe<Scalars['String']['output']>;
  /** String: Color of the button. */
  buttonColor?: Maybe<Scalars['String']['output']>;
  /** String: Color of the button text. */
  buttonTextColor?: Maybe<Scalars['String']['output']>;
  /** String: City where the business is located. */
  city?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  /** Text: HTML markup for the call-to-action button. */
  ctaButtonHtml?: Maybe<Scalars['String']['output']>;
  /** Text: HTML markup for the main call-to-action on the website. */
  ctaHtml?: Maybe<Scalars['String']['output']>;
  /** Text: Custom CSS code for the website. */
  customCss?: Maybe<Scalars['String']['output']>;
  /** Text: Custom HTML code for the website's footer section. */
  customFooterCode?: Maybe<Scalars['String']['output']>;
  /** Text: Custom HTML code for the website's header section. */
  customHeaderCode?: Maybe<Scalars['String']['output']>;
  datas: Array<DataObject>;
  /** String: Default subdomain name for the website. */
  defaultSubdomainName?: Maybe<Scalars['String']['output']>;
  /** Array of Email Addresses: List of email addresses authorized to edit the website. */
  editor?: Maybe<Array<Scalars['String']['output']>>;
  /** String: Email address for business correspondence. */
  emailAddress?: Maybe<Scalars['String']['output']>;
  /** Boolean: Determines if Google SiteMaps is enabled for the website. */
  enableGoogleSitemaps: Scalars['Boolean']['output'];
  /** Boolean: Indicates if Schema.org LocalBusiness object tags are used. */
  enableSchemaOrgLocalbusinessObject: Scalars['Boolean']['output'];
  /** Boolean: Indicates if Schema.org Organization object tags are used. */
  enableSchemaOrgOrganizationObject: Scalars['Boolean']['output'];
  /** Boolean: Indicates if Schema.org WebPage object tags are used. */
  enableSchemaOrgWebpageObject: Scalars['Boolean']['output'];
  faqs: Array<FaqObject>;
  /** String: Font family for the body text. */
  fontBody?: Maybe<Scalars['String']['output']>;
  /** String: Font family for the heading text. */
  fontHeading?: Maybe<Scalars['String']['output']>;
  /** Text: HTML markup for the first link in the footer. */
  footerLink1Html?: Maybe<Scalars['String']['output']>;
  /** Text: HTML markup for the second link in the footer. */
  footerLink2Html?: Maybe<Scalars['String']['output']>;
  /** Text: HTML markup for the third link in the footer. */
  footerLink3Html?: Maybe<Scalars['String']['output']>;
  /** Text: HTML markup for the fourth link in the footer. */
  footerLink4Html?: Maybe<Scalars['String']['output']>;
  /** Text: HTML markup for the fifth link in the footer. */
  footerLink5Html?: Maybe<Scalars['String']['output']>;
  /** Text: HTML markup for the message in the footer. */
  footerMessageHtml?: Maybe<Scalars['String']['output']>;
  /** Boolean: Indicates if the business address is visible in the footer. */
  footerShowAddress: Scalars['Boolean']['output'];
  /** Integer: Number of service areas to display in the footer. */
  footerShowAreas: Scalars['Int']['output'];
  /** Boolean: Indicates if the business email address is visible in the footer. */
  footerShowEmailAddress: Scalars['Boolean']['output'];
  /** Boolean: Indicates if the business insurance number is visible in the footer. */
  footerShowInsuranceNumber: Scalars['Boolean']['output'];
  /** Boolean: Indicates if the business license number is visible in the footer. */
  footerShowLicenseNumber: Scalars['Boolean']['output'];
  /** Integer: Number of reviews to display in the footer. */
  footerShowReviews: Scalars['Int']['output'];
  /** Integer: Number of services to display in the footer. */
  footerShowServices: Scalars['Int']['output'];
  /** String: Google Analytics ID for tracking website traffic, e.g., 'IX-123213-923s'. */
  googleAnalytics?: Maybe<Scalars['String']['output']>;
  /** String: Content of the file used for Google site verification. */
  googleVerificationFileContent?: Maybe<Scalars['String']['output']>;
  /** String: File name used for Google site verification. */
  googleVerificationFileName?: Maybe<Scalars['String']['output']>;
  /** Image: Background image for the homepage. */
  homepageBackground?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** String: Insurance policy number of the business. */
  insuranceNumber?: Maybe<Scalars['String']['output']>;
  /** String: Official license number of the business. */
  licenseNumber?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** Text: HTML markup for the first link in the navigation bar. */
  navbarLink1Html?: Maybe<Scalars['String']['output']>;
  /** Text: HTML markup for the second link in the navigation bar. */
  navbarLink2Html?: Maybe<Scalars['String']['output']>;
  /** Text: HTML markup for the message in the navigation bar. */
  navbarMessageHtml?: Maybe<Scalars['String']['output']>;
  /** Integer: Number of service areas to display in the navigation bar. */
  navbarShowAreas: Scalars['Int']['output'];
  /** Boolean: Indicates if the call-to-action button is visible in the navigation bar. */
  navbarShowCtaButton: Scalars['Boolean']['output'];
  /** Integer: Number of services to display in the navigation bar. */
  navbarShowServices: Scalars['Int']['output'];
  pages: Array<PageObject>;
  /** String: Contact phone number of the business. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** String: Primary color theme of the website. */
  primaryColor?: Maybe<Scalars['String']['output']>;
  questions: Array<QuestionObject>;
  reviews: Array<ReviewObject>;
  /** String: Secondary color theme of the website. */
  secondaryColor?: Maybe<Scalars['String']['output']>;
  services: Array<ServiceObject>;
  /** String: URL-friendly identifier for the business, used in web addresses. */
  slug?: Maybe<Scalars['String']['output']>;
  /** String: State or region where the business is located. */
  state?: Maybe<Scalars['String']['output']>;
  /** Array of Strings: List of top-level domains for the website, e.g., 'my-local-business.com'. */
  tld?: Maybe<Array<Scalars['String']['output']>>;
  updated: Scalars['DateTime']['output'];
  /** String: Postal code of the business's location. */
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type DataObject = {
  __typename?: 'DataObject';
  created: Scalars['DateTime']['output'];
  /** JSON: The data of the post. */
  data?: Maybe<Scalars['JSONString']['output']>;
  id: Scalars['ID']['output'];
  /** String: The ip address of the user. */
  ipAddress: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSONString']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  updated: Scalars['DateTime']['output'];
  website?: Maybe<WebsiteObject>;
};

export type FaqObject = {
  __typename?: 'FaqObject';
  /** Boolean: Indicates if the faq is currently active and available for display or use. */
  active: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** String: The name of the faq that the business provides. */
  name: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  questions: Array<QuestionObject>;
  /** String: URL-friendly identifier for the faq, used in web addresses. */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
};

export type QuestionObject = {
  __typename?: 'QuestionObject';
  /** Boolean: Indicates if the question is currently active and available for display or use. */
  active: Scalars['Boolean']['output'];
  /** String: The answer that the business provides. */
  answer: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  /** Integer: The display priority of this question. Higher values indicate higher priority for display. */
  displayOrder?: Maybe<Scalars['Int']['output']>;
  faq?: Maybe<FaqObject>;
  faqId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSONString']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** String: The question that the business provides. */
  question: Scalars['String']['output'];
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
};

export type PageObject = {
  __typename?: 'PageObject';
  /** Boolean: Indicates if the page is currently active and available for viewing. */
  active: Scalars['Boolean']['output'];
  /** Text: The full HTML content of the page. */
  body: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  /** Text: A brief text description of the page's content and purpose. */
  description?: Maybe<Scalars['String']['output']>;
  /** Integer: The display priority of this page. Higher values indicate higher priority for display. */
  displayOrder: Scalars['Int']['output'];
  /** Boolean: Specifies if Schema.org Article object tags are used for this page. */
  enableSchemaOrgArticleObject: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Image: The primary image for the page. Recommended minimum size is 450x300 pixels. */
  image?: Maybe<Scalars['String']['output']>;
  keywordTargeting?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** String: The title or name of the page. */
  name: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  /** Boolean: Indicates whether an insurance company widget is displayed on this page. */
  showInsuranceCompanyWidget: Scalars['Boolean']['output'];
  /** String: URL-friendly identifier for the page, used in web addresses. */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
};

export type ReviewObject = {
  __typename?: 'ReviewObject';
  /** Boolean: Indicates if the review is currently active and visible to users. */
  active: Scalars['Boolean']['output'];
  /** Text: The full text of the review, detailing the user's experience or opinion. */
  body?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  /** Integer: The display priority of this review. Higher values indicate higher priority for display. */
  displayOrder: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** Image: An image of the person who wrote the review. Recommended minimum size is 450x300 pixels. */
  personImage?: Maybe<Scalars['String']['output']>;
  /** String: The name of the person who wrote the review. */
  personName: Scalars['String']['output'];
  /** String: The postal code of the reviewer's location. */
  personZipCode: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  /** Integer: The rating given in the review, on a scale from 1 to 5, with half-step increments allowed (e.g., 4.5). */
  rating: Scalars['Decimal']['output'];
  /** String: URL-friendly identifier for the review, used in web addresses. */
  slug?: Maybe<Scalars['String']['output']>;
  /** String: A concise title or summary of the review. */
  title: Scalars['String']['output'];
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
};

export type ServiceObject = {
  __typename?: 'ServiceObject';
  /** Boolean: Indicates if the service is currently active and available for display or use. */
  active: Scalars['Boolean']['output'];
  carouselImages?: Maybe<Array<Maybe<Scalars['JSONString']['output']>>>;
  created: Scalars['DateTime']['output'];
  /** Text: A detailed description of the service, including its features and benefits. */
  description: Scalars['String']['output'];
  /** Integer: The display priority of this service. Higher values indicate higher priority for display. */
  displayOrder: Scalars['Int']['output'];
  /** Boolean: Determines if Schema.org Service object tags are used for this service. */
  enableSchemaOrgServiceObject: Scalars['Boolean']['output'];
  /** Text: First customizable HTML content block for additional information or markup related to the service. */
  htmlBlock1?: Maybe<Scalars['String']['output']>;
  /** Text: Second customizable HTML content block for additional information or markup related to the service. */
  htmlBlock2?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** String: URL or path to the image representing the service. Recommended minimum size is 450x300 pixels. */
  image?: Maybe<Scalars['String']['output']>;
  keywordTargeting?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** String: The name of the service provided by the business. */
  name: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  /** Boolean: Specifies whether to display an insurance company widget on the service page. */
  showInsuranceCompanyWidget: Scalars['Boolean']['output'];
  /** String: URL-friendly identifier for the service, used in web addresses. */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
};

export type CollaboratorObject = {
  __typename?: 'CollaboratorObject';
  collaboratorEmail?: Maybe<Scalars['String']['output']>;
  collaboratorUser?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invitationAccepted?: Maybe<Scalars['String']['output']>;
  invitationSent?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
  websiteBusinessName?: Maybe<Scalars['String']['output']>;
  websiteId?: Maybe<Scalars['Int']['output']>;
};

export type IpAddress = {
  __typename?: 'IPAddress';
  /** The city name */
  city?: Maybe<Scalars['String']['output']>;
  /** The country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The country name */
  countryName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['GenericScalar']['output']>;
  /** The state code */
  stateCode?: Maybe<Scalars['String']['output']>;
  /** The state name */
  stateName?: Maybe<Scalars['String']['output']>;
  /** The zip code */
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type ProfileObject = {
  __typename?: 'ProfileObject';
  created: Scalars['DateTime']['output'];
  /** Boolean: Indicates whether the user opts in for daily summary notifications. */
  dailySummary: Scalars['Boolean']['output'];
  /** String: The email address of the user. Maximum length of 500 characters. */
  emailAddress?: Maybe<Scalars['String']['output']>;
  /** String: The first name of the user. Maximum length of 500 characters. */
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** String: The last name of the user. Maximum length of 500 characters. */
  lastName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** String: Contact phone number of the user. Maximum length of 500 characters. */
  phoneNumber: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  /** A reference to the associated Subscription object. This field links each profile to a specific subscription. */
  subscription?: Maybe<SubscriptionObject>;
  updated: Scalars['DateTime']['output'];
  /** Boolean: Indicates whether the user opts in for weekly summary notifications. */
  weeklySummary: Scalars['Boolean']['output'];
};

export type SubscriptionObject = {
  __typename?: 'SubscriptionObject';
  created: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Integer: The length of the subscription in days. */
  lengthDays?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** JSON: A JSON object containing the program options selected for this subscription. */
  programOptions?: Maybe<Scalars['GenericScalar']['output']>;
  /** DateTime: The date and time the subscription started. */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  /** String: The status of the subscription. See SubscriptionStatus for possible values. */
  status?: Maybe<Scalars['String']['output']>;
  /** String: The Stripe checkout session ID for this subscription. */
  stripeCheckoutSessionId?: Maybe<Scalars['String']['output']>;
  /** String: The Stripe customer ID for this subscription. */
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  /** String: The Stripe subscription ID for this subscription. */
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  /** ForeignKey: A reference to the associated User object. This field links each subscription to a specific user. */
  userId?: Maybe<Scalars['ID']['output']>;
};

export type ZipCode = {
  __typename?: 'ZipCode';
  /** The city */
  city?: Maybe<Scalars['String']['output']>;
  /** The latitude */
  latitude?: Maybe<Scalars['String']['output']>;
  /** The longitude */
  longitude?: Maybe<Scalars['String']['output']>;
  /** Additional metadata about this zip code */
  metadata?: Maybe<Scalars['GenericScalar']['output']>;
  /** The state */
  state?: Maybe<Scalars['String']['output']>;
  /** The zip code */
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  /** Accept an Invite. */
  acceptInvite?: Maybe<AcceptInvite>;
  /** Complete Verification Code for both Password Reset or Activating a new account */
  activateAccount?: Maybe<ActivateAccount>;
  /** Change a user's email address. The user must be logged into their account in order to preform this action.  */
  changeEmailAddress?: Maybe<ChangeEmailAddress>;
  /** Update a user password. The user must be logged into their account in order to preform this action.  */
  changePassword?: Maybe<ChangePassword>;
  /** Complete Verification Code for both Password Reset or Activating a new account */
  completeResetPassword?: Maybe<CompleteResetPassword>;
  /** Crawl a Website. */
  crawlWebsite?: Maybe<CrawlWebsite>;
  /** Create a Area. */
  createArea?: Maybe<CreateArea>;
  /** Create a Data. */
  createData?: Maybe<CreateData>;
  /** Create a Faq. */
  createFaq?: Maybe<CreateFaq>;
  /** Create a Page. */
  createPage?: Maybe<CreatePage>;
  /** Create a Question. */
  createQuestion?: Maybe<CreateQuestion>;
  /** Create a Review. */
  createReview?: Maybe<CreateReview>;
  /** Create a Service. */
  createService?: Maybe<CreateService>;
  /** Create a Website. */
  createWebsite?: Maybe<CreateWebsite>;
  /** Delete a Area. */
  deleteArea?: Maybe<DeleteArea>;
  /** Delete a Collaborator. */
  deleteCollaborator?: Maybe<DeleteCollaborator>;
  /** Delete a Faq. */
  deleteFaq?: Maybe<DeleteFaq>;
  /** Delete a Page. */
  deletePage?: Maybe<DeletePage>;
  /** Delete a Question. */
  deleteQuestion?: Maybe<DeleteQuestion>;
  /** Delete a Review. */
  deleteReview?: Maybe<DeleteReview>;
  /** Delete a Service. */
  deleteService?: Maybe<DeleteService>;
  /** Delete a Website. */
  deleteWebsite?: Maybe<DeleteWebsite>;
  /** Import a Website. */
  importWebsite?: Maybe<ImportWebsite>;
  /** Invite a Collaborator. */
  inviteCollaborator?: Maybe<InviteCollaborator>;
  refreshToken?: Maybe<Refresh>;
  /** Register a mobile Device. */
  registerMobileDevice?: Maybe<RegisterMobileDevice>;
  /** Resend an activation email */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /** Send the provided email_address a password reset link. One can provide a `baseUrl` argument to set the URL base that will be sent to the user email address. */
  resetPassword?: Maybe<ResetPassword>;
  /** Obtain a JSON Web Token (JWT) */
  signin?: Maybe<Signin>;
  /** Login an active user account.  */
  signinOrRegisterRequestForCode?: Maybe<SigninOrRegisterRequestForCode>;
  /** Login an active user account.  */
  signinOrRegisterWithCode?: Maybe<SigninOrRegisterWithCode>;
  /** Create a new user */
  signup?: Maybe<Signup>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /** Login using an external OAuth provider */
  tokenOauthLogin?: Maybe<TokenOAuthLogin>;
  /** Signup using an external OAuth provider */
  tokenOauthSignup?: Maybe<TokenOAuthSignup>;
  /** Update a Area. */
  updateArea?: Maybe<UpdateArea>;
  /** Change a user's email subscription. The user must be logged into their account in order to preform  */
  updateEmailSubscription?: Maybe<UpdateEmailSubscription>;
  /** Update a Faq. */
  updateFaq?: Maybe<UpdateFaq>;
  /** Update a Page. */
  updatePage?: Maybe<UpdatePage>;
  /** Update a Profile. */
  updateProfile?: Maybe<UpdateProfile>;
  /** Update a Question. */
  updateQuestion?: Maybe<UpdateQuestion>;
  /** Update a Review. */
  updateReview?: Maybe<UpdateReview>;
  /** Update a Service. */
  updateService?: Maybe<UpdateService>;
  /** Update a Website. */
  updateWebsite?: Maybe<UpdateWebsite>;
  verifyToken?: Maybe<Verify>;
};


export type MutationsAcceptInviteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsActivateAccountArgs = {
  emailAddress: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};


export type MutationsChangeEmailAddressArgs = {
  newEmailAddress: Scalars['String']['input'];
};


export type MutationsChangePasswordArgs = {
  password: Scalars['String']['input'];
};


export type MutationsCompleteResetPasswordArgs = {
  emailAddress: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};


export type MutationsCrawlWebsiteArgs = {
  input: CrawlWebsiteCreateObject;
};


export type MutationsCreateAreaArgs = {
  input: AreaCreateObject;
};


export type MutationsCreateDataArgs = {
  input: DataCreateObject;
};


export type MutationsCreateFaqArgs = {
  input: FaqCreateObject;
};


export type MutationsCreatePageArgs = {
  input: PageCreateObject;
};


export type MutationsCreateQuestionArgs = {
  input: QuestionCreateObject;
};


export type MutationsCreateReviewArgs = {
  input: ReviewCreateObject;
};


export type MutationsCreateServiceArgs = {
  input: ServiceCreateObject;
};


export type MutationsCreateWebsiteArgs = {
  input: WebsiteCreateObject;
};


export type MutationsDeleteAreaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsDeleteCollaboratorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsDeleteFaqArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsDeletePageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsDeleteQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsDeleteReviewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsDeleteServiceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsDeleteWebsiteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsImportWebsiteArgs = {
  input: Scalars['GenericScalar']['input'];
};


export type MutationsInviteCollaboratorArgs = {
  emailAddress: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};


export type MutationsRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsRegisterMobileDeviceArgs = {
  input: MobileDeviceRegistrationCreateObject;
};


export type MutationsResendActivationEmailArgs = {
  emailAddress: Scalars['String']['input'];
};


export type MutationsResetPasswordArgs = {
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  emailAddress: Scalars['String']['input'];
};


export type MutationsSigninArgs = {
  emailAddress: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationsSigninOrRegisterRequestForCodeArgs = {
  emailAddress: Scalars['String']['input'];
};


export type MutationsSigninOrRegisterWithCodeArgs = {
  code: Scalars['String']['input'];
  emailAddress: Scalars['String']['input'];
};


export type MutationsSignupArgs = {
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  emailAddress: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationsTokenAuthArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationsTokenOauthLoginArgs = {
  oauthPayload?: InputMaybe<Scalars['GenericScalar']['input']>;
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsTokenOauthSignupArgs = {
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUpdateAreaArgs = {
  input: AreaUpdateObject;
};


export type MutationsUpdateEmailSubscriptionArgs = {
  dailySummary: Scalars['Boolean']['input'];
  weeklySummary: Scalars['Boolean']['input'];
};


export type MutationsUpdateFaqArgs = {
  input: FaqUpdateObject;
};


export type MutationsUpdatePageArgs = {
  input: PageUpdateObject;
};


export type MutationsUpdateProfileArgs = {
  input: ProfileUpdateObject;
};


export type MutationsUpdateQuestionArgs = {
  input: QuestionUpdateObject;
};


export type MutationsUpdateReviewArgs = {
  input: ReviewUpdateObject;
};


export type MutationsUpdateServiceArgs = {
  input: ServiceUpdateObject;
};


export type MutationsUpdateWebsiteArgs = {
  input: WebsiteUpdateObject;
};


export type MutationsVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Accept an Invite. */
export type AcceptInvite = {
  __typename?: 'AcceptInvite';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Complete Verification Code for both Password Reset or Activating a new account */
export type ActivateAccount = {
  __typename?: 'ActivateAccount';
  data?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Change a user's email address. The user must be logged into their account in order to preform this action.  */
export type ChangeEmailAddress = {
  __typename?: 'ChangeEmailAddress';
  data?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Update a user password. The user must be logged into their account in order to preform this action.  */
export type ChangePassword = {
  __typename?: 'ChangePassword';
  data?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Complete Verification Code for both Password Reset or Activating a new account */
export type CompleteResetPassword = {
  __typename?: 'CompleteResetPassword';
  data?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CrawlWebsiteCreateObject = {
  webAddress?: InputMaybe<Scalars['String']['input']>;
};

/** Crawl a Website. */
export type CrawlWebsite = {
  __typename?: 'CrawlWebsite';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
};

export type AreaCreateObject = {
  /** Boolean: Indicates if the area is currently active and available for display or use. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text: A detailed description of the area and its characteristics. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The display priority of this area. Higher values indicate higher priority for display. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Boolean: Determines if Schema.org areaServed object tags are used for this area. */
  enableSchemaOrgAreaServedObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text: First customizable HTML content block for additional information or markup related to the area. */
  htmlBlock1?: InputMaybe<Scalars['String']['input']>;
  /** Text: Second customizable HTML content block for additional information or markup related to the area. */
  htmlBlock2?: InputMaybe<Scalars['String']['input']>;
  /** String: URL or path to the image representing the area. Recommended minimum size is 450x300 pixels. */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Array of Strings: List of search engine keywords targeted for this area. */
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: The official name of the area. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Boolean: Specifies whether to display an insurance company widget on the area page. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: URL-friendly identifier for the area, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this area belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  /** String: The postal code associated with the area. */
  zipCode: Scalars['String']['input'];
};

/** Create a Area. */
export type CreateArea = {
  __typename?: 'CreateArea';
  data?: Maybe<AreaObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DataCreateObject = {
  /** JSON: The data of the post. */
  data?: InputMaybe<Scalars['GenericScalar']['input']>;
};

/** Create a Data. */
export type CreateData = {
  __typename?: 'CreateData';
  data?: Maybe<DataObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type FaqCreateObject = {
  /** Boolean: Indicates if the faq is currently active and available for display or use. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: The name of the faq that the business provides. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** String: URL-friendly identifier for the faq, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this faq belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Create a Faq. */
export type CreateFaq = {
  __typename?: 'CreateFaq';
  data?: Maybe<FaqObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type PageCreateObject = {
  /** Boolean: Indicates if the page is currently active and available for viewing. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text: The full HTML content of the page. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Text: A brief text description of the page's content and purpose. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The display priority of this page. Higher values indicate higher priority for display. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Boolean: Specifies if Schema.org Article object tags are used for this page. */
  enableSchemaOrgArticleObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Image: The primary image for the page. Recommended minimum size is 450x300 pixels. */
  image?: InputMaybe<Scalars['FileUploadField']['input']>;
  /** Array of Strings: List of search engine keywords targeted for this page. */
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: The title or name of the page. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Boolean: Indicates whether an insurance company widget is displayed on this page. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: URL-friendly identifier for the page, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this page belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Create a Page. */
export type CreatePage = {
  __typename?: 'CreatePage';
  data?: Maybe<PageObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type QuestionCreateObject = {
  /** Boolean: Indicates if the question is currently active and available for display or use. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: The answer that the business provides. */
  answer?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The display priority of this question. Higher values indicate higher priority for display. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Integer: The ID of the faq to which this question belongs. */
  faqId?: InputMaybe<Scalars['ID']['input']>;
  /** String: The question that the business provides. */
  question?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this question belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Create a Question. */
export type CreateQuestion = {
  __typename?: 'CreateQuestion';
  data?: Maybe<QuestionObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ReviewCreateObject = {
  /** Boolean: Indicates if the review is currently active and visible to users. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text: The full text of the review, detailing the user's experience or opinion. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The display priority of this review. Higher values indicate higher priority for display. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Image: An image of the person who wrote the review. Recommended minimum size is 450x300 pixels. */
  personImage?: InputMaybe<Scalars['String']['input']>;
  /** String: The name of the person who wrote the review. */
  personName?: InputMaybe<Scalars['String']['input']>;
  /** String: The postal code of the reviewer's location. */
  personZipCode?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The rating given in the review, on a scale from 1 to 5, with half-step increments allowed (e.g., 4.5). */
  rating?: InputMaybe<Scalars['Decimal']['input']>;
  /** String: URL-friendly identifier for the review, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** String: A concise title or summary of the review. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this review belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Create a Review. */
export type CreateReview = {
  __typename?: 'CreateReview';
  data?: Maybe<ReviewObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ServiceCreateObject = {
  /** Boolean: Indicates if the service is currently active and available for display or use. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of Image objects: A list of images to display in a carousel on the service page. */
  carouselImages?: InputMaybe<Scalars['GenericScalar']['input']>;
  /** Text: A detailed description of the service, including its features and benefits. */
  description: Scalars['String']['input'];
  /** Integer: The display priority of this service. Higher values indicate higher priority for display. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Boolean: Determines if Schema.org Service object tags are used for this service. */
  enableSchemaOrgServiceObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text: First customizable HTML content block for additional information or markup related to the service. */
  htmlBlock1?: InputMaybe<Scalars['String']['input']>;
  /** Text: Second customizable HTML content block for additional information or markup related to the service. */
  htmlBlock2?: InputMaybe<Scalars['String']['input']>;
  /** String: URL or path to the image representing the service. Recommended minimum size is 450x300 pixels. */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Array of Strings: List of search engine keywords targeted for this service. */
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: The name of the service provided by the business. */
  name: Scalars['String']['input'];
  /** Boolean: Specifies whether to display an insurance company widget on the service page. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: URL-friendly identifier for the service, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this service belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Create a Service. */
export type CreateService = {
  __typename?: 'CreateService';
  data?: Maybe<ServiceObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type WebsiteCreateObject = {
  /** Boolean: Specifies if the website is currently active. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: Primary street address of the business. */
  address1?: InputMaybe<Scalars['String']['input']>;
  /** String: Secondary address line, if any. */
  address2?: InputMaybe<Scalars['String']['input']>;
  /** Text: Detailed description of the business's activities and services. */
  businessDescription?: InputMaybe<Scalars['String']['input']>;
  /** String: Employer Identification Number (EIN) of the business. */
  businessEinNumber?: InputMaybe<Scalars['String']['input']>;
  /** Image: Logo of the business. Recommended minimum size is 450x300 pixels. */
  businessLogo?: InputMaybe<Scalars['String']['input']>;
  /** String: Name of the business manager. */
  businessManagerPersonName?: InputMaybe<Scalars['String']['input']>;
  /** String: The official name of the business. */
  businessName: Scalars['String']['input'];
  /** String: Color of the button border. */
  buttonBorderColor?: InputMaybe<Scalars['String']['input']>;
  /** String: Color of the button. */
  buttonColor?: InputMaybe<Scalars['String']['input']>;
  /** String: Color of the button text. */
  buttonTextColor?: InputMaybe<Scalars['String']['input']>;
  /** String: City where the business is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the call-to-action button. */
  ctaButtonHtml?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the main call-to-action on the website. */
  ctaHtml?: InputMaybe<Scalars['String']['input']>;
  /** Text: Custom CSS code for the website. */
  customCss?: InputMaybe<Scalars['String']['input']>;
  /** Text: Custom HTML code for the website's footer section. */
  customFooterCode?: InputMaybe<Scalars['String']['input']>;
  /** Text: Custom HTML code for the website's header section. */
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  /** Array of Email Addresses: List of email addresses authorized to edit the website. */
  editor?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: Email address for business correspondence. */
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  /** Boolean: Determines if Google SiteMaps is enabled for the website. */
  enableGoogleSitemaps?: InputMaybe<Scalars['Boolean']['input']>;
  /** Boolean: Indicates if Schema.org LocalBusiness object tags are used. */
  enableSchemaOrgLocalbusinessObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Boolean: Indicates if Schema.org Organization object tags are used. */
  enableSchemaOrgOrganizationObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Boolean: Indicates if Schema.org WebPage object tags are used. */
  enableSchemaOrgWebpageObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: Font family for the body text. */
  fontBody?: InputMaybe<Scalars['String']['input']>;
  /** String: Font family for the heading text. */
  fontHeading?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the first link in the footer. */
  footerLink1Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the second link in the footer. */
  footerLink2Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the third link in the footer. */
  footerLink3Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the fourth link in the footer. */
  footerLink4Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the fifth link in the footer. */
  footerLink5Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the message in the footer. */
  footerMessageHtml?: InputMaybe<Scalars['String']['input']>;
  /** Boolean: Indicates if the business address is visible in the footer. */
  footerShowAddress?: InputMaybe<Scalars['Boolean']['input']>;
  /** Integer: Number of service areas to display in the footer. */
  footerShowAreas: Scalars['Int']['input'];
  /** Boolean: Indicates if the business email address is visible in the footer. */
  footerShowEmailAddress?: InputMaybe<Scalars['Boolean']['input']>;
  /** Boolean: Indicates if the business insurance number is visible in the footer. */
  footerShowInsuranceNumber?: InputMaybe<Scalars['Boolean']['input']>;
  /** Boolean: Indicates if the business license number is visible in the footer. */
  footerShowLicenseNumber?: InputMaybe<Scalars['Boolean']['input']>;
  /** Integer: Number of reviews to display in the footer. */
  footerShowReviews: Scalars['Int']['input'];
  /** Integer: Number of services to display in the footer. */
  footerShowServices: Scalars['Int']['input'];
  /** String: Google Analytics ID for tracking website traffic, e.g., 'IX-123213-923s'. */
  googleAnalytics?: InputMaybe<Scalars['String']['input']>;
  /** String: Content of the file used for Google site verification. */
  googleVerificationFileContent?: InputMaybe<Scalars['String']['input']>;
  /** String: File name used for Google site verification. */
  googleVerificationFileName?: InputMaybe<Scalars['String']['input']>;
  /** Image: Background image for the homepage. */
  homepageBackground?: InputMaybe<Scalars['String']['input']>;
  /** String: Insurance policy number of the business. */
  insuranceNumber?: InputMaybe<Scalars['String']['input']>;
  /** String: Official license number of the business. */
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the first link in the navigation bar. */
  navbarLink1Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the second link in the navigation bar. */
  navbarLink2Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the message in the navigation bar. */
  navbarMessageHtml?: InputMaybe<Scalars['String']['input']>;
  /** Integer: Number of service areas to display in the navigation bar. */
  navbarShowAreas: Scalars['Int']['input'];
  /** Boolean: Indicates if the call-to-action button is visible in the navigation bar. */
  navbarShowCtaButton?: InputMaybe<Scalars['Boolean']['input']>;
  /** Integer: Number of services to display in the navigation bar. */
  navbarShowServices: Scalars['Int']['input'];
  /** String: Contact phone number of the business. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** String: Primary color theme of the website. */
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  /** String: Secondary color theme of the website. */
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  /** String: URL-friendly identifier for the business, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** String: State or region where the business is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** Array of Strings: List of top-level domains for the website, e.g., 'my-local-business.com'. */
  tld?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: Postal code of the business's location. */
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Create a Website. */
export type CreateWebsite = {
  __typename?: 'CreateWebsite';
  data?: Maybe<WebsiteObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Delete a Area. */
export type DeleteArea = {
  __typename?: 'DeleteArea';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Delete a Collaborator. */
export type DeleteCollaborator = {
  __typename?: 'DeleteCollaborator';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Delete a Faq. */
export type DeleteFaq = {
  __typename?: 'DeleteFaq';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Delete a Page. */
export type DeletePage = {
  __typename?: 'DeletePage';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Delete a Question. */
export type DeleteQuestion = {
  __typename?: 'DeleteQuestion';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Delete a Review. */
export type DeleteReview = {
  __typename?: 'DeleteReview';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Delete a Service. */
export type DeleteService = {
  __typename?: 'DeleteService';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Delete a Website. */
export type DeleteWebsite = {
  __typename?: 'DeleteWebsite';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Import a Website. */
export type ImportWebsite = {
  __typename?: 'ImportWebsite';
  importedWebsite?: Maybe<WebsiteObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Invite a Collaborator. */
export type InviteCollaborator = {
  __typename?: 'InviteCollaborator';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type MobileDeviceRegistrationCreateObject = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  deviceId: Scalars['String']['input'];
  registrationId: Scalars['String']['input'];
};

/** Register a mobile Device. */
export type RegisterMobileDevice = {
  __typename?: 'RegisterMobileDevice';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Resend an activation email.  */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  data?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Send the provided email_address a password reset link. One can provide a `baseUrl` argument to set the URL base that will be sent to the user email address. */
export type ResetPassword = {
  __typename?: 'ResetPassword';
  data?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Login an active user account.  */
export type Signin = {
  __typename?: 'Signin';
  data?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Login an active user account.  */
export type SigninOrRegisterRequestForCode = {
  __typename?: 'SigninOrRegisterRequestForCode';
  data?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Login an active user account.  */
export type SigninOrRegisterWithCode = {
  __typename?: 'SigninOrRegisterWithCode';
  data?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Creates a new, inactive user account. An activation link will be sent to the user email address. */
export type Signup = {
  __typename?: 'Signup';
  data?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

/** Login using an external OAuth provider */
export type TokenOAuthLogin = {
  __typename?: 'TokenOAuthLogin';
  message?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** Signup using an external OAuth provider */
export type TokenOAuthSignup = {
  __typename?: 'TokenOAuthSignup';
  message?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type AreaUpdateObject = {
  /** Boolean: Indicates if the area is currently active and available for display or use. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text: A detailed description of the area and its characteristics. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The display priority of this area. Higher values indicate higher priority for display. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Boolean: Determines if Schema.org areaServed object tags are used for this area. */
  enableSchemaOrgAreaServedObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text: First customizable HTML content block for additional information or markup related to the area. */
  htmlBlock1?: InputMaybe<Scalars['String']['input']>;
  /** Text: Second customizable HTML content block for additional information or markup related to the area. */
  htmlBlock2?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** String: URL or path to the image representing the area. Recommended minimum size is 450x300 pixels. */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Array of Strings: List of search engine keywords targeted for this area. */
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: The official name of the area. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Boolean: Specifies whether to display an insurance company widget on the area page. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: URL-friendly identifier for the area, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this area belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  /** String: The postal code associated with the area. */
  zipCode: Scalars['String']['input'];
};

/** Update a Area. */
export type UpdateArea = {
  __typename?: 'UpdateArea';
  data?: Maybe<AreaObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Change a user's email subscription. The user must be logged into their account in order to preform  */
export type UpdateEmailSubscription = {
  __typename?: 'UpdateEmailSubscription';
  data?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FaqUpdateObject = {
  /** Boolean: Indicates if the faq is currently active and available for display or use. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  /** String: The name of the faq that the business provides. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** String: URL-friendly identifier for the faq, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this faq belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Update a Faq. */
export type UpdateFaq = {
  __typename?: 'UpdateFaq';
  data?: Maybe<FaqObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type PageUpdateObject = {
  /** Boolean: Indicates if the page is currently active and available for viewing. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text: The full HTML content of the page. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Text: A brief text description of the page's content and purpose. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The display priority of this page. Higher values indicate higher priority for display. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Boolean: Specifies if Schema.org Article object tags are used for this page. */
  enableSchemaOrgArticleObject?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Image: The primary image for the page. Recommended minimum size is 450x300 pixels. */
  image?: InputMaybe<Scalars['FileUploadField']['input']>;
  /** Array of Strings: List of search engine keywords targeted for this page. */
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: The title or name of the page. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Boolean: Indicates whether an insurance company widget is displayed on this page. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: URL-friendly identifier for the page, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this page belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Update a Page. */
export type UpdatePage = {
  __typename?: 'UpdatePage';
  data?: Maybe<PageObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ProfileUpdateObject = {
  /** Boolean: Indicates whether the user opts in for daily summary notifications. */
  dailySummary?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: The first name of the user. Maximum length of 500 characters. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** String: The last name of the user. Maximum length of 500 characters. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** String: Contact phone number of the user. Maximum length of 500 characters. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Boolean: Indicates whether the user opts in for weekly summary notifications. */
  weeklySummary?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Update a Profile. */
export type UpdateProfile = {
  __typename?: 'UpdateProfile';
  data?: Maybe<ProfileObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type QuestionUpdateObject = {
  /** Boolean: Indicates if the question is currently active and available for display or use. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: The answer that the business provides. */
  answer?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The display priority of this question. Higher values indicate higher priority for display. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Integer: The ID of the faq to which this question belongs. */
  faqId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  /** String: The question that the business provides. */
  question?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this question belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Update a Question. */
export type UpdateQuestion = {
  __typename?: 'UpdateQuestion';
  data?: Maybe<QuestionObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ReviewUpdateObject = {
  /** Boolean: Indicates if the review is currently active and visible to users. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text: The full text of the review, detailing the user's experience or opinion. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The display priority of this review. Higher values indicate higher priority for display. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  /** Image: An image of the person who wrote the review. Recommended minimum size is 450x300 pixels. */
  personImage?: InputMaybe<Scalars['String']['input']>;
  /** String: The name of the person who wrote the review. */
  personName?: InputMaybe<Scalars['String']['input']>;
  /** String: The postal code of the reviewer's location. */
  personZipCode?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The rating given in the review, on a scale from 1 to 5, with half-step increments allowed (e.g., 4.5). */
  rating?: InputMaybe<Scalars['Decimal']['input']>;
  /** String: URL-friendly identifier for the review, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** String: A concise title or summary of the review. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this review belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Update a Review. */
export type UpdateReview = {
  __typename?: 'UpdateReview';
  data?: Maybe<ReviewObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ServiceUpdateObject = {
  /** Boolean: Indicates if the service is currently active and available for display or use. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of Image objects: A list of images to display in a carousel on the service page. */
  carouselImages?: InputMaybe<Scalars['GenericScalar']['input']>;
  /** Text: A detailed description of the service, including its features and benefits. */
  description: Scalars['String']['input'];
  /** Integer: The display priority of this service. Higher values indicate higher priority for display. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Boolean: Determines if Schema.org Service object tags are used for this service. */
  enableSchemaOrgServiceObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text: First customizable HTML content block for additional information or markup related to the service. */
  htmlBlock1?: InputMaybe<Scalars['String']['input']>;
  /** Text: Second customizable HTML content block for additional information or markup related to the service. */
  htmlBlock2?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** String: URL or path to the image representing the service. Recommended minimum size is 450x300 pixels. */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Array of Strings: List of search engine keywords targeted for this service. */
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: The name of the service provided by the business. */
  name: Scalars['String']['input'];
  /** Boolean: Specifies whether to display an insurance company widget on the service page. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: URL-friendly identifier for the service, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Integer: The ID of the website to which this service belongs. */
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};

/** Update a Service. */
export type UpdateService = {
  __typename?: 'UpdateService';
  data?: Maybe<ServiceObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type WebsiteUpdateObject = {
  /** Boolean: Specifies if the website is currently active. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: Primary street address of the business. */
  address1?: InputMaybe<Scalars['String']['input']>;
  /** String: Secondary address line, if any. */
  address2?: InputMaybe<Scalars['String']['input']>;
  /** Text: Detailed description of the business's activities and services. */
  businessDescription?: InputMaybe<Scalars['String']['input']>;
  /** String: Employer Identification Number (EIN) of the business. */
  businessEinNumber?: InputMaybe<Scalars['String']['input']>;
  /** Image: Logo of the business. Recommended minimum size is 450x300 pixels. */
  businessLogo?: InputMaybe<Scalars['String']['input']>;
  /** String: Name of the business manager. */
  businessManagerPersonName?: InputMaybe<Scalars['String']['input']>;
  /** String: The official name of the business. */
  businessName?: InputMaybe<Scalars['String']['input']>;
  /** String: Color of the button border. */
  buttonBorderColor?: InputMaybe<Scalars['String']['input']>;
  /** String: Color of the button. */
  buttonColor?: InputMaybe<Scalars['String']['input']>;
  /** String: Color of the button text. */
  buttonTextColor?: InputMaybe<Scalars['String']['input']>;
  /** String: City where the business is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the call-to-action button. */
  ctaButtonHtml?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the main call-to-action on the website. */
  ctaHtml?: InputMaybe<Scalars['String']['input']>;
  /** Text: Custom CSS code for the website. */
  customCss?: InputMaybe<Scalars['String']['input']>;
  /** Text: Custom HTML code for the website's footer section. */
  customFooterCode?: InputMaybe<Scalars['String']['input']>;
  /** Text: Custom HTML code for the website's header section. */
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  /** Array of Email Addresses: List of email addresses authorized to edit the website. */
  editor?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: Email address for business correspondence. */
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  /** Boolean: Determines if Google SiteMaps is enabled for the website. */
  enableGoogleSitemaps?: InputMaybe<Scalars['Boolean']['input']>;
  /** Boolean: Indicates if Schema.org LocalBusiness object tags are used. */
  enableSchemaOrgLocalbusinessObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Boolean: Indicates if Schema.org Organization object tags are used. */
  enableSchemaOrgOrganizationObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Boolean: Indicates if Schema.org WebPage object tags are used. */
  enableSchemaOrgWebpageObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: Font family for the body text. */
  fontBody?: InputMaybe<Scalars['String']['input']>;
  /** String: Font family for the heading text. */
  fontHeading?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the first link in the footer. */
  footerLink1Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the second link in the footer. */
  footerLink2Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the third link in the footer. */
  footerLink3Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the fourth link in the footer. */
  footerLink4Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the fifth link in the footer. */
  footerLink5Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the message in the footer. */
  footerMessageHtml?: InputMaybe<Scalars['String']['input']>;
  /** Boolean: Indicates if the business address is visible in the footer. */
  footerShowAddress?: InputMaybe<Scalars['Boolean']['input']>;
  /** Integer: Number of service areas to display in the footer. */
  footerShowAreas?: InputMaybe<Scalars['Int']['input']>;
  /** Boolean: Indicates if the business email address is visible in the footer. */
  footerShowEmailAddress?: InputMaybe<Scalars['Boolean']['input']>;
  /** Boolean: Indicates if the business insurance number is visible in the footer. */
  footerShowInsuranceNumber?: InputMaybe<Scalars['Boolean']['input']>;
  /** Boolean: Indicates if the business license number is visible in the footer. */
  footerShowLicenseNumber?: InputMaybe<Scalars['Boolean']['input']>;
  /** Integer: Number of reviews to display in the footer. */
  footerShowReviews?: InputMaybe<Scalars['Int']['input']>;
  /** Integer: Number of services to display in the footer. */
  footerShowServices?: InputMaybe<Scalars['Int']['input']>;
  /** String: Google Analytics ID for tracking website traffic, e.g., 'IX-123213-923s'. */
  googleAnalytics?: InputMaybe<Scalars['String']['input']>;
  /** String: Content of the file used for Google site verification. */
  googleVerificationFileContent?: InputMaybe<Scalars['String']['input']>;
  /** String: File name used for Google site verification. */
  googleVerificationFileName?: InputMaybe<Scalars['String']['input']>;
  /** Image: Background image for the homepage. */
  homepageBackground?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** String: Insurance policy number of the business. */
  insuranceNumber?: InputMaybe<Scalars['String']['input']>;
  /** String: Official license number of the business. */
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the first link in the navigation bar. */
  navbarLink1Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the second link in the navigation bar. */
  navbarLink2Html?: InputMaybe<Scalars['String']['input']>;
  /** Text: HTML markup for the message in the navigation bar. */
  navbarMessageHtml?: InputMaybe<Scalars['String']['input']>;
  /** Integer: Number of service areas to display in the navigation bar. */
  navbarShowAreas?: InputMaybe<Scalars['Int']['input']>;
  /** Boolean: Indicates if the call-to-action button is visible in the navigation bar. */
  navbarShowCtaButton?: InputMaybe<Scalars['Boolean']['input']>;
  /** Integer: Number of services to display in the navigation bar. */
  navbarShowServices?: InputMaybe<Scalars['Int']['input']>;
  /** String: Contact phone number of the business. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** String: Primary color theme of the website. */
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  /** String: Secondary color theme of the website. */
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  /** String: URL-friendly identifier for the business, used in web addresses. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** String: State or region where the business is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** Array of Strings: List of top-level domains for the website, e.g., 'my-local-business.com'. */
  tld?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: Postal code of the business's location. */
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Update a Website. */
export type UpdateWebsite = {
  __typename?: 'UpdateWebsite';
  data?: Maybe<WebsiteObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar']['output'];
};

export type AcceptInviteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AcceptInviteMutation = { __typename?: 'Mutations', acceptInvite?: { __typename?: 'AcceptInvite', success?: boolean | null, message?: string | null } | null };

export type ActivateAccountMutationVariables = Exact<{
  emailAddress: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
}>;


export type ActivateAccountMutation = { __typename?: 'Mutations', activateAccount?: { __typename?: 'ActivateAccount', data?: string | null, errors?: Array<string | null> | null } | null };

export type ChangeEmailAddressMutationVariables = Exact<{
  newEmailAddress: Scalars['String']['input'];
}>;


export type ChangeEmailAddressMutation = { __typename?: 'Mutations', changeEmailAddress?: { __typename?: 'ChangeEmailAddress', data?: string | null, errors?: Array<string | null> | null } | null };

export type ChangePasswordMutationVariables = Exact<{
  password: Scalars['String']['input'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutations', changePassword?: { __typename?: 'ChangePassword', data?: string | null, errors?: Array<string | null> | null } | null };

export type CompleteResetPasswordMutationVariables = Exact<{
  emailAddress: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
}>;


export type CompleteResetPasswordMutation = { __typename?: 'Mutations', completeResetPassword?: { __typename?: 'CompleteResetPassword', data?: string | null, errors?: Array<string | null> | null } | null };

export type CrawlWebsiteMutationVariables = Exact<{
  input: CrawlWebsiteCreateObject;
}>;


export type CrawlWebsiteMutation = { __typename?: 'Mutations', crawlWebsite?: { __typename?: 'CrawlWebsite', success?: boolean | null, taskId?: string | null, message?: string | null } | null };

export type CreateAreaMutationVariables = Exact<{
  input: AreaCreateObject;
}>;


export type CreateAreaMutation = { __typename?: 'Mutations', createArea?: { __typename?: 'CreateArea', success?: boolean | null, message?: string | null, data?: { __typename?: 'AreaObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name?: string | null, slug?: string | null, zipCode: string, description?: string | null, image?: string | null, enableSchemaOrgAreaServedObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string> | null, displayOrder: number, pk?: string | null } | null } | null };

export type CreateDataMutationVariables = Exact<{
  input: DataCreateObject;
}>;


export type CreateDataMutation = { __typename?: 'Mutations', createData?: { __typename?: 'CreateData', success?: boolean | null, message?: string | null, data?: { __typename?: 'DataObject', id: string, created: any, updated: any, metadata?: any | null, data?: any | null, ipAddress: string, pk?: string | null } | null } | null };

export type CreateFaqMutationVariables = Exact<{
  input: FaqCreateObject;
}>;


export type CreateFaqMutation = { __typename?: 'Mutations', createFaq?: { __typename?: 'CreateFaq', success?: boolean | null, message?: string | null, data?: { __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name: string, pk?: string | null } | null } | null };

export type CreatePageMutationVariables = Exact<{
  input: PageCreateObject;
}>;


export type CreatePageMutation = { __typename?: 'Mutations', createPage?: { __typename?: 'CreatePage', success?: boolean | null, message?: string | null, data?: { __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description?: string | null, body: string, image?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null } | null } | null };

export type CreateQuestionMutationVariables = Exact<{
  input: QuestionCreateObject;
}>;


export type CreateQuestionMutation = { __typename?: 'Mutations', createQuestion?: { __typename?: 'CreateQuestion', success?: boolean | null, message?: string | null, data?: { __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null } | null } | null };

export type CreateReviewMutationVariables = Exact<{
  input: ReviewCreateObject;
}>;


export type CreateReviewMutation = { __typename?: 'Mutations', createReview?: { __typename?: 'CreateReview', success?: boolean | null, message?: string | null, data?: { __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: any, displayOrder: number, pk?: string | null } | null } | null };

export type CreateServiceMutationVariables = Exact<{
  input: ServiceCreateObject;
}>;


export type CreateServiceMutation = { __typename?: 'Mutations', createService?: { __typename?: 'CreateService', success?: boolean | null, message?: string | null, data?: { __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, carouselImages?: Array<any | null> | null, pk?: string | null } | null } | null };

export type CreateWebsiteMutationVariables = Exact<{
  input: WebsiteCreateObject;
}>;


export type CreateWebsiteMutation = { __typename?: 'Mutations', createWebsite?: { __typename?: 'CreateWebsite', success?: boolean | null, message?: string | null, data?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } | null } | null };

export type DeleteAreaMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteAreaMutation = { __typename?: 'Mutations', deleteArea?: { __typename?: 'DeleteArea', success?: boolean | null, message?: string | null } | null };

export type DeleteCollaboratorMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCollaboratorMutation = { __typename?: 'Mutations', deleteCollaborator?: { __typename?: 'DeleteCollaborator', success?: boolean | null, message?: string | null } | null };

export type DeleteFaqMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFaqMutation = { __typename?: 'Mutations', deleteFaq?: { __typename?: 'DeleteFaq', success?: boolean | null, message?: string | null } | null };

export type DeletePageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePageMutation = { __typename?: 'Mutations', deletePage?: { __typename?: 'DeletePage', success?: boolean | null, message?: string | null } | null };

export type DeleteQuestionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteQuestionMutation = { __typename?: 'Mutations', deleteQuestion?: { __typename?: 'DeleteQuestion', success?: boolean | null, message?: string | null } | null };

export type DeleteReviewMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteReviewMutation = { __typename?: 'Mutations', deleteReview?: { __typename?: 'DeleteReview', success?: boolean | null, message?: string | null } | null };

export type DeleteServiceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteServiceMutation = { __typename?: 'Mutations', deleteService?: { __typename?: 'DeleteService', success?: boolean | null, message?: string | null } | null };

export type DeleteWebsiteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteWebsiteMutation = { __typename?: 'Mutations', deleteWebsite?: { __typename?: 'DeleteWebsite', success?: boolean | null, message?: string | null } | null };

export type ImportWebsiteMutationVariables = Exact<{
  input: Scalars['GenericScalar']['input'];
}>;


export type ImportWebsiteMutation = { __typename?: 'Mutations', importWebsite?: { __typename?: 'ImportWebsite', success?: boolean | null, message?: string | null, importedWebsite?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } | null } | null };

export type InviteCollaboratorMutationVariables = Exact<{
  emailAddress: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
}>;


export type InviteCollaboratorMutation = { __typename?: 'Mutations', inviteCollaborator?: { __typename?: 'InviteCollaborator', success?: boolean | null, message?: string | null } | null };

export type RefreshTokenMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']['input']>;
}>;


export type RefreshTokenMutation = { __typename?: 'Mutations', refreshToken?: { __typename?: 'Refresh', payload: any, refreshExpiresIn: number, token: string } | null };

export type RegisterMobileDeviceMutationVariables = Exact<{
  input: MobileDeviceRegistrationCreateObject;
}>;


export type RegisterMobileDeviceMutation = { __typename?: 'Mutations', registerMobileDevice?: { __typename?: 'RegisterMobileDevice', success?: boolean | null, message?: string | null } | null };

export type ResendActivationEmailMutationVariables = Exact<{
  emailAddress: Scalars['String']['input'];
}>;


export type ResendActivationEmailMutation = { __typename?: 'Mutations', resendActivationEmail?: { __typename?: 'ResendActivationEmail', data?: string | null, errors?: Array<string | null> | null } | null };

export type ResetPasswordMutationVariables = Exact<{
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  emailAddress: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutations', resetPassword?: { __typename?: 'ResetPassword', data?: string | null, errors?: Array<string | null> | null } | null };

export type SigninMutationVariables = Exact<{
  emailAddress: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SigninMutation = { __typename?: 'Mutations', signin?: { __typename?: 'Signin', errors?: Array<string | null> | null, data?: string | null } | null };

export type SigninOrRegisterRequestForCodeMutationVariables = Exact<{
  emailAddress: Scalars['String']['input'];
}>;


export type SigninOrRegisterRequestForCodeMutation = { __typename?: 'Mutations', signinOrRegisterRequestForCode?: { __typename?: 'SigninOrRegisterRequestForCode', errors?: Array<string | null> | null, data?: string | null } | null };

export type SigninOrRegisterWithCodeMutationVariables = Exact<{
  code: Scalars['String']['input'];
  emailAddress: Scalars['String']['input'];
}>;


export type SigninOrRegisterWithCodeMutation = { __typename?: 'Mutations', signinOrRegisterWithCode?: { __typename?: 'SigninOrRegisterWithCode', errors?: Array<string | null> | null, data?: string | null } | null };

export type SignupMutationVariables = Exact<{
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  emailAddress: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignupMutation = { __typename?: 'Mutations', signup?: { __typename?: 'Signup', data?: string | null, errors?: Array<string | null> | null } | null };

export type TokenAuthMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type TokenAuthMutation = { __typename?: 'Mutations', tokenAuth?: { __typename?: 'ObtainJSONWebToken', payload: any, refreshExpiresIn: number, token: string } | null };

export type TokenOauthLoginMutationVariables = Exact<{
  oauthPayload?: InputMaybe<Scalars['GenericScalar']['input']>;
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
}>;


export type TokenOauthLoginMutation = { __typename?: 'Mutations', tokenOauthLogin?: { __typename?: 'TokenOAuthLogin', success?: boolean | null, message?: string | null, token?: string | null, payload?: any | null } | null };

export type TokenOauthSignupMutationVariables = Exact<{
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
}>;


export type TokenOauthSignupMutation = { __typename?: 'Mutations', tokenOauthSignup?: { __typename?: 'TokenOAuthSignup', success?: boolean | null, message?: string | null, token?: string | null, payload?: any | null } | null };

export type UpdateAreaMutationVariables = Exact<{
  input: AreaUpdateObject;
}>;


export type UpdateAreaMutation = { __typename?: 'Mutations', updateArea?: { __typename?: 'UpdateArea', success?: boolean | null, message?: string | null, data?: { __typename?: 'AreaObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name?: string | null, slug?: string | null, zipCode: string, description?: string | null, image?: string | null, enableSchemaOrgAreaServedObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string> | null, displayOrder: number, pk?: string | null } | null } | null };

export type UpdateEmailSubscriptionMutationVariables = Exact<{
  dailySummary: Scalars['Boolean']['input'];
  weeklySummary: Scalars['Boolean']['input'];
}>;


export type UpdateEmailSubscriptionMutation = { __typename?: 'Mutations', updateEmailSubscription?: { __typename?: 'UpdateEmailSubscription', data?: string | null, errors?: Array<string | null> | null } | null };

export type UpdateFaqMutationVariables = Exact<{
  input: FaqUpdateObject;
}>;


export type UpdateFaqMutation = { __typename?: 'Mutations', updateFaq?: { __typename?: 'UpdateFaq', success?: boolean | null, message?: string | null, data?: { __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name: string, pk?: string | null } | null } | null };

export type UpdatePageMutationVariables = Exact<{
  input: PageUpdateObject;
}>;


export type UpdatePageMutation = { __typename?: 'Mutations', updatePage?: { __typename?: 'UpdatePage', success?: boolean | null, message?: string | null, data?: { __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description?: string | null, body: string, image?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null } | null } | null };

export type UpdateProfileMutationVariables = Exact<{
  input: ProfileUpdateObject;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutations', updateProfile?: { __typename?: 'UpdateProfile', success?: boolean | null, message?: string | null, data?: { __typename?: 'ProfileObject', id: string, created: any, updated: any, metadata?: any | null, firstName?: string | null, lastName?: string | null, phoneNumber: string, dailySummary: boolean, weeklySummary: boolean, pk?: string | null, emailAddress?: string | null } | null } | null };

export type UpdateQuestionMutationVariables = Exact<{
  input: QuestionUpdateObject;
}>;


export type UpdateQuestionMutation = { __typename?: 'Mutations', updateQuestion?: { __typename?: 'UpdateQuestion', success?: boolean | null, message?: string | null, data?: { __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null } | null } | null };

export type UpdateReviewMutationVariables = Exact<{
  input: ReviewUpdateObject;
}>;


export type UpdateReviewMutation = { __typename?: 'Mutations', updateReview?: { __typename?: 'UpdateReview', success?: boolean | null, message?: string | null, data?: { __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: any, displayOrder: number, pk?: string | null } | null } | null };

export type UpdateServiceMutationVariables = Exact<{
  input: ServiceUpdateObject;
}>;


export type UpdateServiceMutation = { __typename?: 'Mutations', updateService?: { __typename?: 'UpdateService', success?: boolean | null, message?: string | null, data?: { __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, carouselImages?: Array<any | null> | null, pk?: string | null } | null } | null };

export type UpdateWebsiteMutationVariables = Exact<{
  input: WebsiteUpdateObject;
}>;


export type UpdateWebsiteMutation = { __typename?: 'Mutations', updateWebsite?: { __typename?: 'UpdateWebsite', success?: boolean | null, message?: string | null, data?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } | null } | null };

export type VerifyTokenMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']['input']>;
}>;


export type VerifyTokenMutation = { __typename?: 'Mutations', verifyToken?: { __typename?: 'Verify', payload: any } | null };

export type AreaQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AreaQuery = { __typename?: 'Query', area?: { __typename?: 'AreaObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name?: string | null, slug?: string | null, zipCode: string, description?: string | null, image?: string | null, enableSchemaOrgAreaServedObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string> | null, displayOrder: number, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } } | null };

export type AreasQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AreasQuery = { __typename?: 'Query', areas?: Array<{ __typename?: 'AreaObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name?: string | null, slug?: string | null, zipCode: string, description?: string | null, image?: string | null, enableSchemaOrgAreaServedObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string> | null, displayOrder: number, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } } | null> | null };

export type FaqQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FaqQuery = { __typename?: 'Query', faq?: { __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name: string, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null }, questions: Array<{ __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null }> } | null };

export type FaqsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type FaqsQuery = { __typename?: 'Query', faqs?: Array<{ __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name: string, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null }, questions: Array<{ __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null }> } | null> | null };

export type InvitationsReceivedQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type InvitationsReceivedQuery = { __typename?: 'Query', invitationsReceived?: Array<{ __typename?: 'CollaboratorObject', id?: number | null, user?: string | null, websiteId?: number | null, websiteBusinessName?: string | null, collaboratorEmail?: string | null, collaboratorUser?: string | null, invitationSent?: string | null, invitationAccepted?: string | null } | null> | null };

export type InvitationsSentQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type InvitationsSentQuery = { __typename?: 'Query', invitationsSent?: Array<{ __typename?: 'CollaboratorObject', id?: number | null, user?: string | null, websiteId?: number | null, websiteBusinessName?: string | null, collaboratorEmail?: string | null, collaboratorUser?: string | null, invitationSent?: string | null, invitationAccepted?: string | null } | null> | null };

export type IpAddressQueryVariables = Exact<{
  ipAddress?: InputMaybe<Scalars['String']['input']>;
}>;


export type IpAddressQuery = { __typename?: 'Query', ipAddress?: { __typename?: 'IPAddress', zipCode?: string | null, city?: string | null, stateName?: string | null, stateCode?: string | null, countryName?: string | null, countryCode?: string | null, location?: any | null } | null };

export type PageQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description?: string | null, body: string, image?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } } | null };

export type PagesQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PagesQuery = { __typename?: 'Query', pages?: Array<{ __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description?: string | null, body: string, image?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } } | null> | null };

export type PostdataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PostdataQuery = { __typename?: 'Query', postdata?: { __typename?: 'DataObject', id: string, created: any, updated: any, metadata?: any | null, data?: any | null, ipAddress: string, pk?: string | null, website?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } | null } | null };

export type PostdatasQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type PostdatasQuery = { __typename?: 'Query', postdatas?: Array<{ __typename?: 'DataObject', id: string, created: any, updated: any, metadata?: any | null, data?: any | null, ipAddress: string, pk?: string | null, website?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } | null } | null> | null };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'ProfileObject', id: string, created: any, updated: any, metadata?: any | null, firstName?: string | null, lastName?: string | null, phoneNumber: string, dailySummary: boolean, weeklySummary: boolean, pk?: string | null, emailAddress?: string | null, subscription?: { __typename?: 'SubscriptionObject', id: string, created: any, updated: any, metadata?: any | null, startDate?: any | null, lengthDays?: number | null, programOptions?: any | null, stripeSubscriptionId?: string | null, stripeCustomerId?: string | null, stripeCheckoutSessionId?: string | null, status?: string | null, pk?: string | null, userId?: string | null } | null } | null };

export type QuestionQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QuestionQuery = { __typename?: 'Query', question?: { __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null }, faq?: { __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name: string, pk?: string | null } | null } | null };

export type QuestionsQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QuestionsQuery = { __typename?: 'Query', questions?: Array<{ __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null }, faq?: { __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name: string, pk?: string | null } | null } | null> | null };

export type ReviewQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ReviewQuery = { __typename?: 'Query', review?: { __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: any, displayOrder: number, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } } | null };

export type ReviewsQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ReviewsQuery = { __typename?: 'Query', reviews?: Array<{ __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: any, displayOrder: number, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } } | null> | null };

export type ServiceQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ServiceQuery = { __typename?: 'Query', service?: { __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, carouselImages?: Array<any | null> | null, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } } | null };

export type ServicesQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ServicesQuery = { __typename?: 'Query', services?: Array<{ __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, carouselImages?: Array<any | null> | null, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null } } | null> | null };

export type WebsiteQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type WebsiteQuery = { __typename?: 'Query', website?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null, pages: Array<{ __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description?: string | null, body: string, image?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null }>, areas: Array<{ __typename?: 'AreaObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name?: string | null, slug?: string | null, zipCode: string, description?: string | null, image?: string | null, enableSchemaOrgAreaServedObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string> | null, displayOrder: number, pk?: string | null }>, datas: Array<{ __typename?: 'DataObject', id: string, created: any, updated: any, metadata?: any | null, data?: any | null, ipAddress: string, pk?: string | null }>, faqs: Array<{ __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name: string, pk?: string | null }>, questions: Array<{ __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null }>, services: Array<{ __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, carouselImages?: Array<any | null> | null, pk?: string | null }>, reviews: Array<{ __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: any, displayOrder: number, pk?: string | null }> } | null };

export type WebsitesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type WebsitesQuery = { __typename?: 'Query', websites?: Array<{ __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowInsuranceNumber: boolean, footerShowAddress: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, customCss?: string | null, buttonColor?: string | null, buttonTextColor?: string | null, buttonBorderColor?: string | null, fontBody?: string | null, fontHeading?: string | null, pk?: string | null, defaultSubdomainName?: string | null, pages: Array<{ __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description?: string | null, body: string, image?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null }>, areas: Array<{ __typename?: 'AreaObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name?: string | null, slug?: string | null, zipCode: string, description?: string | null, image?: string | null, enableSchemaOrgAreaServedObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string> | null, displayOrder: number, pk?: string | null }>, datas: Array<{ __typename?: 'DataObject', id: string, created: any, updated: any, metadata?: any | null, data?: any | null, ipAddress: string, pk?: string | null }>, faqs: Array<{ __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name: string, pk?: string | null }>, questions: Array<{ __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null }>, services: Array<{ __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, carouselImages?: Array<any | null> | null, pk?: string | null }>, reviews: Array<{ __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: any, displayOrder: number, pk?: string | null }> } | null> | null };

export type ZipCodeQueryVariables = Exact<{
  zipCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type ZipCodeQuery = { __typename?: 'Query', zipCode?: { __typename?: 'ZipCode', zipCode?: string | null, city?: string | null, state?: string | null, latitude?: string | null, longitude?: string | null, metadata?: any | null } | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  AreaObject: ResolverTypeWrapper<AreaObject>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  JSONString: ResolverTypeWrapper<Scalars['JSONString']['output']>;
  WebsiteObject: ResolverTypeWrapper<WebsiteObject>;
  DataObject: ResolverTypeWrapper<DataObject>;
  FaqObject: ResolverTypeWrapper<FaqObject>;
  QuestionObject: ResolverTypeWrapper<QuestionObject>;
  PageObject: ResolverTypeWrapper<PageObject>;
  ReviewObject: ResolverTypeWrapper<ReviewObject>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  ServiceObject: ResolverTypeWrapper<ServiceObject>;
  CollaboratorObject: ResolverTypeWrapper<CollaboratorObject>;
  IPAddress: ResolverTypeWrapper<IpAddress>;
  GenericScalar: ResolverTypeWrapper<Scalars['GenericScalar']['output']>;
  ProfileObject: ResolverTypeWrapper<ProfileObject>;
  SubscriptionObject: ResolverTypeWrapper<SubscriptionObject>;
  ZipCode: ResolverTypeWrapper<ZipCode>;
  Mutations: ResolverTypeWrapper<{}>;
  AcceptInvite: ResolverTypeWrapper<AcceptInvite>;
  ActivateAccount: ResolverTypeWrapper<ActivateAccount>;
  ChangeEmailAddress: ResolverTypeWrapper<ChangeEmailAddress>;
  ChangePassword: ResolverTypeWrapper<ChangePassword>;
  CompleteResetPassword: ResolverTypeWrapper<CompleteResetPassword>;
  CrawlWebsiteCreateObject: CrawlWebsiteCreateObject;
  CrawlWebsite: ResolverTypeWrapper<CrawlWebsite>;
  AreaCreateObject: AreaCreateObject;
  CreateArea: ResolverTypeWrapper<CreateArea>;
  DataCreateObject: DataCreateObject;
  CreateData: ResolverTypeWrapper<CreateData>;
  FaqCreateObject: FaqCreateObject;
  CreateFaq: ResolverTypeWrapper<CreateFaq>;
  PageCreateObject: PageCreateObject;
  FileUploadField: ResolverTypeWrapper<Scalars['FileUploadField']['output']>;
  CreatePage: ResolverTypeWrapper<CreatePage>;
  QuestionCreateObject: QuestionCreateObject;
  CreateQuestion: ResolverTypeWrapper<CreateQuestion>;
  ReviewCreateObject: ReviewCreateObject;
  CreateReview: ResolverTypeWrapper<CreateReview>;
  ServiceCreateObject: ServiceCreateObject;
  CreateService: ResolverTypeWrapper<CreateService>;
  WebsiteCreateObject: WebsiteCreateObject;
  CreateWebsite: ResolverTypeWrapper<CreateWebsite>;
  DeleteArea: ResolverTypeWrapper<DeleteArea>;
  DeleteCollaborator: ResolverTypeWrapper<DeleteCollaborator>;
  DeleteFaq: ResolverTypeWrapper<DeleteFaq>;
  DeletePage: ResolverTypeWrapper<DeletePage>;
  DeleteQuestion: ResolverTypeWrapper<DeleteQuestion>;
  DeleteReview: ResolverTypeWrapper<DeleteReview>;
  DeleteService: ResolverTypeWrapper<DeleteService>;
  DeleteWebsite: ResolverTypeWrapper<DeleteWebsite>;
  ImportWebsite: ResolverTypeWrapper<ImportWebsite>;
  InviteCollaborator: ResolverTypeWrapper<InviteCollaborator>;
  Refresh: ResolverTypeWrapper<Refresh>;
  MobileDeviceRegistrationCreateObject: MobileDeviceRegistrationCreateObject;
  RegisterMobileDevice: ResolverTypeWrapper<RegisterMobileDevice>;
  ResendActivationEmail: ResolverTypeWrapper<ResendActivationEmail>;
  ResetPassword: ResolverTypeWrapper<ResetPassword>;
  Signin: ResolverTypeWrapper<Signin>;
  SigninOrRegisterRequestForCode: ResolverTypeWrapper<SigninOrRegisterRequestForCode>;
  SigninOrRegisterWithCode: ResolverTypeWrapper<SigninOrRegisterWithCode>;
  Signup: ResolverTypeWrapper<Signup>;
  ObtainJSONWebToken: ResolverTypeWrapper<ObtainJsonWebToken>;
  TokenOAuthLogin: ResolverTypeWrapper<TokenOAuthLogin>;
  TokenOAuthSignup: ResolverTypeWrapper<TokenOAuthSignup>;
  AreaUpdateObject: AreaUpdateObject;
  UpdateArea: ResolverTypeWrapper<UpdateArea>;
  UpdateEmailSubscription: ResolverTypeWrapper<UpdateEmailSubscription>;
  FaqUpdateObject: FaqUpdateObject;
  UpdateFaq: ResolverTypeWrapper<UpdateFaq>;
  PageUpdateObject: PageUpdateObject;
  UpdatePage: ResolverTypeWrapper<UpdatePage>;
  ProfileUpdateObject: ProfileUpdateObject;
  UpdateProfile: ResolverTypeWrapper<UpdateProfile>;
  QuestionUpdateObject: QuestionUpdateObject;
  UpdateQuestion: ResolverTypeWrapper<UpdateQuestion>;
  ReviewUpdateObject: ReviewUpdateObject;
  UpdateReview: ResolverTypeWrapper<UpdateReview>;
  ServiceUpdateObject: ServiceUpdateObject;
  UpdateService: ResolverTypeWrapper<UpdateService>;
  WebsiteUpdateObject: WebsiteUpdateObject;
  UpdateWebsite: ResolverTypeWrapper<UpdateWebsite>;
  Verify: ResolverTypeWrapper<Verify>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int']['output'];
  AreaObject: AreaObject;
  Boolean: Scalars['Boolean']['output'];
  DateTime: Scalars['DateTime']['output'];
  String: Scalars['String']['output'];
  ID: Scalars['ID']['output'];
  JSONString: Scalars['JSONString']['output'];
  WebsiteObject: WebsiteObject;
  DataObject: DataObject;
  FaqObject: FaqObject;
  QuestionObject: QuestionObject;
  PageObject: PageObject;
  ReviewObject: ReviewObject;
  Decimal: Scalars['Decimal']['output'];
  ServiceObject: ServiceObject;
  CollaboratorObject: CollaboratorObject;
  IPAddress: IpAddress;
  GenericScalar: Scalars['GenericScalar']['output'];
  ProfileObject: ProfileObject;
  SubscriptionObject: SubscriptionObject;
  ZipCode: ZipCode;
  Mutations: {};
  AcceptInvite: AcceptInvite;
  ActivateAccount: ActivateAccount;
  ChangeEmailAddress: ChangeEmailAddress;
  ChangePassword: ChangePassword;
  CompleteResetPassword: CompleteResetPassword;
  CrawlWebsiteCreateObject: CrawlWebsiteCreateObject;
  CrawlWebsite: CrawlWebsite;
  AreaCreateObject: AreaCreateObject;
  CreateArea: CreateArea;
  DataCreateObject: DataCreateObject;
  CreateData: CreateData;
  FaqCreateObject: FaqCreateObject;
  CreateFaq: CreateFaq;
  PageCreateObject: PageCreateObject;
  FileUploadField: Scalars['FileUploadField']['output'];
  CreatePage: CreatePage;
  QuestionCreateObject: QuestionCreateObject;
  CreateQuestion: CreateQuestion;
  ReviewCreateObject: ReviewCreateObject;
  CreateReview: CreateReview;
  ServiceCreateObject: ServiceCreateObject;
  CreateService: CreateService;
  WebsiteCreateObject: WebsiteCreateObject;
  CreateWebsite: CreateWebsite;
  DeleteArea: DeleteArea;
  DeleteCollaborator: DeleteCollaborator;
  DeleteFaq: DeleteFaq;
  DeletePage: DeletePage;
  DeleteQuestion: DeleteQuestion;
  DeleteReview: DeleteReview;
  DeleteService: DeleteService;
  DeleteWebsite: DeleteWebsite;
  ImportWebsite: ImportWebsite;
  InviteCollaborator: InviteCollaborator;
  Refresh: Refresh;
  MobileDeviceRegistrationCreateObject: MobileDeviceRegistrationCreateObject;
  RegisterMobileDevice: RegisterMobileDevice;
  ResendActivationEmail: ResendActivationEmail;
  ResetPassword: ResetPassword;
  Signin: Signin;
  SigninOrRegisterRequestForCode: SigninOrRegisterRequestForCode;
  SigninOrRegisterWithCode: SigninOrRegisterWithCode;
  Signup: Signup;
  ObtainJSONWebToken: ObtainJsonWebToken;
  TokenOAuthLogin: TokenOAuthLogin;
  TokenOAuthSignup: TokenOAuthSignup;
  AreaUpdateObject: AreaUpdateObject;
  UpdateArea: UpdateArea;
  UpdateEmailSubscription: UpdateEmailSubscription;
  FaqUpdateObject: FaqUpdateObject;
  UpdateFaq: UpdateFaq;
  PageUpdateObject: PageUpdateObject;
  UpdatePage: UpdatePage;
  ProfileUpdateObject: ProfileUpdateObject;
  UpdateProfile: UpdateProfile;
  QuestionUpdateObject: QuestionUpdateObject;
  UpdateQuestion: UpdateQuestion;
  ReviewUpdateObject: ReviewUpdateObject;
  UpdateReview: UpdateReview;
  ServiceUpdateObject: ServiceUpdateObject;
  UpdateService: UpdateService;
  WebsiteUpdateObject: WebsiteUpdateObject;
  UpdateWebsite: UpdateWebsite;
  Verify: Verify;
};

export type SpecifiedByDirectiveArgs = {
  url: Scalars['String']['input'];
};

export type SpecifiedByDirectiveResolver<Result, Parent, ContextType = any, Args = SpecifiedByDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  area?: Resolver<Maybe<ResolversTypes['AreaObject']>, ParentType, ContextType, Partial<QueryAreaArgs>>;
  areas?: Resolver<Maybe<Array<Maybe<ResolversTypes['AreaObject']>>>, ParentType, ContextType, Partial<QueryAreasArgs>>;
  faq?: Resolver<Maybe<ResolversTypes['FaqObject']>, ParentType, ContextType, Partial<QueryFaqArgs>>;
  faqs?: Resolver<Maybe<Array<Maybe<ResolversTypes['FaqObject']>>>, ParentType, ContextType, Partial<QueryFaqsArgs>>;
  invitationsReceived?: Resolver<Maybe<Array<Maybe<ResolversTypes['CollaboratorObject']>>>, ParentType, ContextType, Partial<QueryInvitationsReceivedArgs>>;
  invitationsSent?: Resolver<Maybe<Array<Maybe<ResolversTypes['CollaboratorObject']>>>, ParentType, ContextType, Partial<QueryInvitationsSentArgs>>;
  ipAddress?: Resolver<Maybe<ResolversTypes['IPAddress']>, ParentType, ContextType, Partial<QueryIpAddressArgs>>;
  page?: Resolver<Maybe<ResolversTypes['PageObject']>, ParentType, ContextType, Partial<QueryPageArgs>>;
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['PageObject']>>>, ParentType, ContextType, Partial<QueryPagesArgs>>;
  postdata?: Resolver<Maybe<ResolversTypes['DataObject']>, ParentType, ContextType, Partial<QueryPostdataArgs>>;
  postdatas?: Resolver<Maybe<Array<Maybe<ResolversTypes['DataObject']>>>, ParentType, ContextType, Partial<QueryPostdatasArgs>>;
  profile?: Resolver<Maybe<ResolversTypes['ProfileObject']>, ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['QuestionObject']>, ParentType, ContextType, Partial<QueryQuestionArgs>>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuestionObject']>>>, ParentType, ContextType, Partial<QueryQuestionsArgs>>;
  review?: Resolver<Maybe<ResolversTypes['ReviewObject']>, ParentType, ContextType, Partial<QueryReviewArgs>>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReviewObject']>>>, ParentType, ContextType, Partial<QueryReviewsArgs>>;
  service?: Resolver<Maybe<ResolversTypes['ServiceObject']>, ParentType, ContextType, Partial<QueryServiceArgs>>;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServiceObject']>>>, ParentType, ContextType, Partial<QueryServicesArgs>>;
  website?: Resolver<Maybe<ResolversTypes['WebsiteObject']>, ParentType, ContextType, Partial<QueryWebsiteArgs>>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['WebsiteObject']>>>, ParentType, ContextType, Partial<QueryWebsitesArgs>>;
  zipCode?: Resolver<Maybe<ResolversTypes['ZipCode']>, ParentType, ContextType, Partial<QueryZipCodeArgs>>;
};

export type AreaObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['AreaObject'] = ResolversParentTypes['AreaObject']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  enableSchemaOrgAreaServedObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  htmlBlock1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  htmlBlock2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keywordTargeting?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  showInsuranceCompanyWidget?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JsonStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONString'], any> {
  name: 'JSONString';
}

export type WebsiteObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['WebsiteObject'] = ResolversParentTypes['WebsiteObject']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  areas?: Resolver<Array<ResolversTypes['AreaObject']>, ParentType, ContextType>;
  businessDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessEinNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessLogo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessManagerPersonName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  buttonBorderColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buttonColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buttonTextColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  ctaButtonHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ctaHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customCss?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customFooterCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHeaderCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datas?: Resolver<Array<ResolversTypes['DataObject']>, ParentType, ContextType>;
  defaultSubdomainName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editor?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  emailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enableGoogleSitemaps?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableSchemaOrgLocalbusinessObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableSchemaOrgOrganizationObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableSchemaOrgWebpageObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  faqs?: Resolver<Array<ResolversTypes['FaqObject']>, ParentType, ContextType>;
  fontBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fontHeading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerLink1Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerLink2Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerLink3Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerLink4Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerLink5Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerMessageHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerShowAddress?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  footerShowAreas?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  footerShowEmailAddress?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  footerShowInsuranceNumber?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  footerShowLicenseNumber?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  footerShowReviews?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  footerShowServices?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  googleAnalytics?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleVerificationFileContent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleVerificationFileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homepageBackground?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  insuranceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  licenseNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  navbarLink1Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  navbarLink2Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  navbarMessageHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  navbarShowAreas?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  navbarShowCtaButton?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  navbarShowServices?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pages?: Resolver<Array<ResolversTypes['PageObject']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  primaryColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  questions?: Resolver<Array<ResolversTypes['QuestionObject']>, ParentType, ContextType>;
  reviews?: Resolver<Array<ResolversTypes['ReviewObject']>, ParentType, ContextType>;
  secondaryColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  services?: Resolver<Array<ResolversTypes['ServiceObject']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tld?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataObject'] = ResolversParentTypes['DataObject']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ipAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['WebsiteObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['FaqObject'] = ResolversParentTypes['FaqObject']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  questions?: Resolver<Array<ResolversTypes['QuestionObject']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionObject'] = ResolversParentTypes['QuestionObject']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  faq?: Resolver<Maybe<ResolversTypes['FaqObject']>, ParentType, ContextType>;
  faqId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageObject'] = ResolversParentTypes['PageObject']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  enableSchemaOrgArticleObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keywordTargeting?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  showInsuranceCompanyWidget?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewObject'] = ResolversParentTypes['ReviewObject']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  personImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personZipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type ServiceObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceObject'] = ResolversParentTypes['ServiceObject']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  carouselImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSONString']>>>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  enableSchemaOrgServiceObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  htmlBlock1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  htmlBlock2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keywordTargeting?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  showInsuranceCompanyWidget?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollaboratorObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollaboratorObject'] = ResolversParentTypes['CollaboratorObject']> = {
  collaboratorEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collaboratorUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  invitationAccepted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitationSent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websiteBusinessName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  websiteId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IpAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['IPAddress'] = ResolversParentTypes['IPAddress']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['GenericScalar']>, ParentType, ContextType>;
  stateCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stateName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GenericScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GenericScalar'], any> {
  name: 'GenericScalar';
}

export type ProfileObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileObject'] = ResolversParentTypes['ProfileObject']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dailySummary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  emailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  subscription?: Resolver<Maybe<ResolversTypes['SubscriptionObject']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  weeklySummary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriptionObject'] = ResolversParentTypes['SubscriptionObject']> = {
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lengthDays?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  programOptions?: Resolver<Maybe<ResolversTypes['GenericScalar']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stripeCheckoutSessionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stripeCustomerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stripeSubscriptionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ZipCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ZipCode'] = ResolversParentTypes['ZipCode']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['GenericScalar']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutations'] = ResolversParentTypes['Mutations']> = {
  acceptInvite?: Resolver<Maybe<ResolversTypes['AcceptInvite']>, ParentType, ContextType, RequireFields<MutationsAcceptInviteArgs, 'id'>>;
  activateAccount?: Resolver<Maybe<ResolversTypes['ActivateAccount']>, ParentType, ContextType, RequireFields<MutationsActivateAccountArgs, 'emailAddress' | 'verificationCode'>>;
  changeEmailAddress?: Resolver<Maybe<ResolversTypes['ChangeEmailAddress']>, ParentType, ContextType, RequireFields<MutationsChangeEmailAddressArgs, 'newEmailAddress'>>;
  changePassword?: Resolver<Maybe<ResolversTypes['ChangePassword']>, ParentType, ContextType, RequireFields<MutationsChangePasswordArgs, 'password'>>;
  completeResetPassword?: Resolver<Maybe<ResolversTypes['CompleteResetPassword']>, ParentType, ContextType, RequireFields<MutationsCompleteResetPasswordArgs, 'emailAddress' | 'verificationCode'>>;
  crawlWebsite?: Resolver<Maybe<ResolversTypes['CrawlWebsite']>, ParentType, ContextType, RequireFields<MutationsCrawlWebsiteArgs, 'input'>>;
  createArea?: Resolver<Maybe<ResolversTypes['CreateArea']>, ParentType, ContextType, RequireFields<MutationsCreateAreaArgs, 'input'>>;
  createData?: Resolver<Maybe<ResolversTypes['CreateData']>, ParentType, ContextType, RequireFields<MutationsCreateDataArgs, 'input'>>;
  createFaq?: Resolver<Maybe<ResolversTypes['CreateFaq']>, ParentType, ContextType, RequireFields<MutationsCreateFaqArgs, 'input'>>;
  createPage?: Resolver<Maybe<ResolversTypes['CreatePage']>, ParentType, ContextType, RequireFields<MutationsCreatePageArgs, 'input'>>;
  createQuestion?: Resolver<Maybe<ResolversTypes['CreateQuestion']>, ParentType, ContextType, RequireFields<MutationsCreateQuestionArgs, 'input'>>;
  createReview?: Resolver<Maybe<ResolversTypes['CreateReview']>, ParentType, ContextType, RequireFields<MutationsCreateReviewArgs, 'input'>>;
  createService?: Resolver<Maybe<ResolversTypes['CreateService']>, ParentType, ContextType, RequireFields<MutationsCreateServiceArgs, 'input'>>;
  createWebsite?: Resolver<Maybe<ResolversTypes['CreateWebsite']>, ParentType, ContextType, RequireFields<MutationsCreateWebsiteArgs, 'input'>>;
  deleteArea?: Resolver<Maybe<ResolversTypes['DeleteArea']>, ParentType, ContextType, RequireFields<MutationsDeleteAreaArgs, 'id'>>;
  deleteCollaborator?: Resolver<Maybe<ResolversTypes['DeleteCollaborator']>, ParentType, ContextType, RequireFields<MutationsDeleteCollaboratorArgs, 'id'>>;
  deleteFaq?: Resolver<Maybe<ResolversTypes['DeleteFaq']>, ParentType, ContextType, RequireFields<MutationsDeleteFaqArgs, 'id'>>;
  deletePage?: Resolver<Maybe<ResolversTypes['DeletePage']>, ParentType, ContextType, RequireFields<MutationsDeletePageArgs, 'id'>>;
  deleteQuestion?: Resolver<Maybe<ResolversTypes['DeleteQuestion']>, ParentType, ContextType, RequireFields<MutationsDeleteQuestionArgs, 'id'>>;
  deleteReview?: Resolver<Maybe<ResolversTypes['DeleteReview']>, ParentType, ContextType, RequireFields<MutationsDeleteReviewArgs, 'id'>>;
  deleteService?: Resolver<Maybe<ResolversTypes['DeleteService']>, ParentType, ContextType, RequireFields<MutationsDeleteServiceArgs, 'id'>>;
  deleteWebsite?: Resolver<Maybe<ResolversTypes['DeleteWebsite']>, ParentType, ContextType, RequireFields<MutationsDeleteWebsiteArgs, 'id'>>;
  importWebsite?: Resolver<Maybe<ResolversTypes['ImportWebsite']>, ParentType, ContextType, RequireFields<MutationsImportWebsiteArgs, 'input'>>;
  inviteCollaborator?: Resolver<Maybe<ResolversTypes['InviteCollaborator']>, ParentType, ContextType, RequireFields<MutationsInviteCollaboratorArgs, 'emailAddress' | 'websiteId'>>;
  refreshToken?: Resolver<Maybe<ResolversTypes['Refresh']>, ParentType, ContextType, Partial<MutationsRefreshTokenArgs>>;
  registerMobileDevice?: Resolver<Maybe<ResolversTypes['RegisterMobileDevice']>, ParentType, ContextType, RequireFields<MutationsRegisterMobileDeviceArgs, 'input'>>;
  resendActivationEmail?: Resolver<Maybe<ResolversTypes['ResendActivationEmail']>, ParentType, ContextType, RequireFields<MutationsResendActivationEmailArgs, 'emailAddress'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['ResetPassword']>, ParentType, ContextType, RequireFields<MutationsResetPasswordArgs, 'emailAddress'>>;
  signin?: Resolver<Maybe<ResolversTypes['Signin']>, ParentType, ContextType, RequireFields<MutationsSigninArgs, 'emailAddress' | 'password'>>;
  signinOrRegisterRequestForCode?: Resolver<Maybe<ResolversTypes['SigninOrRegisterRequestForCode']>, ParentType, ContextType, RequireFields<MutationsSigninOrRegisterRequestForCodeArgs, 'emailAddress'>>;
  signinOrRegisterWithCode?: Resolver<Maybe<ResolversTypes['SigninOrRegisterWithCode']>, ParentType, ContextType, RequireFields<MutationsSigninOrRegisterWithCodeArgs, 'code' | 'emailAddress'>>;
  signup?: Resolver<Maybe<ResolversTypes['Signup']>, ParentType, ContextType, RequireFields<MutationsSignupArgs, 'emailAddress' | 'password'>>;
  tokenAuth?: Resolver<Maybe<ResolversTypes['ObtainJSONWebToken']>, ParentType, ContextType, RequireFields<MutationsTokenAuthArgs, 'password' | 'username'>>;
  tokenOauthLogin?: Resolver<Maybe<ResolversTypes['TokenOAuthLogin']>, ParentType, ContextType, Partial<MutationsTokenOauthLoginArgs>>;
  tokenOauthSignup?: Resolver<Maybe<ResolversTypes['TokenOAuthSignup']>, ParentType, ContextType, Partial<MutationsTokenOauthSignupArgs>>;
  updateArea?: Resolver<Maybe<ResolversTypes['UpdateArea']>, ParentType, ContextType, RequireFields<MutationsUpdateAreaArgs, 'input'>>;
  updateEmailSubscription?: Resolver<Maybe<ResolversTypes['UpdateEmailSubscription']>, ParentType, ContextType, RequireFields<MutationsUpdateEmailSubscriptionArgs, 'dailySummary' | 'weeklySummary'>>;
  updateFaq?: Resolver<Maybe<ResolversTypes['UpdateFaq']>, ParentType, ContextType, RequireFields<MutationsUpdateFaqArgs, 'input'>>;
  updatePage?: Resolver<Maybe<ResolversTypes['UpdatePage']>, ParentType, ContextType, RequireFields<MutationsUpdatePageArgs, 'input'>>;
  updateProfile?: Resolver<Maybe<ResolversTypes['UpdateProfile']>, ParentType, ContextType, RequireFields<MutationsUpdateProfileArgs, 'input'>>;
  updateQuestion?: Resolver<Maybe<ResolversTypes['UpdateQuestion']>, ParentType, ContextType, RequireFields<MutationsUpdateQuestionArgs, 'input'>>;
  updateReview?: Resolver<Maybe<ResolversTypes['UpdateReview']>, ParentType, ContextType, RequireFields<MutationsUpdateReviewArgs, 'input'>>;
  updateService?: Resolver<Maybe<ResolversTypes['UpdateService']>, ParentType, ContextType, RequireFields<MutationsUpdateServiceArgs, 'input'>>;
  updateWebsite?: Resolver<Maybe<ResolversTypes['UpdateWebsite']>, ParentType, ContextType, RequireFields<MutationsUpdateWebsiteArgs, 'input'>>;
  verifyToken?: Resolver<Maybe<ResolversTypes['Verify']>, ParentType, ContextType, Partial<MutationsVerifyTokenArgs>>;
};

export type AcceptInviteResolvers<ContextType = any, ParentType extends ResolversParentTypes['AcceptInvite'] = ResolversParentTypes['AcceptInvite']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivateAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivateAccount'] = ResolversParentTypes['ActivateAccount']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChangeEmailAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChangeEmailAddress'] = ResolversParentTypes['ChangeEmailAddress']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChangePasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChangePassword'] = ResolversParentTypes['ChangePassword']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompleteResetPasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteResetPassword'] = ResolversParentTypes['CompleteResetPassword']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrawlWebsiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['CrawlWebsite'] = ResolversParentTypes['CrawlWebsite']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  taskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAreaResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateArea'] = ResolversParentTypes['CreateArea']> = {
  data?: Resolver<Maybe<ResolversTypes['AreaObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateData'] = ResolversParentTypes['CreateData']> = {
  data?: Resolver<Maybe<ResolversTypes['DataObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFaqResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateFaq'] = ResolversParentTypes['CreateFaq']> = {
  data?: Resolver<Maybe<ResolversTypes['FaqObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface FileUploadFieldScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['FileUploadField'], any> {
  name: 'FileUploadField';
}

export type CreatePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePage'] = ResolversParentTypes['CreatePage']> = {
  data?: Resolver<Maybe<ResolversTypes['PageObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateQuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateQuestion'] = ResolversParentTypes['CreateQuestion']> = {
  data?: Resolver<Maybe<ResolversTypes['QuestionObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateReview'] = ResolversParentTypes['CreateReview']> = {
  data?: Resolver<Maybe<ResolversTypes['ReviewObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateService'] = ResolversParentTypes['CreateService']> = {
  data?: Resolver<Maybe<ResolversTypes['ServiceObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateWebsiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateWebsite'] = ResolversParentTypes['CreateWebsite']> = {
  data?: Resolver<Maybe<ResolversTypes['WebsiteObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteAreaResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteArea'] = ResolversParentTypes['DeleteArea']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCollaboratorResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteCollaborator'] = ResolversParentTypes['DeleteCollaborator']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteFaqResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteFaq'] = ResolversParentTypes['DeleteFaq']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletePage'] = ResolversParentTypes['DeletePage']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteQuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteQuestion'] = ResolversParentTypes['DeleteQuestion']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteReview'] = ResolversParentTypes['DeleteReview']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteService'] = ResolversParentTypes['DeleteService']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteWebsiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteWebsite'] = ResolversParentTypes['DeleteWebsite']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImportWebsiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImportWebsite'] = ResolversParentTypes['ImportWebsite']> = {
  importedWebsite?: Resolver<Maybe<ResolversTypes['WebsiteObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InviteCollaboratorResolvers<ContextType = any, ParentType extends ResolversParentTypes['InviteCollaborator'] = ResolversParentTypes['InviteCollaborator']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefreshResolvers<ContextType = any, ParentType extends ResolversParentTypes['Refresh'] = ResolversParentTypes['Refresh']> = {
  payload?: Resolver<ResolversTypes['GenericScalar'], ParentType, ContextType>;
  refreshExpiresIn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisterMobileDeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterMobileDevice'] = ResolversParentTypes['RegisterMobileDevice']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResendActivationEmailResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResendActivationEmail'] = ResolversParentTypes['ResendActivationEmail']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResetPasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResetPassword'] = ResolversParentTypes['ResetPassword']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SigninResolvers<ContextType = any, ParentType extends ResolversParentTypes['Signin'] = ResolversParentTypes['Signin']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SigninOrRegisterRequestForCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SigninOrRegisterRequestForCode'] = ResolversParentTypes['SigninOrRegisterRequestForCode']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SigninOrRegisterWithCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SigninOrRegisterWithCode'] = ResolversParentTypes['SigninOrRegisterWithCode']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Signup'] = ResolversParentTypes['Signup']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ObtainJsonWebTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObtainJSONWebToken'] = ResolversParentTypes['ObtainJSONWebToken']> = {
  payload?: Resolver<ResolversTypes['GenericScalar'], ParentType, ContextType>;
  refreshExpiresIn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenOAuthLoginResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenOAuthLogin'] = ResolversParentTypes['TokenOAuthLogin']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['GenericScalar']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenOAuthSignupResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenOAuthSignup'] = ResolversParentTypes['TokenOAuthSignup']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['GenericScalar']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAreaResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateArea'] = ResolversParentTypes['UpdateArea']> = {
  data?: Resolver<Maybe<ResolversTypes['AreaObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateEmailSubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateEmailSubscription'] = ResolversParentTypes['UpdateEmailSubscription']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateFaqResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateFaq'] = ResolversParentTypes['UpdateFaq']> = {
  data?: Resolver<Maybe<ResolversTypes['FaqObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePage'] = ResolversParentTypes['UpdatePage']> = {
  data?: Resolver<Maybe<ResolversTypes['PageObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateProfile'] = ResolversParentTypes['UpdateProfile']> = {
  data?: Resolver<Maybe<ResolversTypes['ProfileObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateQuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateQuestion'] = ResolversParentTypes['UpdateQuestion']> = {
  data?: Resolver<Maybe<ResolversTypes['QuestionObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateReview'] = ResolversParentTypes['UpdateReview']> = {
  data?: Resolver<Maybe<ResolversTypes['ReviewObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateService'] = ResolversParentTypes['UpdateService']> = {
  data?: Resolver<Maybe<ResolversTypes['ServiceObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateWebsiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateWebsite'] = ResolversParentTypes['UpdateWebsite']> = {
  data?: Resolver<Maybe<ResolversTypes['WebsiteObject']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerifyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Verify'] = ResolversParentTypes['Verify']> = {
  payload?: Resolver<ResolversTypes['GenericScalar'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  AreaObject?: AreaObjectResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  JSONString?: GraphQLScalarType;
  WebsiteObject?: WebsiteObjectResolvers<ContextType>;
  DataObject?: DataObjectResolvers<ContextType>;
  FaqObject?: FaqObjectResolvers<ContextType>;
  QuestionObject?: QuestionObjectResolvers<ContextType>;
  PageObject?: PageObjectResolvers<ContextType>;
  ReviewObject?: ReviewObjectResolvers<ContextType>;
  Decimal?: GraphQLScalarType;
  ServiceObject?: ServiceObjectResolvers<ContextType>;
  CollaboratorObject?: CollaboratorObjectResolvers<ContextType>;
  IPAddress?: IpAddressResolvers<ContextType>;
  GenericScalar?: GraphQLScalarType;
  ProfileObject?: ProfileObjectResolvers<ContextType>;
  SubscriptionObject?: SubscriptionObjectResolvers<ContextType>;
  ZipCode?: ZipCodeResolvers<ContextType>;
  Mutations?: MutationsResolvers<ContextType>;
  AcceptInvite?: AcceptInviteResolvers<ContextType>;
  ActivateAccount?: ActivateAccountResolvers<ContextType>;
  ChangeEmailAddress?: ChangeEmailAddressResolvers<ContextType>;
  ChangePassword?: ChangePasswordResolvers<ContextType>;
  CompleteResetPassword?: CompleteResetPasswordResolvers<ContextType>;
  CrawlWebsite?: CrawlWebsiteResolvers<ContextType>;
  CreateArea?: CreateAreaResolvers<ContextType>;
  CreateData?: CreateDataResolvers<ContextType>;
  CreateFaq?: CreateFaqResolvers<ContextType>;
  FileUploadField?: GraphQLScalarType;
  CreatePage?: CreatePageResolvers<ContextType>;
  CreateQuestion?: CreateQuestionResolvers<ContextType>;
  CreateReview?: CreateReviewResolvers<ContextType>;
  CreateService?: CreateServiceResolvers<ContextType>;
  CreateWebsite?: CreateWebsiteResolvers<ContextType>;
  DeleteArea?: DeleteAreaResolvers<ContextType>;
  DeleteCollaborator?: DeleteCollaboratorResolvers<ContextType>;
  DeleteFaq?: DeleteFaqResolvers<ContextType>;
  DeletePage?: DeletePageResolvers<ContextType>;
  DeleteQuestion?: DeleteQuestionResolvers<ContextType>;
  DeleteReview?: DeleteReviewResolvers<ContextType>;
  DeleteService?: DeleteServiceResolvers<ContextType>;
  DeleteWebsite?: DeleteWebsiteResolvers<ContextType>;
  ImportWebsite?: ImportWebsiteResolvers<ContextType>;
  InviteCollaborator?: InviteCollaboratorResolvers<ContextType>;
  Refresh?: RefreshResolvers<ContextType>;
  RegisterMobileDevice?: RegisterMobileDeviceResolvers<ContextType>;
  ResendActivationEmail?: ResendActivationEmailResolvers<ContextType>;
  ResetPassword?: ResetPasswordResolvers<ContextType>;
  Signin?: SigninResolvers<ContextType>;
  SigninOrRegisterRequestForCode?: SigninOrRegisterRequestForCodeResolvers<ContextType>;
  SigninOrRegisterWithCode?: SigninOrRegisterWithCodeResolvers<ContextType>;
  Signup?: SignupResolvers<ContextType>;
  ObtainJSONWebToken?: ObtainJsonWebTokenResolvers<ContextType>;
  TokenOAuthLogin?: TokenOAuthLoginResolvers<ContextType>;
  TokenOAuthSignup?: TokenOAuthSignupResolvers<ContextType>;
  UpdateArea?: UpdateAreaResolvers<ContextType>;
  UpdateEmailSubscription?: UpdateEmailSubscriptionResolvers<ContextType>;
  UpdateFaq?: UpdateFaqResolvers<ContextType>;
  UpdatePage?: UpdatePageResolvers<ContextType>;
  UpdateProfile?: UpdateProfileResolvers<ContextType>;
  UpdateQuestion?: UpdateQuestionResolvers<ContextType>;
  UpdateReview?: UpdateReviewResolvers<ContextType>;
  UpdateService?: UpdateServiceResolvers<ContextType>;
  UpdateWebsite?: UpdateWebsiteResolvers<ContextType>;
  Verify?: VerifyResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  specifiedBy?: SpecifiedByDirectiveResolver<any, any, ContextType>;
};


export const AcceptInviteDocument = gql`
    mutation acceptInvite($id: ID!) {
  acceptInvite(id: $id) {
    success
    message
  }
}
    `;
export const ActivateAccountDocument = gql`
    mutation activateAccount($emailAddress: String!, $verificationCode: String!) {
  activateAccount(emailAddress: $emailAddress, verificationCode: $verificationCode) {
    data
    errors
  }
}
    `;
export const ChangeEmailAddressDocument = gql`
    mutation changeEmailAddress($newEmailAddress: String!) {
  changeEmailAddress(newEmailAddress: $newEmailAddress) {
    data
    errors
  }
}
    `;
export const ChangePasswordDocument = gql`
    mutation changePassword($password: String!) {
  changePassword(password: $password) {
    data
    errors
  }
}
    `;
export const CompleteResetPasswordDocument = gql`
    mutation completeResetPassword($emailAddress: String!, $verificationCode: String!) {
  completeResetPassword(emailAddress: $emailAddress, verificationCode: $verificationCode) {
    data
    errors
  }
}
    `;
export const CrawlWebsiteDocument = gql`
    mutation crawlWebsite($input: CrawlWebsiteCreateObject!) {
  crawlWebsite(input: $input) {
    success
    taskId
    message
  }
}
    `;
export const CreateAreaDocument = gql`
    mutation createArea($input: AreaCreateObject!) {
  createArea(input: $input) {
    data {
      id
      created
      updated
      metadata
      active
      name
      slug
      zipCode
      description
      image
      enableSchemaOrgAreaServedObject
      showInsuranceCompanyWidget
      htmlBlock1
      htmlBlock2
      keywordTargeting
      displayOrder
      pk
    }
    success
    message
  }
}
    `;
export const CreateDataDocument = gql`
    mutation createData($input: DataCreateObject!) {
  createData(input: $input) {
    data {
      id
      created
      updated
      metadata
      data
      ipAddress
      pk
    }
    success
    message
  }
}
    `;
export const CreateFaqDocument = gql`
    mutation createFaq($input: FaqCreateObject!) {
  createFaq(input: $input) {
    data {
      id
      created
      updated
      metadata
      slug
      active
      name
      pk
    }
    success
    message
  }
}
    `;
export const CreatePageDocument = gql`
    mutation createPage($input: PageCreateObject!) {
  createPage(input: $input) {
    data {
      id
      created
      updated
      metadata
      active
      slug
      name
      description
      body
      image
      keywordTargeting
      displayOrder
      enableSchemaOrgArticleObject
      showInsuranceCompanyWidget
      pk
    }
    success
    message
  }
}
    `;
export const CreateQuestionDocument = gql`
    mutation createQuestion($input: QuestionCreateObject!) {
  createQuestion(input: $input) {
    data {
      id
      created
      updated
      metadata
      active
      question
      answer
      displayOrder
      pk
      faqId
    }
    success
    message
  }
}
    `;
export const CreateReviewDocument = gql`
    mutation createReview($input: ReviewCreateObject!) {
  createReview(input: $input) {
    data {
      id
      created
      updated
      metadata
      slug
      active
      title
      body
      personImage
      personName
      personZipCode
      rating
      displayOrder
      pk
    }
    success
    message
  }
}
    `;
export const CreateServiceDocument = gql`
    mutation createService($input: ServiceCreateObject!) {
  createService(input: $input) {
    data {
      id
      created
      updated
      metadata
      active
      slug
      name
      description
      image
      enableSchemaOrgServiceObject
      showInsuranceCompanyWidget
      htmlBlock1
      htmlBlock2
      keywordTargeting
      displayOrder
      carouselImages
      pk
    }
    success
    message
  }
}
    `;
export const CreateWebsiteDocument = gql`
    mutation createWebsite($input: WebsiteCreateObject!) {
  createWebsite(input: $input) {
    data {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    success
    message
  }
}
    `;
export const DeleteAreaDocument = gql`
    mutation deleteArea($id: ID!) {
  deleteArea(id: $id) {
    success
    message
  }
}
    `;
export const DeleteCollaboratorDocument = gql`
    mutation deleteCollaborator($id: ID!) {
  deleteCollaborator(id: $id) {
    success
    message
  }
}
    `;
export const DeleteFaqDocument = gql`
    mutation deleteFaq($id: ID!) {
  deleteFaq(id: $id) {
    success
    message
  }
}
    `;
export const DeletePageDocument = gql`
    mutation deletePage($id: ID!) {
  deletePage(id: $id) {
    success
    message
  }
}
    `;
export const DeleteQuestionDocument = gql`
    mutation deleteQuestion($id: ID!) {
  deleteQuestion(id: $id) {
    success
    message
  }
}
    `;
export const DeleteReviewDocument = gql`
    mutation deleteReview($id: ID!) {
  deleteReview(id: $id) {
    success
    message
  }
}
    `;
export const DeleteServiceDocument = gql`
    mutation deleteService($id: ID!) {
  deleteService(id: $id) {
    success
    message
  }
}
    `;
export const DeleteWebsiteDocument = gql`
    mutation deleteWebsite($id: ID!) {
  deleteWebsite(id: $id) {
    success
    message
  }
}
    `;
export const ImportWebsiteDocument = gql`
    mutation importWebsite($input: GenericScalar!) {
  importWebsite(input: $input) {
    importedWebsite {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    success
    message
  }
}
    `;
export const InviteCollaboratorDocument = gql`
    mutation inviteCollaborator($emailAddress: String!, $websiteId: ID!) {
  inviteCollaborator(emailAddress: $emailAddress, websiteId: $websiteId) {
    success
    message
  }
}
    `;
export const RefreshTokenDocument = gql`
    mutation refreshToken($token: String) {
  refreshToken(token: $token) {
    payload
    refreshExpiresIn
    token
  }
}
    `;
export const RegisterMobileDeviceDocument = gql`
    mutation registerMobileDevice($input: MobileDeviceRegistrationCreateObject!) {
  registerMobileDevice(input: $input) {
    success
    message
  }
}
    `;
export const ResendActivationEmailDocument = gql`
    mutation resendActivationEmail($emailAddress: String!) {
  resendActivationEmail(emailAddress: $emailAddress) {
    data
    errors
  }
}
    `;
export const ResetPasswordDocument = gql`
    mutation resetPassword($baseUrl: String, $emailAddress: String!) {
  resetPassword(baseUrl: $baseUrl, emailAddress: $emailAddress) {
    data
    errors
  }
}
    `;
export const SigninDocument = gql`
    mutation signin($emailAddress: String!, $password: String!) {
  signin(emailAddress: $emailAddress, password: $password) {
    errors
    data
  }
}
    `;
export const SigninOrRegisterRequestForCodeDocument = gql`
    mutation signinOrRegisterRequestForCode($emailAddress: String!) {
  signinOrRegisterRequestForCode(emailAddress: $emailAddress) {
    errors
    data
  }
}
    `;
export const SigninOrRegisterWithCodeDocument = gql`
    mutation signinOrRegisterWithCode($code: String!, $emailAddress: String!) {
  signinOrRegisterWithCode(code: $code, emailAddress: $emailAddress) {
    errors
    data
  }
}
    `;
export const SignupDocument = gql`
    mutation signup($baseUrl: String, $emailAddress: String!, $password: String!) {
  signup(baseUrl: $baseUrl, emailAddress: $emailAddress, password: $password) {
    data
    errors
  }
}
    `;
export const TokenAuthDocument = gql`
    mutation tokenAuth($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    payload
    refreshExpiresIn
    token
  }
}
    `;
export const TokenOauthLoginDocument = gql`
    mutation tokenOauthLogin($oauthPayload: GenericScalar, $oauthToken: String, $provider: String) {
  tokenOauthLogin(oauthPayload: $oauthPayload, oauthToken: $oauthToken, provider: $provider) {
    success
    message
    token
    payload
  }
}
    `;
export const TokenOauthSignupDocument = gql`
    mutation tokenOauthSignup($oauthToken: String, $provider: String) {
  tokenOauthSignup(oauthToken: $oauthToken, provider: $provider) {
    success
    message
    token
    payload
  }
}
    `;
export const UpdateAreaDocument = gql`
    mutation updateArea($input: AreaUpdateObject!) {
  updateArea(input: $input) {
    data {
      id
      created
      updated
      metadata
      active
      name
      slug
      zipCode
      description
      image
      enableSchemaOrgAreaServedObject
      showInsuranceCompanyWidget
      htmlBlock1
      htmlBlock2
      keywordTargeting
      displayOrder
      pk
    }
    success
    message
  }
}
    `;
export const UpdateEmailSubscriptionDocument = gql`
    mutation updateEmailSubscription($dailySummary: Boolean!, $weeklySummary: Boolean!) {
  updateEmailSubscription(dailySummary: $dailySummary, weeklySummary: $weeklySummary) {
    data
    errors
  }
}
    `;
export const UpdateFaqDocument = gql`
    mutation updateFaq($input: FaqUpdateObject!) {
  updateFaq(input: $input) {
    data {
      id
      created
      updated
      metadata
      slug
      active
      name
      pk
    }
    success
    message
  }
}
    `;
export const UpdatePageDocument = gql`
    mutation updatePage($input: PageUpdateObject!) {
  updatePage(input: $input) {
    data {
      id
      created
      updated
      metadata
      active
      slug
      name
      description
      body
      image
      keywordTargeting
      displayOrder
      enableSchemaOrgArticleObject
      showInsuranceCompanyWidget
      pk
    }
    success
    message
  }
}
    `;
export const UpdateProfileDocument = gql`
    mutation updateProfile($input: ProfileUpdateObject!) {
  updateProfile(input: $input) {
    data {
      id
      created
      updated
      metadata
      firstName
      lastName
      phoneNumber
      dailySummary
      weeklySummary
      pk
      emailAddress
    }
    success
    message
  }
}
    `;
export const UpdateQuestionDocument = gql`
    mutation updateQuestion($input: QuestionUpdateObject!) {
  updateQuestion(input: $input) {
    data {
      id
      created
      updated
      metadata
      active
      question
      answer
      displayOrder
      pk
      faqId
    }
    success
    message
  }
}
    `;
export const UpdateReviewDocument = gql`
    mutation updateReview($input: ReviewUpdateObject!) {
  updateReview(input: $input) {
    data {
      id
      created
      updated
      metadata
      slug
      active
      title
      body
      personImage
      personName
      personZipCode
      rating
      displayOrder
      pk
    }
    success
    message
  }
}
    `;
export const UpdateServiceDocument = gql`
    mutation updateService($input: ServiceUpdateObject!) {
  updateService(input: $input) {
    data {
      id
      created
      updated
      metadata
      active
      slug
      name
      description
      image
      enableSchemaOrgServiceObject
      showInsuranceCompanyWidget
      htmlBlock1
      htmlBlock2
      keywordTargeting
      displayOrder
      carouselImages
      pk
    }
    success
    message
  }
}
    `;
export const UpdateWebsiteDocument = gql`
    mutation updateWebsite($input: WebsiteUpdateObject!) {
  updateWebsite(input: $input) {
    data {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    success
    message
  }
}
    `;
export const VerifyTokenDocument = gql`
    mutation verifyToken($token: String) {
  verifyToken(token: $token) {
    payload
  }
}
    `;
export const AreaDocument = gql`
    query area($id: Int) {
  area(id: $id) {
    id
    created
    updated
    metadata
    active
    name
    slug
    zipCode
    description
    image
    enableSchemaOrgAreaServedObject
    showInsuranceCompanyWidget
    htmlBlock1
    htmlBlock2
    keywordTargeting
    displayOrder
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    pk
  }
}
    `;
export const AreasDocument = gql`
    query areas($websiteId: ID, $first: Int, $skip: Int) {
  areas(websiteId: $websiteId, first: $first, skip: $skip) {
    id
    created
    updated
    metadata
    active
    name
    slug
    zipCode
    description
    image
    enableSchemaOrgAreaServedObject
    showInsuranceCompanyWidget
    htmlBlock1
    htmlBlock2
    keywordTargeting
    displayOrder
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    pk
  }
}
    `;
export const FaqDocument = gql`
    query faq($id: Int) {
  faq(id: $id) {
    id
    created
    updated
    metadata
    slug
    active
    name
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    questions {
      id
      created
      updated
      metadata
      active
      question
      answer
      displayOrder
      pk
      faqId
    }
    pk
  }
}
    `;
export const FaqsDocument = gql`
    query faqs($first: Int, $skip: Int, $websiteId: ID) {
  faqs(first: $first, skip: $skip, websiteId: $websiteId) {
    id
    created
    updated
    metadata
    slug
    active
    name
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    questions {
      id
      created
      updated
      metadata
      active
      question
      answer
      displayOrder
      pk
      faqId
    }
    pk
  }
}
    `;
export const InvitationsReceivedDocument = gql`
    query invitationsReceived($first: Int, $skip: Int) {
  invitationsReceived(first: $first, skip: $skip) {
    id
    user
    websiteId
    websiteBusinessName
    collaboratorEmail
    collaboratorUser
    invitationSent
    invitationAccepted
  }
}
    `;
export const InvitationsSentDocument = gql`
    query invitationsSent($first: Int, $skip: Int, $websiteId: Int) {
  invitationsSent(first: $first, skip: $skip, websiteId: $websiteId) {
    id
    user
    websiteId
    websiteBusinessName
    collaboratorEmail
    collaboratorUser
    invitationSent
    invitationAccepted
  }
}
    `;
export const IpAddressDocument = gql`
    query ipAddress($ipAddress: String) {
  ipAddress(ipAddress: $ipAddress) {
    zipCode
    city
    stateName
    stateCode
    countryName
    countryCode
    location
  }
}
    `;
export const PageDocument = gql`
    query page($id: Int) {
  page(id: $id) {
    id
    created
    updated
    metadata
    active
    slug
    name
    description
    body
    image
    keywordTargeting
    displayOrder
    enableSchemaOrgArticleObject
    showInsuranceCompanyWidget
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    pk
  }
}
    `;
export const PagesDocument = gql`
    query pages($websiteId: ID, $first: Int, $skip: Int) {
  pages(websiteId: $websiteId, first: $first, skip: $skip) {
    id
    created
    updated
    metadata
    active
    slug
    name
    description
    body
    image
    keywordTargeting
    displayOrder
    enableSchemaOrgArticleObject
    showInsuranceCompanyWidget
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    pk
  }
}
    `;
export const PostdataDocument = gql`
    query postdata($id: Int) {
  postdata(id: $id) {
    id
    created
    updated
    metadata
    data
    ipAddress
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    pk
  }
}
    `;
export const PostdatasDocument = gql`
    query postdatas($first: Int, $skip: Int, $websiteId: ID) {
  postdatas(first: $first, skip: $skip, websiteId: $websiteId) {
    id
    created
    updated
    metadata
    data
    ipAddress
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    pk
  }
}
    `;
export const ProfileDocument = gql`
    query profile {
  profile {
    id
    created
    updated
    metadata
    firstName
    lastName
    phoneNumber
    dailySummary
    weeklySummary
    pk
    emailAddress
    subscription {
      id
      created
      updated
      metadata
      startDate
      lengthDays
      programOptions
      stripeSubscriptionId
      stripeCustomerId
      stripeCheckoutSessionId
      status
      pk
      userId
    }
  }
}
    `;
export const QuestionDocument = gql`
    query question($id: Int) {
  question(id: $id) {
    id
    created
    updated
    metadata
    active
    question
    answer
    displayOrder
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    faq {
      id
      created
      updated
      metadata
      slug
      active
      name
      pk
    }
    pk
    faqId
  }
}
    `;
export const QuestionsDocument = gql`
    query questions($websiteId: ID, $first: Int, $skip: Int) {
  questions(websiteId: $websiteId, first: $first, skip: $skip) {
    id
    created
    updated
    metadata
    active
    question
    answer
    displayOrder
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    faq {
      id
      created
      updated
      metadata
      slug
      active
      name
      pk
    }
    pk
    faqId
  }
}
    `;
export const ReviewDocument = gql`
    query review($id: Int) {
  review(id: $id) {
    id
    created
    updated
    metadata
    slug
    active
    title
    body
    personImage
    personName
    personZipCode
    rating
    displayOrder
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    pk
  }
}
    `;
export const ReviewsDocument = gql`
    query reviews($websiteId: ID, $first: Int, $skip: Int) {
  reviews(websiteId: $websiteId, first: $first, skip: $skip) {
    id
    created
    updated
    metadata
    slug
    active
    title
    body
    personImage
    personName
    personZipCode
    rating
    displayOrder
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    pk
  }
}
    `;
export const ServiceDocument = gql`
    query service($id: Int) {
  service(id: $id) {
    id
    created
    updated
    metadata
    active
    slug
    name
    description
    image
    enableSchemaOrgServiceObject
    showInsuranceCompanyWidget
    htmlBlock1
    htmlBlock2
    keywordTargeting
    displayOrder
    carouselImages
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    pk
  }
}
    `;
export const ServicesDocument = gql`
    query services($websiteId: ID, $first: Int, $skip: Int) {
  services(websiteId: $websiteId, first: $first, skip: $skip) {
    id
    created
    updated
    metadata
    active
    slug
    name
    description
    image
    enableSchemaOrgServiceObject
    showInsuranceCompanyWidget
    htmlBlock1
    htmlBlock2
    keywordTargeting
    displayOrder
    carouselImages
    website {
      id
      created
      updated
      metadata
      active
      tld
      businessName
      slug
      businessDescription
      businessLogo
      licenseNumber
      insuranceNumber
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      editor
      googleAnalytics
      googleVerificationFileName
      googleVerificationFileContent
      enableGoogleSitemaps
      enableSchemaOrgWebpageObject
      enableSchemaOrgOrganizationObject
      enableSchemaOrgLocalbusinessObject
      primaryColor
      secondaryColor
      homepageBackground
      businessManagerPersonName
      businessEinNumber
      customHeaderCode
      customFooterCode
      ctaHtml
      ctaButtonHtml
      navbarMessageHtml
      navbarLink1Html
      navbarLink2Html
      navbarShowServices
      navbarShowAreas
      navbarShowCtaButton
      footerMessageHtml
      footerShowServices
      footerShowAreas
      footerShowReviews
      footerShowLicenseNumber
      footerShowInsuranceNumber
      footerShowAddress
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      customCss
      buttonColor
      buttonTextColor
      buttonBorderColor
      fontBody
      fontHeading
      pk
      defaultSubdomainName
    }
    pk
  }
}
    `;
export const WebsiteDocument = gql`
    query website($id: Int) {
  website(id: $id) {
    id
    created
    updated
    metadata
    active
    tld
    businessName
    slug
    businessDescription
    businessLogo
    licenseNumber
    insuranceNumber
    address1
    address2
    city
    state
    zipCode
    phoneNumber
    emailAddress
    editor
    googleAnalytics
    googleVerificationFileName
    googleVerificationFileContent
    enableGoogleSitemaps
    enableSchemaOrgWebpageObject
    enableSchemaOrgOrganizationObject
    enableSchemaOrgLocalbusinessObject
    primaryColor
    secondaryColor
    homepageBackground
    businessManagerPersonName
    businessEinNumber
    customHeaderCode
    customFooterCode
    ctaHtml
    ctaButtonHtml
    navbarMessageHtml
    navbarLink1Html
    navbarLink2Html
    navbarShowServices
    navbarShowAreas
    navbarShowCtaButton
    footerMessageHtml
    footerShowServices
    footerShowAreas
    footerShowReviews
    footerShowLicenseNumber
    footerShowInsuranceNumber
    footerShowAddress
    footerShowEmailAddress
    footerLink1Html
    footerLink2Html
    footerLink3Html
    footerLink4Html
    footerLink5Html
    customCss
    buttonColor
    buttonTextColor
    buttonBorderColor
    fontBody
    fontHeading
    pages {
      id
      created
      updated
      metadata
      active
      slug
      name
      description
      body
      image
      keywordTargeting
      displayOrder
      enableSchemaOrgArticleObject
      showInsuranceCompanyWidget
      pk
    }
    areas {
      id
      created
      updated
      metadata
      active
      name
      slug
      zipCode
      description
      image
      enableSchemaOrgAreaServedObject
      showInsuranceCompanyWidget
      htmlBlock1
      htmlBlock2
      keywordTargeting
      displayOrder
      pk
    }
    datas {
      id
      created
      updated
      metadata
      data
      ipAddress
      pk
    }
    faqs {
      id
      created
      updated
      metadata
      slug
      active
      name
      pk
    }
    questions {
      id
      created
      updated
      metadata
      active
      question
      answer
      displayOrder
      pk
      faqId
    }
    services {
      id
      created
      updated
      metadata
      active
      slug
      name
      description
      image
      enableSchemaOrgServiceObject
      showInsuranceCompanyWidget
      htmlBlock1
      htmlBlock2
      keywordTargeting
      displayOrder
      carouselImages
      pk
    }
    reviews {
      id
      created
      updated
      metadata
      slug
      active
      title
      body
      personImage
      personName
      personZipCode
      rating
      displayOrder
      pk
    }
    pk
    defaultSubdomainName
  }
}
    `;
export const WebsitesDocument = gql`
    query websites($first: Int, $skip: Int) {
  websites(first: $first, skip: $skip) {
    id
    created
    updated
    metadata
    active
    tld
    businessName
    slug
    businessDescription
    businessLogo
    licenseNumber
    insuranceNumber
    address1
    address2
    city
    state
    zipCode
    phoneNumber
    emailAddress
    editor
    googleAnalytics
    googleVerificationFileName
    googleVerificationFileContent
    enableGoogleSitemaps
    enableSchemaOrgWebpageObject
    enableSchemaOrgOrganizationObject
    enableSchemaOrgLocalbusinessObject
    primaryColor
    secondaryColor
    homepageBackground
    businessManagerPersonName
    businessEinNumber
    customHeaderCode
    customFooterCode
    ctaHtml
    ctaButtonHtml
    navbarMessageHtml
    navbarLink1Html
    navbarLink2Html
    navbarShowServices
    navbarShowAreas
    navbarShowCtaButton
    footerMessageHtml
    footerShowServices
    footerShowAreas
    footerShowReviews
    footerShowLicenseNumber
    footerShowInsuranceNumber
    footerShowAddress
    footerShowEmailAddress
    footerLink1Html
    footerLink2Html
    footerLink3Html
    footerLink4Html
    footerLink5Html
    customCss
    buttonColor
    buttonTextColor
    buttonBorderColor
    fontBody
    fontHeading
    pages {
      id
      created
      updated
      metadata
      active
      slug
      name
      description
      body
      image
      keywordTargeting
      displayOrder
      enableSchemaOrgArticleObject
      showInsuranceCompanyWidget
      pk
    }
    areas {
      id
      created
      updated
      metadata
      active
      name
      slug
      zipCode
      description
      image
      enableSchemaOrgAreaServedObject
      showInsuranceCompanyWidget
      htmlBlock1
      htmlBlock2
      keywordTargeting
      displayOrder
      pk
    }
    datas {
      id
      created
      updated
      metadata
      data
      ipAddress
      pk
    }
    faqs {
      id
      created
      updated
      metadata
      slug
      active
      name
      pk
    }
    questions {
      id
      created
      updated
      metadata
      active
      question
      answer
      displayOrder
      pk
      faqId
    }
    services {
      id
      created
      updated
      metadata
      active
      slug
      name
      description
      image
      enableSchemaOrgServiceObject
      showInsuranceCompanyWidget
      htmlBlock1
      htmlBlock2
      keywordTargeting
      displayOrder
      carouselImages
      pk
    }
    reviews {
      id
      created
      updated
      metadata
      slug
      active
      title
      body
      personImage
      personName
      personZipCode
      rating
      displayOrder
      pk
    }
    pk
    defaultSubdomainName
  }
}
    `;
export const ZipCodeDocument = gql`
    query zipCode($zipCode: String) {
  zipCode(zipCode: $zipCode) {
    zipCode
    city
    state
    latitude
    longitude
    metadata
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    acceptInvite(variables: AcceptInviteMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AcceptInviteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AcceptInviteMutation>(AcceptInviteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'acceptInvite', 'mutation');
    },
    activateAccount(variables: ActivateAccountMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ActivateAccountMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ActivateAccountMutation>(ActivateAccountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'activateAccount', 'mutation');
    },
    changeEmailAddress(variables: ChangeEmailAddressMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ChangeEmailAddressMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeEmailAddressMutation>(ChangeEmailAddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changeEmailAddress', 'mutation');
    },
    changePassword(variables: ChangePasswordMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ChangePasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangePasswordMutation>(ChangePasswordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changePassword', 'mutation');
    },
    completeResetPassword(variables: CompleteResetPasswordMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CompleteResetPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CompleteResetPasswordMutation>(CompleteResetPasswordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'completeResetPassword', 'mutation');
    },
    crawlWebsite(variables: CrawlWebsiteMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CrawlWebsiteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CrawlWebsiteMutation>(CrawlWebsiteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'crawlWebsite', 'mutation');
    },
    createArea(variables: CreateAreaMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateAreaMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAreaMutation>(CreateAreaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createArea', 'mutation');
    },
    createData(variables: CreateDataMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateDataMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateDataMutation>(CreateDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createData', 'mutation');
    },
    createFaq(variables: CreateFaqMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateFaqMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateFaqMutation>(CreateFaqDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createFaq', 'mutation');
    },
    createPage(variables: CreatePageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreatePageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePageMutation>(CreatePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createPage', 'mutation');
    },
    createQuestion(variables: CreateQuestionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateQuestionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateQuestionMutation>(CreateQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createQuestion', 'mutation');
    },
    createReview(variables: CreateReviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateReviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateReviewMutation>(CreateReviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createReview', 'mutation');
    },
    createService(variables: CreateServiceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateServiceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateServiceMutation>(CreateServiceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createService', 'mutation');
    },
    createWebsite(variables: CreateWebsiteMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateWebsiteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateWebsiteMutation>(CreateWebsiteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createWebsite', 'mutation');
    },
    deleteArea(variables: DeleteAreaMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteAreaMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteAreaMutation>(DeleteAreaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteArea', 'mutation');
    },
    deleteCollaborator(variables: DeleteCollaboratorMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteCollaboratorMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteCollaboratorMutation>(DeleteCollaboratorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteCollaborator', 'mutation');
    },
    deleteFaq(variables: DeleteFaqMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteFaqMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteFaqMutation>(DeleteFaqDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteFaq', 'mutation');
    },
    deletePage(variables: DeletePageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeletePageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePageMutation>(DeletePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deletePage', 'mutation');
    },
    deleteQuestion(variables: DeleteQuestionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteQuestionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteQuestionMutation>(DeleteQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteQuestion', 'mutation');
    },
    deleteReview(variables: DeleteReviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteReviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteReviewMutation>(DeleteReviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteReview', 'mutation');
    },
    deleteService(variables: DeleteServiceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteServiceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteServiceMutation>(DeleteServiceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteService', 'mutation');
    },
    deleteWebsite(variables: DeleteWebsiteMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteWebsiteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteWebsiteMutation>(DeleteWebsiteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteWebsite', 'mutation');
    },
    importWebsite(variables: ImportWebsiteMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ImportWebsiteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ImportWebsiteMutation>(ImportWebsiteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'importWebsite', 'mutation');
    },
    inviteCollaborator(variables: InviteCollaboratorMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InviteCollaboratorMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InviteCollaboratorMutation>(InviteCollaboratorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'inviteCollaborator', 'mutation');
    },
    refreshToken(variables?: RefreshTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RefreshTokenMutation>(RefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'refreshToken', 'mutation');
    },
    registerMobileDevice(variables: RegisterMobileDeviceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RegisterMobileDeviceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterMobileDeviceMutation>(RegisterMobileDeviceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'registerMobileDevice', 'mutation');
    },
    resendActivationEmail(variables: ResendActivationEmailMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ResendActivationEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResendActivationEmailMutation>(ResendActivationEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'resendActivationEmail', 'mutation');
    },
    resetPassword(variables: ResetPasswordMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ResetPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResetPasswordMutation>(ResetPasswordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'resetPassword', 'mutation');
    },
    signin(variables: SigninMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SigninMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SigninMutation>(SigninDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signin', 'mutation');
    },
    signinOrRegisterRequestForCode(variables: SigninOrRegisterRequestForCodeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SigninOrRegisterRequestForCodeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SigninOrRegisterRequestForCodeMutation>(SigninOrRegisterRequestForCodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signinOrRegisterRequestForCode', 'mutation');
    },
    signinOrRegisterWithCode(variables: SigninOrRegisterWithCodeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SigninOrRegisterWithCodeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SigninOrRegisterWithCodeMutation>(SigninOrRegisterWithCodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signinOrRegisterWithCode', 'mutation');
    },
    signup(variables: SignupMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SignupMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignupMutation>(SignupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signup', 'mutation');
    },
    tokenAuth(variables: TokenAuthMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenAuthMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenAuthMutation>(TokenAuthDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenAuth', 'mutation');
    },
    tokenOauthLogin(variables?: TokenOauthLoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenOauthLoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenOauthLoginMutation>(TokenOauthLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenOauthLogin', 'mutation');
    },
    tokenOauthSignup(variables?: TokenOauthSignupMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenOauthSignupMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenOauthSignupMutation>(TokenOauthSignupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenOauthSignup', 'mutation');
    },
    updateArea(variables: UpdateAreaMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateAreaMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateAreaMutation>(UpdateAreaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateArea', 'mutation');
    },
    updateEmailSubscription(variables: UpdateEmailSubscriptionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateEmailSubscriptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateEmailSubscriptionMutation>(UpdateEmailSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateEmailSubscription', 'mutation');
    },
    updateFaq(variables: UpdateFaqMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateFaqMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateFaqMutation>(UpdateFaqDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateFaq', 'mutation');
    },
    updatePage(variables: UpdatePageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdatePageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePageMutation>(UpdatePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updatePage', 'mutation');
    },
    updateProfile(variables: UpdateProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProfileMutation>(UpdateProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateProfile', 'mutation');
    },
    updateQuestion(variables: UpdateQuestionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateQuestionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateQuestionMutation>(UpdateQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateQuestion', 'mutation');
    },
    updateReview(variables: UpdateReviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateReviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateReviewMutation>(UpdateReviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateReview', 'mutation');
    },
    updateService(variables: UpdateServiceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateServiceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateServiceMutation>(UpdateServiceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateService', 'mutation');
    },
    updateWebsite(variables: UpdateWebsiteMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateWebsiteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateWebsiteMutation>(UpdateWebsiteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateWebsite', 'mutation');
    },
    verifyToken(variables?: VerifyTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<VerifyTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<VerifyTokenMutation>(VerifyTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'verifyToken', 'mutation');
    },
    area(variables?: AreaQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AreaQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AreaQuery>(AreaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'area', 'query');
    },
    areas(variables?: AreasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AreasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AreasQuery>(AreasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'areas', 'query');
    },
    faq(variables?: FaqQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FaqQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FaqQuery>(FaqDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'faq', 'query');
    },
    faqs(variables?: FaqsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FaqsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FaqsQuery>(FaqsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'faqs', 'query');
    },
    invitationsReceived(variables?: InvitationsReceivedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InvitationsReceivedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<InvitationsReceivedQuery>(InvitationsReceivedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'invitationsReceived', 'query');
    },
    invitationsSent(variables?: InvitationsSentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InvitationsSentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<InvitationsSentQuery>(InvitationsSentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'invitationsSent', 'query');
    },
    ipAddress(variables?: IpAddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IpAddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IpAddressQuery>(IpAddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ipAddress', 'query');
    },
    page(variables?: PageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageQuery>(PageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'page', 'query');
    },
    pages(variables?: PagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PagesQuery>(PagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pages', 'query');
    },
    postdata(variables?: PostdataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PostdataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostdataQuery>(PostdataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'postdata', 'query');
    },
    postdatas(variables?: PostdatasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PostdatasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostdatasQuery>(PostdatasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'postdatas', 'query');
    },
    profile(variables?: ProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProfileQuery>(ProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'profile', 'query');
    },
    question(variables?: QuestionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<QuestionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QuestionQuery>(QuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'question', 'query');
    },
    questions(variables?: QuestionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<QuestionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QuestionsQuery>(QuestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'questions', 'query');
    },
    review(variables?: ReviewQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ReviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ReviewQuery>(ReviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'review', 'query');
    },
    reviews(variables?: ReviewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ReviewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ReviewsQuery>(ReviewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'reviews', 'query');
    },
    service(variables?: ServiceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ServiceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ServiceQuery>(ServiceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'service', 'query');
    },
    services(variables?: ServicesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ServicesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ServicesQuery>(ServicesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'services', 'query');
    },
    website(variables?: WebsiteQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<WebsiteQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WebsiteQuery>(WebsiteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'website', 'query');
    },
    websites(variables?: WebsitesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<WebsitesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WebsitesQuery>(WebsitesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'websites', 'query');
    },
    zipCode(variables?: ZipCodeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ZipCodeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZipCodeQuery>(ZipCodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'zipCode', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;