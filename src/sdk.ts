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
  FileUploadField: { input: any; output: any; }
  GenericScalar: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  area?: Maybe<AreaObject>;
  areas?: Maybe<Array<Maybe<AreaObject>>>;
  faq?: Maybe<FaqObject>;
  faqs?: Maybe<Array<Maybe<FaqObject>>>;
  page?: Maybe<PageObject>;
  pages?: Maybe<Array<Maybe<PageObject>>>;
  profile?: Maybe<ProfileObject>;
  question?: Maybe<QuestionObject>;
  questions?: Maybe<Array<Maybe<QuestionObject>>>;
  review?: Maybe<ReviewObject>;
  reviews?: Maybe<Array<Maybe<ReviewObject>>>;
  service?: Maybe<ServiceObject>;
  services?: Maybe<Array<Maybe<ServiceObject>>>;
  website?: Maybe<WebsiteObject>;
  websites?: Maybe<Array<Maybe<WebsiteObject>>>;
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
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPagesArgs = {
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

export type AreaObject = {
  __typename?: 'AreaObject';
  /** This indicates whether this area is active and available */
  active: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  /** The description of the area */
  description?: Maybe<Scalars['String']['output']>;
  /** The order of displaying this area. Higher priority means it will be displayed first. */
  displayOrder: Scalars['Int']['output'];
  /** This indicates whether this area page will use the areaServed object. */
  enableSchemaOrgAreaServedObject: Scalars['Boolean']['output'];
  /** HTML (markup) block 1) */
  htmlBlock1?: Maybe<Scalars['String']['output']>;
  /** HTML (markup) block 2) */
  htmlBlock2?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Min size (450 x 300)px */
  image?: Maybe<Scalars['String']['output']>;
  keywordTargeting?: Maybe<Array<Scalars['String']['output']>>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the area. */
  name?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** This indicates whether this area page will display the Insurance company widget. */
  showInsuranceCompanyWidget: Scalars['Boolean']['output'];
  /** The slug of the area */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
  /** The zip code of the area. */
  zipCode: Scalars['String']['output'];
};

export type WebsiteObject = {
  __typename?: 'WebsiteObject';
  /** This indicates whether this website is active at the moment. */
  active: Scalars['Boolean']['output'];
  /** The address of the business */
  address1?: Maybe<Scalars['String']['output']>;
  /** The second address line of address */
  address2?: Maybe<Scalars['String']['output']>;
  areas: Array<AreaObject>;
  /** The description of the business */
  businessDescription?: Maybe<Scalars['String']['output']>;
  /** The business EIN (corporation) number. */
  businessEinNumber?: Maybe<Scalars['String']['output']>;
  /** Min size (450 x 300)px */
  businessLogo?: Maybe<Scalars['String']['output']>;
  /** The business manager name. */
  businessManagerPersonName?: Maybe<Scalars['String']['output']>;
  /** The name of the business */
  businessName: Scalars['String']['output'];
  /** The city where the business is located */
  city?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  /** The markup to use with the button call-to-action. */
  ctaButtonHtml?: Maybe<Scalars['String']['output']>;
  /** The markup to use with the main call-to-action. */
  ctaHtml?: Maybe<Scalars['String']['output']>;
  /** The custom footer HTML code. This will be used right before the closing </BODY> tag. */
  customFooterCode?: Maybe<Scalars['String']['output']>;
  /** The custom header HTML code. This will be used in the <HEAD> section of the website markup. */
  customHeaderCode?: Maybe<Scalars['String']['output']>;
  /** A list of emails that are allowed to edit this website */
  editor?: Maybe<Array<Scalars['String']['output']>>;
  /** The email address of the business */
  emailAddress?: Maybe<Scalars['String']['output']>;
  /** This indicates whether Google SiteMaps is available. */
  enableGoogleSitemaps: Scalars['Boolean']['output'];
  /** This indicates whether this site will use the LocalBusiness object. */
  enableSchemaOrgLocalbusinessObject: Scalars['Boolean']['output'];
  /** This indicates whether this site will use the Organization object. */
  enableSchemaOrgOrganizationObject: Scalars['Boolean']['output'];
  /** This indicates whether this site will use the WebPage object. */
  enableSchemaOrgWebpageObject: Scalars['Boolean']['output'];
  faqs: Array<FaqObject>;
  /** The footer first link markup. */
  footerLink1Html?: Maybe<Scalars['String']['output']>;
  /** The footer second link markup. */
  footerLink2Html?: Maybe<Scalars['String']['output']>;
  /** The footer third link markup. */
  footerLink3Html?: Maybe<Scalars['String']['output']>;
  /** The footer fourth link markup. */
  footerLink4Html?: Maybe<Scalars['String']['output']>;
  /** The footer fifth link markup. */
  footerLink5Html?: Maybe<Scalars['String']['output']>;
  /** The footer message markup. */
  footerMessageHtml?: Maybe<Scalars['String']['output']>;
  /** The number of areas to show in the footer component. */
  footerShowAreas: Scalars['Int']['output'];
  /** This indicates whether the email address will be visible in the footer component. */
  footerShowEmailAddress: Scalars['Boolean']['output'];
  /** This indicates whether the business license number will be visible in the footer component. */
  footerShowLicenseNumber: Scalars['Boolean']['output'];
  /** The number of reviews to show in the footer component. */
  footerShowReviews: Scalars['Int']['output'];
  /** The number of services to show in the footer component. */
  footerShowServices: Scalars['Int']['output'];
  /** The Google Analytics ID to use with this website. For example IX-123213-923s */
  googleAnalytics?: Maybe<Scalars['String']['output']>;
  /** The phone number of the business */
  googleVerificationFileContent?: Maybe<Scalars['String']['output']>;
  /** The phone number of the business */
  googleVerificationFileName?: Maybe<Scalars['String']['output']>;
  /** Min size (450 x 300)px */
  homepageBackground?: Maybe<Scalars['String']['output']>;
  /** The custom CSS used in the homepage jumobotron. */
  homepageJumbotronCustomCss?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The insurance number of the business */
  insuranceNumber?: Maybe<Scalars['String']['output']>;
  /** The license number of the business */
  licenseNumber?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The navigation bar first link markup. */
  navbarLink1Html?: Maybe<Scalars['String']['output']>;
  /** The navigation bar second link markup. */
  navbarLink2Html?: Maybe<Scalars['String']['output']>;
  /** The navigation bar message markup. */
  navbarMessageHtml?: Maybe<Scalars['String']['output']>;
  /** The number of areas to show in the navigation bar component. */
  navbarShowAreas: Scalars['Int']['output'];
  /** This indicates whether the button CTA will be visible in the navigation bar component. */
  navbarShowCtaButton: Scalars['Boolean']['output'];
  /** The number of services to show in the navigation bar component. */
  navbarShowServices: Scalars['Int']['output'];
  pages: Array<PageObject>;
  /** The phone number of the business */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** The primary color of the website */
  primaryColor?: Maybe<Scalars['String']['output']>;
  questions: Array<QuestionObject>;
  reviews: Array<ReviewObject>;
  /** The secondary color of the website */
  secondaryColor?: Maybe<Scalars['String']['output']>;
  services: Array<ServiceObject>;
  /** The slug of the business */
  slug?: Maybe<Scalars['String']['output']>;
  /** The state where the business is located */
  state?: Maybe<Scalars['String']['output']>;
  /** The top level domain to use with this website. Example: my-local-business.com */
  tld?: Maybe<Array<Scalars['String']['output']>>;
  updated: Scalars['DateTime']['output'];
  /** The zip code where the business is located */
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type FaqObject = {
  __typename?: 'FaqObject';
  /** This indicates whether this faq is active and available */
  active: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the faq that the business provides. */
  name: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  questions: Array<QuestionObject>;
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
};

export type QuestionObject = {
  __typename?: 'QuestionObject';
  /** This indicates whether this question is active and available */
  active: Scalars['Boolean']['output'];
  /** The answer that the business provides. */
  answer: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  /** The order in which the question should be displayed. */
  displayOrder?: Maybe<Scalars['Int']['output']>;
  faq?: Maybe<FaqObject>;
  faqId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSONString']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** The question that the business provides. */
  question: Scalars['String']['output'];
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
};

export type PageObject = {
  __typename?: 'PageObject';
  /** This indicates whether this page is active and available */
  active: Scalars['Boolean']['output'];
  /** The HTML markup of the page */
  body: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  /** A brief text description of the page */
  description: Scalars['String']['output'];
  /** The order of displaying this service. Higher priority means it will be displayed first. */
  displayOrder: Scalars['Int']['output'];
  /** This indicates whether this page will use the Article object. */
  enableSchemaOrgArticleObject: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Min size (450 x 300)px */
  image: Scalars['String']['output'];
  keywordTargeting?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the page that the business provides. */
  name: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  /** This indicates whether this page will display the Insurance company widget. */
  showInsuranceCompanyWidget: Scalars['Boolean']['output'];
  /** The URL slug of the page */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
};

export type ReviewObject = {
  __typename?: 'ReviewObject';
  /** This indicates whether this review is active and visible to users */
  active: Scalars['Boolean']['output'];
  /** The body of the review. */
  body?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  /** The order of displaying this review. Higher priority means it will be displayed first. */
  displayOrder: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** Min size (450 x 300)px */
  personImage?: Maybe<Scalars['String']['output']>;
  /** The name of the person that wrote the review. */
  personName: Scalars['String']['output'];
  /** The zip code of the person location. */
  personZipCode: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  /** The rating of this review. (from 1 to 4.5 to 5) */
  rating: Scalars['Int']['output'];
  /** A brief description of the review. */
  title: Scalars['String']['output'];
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
};

export type ServiceObject = {
  __typename?: 'ServiceObject';
  /** This indicates whether this service is active and available */
  active: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  /** The description of the service */
  description: Scalars['String']['output'];
  /** The order of displaying this service. Higher priority means it will be displayed first. */
  displayOrder: Scalars['Int']['output'];
  /** This indicates whether this site will use the Service object. */
  enableSchemaOrgServiceObject: Scalars['Boolean']['output'];
  /** HTML (markup) block 1) */
  htmlBlock1?: Maybe<Scalars['String']['output']>;
  /** HTML (markup) block 2) */
  htmlBlock2?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Min size (450 x 300)px */
  image?: Maybe<Scalars['String']['output']>;
  keywordTargeting?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the service that the business provides. */
  name: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  /** This indicates whether this service will display the Insurance company widget. */
  showInsuranceCompanyWidget: Scalars['Boolean']['output'];
  /** The slug of the service */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  website: WebsiteObject;
};

export type ProfileObject = {
  __typename?: 'ProfileObject';
  created: Scalars['DateTime']['output'];
  dailySummary: Scalars['Boolean']['output'];
  emailAddress?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  phoneNumber: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  updated: Scalars['DateTime']['output'];
  weeklySummary: Scalars['Boolean']['output'];
};

export type Mutations = {
  __typename?: 'Mutations';
  /** Complete Verification Code for both Password Reset or Activating a new account */
  activateAccount?: Maybe<ActivateAccount>;
  /** Change a user's email address. The user must be logged into their account in order to preform this action.  */
  changeEmailAddress?: Maybe<ChangeEmailAddress>;
  /** Update a user password. The user must be logged into their account in order to preform this action.  */
  changePassword?: Maybe<ChangePassword>;
  /** Complete Verification Code for both Password Reset or Activating a new account */
  completeResetPassword?: Maybe<CompleteResetPassword>;
  /** Create a Area. */
  createArea?: Maybe<CreateArea>;
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
  refreshToken?: Maybe<Refresh>;
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


export type MutationsCreateAreaArgs = {
  input: AreaCreateObject;
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


export type MutationsRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
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

export type AreaCreateObject = {
  /** This indicates whether this area is active and available */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The description of the area max length 7500 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The order of displaying this area. Higher priority means it will be displayed first */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** This indicates whether this site will use the areaServed object. */
  enableSchemaOrgAreaServedObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** HTML (markup) block 1) max length 15500 */
  htmlBlock1?: InputMaybe<Scalars['String']['input']>;
  /** HTML (markup) block 2) max length 15500 */
  htmlBlock2?: InputMaybe<Scalars['String']['input']>;
  /** Min size (450 x 300)px max length 100 */
  image?: InputMaybe<Scalars['String']['input']>;
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The name of the area. max length 200 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** This indicates whether this area will display the Insurance company widget. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** The URL slug for the page. max length 200 */
  slug?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  /** The zip code of the area. max length 200 */
  zipCode: Scalars['String']['input'];
};

/** Create a Area. */
export type CreateArea = {
  __typename?: 'CreateArea';
  data?: Maybe<AreaObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type FaqCreateObject = {
  /** This indicates whether this faq is active and available */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the faq that the business provides. max length 200 */
  name: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

/** Create a Faq. */
export type CreateFaq = {
  __typename?: 'CreateFaq';
  data?: Maybe<FaqObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type PageCreateObject = {
  /** This indicates whether this page is active and available */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The body of the page max length 7500 */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The description of the page max length 7500 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The order of displaying this page. Higher priority means it will be displayed first */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** This indicates whether this page will use the Article object. */
  enableSchemaOrgArticleObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** Min size (450 x 300)px max length 100 */
  image?: InputMaybe<Scalars['FileUploadField']['input']>;
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The name of the page that the business provides. max length 200 */
  name: Scalars['String']['input'];
  /** This indicates whether this page will display the Insurance company widget. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** The URL slug for the page page. max length 200 */
  slug?: InputMaybe<Scalars['String']['input']>;
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
  /** This indicates whether this question is active and available */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The answer that the business provides. max length 15500 */
  answer: Scalars['String']['input'];
  /** The order in which the question should be displayed. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  faqId?: InputMaybe<Scalars['ID']['input']>;
  /** The question that the business provides. max length 200 */
  question: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

/** Create a Question. */
export type CreateQuestion = {
  __typename?: 'CreateQuestion';
  data?: Maybe<QuestionObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ReviewCreateObject = {
  /** This indicates whether this review is active and visible to users */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The body of the review. max length 7500 */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The order of displaying this review. Higher priority means it will be displayed first */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Min size (450 x 300)px max length 100 */
  personImage?: InputMaybe<Scalars['String']['input']>;
  /** The name of the person that wrote the review. max length 200 */
  personName: Scalars['String']['input'];
  /** The zip code of the person location. max length 5 */
  personZipCode?: InputMaybe<Scalars['String']['input']>;
  /** The rating of this review. (from 1 to 4.5 to 5) */
  rating?: InputMaybe<Scalars['Int']['input']>;
  /** A brief description of the review. max length 200 */
  title: Scalars['String']['input'];
  websiteId: Scalars['ID']['input'];
};

/** Create a Review. */
export type CreateReview = {
  __typename?: 'CreateReview';
  data?: Maybe<ReviewObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ServiceCreateObject = {
  /** This indicates whether this service is active and available */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The description of the service max length 15500 */
  description: Scalars['String']['input'];
  /** The order of displaying this service. Higher priority means it will be displayed first. max length 200 */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** This indicates whether this site will use the Service object. */
  enableSchemaOrgServiceObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** HTML (markup) block 1) max length 15500 */
  htmlBlock1?: InputMaybe<Scalars['String']['input']>;
  /** HTML (markup) block 2) max length 15500 */
  htmlBlock2?: InputMaybe<Scalars['String']['input']>;
  /** Min size (450 x 300)px max length 5000 */
  image?: InputMaybe<Scalars['String']['input']>;
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The name of the service that the business provides. max length 200 */
  name: Scalars['String']['input'];
  /** This indicates whether this service will display the Insurance company widget. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** The slug of the service max length 200 */
  slug?: InputMaybe<Scalars['String']['input']>;
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
  /** This indicates whether this website is active at the moment. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The address of the business max length 500 */
  address1?: InputMaybe<Scalars['String']['input']>;
  /** The second address line of address max length 500 */
  address2?: InputMaybe<Scalars['String']['input']>;
  /** The description of the business max length 7500 */
  businessDescription?: InputMaybe<Scalars['String']['input']>;
  /** The business EIN (corporation) number. max length 200 */
  businessEinNumber?: InputMaybe<Scalars['String']['input']>;
  /** Min size (450 x 300)px max length 100 */
  businessLogo?: InputMaybe<Scalars['String']['input']>;
  /** The business manager name. max length 200 */
  businessManagerPersonName?: InputMaybe<Scalars['String']['input']>;
  /** The name of the business max length 200 */
  businessName: Scalars['String']['input'];
  /** The city where the business is located max length 200 */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The markup to use with the button call-to-action. max length 2000 */
  ctaButtonHtml?: InputMaybe<Scalars['String']['input']>;
  /** The markup to use with the main call-to-action. max length 2000 */
  ctaHtml?: InputMaybe<Scalars['String']['input']>;
  /** The custom footer HTML code. This will be used right before the closing </BODY> tag. max length 5000 */
  customFooterCode?: InputMaybe<Scalars['String']['input']>;
  /** The custom header HTML code. This will be used in the <HEAD> section of the website markup. max length 5000 */
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  /** A list of emails that are allowed to edit this website */
  editor?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The email address of the business max length 200 */
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  /** This indicates whether Google SiteMaps is available. */
  enableGoogleSitemaps?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether this site will use the LocalBusiness object. */
  enableSchemaOrgLocalbusinessObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether this site will use the Organization object. */
  enableSchemaOrgOrganizationObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether this site will use the WebPage object. */
  enableSchemaOrgWebpageObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** The footer first link markup. max length 2000 */
  footerLink1Html?: InputMaybe<Scalars['String']['input']>;
  /** The footer second link markup. max length 2000 */
  footerLink2Html?: InputMaybe<Scalars['String']['input']>;
  /** The footer third link markup. max length 2000 */
  footerLink3Html?: InputMaybe<Scalars['String']['input']>;
  /** The footer fourth link markup. max length 2000 */
  footerLink4Html?: InputMaybe<Scalars['String']['input']>;
  /** The footer fifth link markup. max length 2000 */
  footerLink5Html?: InputMaybe<Scalars['String']['input']>;
  /** The footer message markup. max length 2000 */
  footerMessageHtml?: InputMaybe<Scalars['String']['input']>;
  /** The number of areas to show in the footer component. max length 200 */
  footerShowAreas: Scalars['Int']['input'];
  /** This indicates whether the email address will be visible in the footer component. */
  footerShowEmailAddress?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether the business license number will be visible in the footer component. */
  footerShowLicenseNumber?: InputMaybe<Scalars['Boolean']['input']>;
  /** The number of reviews to show in the footer component. max length 200 */
  footerShowReviews: Scalars['Int']['input'];
  /** The number of services to show in the footer component. max length 200 */
  footerShowServices: Scalars['Int']['input'];
  /** The Google Analytics ID to use with this website. For example IX-123213-923s max length 200 */
  googleAnalytics?: InputMaybe<Scalars['String']['input']>;
  /** The google verification file content max length 200 */
  googleVerificationFileContent?: InputMaybe<Scalars['String']['input']>;
  /** The google verification file name max length 200 */
  googleVerificationFileName?: InputMaybe<Scalars['String']['input']>;
  /** Min size (450 x 300)px max length 100 */
  homepageBackground?: InputMaybe<Scalars['String']['input']>;
  /** The custom CSS used in the homepage jumobotron. max length 5000 */
  homepageJumbotronCustomCss?: InputMaybe<Scalars['String']['input']>;
  /** The insurance number of the business max length 200 */
  insuranceNumber?: InputMaybe<Scalars['String']['input']>;
  /** The license number of the business max length 200 */
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  /** The navigation bar first link markup. max length 2000 */
  navbarLink1Html?: InputMaybe<Scalars['String']['input']>;
  /** The navigation bar second link markup. max length 2000 */
  navbarLink2Html?: InputMaybe<Scalars['String']['input']>;
  /** The navigation bar message markup. max length 2000 */
  navbarMessageHtml?: InputMaybe<Scalars['String']['input']>;
  /** The number of areas to show in the navigation bar component. max length 200 */
  navbarShowAreas: Scalars['Int']['input'];
  /** This indicates whether the button CTA will be visible in the navigation bar component. */
  navbarShowCtaButton?: InputMaybe<Scalars['Boolean']['input']>;
  /** The number of services to show in the navigation bar component. max length 200 */
  navbarShowServices: Scalars['Int']['input'];
  /** The phone number of the business max length 200 */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** The primary color of the website. max length 5000 */
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  /** The secondary color of the website. max length 5000 */
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the business max length 200 */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The state where the business is located max length 200 */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The top level domain to use with this website. Example: my-local-business.com */
  tld?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The zip code where the business is located max length 200 */
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

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
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
  /** This indicates whether this area is active and available */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The description of the area max length 7500 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The order of displaying this area. Higher priority means it will be displayed first */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** This indicates whether this site will use the areaServed object. */
  enableSchemaOrgAreaServedObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** HTML (markup) block 1) max length 15500 */
  htmlBlock1?: InputMaybe<Scalars['String']['input']>;
  /** HTML (markup) block 2) max length 15500 */
  htmlBlock2?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** Min size (450 x 300)px max length 100 */
  image?: InputMaybe<Scalars['String']['input']>;
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The name of the area. max length 200 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** This indicates whether this area will display the Insurance company widget. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** The URL slug for the page. max length 200 */
  slug?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  /** The zip code of the area. max length 200 */
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
  /** This indicates whether this faq is active and available */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  /** The name of the faq that the business provides. max length 200 */
  name?: InputMaybe<Scalars['String']['input']>;
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
  /** This indicates whether this page is active and available */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The body of the page max length 7500 */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The description of the page max length 7500 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The order of displaying this page. Higher priority means it will be displayed first */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** This indicates whether this page will use the Article object. */
  enableSchemaOrgArticleObject?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Min size (450 x 300)px max length 100 */
  image?: InputMaybe<Scalars['FileUploadField']['input']>;
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The name of the page. max length 200 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** This indicates whether this page will display the Insurance company widget. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** The URL slug for the page. max length 200 */
  slug?: InputMaybe<Scalars['String']['input']>;
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
  /** Receive daily summary emails. */
  dailySummary?: InputMaybe<Scalars['Boolean']['input']>;
  /** The first name of the user. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The last name of the user. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** The phone number of the user. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Receive weekly summary emails. */
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
  /** This indicates whether this question is active and available */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The answer that the business provides. max length 15500 */
  answer?: InputMaybe<Scalars['String']['input']>;
  /** The order in which the question should be displayed. */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  faqId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  /** The question that the business provides. max length 200 */
  question?: InputMaybe<Scalars['String']['input']>;
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
  /** This indicates whether this review is active and visible to users */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The body of the review. max length 7500 */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The order of displaying this review. Higher priority means it will be displayed first */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  /** Min size (450 x 300)px max length 100 */
  personImage?: InputMaybe<Scalars['String']['input']>;
  /** The name of the person that wrote the review. max length 200 */
  personName?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the person location. max length 5 */
  personZipCode?: InputMaybe<Scalars['String']['input']>;
  /** The rating of this review. (from 1 to 4.5 to 5) */
  rating?: InputMaybe<Scalars['Int']['input']>;
  /** A brief description of the review. max length 200 */
  title?: InputMaybe<Scalars['String']['input']>;
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
  /** This indicates whether this service is active and available */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The description of the service max length 15500 */
  description: Scalars['String']['input'];
  /** The order of displaying this service. Higher priority means it will be displayed first. max length 200 */
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** This indicates whether this site will use the Service object. */
  enableSchemaOrgServiceObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** HTML (markup) block 1) max length 15500 */
  htmlBlock1?: InputMaybe<Scalars['String']['input']>;
  /** HTML (markup) block 2) max length 15500 */
  htmlBlock2?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** Min size (450 x 300)px max length 5000 */
  image?: InputMaybe<Scalars['String']['input']>;
  keywordTargeting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The name of the service that the business provides. max length 200 */
  name: Scalars['String']['input'];
  /** This indicates whether this service will display the Insurance company widget. */
  showInsuranceCompanyWidget?: InputMaybe<Scalars['Boolean']['input']>;
  /** The slug of the service max length 200 */
  slug?: InputMaybe<Scalars['String']['input']>;
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
  /** This indicates whether this website is active at the moment. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The address of the business max length 500 */
  address1?: InputMaybe<Scalars['String']['input']>;
  /** The second address line of address max length 500 */
  address2?: InputMaybe<Scalars['String']['input']>;
  /** The description of the business max length 7500 */
  businessDescription?: InputMaybe<Scalars['String']['input']>;
  /** The business EIN (corporation) number. max length 200 */
  businessEinNumber?: InputMaybe<Scalars['String']['input']>;
  /** Min size (450 x 300)px max length 100 */
  businessLogo?: InputMaybe<Scalars['String']['input']>;
  /** The business manager name. max length 200 */
  businessManagerPersonName?: InputMaybe<Scalars['String']['input']>;
  /** The name of the business max length 200 */
  businessName?: InputMaybe<Scalars['String']['input']>;
  /** The city where the business is located max length 200 */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The markup to use with the button call-to-action. max length 2000 */
  ctaButtonHtml?: InputMaybe<Scalars['String']['input']>;
  /** The markup to use with the main call-to-action. max length 2000 */
  ctaHtml?: InputMaybe<Scalars['String']['input']>;
  /** The custom footer HTML code. This will be used right before the closing </BODY> tag. max length 5000 */
  customFooterCode?: InputMaybe<Scalars['String']['input']>;
  /** The custom header HTML code. This will be used in the <HEAD> section of the website markup. max length 5000 */
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  /** A list of emails that are allowed to edit this website */
  editor?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The email address of the business max length 200 */
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  /** This indicates whether Google SiteMaps is available. */
  enableGoogleSitemaps?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether this site will use the LocalBusiness object. */
  enableSchemaOrgLocalbusinessObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether this site will use the Organization object. */
  enableSchemaOrgOrganizationObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether this site will use the WebPage object. */
  enableSchemaOrgWebpageObject?: InputMaybe<Scalars['Boolean']['input']>;
  /** The footer first link markup. max length 2000 */
  footerLink1Html?: InputMaybe<Scalars['String']['input']>;
  /** The footer second link markup. max length 2000 */
  footerLink2Html?: InputMaybe<Scalars['String']['input']>;
  /** The footer third link markup. max length 2000 */
  footerLink3Html?: InputMaybe<Scalars['String']['input']>;
  /** The footer fourth link markup. max length 2000 */
  footerLink4Html?: InputMaybe<Scalars['String']['input']>;
  /** The footer fifth link markup. max length 2000 */
  footerLink5Html?: InputMaybe<Scalars['String']['input']>;
  /** The footer message markup. max length 2000 */
  footerMessageHtml?: InputMaybe<Scalars['String']['input']>;
  /** The number of areas to show in the footer component. max length 200 */
  footerShowAreas?: InputMaybe<Scalars['Int']['input']>;
  /** This indicates whether the email address will be visible in the footer component. */
  footerShowEmailAddress?: InputMaybe<Scalars['Boolean']['input']>;
  /** This indicates whether the business license number will be visible in the footer component. */
  footerShowLicenseNumber?: InputMaybe<Scalars['Boolean']['input']>;
  /** The number of reviews to show in the footer component. max length 200 */
  footerShowReviews?: InputMaybe<Scalars['Int']['input']>;
  /** The number of services to show in the footer component. max length 200 */
  footerShowServices?: InputMaybe<Scalars['Int']['input']>;
  /** The Google Analytics ID to use with this website. For example IX-123213-923s max length 200 */
  googleAnalytics?: InputMaybe<Scalars['String']['input']>;
  /** The google verification file content max length 200 */
  googleVerificationFileContent?: InputMaybe<Scalars['String']['input']>;
  /** The google verification file name max length 200 */
  googleVerificationFileName?: InputMaybe<Scalars['String']['input']>;
  /** Min size (450 x 300)px max length 100 */
  homepageBackground?: InputMaybe<Scalars['String']['input']>;
  /** The custom CSS used in the homepage jumobotron. max length 5000 */
  homepageJumbotronCustomCss?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** The insurance number of the business max length 200 */
  insuranceNumber?: InputMaybe<Scalars['String']['input']>;
  /** The license number of the business max length 200 */
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  /** The navigation bar first link markup. max length 2000 */
  navbarLink1Html?: InputMaybe<Scalars['String']['input']>;
  /** The navigation bar second link markup. max length 2000 */
  navbarLink2Html?: InputMaybe<Scalars['String']['input']>;
  /** The navigation bar message markup. max length 2000 */
  navbarMessageHtml?: InputMaybe<Scalars['String']['input']>;
  /** The number of areas to show in the navigation bar component. max length 200 */
  navbarShowAreas?: InputMaybe<Scalars['Int']['input']>;
  /** This indicates whether the button CTA will be visible in the navigation bar component. */
  navbarShowCtaButton?: InputMaybe<Scalars['Boolean']['input']>;
  /** The number of services to show in the navigation bar component. max length 200 */
  navbarShowServices?: InputMaybe<Scalars['Int']['input']>;
  /** The phone number of the business */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** The primary color of the website. max length 5000 */
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  /** The secondary color of the website. max length 5000 */
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the business max length 200. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The state where the business is located max length 200 */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The top level domain to use with this website. Example: my-local-business.com */
  tld?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The zip code where the business is located max length 200 */
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

export type CreateAreaMutationVariables = Exact<{
  input: AreaCreateObject;
}>;


export type CreateAreaMutation = { __typename?: 'Mutations', createArea?: { __typename?: 'CreateArea', success?: boolean | null, message?: string | null, data?: { __typename?: 'AreaObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name?: string | null, slug?: string | null, zipCode: string, description?: string | null, image?: string | null, enableSchemaOrgAreaServedObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string> | null, displayOrder: number, pk?: string | null } | null } | null };

export type CreateFaqMutationVariables = Exact<{
  input: FaqCreateObject;
}>;


export type CreateFaqMutation = { __typename?: 'Mutations', createFaq?: { __typename?: 'CreateFaq', success?: boolean | null, message?: string | null, data?: { __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name: string, pk?: string | null } | null } | null };

export type CreatePageMutationVariables = Exact<{
  input: PageCreateObject;
}>;


export type CreatePageMutation = { __typename?: 'Mutations', createPage?: { __typename?: 'CreatePage', success?: boolean | null, message?: string | null, data?: { __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, body: string, image: string, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null } | null } | null };

export type CreateQuestionMutationVariables = Exact<{
  input: QuestionCreateObject;
}>;


export type CreateQuestionMutation = { __typename?: 'Mutations', createQuestion?: { __typename?: 'CreateQuestion', success?: boolean | null, message?: string | null, data?: { __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null } | null } | null };

export type CreateReviewMutationVariables = Exact<{
  input: ReviewCreateObject;
}>;


export type CreateReviewMutation = { __typename?: 'Mutations', createReview?: { __typename?: 'CreateReview', success?: boolean | null, message?: string | null, data?: { __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: number, displayOrder: number, pk?: string | null } | null } | null };

export type CreateServiceMutationVariables = Exact<{
  input: ServiceCreateObject;
}>;


export type CreateServiceMutation = { __typename?: 'Mutations', createService?: { __typename?: 'CreateService', success?: boolean | null, message?: string | null, data?: { __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, pk?: string | null } | null } | null };

export type CreateWebsiteMutationVariables = Exact<{
  input: WebsiteCreateObject;
}>;


export type CreateWebsiteMutation = { __typename?: 'Mutations', createWebsite?: { __typename?: 'CreateWebsite', success?: boolean | null, message?: string | null, data?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null } | null } | null };

export type DeleteAreaMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteAreaMutation = { __typename?: 'Mutations', deleteArea?: { __typename?: 'DeleteArea', success?: boolean | null, message?: string | null } | null };

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


export type ImportWebsiteMutation = { __typename?: 'Mutations', importWebsite?: { __typename?: 'ImportWebsite', success?: boolean | null, message?: string | null, importedWebsite?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null } | null } | null };

export type RefreshTokenMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']['input']>;
}>;


export type RefreshTokenMutation = { __typename?: 'Mutations', refreshToken?: { __typename?: 'Refresh', payload: any, refreshExpiresIn: number, token: string } | null };

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


export type UpdateFaqMutation = { __typename?: 'Mutations', updateFaq?: { __typename?: 'UpdateFaq', success?: boolean | null, message?: string | null, data?: { __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name: string, pk?: string | null } | null } | null };

export type UpdatePageMutationVariables = Exact<{
  input: PageUpdateObject;
}>;


export type UpdatePageMutation = { __typename?: 'Mutations', updatePage?: { __typename?: 'UpdatePage', success?: boolean | null, message?: string | null, data?: { __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, body: string, image: string, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null } | null } | null };

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


export type UpdateReviewMutation = { __typename?: 'Mutations', updateReview?: { __typename?: 'UpdateReview', success?: boolean | null, message?: string | null, data?: { __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: number, displayOrder: number, pk?: string | null } | null } | null };

export type UpdateServiceMutationVariables = Exact<{
  input: ServiceUpdateObject;
}>;


export type UpdateServiceMutation = { __typename?: 'Mutations', updateService?: { __typename?: 'UpdateService', success?: boolean | null, message?: string | null, data?: { __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, pk?: string | null } | null } | null };

export type UpdateWebsiteMutationVariables = Exact<{
  input: WebsiteUpdateObject;
}>;


export type UpdateWebsiteMutation = { __typename?: 'Mutations', updateWebsite?: { __typename?: 'UpdateWebsite', success?: boolean | null, message?: string | null, data?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null } | null } | null };

export type VerifyTokenMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']['input']>;
}>;


export type VerifyTokenMutation = { __typename?: 'Mutations', verifyToken?: { __typename?: 'Verify', payload: any } | null };

export type AreaQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AreaQuery = { __typename?: 'Query', area?: { __typename?: 'AreaObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name?: string | null, slug?: string | null, zipCode: string, description?: string | null, image?: string | null, enableSchemaOrgAreaServedObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string> | null, displayOrder: number, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null } } | null };

export type AreasQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AreasQuery = { __typename?: 'Query', areas?: Array<{ __typename?: 'AreaObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name?: string | null, slug?: string | null, zipCode: string, description?: string | null, image?: string | null, enableSchemaOrgAreaServedObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string> | null, displayOrder: number, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null } } | null> | null };

export type FaqQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FaqQuery = { __typename?: 'Query', faq?: { __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name: string, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null }, questions: Array<{ __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null }> } | null };

export type FaqsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FaqsQuery = { __typename?: 'Query', faqs?: Array<{ __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name: string, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null }, questions: Array<{ __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null }> } | null> | null };

export type PageQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, body: string, image: string, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null } } | null };

export type PagesQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PagesQuery = { __typename?: 'Query', pages?: Array<{ __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, body: string, image: string, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null } } | null> | null };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'ProfileObject', id: string, created: any, updated: any, metadata?: any | null, firstName?: string | null, lastName?: string | null, phoneNumber: string, dailySummary: boolean, weeklySummary: boolean, pk?: string | null, emailAddress?: string | null } | null };

export type QuestionQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QuestionQuery = { __typename?: 'Query', question?: { __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null }, faq?: { __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name: string, pk?: string | null } | null } | null };

export type QuestionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QuestionsQuery = { __typename?: 'Query', questions?: Array<{ __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null }, faq?: { __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name: string, pk?: string | null } | null } | null> | null };

export type ReviewQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ReviewQuery = { __typename?: 'Query', review?: { __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: number, displayOrder: number, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null } } | null };

export type ReviewsQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ReviewsQuery = { __typename?: 'Query', reviews?: Array<{ __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: number, displayOrder: number, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null } } | null> | null };

export type ServiceQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ServiceQuery = { __typename?: 'Query', service?: { __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null } } | null };

export type ServicesQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ServicesQuery = { __typename?: 'Query', services?: Array<{ __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, pk?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null } } | null> | null };

export type WebsiteQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type WebsiteQuery = { __typename?: 'Query', website?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null, areas: Array<{ __typename?: 'AreaObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name?: string | null, slug?: string | null, zipCode: string, description?: string | null, image?: string | null, enableSchemaOrgAreaServedObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string> | null, displayOrder: number, pk?: string | null }>, faqs: Array<{ __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name: string, pk?: string | null }>, pages: Array<{ __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, body: string, image: string, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null }>, questions: Array<{ __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null }>, services: Array<{ __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, pk?: string | null }>, reviews: Array<{ __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: number, displayOrder: number, pk?: string | null }> } | null };

export type WebsitesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type WebsitesQuery = { __typename?: 'Query', websites?: Array<{ __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, tld?: Array<string> | null, businessName: string, slug?: string | null, businessDescription?: string | null, businessLogo?: string | null, licenseNumber?: string | null, insuranceNumber?: string | null, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, editor?: Array<string> | null, googleAnalytics?: string | null, googleVerificationFileName?: string | null, googleVerificationFileContent?: string | null, enableGoogleSitemaps: boolean, enableSchemaOrgWebpageObject: boolean, enableSchemaOrgOrganizationObject: boolean, enableSchemaOrgLocalbusinessObject: boolean, primaryColor?: string | null, secondaryColor?: string | null, homepageBackground?: string | null, businessManagerPersonName?: string | null, businessEinNumber?: string | null, customHeaderCode?: string | null, customFooterCode?: string | null, ctaHtml?: string | null, ctaButtonHtml?: string | null, navbarMessageHtml?: string | null, navbarLink1Html?: string | null, navbarLink2Html?: string | null, navbarShowServices: number, navbarShowAreas: number, navbarShowCtaButton: boolean, footerMessageHtml?: string | null, footerShowServices: number, footerShowAreas: number, footerShowReviews: number, footerShowLicenseNumber: boolean, footerShowEmailAddress: boolean, footerLink1Html?: string | null, footerLink2Html?: string | null, footerLink3Html?: string | null, footerLink4Html?: string | null, footerLink5Html?: string | null, homepageJumbotronCustomCss?: string | null, pk?: string | null, areas: Array<{ __typename?: 'AreaObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name?: string | null, slug?: string | null, zipCode: string, description?: string | null, image?: string | null, enableSchemaOrgAreaServedObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string> | null, displayOrder: number, pk?: string | null }>, faqs: Array<{ __typename?: 'FaqObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, name: string, pk?: string | null }>, pages: Array<{ __typename?: 'PageObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, body: string, image: string, keywordTargeting?: Array<string | null> | null, displayOrder: number, enableSchemaOrgArticleObject: boolean, showInsuranceCompanyWidget: boolean, pk?: string | null }>, questions: Array<{ __typename?: 'QuestionObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, question: string, answer: string, displayOrder?: number | null, pk?: string | null, faqId?: string | null }>, services: Array<{ __typename?: 'ServiceObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, slug?: string | null, name: string, description: string, image?: string | null, enableSchemaOrgServiceObject: boolean, showInsuranceCompanyWidget: boolean, htmlBlock1?: string | null, htmlBlock2?: string | null, keywordTargeting?: Array<string | null> | null, displayOrder: number, pk?: string | null }>, reviews: Array<{ __typename?: 'ReviewObject', id: string, created: any, updated: any, metadata?: any | null, active: boolean, title: string, body?: string | null, personImage?: string | null, personName: string, personZipCode: string, rating: number, displayOrder: number, pk?: string | null }> } | null> | null };



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
  FaqObject: ResolverTypeWrapper<FaqObject>;
  QuestionObject: ResolverTypeWrapper<QuestionObject>;
  PageObject: ResolverTypeWrapper<PageObject>;
  ReviewObject: ResolverTypeWrapper<ReviewObject>;
  ServiceObject: ResolverTypeWrapper<ServiceObject>;
  ProfileObject: ResolverTypeWrapper<ProfileObject>;
  Mutations: ResolverTypeWrapper<{}>;
  ActivateAccount: ResolverTypeWrapper<ActivateAccount>;
  ChangeEmailAddress: ResolverTypeWrapper<ChangeEmailAddress>;
  ChangePassword: ResolverTypeWrapper<ChangePassword>;
  CompleteResetPassword: ResolverTypeWrapper<CompleteResetPassword>;
  AreaCreateObject: AreaCreateObject;
  CreateArea: ResolverTypeWrapper<CreateArea>;
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
  DeleteFaq: ResolverTypeWrapper<DeleteFaq>;
  DeletePage: ResolverTypeWrapper<DeletePage>;
  DeleteQuestion: ResolverTypeWrapper<DeleteQuestion>;
  DeleteReview: ResolverTypeWrapper<DeleteReview>;
  DeleteService: ResolverTypeWrapper<DeleteService>;
  DeleteWebsite: ResolverTypeWrapper<DeleteWebsite>;
  GenericScalar: ResolverTypeWrapper<Scalars['GenericScalar']['output']>;
  ImportWebsite: ResolverTypeWrapper<ImportWebsite>;
  Refresh: ResolverTypeWrapper<Refresh>;
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
  FaqObject: FaqObject;
  QuestionObject: QuestionObject;
  PageObject: PageObject;
  ReviewObject: ReviewObject;
  ServiceObject: ServiceObject;
  ProfileObject: ProfileObject;
  Mutations: {};
  ActivateAccount: ActivateAccount;
  ChangeEmailAddress: ChangeEmailAddress;
  ChangePassword: ChangePassword;
  CompleteResetPassword: CompleteResetPassword;
  AreaCreateObject: AreaCreateObject;
  CreateArea: CreateArea;
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
  DeleteFaq: DeleteFaq;
  DeletePage: DeletePage;
  DeleteQuestion: DeleteQuestion;
  DeleteReview: DeleteReview;
  DeleteService: DeleteService;
  DeleteWebsite: DeleteWebsite;
  GenericScalar: Scalars['GenericScalar']['output'];
  ImportWebsite: ImportWebsite;
  Refresh: Refresh;
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
  page?: Resolver<Maybe<ResolversTypes['PageObject']>, ParentType, ContextType, Partial<QueryPageArgs>>;
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['PageObject']>>>, ParentType, ContextType, Partial<QueryPagesArgs>>;
  profile?: Resolver<Maybe<ResolversTypes['ProfileObject']>, ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['QuestionObject']>, ParentType, ContextType, Partial<QueryQuestionArgs>>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuestionObject']>>>, ParentType, ContextType, Partial<QueryQuestionsArgs>>;
  review?: Resolver<Maybe<ResolversTypes['ReviewObject']>, ParentType, ContextType, Partial<QueryReviewArgs>>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReviewObject']>>>, ParentType, ContextType, Partial<QueryReviewsArgs>>;
  service?: Resolver<Maybe<ResolversTypes['ServiceObject']>, ParentType, ContextType, Partial<QueryServiceArgs>>;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServiceObject']>>>, ParentType, ContextType, Partial<QueryServicesArgs>>;
  website?: Resolver<Maybe<ResolversTypes['WebsiteObject']>, ParentType, ContextType, Partial<QueryWebsiteArgs>>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['WebsiteObject']>>>, ParentType, ContextType, Partial<QueryWebsitesArgs>>;
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
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  ctaButtonHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ctaHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customFooterCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHeaderCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editor?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  emailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enableGoogleSitemaps?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableSchemaOrgLocalbusinessObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableSchemaOrgOrganizationObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableSchemaOrgWebpageObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  faqs?: Resolver<Array<ResolversTypes['FaqObject']>, ParentType, ContextType>;
  footerLink1Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerLink2Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerLink3Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerLink4Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerLink5Html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerMessageHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footerShowAreas?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  footerShowEmailAddress?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  footerShowLicenseNumber?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  footerShowReviews?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  footerShowServices?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  googleAnalytics?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleVerificationFileContent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleVerificationFileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homepageBackground?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homepageJumbotronCustomCss?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type FaqObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['FaqObject'] = ResolversParentTypes['FaqObject']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  questions?: Resolver<Array<ResolversTypes['QuestionObject']>, ParentType, ContextType>;
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
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  enableSchemaOrgArticleObject?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceObject'] = ResolversParentTypes['ServiceObject']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
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
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  weeklySummary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutations'] = ResolversParentTypes['Mutations']> = {
  activateAccount?: Resolver<Maybe<ResolversTypes['ActivateAccount']>, ParentType, ContextType, RequireFields<MutationsActivateAccountArgs, 'emailAddress' | 'verificationCode'>>;
  changeEmailAddress?: Resolver<Maybe<ResolversTypes['ChangeEmailAddress']>, ParentType, ContextType, RequireFields<MutationsChangeEmailAddressArgs, 'newEmailAddress'>>;
  changePassword?: Resolver<Maybe<ResolversTypes['ChangePassword']>, ParentType, ContextType, RequireFields<MutationsChangePasswordArgs, 'password'>>;
  completeResetPassword?: Resolver<Maybe<ResolversTypes['CompleteResetPassword']>, ParentType, ContextType, RequireFields<MutationsCompleteResetPasswordArgs, 'emailAddress' | 'verificationCode'>>;
  createArea?: Resolver<Maybe<ResolversTypes['CreateArea']>, ParentType, ContextType, RequireFields<MutationsCreateAreaArgs, 'input'>>;
  createFaq?: Resolver<Maybe<ResolversTypes['CreateFaq']>, ParentType, ContextType, RequireFields<MutationsCreateFaqArgs, 'input'>>;
  createPage?: Resolver<Maybe<ResolversTypes['CreatePage']>, ParentType, ContextType, RequireFields<MutationsCreatePageArgs, 'input'>>;
  createQuestion?: Resolver<Maybe<ResolversTypes['CreateQuestion']>, ParentType, ContextType, RequireFields<MutationsCreateQuestionArgs, 'input'>>;
  createReview?: Resolver<Maybe<ResolversTypes['CreateReview']>, ParentType, ContextType, RequireFields<MutationsCreateReviewArgs, 'input'>>;
  createService?: Resolver<Maybe<ResolversTypes['CreateService']>, ParentType, ContextType, RequireFields<MutationsCreateServiceArgs, 'input'>>;
  createWebsite?: Resolver<Maybe<ResolversTypes['CreateWebsite']>, ParentType, ContextType, RequireFields<MutationsCreateWebsiteArgs, 'input'>>;
  deleteArea?: Resolver<Maybe<ResolversTypes['DeleteArea']>, ParentType, ContextType, RequireFields<MutationsDeleteAreaArgs, 'id'>>;
  deleteFaq?: Resolver<Maybe<ResolversTypes['DeleteFaq']>, ParentType, ContextType, RequireFields<MutationsDeleteFaqArgs, 'id'>>;
  deletePage?: Resolver<Maybe<ResolversTypes['DeletePage']>, ParentType, ContextType, RequireFields<MutationsDeletePageArgs, 'id'>>;
  deleteQuestion?: Resolver<Maybe<ResolversTypes['DeleteQuestion']>, ParentType, ContextType, RequireFields<MutationsDeleteQuestionArgs, 'id'>>;
  deleteReview?: Resolver<Maybe<ResolversTypes['DeleteReview']>, ParentType, ContextType, RequireFields<MutationsDeleteReviewArgs, 'id'>>;
  deleteService?: Resolver<Maybe<ResolversTypes['DeleteService']>, ParentType, ContextType, RequireFields<MutationsDeleteServiceArgs, 'id'>>;
  deleteWebsite?: Resolver<Maybe<ResolversTypes['DeleteWebsite']>, ParentType, ContextType, RequireFields<MutationsDeleteWebsiteArgs, 'id'>>;
  importWebsite?: Resolver<Maybe<ResolversTypes['ImportWebsite']>, ParentType, ContextType, RequireFields<MutationsImportWebsiteArgs, 'input'>>;
  refreshToken?: Resolver<Maybe<ResolversTypes['Refresh']>, ParentType, ContextType, Partial<MutationsRefreshTokenArgs>>;
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

export type CreateAreaResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateArea'] = ResolversParentTypes['CreateArea']> = {
  data?: Resolver<Maybe<ResolversTypes['AreaObject']>, ParentType, ContextType>;
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

export interface GenericScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GenericScalar'], any> {
  name: 'GenericScalar';
}

export type ImportWebsiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImportWebsite'] = ResolversParentTypes['ImportWebsite']> = {
  importedWebsite?: Resolver<Maybe<ResolversTypes['WebsiteObject']>, ParentType, ContextType>;
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
  FaqObject?: FaqObjectResolvers<ContextType>;
  QuestionObject?: QuestionObjectResolvers<ContextType>;
  PageObject?: PageObjectResolvers<ContextType>;
  ReviewObject?: ReviewObjectResolvers<ContextType>;
  ServiceObject?: ServiceObjectResolvers<ContextType>;
  ProfileObject?: ProfileObjectResolvers<ContextType>;
  Mutations?: MutationsResolvers<ContextType>;
  ActivateAccount?: ActivateAccountResolvers<ContextType>;
  ChangeEmailAddress?: ChangeEmailAddressResolvers<ContextType>;
  ChangePassword?: ChangePasswordResolvers<ContextType>;
  CompleteResetPassword?: CompleteResetPasswordResolvers<ContextType>;
  CreateArea?: CreateAreaResolvers<ContextType>;
  CreateFaq?: CreateFaqResolvers<ContextType>;
  FileUploadField?: GraphQLScalarType;
  CreatePage?: CreatePageResolvers<ContextType>;
  CreateQuestion?: CreateQuestionResolvers<ContextType>;
  CreateReview?: CreateReviewResolvers<ContextType>;
  CreateService?: CreateServiceResolvers<ContextType>;
  CreateWebsite?: CreateWebsiteResolvers<ContextType>;
  DeleteArea?: DeleteAreaResolvers<ContextType>;
  DeleteFaq?: DeleteFaqResolvers<ContextType>;
  DeletePage?: DeletePageResolvers<ContextType>;
  DeleteQuestion?: DeleteQuestionResolvers<ContextType>;
  DeleteReview?: DeleteReviewResolvers<ContextType>;
  DeleteService?: DeleteServiceResolvers<ContextType>;
  DeleteWebsite?: DeleteWebsiteResolvers<ContextType>;
  GenericScalar?: GraphQLScalarType;
  ImportWebsite?: ImportWebsiteResolvers<ContextType>;
  Refresh?: RefreshResolvers<ContextType>;
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
export const CreateFaqDocument = gql`
    mutation createFaq($input: FaqCreateObject!) {
  createFaq(input: $input) {
    data {
      id
      created
      updated
      metadata
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
    }
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
    mutation tokenOauthLogin($oauthToken: String, $provider: String) {
  tokenOauthLogin(oauthToken: $oauthToken, provider: $provider) {
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
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
    pk
  }
}
    `;
export const FaqsDocument = gql`
    query faqs($first: Int, $skip: Int) {
  faqs(first: $first, skip: $skip) {
    id
    created
    updated
    metadata
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
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
    pk
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
    }
    faq {
      id
      created
      updated
      metadata
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
    query questions($first: Int, $skip: Int) {
  questions(first: $first, skip: $skip) {
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
    }
    faq {
      id
      created
      updated
      metadata
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
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
      footerShowEmailAddress
      footerLink1Html
      footerLink2Html
      footerLink3Html
      footerLink4Html
      footerLink5Html
      homepageJumbotronCustomCss
      pk
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
    footerShowEmailAddress
    footerLink1Html
    footerLink2Html
    footerLink3Html
    footerLink4Html
    footerLink5Html
    homepageJumbotronCustomCss
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
    faqs {
      id
      created
      updated
      metadata
      active
      name
      pk
    }
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
      pk
    }
    reviews {
      id
      created
      updated
      metadata
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
    footerShowEmailAddress
    footerLink1Html
    footerLink2Html
    footerLink3Html
    footerLink4Html
    footerLink5Html
    homepageJumbotronCustomCss
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
    faqs {
      id
      created
      updated
      metadata
      active
      name
      pk
    }
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
      pk
    }
    reviews {
      id
      created
      updated
      metadata
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
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
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
    createArea(variables: CreateAreaMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateAreaMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateAreaMutation>(CreateAreaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createArea', 'mutation');
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
    refreshToken(variables?: RefreshTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RefreshTokenMutation>(RefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'refreshToken', 'mutation');
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
    page(variables?: PageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageQuery>(PageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'page', 'query');
    },
    pages(variables?: PagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PagesQuery>(PagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pages', 'query');
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
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;