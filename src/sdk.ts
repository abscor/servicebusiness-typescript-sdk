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
  GenericScalar: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSONString: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  /** add_keywords_to_ad_group(refresh_token, ad_group_id, customer_id, keywords, use_login_id): */
  addKeywordsToAdGroup?: Maybe<AddKeywordsToAdGroup>;
  /** add_negative_keywords_to_shared_set(refresh_token, campaign_id, customer_id, unique_identifier, keywords, use_login_id): */
  addNegativeKeywordsSetToCampaign?: Maybe<AddNegativeKeywordsSetToCampaign>;
  /** add_negative_keywords_to_shared_set(refresh_token, campaign_id, customer_id, unique_identifier, keywords, use_login_id): */
  addNegativeKeywordsToCampaign?: Maybe<AddNegativeKeywordsToCampaign>;
  appVersion?: Maybe<AppVersion>;
  area?: Maybe<AreaObject>;
  areas?: Maybe<Array<Maybe<AreaObject>>>;
  createGadsAdGroup?: Maybe<CreateGadsAdGroup>;
  /**
   * def create_call_ad(
   * refresh_token,
   * customer_id,
   * ad_group_id,
   * final_urls,
   * business_name,
   * headline1,
   * headline2,
   * description1,
   * description2,
   * phone_country,
   * phone_number,
   * phone_number_verification_url,
   * call_tracked,
   * disable_call_conversion,
   * path1,
   * path2,
   * use_login_id):
   */
  createGadsCallAd?: Maybe<CreateCallAd>;
  /**
   * def create_campaign(
   * refresh_token,
   * customer_id,
   * campaign_name,
   * budget,
   * language_code,
   * country_code,
   * use_login_id):
   */
  createGadsCampaign?: Maybe<CreateGadsCampaign>;
  createGadsCustomer?: Maybe<CreateGadsCustomer>;
  /**
   * def create_responsive_search_ad(
   * refresh_token,
   * customer_id,
   * ad_group_id,
   * headlines,
   * descriptions,
   * final_urls,
   * path1,
   * path2,
   * tracking_url,
   * use_login_id):
   */
  createGadsResponsiveSearchAd?: Maybe<CreateResponsiveSearchAd>;
  /**
   * def create_keyword(
   * refresh_token,
   * customer_id,
   * ad_group_id,
   * keyword_text,
   * match_type,
   * use_login_id):
   */
  createKeyword?: Maybe<CreateKeyword>;
  deleteKeyword?: Maybe<DeleteKeyword>;
  deleteNegativeKeyword?: Maybe<DeleteNegativeKeyword>;
  enableAd?: Maybe<EnableAd>;
  enableCampaign?: Maybe<EnableGadsCampaign>;
  enableGadsAdGroup?: Maybe<EnableGadsAdGroup>;
  enableKeyword?: Maybe<EnableKeyword>;
  faq?: Maybe<FaqObject>;
  faqs?: Maybe<Array<Maybe<FaqObject>>>;
  geminiKeywordSuggestions?: Maybe<GadsResponseList>;
  googleAdsAccounts?: Maybe<GadsResponseList>;
  googleAdsAdGroupMetrics?: Maybe<GadsResponseList>;
  googleAdsAdgroups?: Maybe<GadsResponseList>;
  googleAdsAds?: Maybe<GadsResponseList>;
  googleAdsCampaigns?: Maybe<GadsResponseList>;
  googleAdsCampaignsMetrics?: Maybe<GadsResponseList>;
  googleAdsKeywords?: Maybe<GadsResponseList>;
  invitationsReceived?: Maybe<Array<Maybe<CollaboratorObject>>>;
  invitationsSent?: Maybe<Array<Maybe<CollaboratorObject>>>;
  ipAddress?: Maybe<IpAddress>;
  listNegativeKeywordsForCampaign?: Maybe<GadsResponseList>;
  listReviews?: Maybe<GadsResponseList>;
  page?: Maybe<PageObject>;
  pages?: Maybe<Array<Maybe<PageObject>>>;
  pauseAd?: Maybe<PauseAd>;
  pauseCampaign?: Maybe<PauseGadsCampaign>;
  pauseGadsAdGroup?: Maybe<PauseGadsAdGroup>;
  pauseKeyword?: Maybe<PauseKeyword>;
  postdata?: Maybe<DataObject>;
  postdatas?: Maybe<Array<Maybe<DataObject>>>;
  profile?: Maybe<ProfileObject>;
  question?: Maybe<QuestionObject>;
  questions?: Maybe<Array<Maybe<QuestionObject>>>;
  removeAd?: Maybe<RemoveAd>;
  review?: Maybe<ReviewObject>;
  reviews?: Maybe<Array<Maybe<ReviewObject>>>;
  searchTermsReport?: Maybe<GadsResponseList>;
  service?: Maybe<ServiceObject>;
  services?: Maybe<Array<Maybe<ServiceObject>>>;
  suggestedServices?: Maybe<GadsResponseList>;
  /**
   * def update_call_ad(
   * refresh_token,
   * customer_id,
   * ad_group_id,
   * ad_id,
   * headline1,
   * headline2,
   * description1,
   * description2,
   * phone_number,
   * use_login_id):
   */
  updateCallAd?: Maybe<UpdateCallAd>;
  /**
   * def update_responsive_search_ad(
   * refresh_token,
   * customer_id,
   * ad_group_id,
   * ad_id,
   * headlines,
   * descriptions,
   * use_login_id):
   */
  updateResponseSearchAd?: Maybe<UpdateResponsiveSearchAd>;
  website?: Maybe<WebsiteObject>;
  websites?: Maybe<Array<Maybe<WebsiteObject>>>;
  zipCode?: Maybe<ZipCode>;
  zipCodesByRadius?: Maybe<Array<Maybe<ZipCode>>>;
};


export type QueryAddKeywordsToAdGroupArgs = {
  adGroupId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  keywords: Array<InputMaybe<Scalars['GenericScalar']['input']>>;
  websiteId: Scalars['String']['input'];
};


export type QueryAddNegativeKeywordsSetToCampaignArgs = {
  campaignId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryAddNegativeKeywordsToCampaignArgs = {
  campaignId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  keywords: Array<InputMaybe<Scalars['GenericScalar']['input']>>;
  uniqueIdentifier: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryAreaArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAreasArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCreateGadsAdGroupArgs = {
  accountId: Scalars['String']['input'];
  campaignId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryCreateGadsCallAdArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  businessName: Scalars['String']['input'];
  callTracked: Scalars['Boolean']['input'];
  description1: Scalars['String']['input'];
  description2: Scalars['String']['input'];
  disableCallConversion: Scalars['Boolean']['input'];
  finalUrls: Array<InputMaybe<Scalars['String']['input']>>;
  headline1: Scalars['String']['input'];
  headline2: Scalars['String']['input'];
  path1: Scalars['String']['input'];
  path2: Scalars['String']['input'];
  phoneCountry: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  phoneNumberVerificationUrl?: InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['String']['input'];
};


export type QueryCreateGadsCampaignArgs = {
  budget: Scalars['BigInt']['input'];
  campaignName: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  durationDays?: InputMaybe<Scalars['Int']['input']>;
  languageCode: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryCreateGadsCustomerArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  accountName: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  emailAddress: Scalars['String']['input'];
  timeZone: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryCreateGadsResponsiveSearchAdArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  descriptions: Array<InputMaybe<Scalars['String']['input']>>;
  finalUrls: Array<InputMaybe<Scalars['String']['input']>>;
  headlines: Array<InputMaybe<Scalars['String']['input']>>;
  path1: Scalars['String']['input'];
  path2: Scalars['String']['input'];
  trackingUrl: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryCreateKeywordArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  keywordText: Scalars['String']['input'];
  matchType: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['String']['input'];
};


export type QueryDeleteKeywordArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  criterionId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryDeleteNegativeKeywordArgs = {
  campaignId: Scalars['String']['input'];
  criterionId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  uniqueIdentifier: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryEnableAdArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  adId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryEnableCampaignArgs = {
  accountId: Scalars['String']['input'];
  campaignId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryEnableGadsAdGroupArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryEnableKeywordArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  criterionId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryFaqArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFaqsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGeminiKeywordSuggestionsArgs = {
  adgroupId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  geminiApiKey?: InputMaybe<Scalars['String']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoogleAdsAccountsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoogleAdsAdGroupMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useLoginId?: InputMaybe<Scalars['Boolean']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoogleAdsAdgroupsArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  campaignId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoogleAdsAdsArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  adgroupId?: InputMaybe<Scalars['String']['input']>;
  campaignId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoogleAdsCampaignsArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoogleAdsCampaignsMetricsArgs = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useLoginId?: InputMaybe<Scalars['Boolean']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoogleAdsKeywordsArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  adgroupId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
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


export type QueryListNegativeKeywordsForCampaignArgs = {
  campaignId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  uniqueIdentifier?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListReviewsArgs = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPauseAdArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  adId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryPauseCampaignArgs = {
  accountId: Scalars['String']['input'];
  campaignId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryPauseGadsAdGroupArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryPauseKeywordArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  criterionId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
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


export type QueryRemoveAdArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  adId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryReviewsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySearchTermsReportArgs = {
  adGroupId?: InputMaybe<Scalars['String']['input']>;
  campaignId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dateRange?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryServicesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySuggestedServicesArgs = {
  companyDescription?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUpdateCallAdArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  adId: Scalars['String']['input'];
  description1: Scalars['String']['input'];
  description2: Scalars['String']['input'];
  headline1: Scalars['String']['input'];
  headline2: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
};


export type QueryUpdateResponseSearchAdArgs = {
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  adId: Scalars['String']['input'];
  descriptions: Array<InputMaybe<Scalars['String']['input']>>;
  headlines: Array<InputMaybe<Scalars['String']['input']>>;
  websiteId: Scalars['String']['input'];
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


export type QueryZipCodesByRadiusArgs = {
  radius?: InputMaybe<Scalars['Decimal']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** add_keywords_to_ad_group(refresh_token, ad_group_id, customer_id, keywords, use_login_id): */
export type AddKeywordsToAdGroup = {
  __typename?: 'AddKeywordsToAdGroup';
  data?: Maybe<GadsResponse>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GadsResponse = {
  __typename?: 'GadsResponse';
  data?: Maybe<Scalars['GenericScalar']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['GenericScalar']['output']>>>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** add_negative_keywords_to_shared_set(refresh_token, campaign_id, customer_id, unique_identifier, keywords, use_login_id): */
export type AddNegativeKeywordsSetToCampaign = {
  __typename?: 'AddNegativeKeywordsSetToCampaign';
  data?: Maybe<GadsResponse>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** add_negative_keywords_to_shared_set(refresh_token, campaign_id, customer_id, unique_identifier, keywords, use_login_id): */
export type AddNegativeKeywordsToCampaign = {
  __typename?: 'AddNegativeKeywordsToCampaign';
  data?: Maybe<GadsResponse>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AppVersion = {
  __typename?: 'AppVersion';
  androidUrl?: Maybe<Scalars['String']['output']>;
  iosUrl?: Maybe<Scalars['String']['output']>;
  releaseNotes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version?: Maybe<Scalars['String']['output']>;
};

export type AreaObject = {
  __typename?: 'AreaObject';
  absoluteUrl?: Maybe<Scalars['String']['output']>;
  /** Is this item active? */
  active: Scalars['Boolean']['output'];
  /** String: The city name for this area. */
  city?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  customFooterJs?: Maybe<Scalars['String']['output']>;
  customHeaderCode?: Maybe<Scalars['String']['output']>;
  customHtmlBlock?: Maybe<Scalars['String']['output']>;
  /** A description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The order in which this item should be displayed. */
  displayOrder: Scalars['Int']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  /** An image URL for the item. */
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  includeInGads: Scalars['Boolean']['output'];
  /** Float: The latitude for this area. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** Float: The longitude for this area. */
  longitude?: Maybe<Scalars['Float']['output']>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the item. */
  name?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** The slug is the URL-friendly version of the name. */
  slug?: Maybe<Scalars['String']['output']>;
  /** String: The state name for this area. */
  state?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  /** A video URL for the item. */
  video?: Maybe<Scalars['String']['output']>;
  website: WebsiteObject;
  /** String: The ZIP code for this area. */
  zipCode: Scalars['String']['output'];
};

export type WebsiteObject = {
  __typename?: 'WebsiteObject';
  /** Is this item active? */
  active: Scalars['Boolean']['output'];
  /** String: Primary street address of the business. */
  address1?: Maybe<Scalars['String']['output']>;
  /** String: Secondary address line, if any. */
  address2?: Maybe<Scalars['String']['output']>;
  areas?: Maybe<Array<Maybe<AreaObject>>>;
  /** String: Employer Identification Number (EIN) of the business. */
  businessEinNumber?: Maybe<Scalars['String']['output']>;
  /** String: Name of the business manager. */
  businessManager?: Maybe<Scalars['String']['output']>;
  /** String: City where the business is located. */
  city?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  defaultSubdomainName?: Maybe<Scalars['String']['output']>;
  /** Text: Detailed description of the business's activities and services. */
  description?: Maybe<Scalars['String']['output']>;
  /** The order in which this item should be displayed. */
  displayOrder: Scalars['Int']['output'];
  /** Array of Strings: List of top-level domains for the website, e.g., 'my-local-business.com'. */
  domains?: Maybe<Array<Scalars['String']['output']>>;
  /** String: Email address for business correspondence. */
  emailAddress?: Maybe<Scalars['String']['output']>;
  faqs?: Maybe<Array<Maybe<FaqObject>>>;
  /** String: Google Ads account ID */
  gadsAccountId?: Maybe<Scalars['String']['output']>;
  /** String: Google Ads campaign ID */
  gadsCampaignId?: Maybe<Scalars['String']['output']>;
  /** String: Google Analytics ID for tracking website traffic, e.g., 'IX-123213-923s'. */
  googleAnalytics?: Maybe<Scalars['String']['output']>;
  /** String: Google Tag Manager ID */
  googleTagManager?: Maybe<Scalars['String']['output']>;
  hashId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** An image URL for the item. */
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['JSONString']['output']>>>;
  /** String: Insurance policy number of the business. */
  insuranceNumber?: Maybe<Scalars['String']['output']>;
  /** String: Official license number of the business. */
  licenseNumber?: Maybe<Scalars['String']['output']>;
  /** The logo of the business. Recommended minimum size is 450x300 pixels. */
  logo?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** Message of the day */
  motd?: Maybe<Scalars['String']['output']>;
  /** String: The official name of the business. */
  name: Scalars['String']['output'];
  pages?: Maybe<Array<Maybe<PageObject>>>;
  /** String: Contact phone number of the business. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** String: Primary color theme of the website. */
  primaryColor?: Maybe<Scalars['String']['output']>;
  primaryColorContrast?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<Array<Maybe<ReviewObject>>>;
  /** String: Secondary color theme of the website. */
  secondaryColor?: Maybe<Scalars['String']['output']>;
  secondaryColorContrast?: Maybe<Scalars['String']['output']>;
  services?: Maybe<Array<Maybe<ServiceObject>>>;
  /** The slug is the URL-friendly version of the name. */
  slug?: Maybe<Scalars['String']['output']>;
  /** String: State or region where the business is located. */
  state?: Maybe<Scalars['String']['output']>;
  /** The theme of the website. Portfolio, Services or Emergency. */
  theme: Scalars['String']['output'];
  updated: Scalars['DateTime']['output'];
  /** A video URL for the item. */
  video?: Maybe<Scalars['String']['output']>;
  /** String: Postal code of the business's location. */
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type FaqObject = {
  __typename?: 'FaqObject';
  absoluteUrl?: Maybe<Scalars['String']['output']>;
  /** Is this item active? */
  active: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  customFooterJs?: Maybe<Scalars['String']['output']>;
  customHeaderCode?: Maybe<Scalars['String']['output']>;
  customHtmlBlock?: Maybe<Scalars['String']['output']>;
  /** A description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The order in which this item should be displayed. */
  displayOrder: Scalars['Int']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  /** An image URL for the item. */
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the item. */
  name?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  question?: Maybe<Array<Maybe<QuestionObject>>>;
  /** The slug is the URL-friendly version of the name. */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  /** A video URL for the item. */
  video?: Maybe<Scalars['String']['output']>;
  website: WebsiteObject;
};

export type QuestionObject = {
  __typename?: 'QuestionObject';
  absoluteUrl?: Maybe<Scalars['String']['output']>;
  /** Is this item active? */
  active: Scalars['Boolean']['output'];
  /** String: The answer that the business provides. */
  answer: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  customFooterJs?: Maybe<Scalars['String']['output']>;
  customHeaderCode?: Maybe<Scalars['String']['output']>;
  customHtmlBlock?: Maybe<Scalars['String']['output']>;
  /** A description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The order in which this item should be displayed. */
  displayOrder: Scalars['Int']['output'];
  faq?: Maybe<FaqObject>;
  id?: Maybe<Scalars['ID']['output']>;
  /** An image URL for the item. */
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the item. */
  name?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** String: The question that the business provides. */
  question: Scalars['String']['output'];
  /** The slug is the URL-friendly version of the name. */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  /** A video URL for the item. */
  video?: Maybe<Scalars['String']['output']>;
  website: WebsiteObject;
};

export type PageObject = {
  __typename?: 'PageObject';
  absoluteUrl?: Maybe<Scalars['String']['output']>;
  /** Is this item active? */
  active: Scalars['Boolean']['output'];
  /** Text: The main content of the page, including text, images, and other media. */
  body: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  customFooterJs?: Maybe<Scalars['String']['output']>;
  customHeaderCode?: Maybe<Scalars['String']['output']>;
  customHtmlBlock?: Maybe<Scalars['String']['output']>;
  /** A description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The order in which this item should be displayed. */
  displayOrder: Scalars['Int']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  /** An image URL for the item. */
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the item. */
  name?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** The slug is the URL-friendly version of the name. */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  /** A video URL for the item. */
  video?: Maybe<Scalars['String']['output']>;
  website: WebsiteObject;
};

export type ReviewObject = {
  __typename?: 'ReviewObject';
  absoluteUrl?: Maybe<Scalars['String']['output']>;
  /** Is this item active? */
  active: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  customFooterJs?: Maybe<Scalars['String']['output']>;
  customHeaderCode?: Maybe<Scalars['String']['output']>;
  customHtmlBlock?: Maybe<Scalars['String']['output']>;
  /** A description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The order in which this item should be displayed. */
  displayOrder: Scalars['Int']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  /** An image URL for the item. */
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the item. */
  name?: Maybe<Scalars['String']['output']>;
  /** String: The name of the person who wrote the review. */
  personName: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  /** Decimal: The rating of the review. */
  rating: Scalars['Decimal']['output'];
  /** The slug is the URL-friendly version of the name. */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  /** A video URL for the item. */
  video?: Maybe<Scalars['String']['output']>;
  website: WebsiteObject;
  /** String: The ZIP code of the person who wrote the review. */
  zipCode: Scalars['String']['output'];
};

export type ServiceObject = {
  __typename?: 'ServiceObject';
  absoluteUrl?: Maybe<Scalars['String']['output']>;
  /** Is this item active? */
  active: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  customFooterJs?: Maybe<Scalars['String']['output']>;
  customHeaderCode?: Maybe<Scalars['String']['output']>;
  customHtmlBlock?: Maybe<Scalars['String']['output']>;
  /** A description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The order in which this item should be displayed. */
  displayOrder: Scalars['Int']['output'];
  gadsAdGroupId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** An image URL for the item. */
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the item. */
  name?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** The slug is the URL-friendly version of the name. */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  /** A video URL for the item. */
  video?: Maybe<Scalars['String']['output']>;
  website: WebsiteObject;
};

export type CreateGadsAdGroup = {
  __typename?: 'CreateGADSAdGroup';
  data?: Maybe<GadsResponse>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * def create_call_ad(
 * refresh_token,
 * customer_id,
 * ad_group_id,
 * final_urls,
 * business_name,
 * headline1,
 * headline2,
 * description1,
 * description2,
 * phone_country,
 * phone_number,
 * phone_number_verification_url,
 * call_tracked,
 * disable_call_conversion,
 * path1,
 * path2,
 * use_login_id):
 */
export type CreateCallAd = {
  __typename?: 'CreateCallAd';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GadsResponseList = {
  __typename?: 'GadsResponseList';
  data?: Maybe<Array<Maybe<Scalars['GenericScalar']['output']>>>;
};

/**
 * def create_campaign(
 * refresh_token,
 * customer_id,
 * campaign_name,
 * budget,
 * language_code,
 * country_code,
 * use_login_id):
 */
export type CreateGadsCampaign = {
  __typename?: 'CreateGADSCampaign';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateGadsCustomer = {
  __typename?: 'CreateGADSCustomer';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * def create_responsive_search_ad(
 * refresh_token,
 * customer_id,
 * ad_group_id,
 * headlines,
 * descriptions,
 * final_urls,
 * path1,
 * path2,
 * tracking_url,
 * use_login_id):
 */
export type CreateResponsiveSearchAd = {
  __typename?: 'CreateResponsiveSearchAd';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * def create_keyword(
 * refresh_token,
 * customer_id,
 * ad_group_id,
 * keyword_text,
 * match_type,
 * use_login_id):
 */
export type CreateKeyword = {
  __typename?: 'CreateKeyword';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteKeyword = {
  __typename?: 'DeleteKeyword';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteNegativeKeyword = {
  __typename?: 'DeleteNegativeKeyword';
  data?: Maybe<GadsResponse>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type EnableAd = {
  __typename?: 'EnableAd';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type EnableGadsCampaign = {
  __typename?: 'EnableGADSCampaign';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type EnableGadsAdGroup = {
  __typename?: 'EnableGADSAdGroup';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type EnableKeyword = {
  __typename?: 'EnableKeyword';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
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

export type PauseAd = {
  __typename?: 'PauseAd';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type PauseGadsCampaign = {
  __typename?: 'PauseGADSCampaign';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type PauseGadsAdGroup = {
  __typename?: 'PauseGADSAdGroup';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type PauseKeyword = {
  __typename?: 'PauseKeyword';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DataObject = {
  __typename?: 'DataObject';
  /** Is this item active? */
  active: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  /** JSON: The data of the post. */
  data?: Maybe<Scalars['JSONString']['output']>;
  /** A description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The order in which this item should be displayed. */
  displayOrder: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** An image URL for the item. */
  image?: Maybe<Scalars['String']['output']>;
  /** A list of image URLs for the item. */
  images?: Maybe<Scalars['JSONString']['output']>;
  /** String: The ip address of the user. */
  ipAddress: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the item. */
  name?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** The slug is the URL-friendly version of the name. */
  slug?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  /** A video URL for the item. */
  video?: Maybe<Scalars['String']['output']>;
  website?: Maybe<WebsiteObject>;
};

export type ProfileObject = {
  __typename?: 'ProfileObject';
  /** Boolean: Indicates whether the user opts in for daily summary notifications. */
  dailySummary: Scalars['Boolean']['output'];
  /** String: The email address of the user. Maximum length of 500 characters. */
  emailAddress?: Maybe<Scalars['String']['output']>;
  /** String: The first name of the user. Maximum length of 500 characters. */
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** String: The last name of the user. Maximum length of 500 characters. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** String: Contact phone number of the user. Maximum length of 500 characters. */
  phoneNumber: Scalars['String']['output'];
  pk?: Maybe<Scalars['ID']['output']>;
  /** A reference to the associated Subscription object. This field links each profile to a specific subscription. */
  subscription?: Maybe<SubscriptionObject>;
  /** Boolean: Indicates whether the user opts in for weekly summary notifications. */
  weeklySummary: Scalars['Boolean']['output'];
};

export type SubscriptionObject = {
  __typename?: 'SubscriptionObject';
  /** Is this item active? */
  active: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  /** A description of the item. */
  description?: Maybe<Scalars['String']['output']>;
  /** The order in which this item should be displayed. */
  displayOrder: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** An image URL for the item. */
  image?: Maybe<Scalars['String']['output']>;
  /** A list of image URLs for the item. */
  images?: Maybe<Scalars['JSONString']['output']>;
  /** Integer: The length of the subscription in days. */
  lengthDays?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSONString']['output']>;
  /** The name of the item. */
  name?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['ID']['output']>;
  /** JSON: A JSON object containing the program options selected for this subscription. */
  programOptions?: Maybe<Scalars['GenericScalar']['output']>;
  /** The slug is the URL-friendly version of the name. */
  slug?: Maybe<Scalars['String']['output']>;
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
  /** A video URL for the item. */
  video?: Maybe<Scalars['String']['output']>;
};

export type RemoveAd = {
  __typename?: 'RemoveAd';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * def update_call_ad(
 * refresh_token,
 * customer_id,
 * ad_group_id,
 * ad_id,
 * headline1,
 * headline2,
 * description1,
 * description2,
 * phone_number,
 * use_login_id):
 */
export type UpdateCallAd = {
  __typename?: 'UpdateCallAd';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * def update_responsive_search_ad(
 * refresh_token,
 * customer_id,
 * ad_group_id,
 * ad_id,
 * headlines,
 * descriptions,
 * use_login_id):
 */
export type UpdateResponsiveSearchAd = {
  __typename?: 'UpdateResponsiveSearchAd';
  data?: Maybe<GadsResponseList>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
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
  /** Takes a user token and adds it to a website */
  addTokenToWebsite?: Maybe<AddTokenToWebsite>;
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
  /** Create a Website Wizard. */
  createWebsiteWizard?: Maybe<CreateWebsiteWizard>;
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
  /** Authorize the App to access Google Ads API */
  tokenOauthGoogleAds?: Maybe<TokenOAuthGoogleAds>;
  /** Login using an external OAuth provider */
  tokenOauthGoogleMobileClientLogin?: Maybe<TokenOAuthGoogleMobileClientLogin>;
  /** Signup using an external OAuth provider */
  tokenOauthGoogleMobileClientSignup?: Maybe<TokenOAuthGoogleMobileClienSignup>;
  /** Update a Area. */
  updateArea?: Maybe<UpdateArea>;
  /** Change a user's email subscription. The user must be logged into their account in order to preform  */
  updateEmailSubscription?: Maybe<UpdateEmailSubscription>;
  /** Update a Faq. */
  updateFaq?: Maybe<UpdateFaq>;
  /** Update or Create a Base FAQ. */
  updateOrCreateBaseFaq?: Maybe<UpdateOrCreateBaseFaq>;
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


export type MutationsAddTokenToWebsiteArgs = {
  websiteId: Scalars['Int']['input'];
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


export type MutationsCreateWebsiteWizardArgs = {
  input: WebsiteWizardCreateObject;
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


export type MutationsTokenOauthGoogleAdsArgs = {
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['Int']['input'];
};


export type MutationsTokenOauthGoogleMobileClientLoginArgs = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  oauthPayload?: InputMaybe<Scalars['GenericScalar']['input']>;
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsTokenOauthGoogleMobileClientSignupArgs = {
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


export type MutationsUpdateOrCreateBaseFaqArgs = {
  websiteId: Scalars['ID']['input'];
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

/** Takes a user token and adds it to a website */
export type AddTokenToWebsite = {
  __typename?: 'AddTokenToWebsite';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
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
  active?: InputMaybe<Scalars['Boolean']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  includeInGads?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
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
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
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
  active?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
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
  active?: InputMaybe<Scalars['Boolean']['input']>;
  answer?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  faqId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
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
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personName?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Decimal']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Create a Review. */
export type CreateReview = {
  __typename?: 'CreateReview';
  data?: Maybe<ReviewObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ServiceCreateObject = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  gadsAdGroupId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
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
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: Primary street address of the business. */
  address1?: InputMaybe<Scalars['String']['input']>;
  /** String: Secondary address line, if any. */
  address2?: InputMaybe<Scalars['String']['input']>;
  /** String: Employer Identification Number (EIN) of the business. */
  businessEinNumber?: InputMaybe<Scalars['String']['input']>;
  /** String: Name of the business manager. */
  businessManager?: InputMaybe<Scalars['String']['input']>;
  /** String: City where the business is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  defaultSubdomainName?: InputMaybe<Scalars['String']['input']>;
  /** Text: Detailed description of the business's activities and services. */
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Array of Strings: List of top-level domains for the website, e.g., 'my-local-business.com'. */
  domains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: Email address for business correspondence. */
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  gadsAccountId?: InputMaybe<Scalars['String']['input']>;
  gadsCampaignId?: InputMaybe<Scalars['String']['input']>;
  /** String: Google Analytics ID for tracking website traffic, e.g., 'IX-123213-923s'. */
  googleAnalytics?: InputMaybe<Scalars['String']['input']>;
  /** Google Tag Manager ID */
  googleTagManager?: InputMaybe<Scalars['String']['input']>;
  hashId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: Insurance policy number of the business. */
  insuranceNumber?: InputMaybe<Scalars['String']['input']>;
  /** String: Official license number of the business. */
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  /** Image: Logo of the business. Recommended minimum size is 450x300 pixels. */
  logo?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  /** Message of the day */
  motd?: InputMaybe<Scalars['String']['input']>;
  /** String: The official name of the business. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** String: Contact phone number of the business. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** String: Primary color theme of the website. */
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  primaryColorContrast?: InputMaybe<Scalars['String']['input']>;
  /** String: Secondary color theme of the website. */
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  secondaryColorContrast?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** String: State or region where the business is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** String: The theme of the website. Portfolio, Services, or Emergency. */
  theme?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
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

export type WebsiteWizardCreateObject = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  services?: InputMaybe<Array<InputMaybe<ServiceCreateObject>>>;
  state?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
  zipCodes?: InputMaybe<Array<InputMaybe<ZipCodeCreateObject>>>;
};

export type ZipCodeCreateObject = {
  city?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Create a Website Wizard. */
export type CreateWebsiteWizard = {
  __typename?: 'CreateWebsiteWizard';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  website?: Maybe<WebsiteObject>;
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

/** Signup using an external OAuth provider */
export type TokenOAuthGoogleAds = {
  __typename?: 'TokenOAuthGoogleAds';
  message?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** Login using an external OAuth provider */
export type TokenOAuthGoogleMobileClientLogin = {
  __typename?: 'TokenOAuthGoogleMobileClientLogin';
  message?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** Signup using an external OAuth provider */
export type TokenOAuthGoogleMobileClienSignup = {
  __typename?: 'TokenOAuthGoogleMobileClienSignup';
  message?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type AreaUpdateObject = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  includeInGads?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
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
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};

/** Update a Faq. */
export type UpdateFaq = {
  __typename?: 'UpdateFaq';
  data?: Maybe<FaqObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Update or Create a Base FAQ. */
export type UpdateOrCreateBaseFaq = {
  __typename?: 'UpdateOrCreateBaseFAQ';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type PageUpdateObject = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
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
  active?: InputMaybe<Scalars['Boolean']['input']>;
  answer?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};

/** Update a Question. */
export type UpdateQuestion = {
  __typename?: 'UpdateQuestion';
  data?: Maybe<QuestionObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ReviewUpdateObject = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personName?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Decimal']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Update a Review. */
export type UpdateReview = {
  __typename?: 'UpdateReview';
  data?: Maybe<ReviewObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ServiceUpdateObject = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  customFooterJs?: InputMaybe<Scalars['String']['input']>;
  customHeaderCode?: InputMaybe<Scalars['String']['input']>;
  customHtmlBlock?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  gadsAdGroupId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['GenericScalar']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};

/** Update a Service. */
export type UpdateService = {
  __typename?: 'UpdateService';
  data?: Maybe<ServiceObject>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type WebsiteUpdateObject = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** String: Primary street address of the business. */
  address1?: InputMaybe<Scalars['String']['input']>;
  /** String: Secondary address line, if any. */
  address2?: InputMaybe<Scalars['String']['input']>;
  /** String: Employer Identification Number (EIN) of the business. */
  businessEinNumber?: InputMaybe<Scalars['String']['input']>;
  /** String: Name of the business manager. */
  businessManager?: InputMaybe<Scalars['String']['input']>;
  /** String: City where the business is located. */
  city?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  defaultSubdomainName?: InputMaybe<Scalars['String']['input']>;
  /** Text: Detailed description of the business's activities and services. */
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  /** Array of Strings: List of top-level domains for the website, e.g., 'my-local-business.com'. */
  domains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: Email address for business correspondence. */
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  gadsAccountId?: InputMaybe<Scalars['String']['input']>;
  gadsCampaignId?: InputMaybe<Scalars['String']['input']>;
  /** String: Google Analytics ID for tracking website traffic, e.g., 'IX-123213-923s'. */
  googleAnalytics?: InputMaybe<Scalars['String']['input']>;
  /** Google Tag Manager ID */
  googleTagManager?: InputMaybe<Scalars['String']['input']>;
  hashId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** String: Insurance policy number of the business. */
  insuranceNumber?: InputMaybe<Scalars['String']['input']>;
  /** String: Official license number of the business. */
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  /** Image: Logo of the business. Recommended minimum size is 450x300 pixels. */
  logo?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['GenericScalar']['input']>;
  /** Message of the day */
  motd?: InputMaybe<Scalars['String']['input']>;
  /** String: The official name of the business. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** String: Contact phone number of the business. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** String: Primary color theme of the website. */
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  primaryColorContrast?: InputMaybe<Scalars['String']['input']>;
  /** String: Secondary color theme of the website. */
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  secondaryColorContrast?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** String: State or region where the business is located. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** String: The theme of the website. Portfolio, Services, or Emergency. */
  theme?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
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

export type AddTokenToWebsiteMutationVariables = Exact<{
  websiteId: Scalars['Int']['input'];
}>;


export type AddTokenToWebsiteMutation = { __typename?: 'Mutations', addTokenToWebsite?: { __typename?: 'AddTokenToWebsite', success?: boolean | null, message?: string | null } | null };

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


export type CreateAreaMutation = { __typename?: 'Mutations', createArea?: { __typename?: 'CreateArea', success?: boolean | null, message?: string | null, data?: { __typename?: 'AreaObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, includeInGads: boolean, city?: string | null, state?: string | null, zipCode: string, longitude?: number | null, latitude?: number | null, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type CreateDataMutationVariables = Exact<{
  input: DataCreateObject;
}>;


export type CreateDataMutation = { __typename?: 'Mutations', createData?: { __typename?: 'CreateData', success?: boolean | null, message?: string | null, data?: { __typename?: 'DataObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: any | null, displayOrder: number, data?: any | null, ipAddress: string, pk?: string | null } | null } | null };

export type CreateFaqMutationVariables = Exact<{
  input: FaqCreateObject;
}>;


export type CreateFaqMutation = { __typename?: 'Mutations', createFaq?: { __typename?: 'CreateFaq', success?: boolean | null, message?: string | null, data?: { __typename?: 'FaqObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type CreatePageMutationVariables = Exact<{
  input: PageCreateObject;
}>;


export type CreatePageMutation = { __typename?: 'Mutations', createPage?: { __typename?: 'CreatePage', success?: boolean | null, message?: string | null, data?: { __typename?: 'PageObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, body: string, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type CreateQuestionMutationVariables = Exact<{
  input: QuestionCreateObject;
}>;


export type CreateQuestionMutation = { __typename?: 'Mutations', createQuestion?: { __typename?: 'CreateQuestion', success?: boolean | null, message?: string | null, data?: { __typename?: 'QuestionObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, question: string, answer: string, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type CreateReviewMutationVariables = Exact<{
  input: ReviewCreateObject;
}>;


export type CreateReviewMutation = { __typename?: 'Mutations', createReview?: { __typename?: 'CreateReview', success?: boolean | null, message?: string | null, data?: { __typename?: 'ReviewObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, personName: string, zipCode: string, rating: any, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type CreateServiceMutationVariables = Exact<{
  input: ServiceCreateObject;
}>;


export type CreateServiceMutation = { __typename?: 'Mutations', createService?: { __typename?: 'CreateService', success?: boolean | null, message?: string | null, data?: { __typename?: 'ServiceObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, gadsAdGroupId?: string | null, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type CreateWebsiteMutationVariables = Exact<{
  input: WebsiteCreateObject;
}>;


export type CreateWebsiteMutation = { __typename?: 'Mutations', createWebsite?: { __typename?: 'CreateWebsite', success?: boolean | null, message?: string | null, data?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } | null } | null };

export type CreateWebsiteWizardMutationVariables = Exact<{
  input: WebsiteWizardCreateObject;
}>;


export type CreateWebsiteWizardMutation = { __typename?: 'Mutations', createWebsiteWizard?: { __typename?: 'CreateWebsiteWizard', success?: boolean | null, message?: string | null, website?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } | null } | null };

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


export type ImportWebsiteMutation = { __typename?: 'Mutations', importWebsite?: { __typename?: 'ImportWebsite', success?: boolean | null, message?: string | null, importedWebsite?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } | null } | null };

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

export type TokenOauthGoogleAdsMutationVariables = Exact<{
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['Int']['input'];
}>;


export type TokenOauthGoogleAdsMutation = { __typename?: 'Mutations', tokenOauthGoogleAds?: { __typename?: 'TokenOAuthGoogleAds', success?: boolean | null, message?: string | null, token?: string | null, payload?: any | null } | null };

export type TokenOauthGoogleMobileClientLoginMutationVariables = Exact<{
  accessToken?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  oauthPayload?: InputMaybe<Scalars['GenericScalar']['input']>;
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type TokenOauthGoogleMobileClientLoginMutation = { __typename?: 'Mutations', tokenOauthGoogleMobileClientLogin?: { __typename?: 'TokenOAuthGoogleMobileClientLogin', success?: boolean | null, message?: string | null, token?: string | null, payload?: any | null } | null };

export type TokenOauthGoogleMobileClientSignupMutationVariables = Exact<{
  oauthToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
}>;


export type TokenOauthGoogleMobileClientSignupMutation = { __typename?: 'Mutations', tokenOauthGoogleMobileClientSignup?: { __typename?: 'TokenOAuthGoogleMobileClienSignup', success?: boolean | null, message?: string | null, token?: string | null, payload?: any | null } | null };

export type UpdateAreaMutationVariables = Exact<{
  input: AreaUpdateObject;
}>;


export type UpdateAreaMutation = { __typename?: 'Mutations', updateArea?: { __typename?: 'UpdateArea', success?: boolean | null, message?: string | null, data?: { __typename?: 'AreaObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, includeInGads: boolean, city?: string | null, state?: string | null, zipCode: string, longitude?: number | null, latitude?: number | null, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type UpdateEmailSubscriptionMutationVariables = Exact<{
  dailySummary: Scalars['Boolean']['input'];
  weeklySummary: Scalars['Boolean']['input'];
}>;


export type UpdateEmailSubscriptionMutation = { __typename?: 'Mutations', updateEmailSubscription?: { __typename?: 'UpdateEmailSubscription', data?: string | null, errors?: Array<string | null> | null } | null };

export type UpdateFaqMutationVariables = Exact<{
  input: FaqUpdateObject;
}>;


export type UpdateFaqMutation = { __typename?: 'Mutations', updateFaq?: { __typename?: 'UpdateFaq', success?: boolean | null, message?: string | null, data?: { __typename?: 'FaqObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type UpdateOrCreateBaseFaqMutationVariables = Exact<{
  websiteId: Scalars['ID']['input'];
}>;


export type UpdateOrCreateBaseFaqMutation = { __typename?: 'Mutations', updateOrCreateBaseFaq?: { __typename?: 'UpdateOrCreateBaseFAQ', success?: boolean | null, message?: string | null } | null };

export type UpdatePageMutationVariables = Exact<{
  input: PageUpdateObject;
}>;


export type UpdatePageMutation = { __typename?: 'Mutations', updatePage?: { __typename?: 'UpdatePage', success?: boolean | null, message?: string | null, data?: { __typename?: 'PageObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, body: string, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type UpdateProfileMutationVariables = Exact<{
  input: ProfileUpdateObject;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutations', updateProfile?: { __typename?: 'UpdateProfile', success?: boolean | null, message?: string | null, data?: { __typename?: 'ProfileObject', id: string, firstName?: string | null, lastName?: string | null, phoneNumber: string, dailySummary: boolean, weeklySummary: boolean, pk?: string | null, emailAddress?: string | null } | null } | null };

export type UpdateQuestionMutationVariables = Exact<{
  input: QuestionUpdateObject;
}>;


export type UpdateQuestionMutation = { __typename?: 'Mutations', updateQuestion?: { __typename?: 'UpdateQuestion', success?: boolean | null, message?: string | null, data?: { __typename?: 'QuestionObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, question: string, answer: string, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type UpdateReviewMutationVariables = Exact<{
  input: ReviewUpdateObject;
}>;


export type UpdateReviewMutation = { __typename?: 'Mutations', updateReview?: { __typename?: 'UpdateReview', success?: boolean | null, message?: string | null, data?: { __typename?: 'ReviewObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, personName: string, zipCode: string, rating: any, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type UpdateServiceMutationVariables = Exact<{
  input: ServiceUpdateObject;
}>;


export type UpdateServiceMutation = { __typename?: 'Mutations', updateService?: { __typename?: 'UpdateService', success?: boolean | null, message?: string | null, data?: { __typename?: 'ServiceObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, gadsAdGroupId?: string | null, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type UpdateWebsiteMutationVariables = Exact<{
  input: WebsiteUpdateObject;
}>;


export type UpdateWebsiteMutation = { __typename?: 'Mutations', updateWebsite?: { __typename?: 'UpdateWebsite', success?: boolean | null, message?: string | null, data?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } | null } | null };

export type VerifyTokenMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']['input']>;
}>;


export type VerifyTokenMutation = { __typename?: 'Mutations', verifyToken?: { __typename?: 'Verify', payload: any } | null };

export type AddKeywordsToAdGroupQueryVariables = Exact<{
  adGroupId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  keywords: Array<InputMaybe<Scalars['GenericScalar']['input']>> | InputMaybe<Scalars['GenericScalar']['input']>;
  websiteId: Scalars['String']['input'];
}>;


export type AddKeywordsToAdGroupQuery = { __typename?: 'Query', addKeywordsToAdGroup?: { __typename?: 'AddKeywordsToAdGroup', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponse', success?: boolean | null, errors?: Array<any | null> | null, data?: any | null, message?: string | null } | null } | null };

export type AddNegativeKeywordsSetToCampaignQueryVariables = Exact<{
  campaignId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type AddNegativeKeywordsSetToCampaignQuery = { __typename?: 'Query', addNegativeKeywordsSetToCampaign?: { __typename?: 'AddNegativeKeywordsSetToCampaign', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponse', success?: boolean | null, errors?: Array<any | null> | null, data?: any | null, message?: string | null } | null } | null };

export type AddNegativeKeywordsToCampaignQueryVariables = Exact<{
  campaignId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  keywords: Array<InputMaybe<Scalars['GenericScalar']['input']>> | InputMaybe<Scalars['GenericScalar']['input']>;
  uniqueIdentifier: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type AddNegativeKeywordsToCampaignQuery = { __typename?: 'Query', addNegativeKeywordsToCampaign?: { __typename?: 'AddNegativeKeywordsToCampaign', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponse', success?: boolean | null, errors?: Array<any | null> | null, data?: any | null, message?: string | null } | null } | null };

export type AppVersionQueryVariables = Exact<{ [key: string]: never; }>;


export type AppVersionQuery = { __typename?: 'Query', appVersion?: { __typename?: 'AppVersion', version?: string | null, iosUrl?: string | null, androidUrl?: string | null, releaseNotes?: Array<string | null> | null } | null };

export type AreaQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AreaQuery = { __typename?: 'Query', area?: { __typename?: 'AreaObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, includeInGads: boolean, city?: string | null, state?: string | null, zipCode: string, longitude?: number | null, latitude?: number | null, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } } | null };

export type AreasQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AreasQuery = { __typename?: 'Query', areas?: Array<{ __typename?: 'AreaObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, includeInGads: boolean, city?: string | null, state?: string | null, zipCode: string, longitude?: number | null, latitude?: number | null, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } } | null> | null };

export type CreateGadsAdGroupQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  campaignId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type CreateGadsAdGroupQuery = { __typename?: 'Query', createGadsAdGroup?: { __typename?: 'CreateGADSAdGroup', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponse', success?: boolean | null, errors?: Array<any | null> | null, data?: any | null, message?: string | null } | null } | null };

export type CreateGadsCallAdQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  businessName: Scalars['String']['input'];
  callTracked: Scalars['Boolean']['input'];
  description1: Scalars['String']['input'];
  description2: Scalars['String']['input'];
  disableCallConversion: Scalars['Boolean']['input'];
  finalUrls: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  headline1: Scalars['String']['input'];
  headline2: Scalars['String']['input'];
  path1: Scalars['String']['input'];
  path2: Scalars['String']['input'];
  phoneCountry: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  phoneNumberVerificationUrl?: InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['String']['input'];
}>;


export type CreateGadsCallAdQuery = { __typename?: 'Query', createGadsCallAd?: { __typename?: 'CreateCallAd', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type CreateGadsCampaignQueryVariables = Exact<{
  budget: Scalars['BigInt']['input'];
  campaignName: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  durationDays?: InputMaybe<Scalars['Int']['input']>;
  languageCode: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type CreateGadsCampaignQuery = { __typename?: 'Query', createGadsCampaign?: { __typename?: 'CreateGADSCampaign', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type CreateGadsCustomerQueryVariables = Exact<{
  accountId?: InputMaybe<Scalars['String']['input']>;
  accountName: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  emailAddress: Scalars['String']['input'];
  timeZone: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type CreateGadsCustomerQuery = { __typename?: 'Query', createGadsCustomer?: { __typename?: 'CreateGADSCustomer', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type CreateGadsResponsiveSearchAdQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  descriptions: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  finalUrls: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  headlines: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  path1: Scalars['String']['input'];
  path2: Scalars['String']['input'];
  trackingUrl: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type CreateGadsResponsiveSearchAdQuery = { __typename?: 'Query', createGadsResponsiveSearchAd?: { __typename?: 'CreateResponsiveSearchAd', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type CreateKeywordQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  keywordText: Scalars['String']['input'];
  matchType: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['String']['input'];
}>;


export type CreateKeywordQuery = { __typename?: 'Query', createKeyword?: { __typename?: 'CreateKeyword', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type DeleteKeywordQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  criterionId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type DeleteKeywordQuery = { __typename?: 'Query', deleteKeyword?: { __typename?: 'DeleteKeyword', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type DeleteNegativeKeywordQueryVariables = Exact<{
  campaignId: Scalars['String']['input'];
  criterionId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  uniqueIdentifier: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type DeleteNegativeKeywordQuery = { __typename?: 'Query', deleteNegativeKeyword?: { __typename?: 'DeleteNegativeKeyword', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponse', success?: boolean | null, errors?: Array<any | null> | null, data?: any | null, message?: string | null } | null } | null };

export type EnableAdQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  adId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type EnableAdQuery = { __typename?: 'Query', enableAd?: { __typename?: 'EnableAd', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type EnableCampaignQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  campaignId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type EnableCampaignQuery = { __typename?: 'Query', enableCampaign?: { __typename?: 'EnableGADSCampaign', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type EnableGadsAdGroupQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type EnableGadsAdGroupQuery = { __typename?: 'Query', enableGadsAdGroup?: { __typename?: 'EnableGADSAdGroup', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type EnableKeywordQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  criterionId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type EnableKeywordQuery = { __typename?: 'Query', enableKeyword?: { __typename?: 'EnableKeyword', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type FaqQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FaqQuery = { __typename?: 'Query', faq?: { __typename?: 'FaqObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null }, question?: Array<{ __typename?: 'QuestionObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, question: string, answer: string, pk?: string | null, absoluteUrl?: string | null } | null> | null } | null };

export type FaqsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type FaqsQuery = { __typename?: 'Query', faqs?: Array<{ __typename?: 'FaqObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null }, question?: Array<{ __typename?: 'QuestionObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, question: string, answer: string, pk?: string | null, absoluteUrl?: string | null } | null> | null } | null> | null };

export type GeminiKeywordSuggestionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  geminiApiKey?: InputMaybe<Scalars['String']['input']>;
  adgroupId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GeminiKeywordSuggestionsQuery = { __typename?: 'Query', geminiKeywordSuggestions?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

export type GoogleAdsAccountsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GoogleAdsAccountsQuery = { __typename?: 'Query', googleAdsAccounts?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

export type GoogleAdsAdGroupMetricsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  adGroupId?: InputMaybe<Scalars['String']['input']>;
  useLoginId?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GoogleAdsAdGroupMetricsQuery = { __typename?: 'Query', googleAdsAdGroupMetrics?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

export type GoogleAdsAdgroupsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
  campaignId?: InputMaybe<Scalars['String']['input']>;
  accountId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GoogleAdsAdgroupsQuery = { __typename?: 'Query', googleAdsAdgroups?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

export type GoogleAdsAdsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
  adgroupId?: InputMaybe<Scalars['String']['input']>;
  accountId?: InputMaybe<Scalars['String']['input']>;
  campaignId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GoogleAdsAdsQuery = { __typename?: 'Query', googleAdsAds?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

export type GoogleAdsCampaignsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
  accountId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GoogleAdsCampaignsQuery = { __typename?: 'Query', googleAdsCampaigns?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

export type GoogleAdsCampaignsMetricsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  useLoginId?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GoogleAdsCampaignsMetricsQuery = { __typename?: 'Query', googleAdsCampaignsMetrics?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

export type GoogleAdsKeywordsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
  accountId?: InputMaybe<Scalars['String']['input']>;
  adgroupId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GoogleAdsKeywordsQuery = { __typename?: 'Query', googleAdsKeywords?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

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

export type ListNegativeKeywordsForCampaignQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
  campaignId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  uniqueIdentifier?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListNegativeKeywordsForCampaignQuery = { __typename?: 'Query', listNegativeKeywordsForCampaign?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

export type ListReviewsQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListReviewsQuery = { __typename?: 'Query', listReviews?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

export type PageQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename?: 'PageObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, body: string, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } } | null };

export type PagesQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PagesQuery = { __typename?: 'Query', pages?: Array<{ __typename?: 'PageObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, body: string, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } } | null> | null };

export type PauseAdQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  adId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type PauseAdQuery = { __typename?: 'Query', pauseAd?: { __typename?: 'PauseAd', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type PauseCampaignQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  campaignId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type PauseCampaignQuery = { __typename?: 'Query', pauseCampaign?: { __typename?: 'PauseGADSCampaign', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type PauseGadsAdGroupQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type PauseGadsAdGroupQuery = { __typename?: 'Query', pauseGadsAdGroup?: { __typename?: 'PauseGADSAdGroup', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type PauseKeywordQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  criterionId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type PauseKeywordQuery = { __typename?: 'Query', pauseKeyword?: { __typename?: 'PauseKeyword', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type PostdataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PostdataQuery = { __typename?: 'Query', postdata?: { __typename?: 'DataObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: any | null, displayOrder: number, data?: any | null, ipAddress: string, pk?: string | null, website?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } | null } | null };

export type PostdatasQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type PostdatasQuery = { __typename?: 'Query', postdatas?: Array<{ __typename?: 'DataObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: any | null, displayOrder: number, data?: any | null, ipAddress: string, pk?: string | null, website?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } | null } | null> | null };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'ProfileObject', id: string, firstName?: string | null, lastName?: string | null, phoneNumber: string, dailySummary: boolean, weeklySummary: boolean, pk?: string | null, emailAddress?: string | null, subscription?: { __typename?: 'SubscriptionObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: any | null, displayOrder: number, startDate?: any | null, lengthDays?: number | null, programOptions?: any | null, stripeSubscriptionId?: string | null, stripeCustomerId?: string | null, stripeCheckoutSessionId?: string | null, status?: string | null, pk?: string | null, userId?: string | null } | null } | null };

export type QuestionQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QuestionQuery = { __typename?: 'Query', question?: { __typename?: 'QuestionObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, question: string, answer: string, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null }, faq?: { __typename?: 'FaqObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, pk?: string | null, absoluteUrl?: string | null } | null } | null };

export type QuestionsQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QuestionsQuery = { __typename?: 'Query', questions?: Array<{ __typename?: 'QuestionObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, question: string, answer: string, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null }, faq?: { __typename?: 'FaqObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, pk?: string | null, absoluteUrl?: string | null } | null } | null> | null };

export type RemoveAdQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  adId: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type RemoveAdQuery = { __typename?: 'Query', removeAd?: { __typename?: 'RemoveAd', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type ReviewQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ReviewQuery = { __typename?: 'Query', review?: { __typename?: 'ReviewObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, personName: string, zipCode: string, rating: any, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } } | null };

export type ReviewsQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ReviewsQuery = { __typename?: 'Query', reviews?: Array<{ __typename?: 'ReviewObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, personName: string, zipCode: string, rating: any, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } } | null> | null };

export type SearchTermsReportQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  websiteId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  campaignId?: InputMaybe<Scalars['String']['input']>;
  adGroupId?: InputMaybe<Scalars['String']['input']>;
  dateRange?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type SearchTermsReportQuery = { __typename?: 'Query', searchTermsReport?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

export type ServiceQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ServiceQuery = { __typename?: 'Query', service?: { __typename?: 'ServiceObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, gadsAdGroupId?: string | null, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } } | null };

export type ServicesQueryVariables = Exact<{
  websiteId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ServicesQuery = { __typename?: 'Query', services?: Array<{ __typename?: 'ServiceObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, gadsAdGroupId?: string | null, pk?: string | null, absoluteUrl?: string | null, website: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null } } | null> | null };

export type SuggestedServicesQueryVariables = Exact<{
  companyDescription?: InputMaybe<Scalars['String']['input']>;
}>;


export type SuggestedServicesQuery = { __typename?: 'Query', suggestedServices?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null };

export type UpdateCallAdQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  adId: Scalars['String']['input'];
  description1: Scalars['String']['input'];
  description2: Scalars['String']['input'];
  headline1: Scalars['String']['input'];
  headline2: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  websiteId: Scalars['String']['input'];
}>;


export type UpdateCallAdQuery = { __typename?: 'Query', updateCallAd?: { __typename?: 'UpdateCallAd', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type UpdateResponseSearchAdQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  adGroupId: Scalars['String']['input'];
  adId: Scalars['String']['input'];
  descriptions: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  headlines: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  websiteId: Scalars['String']['input'];
}>;


export type UpdateResponseSearchAdQuery = { __typename?: 'Query', updateResponseSearchAd?: { __typename?: 'UpdateResponsiveSearchAd', success?: boolean | null, message?: string | null, data?: { __typename?: 'GadsResponseList', data?: Array<any | null> | null } | null } | null };

export type WebsiteQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type WebsiteQuery = { __typename?: 'Query', website?: { __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null, services?: Array<{ __typename?: 'ServiceObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, gadsAdGroupId?: string | null, pk?: string | null, absoluteUrl?: string | null } | null> | null, reviews?: Array<{ __typename?: 'ReviewObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, personName: string, zipCode: string, rating: any, pk?: string | null, absoluteUrl?: string | null } | null> | null, faqs?: Array<{ __typename?: 'FaqObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, pk?: string | null, absoluteUrl?: string | null } | null> | null, pages?: Array<{ __typename?: 'PageObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, body: string, pk?: string | null, absoluteUrl?: string | null } | null> | null, areas?: Array<{ __typename?: 'AreaObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, includeInGads: boolean, city?: string | null, state?: string | null, zipCode: string, longitude?: number | null, latitude?: number | null, pk?: string | null, absoluteUrl?: string | null } | null> | null } | null };

export type WebsitesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type WebsitesQuery = { __typename?: 'Query', websites?: Array<{ __typename?: 'WebsiteObject', id: string, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, video?: string | null, image?: string | null, displayOrder: number, address1?: string | null, address2?: string | null, city?: string | null, state?: string | null, zipCode?: string | null, phoneNumber?: string | null, emailAddress?: string | null, name: string, description?: string | null, logo?: string | null, businessManager?: string | null, images?: Array<any | null> | null, licenseNumber?: string | null, insuranceNumber?: string | null, businessEinNumber?: string | null, googleAnalytics?: string | null, googleTagManager?: string | null, motd?: string | null, primaryColor?: string | null, secondaryColor?: string | null, domains?: Array<string> | null, theme: string, gadsAccountId?: string | null, gadsCampaignId?: string | null, pk?: string | null, hashId?: string | null, defaultSubdomainName?: string | null, primaryColorContrast?: string | null, secondaryColorContrast?: string | null, services?: Array<{ __typename?: 'ServiceObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, gadsAdGroupId?: string | null, pk?: string | null, absoluteUrl?: string | null } | null> | null, reviews?: Array<{ __typename?: 'ReviewObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, personName: string, zipCode: string, rating: any, pk?: string | null, absoluteUrl?: string | null } | null> | null, faqs?: Array<{ __typename?: 'FaqObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, pk?: string | null, absoluteUrl?: string | null } | null> | null, pages?: Array<{ __typename?: 'PageObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, body: string, pk?: string | null, absoluteUrl?: string | null } | null> | null, areas?: Array<{ __typename?: 'AreaObject', id?: string | null, created: any, updated: any, metadata?: any | null, slug?: string | null, active: boolean, name?: string | null, description?: string | null, video?: string | null, image?: string | null, images?: Array<string | null> | null, displayOrder: number, customHtmlBlock?: string | null, customHeaderCode?: string | null, customFooterJs?: string | null, includeInGads: boolean, city?: string | null, state?: string | null, zipCode: string, longitude?: number | null, latitude?: number | null, pk?: string | null, absoluteUrl?: string | null } | null> | null } | null> | null };

export type ZipCodeQueryVariables = Exact<{
  zipCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type ZipCodeQuery = { __typename?: 'Query', zipCode?: { __typename?: 'ZipCode', zipCode?: string | null, city?: string | null, state?: string | null, latitude?: string | null, longitude?: string | null, metadata?: any | null } | null };

export type ZipCodesByRadiusQueryVariables = Exact<{
  zipCode?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Decimal']['input']>;
}>;


export type ZipCodesByRadiusQuery = { __typename?: 'Query', zipCodesByRadius?: Array<{ __typename?: 'ZipCode', zipCode?: string | null, city?: string | null, state?: string | null, latitude?: string | null, longitude?: string | null, metadata?: any | null } | null> | null };



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
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  GenericScalar: ResolverTypeWrapper<Scalars['GenericScalar']['output']>;
  AddKeywordsToAdGroup: ResolverTypeWrapper<AddKeywordsToAdGroup>;
  GadsResponse: ResolverTypeWrapper<GadsResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  AddNegativeKeywordsSetToCampaign: ResolverTypeWrapper<AddNegativeKeywordsSetToCampaign>;
  AddNegativeKeywordsToCampaign: ResolverTypeWrapper<AddNegativeKeywordsToCampaign>;
  AppVersion: ResolverTypeWrapper<AppVersion>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  AreaObject: ResolverTypeWrapper<AreaObject>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  JSONString: ResolverTypeWrapper<Scalars['JSONString']['output']>;
  WebsiteObject: ResolverTypeWrapper<WebsiteObject>;
  FaqObject: ResolverTypeWrapper<FaqObject>;
  QuestionObject: ResolverTypeWrapper<QuestionObject>;
  PageObject: ResolverTypeWrapper<PageObject>;
  ReviewObject: ResolverTypeWrapper<ReviewObject>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  ServiceObject: ResolverTypeWrapper<ServiceObject>;
  CreateGADSAdGroup: ResolverTypeWrapper<CreateGadsAdGroup>;
  CreateCallAd: ResolverTypeWrapper<CreateCallAd>;
  GadsResponseList: ResolverTypeWrapper<GadsResponseList>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  CreateGADSCampaign: ResolverTypeWrapper<CreateGadsCampaign>;
  CreateGADSCustomer: ResolverTypeWrapper<CreateGadsCustomer>;
  CreateResponsiveSearchAd: ResolverTypeWrapper<CreateResponsiveSearchAd>;
  CreateKeyword: ResolverTypeWrapper<CreateKeyword>;
  DeleteKeyword: ResolverTypeWrapper<DeleteKeyword>;
  DeleteNegativeKeyword: ResolverTypeWrapper<DeleteNegativeKeyword>;
  EnableAd: ResolverTypeWrapper<EnableAd>;
  EnableGADSCampaign: ResolverTypeWrapper<EnableGadsCampaign>;
  EnableGADSAdGroup: ResolverTypeWrapper<EnableGadsAdGroup>;
  EnableKeyword: ResolverTypeWrapper<EnableKeyword>;
  CollaboratorObject: ResolverTypeWrapper<CollaboratorObject>;
  IPAddress: ResolverTypeWrapper<IpAddress>;
  PauseAd: ResolverTypeWrapper<PauseAd>;
  PauseGADSCampaign: ResolverTypeWrapper<PauseGadsCampaign>;
  PauseGADSAdGroup: ResolverTypeWrapper<PauseGadsAdGroup>;
  PauseKeyword: ResolverTypeWrapper<PauseKeyword>;
  DataObject: ResolverTypeWrapper<DataObject>;
  ProfileObject: ResolverTypeWrapper<ProfileObject>;
  SubscriptionObject: ResolverTypeWrapper<SubscriptionObject>;
  RemoveAd: ResolverTypeWrapper<RemoveAd>;
  UpdateCallAd: ResolverTypeWrapper<UpdateCallAd>;
  UpdateResponsiveSearchAd: ResolverTypeWrapper<UpdateResponsiveSearchAd>;
  ZipCode: ResolverTypeWrapper<ZipCode>;
  Mutations: ResolverTypeWrapper<{}>;
  AcceptInvite: ResolverTypeWrapper<AcceptInvite>;
  ActivateAccount: ResolverTypeWrapper<ActivateAccount>;
  AddTokenToWebsite: ResolverTypeWrapper<AddTokenToWebsite>;
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
  CreatePage: ResolverTypeWrapper<CreatePage>;
  QuestionCreateObject: QuestionCreateObject;
  CreateQuestion: ResolverTypeWrapper<CreateQuestion>;
  ReviewCreateObject: ReviewCreateObject;
  CreateReview: ResolverTypeWrapper<CreateReview>;
  ServiceCreateObject: ServiceCreateObject;
  CreateService: ResolverTypeWrapper<CreateService>;
  WebsiteCreateObject: WebsiteCreateObject;
  CreateWebsite: ResolverTypeWrapper<CreateWebsite>;
  WebsiteWizardCreateObject: WebsiteWizardCreateObject;
  ZipCodeCreateObject: ZipCodeCreateObject;
  CreateWebsiteWizard: ResolverTypeWrapper<CreateWebsiteWizard>;
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
  TokenOAuthGoogleAds: ResolverTypeWrapper<TokenOAuthGoogleAds>;
  TokenOAuthGoogleMobileClientLogin: ResolverTypeWrapper<TokenOAuthGoogleMobileClientLogin>;
  TokenOAuthGoogleMobileClienSignup: ResolverTypeWrapper<TokenOAuthGoogleMobileClienSignup>;
  AreaUpdateObject: AreaUpdateObject;
  UpdateArea: ResolverTypeWrapper<UpdateArea>;
  UpdateEmailSubscription: ResolverTypeWrapper<UpdateEmailSubscription>;
  FaqUpdateObject: FaqUpdateObject;
  UpdateFaq: ResolverTypeWrapper<UpdateFaq>;
  UpdateOrCreateBaseFAQ: ResolverTypeWrapper<UpdateOrCreateBaseFaq>;
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
  String: Scalars['String']['output'];
  GenericScalar: Scalars['GenericScalar']['output'];
  AddKeywordsToAdGroup: AddKeywordsToAdGroup;
  GadsResponse: GadsResponse;
  Boolean: Scalars['Boolean']['output'];
  AddNegativeKeywordsSetToCampaign: AddNegativeKeywordsSetToCampaign;
  AddNegativeKeywordsToCampaign: AddNegativeKeywordsToCampaign;
  AppVersion: AppVersion;
  Int: Scalars['Int']['output'];
  AreaObject: AreaObject;
  DateTime: Scalars['DateTime']['output'];
  ID: Scalars['ID']['output'];
  Float: Scalars['Float']['output'];
  JSONString: Scalars['JSONString']['output'];
  WebsiteObject: WebsiteObject;
  FaqObject: FaqObject;
  QuestionObject: QuestionObject;
  PageObject: PageObject;
  ReviewObject: ReviewObject;
  Decimal: Scalars['Decimal']['output'];
  ServiceObject: ServiceObject;
  CreateGADSAdGroup: CreateGadsAdGroup;
  CreateCallAd: CreateCallAd;
  GadsResponseList: GadsResponseList;
  BigInt: Scalars['BigInt']['output'];
  CreateGADSCampaign: CreateGadsCampaign;
  CreateGADSCustomer: CreateGadsCustomer;
  CreateResponsiveSearchAd: CreateResponsiveSearchAd;
  CreateKeyword: CreateKeyword;
  DeleteKeyword: DeleteKeyword;
  DeleteNegativeKeyword: DeleteNegativeKeyword;
  EnableAd: EnableAd;
  EnableGADSCampaign: EnableGadsCampaign;
  EnableGADSAdGroup: EnableGadsAdGroup;
  EnableKeyword: EnableKeyword;
  CollaboratorObject: CollaboratorObject;
  IPAddress: IpAddress;
  PauseAd: PauseAd;
  PauseGADSCampaign: PauseGadsCampaign;
  PauseGADSAdGroup: PauseGadsAdGroup;
  PauseKeyword: PauseKeyword;
  DataObject: DataObject;
  ProfileObject: ProfileObject;
  SubscriptionObject: SubscriptionObject;
  RemoveAd: RemoveAd;
  UpdateCallAd: UpdateCallAd;
  UpdateResponsiveSearchAd: UpdateResponsiveSearchAd;
  ZipCode: ZipCode;
  Mutations: {};
  AcceptInvite: AcceptInvite;
  ActivateAccount: ActivateAccount;
  AddTokenToWebsite: AddTokenToWebsite;
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
  CreatePage: CreatePage;
  QuestionCreateObject: QuestionCreateObject;
  CreateQuestion: CreateQuestion;
  ReviewCreateObject: ReviewCreateObject;
  CreateReview: CreateReview;
  ServiceCreateObject: ServiceCreateObject;
  CreateService: CreateService;
  WebsiteCreateObject: WebsiteCreateObject;
  CreateWebsite: CreateWebsite;
  WebsiteWizardCreateObject: WebsiteWizardCreateObject;
  ZipCodeCreateObject: ZipCodeCreateObject;
  CreateWebsiteWizard: CreateWebsiteWizard;
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
  TokenOAuthGoogleAds: TokenOAuthGoogleAds;
  TokenOAuthGoogleMobileClientLogin: TokenOAuthGoogleMobileClientLogin;
  TokenOAuthGoogleMobileClienSignup: TokenOAuthGoogleMobileClienSignup;
  AreaUpdateObject: AreaUpdateObject;
  UpdateArea: UpdateArea;
  UpdateEmailSubscription: UpdateEmailSubscription;
  FaqUpdateObject: FaqUpdateObject;
  UpdateFaq: UpdateFaq;
  UpdateOrCreateBaseFAQ: UpdateOrCreateBaseFaq;
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
  addKeywordsToAdGroup?: Resolver<Maybe<ResolversTypes['AddKeywordsToAdGroup']>, ParentType, ContextType, RequireFields<QueryAddKeywordsToAdGroupArgs, 'adGroupId' | 'customerId' | 'keywords' | 'websiteId'>>;
  addNegativeKeywordsSetToCampaign?: Resolver<Maybe<ResolversTypes['AddNegativeKeywordsSetToCampaign']>, ParentType, ContextType, RequireFields<QueryAddNegativeKeywordsSetToCampaignArgs, 'campaignId' | 'customerId' | 'websiteId'>>;
  addNegativeKeywordsToCampaign?: Resolver<Maybe<ResolversTypes['AddNegativeKeywordsToCampaign']>, ParentType, ContextType, RequireFields<QueryAddNegativeKeywordsToCampaignArgs, 'campaignId' | 'customerId' | 'keywords' | 'uniqueIdentifier' | 'websiteId'>>;
  appVersion?: Resolver<Maybe<ResolversTypes['AppVersion']>, ParentType, ContextType>;
  area?: Resolver<Maybe<ResolversTypes['AreaObject']>, ParentType, ContextType, Partial<QueryAreaArgs>>;
  areas?: Resolver<Maybe<Array<Maybe<ResolversTypes['AreaObject']>>>, ParentType, ContextType, Partial<QueryAreasArgs>>;
  createGadsAdGroup?: Resolver<Maybe<ResolversTypes['CreateGADSAdGroup']>, ParentType, ContextType, RequireFields<QueryCreateGadsAdGroupArgs, 'accountId' | 'campaignId' | 'name' | 'websiteId'>>;
  createGadsCallAd?: Resolver<Maybe<ResolversTypes['CreateCallAd']>, ParentType, ContextType, RequireFields<QueryCreateGadsCallAdArgs, 'accountId' | 'adGroupId' | 'businessName' | 'callTracked' | 'description1' | 'description2' | 'disableCallConversion' | 'finalUrls' | 'headline1' | 'headline2' | 'path1' | 'path2' | 'phoneCountry' | 'phoneNumber' | 'websiteId'>>;
  createGadsCampaign?: Resolver<Maybe<ResolversTypes['CreateGADSCampaign']>, ParentType, ContextType, RequireFields<QueryCreateGadsCampaignArgs, 'budget' | 'campaignName' | 'countryCode' | 'customerId' | 'languageCode' | 'websiteId'>>;
  createGadsCustomer?: Resolver<Maybe<ResolversTypes['CreateGADSCustomer']>, ParentType, ContextType, RequireFields<QueryCreateGadsCustomerArgs, 'accountName' | 'currencyCode' | 'emailAddress' | 'timeZone' | 'websiteId'>>;
  createGadsResponsiveSearchAd?: Resolver<Maybe<ResolversTypes['CreateResponsiveSearchAd']>, ParentType, ContextType, RequireFields<QueryCreateGadsResponsiveSearchAdArgs, 'accountId' | 'adGroupId' | 'descriptions' | 'finalUrls' | 'headlines' | 'path1' | 'path2' | 'trackingUrl' | 'websiteId'>>;
  createKeyword?: Resolver<Maybe<ResolversTypes['CreateKeyword']>, ParentType, ContextType, RequireFields<QueryCreateKeywordArgs, 'accountId' | 'adGroupId' | 'keywordText' | 'matchType' | 'websiteId'>>;
  deleteKeyword?: Resolver<Maybe<ResolversTypes['DeleteKeyword']>, ParentType, ContextType, RequireFields<QueryDeleteKeywordArgs, 'accountId' | 'adGroupId' | 'criterionId' | 'websiteId'>>;
  deleteNegativeKeyword?: Resolver<Maybe<ResolversTypes['DeleteNegativeKeyword']>, ParentType, ContextType, RequireFields<QueryDeleteNegativeKeywordArgs, 'campaignId' | 'criterionId' | 'customerId' | 'uniqueIdentifier' | 'websiteId'>>;
  enableAd?: Resolver<Maybe<ResolversTypes['EnableAd']>, ParentType, ContextType, RequireFields<QueryEnableAdArgs, 'accountId' | 'adGroupId' | 'adId' | 'websiteId'>>;
  enableCampaign?: Resolver<Maybe<ResolversTypes['EnableGADSCampaign']>, ParentType, ContextType, RequireFields<QueryEnableCampaignArgs, 'accountId' | 'campaignId' | 'websiteId'>>;
  enableGadsAdGroup?: Resolver<Maybe<ResolversTypes['EnableGADSAdGroup']>, ParentType, ContextType, RequireFields<QueryEnableGadsAdGroupArgs, 'accountId' | 'adGroupId' | 'websiteId'>>;
  enableKeyword?: Resolver<Maybe<ResolversTypes['EnableKeyword']>, ParentType, ContextType, RequireFields<QueryEnableKeywordArgs, 'accountId' | 'adGroupId' | 'criterionId' | 'websiteId'>>;
  faq?: Resolver<Maybe<ResolversTypes['FaqObject']>, ParentType, ContextType, Partial<QueryFaqArgs>>;
  faqs?: Resolver<Maybe<Array<Maybe<ResolversTypes['FaqObject']>>>, ParentType, ContextType, Partial<QueryFaqsArgs>>;
  geminiKeywordSuggestions?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QueryGeminiKeywordSuggestionsArgs>>;
  googleAdsAccounts?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QueryGoogleAdsAccountsArgs>>;
  googleAdsAdGroupMetrics?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QueryGoogleAdsAdGroupMetricsArgs>>;
  googleAdsAdgroups?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QueryGoogleAdsAdgroupsArgs>>;
  googleAdsAds?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QueryGoogleAdsAdsArgs>>;
  googleAdsCampaigns?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QueryGoogleAdsCampaignsArgs>>;
  googleAdsCampaignsMetrics?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QueryGoogleAdsCampaignsMetricsArgs>>;
  googleAdsKeywords?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QueryGoogleAdsKeywordsArgs>>;
  invitationsReceived?: Resolver<Maybe<Array<Maybe<ResolversTypes['CollaboratorObject']>>>, ParentType, ContextType, Partial<QueryInvitationsReceivedArgs>>;
  invitationsSent?: Resolver<Maybe<Array<Maybe<ResolversTypes['CollaboratorObject']>>>, ParentType, ContextType, Partial<QueryInvitationsSentArgs>>;
  ipAddress?: Resolver<Maybe<ResolversTypes['IPAddress']>, ParentType, ContextType, Partial<QueryIpAddressArgs>>;
  listNegativeKeywordsForCampaign?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QueryListNegativeKeywordsForCampaignArgs>>;
  listReviews?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QueryListReviewsArgs>>;
  page?: Resolver<Maybe<ResolversTypes['PageObject']>, ParentType, ContextType, Partial<QueryPageArgs>>;
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['PageObject']>>>, ParentType, ContextType, Partial<QueryPagesArgs>>;
  pauseAd?: Resolver<Maybe<ResolversTypes['PauseAd']>, ParentType, ContextType, RequireFields<QueryPauseAdArgs, 'accountId' | 'adGroupId' | 'adId' | 'websiteId'>>;
  pauseCampaign?: Resolver<Maybe<ResolversTypes['PauseGADSCampaign']>, ParentType, ContextType, RequireFields<QueryPauseCampaignArgs, 'accountId' | 'campaignId' | 'websiteId'>>;
  pauseGadsAdGroup?: Resolver<Maybe<ResolversTypes['PauseGADSAdGroup']>, ParentType, ContextType, RequireFields<QueryPauseGadsAdGroupArgs, 'accountId' | 'adGroupId' | 'websiteId'>>;
  pauseKeyword?: Resolver<Maybe<ResolversTypes['PauseKeyword']>, ParentType, ContextType, RequireFields<QueryPauseKeywordArgs, 'accountId' | 'adGroupId' | 'criterionId' | 'websiteId'>>;
  postdata?: Resolver<Maybe<ResolversTypes['DataObject']>, ParentType, ContextType, Partial<QueryPostdataArgs>>;
  postdatas?: Resolver<Maybe<Array<Maybe<ResolversTypes['DataObject']>>>, ParentType, ContextType, Partial<QueryPostdatasArgs>>;
  profile?: Resolver<Maybe<ResolversTypes['ProfileObject']>, ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['QuestionObject']>, ParentType, ContextType, Partial<QueryQuestionArgs>>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuestionObject']>>>, ParentType, ContextType, Partial<QueryQuestionsArgs>>;
  removeAd?: Resolver<Maybe<ResolversTypes['RemoveAd']>, ParentType, ContextType, RequireFields<QueryRemoveAdArgs, 'accountId' | 'adGroupId' | 'adId' | 'websiteId'>>;
  review?: Resolver<Maybe<ResolversTypes['ReviewObject']>, ParentType, ContextType, Partial<QueryReviewArgs>>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReviewObject']>>>, ParentType, ContextType, Partial<QueryReviewsArgs>>;
  searchTermsReport?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QuerySearchTermsReportArgs>>;
  service?: Resolver<Maybe<ResolversTypes['ServiceObject']>, ParentType, ContextType, Partial<QueryServiceArgs>>;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServiceObject']>>>, ParentType, ContextType, Partial<QueryServicesArgs>>;
  suggestedServices?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType, Partial<QuerySuggestedServicesArgs>>;
  updateCallAd?: Resolver<Maybe<ResolversTypes['UpdateCallAd']>, ParentType, ContextType, RequireFields<QueryUpdateCallAdArgs, 'accountId' | 'adGroupId' | 'adId' | 'description1' | 'description2' | 'headline1' | 'headline2' | 'phoneNumber' | 'websiteId'>>;
  updateResponseSearchAd?: Resolver<Maybe<ResolversTypes['UpdateResponsiveSearchAd']>, ParentType, ContextType, RequireFields<QueryUpdateResponseSearchAdArgs, 'accountId' | 'adGroupId' | 'adId' | 'descriptions' | 'headlines' | 'websiteId'>>;
  website?: Resolver<Maybe<ResolversTypes['WebsiteObject']>, ParentType, ContextType, Partial<QueryWebsiteArgs>>;
  websites?: Resolver<Maybe<Array<Maybe<ResolversTypes['WebsiteObject']>>>, ParentType, ContextType, Partial<QueryWebsitesArgs>>;
  zipCode?: Resolver<Maybe<ResolversTypes['ZipCode']>, ParentType, ContextType, Partial<QueryZipCodeArgs>>;
  zipCodesByRadius?: Resolver<Maybe<Array<Maybe<ResolversTypes['ZipCode']>>>, ParentType, ContextType, Partial<QueryZipCodesByRadiusArgs>>;
};

export interface GenericScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GenericScalar'], any> {
  name: 'GenericScalar';
}

export type AddKeywordsToAdGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddKeywordsToAdGroup'] = ResolversParentTypes['AddKeywordsToAdGroup']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponse']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GadsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GadsResponse'] = ResolversParentTypes['GadsResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['GenericScalar']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenericScalar']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddNegativeKeywordsSetToCampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddNegativeKeywordsSetToCampaign'] = ResolversParentTypes['AddNegativeKeywordsSetToCampaign']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponse']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddNegativeKeywordsToCampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddNegativeKeywordsToCampaign'] = ResolversParentTypes['AddNegativeKeywordsToCampaign']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponse']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppVersion'] = ResolversParentTypes['AppVersion']> = {
  androidUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iosUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseNotes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AreaObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['AreaObject'] = ResolversParentTypes['AreaObject']> = {
  absoluteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFooterJs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHeaderCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHtmlBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  includeInGads?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  areas?: Resolver<Maybe<Array<Maybe<ResolversTypes['AreaObject']>>>, ParentType, ContextType>;
  businessEinNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  businessManager?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  defaultSubdomainName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  domains?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  emailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  faqs?: Resolver<Maybe<Array<Maybe<ResolversTypes['FaqObject']>>>, ParentType, ContextType>;
  gadsAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gadsCampaignId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleAnalytics?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleTagManager?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hashId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSONString']>>>, ParentType, ContextType>;
  insuranceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  licenseNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  motd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['PageObject']>>>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  primaryColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryColorContrast?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReviewObject']>>>, ParentType, ContextType>;
  secondaryColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondaryColorContrast?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServiceObject']>>>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  theme?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['FaqObject'] = ResolversParentTypes['FaqObject']> = {
  absoluteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFooterJs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHeaderCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHtmlBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  question?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuestionObject']>>>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionObject'] = ResolversParentTypes['QuestionObject']> = {
  absoluteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFooterJs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHeaderCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHtmlBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  faq?: Resolver<Maybe<ResolversTypes['FaqObject']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageObject'] = ResolversParentTypes['PageObject']> = {
  absoluteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFooterJs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHeaderCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHtmlBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewObject'] = ResolversParentTypes['ReviewObject']> = {
  absoluteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFooterJs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHeaderCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHtmlBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type ServiceObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceObject'] = ResolversParentTypes['ServiceObject']> = {
  absoluteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFooterJs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHeaderCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customHtmlBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gadsAdGroupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<ResolversTypes['WebsiteObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateGadsAdGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateGADSAdGroup'] = ResolversParentTypes['CreateGADSAdGroup']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponse']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCallAdResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCallAd'] = ResolversParentTypes['CreateCallAd']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GadsResponseListResolvers<ContextType = any, ParentType extends ResolversParentTypes['GadsResponseList'] = ResolversParentTypes['GadsResponseList']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenericScalar']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CreateGadsCampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateGADSCampaign'] = ResolversParentTypes['CreateGADSCampaign']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateGadsCustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateGADSCustomer'] = ResolversParentTypes['CreateGADSCustomer']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateResponsiveSearchAdResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateResponsiveSearchAd'] = ResolversParentTypes['CreateResponsiveSearchAd']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKeywordResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateKeyword'] = ResolversParentTypes['CreateKeyword']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteKeywordResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteKeyword'] = ResolversParentTypes['DeleteKeyword']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteNegativeKeywordResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteNegativeKeyword'] = ResolversParentTypes['DeleteNegativeKeyword']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponse']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnableAdResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnableAd'] = ResolversParentTypes['EnableAd']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnableGadsCampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnableGADSCampaign'] = ResolversParentTypes['EnableGADSCampaign']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnableGadsAdGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnableGADSAdGroup'] = ResolversParentTypes['EnableGADSAdGroup']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnableKeywordResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnableKeyword'] = ResolversParentTypes['EnableKeyword']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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

export type PauseAdResolvers<ContextType = any, ParentType extends ResolversParentTypes['PauseAd'] = ResolversParentTypes['PauseAd']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PauseGadsCampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['PauseGADSCampaign'] = ResolversParentTypes['PauseGADSCampaign']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PauseGadsAdGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['PauseGADSAdGroup'] = ResolversParentTypes['PauseGADSAdGroup']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PauseKeywordResolvers<ContextType = any, ParentType extends ResolversParentTypes['PauseKeyword'] = ResolversParentTypes['PauseKeyword']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataObject'] = ResolversParentTypes['DataObject']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  ipAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['WebsiteObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileObject'] = ResolversParentTypes['ProfileObject']> = {
  dailySummary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  emailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  subscription?: Resolver<Maybe<ResolversTypes['SubscriptionObject']>, ParentType, ContextType>;
  weeklySummary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriptionObject'] = ResolversParentTypes['SubscriptionObject']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  lengthDays?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSONString']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pk?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  programOptions?: Resolver<Maybe<ResolversTypes['GenericScalar']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stripeCheckoutSessionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stripeCustomerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stripeSubscriptionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveAdResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveAd'] = ResolversParentTypes['RemoveAd']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCallAdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCallAd'] = ResolversParentTypes['UpdateCallAd']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateResponsiveSearchAdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateResponsiveSearchAd'] = ResolversParentTypes['UpdateResponsiveSearchAd']> = {
  data?: Resolver<Maybe<ResolversTypes['GadsResponseList']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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
  addTokenToWebsite?: Resolver<Maybe<ResolversTypes['AddTokenToWebsite']>, ParentType, ContextType, RequireFields<MutationsAddTokenToWebsiteArgs, 'websiteId'>>;
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
  createWebsiteWizard?: Resolver<Maybe<ResolversTypes['CreateWebsiteWizard']>, ParentType, ContextType, RequireFields<MutationsCreateWebsiteWizardArgs, 'input'>>;
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
  tokenOauthGoogleAds?: Resolver<Maybe<ResolversTypes['TokenOAuthGoogleAds']>, ParentType, ContextType, RequireFields<MutationsTokenOauthGoogleAdsArgs, 'websiteId'>>;
  tokenOauthGoogleMobileClientLogin?: Resolver<Maybe<ResolversTypes['TokenOAuthGoogleMobileClientLogin']>, ParentType, ContextType, Partial<MutationsTokenOauthGoogleMobileClientLoginArgs>>;
  tokenOauthGoogleMobileClientSignup?: Resolver<Maybe<ResolversTypes['TokenOAuthGoogleMobileClienSignup']>, ParentType, ContextType, Partial<MutationsTokenOauthGoogleMobileClientSignupArgs>>;
  updateArea?: Resolver<Maybe<ResolversTypes['UpdateArea']>, ParentType, ContextType, RequireFields<MutationsUpdateAreaArgs, 'input'>>;
  updateEmailSubscription?: Resolver<Maybe<ResolversTypes['UpdateEmailSubscription']>, ParentType, ContextType, RequireFields<MutationsUpdateEmailSubscriptionArgs, 'dailySummary' | 'weeklySummary'>>;
  updateFaq?: Resolver<Maybe<ResolversTypes['UpdateFaq']>, ParentType, ContextType, RequireFields<MutationsUpdateFaqArgs, 'input'>>;
  updateOrCreateBaseFaq?: Resolver<Maybe<ResolversTypes['UpdateOrCreateBaseFAQ']>, ParentType, ContextType, RequireFields<MutationsUpdateOrCreateBaseFaqArgs, 'websiteId'>>;
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

export type AddTokenToWebsiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddTokenToWebsite'] = ResolversParentTypes['AddTokenToWebsite']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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

export type CreateWebsiteWizardResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateWebsiteWizard'] = ResolversParentTypes['CreateWebsiteWizard']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['WebsiteObject']>, ParentType, ContextType>;
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

export type TokenOAuthGoogleAdsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenOAuthGoogleAds'] = ResolversParentTypes['TokenOAuthGoogleAds']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['GenericScalar']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenOAuthGoogleMobileClientLoginResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenOAuthGoogleMobileClientLogin'] = ResolversParentTypes['TokenOAuthGoogleMobileClientLogin']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['GenericScalar']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenOAuthGoogleMobileClienSignupResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenOAuthGoogleMobileClienSignup'] = ResolversParentTypes['TokenOAuthGoogleMobileClienSignup']> = {
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

export type UpdateOrCreateBaseFaqResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOrCreateBaseFAQ'] = ResolversParentTypes['UpdateOrCreateBaseFAQ']> = {
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
  GenericScalar?: GraphQLScalarType;
  AddKeywordsToAdGroup?: AddKeywordsToAdGroupResolvers<ContextType>;
  GadsResponse?: GadsResponseResolvers<ContextType>;
  AddNegativeKeywordsSetToCampaign?: AddNegativeKeywordsSetToCampaignResolvers<ContextType>;
  AddNegativeKeywordsToCampaign?: AddNegativeKeywordsToCampaignResolvers<ContextType>;
  AppVersion?: AppVersionResolvers<ContextType>;
  AreaObject?: AreaObjectResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  JSONString?: GraphQLScalarType;
  WebsiteObject?: WebsiteObjectResolvers<ContextType>;
  FaqObject?: FaqObjectResolvers<ContextType>;
  QuestionObject?: QuestionObjectResolvers<ContextType>;
  PageObject?: PageObjectResolvers<ContextType>;
  ReviewObject?: ReviewObjectResolvers<ContextType>;
  Decimal?: GraphQLScalarType;
  ServiceObject?: ServiceObjectResolvers<ContextType>;
  CreateGADSAdGroup?: CreateGadsAdGroupResolvers<ContextType>;
  CreateCallAd?: CreateCallAdResolvers<ContextType>;
  GadsResponseList?: GadsResponseListResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  CreateGADSCampaign?: CreateGadsCampaignResolvers<ContextType>;
  CreateGADSCustomer?: CreateGadsCustomerResolvers<ContextType>;
  CreateResponsiveSearchAd?: CreateResponsiveSearchAdResolvers<ContextType>;
  CreateKeyword?: CreateKeywordResolvers<ContextType>;
  DeleteKeyword?: DeleteKeywordResolvers<ContextType>;
  DeleteNegativeKeyword?: DeleteNegativeKeywordResolvers<ContextType>;
  EnableAd?: EnableAdResolvers<ContextType>;
  EnableGADSCampaign?: EnableGadsCampaignResolvers<ContextType>;
  EnableGADSAdGroup?: EnableGadsAdGroupResolvers<ContextType>;
  EnableKeyword?: EnableKeywordResolvers<ContextType>;
  CollaboratorObject?: CollaboratorObjectResolvers<ContextType>;
  IPAddress?: IpAddressResolvers<ContextType>;
  PauseAd?: PauseAdResolvers<ContextType>;
  PauseGADSCampaign?: PauseGadsCampaignResolvers<ContextType>;
  PauseGADSAdGroup?: PauseGadsAdGroupResolvers<ContextType>;
  PauseKeyword?: PauseKeywordResolvers<ContextType>;
  DataObject?: DataObjectResolvers<ContextType>;
  ProfileObject?: ProfileObjectResolvers<ContextType>;
  SubscriptionObject?: SubscriptionObjectResolvers<ContextType>;
  RemoveAd?: RemoveAdResolvers<ContextType>;
  UpdateCallAd?: UpdateCallAdResolvers<ContextType>;
  UpdateResponsiveSearchAd?: UpdateResponsiveSearchAdResolvers<ContextType>;
  ZipCode?: ZipCodeResolvers<ContextType>;
  Mutations?: MutationsResolvers<ContextType>;
  AcceptInvite?: AcceptInviteResolvers<ContextType>;
  ActivateAccount?: ActivateAccountResolvers<ContextType>;
  AddTokenToWebsite?: AddTokenToWebsiteResolvers<ContextType>;
  ChangeEmailAddress?: ChangeEmailAddressResolvers<ContextType>;
  ChangePassword?: ChangePasswordResolvers<ContextType>;
  CompleteResetPassword?: CompleteResetPasswordResolvers<ContextType>;
  CrawlWebsite?: CrawlWebsiteResolvers<ContextType>;
  CreateArea?: CreateAreaResolvers<ContextType>;
  CreateData?: CreateDataResolvers<ContextType>;
  CreateFaq?: CreateFaqResolvers<ContextType>;
  CreatePage?: CreatePageResolvers<ContextType>;
  CreateQuestion?: CreateQuestionResolvers<ContextType>;
  CreateReview?: CreateReviewResolvers<ContextType>;
  CreateService?: CreateServiceResolvers<ContextType>;
  CreateWebsite?: CreateWebsiteResolvers<ContextType>;
  CreateWebsiteWizard?: CreateWebsiteWizardResolvers<ContextType>;
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
  TokenOAuthGoogleAds?: TokenOAuthGoogleAdsResolvers<ContextType>;
  TokenOAuthGoogleMobileClientLogin?: TokenOAuthGoogleMobileClientLoginResolvers<ContextType>;
  TokenOAuthGoogleMobileClienSignup?: TokenOAuthGoogleMobileClienSignupResolvers<ContextType>;
  UpdateArea?: UpdateAreaResolvers<ContextType>;
  UpdateEmailSubscription?: UpdateEmailSubscriptionResolvers<ContextType>;
  UpdateFaq?: UpdateFaqResolvers<ContextType>;
  UpdateOrCreateBaseFAQ?: UpdateOrCreateBaseFaqResolvers<ContextType>;
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
export const AddTokenToWebsiteDocument = gql`
    mutation addTokenToWebsite($websiteId: Int!) {
  addTokenToWebsite(websiteId: $websiteId) {
    success
    message
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
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      includeInGads
      city
      state
      zipCode
      longitude
      latitude
      pk
      absoluteUrl
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
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
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
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      pk
      absoluteUrl
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
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      body
      pk
      absoluteUrl
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
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      question
      answer
      pk
      absoluteUrl
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
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      personName
      zipCode
      rating
      pk
      absoluteUrl
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
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      gadsAdGroupId
      pk
      absoluteUrl
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
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    success
    message
  }
}
    `;
export const CreateWebsiteWizardDocument = gql`
    mutation createWebsiteWizard($input: WebsiteWizardCreateObject!) {
  createWebsiteWizard(input: $input) {
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
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
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
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
export const TokenOauthGoogleAdsDocument = gql`
    mutation tokenOauthGoogleAds($oauthToken: String, $provider: String, $websiteId: Int!) {
  tokenOauthGoogleAds(oauthToken: $oauthToken, provider: $provider, websiteId: $websiteId) {
    success
    message
    token
    payload
  }
}
    `;
export const TokenOauthGoogleMobileClientLoginDocument = gql`
    mutation tokenOauthGoogleMobileClientLogin($accessToken: String, $email: String, $oauthPayload: GenericScalar, $oauthToken: String, $provider: String, $refreshToken: String) {
  tokenOauthGoogleMobileClientLogin(accessToken: $accessToken, email: $email, oauthPayload: $oauthPayload, oauthToken: $oauthToken, provider: $provider, refreshToken: $refreshToken) {
    success
    message
    token
    payload
  }
}
    `;
export const TokenOauthGoogleMobileClientSignupDocument = gql`
    mutation tokenOauthGoogleMobileClientSignup($oauthToken: String, $provider: String) {
  tokenOauthGoogleMobileClientSignup(oauthToken: $oauthToken, provider: $provider) {
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
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      includeInGads
      city
      state
      zipCode
      longitude
      latitude
      pk
      absoluteUrl
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
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      pk
      absoluteUrl
    }
    success
    message
  }
}
    `;
export const UpdateOrCreateBaseFaqDocument = gql`
    mutation updateOrCreateBaseFaq($websiteId: ID!) {
  updateOrCreateBaseFaq(websiteId: $websiteId) {
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
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      body
      pk
      absoluteUrl
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
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      question
      answer
      pk
      absoluteUrl
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
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      personName
      zipCode
      rating
      pk
      absoluteUrl
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
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      gadsAdGroupId
      pk
      absoluteUrl
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
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
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
export const AddKeywordsToAdGroupDocument = gql`
    query addKeywordsToAdGroup($adGroupId: String!, $customerId: String!, $keywords: [GenericScalar]!, $websiteId: String!) {
  addKeywordsToAdGroup(adGroupId: $adGroupId, customerId: $customerId, keywords: $keywords, websiteId: $websiteId) {
    success
    message
    data {
      success
      errors
      data
      message
    }
  }
}
    `;
export const AddNegativeKeywordsSetToCampaignDocument = gql`
    query addNegativeKeywordsSetToCampaign($campaignId: String!, $customerId: String!, $websiteId: String!) {
  addNegativeKeywordsSetToCampaign(campaignId: $campaignId, customerId: $customerId, websiteId: $websiteId) {
    success
    message
    data {
      success
      errors
      data
      message
    }
  }
}
    `;
export const AddNegativeKeywordsToCampaignDocument = gql`
    query addNegativeKeywordsToCampaign($campaignId: String!, $customerId: String!, $keywords: [GenericScalar]!, $uniqueIdentifier: String!, $websiteId: String!) {
  addNegativeKeywordsToCampaign(campaignId: $campaignId, customerId: $customerId, keywords: $keywords, uniqueIdentifier: $uniqueIdentifier, websiteId: $websiteId) {
    success
    message
    data {
      success
      errors
      data
      message
    }
  }
}
    `;
export const AppVersionDocument = gql`
    query appVersion {
  appVersion {
    version
    iosUrl
    androidUrl
    releaseNotes
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
    slug
    active
    name
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    includeInGads
    city
    state
    zipCode
    longitude
    latitude
    pk
    absoluteUrl
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
    slug
    active
    name
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    includeInGads
    city
    state
    zipCode
    longitude
    latitude
    pk
    absoluteUrl
  }
}
    `;
export const CreateGadsAdGroupDocument = gql`
    query createGadsAdGroup($accountId: String!, $campaignId: String!, $name: String!, $websiteId: String!) {
  createGadsAdGroup(accountId: $accountId, campaignId: $campaignId, name: $name, websiteId: $websiteId) {
    success
    message
    data {
      success
      errors
      data
      message
    }
  }
}
    `;
export const CreateGadsCallAdDocument = gql`
    query createGadsCallAd($accountId: String!, $adGroupId: String!, $businessName: String!, $callTracked: Boolean!, $description1: String!, $description2: String!, $disableCallConversion: Boolean!, $finalUrls: [String]!, $headline1: String!, $headline2: String!, $path1: String!, $path2: String!, $phoneCountry: String!, $phoneNumber: String!, $phoneNumberVerificationUrl: String, $websiteId: String!) {
  createGadsCallAd(accountId: $accountId, adGroupId: $adGroupId, businessName: $businessName, callTracked: $callTracked, description1: $description1, description2: $description2, disableCallConversion: $disableCallConversion, finalUrls: $finalUrls, headline1: $headline1, headline2: $headline2, path1: $path1, path2: $path2, phoneCountry: $phoneCountry, phoneNumber: $phoneNumber, phoneNumberVerificationUrl: $phoneNumberVerificationUrl, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const CreateGadsCampaignDocument = gql`
    query createGadsCampaign($budget: BigInt!, $campaignName: String!, $countryCode: String!, $customerId: String!, $durationDays: Int, $languageCode: String!, $websiteId: String!) {
  createGadsCampaign(budget: $budget, campaignName: $campaignName, countryCode: $countryCode, customerId: $customerId, durationDays: $durationDays, languageCode: $languageCode, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const CreateGadsCustomerDocument = gql`
    query createGadsCustomer($accountId: String, $accountName: String!, $currencyCode: String!, $emailAddress: String!, $timeZone: String!, $websiteId: String!) {
  createGadsCustomer(accountId: $accountId, accountName: $accountName, currencyCode: $currencyCode, emailAddress: $emailAddress, timeZone: $timeZone, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const CreateGadsResponsiveSearchAdDocument = gql`
    query createGadsResponsiveSearchAd($accountId: String!, $adGroupId: String!, $descriptions: [String]!, $finalUrls: [String]!, $headlines: [String]!, $path1: String!, $path2: String!, $trackingUrl: String!, $websiteId: String!) {
  createGadsResponsiveSearchAd(accountId: $accountId, adGroupId: $adGroupId, descriptions: $descriptions, finalUrls: $finalUrls, headlines: $headlines, path1: $path1, path2: $path2, trackingUrl: $trackingUrl, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const CreateKeywordDocument = gql`
    query createKeyword($accountId: String!, $adGroupId: String!, $keywordText: String!, $matchType: String!, $status: String, $websiteId: String!) {
  createKeyword(accountId: $accountId, adGroupId: $adGroupId, keywordText: $keywordText, matchType: $matchType, status: $status, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const DeleteKeywordDocument = gql`
    query deleteKeyword($accountId: String!, $adGroupId: String!, $criterionId: String!, $websiteId: String!) {
  deleteKeyword(accountId: $accountId, adGroupId: $adGroupId, criterionId: $criterionId, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const DeleteNegativeKeywordDocument = gql`
    query deleteNegativeKeyword($campaignId: String!, $criterionId: String!, $customerId: String!, $uniqueIdentifier: String!, $websiteId: String!) {
  deleteNegativeKeyword(campaignId: $campaignId, criterionId: $criterionId, customerId: $customerId, uniqueIdentifier: $uniqueIdentifier, websiteId: $websiteId) {
    success
    message
    data {
      success
      errors
      data
      message
    }
  }
}
    `;
export const EnableAdDocument = gql`
    query enableAd($accountId: String!, $adGroupId: String!, $adId: String!, $websiteId: String!) {
  enableAd(accountId: $accountId, adGroupId: $adGroupId, adId: $adId, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const EnableCampaignDocument = gql`
    query enableCampaign($accountId: String!, $campaignId: String!, $websiteId: String!) {
  enableCampaign(accountId: $accountId, campaignId: $campaignId, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const EnableGadsAdGroupDocument = gql`
    query enableGadsAdGroup($accountId: String!, $adGroupId: String!, $websiteId: String!) {
  enableGadsAdGroup(accountId: $accountId, adGroupId: $adGroupId, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const EnableKeywordDocument = gql`
    query enableKeyword($accountId: String!, $adGroupId: String!, $criterionId: String!, $websiteId: String!) {
  enableKeyword(accountId: $accountId, adGroupId: $adGroupId, criterionId: $criterionId, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
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
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    pk
    absoluteUrl
    question {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      question
      answer
      pk
      absoluteUrl
    }
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
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    pk
    absoluteUrl
    question {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      question
      answer
      pk
      absoluteUrl
    }
  }
}
    `;
export const GeminiKeywordSuggestionsDocument = gql`
    query geminiKeywordSuggestions($first: Int, $skip: Int, $websiteId: String, $prompt: String, $geminiApiKey: String, $adgroupId: String, $customerId: String) {
  geminiKeywordSuggestions(first: $first, skip: $skip, websiteId: $websiteId, prompt: $prompt, geminiApiKey: $geminiApiKey, adgroupId: $adgroupId, customerId: $customerId) {
    data
  }
}
    `;
export const GoogleAdsAccountsDocument = gql`
    query googleAdsAccounts($first: Int, $skip: Int, $websiteId: String) {
  googleAdsAccounts(first: $first, skip: $skip, websiteId: $websiteId) {
    data
  }
}
    `;
export const GoogleAdsAdGroupMetricsDocument = gql`
    query googleAdsAdGroupMetrics($first: Int, $skip: Int, $websiteId: String, $customerId: String, $adGroupId: String, $useLoginId: Boolean) {
  googleAdsAdGroupMetrics(first: $first, skip: $skip, websiteId: $websiteId, customerId: $customerId, adGroupId: $adGroupId, useLoginId: $useLoginId) {
    data
  }
}
    `;
export const GoogleAdsAdgroupsDocument = gql`
    query googleAdsAdgroups($first: Int, $skip: Int, $websiteId: String, $campaignId: String, $accountId: String) {
  googleAdsAdgroups(first: $first, skip: $skip, websiteId: $websiteId, campaignId: $campaignId, accountId: $accountId) {
    data
  }
}
    `;
export const GoogleAdsAdsDocument = gql`
    query googleAdsAds($first: Int, $skip: Int, $websiteId: String, $adgroupId: String, $accountId: String, $campaignId: String) {
  googleAdsAds(first: $first, skip: $skip, websiteId: $websiteId, adgroupId: $adgroupId, accountId: $accountId, campaignId: $campaignId) {
    data
  }
}
    `;
export const GoogleAdsCampaignsDocument = gql`
    query googleAdsCampaigns($first: Int, $skip: Int, $websiteId: String, $accountId: String) {
  googleAdsCampaigns(first: $first, skip: $skip, websiteId: $websiteId, accountId: $accountId) {
    data
  }
}
    `;
export const GoogleAdsCampaignsMetricsDocument = gql`
    query googleAdsCampaignsMetrics($first: Int, $skip: Int, $websiteId: String, $customerId: String, $useLoginId: Boolean) {
  googleAdsCampaignsMetrics(first: $first, skip: $skip, websiteId: $websiteId, customerId: $customerId, useLoginId: $useLoginId) {
    data
  }
}
    `;
export const GoogleAdsKeywordsDocument = gql`
    query googleAdsKeywords($first: Int, $skip: Int, $websiteId: String, $accountId: String, $adgroupId: String) {
  googleAdsKeywords(first: $first, skip: $skip, websiteId: $websiteId, accountId: $accountId, adgroupId: $adgroupId) {
    data
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
export const ListNegativeKeywordsForCampaignDocument = gql`
    query listNegativeKeywordsForCampaign($first: Int, $skip: Int, $websiteId: String, $campaignId: String, $customerId: String, $uniqueIdentifier: String) {
  listNegativeKeywordsForCampaign(first: $first, skip: $skip, websiteId: $websiteId, campaignId: $campaignId, customerId: $customerId, uniqueIdentifier: $uniqueIdentifier) {
    data
  }
}
    `;
export const ListReviewsDocument = gql`
    query listReviews($websiteId: String, $customerId: String) {
  listReviews(websiteId: $websiteId, customerId: $customerId) {
    data
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
    slug
    active
    name
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    body
    pk
    absoluteUrl
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
    slug
    active
    name
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    body
    pk
    absoluteUrl
  }
}
    `;
export const PauseAdDocument = gql`
    query pauseAd($accountId: String!, $adGroupId: String!, $adId: String!, $websiteId: String!) {
  pauseAd(accountId: $accountId, adGroupId: $adGroupId, adId: $adId, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const PauseCampaignDocument = gql`
    query pauseCampaign($accountId: String!, $campaignId: String!, $websiteId: String!) {
  pauseCampaign(accountId: $accountId, campaignId: $campaignId, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const PauseGadsAdGroupDocument = gql`
    query pauseGadsAdGroup($accountId: String!, $adGroupId: String!, $websiteId: String!) {
  pauseGadsAdGroup(accountId: $accountId, adGroupId: $adGroupId, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const PauseKeywordDocument = gql`
    query pauseKeyword($accountId: String!, $adGroupId: String!, $criterionId: String!, $websiteId: String!) {
  pauseKeyword(accountId: $accountId, adGroupId: $adGroupId, criterionId: $criterionId, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
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
    slug
    active
    name
    description
    video
    image
    images
    displayOrder
    data
    ipAddress
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
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
    slug
    active
    name
    description
    video
    image
    images
    displayOrder
    data
    ipAddress
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    pk
  }
}
    `;
export const ProfileDocument = gql`
    query profile {
  profile {
    id
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
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
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
    slug
    active
    name
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    question
    answer
    faq {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      pk
      absoluteUrl
    }
    pk
    absoluteUrl
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
    slug
    active
    name
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    question
    answer
    faq {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      pk
      absoluteUrl
    }
    pk
    absoluteUrl
  }
}
    `;
export const RemoveAdDocument = gql`
    query removeAd($accountId: String!, $adGroupId: String!, $adId: String!, $websiteId: String!) {
  removeAd(accountId: $accountId, adGroupId: $adGroupId, adId: $adId, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
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
    name
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    personName
    zipCode
    rating
    pk
    absoluteUrl
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
    name
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    personName
    zipCode
    rating
    pk
    absoluteUrl
  }
}
    `;
export const SearchTermsReportDocument = gql`
    query searchTermsReport($first: Int, $skip: Int, $websiteId: String, $customerId: String, $campaignId: String, $adGroupId: String, $dateRange: String, $keywords: [String]) {
  searchTermsReport(first: $first, skip: $skip, websiteId: $websiteId, customerId: $customerId, campaignId: $campaignId, adGroupId: $adGroupId, dateRange: $dateRange, keywords: $keywords) {
    data
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
    slug
    active
    name
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    gadsAdGroupId
    pk
    absoluteUrl
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
    slug
    active
    name
    description
    video
    image
    images
    displayOrder
    website {
      id
      created
      updated
      metadata
      slug
      active
      video
      image
      displayOrder
      address1
      address2
      city
      state
      zipCode
      phoneNumber
      emailAddress
      name
      description
      logo
      businessManager
      images
      licenseNumber
      insuranceNumber
      businessEinNumber
      googleAnalytics
      googleTagManager
      motd
      primaryColor
      secondaryColor
      domains
      theme
      gadsAccountId
      gadsCampaignId
      pk
      hashId
      defaultSubdomainName
      primaryColorContrast
      secondaryColorContrast
    }
    customHtmlBlock
    customHeaderCode
    customFooterJs
    gadsAdGroupId
    pk
    absoluteUrl
  }
}
    `;
export const SuggestedServicesDocument = gql`
    query suggestedServices($companyDescription: String) {
  suggestedServices(companyDescription: $companyDescription) {
    data
  }
}
    `;
export const UpdateCallAdDocument = gql`
    query updateCallAd($accountId: String!, $adGroupId: String!, $adId: String!, $description1: String!, $description2: String!, $headline1: String!, $headline2: String!, $phoneNumber: String!, $websiteId: String!) {
  updateCallAd(accountId: $accountId, adGroupId: $adGroupId, adId: $adId, description1: $description1, description2: $description2, headline1: $headline1, headline2: $headline2, phoneNumber: $phoneNumber, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
  }
}
    `;
export const UpdateResponseSearchAdDocument = gql`
    query updateResponseSearchAd($accountId: String!, $adGroupId: String!, $adId: String!, $descriptions: [String]!, $headlines: [String]!, $websiteId: String!) {
  updateResponseSearchAd(accountId: $accountId, adGroupId: $adGroupId, adId: $adId, descriptions: $descriptions, headlines: $headlines, websiteId: $websiteId) {
    success
    message
    data {
      data
    }
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
    slug
    active
    video
    image
    displayOrder
    address1
    address2
    city
    state
    zipCode
    phoneNumber
    emailAddress
    name
    description
    logo
    businessManager
    images
    licenseNumber
    insuranceNumber
    businessEinNumber
    googleAnalytics
    googleTagManager
    motd
    primaryColor
    secondaryColor
    domains
    theme
    gadsAccountId
    gadsCampaignId
    pk
    hashId
    defaultSubdomainName
    primaryColorContrast
    secondaryColorContrast
    services {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      gadsAdGroupId
      pk
      absoluteUrl
    }
    reviews {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      personName
      zipCode
      rating
      pk
      absoluteUrl
    }
    faqs {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      pk
      absoluteUrl
    }
    pages {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      body
      pk
      absoluteUrl
    }
    areas {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      includeInGads
      city
      state
      zipCode
      longitude
      latitude
      pk
      absoluteUrl
    }
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
    slug
    active
    video
    image
    displayOrder
    address1
    address2
    city
    state
    zipCode
    phoneNumber
    emailAddress
    name
    description
    logo
    businessManager
    images
    licenseNumber
    insuranceNumber
    businessEinNumber
    googleAnalytics
    googleTagManager
    motd
    primaryColor
    secondaryColor
    domains
    theme
    gadsAccountId
    gadsCampaignId
    pk
    hashId
    defaultSubdomainName
    primaryColorContrast
    secondaryColorContrast
    services {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      gadsAdGroupId
      pk
      absoluteUrl
    }
    reviews {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      personName
      zipCode
      rating
      pk
      absoluteUrl
    }
    faqs {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      pk
      absoluteUrl
    }
    pages {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      body
      pk
      absoluteUrl
    }
    areas {
      id
      created
      updated
      metadata
      slug
      active
      name
      description
      video
      image
      images
      displayOrder
      customHtmlBlock
      customHeaderCode
      customFooterJs
      includeInGads
      city
      state
      zipCode
      longitude
      latitude
      pk
      absoluteUrl
    }
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
export const ZipCodesByRadiusDocument = gql`
    query zipCodesByRadius($zipCode: String, $radius: Decimal) {
  zipCodesByRadius(zipCode: $zipCode, radius: $radius) {
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
    addTokenToWebsite(variables: AddTokenToWebsiteMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddTokenToWebsiteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddTokenToWebsiteMutation>(AddTokenToWebsiteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addTokenToWebsite', 'mutation');
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
    createWebsiteWizard(variables: CreateWebsiteWizardMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateWebsiteWizardMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateWebsiteWizardMutation>(CreateWebsiteWizardDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createWebsiteWizard', 'mutation');
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
    tokenOauthGoogleAds(variables: TokenOauthGoogleAdsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenOauthGoogleAdsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenOauthGoogleAdsMutation>(TokenOauthGoogleAdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenOauthGoogleAds', 'mutation');
    },
    tokenOauthGoogleMobileClientLogin(variables?: TokenOauthGoogleMobileClientLoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenOauthGoogleMobileClientLoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenOauthGoogleMobileClientLoginMutation>(TokenOauthGoogleMobileClientLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenOauthGoogleMobileClientLogin', 'mutation');
    },
    tokenOauthGoogleMobileClientSignup(variables?: TokenOauthGoogleMobileClientSignupMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenOauthGoogleMobileClientSignupMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenOauthGoogleMobileClientSignupMutation>(TokenOauthGoogleMobileClientSignupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenOauthGoogleMobileClientSignup', 'mutation');
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
    updateOrCreateBaseFaq(variables: UpdateOrCreateBaseFaqMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateOrCreateBaseFaqMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOrCreateBaseFaqMutation>(UpdateOrCreateBaseFaqDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOrCreateBaseFaq', 'mutation');
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
    addKeywordsToAdGroup(variables: AddKeywordsToAdGroupQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddKeywordsToAdGroupQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddKeywordsToAdGroupQuery>(AddKeywordsToAdGroupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addKeywordsToAdGroup', 'query');
    },
    addNegativeKeywordsSetToCampaign(variables: AddNegativeKeywordsSetToCampaignQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddNegativeKeywordsSetToCampaignQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddNegativeKeywordsSetToCampaignQuery>(AddNegativeKeywordsSetToCampaignDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addNegativeKeywordsSetToCampaign', 'query');
    },
    addNegativeKeywordsToCampaign(variables: AddNegativeKeywordsToCampaignQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddNegativeKeywordsToCampaignQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddNegativeKeywordsToCampaignQuery>(AddNegativeKeywordsToCampaignDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addNegativeKeywordsToCampaign', 'query');
    },
    appVersion(variables?: AppVersionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AppVersionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AppVersionQuery>(AppVersionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'appVersion', 'query');
    },
    area(variables?: AreaQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AreaQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AreaQuery>(AreaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'area', 'query');
    },
    areas(variables?: AreasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AreasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AreasQuery>(AreasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'areas', 'query');
    },
    createGadsAdGroup(variables: CreateGadsAdGroupQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateGadsAdGroupQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateGadsAdGroupQuery>(CreateGadsAdGroupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createGadsAdGroup', 'query');
    },
    createGadsCallAd(variables: CreateGadsCallAdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateGadsCallAdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateGadsCallAdQuery>(CreateGadsCallAdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createGadsCallAd', 'query');
    },
    createGadsCampaign(variables: CreateGadsCampaignQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateGadsCampaignQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateGadsCampaignQuery>(CreateGadsCampaignDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createGadsCampaign', 'query');
    },
    createGadsCustomer(variables: CreateGadsCustomerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateGadsCustomerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateGadsCustomerQuery>(CreateGadsCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createGadsCustomer', 'query');
    },
    createGadsResponsiveSearchAd(variables: CreateGadsResponsiveSearchAdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateGadsResponsiveSearchAdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateGadsResponsiveSearchAdQuery>(CreateGadsResponsiveSearchAdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createGadsResponsiveSearchAd', 'query');
    },
    createKeyword(variables: CreateKeywordQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateKeywordQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateKeywordQuery>(CreateKeywordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createKeyword', 'query');
    },
    deleteKeyword(variables: DeleteKeywordQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteKeywordQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteKeywordQuery>(DeleteKeywordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteKeyword', 'query');
    },
    deleteNegativeKeyword(variables: DeleteNegativeKeywordQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteNegativeKeywordQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteNegativeKeywordQuery>(DeleteNegativeKeywordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteNegativeKeyword', 'query');
    },
    enableAd(variables: EnableAdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EnableAdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EnableAdQuery>(EnableAdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'enableAd', 'query');
    },
    enableCampaign(variables: EnableCampaignQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EnableCampaignQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EnableCampaignQuery>(EnableCampaignDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'enableCampaign', 'query');
    },
    enableGadsAdGroup(variables: EnableGadsAdGroupQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EnableGadsAdGroupQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EnableGadsAdGroupQuery>(EnableGadsAdGroupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'enableGadsAdGroup', 'query');
    },
    enableKeyword(variables: EnableKeywordQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EnableKeywordQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EnableKeywordQuery>(EnableKeywordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'enableKeyword', 'query');
    },
    faq(variables?: FaqQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FaqQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FaqQuery>(FaqDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'faq', 'query');
    },
    faqs(variables?: FaqsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FaqsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FaqsQuery>(FaqsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'faqs', 'query');
    },
    geminiKeywordSuggestions(variables?: GeminiKeywordSuggestionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GeminiKeywordSuggestionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GeminiKeywordSuggestionsQuery>(GeminiKeywordSuggestionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'geminiKeywordSuggestions', 'query');
    },
    googleAdsAccounts(variables?: GoogleAdsAccountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GoogleAdsAccountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GoogleAdsAccountsQuery>(GoogleAdsAccountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'googleAdsAccounts', 'query');
    },
    googleAdsAdGroupMetrics(variables?: GoogleAdsAdGroupMetricsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GoogleAdsAdGroupMetricsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GoogleAdsAdGroupMetricsQuery>(GoogleAdsAdGroupMetricsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'googleAdsAdGroupMetrics', 'query');
    },
    googleAdsAdgroups(variables?: GoogleAdsAdgroupsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GoogleAdsAdgroupsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GoogleAdsAdgroupsQuery>(GoogleAdsAdgroupsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'googleAdsAdgroups', 'query');
    },
    googleAdsAds(variables?: GoogleAdsAdsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GoogleAdsAdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GoogleAdsAdsQuery>(GoogleAdsAdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'googleAdsAds', 'query');
    },
    googleAdsCampaigns(variables?: GoogleAdsCampaignsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GoogleAdsCampaignsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GoogleAdsCampaignsQuery>(GoogleAdsCampaignsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'googleAdsCampaigns', 'query');
    },
    googleAdsCampaignsMetrics(variables?: GoogleAdsCampaignsMetricsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GoogleAdsCampaignsMetricsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GoogleAdsCampaignsMetricsQuery>(GoogleAdsCampaignsMetricsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'googleAdsCampaignsMetrics', 'query');
    },
    googleAdsKeywords(variables?: GoogleAdsKeywordsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GoogleAdsKeywordsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GoogleAdsKeywordsQuery>(GoogleAdsKeywordsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'googleAdsKeywords', 'query');
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
    listNegativeKeywordsForCampaign(variables?: ListNegativeKeywordsForCampaignQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListNegativeKeywordsForCampaignQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListNegativeKeywordsForCampaignQuery>(ListNegativeKeywordsForCampaignDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listNegativeKeywordsForCampaign', 'query');
    },
    listReviews(variables?: ListReviewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListReviewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListReviewsQuery>(ListReviewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listReviews', 'query');
    },
    page(variables?: PageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageQuery>(PageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'page', 'query');
    },
    pages(variables?: PagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PagesQuery>(PagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pages', 'query');
    },
    pauseAd(variables: PauseAdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PauseAdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PauseAdQuery>(PauseAdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pauseAd', 'query');
    },
    pauseCampaign(variables: PauseCampaignQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PauseCampaignQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PauseCampaignQuery>(PauseCampaignDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pauseCampaign', 'query');
    },
    pauseGadsAdGroup(variables: PauseGadsAdGroupQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PauseGadsAdGroupQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PauseGadsAdGroupQuery>(PauseGadsAdGroupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pauseGadsAdGroup', 'query');
    },
    pauseKeyword(variables: PauseKeywordQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PauseKeywordQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PauseKeywordQuery>(PauseKeywordDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pauseKeyword', 'query');
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
    removeAd(variables: RemoveAdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveAdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveAdQuery>(RemoveAdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeAd', 'query');
    },
    review(variables?: ReviewQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ReviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ReviewQuery>(ReviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'review', 'query');
    },
    reviews(variables?: ReviewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ReviewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ReviewsQuery>(ReviewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'reviews', 'query');
    },
    searchTermsReport(variables?: SearchTermsReportQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SearchTermsReportQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchTermsReportQuery>(SearchTermsReportDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchTermsReport', 'query');
    },
    service(variables?: ServiceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ServiceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ServiceQuery>(ServiceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'service', 'query');
    },
    services(variables?: ServicesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ServicesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ServicesQuery>(ServicesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'services', 'query');
    },
    suggestedServices(variables?: SuggestedServicesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SuggestedServicesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SuggestedServicesQuery>(SuggestedServicesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'suggestedServices', 'query');
    },
    updateCallAd(variables: UpdateCallAdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateCallAdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCallAdQuery>(UpdateCallAdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateCallAd', 'query');
    },
    updateResponseSearchAd(variables: UpdateResponseSearchAdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateResponseSearchAdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateResponseSearchAdQuery>(UpdateResponseSearchAdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateResponseSearchAd', 'query');
    },
    website(variables?: WebsiteQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<WebsiteQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WebsiteQuery>(WebsiteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'website', 'query');
    },
    websites(variables?: WebsitesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<WebsitesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WebsitesQuery>(WebsitesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'websites', 'query');
    },
    zipCode(variables?: ZipCodeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ZipCodeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZipCodeQuery>(ZipCodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'zipCode', 'query');
    },
    zipCodesByRadius(variables?: ZipCodesByRadiusQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ZipCodesByRadiusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZipCodesByRadiusQuery>(ZipCodesByRadiusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'zipCodesByRadius', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;