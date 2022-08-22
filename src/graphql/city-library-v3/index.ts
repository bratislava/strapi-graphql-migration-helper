import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BasicDocumentMetadataDynamicZoneInput: any;
  BlogPostSectionsDynamicZoneInput: any;
  Date: any;
  DateTime: any;
  JSON: any;
  Long: any;
  PageSectionsDynamicZoneInput: any;
  Time: any;
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type BasicDocument = {
  __typename?: 'BasicDocument';
  attachment?: Maybe<UploadFile>;
  author?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  date_added?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  file_category?: Maybe<FileCategory>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<Maybe<BasicDocumentMetadataDynamicZone>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type BasicDocumentAggregator = {
  __typename?: 'BasicDocumentAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BasicDocumentConnection = {
  __typename?: 'BasicDocumentConnection';
  aggregate?: Maybe<BasicDocumentAggregator>;
  groupBy?: Maybe<BasicDocumentGroupBy>;
  values?: Maybe<Array<Maybe<BasicDocument>>>;
};

export type BasicDocumentConnectionAttachment = {
  __typename?: 'BasicDocumentConnectionAttachment';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BasicDocumentConnectionAuthor = {
  __typename?: 'BasicDocumentConnectionAuthor';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BasicDocumentConnectionCreated_At = {
  __typename?: 'BasicDocumentConnectionCreated_at';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BasicDocumentConnectionDate_Added = {
  __typename?: 'BasicDocumentConnectionDate_added';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BasicDocumentConnectionDescription = {
  __typename?: 'BasicDocumentConnectionDescription';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BasicDocumentConnectionFile_Category = {
  __typename?: 'BasicDocumentConnectionFile_category';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BasicDocumentConnectionId = {
  __typename?: 'BasicDocumentConnectionId';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BasicDocumentConnectionLink = {
  __typename?: 'BasicDocumentConnectionLink';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BasicDocumentConnectionPublished_At = {
  __typename?: 'BasicDocumentConnectionPublished_at';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BasicDocumentConnectionSlug = {
  __typename?: 'BasicDocumentConnectionSlug';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BasicDocumentConnectionTitle = {
  __typename?: 'BasicDocumentConnectionTitle';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BasicDocumentConnectionUpdated_At = {
  __typename?: 'BasicDocumentConnectionUpdated_at';
  connection?: Maybe<BasicDocumentConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BasicDocumentGroupBy = {
  __typename?: 'BasicDocumentGroupBy';
  attachment?: Maybe<Array<Maybe<BasicDocumentConnectionAttachment>>>;
  author?: Maybe<Array<Maybe<BasicDocumentConnectionAuthor>>>;
  created_at?: Maybe<Array<Maybe<BasicDocumentConnectionCreated_At>>>;
  date_added?: Maybe<Array<Maybe<BasicDocumentConnectionDate_Added>>>;
  description?: Maybe<Array<Maybe<BasicDocumentConnectionDescription>>>;
  file_category?: Maybe<Array<Maybe<BasicDocumentConnectionFile_Category>>>;
  id?: Maybe<Array<Maybe<BasicDocumentConnectionId>>>;
  link?: Maybe<Array<Maybe<BasicDocumentConnectionLink>>>;
  published_at?: Maybe<Array<Maybe<BasicDocumentConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<BasicDocumentConnectionSlug>>>;
  title?: Maybe<Array<Maybe<BasicDocumentConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<BasicDocumentConnectionUpdated_At>>>;
};

export type BasicDocumentInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  author?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  file_category?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<Scalars['BasicDocumentMetadataDynamicZoneInput']>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type BasicDocumentMetadataDynamicZone = ComponentMetadataFaktury | ComponentMetadataMetadata | ComponentMetadataObchodnaVerejnaSutaz | ComponentMetadataObjednavky | ComponentMetadataVerejneObstaravanie | ComponentMetadataZmluvy;

export type BlogPost = {
  __typename?: 'BlogPost';
  Seo?: Maybe<ComponentSeoSeo>;
  coverMedia?: Maybe<UploadFile>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  parentPage?: Maybe<Page>;
  published_at?: Maybe<Scalars['DateTime']>;
  sections?: Maybe<Array<Maybe<BlogPostSectionsDynamicZone>>>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type BlogPostAggregator = {
  __typename?: 'BlogPostAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BlogPostConnection = {
  __typename?: 'BlogPostConnection';
  aggregate?: Maybe<BlogPostAggregator>;
  groupBy?: Maybe<BlogPostGroupBy>;
  values?: Maybe<Array<Maybe<BlogPost>>>;
};

export type BlogPostConnectionCoverMedia = {
  __typename?: 'BlogPostConnectionCoverMedia';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BlogPostConnectionCreated_At = {
  __typename?: 'BlogPostConnectionCreated_at';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BlogPostConnectionId = {
  __typename?: 'BlogPostConnectionId';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BlogPostConnectionParentPage = {
  __typename?: 'BlogPostConnectionParentPage';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BlogPostConnectionPublished_At = {
  __typename?: 'BlogPostConnectionPublished_at';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BlogPostConnectionSeo = {
  __typename?: 'BlogPostConnectionSeo';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BlogPostConnectionSlug = {
  __typename?: 'BlogPostConnectionSlug';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BlogPostConnectionTitle = {
  __typename?: 'BlogPostConnectionTitle';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BlogPostConnectionUpdated_At = {
  __typename?: 'BlogPostConnectionUpdated_at';
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BlogPostGroupBy = {
  __typename?: 'BlogPostGroupBy';
  Seo?: Maybe<Array<Maybe<BlogPostConnectionSeo>>>;
  coverMedia?: Maybe<Array<Maybe<BlogPostConnectionCoverMedia>>>;
  created_at?: Maybe<Array<Maybe<BlogPostConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<BlogPostConnectionId>>>;
  parentPage?: Maybe<Array<Maybe<BlogPostConnectionParentPage>>>;
  published_at?: Maybe<Array<Maybe<BlogPostConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<BlogPostConnectionSlug>>>;
  title?: Maybe<Array<Maybe<BlogPostConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<BlogPostConnectionUpdated_At>>>;
};

export type BlogPostInput = {
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  coverMedia?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  parentPage?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  sections?: InputMaybe<Array<Scalars['BlogPostSectionsDynamicZoneInput']>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type BlogPostSectionsDynamicZone = ComponentSectionsAccordion | ComponentSectionsColumnedText | ComponentSectionsCta | ComponentSectionsDivider | ComponentSectionsDocuments | ComponentSectionsEventDetails | ComponentSectionsExternalLinks | ComponentSectionsFaq | ComponentSectionsFlatText | ComponentSectionsFlatTextCenter | ComponentSectionsForm | ComponentSectionsLocalityDetails | ComponentSectionsSiteUsefullness | ComponentSectionsSubListing | ComponentSectionsSubpages | ComponentSectionsTable | ComponentSectionsVideo;

export type BookTagInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  displayName: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type BookTags = {
  __typename?: 'BookTags';
  created_at: Scalars['DateTime'];
  displayName: Scalars['String'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type BookTagsAggregator = {
  __typename?: 'BookTagsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BookTagsConnection = {
  __typename?: 'BookTagsConnection';
  aggregate?: Maybe<BookTagsAggregator>;
  groupBy?: Maybe<BookTagsGroupBy>;
  values?: Maybe<Array<Maybe<BookTags>>>;
};

export type BookTagsConnectionCreated_At = {
  __typename?: 'BookTagsConnectionCreated_at';
  connection?: Maybe<BookTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BookTagsConnectionDisplayName = {
  __typename?: 'BookTagsConnectionDisplayName';
  connection?: Maybe<BookTagsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BookTagsConnectionId = {
  __typename?: 'BookTagsConnectionId';
  connection?: Maybe<BookTagsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type BookTagsConnectionPublished_At = {
  __typename?: 'BookTagsConnectionPublished_at';
  connection?: Maybe<BookTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BookTagsConnectionSlug = {
  __typename?: 'BookTagsConnectionSlug';
  connection?: Maybe<BookTagsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type BookTagsConnectionUpdated_At = {
  __typename?: 'BookTagsConnectionUpdated_at';
  connection?: Maybe<BookTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type BookTagsGroupBy = {
  __typename?: 'BookTagsGroupBy';
  created_at?: Maybe<Array<Maybe<BookTagsConnectionCreated_At>>>;
  displayName?: Maybe<Array<Maybe<BookTagsConnectionDisplayName>>>;
  id?: Maybe<Array<Maybe<BookTagsConnectionId>>>;
  published_at?: Maybe<Array<Maybe<BookTagsConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<BookTagsConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<BookTagsConnectionUpdated_At>>>;
};

export type Category = {
  __typename?: 'Category';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Category>>>;
  pageLink?: Maybe<ComponentBlocksPageLink>;
  pages?: Maybe<Array<Maybe<ComponentBlocksPageLink>>>;
  parentCategory?: Maybe<Category>;
  priority?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  subCategories?: Maybe<Array<Maybe<Category>>>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};


export type CategoryLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type CategorySubCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator';
  avg?: Maybe<CategoryAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CategoryAggregatorMax>;
  min?: Maybe<CategoryAggregatorMin>;
  sum?: Maybe<CategoryAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryAggregatorAvg = {
  __typename?: 'CategoryAggregatorAvg';
  priority?: Maybe<Scalars['Float']>;
};

export type CategoryAggregatorMax = {
  __typename?: 'CategoryAggregatorMax';
  priority?: Maybe<Scalars['Float']>;
};

export type CategoryAggregatorMin = {
  __typename?: 'CategoryAggregatorMin';
  priority?: Maybe<Scalars['Float']>;
};

export type CategoryAggregatorSum = {
  __typename?: 'CategoryAggregatorSum';
  priority?: Maybe<Scalars['Float']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  aggregate?: Maybe<CategoryAggregator>;
  groupBy?: Maybe<CategoryGroupBy>;
  values?: Maybe<Array<Maybe<Category>>>;
};

export type CategoryConnectionCreated_At = {
  __typename?: 'CategoryConnectionCreated_at';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CategoryConnectionLocale = {
  __typename?: 'CategoryConnectionLocale';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionPageLink = {
  __typename?: 'CategoryConnectionPageLink';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CategoryConnectionParentCategory = {
  __typename?: 'CategoryConnectionParentCategory';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CategoryConnectionPriority = {
  __typename?: 'CategoryConnectionPriority';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type CategoryConnectionPublished_At = {
  __typename?: 'CategoryConnectionPublished_at';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CategoryConnectionTitle = {
  __typename?: 'CategoryConnectionTitle';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionUpdated_At = {
  __typename?: 'CategoryConnectionUpdated_at';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  locale?: Maybe<Array<Maybe<CategoryConnectionLocale>>>;
  pageLink?: Maybe<Array<Maybe<CategoryConnectionPageLink>>>;
  parentCategory?: Maybe<Array<Maybe<CategoryConnectionParentCategory>>>;
  priority?: Maybe<Array<Maybe<CategoryConnectionPriority>>>;
  published_at?: Maybe<Array<Maybe<CategoryConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<CategoryConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
};

export type CategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  pageLink?: InputMaybe<ComponentBlocksPageLinkInput>;
  pages?: InputMaybe<Array<InputMaybe<ComponentBlocksPageLinkInput>>>;
  parentCategory?: InputMaybe<Scalars['ID']>;
  priority?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  subCategories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ComponentAccordionItemsFlatText = {
  __typename?: 'ComponentAccordionItemsFlatText';
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentAccordionItemsFlatTextInput = {
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
};

export type ComponentAccordionItemsForm = {
  __typename?: 'ComponentAccordionItemsForm';
  category?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  type?: Maybe<Enum_Componentaccordionitemsform_Type>;
};

export type ComponentAccordionItemsFormInput = {
  category?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Componentaccordionitemsform_Type>;
};

export type ComponentAccordionItemsTableRow = {
  __typename?: 'ComponentAccordionItemsTableRow';
  accordionCategory?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  tableCategory?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  valueAlign?: Maybe<Enum_Componentaccordionitemstablerow_Valuealign>;
};

export type ComponentAccordionItemsTableRowInput = {
  accordionCategory?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  tableCategory?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  valueAlign?: InputMaybe<Enum_Componentaccordionitemstablerow_Valuealign>;
};

export type ComponentAddressAddress = {
  __typename?: 'ComponentAddressAddress';
  id: Scalars['ID'];
  navigateTo: Scalars['String'];
  title: Scalars['String'];
};

export type ComponentAddressAddressInput = {
  navigateTo: Scalars['String'];
  title: Scalars['String'];
};

export type ComponentBlocksAccordionItem = {
  __typename?: 'ComponentBlocksAccordionItem';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};

export type ComponentBlocksAccordionItemInput = {
  content?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksExternalLink = {
  __typename?: 'ComponentBlocksExternalLink';
  category?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksExternalLinkInput = {
  category?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksPageLink = {
  __typename?: 'ComponentBlocksPageLink';
  id: Scalars['ID'];
  page?: Maybe<Page>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksPageLinkInput = {
  page?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksSubpage = {
  __typename?: 'ComponentBlocksSubpage';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  page?: Maybe<Page>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksSubpageInput = {
  description?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksTableRow = {
  __typename?: 'ComponentBlocksTableRow';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  valueAlign?: Maybe<Enum_Componentblockstablerow_Valuealign>;
};

export type ComponentBlocksTableRowInput = {
  label?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  valueAlign?: InputMaybe<Enum_Componentblockstablerow_Valuealign>;
};

export type ComponentFooterFooterColumn = {
  __typename?: 'ComponentFooterFooterColumn';
  footerLink?: Maybe<Array<Maybe<ComponentFooterFooterLink>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentFooterFooterColumnInput = {
  footerLink?: InputMaybe<Array<InputMaybe<ComponentFooterFooterLinkInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentFooterFooterLink = {
  __typename?: 'ComponentFooterFooterLink';
  id: Scalars['ID'];
  otherSite?: Maybe<Scalars['String']>;
  redirectTo?: Maybe<Page>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentFooterFooterLinkInput = {
  otherSite?: InputMaybe<Scalars['String']>;
  redirectTo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentGuestsGuest = {
  __typename?: 'ComponentGuestsGuest';
  avatar?: Maybe<UploadFile>;
  id: Scalars['ID'];
  name: Scalars['String'];
  surname: Scalars['String'];
};

export type ComponentGuestsGuestInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  surname: Scalars['String'];
};

export type ComponentHomepageBenefitInput = {
  benefit?: InputMaybe<Scalars['String']>;
};

export type ComponentHomepageBenefits = {
  __typename?: 'ComponentHomepageBenefits';
  benefit?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentHomepageCta = {
  __typename?: 'ComponentHomepageCta';
  ctaRedirectTo?: Maybe<Page>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentHomepageCtaInput = {
  ctaRedirectTo?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type ComponentHomepageFaqInput = {
  answer?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
};

export type ComponentHomepageFaqSection = {
  __typename?: 'ComponentHomepageFaqSection';
  ctas?: Maybe<Array<Maybe<ComponentHomepageCta>>>;
  faqSectionRedirectTo?: Maybe<Page>;
  faqs?: Maybe<Array<Maybe<ComponentHomepageFaqs>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentHomepageFaqSectionInput = {
  ctas?: InputMaybe<Array<ComponentHomepageCtaInput>>;
  faqSectionRedirectTo?: InputMaybe<Scalars['ID']>;
  faqs?: InputMaybe<Array<InputMaybe<ComponentHomepageFaqInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomepageFaqs = {
  __typename?: 'ComponentHomepageFaqs';
  answer?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  question?: Maybe<Scalars['String']>;
};

export type ComponentHomepageNewsSection = {
  __typename?: 'ComponentHomepageNewsSection';
  id: Scalars['ID'];
  newsSectionRedirectTo?: Maybe<Page>;
  title: Scalars['String'];
};

export type ComponentHomepageNewsSectionInput = {
  newsSectionRedirectTo?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type ComponentHomepageRegistrationInfo = {
  __typename?: 'ComponentHomepageRegistrationInfo';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  registrationBenefits?: Maybe<Array<Maybe<ComponentHomepageBenefits>>>;
  registrationInfoSectionRedirectTo?: Maybe<Page>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentHomepageRegistrationInfoInput = {
  description?: InputMaybe<Scalars['String']>;
  registrationBenefits?: InputMaybe<Array<InputMaybe<ComponentHomepageBenefitInput>>>;
  registrationInfoSectionRedirectTo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentLocalityPartsGalleryPartInput = {
  Description?: InputMaybe<Scalars['String']>;
  Photo?: InputMaybe<Scalars['ID']>;
};

export type ComponentLocalityPartsGalleryParts = {
  __typename?: 'ComponentLocalityPartsGalleryParts';
  Description?: Maybe<Scalars['String']>;
  Photo?: Maybe<UploadFile>;
  id: Scalars['ID'];
};

export type ComponentLocalityPartsLocalityOpeningHourInput = {
  isMainSection?: InputMaybe<Scalars['Boolean']>;
  localitySectionDescription?: InputMaybe<Scalars['String']>;
  localitySectionEmail?: InputMaybe<Scalars['String']>;
  localitySectionPhone?: InputMaybe<Scalars['String']>;
  localitySectionTitle?: InputMaybe<Scalars['String']>;
  openingHoursFridayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursFridayTo?: InputMaybe<Scalars['Time']>;
  openingHoursMondayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursMondayTo?: InputMaybe<Scalars['Time']>;
  openingHoursSaturdayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursSaturdayTo?: InputMaybe<Scalars['Time']>;
  openingHoursSundayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursSundayTo?: InputMaybe<Scalars['Time']>;
  openingHoursThursdayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursThursdayTo?: InputMaybe<Scalars['Time']>;
  openingHoursTuesdayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursTuesdayTo?: InputMaybe<Scalars['Time']>;
  openingHoursWednesdayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursWednesdayTo?: InputMaybe<Scalars['Time']>;
};

export type ComponentLocalityPartsLocalityOpeningHours = {
  __typename?: 'ComponentLocalityPartsLocalityOpeningHours';
  id: Scalars['ID'];
  isMainSection?: Maybe<Scalars['Boolean']>;
  localitySectionDescription?: Maybe<Scalars['String']>;
  localitySectionEmail?: Maybe<Scalars['String']>;
  localitySectionPhone?: Maybe<Scalars['String']>;
  localitySectionTitle?: Maybe<Scalars['String']>;
  openingHoursFridayFrom?: Maybe<Scalars['Time']>;
  openingHoursFridayTo?: Maybe<Scalars['Time']>;
  openingHoursMondayFrom?: Maybe<Scalars['Time']>;
  openingHoursMondayTo?: Maybe<Scalars['Time']>;
  openingHoursSaturdayFrom?: Maybe<Scalars['Time']>;
  openingHoursSaturdayTo?: Maybe<Scalars['Time']>;
  openingHoursSundayFrom?: Maybe<Scalars['Time']>;
  openingHoursSundayTo?: Maybe<Scalars['Time']>;
  openingHoursThursdayFrom?: Maybe<Scalars['Time']>;
  openingHoursThursdayTo?: Maybe<Scalars['Time']>;
  openingHoursTuesdayFrom?: Maybe<Scalars['Time']>;
  openingHoursTuesdayTo?: Maybe<Scalars['Time']>;
  openingHoursWednesdayFrom?: Maybe<Scalars['Time']>;
  openingHoursWednesdayTo?: Maybe<Scalars['Time']>;
};

export type ComponentLocalityPartsLocalityServiceInput = {
  localityServicesPage?: InputMaybe<Scalars['ID']>;
};

export type ComponentLocalityPartsLocalityServices = {
  __typename?: 'ComponentLocalityPartsLocalityServices';
  id: Scalars['ID'];
  localityServicesPage?: Maybe<Page>;
};

export type ComponentMenuSectionInput = {
  sectionColumnSpan?: InputMaybe<Scalars['Int']>;
  sectionLinks?: InputMaybe<Array<ComponentMenuSectionLinkInput>>;
  sectionPage?: InputMaybe<Scalars['ID']>;
  sectionTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentMenuSectionLinkInput = {
  sectionLinkPage?: InputMaybe<Scalars['ID']>;
  sectionLinkTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentMenuSectionLinks = {
  __typename?: 'ComponentMenuSectionLinks';
  id: Scalars['ID'];
  sectionLinkPage?: Maybe<Page>;
  sectionLinkTitle?: Maybe<Scalars['String']>;
};

export type ComponentMenuSections = {
  __typename?: 'ComponentMenuSections';
  id: Scalars['ID'];
  sectionColumnSpan?: Maybe<Scalars['Int']>;
  sectionLinks?: Maybe<Array<Maybe<ComponentMenuSectionLinks>>>;
  sectionPage?: Maybe<Page>;
  sectionTitle?: Maybe<Scalars['String']>;
};

export type ComponentMenuSubsection = {
  __typename?: 'ComponentMenuSubsection';
  columnSpan?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  subsectionLinks?: Maybe<Array<Maybe<ComponentMenuSubsectionLinks>>>;
  subsectionTitle?: Maybe<Scalars['String']>;
};

export type ComponentMenuSubsectionInput = {
  columnSpan?: InputMaybe<Scalars['Int']>;
  subsectionLinks?: InputMaybe<Array<InputMaybe<ComponentMenuSubsectionLinkInput>>>;
  subsectionTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentMenuSubsectionLinkInput = {
  page?: InputMaybe<Scalars['ID']>;
  subsectionLinkTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentMenuSubsectionLinks = {
  __typename?: 'ComponentMenuSubsectionLinks';
  id: Scalars['ID'];
  page?: Maybe<Page>;
  subsectionLinkTitle?: Maybe<Scalars['String']>;
};

export type ComponentMetadataFaktury = {
  __typename?: 'ComponentMetadataFaktury';
  attachment?: Maybe<UploadFile>;
  date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ComponentMetadataFakturyInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  date?: InputMaybe<Scalars['Date']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentMetadataMetadata = {
  __typename?: 'ComponentMetadataMetadata';
  amount?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  grant_name?: Maybe<Scalars['String']>;
  grant_number?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type ComponentMetadataMetadatumInput = {
  amount?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  grant_name?: InputMaybe<Scalars['String']>;
  grant_number?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type ComponentMetadataObchodnaVerejnaSutaz = {
  __typename?: 'ComponentMetadataObchodnaVerejnaSutaz';
  amount?: Maybe<Scalars['String']>;
  attachment?: Maybe<UploadFile>;
  date_added?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  number?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
};

export type ComponentMetadataObchodnaVerejnaSutazInput = {
  amount?: InputMaybe<Scalars['String']>;
  attachment?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type ComponentMetadataObjednavky = {
  __typename?: 'ComponentMetadataObjednavky';
  attachment?: Maybe<UploadFile>;
  date_added?: Maybe<Scalars['Date']>;
  date_period?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentMetadataObjednavkyInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['Date']>;
  date_period?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentMetadataVerejneObstaravanie = {
  __typename?: 'ComponentMetadataVerejneObstaravanie';
  amount?: Maybe<Scalars['String']>;
  attachment?: Maybe<UploadFile>;
  date_added?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  number?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
};

export type ComponentMetadataVerejneObstaravanieInput = {
  amount?: InputMaybe<Scalars['String']>;
  attachment?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type ComponentMetadataZmluvy = {
  __typename?: 'ComponentMetadataZmluvy';
  amount?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  number?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ComponentMetadataZmluvyInput = {
  amount?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  number?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  supplier?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsAccordion = {
  __typename?: 'ComponentSectionsAccordion';
  flatText?: Maybe<Array<Maybe<ComponentAccordionItemsFlatText>>>;
  forms?: Maybe<Array<Maybe<ComponentAccordionItemsForm>>>;
  id: Scalars['ID'];
  tableRows?: Maybe<Array<Maybe<ComponentAccordionItemsTableRow>>>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsAccordionInput = {
  flatText?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsFlatTextInput>>>;
  forms?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsFormInput>>>;
  tableRows?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsTableRowInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsColumnedText = {
  __typename?: 'ComponentSectionsColumnedText';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsColumnedTextInput = {
  content?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsCta = {
  __typename?: 'ComponentSectionsCta';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentSectionsCtaInput = {
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsDivider = {
  __typename?: 'ComponentSectionsDivider';
  id: Scalars['ID'];
  shown?: Maybe<Scalars['Boolean']>;
};

export type ComponentSectionsDividerInput = {
  shown?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentSectionsDocumentInput = {
  basicDocuments?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  moreLink?: InputMaybe<ComponentBlocksPageLinkInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsDocuments = {
  __typename?: 'ComponentSectionsDocuments';
  basicDocuments?: Maybe<Array<Maybe<BasicDocument>>>;
  id: Scalars['ID'];
  moreLink?: Maybe<ComponentBlocksPageLink>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsDocumentsBasicDocumentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentSectionsEventDetailInput = {
  dateFrom?: InputMaybe<Scalars['DateTime']>;
  dateTo?: InputMaybe<Scalars['DateTime']>;
  eventCategory?: InputMaybe<Scalars['ID']>;
  eventCoverImage?: InputMaybe<Scalars['ID']>;
  eventDescription: Scalars['String'];
  eventLocality?: InputMaybe<Scalars['ID']>;
  eventTags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  eventTitle: Scalars['String'];
  guests?: InputMaybe<Array<InputMaybe<ComponentGuestsGuestInput>>>;
  partners?: InputMaybe<Array<InputMaybe<ComponentSectionsParnterInput>>>;
  price: Scalars['Float'];
};

export type ComponentSectionsEventDetails = {
  __typename?: 'ComponentSectionsEventDetails';
  dateFrom?: Maybe<Scalars['DateTime']>;
  dateTo?: Maybe<Scalars['DateTime']>;
  eventCategory?: Maybe<EventCategories>;
  eventCoverImage?: Maybe<UploadFile>;
  eventDescription: Scalars['String'];
  eventLocality?: Maybe<EventLocalities>;
  eventTags?: Maybe<Array<Maybe<EventTags>>>;
  eventTitle: Scalars['String'];
  guests?: Maybe<Array<Maybe<ComponentGuestsGuest>>>;
  id: Scalars['ID'];
  partners?: Maybe<Array<Maybe<ComponentSectionsParnters>>>;
  price: Scalars['Float'];
};


export type ComponentSectionsEventDetailsEventTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentSectionsExternalLinkInput = {
  descriptions?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsFlatTextInput>>>;
  externalLinks?: InputMaybe<Array<InputMaybe<ComponentBlocksExternalLinkInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsExternalLinks = {
  __typename?: 'ComponentSectionsExternalLinks';
  descriptions?: Maybe<Array<Maybe<ComponentAccordionItemsFlatText>>>;
  externalLinks?: Maybe<Array<Maybe<ComponentBlocksExternalLink>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsFaq = {
  __typename?: 'ComponentSectionsFaq';
  id: Scalars['ID'];
  questions?: Maybe<Array<Maybe<ComponentBlocksAccordionItem>>>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsFaqInput = {
  questions?: InputMaybe<Array<InputMaybe<ComponentBlocksAccordionItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsFlatText = {
  __typename?: 'ComponentSectionsFlatText';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media?: Maybe<UploadFile>;
};

export type ComponentSectionsFlatTextCenter = {
  __typename?: 'ComponentSectionsFlatTextCenter';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
};

export type ComponentSectionsFlatTextCenterInput = {
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
};

export type ComponentSectionsFlatTextInput = {
  content?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['ID']>;
};

export type ComponentSectionsForm = {
  __typename?: 'ComponentSectionsForm';
  id: Scalars['ID'];
  type?: Maybe<Enum_Componentsectionsform_Type>;
};

export type ComponentSectionsFormInput = {
  type?: InputMaybe<Enum_Componentsectionsform_Type>;
};

export type ComponentSectionsGallery = {
  __typename?: 'ComponentSectionsGallery';
  Gallery?: Maybe<Array<Maybe<ComponentLocalityPartsGalleryParts>>>;
  id: Scalars['ID'];
};

export type ComponentSectionsGalleryInput = {
  Gallery?: InputMaybe<Array<InputMaybe<ComponentLocalityPartsGalleryPartInput>>>;
};

export type ComponentSectionsLocalityDetailInput = {
  displayOnHomePage?: InputMaybe<Scalars['Boolean']>;
  isMainLocality?: InputMaybe<Scalars['Boolean']>;
  localityAddress?: InputMaybe<ComponentAddressAddressInput>;
  localityCoverImage?: InputMaybe<Scalars['ID']>;
  localityDescription?: InputMaybe<Scalars['String']>;
  localityLatitude?: InputMaybe<Scalars['Float']>;
  localityLongitude?: InputMaybe<Scalars['Float']>;
  localityMap?: InputMaybe<Scalars['ID']>;
  localitySections?: InputMaybe<Array<InputMaybe<ComponentLocalityPartsLocalityOpeningHourInput>>>;
  localityServices?: InputMaybe<Array<InputMaybe<ComponentLocalityPartsLocalityServiceInput>>>;
  localityTitle: Scalars['String'];
};

export type ComponentSectionsLocalityDetails = {
  __typename?: 'ComponentSectionsLocalityDetails';
  displayOnHomePage: Scalars['Boolean'];
  id: Scalars['ID'];
  isMainLocality?: Maybe<Scalars['Boolean']>;
  localityAddress?: Maybe<ComponentAddressAddress>;
  localityCoverImage?: Maybe<UploadFile>;
  localityDescription?: Maybe<Scalars['String']>;
  localityLatitude?: Maybe<Scalars['Float']>;
  localityLongitude?: Maybe<Scalars['Float']>;
  localityMap?: Maybe<UploadFile>;
  localitySections?: Maybe<Array<Maybe<ComponentLocalityPartsLocalityOpeningHours>>>;
  localityServices?: Maybe<Array<Maybe<ComponentLocalityPartsLocalityServices>>>;
  localityTitle: Scalars['String'];
};

export type ComponentSectionsParnterInput = {
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsParnters = {
  __typename?: 'ComponentSectionsParnters';
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsSiteUsefullness = {
  __typename?: 'ComponentSectionsSiteUsefullness';
  id: Scalars['ID'];
  thankYouMessage?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsSiteUsefullnessInput = {
  thankYouMessage?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsSubListing = {
  __typename?: 'ComponentSectionsSubListing';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentSectionsSubListingInput = {
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsSubpageInput = {
  subpages?: InputMaybe<Array<InputMaybe<ComponentBlocksSubpageInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsSubpages = {
  __typename?: 'ComponentSectionsSubpages';
  id: Scalars['ID'];
  subpages?: Maybe<Array<Maybe<ComponentBlocksSubpage>>>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsTable = {
  __typename?: 'ComponentSectionsTable';
  id: Scalars['ID'];
  primaryTitle?: Maybe<Scalars['String']>;
  rows?: Maybe<Array<Maybe<ComponentBlocksTableRow>>>;
  secondaryTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsTableInput = {
  primaryTitle?: InputMaybe<Scalars['String']>;
  rows?: InputMaybe<Array<InputMaybe<ComponentBlocksTableRowInput>>>;
  secondaryTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsVideo = {
  __typename?: 'ComponentSectionsVideo';
  id: Scalars['ID'];
  media?: Maybe<UploadFile>;
  youtube_url?: Maybe<Scalars['String']>;
};

export type ComponentSectionsVideoInput = {
  media?: InputMaybe<Scalars['ID']>;
  youtube_url?: InputMaybe<Scalars['String']>;
};

export type ComponentSeoSeo = {
  __typename?: 'ComponentSeoSeo';
  canonicalURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaRobots?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaViewport?: Maybe<Scalars['String']>;
};

export type ComponentSeoSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
};

export enum Enum_Componentaccordionitemsform_Type {
  AkaKnihaVamVKnizniciChyba = 'aka_kniha_vam_v_kniznici_chyba',
  AkoSaPrihlasitDoKniznice = 'ako_sa_prihlasit_do_kniznice',
  BibliografiaAResers = 'bibliografia_a_resers',
  Cyklodonaska = 'cyklodonaska',
  DarcekovaPoukazka = 'darcekova_poukazka',
  DetailPodujatia = 'detail_podujatia',
  DivadelnaTechnika = 'divadelna_technika',
  HraNaHudobneNastroje = 'hra_na_hudobne_nastroje',
  KniharskaDielna = 'kniharska_dielna',
  MedzikniznicnaVypozicnaSluzbaCitatel = 'medzikniznicna_vypozicna_sluzba_citatel',
  MedzikniznicnaVypozicnaSluzbaKniznica = 'medzikniznicna_vypozicna_sluzba_kniznica',
  NapisteNam = 'napiste_nam',
  PracujteVPriestorochKniznice = 'pracujte_v_priestoroch_kniznice',
  PreSkoly = 'pre_skoly',
  PrenajmiteSiPriestor = 'prenajmite_si_priestor',
  Tablety = 'tablety',
  TabletyACitacky = 'tablety_a_citacky'
}

export enum Enum_Componentaccordionitemstablerow_Valuealign {
  Center = 'center',
  Start = 'start'
}

export enum Enum_Componentblockstablerow_Valuealign {
  Center = 'center',
  Start = 'start'
}

export enum Enum_Componentsectionsform_Type {
  AkaKnihaVamVKnizniciChyba = 'aka_kniha_vam_v_kniznici_chyba',
  AkoSaPrihlasitDoKniznice = 'ako_sa_prihlasit_do_kniznice',
  BibliografiaAResers = 'bibliografia_a_resers',
  Cyklodonaska = 'cyklodonaska',
  DarcekovaPoukazka = 'darcekova_poukazka',
  DetailPodujatia = 'detail_podujatia',
  DivadelnaTechnika = 'divadelna_technika',
  HraNaHudobneNastroje = 'hra_na_hudobne_nastroje',
  KniharskaDielna = 'kniharska_dielna',
  MedzikniznicnaVypozicnaSluzbaCitatel = 'medzikniznicna_vypozicna_sluzba_citatel',
  MedzikniznicnaVypozicnaSluzbaKniznica = 'medzikniznicna_vypozicna_sluzba_kniznica',
  NapisteNam = 'napiste_nam',
  PracujteVPriestorochKniznice = 'pracujte_v_priestoroch_kniznice',
  PreSkoly = 'pre_skoly',
  PrenajmiteSiPriestor = 'prenajmite_si_priestor',
  Tablety = 'tablety',
  TabletyACitacky = 'tablety_a_citacky'
}

export enum Enum_Page_Layout {
  Announcement = 'announcement',
  BlogPosts = 'blog_posts',
  BookNews = 'book_news',
  ContentWithSidebar = 'content_with_sidebar',
  Documents = 'documents',
  Event = 'event',
  EventsListing = 'eventsListing',
  FullContent = 'full_content',
  Listing = 'listing',
  LocalitiesListing = 'localitiesListing',
  Locality = 'locality',
  News = 'news',
  NewsListing = 'newsListing',
  Partners = 'partners',
  Premises = 'premises',
  Sublisting = 'sublisting'
}

export type EventCategories = {
  __typename?: 'EventCategories';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<EventCategories>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type EventCategoriesLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type EventCategoriesAggregator = {
  __typename?: 'EventCategoriesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EventCategoriesConnection = {
  __typename?: 'EventCategoriesConnection';
  aggregate?: Maybe<EventCategoriesAggregator>;
  groupBy?: Maybe<EventCategoriesGroupBy>;
  values?: Maybe<Array<Maybe<EventCategories>>>;
};

export type EventCategoriesConnectionCreated_At = {
  __typename?: 'EventCategoriesConnectionCreated_at';
  connection?: Maybe<EventCategoriesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EventCategoriesConnectionId = {
  __typename?: 'EventCategoriesConnectionId';
  connection?: Maybe<EventCategoriesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EventCategoriesConnectionLocale = {
  __typename?: 'EventCategoriesConnectionLocale';
  connection?: Maybe<EventCategoriesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EventCategoriesConnectionPublished_At = {
  __typename?: 'EventCategoriesConnectionPublished_at';
  connection?: Maybe<EventCategoriesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EventCategoriesConnectionTitle = {
  __typename?: 'EventCategoriesConnectionTitle';
  connection?: Maybe<EventCategoriesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EventCategoriesConnectionUpdated_At = {
  __typename?: 'EventCategoriesConnectionUpdated_at';
  connection?: Maybe<EventCategoriesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EventCategoriesGroupBy = {
  __typename?: 'EventCategoriesGroupBy';
  created_at?: Maybe<Array<Maybe<EventCategoriesConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<EventCategoriesConnectionId>>>;
  locale?: Maybe<Array<Maybe<EventCategoriesConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<EventCategoriesConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<EventCategoriesConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<EventCategoriesConnectionUpdated_At>>>;
};

export type EventCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EventLocalities = {
  __typename?: 'EventLocalities';
  created_at: Scalars['DateTime'];
  eventAddress?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<EventLocalities>>>;
  navigateTo: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type EventLocalitiesLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type EventLocalitiesAggregator = {
  __typename?: 'EventLocalitiesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EventLocalitiesConnection = {
  __typename?: 'EventLocalitiesConnection';
  aggregate?: Maybe<EventLocalitiesAggregator>;
  groupBy?: Maybe<EventLocalitiesGroupBy>;
  values?: Maybe<Array<Maybe<EventLocalities>>>;
};

export type EventLocalitiesConnectionCreated_At = {
  __typename?: 'EventLocalitiesConnectionCreated_at';
  connection?: Maybe<EventLocalitiesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EventLocalitiesConnectionEventAddress = {
  __typename?: 'EventLocalitiesConnectionEventAddress';
  connection?: Maybe<EventLocalitiesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EventLocalitiesConnectionId = {
  __typename?: 'EventLocalitiesConnectionId';
  connection?: Maybe<EventLocalitiesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EventLocalitiesConnectionLocale = {
  __typename?: 'EventLocalitiesConnectionLocale';
  connection?: Maybe<EventLocalitiesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EventLocalitiesConnectionNavigateTo = {
  __typename?: 'EventLocalitiesConnectionNavigateTo';
  connection?: Maybe<EventLocalitiesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EventLocalitiesConnectionPublished_At = {
  __typename?: 'EventLocalitiesConnectionPublished_at';
  connection?: Maybe<EventLocalitiesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EventLocalitiesConnectionTitle = {
  __typename?: 'EventLocalitiesConnectionTitle';
  connection?: Maybe<EventLocalitiesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EventLocalitiesConnectionUpdated_At = {
  __typename?: 'EventLocalitiesConnectionUpdated_at';
  connection?: Maybe<EventLocalitiesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EventLocalitiesGroupBy = {
  __typename?: 'EventLocalitiesGroupBy';
  created_at?: Maybe<Array<Maybe<EventLocalitiesConnectionCreated_At>>>;
  eventAddress?: Maybe<Array<Maybe<EventLocalitiesConnectionEventAddress>>>;
  id?: Maybe<Array<Maybe<EventLocalitiesConnectionId>>>;
  locale?: Maybe<Array<Maybe<EventLocalitiesConnectionLocale>>>;
  navigateTo?: Maybe<Array<Maybe<EventLocalitiesConnectionNavigateTo>>>;
  published_at?: Maybe<Array<Maybe<EventLocalitiesConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<EventLocalitiesConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<EventLocalitiesConnectionUpdated_At>>>;
};

export type EventLocalityInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  eventAddress?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  navigateTo: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EventTagInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EventTags = {
  __typename?: 'EventTags';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<EventTags>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type EventTagsLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type EventTagsAggregator = {
  __typename?: 'EventTagsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EventTagsConnection = {
  __typename?: 'EventTagsConnection';
  aggregate?: Maybe<EventTagsAggregator>;
  groupBy?: Maybe<EventTagsGroupBy>;
  values?: Maybe<Array<Maybe<EventTags>>>;
};

export type EventTagsConnectionCreated_At = {
  __typename?: 'EventTagsConnectionCreated_at';
  connection?: Maybe<EventTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EventTagsConnectionId = {
  __typename?: 'EventTagsConnectionId';
  connection?: Maybe<EventTagsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EventTagsConnectionLocale = {
  __typename?: 'EventTagsConnectionLocale';
  connection?: Maybe<EventTagsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EventTagsConnectionPublished_At = {
  __typename?: 'EventTagsConnectionPublished_at';
  connection?: Maybe<EventTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EventTagsConnectionSlug = {
  __typename?: 'EventTagsConnectionSlug';
  connection?: Maybe<EventTagsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EventTagsConnectionTitle = {
  __typename?: 'EventTagsConnectionTitle';
  connection?: Maybe<EventTagsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EventTagsConnectionUpdated_At = {
  __typename?: 'EventTagsConnectionUpdated_at';
  connection?: Maybe<EventTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EventTagsGroupBy = {
  __typename?: 'EventTagsGroupBy';
  created_at?: Maybe<Array<Maybe<EventTagsConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<EventTagsConnectionId>>>;
  locale?: Maybe<Array<Maybe<EventTagsConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<EventTagsConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<EventTagsConnectionSlug>>>;
  title?: Maybe<Array<Maybe<EventTagsConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<EventTagsConnectionUpdated_At>>>;
};

export type FileCategory = {
  __typename?: 'FileCategory';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  page?: Maybe<Page>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type FileCategoryAggregator = {
  __typename?: 'FileCategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FileCategoryConnection = {
  __typename?: 'FileCategoryConnection';
  aggregate?: Maybe<FileCategoryAggregator>;
  groupBy?: Maybe<FileCategoryGroupBy>;
  values?: Maybe<Array<Maybe<FileCategory>>>;
};

export type FileCategoryConnectionCreated_At = {
  __typename?: 'FileCategoryConnectionCreated_at';
  connection?: Maybe<FileCategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FileCategoryConnectionId = {
  __typename?: 'FileCategoryConnectionId';
  connection?: Maybe<FileCategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type FileCategoryConnectionName = {
  __typename?: 'FileCategoryConnectionName';
  connection?: Maybe<FileCategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type FileCategoryConnectionPage = {
  __typename?: 'FileCategoryConnectionPage';
  connection?: Maybe<FileCategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type FileCategoryConnectionPublished_At = {
  __typename?: 'FileCategoryConnectionPublished_at';
  connection?: Maybe<FileCategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FileCategoryConnectionSlug = {
  __typename?: 'FileCategoryConnectionSlug';
  connection?: Maybe<FileCategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type FileCategoryConnectionUpdated_At = {
  __typename?: 'FileCategoryConnectionUpdated_at';
  connection?: Maybe<FileCategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type FileCategoryGroupBy = {
  __typename?: 'FileCategoryGroupBy';
  created_at?: Maybe<Array<Maybe<FileCategoryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<FileCategoryConnectionId>>>;
  name?: Maybe<Array<Maybe<FileCategoryConnectionName>>>;
  page?: Maybe<Array<Maybe<FileCategoryConnectionPage>>>;
  published_at?: Maybe<Array<Maybe<FileCategoryConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<FileCategoryConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<FileCategoryConnectionUpdated_At>>>;
};

export type FileCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Footer = {
  __typename?: 'Footer';
  copyrightText?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  footerColumns?: Maybe<Array<Maybe<ComponentFooterFooterColumn>>>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Footer>>>;
  privacyLink?: Maybe<Page>;
  published_at?: Maybe<Scalars['DateTime']>;
  siteMapLink?: Maybe<Page>;
  updated_at: Scalars['DateTime'];
};


export type FooterLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type FooterInput = {
  copyrightText?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  footerColumns?: InputMaybe<Array<InputMaybe<ComponentFooterFooterColumnInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  privacyLink?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  siteMapLink?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type HomePage = {
  __typename?: 'HomePage';
  Seo?: Maybe<ComponentSeoSeo>;
  created_at: Scalars['DateTime'];
  faqSection?: Maybe<ComponentHomepageFaqSection>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<HomePage>>>;
  newsSection?: Maybe<ComponentHomepageNewsSection>;
  published_at?: Maybe<Scalars['DateTime']>;
  registrationInfoSection?: Maybe<ComponentHomepageRegistrationInfo>;
  updated_at: Scalars['DateTime'];
};


export type HomePageLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type HomePageInput = {
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  created_by?: InputMaybe<Scalars['ID']>;
  faqSection?: InputMaybe<ComponentHomepageFaqSectionInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  newsSection?: InputMaybe<ComponentHomepageNewsSectionInput>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  registrationInfoSection?: InputMaybe<ComponentHomepageRegistrationInfoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Menu = {
  __typename?: 'Menu';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Menu>>>;
  menuSections?: Maybe<Array<Maybe<ComponentMenuSections>>>;
  menuSlug?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  menuTotalColumns?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type MenuLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type MenuAggregator = {
  __typename?: 'MenuAggregator';
  avg?: Maybe<MenuAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<MenuAggregatorMax>;
  min?: Maybe<MenuAggregatorMin>;
  sum?: Maybe<MenuAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuAggregatorAvg = {
  __typename?: 'MenuAggregatorAvg';
  menuTotalColumns?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type MenuAggregatorMax = {
  __typename?: 'MenuAggregatorMax';
  menuTotalColumns?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type MenuAggregatorMin = {
  __typename?: 'MenuAggregatorMin';
  menuTotalColumns?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type MenuAggregatorSum = {
  __typename?: 'MenuAggregatorSum';
  menuTotalColumns?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type MenuConnection = {
  __typename?: 'MenuConnection';
  aggregate?: Maybe<MenuAggregator>;
  groupBy?: Maybe<MenuGroupBy>;
  values?: Maybe<Array<Maybe<Menu>>>;
};

export type MenuConnectionCreated_At = {
  __typename?: 'MenuConnectionCreated_at';
  connection?: Maybe<MenuConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MenuConnectionId = {
  __typename?: 'MenuConnectionId';
  connection?: Maybe<MenuConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MenuConnectionLocale = {
  __typename?: 'MenuConnectionLocale';
  connection?: Maybe<MenuConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MenuConnectionMenuSlug = {
  __typename?: 'MenuConnectionMenuSlug';
  connection?: Maybe<MenuConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MenuConnectionMenuTitle = {
  __typename?: 'MenuConnectionMenuTitle';
  connection?: Maybe<MenuConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MenuConnectionMenuTotalColumns = {
  __typename?: 'MenuConnectionMenuTotalColumns';
  connection?: Maybe<MenuConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type MenuConnectionOrder = {
  __typename?: 'MenuConnectionOrder';
  connection?: Maybe<MenuConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type MenuConnectionPublished_At = {
  __typename?: 'MenuConnectionPublished_at';
  connection?: Maybe<MenuConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MenuConnectionUpdated_At = {
  __typename?: 'MenuConnectionUpdated_at';
  connection?: Maybe<MenuConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MenuGroupBy = {
  __typename?: 'MenuGroupBy';
  created_at?: Maybe<Array<Maybe<MenuConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<MenuConnectionId>>>;
  locale?: Maybe<Array<Maybe<MenuConnectionLocale>>>;
  menuSlug?: Maybe<Array<Maybe<MenuConnectionMenuSlug>>>;
  menuTitle?: Maybe<Array<Maybe<MenuConnectionMenuTitle>>>;
  menuTotalColumns?: Maybe<Array<Maybe<MenuConnectionMenuTotalColumns>>>;
  order?: Maybe<Array<Maybe<MenuConnectionOrder>>>;
  published_at?: Maybe<Array<Maybe<MenuConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<MenuConnectionUpdated_At>>>;
};

export type MenuInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  menuSections?: InputMaybe<Array<InputMaybe<ComponentMenuSectionInput>>>;
  menuSlug?: InputMaybe<Scalars['String']>;
  menuTitle?: InputMaybe<Scalars['String']>;
  menuTotalColumns?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = BasicDocument | BasicDocumentAggregator | BasicDocumentConnection | BasicDocumentConnectionAttachment | BasicDocumentConnectionAuthor | BasicDocumentConnectionCreated_At | BasicDocumentConnectionDate_Added | BasicDocumentConnectionDescription | BasicDocumentConnectionFile_Category | BasicDocumentConnectionId | BasicDocumentConnectionLink | BasicDocumentConnectionPublished_At | BasicDocumentConnectionSlug | BasicDocumentConnectionTitle | BasicDocumentConnectionUpdated_At | BasicDocumentGroupBy | BlogPost | BlogPostAggregator | BlogPostConnection | BlogPostConnectionCoverMedia | BlogPostConnectionCreated_At | BlogPostConnectionId | BlogPostConnectionParentPage | BlogPostConnectionPublished_At | BlogPostConnectionSeo | BlogPostConnectionSlug | BlogPostConnectionTitle | BlogPostConnectionUpdated_At | BlogPostGroupBy | BookTags | BookTagsAggregator | BookTagsConnection | BookTagsConnectionCreated_At | BookTagsConnectionDisplayName | BookTagsConnectionId | BookTagsConnectionPublished_At | BookTagsConnectionSlug | BookTagsConnectionUpdated_At | BookTagsGroupBy | Category | CategoryAggregator | CategoryAggregatorAvg | CategoryAggregatorMax | CategoryAggregatorMin | CategoryAggregatorSum | CategoryConnection | CategoryConnectionCreated_At | CategoryConnectionId | CategoryConnectionLocale | CategoryConnectionPageLink | CategoryConnectionParentCategory | CategoryConnectionPriority | CategoryConnectionPublished_At | CategoryConnectionTitle | CategoryConnectionUpdated_At | CategoryGroupBy | ComponentAccordionItemsFlatText | ComponentAccordionItemsForm | ComponentAccordionItemsTableRow | ComponentAddressAddress | ComponentBlocksAccordionItem | ComponentBlocksExternalLink | ComponentBlocksPageLink | ComponentBlocksSubpage | ComponentBlocksTableRow | ComponentFooterFooterColumn | ComponentFooterFooterLink | ComponentGuestsGuest | ComponentHomepageBenefits | ComponentHomepageCta | ComponentHomepageFaqSection | ComponentHomepageFaqs | ComponentHomepageNewsSection | ComponentHomepageRegistrationInfo | ComponentLocalityPartsGalleryParts | ComponentLocalityPartsLocalityOpeningHours | ComponentLocalityPartsLocalityServices | ComponentMenuSectionLinks | ComponentMenuSections | ComponentMenuSubsection | ComponentMenuSubsectionLinks | ComponentMetadataFaktury | ComponentMetadataMetadata | ComponentMetadataObchodnaVerejnaSutaz | ComponentMetadataObjednavky | ComponentMetadataVerejneObstaravanie | ComponentMetadataZmluvy | ComponentSectionsAccordion | ComponentSectionsColumnedText | ComponentSectionsCta | ComponentSectionsDivider | ComponentSectionsDocuments | ComponentSectionsEventDetails | ComponentSectionsExternalLinks | ComponentSectionsFaq | ComponentSectionsFlatText | ComponentSectionsFlatTextCenter | ComponentSectionsForm | ComponentSectionsGallery | ComponentSectionsLocalityDetails | ComponentSectionsParnters | ComponentSectionsSiteUsefullness | ComponentSectionsSubListing | ComponentSectionsSubpages | ComponentSectionsTable | ComponentSectionsVideo | ComponentSeoSeo | EventCategories | EventCategoriesAggregator | EventCategoriesConnection | EventCategoriesConnectionCreated_At | EventCategoriesConnectionId | EventCategoriesConnectionLocale | EventCategoriesConnectionPublished_At | EventCategoriesConnectionTitle | EventCategoriesConnectionUpdated_At | EventCategoriesGroupBy | EventLocalities | EventLocalitiesAggregator | EventLocalitiesConnection | EventLocalitiesConnectionCreated_At | EventLocalitiesConnectionEventAddress | EventLocalitiesConnectionId | EventLocalitiesConnectionLocale | EventLocalitiesConnectionNavigateTo | EventLocalitiesConnectionPublished_At | EventLocalitiesConnectionTitle | EventLocalitiesConnectionUpdated_At | EventLocalitiesGroupBy | EventTags | EventTagsAggregator | EventTagsConnection | EventTagsConnectionCreated_At | EventTagsConnectionId | EventTagsConnectionLocale | EventTagsConnectionPublished_At | EventTagsConnectionSlug | EventTagsConnectionTitle | EventTagsConnectionUpdated_At | EventTagsGroupBy | FileCategory | FileCategoryAggregator | FileCategoryConnection | FileCategoryConnectionCreated_At | FileCategoryConnectionId | FileCategoryConnectionName | FileCategoryConnectionPage | FileCategoryConnectionPublished_At | FileCategoryConnectionSlug | FileCategoryConnectionUpdated_At | FileCategoryGroupBy | Footer | HomePage | I18NLocale | Menu | MenuAggregator | MenuAggregatorAvg | MenuAggregatorMax | MenuAggregatorMin | MenuAggregatorSum | MenuConnection | MenuConnectionCreated_At | MenuConnectionId | MenuConnectionLocale | MenuConnectionMenuSlug | MenuConnectionMenuTitle | MenuConnectionMenuTotalColumns | MenuConnectionOrder | MenuConnectionPublished_At | MenuConnectionUpdated_At | MenuGroupBy | Page | PageAggregator | PageConnection | PageConnectionCreated_At | PageConnectionDate_Added | PageConnectionDescription | PageConnectionId | PageConnectionLayout | PageConnectionListingImage | PageConnectionLocale | PageConnectionPageCategory | PageConnectionPromoted | PageConnectionPublished_At | PageConnectionSeo | PageConnectionSlug | PageConnectionTitle | PageConnectionUpdated_At | PageGroupBy | Partner | PartnerAggregator | PartnerAggregatorAvg | PartnerAggregatorMax | PartnerAggregatorMin | PartnerAggregatorSum | PartnerConnection | PartnerConnectionCreated_At | PartnerConnectionFeatured | PartnerConnectionId | PartnerConnectionLocale | PartnerConnectionLogo | PartnerConnectionPriority | PartnerConnectionPublished_At | PartnerConnectionTitle | PartnerConnectionUpdated_At | PartnerConnectionUrl | PartnerGroupBy | Premise | PremiseAggregator | PremiseConnection | PremiseConnectionAddress | PremiseConnectionCreated_At | PremiseConnectionId | PremiseConnectionImage | PremiseConnectionLocale | PremiseConnectionPublished_At | PremiseConnectionTitle | PremiseConnectionUpdated_At | PremiseConnectionUrl | PremiseGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | CreateBasicDocumentPayload | CreateBlogPostPayload | CreateBookTagPayload | CreateCategoryPayload | CreateEventCategoryPayload | CreateEventLocalityPayload | CreateEventTagPayload | CreateFileCategoryPayload | CreateMenuPayload | CreatePagePayload | CreatePartnerPayload | CreatePremisePayload | CreateRolePayload | CreateUserPayload | DeleteBasicDocumentPayload | DeleteBlogPostPayload | DeleteBookTagPayload | DeleteCategoryPayload | DeleteEventCategoryPayload | DeleteEventLocalityPayload | DeleteEventTagPayload | DeleteFileCategoryPayload | DeleteFilePayload | DeleteFooterPayload | DeleteHomePagePayload | DeleteMenuPayload | DeletePagePayload | DeletePartnerPayload | DeletePremisePayload | DeleteRolePayload | DeleteUserPayload | UpdateBasicDocumentPayload | UpdateBlogPostPayload | UpdateBookTagPayload | UpdateCategoryPayload | UpdateEventCategoryPayload | UpdateEventLocalityPayload | UpdateEventTagPayload | UpdateFileCategoryPayload | UpdateFooterPayload | UpdateHomePagePayload | UpdateMenuPayload | UpdatePagePayload | UpdatePartnerPayload | UpdatePremisePayload | UpdateRolePayload | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createBasicDocument?: Maybe<CreateBasicDocumentPayload>;
  createBlogPost?: Maybe<CreateBlogPostPayload>;
  createBookTag?: Maybe<CreateBookTagPayload>;
  createCategory?: Maybe<CreateCategoryPayload>;
  createCategoryLocalization: Category;
  createEventCategory?: Maybe<CreateEventCategoryPayload>;
  createEventCategoryLocalization: EventCategories;
  createEventLocality?: Maybe<CreateEventLocalityPayload>;
  createEventLocalityLocalization: EventLocalities;
  createEventTag?: Maybe<CreateEventTagPayload>;
  createEventTagLocalization: EventTags;
  createFileCategory?: Maybe<CreateFileCategoryPayload>;
  createFooterLocalization: Footer;
  createHomePageLocalization: HomePage;
  createMenu?: Maybe<CreateMenuPayload>;
  createMenuLocalization: Menu;
  createPage?: Maybe<CreatePagePayload>;
  createPageLocalization: Page;
  createPartner?: Maybe<CreatePartnerPayload>;
  createPartnerLocalization: Partner;
  createPremise?: Maybe<CreatePremisePayload>;
  createPremiseLocalization: Premise;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteBasicDocument?: Maybe<DeleteBasicDocumentPayload>;
  deleteBlogPost?: Maybe<DeleteBlogPostPayload>;
  deleteBookTag?: Maybe<DeleteBookTagPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  deleteEventCategory?: Maybe<DeleteEventCategoryPayload>;
  deleteEventLocality?: Maybe<DeleteEventLocalityPayload>;
  deleteEventTag?: Maybe<DeleteEventTagPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteFileCategory?: Maybe<DeleteFileCategoryPayload>;
  deleteFooter?: Maybe<DeleteFooterPayload>;
  deleteHomePage?: Maybe<DeleteHomePagePayload>;
  deleteMenu?: Maybe<DeleteMenuPayload>;
  deletePage?: Maybe<DeletePagePayload>;
  deletePartner?: Maybe<DeletePartnerPayload>;
  deletePremise?: Maybe<DeletePremisePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBasicDocument?: Maybe<UpdateBasicDocumentPayload>;
  updateBlogPost?: Maybe<UpdateBlogPostPayload>;
  updateBookTag?: Maybe<UpdateBookTagPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  updateEventCategory?: Maybe<UpdateEventCategoryPayload>;
  updateEventLocality?: Maybe<UpdateEventLocalityPayload>;
  updateEventTag?: Maybe<UpdateEventTagPayload>;
  updateFileCategory?: Maybe<UpdateFileCategoryPayload>;
  updateFileInfo: UploadFile;
  updateFooter?: Maybe<UpdateFooterPayload>;
  updateHomePage?: Maybe<UpdateHomePagePayload>;
  updateMenu?: Maybe<UpdateMenuPayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  updatePartner?: Maybe<UpdatePartnerPayload>;
  updatePremise?: Maybe<UpdatePremisePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};


export type MutationCreateBasicDocumentArgs = {
  input?: InputMaybe<CreateBasicDocumentInput>;
};


export type MutationCreateBlogPostArgs = {
  input?: InputMaybe<CreateBlogPostInput>;
};


export type MutationCreateBookTagArgs = {
  input?: InputMaybe<CreateBookTagInput>;
};


export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CreateCategoryInput>;
};


export type MutationCreateCategoryLocalizationArgs = {
  input: UpdateCategoryInput;
};


export type MutationCreateEventCategoryArgs = {
  input?: InputMaybe<CreateEventCategoryInput>;
};


export type MutationCreateEventCategoryLocalizationArgs = {
  input: UpdateEventCategoryInput;
};


export type MutationCreateEventLocalityArgs = {
  input?: InputMaybe<CreateEventLocalityInput>;
};


export type MutationCreateEventLocalityLocalizationArgs = {
  input: UpdateEventLocalityInput;
};


export type MutationCreateEventTagArgs = {
  input?: InputMaybe<CreateEventTagInput>;
};


export type MutationCreateEventTagLocalizationArgs = {
  input: UpdateEventTagInput;
};


export type MutationCreateFileCategoryArgs = {
  input?: InputMaybe<CreateFileCategoryInput>;
};


export type MutationCreateFooterLocalizationArgs = {
  input: UpdateFooterInput;
};


export type MutationCreateHomePageLocalizationArgs = {
  input: UpdateHomePageInput;
};


export type MutationCreateMenuArgs = {
  input?: InputMaybe<CreateMenuInput>;
};


export type MutationCreateMenuLocalizationArgs = {
  input: UpdateMenuInput;
};


export type MutationCreatePageArgs = {
  input?: InputMaybe<CreatePageInput>;
};


export type MutationCreatePageLocalizationArgs = {
  input: UpdatePageInput;
};


export type MutationCreatePartnerArgs = {
  input?: InputMaybe<CreatePartnerInput>;
};


export type MutationCreatePartnerLocalizationArgs = {
  input: UpdatePartnerInput;
};


export type MutationCreatePremiseArgs = {
  input?: InputMaybe<CreatePremiseInput>;
};


export type MutationCreatePremiseLocalizationArgs = {
  input: UpdatePremiseInput;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteBasicDocumentArgs = {
  input?: InputMaybe<DeleteBasicDocumentInput>;
};


export type MutationDeleteBlogPostArgs = {
  input?: InputMaybe<DeleteBlogPostInput>;
};


export type MutationDeleteBookTagArgs = {
  input?: InputMaybe<DeleteBookTagInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: InputMaybe<DeleteCategoryInput>;
};


export type MutationDeleteEventCategoryArgs = {
  input?: InputMaybe<DeleteEventCategoryInput>;
};


export type MutationDeleteEventLocalityArgs = {
  input?: InputMaybe<DeleteEventLocalityInput>;
};


export type MutationDeleteEventTagArgs = {
  input?: InputMaybe<DeleteEventTagInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteFileCategoryArgs = {
  input?: InputMaybe<DeleteFileCategoryInput>;
};


export type MutationDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteMenuArgs = {
  input?: InputMaybe<DeleteMenuInput>;
};


export type MutationDeletePageArgs = {
  input?: InputMaybe<DeletePageInput>;
};


export type MutationDeletePartnerArgs = {
  input?: InputMaybe<DeletePartnerInput>;
};


export type MutationDeletePremiseArgs = {
  input?: InputMaybe<DeletePremiseInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateBasicDocumentArgs = {
  input?: InputMaybe<UpdateBasicDocumentInput>;
};


export type MutationUpdateBlogPostArgs = {
  input?: InputMaybe<UpdateBlogPostInput>;
};


export type MutationUpdateBookTagArgs = {
  input?: InputMaybe<UpdateBookTagInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: InputMaybe<UpdateCategoryInput>;
};


export type MutationUpdateEventCategoryArgs = {
  input?: InputMaybe<UpdateEventCategoryInput>;
};


export type MutationUpdateEventLocalityArgs = {
  input?: InputMaybe<UpdateEventLocalityInput>;
};


export type MutationUpdateEventTagArgs = {
  input?: InputMaybe<UpdateEventTagInput>;
};


export type MutationUpdateFileCategoryArgs = {
  input?: InputMaybe<UpdateFileCategoryInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateFooterArgs = {
  input?: InputMaybe<UpdateFooterInput>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateHomePageArgs = {
  input?: InputMaybe<UpdateHomePageInput>;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateMenuArgs = {
  input?: InputMaybe<UpdateMenuInput>;
};


export type MutationUpdatePageArgs = {
  input?: InputMaybe<UpdatePageInput>;
};


export type MutationUpdatePartnerArgs = {
  input?: InputMaybe<UpdatePartnerInput>;
};


export type MutationUpdatePremiseArgs = {
  input?: InputMaybe<UpdatePremiseInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type Page = {
  __typename?: 'Page';
  Seo?: Maybe<ComponentSeoSeo>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
  created_at: Scalars['DateTime'];
  date_added?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  layout?: Maybe<Enum_Page_Layout>;
  listingImage?: Maybe<UploadFile>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Page>>>;
  pageCategory?: Maybe<Category>;
  promoted?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  relatedBlogPosts?: Maybe<Array<BlogPost>>;
  relatedBlogPostsCount?: Maybe<Scalars['Int']>;
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};


export type PageBlogPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type PageLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type PageAggregator = {
  __typename?: 'PageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate?: Maybe<PageAggregator>;
  groupBy?: Maybe<PageGroupBy>;
  values?: Maybe<Array<Maybe<Page>>>;
};

export type PageConnectionCreated_At = {
  __typename?: 'PageConnectionCreated_at';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PageConnectionDate_Added = {
  __typename?: 'PageConnectionDate_added';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PageConnectionDescription = {
  __typename?: 'PageConnectionDescription';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PageConnectionId = {
  __typename?: 'PageConnectionId';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PageConnectionLayout = {
  __typename?: 'PageConnectionLayout';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PageConnectionListingImage = {
  __typename?: 'PageConnectionListingImage';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PageConnectionLocale = {
  __typename?: 'PageConnectionLocale';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PageConnectionPageCategory = {
  __typename?: 'PageConnectionPageCategory';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PageConnectionPromoted = {
  __typename?: 'PageConnectionPromoted';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type PageConnectionPublished_At = {
  __typename?: 'PageConnectionPublished_at';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PageConnectionSeo = {
  __typename?: 'PageConnectionSeo';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PageConnectionSlug = {
  __typename?: 'PageConnectionSlug';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PageConnectionTitle = {
  __typename?: 'PageConnectionTitle';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PageConnectionUpdated_At = {
  __typename?: 'PageConnectionUpdated_at';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PageGroupBy = {
  __typename?: 'PageGroupBy';
  Seo?: Maybe<Array<Maybe<PageConnectionSeo>>>;
  created_at?: Maybe<Array<Maybe<PageConnectionCreated_At>>>;
  date_added?: Maybe<Array<Maybe<PageConnectionDate_Added>>>;
  description?: Maybe<Array<Maybe<PageConnectionDescription>>>;
  id?: Maybe<Array<Maybe<PageConnectionId>>>;
  layout?: Maybe<Array<Maybe<PageConnectionLayout>>>;
  listingImage?: Maybe<Array<Maybe<PageConnectionListingImage>>>;
  locale?: Maybe<Array<Maybe<PageConnectionLocale>>>;
  pageCategory?: Maybe<Array<Maybe<PageConnectionPageCategory>>>;
  promoted?: Maybe<Array<Maybe<PageConnectionPromoted>>>;
  published_at?: Maybe<Array<Maybe<PageConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<PageConnectionSlug>>>;
  title?: Maybe<Array<Maybe<PageConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<PageConnectionUpdated_At>>>;
};

export type PageInput = {
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  blogPosts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  layout?: InputMaybe<Enum_Page_Layout>;
  listingImage?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  pageCategory?: InputMaybe<Scalars['ID']>;
  promoted?: InputMaybe<Scalars['Boolean']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  sections?: InputMaybe<Array<Scalars['PageSectionsDynamicZoneInput']>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type PageSectionsDynamicZone = ComponentSectionsAccordion | ComponentSectionsColumnedText | ComponentSectionsCta | ComponentSectionsDivider | ComponentSectionsDocuments | ComponentSectionsEventDetails | ComponentSectionsExternalLinks | ComponentSectionsFaq | ComponentSectionsFlatText | ComponentSectionsFlatTextCenter | ComponentSectionsForm | ComponentSectionsGallery | ComponentSectionsLocalityDetails | ComponentSectionsSiteUsefullness | ComponentSectionsSubListing | ComponentSectionsSubpages | ComponentSectionsTable | ComponentSectionsVideo;

export type Partner = {
  __typename?: 'Partner';
  created_at: Scalars['DateTime'];
  featured?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Partner>>>;
  logo?: Maybe<UploadFile>;
  priority?: Maybe<Scalars['Float']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


export type PartnerLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type PartnerAggregator = {
  __typename?: 'PartnerAggregator';
  avg?: Maybe<PartnerAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PartnerAggregatorMax>;
  min?: Maybe<PartnerAggregatorMin>;
  sum?: Maybe<PartnerAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PartnerAggregatorAvg = {
  __typename?: 'PartnerAggregatorAvg';
  priority?: Maybe<Scalars['Float']>;
};

export type PartnerAggregatorMax = {
  __typename?: 'PartnerAggregatorMax';
  priority?: Maybe<Scalars['Float']>;
};

export type PartnerAggregatorMin = {
  __typename?: 'PartnerAggregatorMin';
  priority?: Maybe<Scalars['Float']>;
};

export type PartnerAggregatorSum = {
  __typename?: 'PartnerAggregatorSum';
  priority?: Maybe<Scalars['Float']>;
};

export type PartnerConnection = {
  __typename?: 'PartnerConnection';
  aggregate?: Maybe<PartnerAggregator>;
  groupBy?: Maybe<PartnerGroupBy>;
  values?: Maybe<Array<Maybe<Partner>>>;
};

export type PartnerConnectionCreated_At = {
  __typename?: 'PartnerConnectionCreated_at';
  connection?: Maybe<PartnerConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PartnerConnectionFeatured = {
  __typename?: 'PartnerConnectionFeatured';
  connection?: Maybe<PartnerConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type PartnerConnectionId = {
  __typename?: 'PartnerConnectionId';
  connection?: Maybe<PartnerConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PartnerConnectionLocale = {
  __typename?: 'PartnerConnectionLocale';
  connection?: Maybe<PartnerConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PartnerConnectionLogo = {
  __typename?: 'PartnerConnectionLogo';
  connection?: Maybe<PartnerConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PartnerConnectionPriority = {
  __typename?: 'PartnerConnectionPriority';
  connection?: Maybe<PartnerConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type PartnerConnectionPublished_At = {
  __typename?: 'PartnerConnectionPublished_at';
  connection?: Maybe<PartnerConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PartnerConnectionTitle = {
  __typename?: 'PartnerConnectionTitle';
  connection?: Maybe<PartnerConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PartnerConnectionUpdated_At = {
  __typename?: 'PartnerConnectionUpdated_at';
  connection?: Maybe<PartnerConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PartnerConnectionUrl = {
  __typename?: 'PartnerConnectionUrl';
  connection?: Maybe<PartnerConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PartnerGroupBy = {
  __typename?: 'PartnerGroupBy';
  created_at?: Maybe<Array<Maybe<PartnerConnectionCreated_At>>>;
  featured?: Maybe<Array<Maybe<PartnerConnectionFeatured>>>;
  id?: Maybe<Array<Maybe<PartnerConnectionId>>>;
  locale?: Maybe<Array<Maybe<PartnerConnectionLocale>>>;
  logo?: Maybe<Array<Maybe<PartnerConnectionLogo>>>;
  priority?: Maybe<Array<Maybe<PartnerConnectionPriority>>>;
  published_at?: Maybe<Array<Maybe<PartnerConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<PartnerConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<PartnerConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<PartnerConnectionUrl>>>;
};

export type PartnerInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  logo?: InputMaybe<Scalars['ID']>;
  priority?: InputMaybe<Scalars['Float']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Premise = {
  __typename?: 'Premise';
  address?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Premise>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


export type PremiseLocalizationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type PremiseAggregator = {
  __typename?: 'PremiseAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PremiseConnection = {
  __typename?: 'PremiseConnection';
  aggregate?: Maybe<PremiseAggregator>;
  groupBy?: Maybe<PremiseGroupBy>;
  values?: Maybe<Array<Maybe<Premise>>>;
};

export type PremiseConnectionAddress = {
  __typename?: 'PremiseConnectionAddress';
  connection?: Maybe<PremiseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PremiseConnectionCreated_At = {
  __typename?: 'PremiseConnectionCreated_at';
  connection?: Maybe<PremiseConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PremiseConnectionId = {
  __typename?: 'PremiseConnectionId';
  connection?: Maybe<PremiseConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PremiseConnectionImage = {
  __typename?: 'PremiseConnectionImage';
  connection?: Maybe<PremiseConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PremiseConnectionLocale = {
  __typename?: 'PremiseConnectionLocale';
  connection?: Maybe<PremiseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PremiseConnectionPublished_At = {
  __typename?: 'PremiseConnectionPublished_at';
  connection?: Maybe<PremiseConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PremiseConnectionTitle = {
  __typename?: 'PremiseConnectionTitle';
  connection?: Maybe<PremiseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PremiseConnectionUpdated_At = {
  __typename?: 'PremiseConnectionUpdated_at';
  connection?: Maybe<PremiseConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PremiseConnectionUrl = {
  __typename?: 'PremiseConnectionUrl';
  connection?: Maybe<PremiseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PremiseGroupBy = {
  __typename?: 'PremiseGroupBy';
  address?: Maybe<Array<Maybe<PremiseConnectionAddress>>>;
  created_at?: Maybe<Array<Maybe<PremiseConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<PremiseConnectionId>>>;
  image?: Maybe<Array<Maybe<PremiseConnectionImage>>>;
  locale?: Maybe<Array<Maybe<PremiseConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<PremiseConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<PremiseConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<PremiseConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<PremiseConnectionUrl>>>;
};

export type PremiseInput = {
  address?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  allBasicDocuments: Array<BasicDocument>;
  allPartners: Array<Partner>;
  basicDocument?: Maybe<BasicDocument>;
  basicDocumentBySlug?: Maybe<BasicDocument>;
  basicDocumentCount?: Maybe<Scalars['Int']>;
  basicDocuments?: Maybe<Array<Maybe<BasicDocument>>>;
  basicDocumentsConnection?: Maybe<BasicDocumentConnection>;
  blogPost?: Maybe<BlogPost>;
  blogPostBySlug?: Maybe<BlogPost>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
  blogPostsConnection?: Maybe<BlogPostConnection>;
  blogPostsCount?: Maybe<Scalars['Int']>;
  bookTag?: Maybe<BookTags>;
  bookTags?: Maybe<Array<Maybe<BookTags>>>;
  bookTagsConnection?: Maybe<BookTagsConnection>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  category?: Maybe<Category>;
  categoryBySlug?: Maybe<Category>;
  documentCategoryBySlug?: Maybe<FileCategory>;
  eventCategories?: Maybe<Array<Maybe<EventCategories>>>;
  eventCategoriesConnection?: Maybe<EventCategoriesConnection>;
  eventCategory?: Maybe<EventCategories>;
  eventLocalities?: Maybe<Array<Maybe<EventLocalities>>>;
  eventLocalitiesConnection?: Maybe<EventLocalitiesConnection>;
  eventLocality?: Maybe<EventLocalities>;
  eventTag?: Maybe<EventTags>;
  eventTags?: Maybe<Array<Maybe<EventTags>>>;
  eventTagsConnection?: Maybe<EventTagsConnection>;
  fetchBlogPosts: Array<BlogPost>;
  fileCategories?: Maybe<Array<Maybe<FileCategory>>>;
  fileCategoriesConnection?: Maybe<FileCategoryConnection>;
  fileCategory?: Maybe<FileCategory>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  footer?: Maybe<Footer>;
  homePage?: Maybe<HomePage>;
  me?: Maybe<UsersPermissionsMe>;
  menu?: Maybe<Menu>;
  menus?: Maybe<Array<Maybe<Menu>>>;
  menusConnection?: Maybe<MenuConnection>;
  page?: Maybe<Page>;
  pageBySlug?: Maybe<Page>;
  pages?: Maybe<Array<Maybe<Page>>>;
  pagesConnection?: Maybe<PageConnection>;
  partner?: Maybe<Partner>;
  partners?: Maybe<Array<Maybe<Partner>>>;
  partnersConnection?: Maybe<PartnerConnection>;
  premise?: Maybe<Premise>;
  premises?: Maybe<Array<Maybe<Premise>>>;
  premisesConnection?: Maybe<PremiseConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryAllBasicDocumentsArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryAllPartnersArgs = {
  locale: Scalars['String'];
};


export type QueryBasicDocumentArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBasicDocumentBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryBasicDocumentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryBasicDocumentsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryBlogPostArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBlogPostBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryBlogPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryBlogPostsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryBookTagArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBookTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryBookTagsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCategoryBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryDocumentCategoryBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryEventCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEventCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEventCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEventLocalitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEventLocalitiesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEventLocalityArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEventTagArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEventTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEventTagsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFetchBlogPostsArgs = {
  id?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryFileCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFileCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFileCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryMenuArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryMenusArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryMenusConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPageBySlugArgs = {
  locale: Scalars['String'];
  slug: Scalars['String'];
};


export type QueryPagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPagesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPartnerArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPartnersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPartnersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPremiseArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPremisesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryPremisesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateBasicDocumentInput = {
  data?: InputMaybe<BasicDocumentInput>;
};

export type CreateBasicDocumentPayload = {
  __typename?: 'createBasicDocumentPayload';
  basicDocument?: Maybe<BasicDocument>;
};

export type CreateBlogPostInput = {
  data?: InputMaybe<BlogPostInput>;
};

export type CreateBlogPostPayload = {
  __typename?: 'createBlogPostPayload';
  blogPost?: Maybe<BlogPost>;
};

export type CreateBookTagInput = {
  data?: InputMaybe<BookTagInput>;
};

export type CreateBookTagPayload = {
  __typename?: 'createBookTagPayload';
  bookTag?: Maybe<BookTags>;
};

export type CreateCategoryInput = {
  data?: InputMaybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
};

export type CreateEventCategoryInput = {
  data?: InputMaybe<EventCategoryInput>;
};

export type CreateEventCategoryPayload = {
  __typename?: 'createEventCategoryPayload';
  eventCategory?: Maybe<EventCategories>;
};

export type CreateEventLocalityInput = {
  data?: InputMaybe<EventLocalityInput>;
};

export type CreateEventLocalityPayload = {
  __typename?: 'createEventLocalityPayload';
  eventLocality?: Maybe<EventLocalities>;
};

export type CreateEventTagInput = {
  data?: InputMaybe<EventTagInput>;
};

export type CreateEventTagPayload = {
  __typename?: 'createEventTagPayload';
  eventTag?: Maybe<EventTags>;
};

export type CreateFileCategoryInput = {
  data?: InputMaybe<FileCategoryInput>;
};

export type CreateFileCategoryPayload = {
  __typename?: 'createFileCategoryPayload';
  fileCategory?: Maybe<FileCategory>;
};

export type CreateMenuInput = {
  data?: InputMaybe<MenuInput>;
};

export type CreateMenuPayload = {
  __typename?: 'createMenuPayload';
  menu?: Maybe<Menu>;
};

export type CreatePageInput = {
  data?: InputMaybe<PageInput>;
};

export type CreatePagePayload = {
  __typename?: 'createPagePayload';
  page?: Maybe<Page>;
};

export type CreatePartnerInput = {
  data?: InputMaybe<PartnerInput>;
};

export type CreatePartnerPayload = {
  __typename?: 'createPartnerPayload';
  partner?: Maybe<Partner>;
};

export type CreatePremiseInput = {
  data?: InputMaybe<PremiseInput>;
};

export type CreatePremisePayload = {
  __typename?: 'createPremisePayload';
  premise?: Maybe<Premise>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteBasicDocumentInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteBasicDocumentPayload = {
  __typename?: 'deleteBasicDocumentPayload';
  basicDocument?: Maybe<BasicDocument>;
};

export type DeleteBlogPostInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteBlogPostPayload = {
  __typename?: 'deleteBlogPostPayload';
  blogPost?: Maybe<BlogPost>;
};

export type DeleteBookTagInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteBookTagPayload = {
  __typename?: 'deleteBookTagPayload';
  bookTag?: Maybe<BookTags>;
};

export type DeleteCategoryInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
};

export type DeleteEventCategoryInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteEventCategoryPayload = {
  __typename?: 'deleteEventCategoryPayload';
  eventCategory?: Maybe<EventCategories>;
};

export type DeleteEventLocalityInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteEventLocalityPayload = {
  __typename?: 'deleteEventLocalityPayload';
  eventLocality?: Maybe<EventLocalities>;
};

export type DeleteEventTagInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteEventTagPayload = {
  __typename?: 'deleteEventTagPayload';
  eventTag?: Maybe<EventTags>;
};

export type DeleteFileCategoryInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFileCategoryPayload = {
  __typename?: 'deleteFileCategoryPayload';
  fileCategory?: Maybe<FileCategory>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteFooterPayload = {
  __typename?: 'deleteFooterPayload';
  footer?: Maybe<Footer>;
};

export type DeleteHomePagePayload = {
  __typename?: 'deleteHomePagePayload';
  homePage?: Maybe<HomePage>;
};

export type DeleteMenuInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteMenuPayload = {
  __typename?: 'deleteMenuPayload';
  menu?: Maybe<Menu>;
};

export type DeletePageInput = {
  where?: InputMaybe<InputId>;
};

export type DeletePagePayload = {
  __typename?: 'deletePagePayload';
  page?: Maybe<Page>;
};

export type DeletePartnerInput = {
  where?: InputMaybe<InputId>;
};

export type DeletePartnerPayload = {
  __typename?: 'deletePartnerPayload';
  partner?: Maybe<Partner>;
};

export type DeletePremiseInput = {
  where?: InputMaybe<InputId>;
};

export type DeletePremisePayload = {
  __typename?: 'deletePremisePayload';
  premise?: Maybe<Premise>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditBasicDocumentInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  author?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  file_category?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<Scalars['BasicDocumentMetadataDynamicZoneInput']>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditBlogPostInput = {
  Seo?: InputMaybe<EditComponentSeoSeoInput>;
  coverMedia?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  parentPage?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  sections?: InputMaybe<Array<Scalars['BlogPostSectionsDynamicZoneInput']>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditBookTagInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  displayName?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  pageLink?: InputMaybe<EditComponentBlocksPageLinkInput>;
  pages?: InputMaybe<Array<InputMaybe<EditComponentBlocksPageLinkInput>>>;
  parentCategory?: InputMaybe<Scalars['ID']>;
  priority?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  subCategories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditComponentAccordionItemsFlatTextInput = {
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentAccordionItemsFormInput = {
  category?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Enum_Componentaccordionitemsform_Type>;
};

export type EditComponentAccordionItemsTableRowInput = {
  accordionCategory?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  tableCategory?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  valueAlign?: InputMaybe<Enum_Componentaccordionitemstablerow_Valuealign>;
};

export type EditComponentAddressAddressInput = {
  id?: InputMaybe<Scalars['ID']>;
  navigateTo?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentBlocksAccordionItemInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
};

export type EditComponentBlocksExternalLinkInput = {
  category?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditComponentBlocksPageLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditComponentBlocksSubpageInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditComponentBlocksTableRowInput = {
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  valueAlign?: InputMaybe<Enum_Componentblockstablerow_Valuealign>;
};

export type EditComponentFooterFooterColumnInput = {
  footerLink?: InputMaybe<Array<InputMaybe<EditComponentFooterFooterLinkInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentFooterFooterLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  otherSite?: InputMaybe<Scalars['String']>;
  redirectTo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentGuestsGuestInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
};

export type EditComponentHomepageBenefitInput = {
  benefit?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentHomepageCtaInput = {
  ctaRedirectTo?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentHomepageFaqInput = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  question?: InputMaybe<Scalars['String']>;
};

export type EditComponentHomepageFaqSectionInput = {
  ctas?: InputMaybe<Array<InputMaybe<EditComponentHomepageCtaInput>>>;
  faqSectionRedirectTo?: InputMaybe<Scalars['ID']>;
  faqs?: InputMaybe<Array<InputMaybe<EditComponentHomepageFaqInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentHomepageNewsSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  newsSectionRedirectTo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentHomepageRegistrationInfoInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  registrationBenefits?: InputMaybe<Array<InputMaybe<EditComponentHomepageBenefitInput>>>;
  registrationInfoSectionRedirectTo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentLocalityPartsGalleryPartInput = {
  Description?: InputMaybe<Scalars['String']>;
  Photo?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentLocalityPartsLocalityOpeningHourInput = {
  id?: InputMaybe<Scalars['ID']>;
  isMainSection?: InputMaybe<Scalars['Boolean']>;
  localitySectionDescription?: InputMaybe<Scalars['String']>;
  localitySectionEmail?: InputMaybe<Scalars['String']>;
  localitySectionPhone?: InputMaybe<Scalars['String']>;
  localitySectionTitle?: InputMaybe<Scalars['String']>;
  openingHoursFridayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursFridayTo?: InputMaybe<Scalars['Time']>;
  openingHoursMondayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursMondayTo?: InputMaybe<Scalars['Time']>;
  openingHoursSaturdayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursSaturdayTo?: InputMaybe<Scalars['Time']>;
  openingHoursSundayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursSundayTo?: InputMaybe<Scalars['Time']>;
  openingHoursThursdayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursThursdayTo?: InputMaybe<Scalars['Time']>;
  openingHoursTuesdayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursTuesdayTo?: InputMaybe<Scalars['Time']>;
  openingHoursWednesdayFrom?: InputMaybe<Scalars['Time']>;
  openingHoursWednesdayTo?: InputMaybe<Scalars['Time']>;
};

export type EditComponentLocalityPartsLocalityServiceInput = {
  id?: InputMaybe<Scalars['ID']>;
  localityServicesPage?: InputMaybe<Scalars['ID']>;
};

export type EditComponentMenuSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  sectionColumnSpan?: InputMaybe<Scalars['Int']>;
  sectionLinks?: InputMaybe<Array<InputMaybe<EditComponentMenuSectionLinkInput>>>;
  sectionPage?: InputMaybe<Scalars['ID']>;
  sectionTitle?: InputMaybe<Scalars['String']>;
};

export type EditComponentMenuSectionLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  sectionLinkPage?: InputMaybe<Scalars['ID']>;
  sectionLinkTitle?: InputMaybe<Scalars['String']>;
};

export type EditComponentMenuSubsectionInput = {
  columnSpan?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  subsectionLinks?: InputMaybe<Array<InputMaybe<EditComponentMenuSubsectionLinkInput>>>;
  subsectionTitle?: InputMaybe<Scalars['String']>;
};

export type EditComponentMenuSubsectionLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['ID']>;
  subsectionLinkTitle?: InputMaybe<Scalars['String']>;
};

export type EditComponentMetadataFakturyInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  date?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EditComponentMetadataMetadatumInput = {
  amount?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  grant_name?: InputMaybe<Scalars['String']>;
  grant_number?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  provider?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type EditComponentMetadataObchodnaVerejnaSutazInput = {
  amount?: InputMaybe<Scalars['String']>;
  attachment?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  number?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type EditComponentMetadataObjednavkyInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['Date']>;
  date_period?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentMetadataVerejneObstaravanieInput = {
  amount?: InputMaybe<Scalars['String']>;
  attachment?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  number?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type EditComponentMetadataZmluvyInput = {
  amount?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  number?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  supplier?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsAccordionInput = {
  flatText?: InputMaybe<Array<InputMaybe<EditComponentAccordionItemsFlatTextInput>>>;
  forms?: InputMaybe<Array<InputMaybe<EditComponentAccordionItemsFormInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  tableRows?: InputMaybe<Array<InputMaybe<EditComponentAccordionItemsTableRowInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsColumnedTextInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsCtaInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsDividerInput = {
  id?: InputMaybe<Scalars['ID']>;
  shown?: InputMaybe<Scalars['Boolean']>;
};

export type EditComponentSectionsDocumentInput = {
  basicDocuments?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  moreLink?: InputMaybe<EditComponentBlocksPageLinkInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsEventDetailInput = {
  dateFrom?: InputMaybe<Scalars['DateTime']>;
  dateTo?: InputMaybe<Scalars['DateTime']>;
  eventCategory?: InputMaybe<Scalars['ID']>;
  eventCoverImage?: InputMaybe<Scalars['ID']>;
  eventDescription?: InputMaybe<Scalars['String']>;
  eventLocality?: InputMaybe<Scalars['ID']>;
  eventTags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  eventTitle?: InputMaybe<Scalars['String']>;
  guests?: InputMaybe<Array<InputMaybe<EditComponentGuestsGuestInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  partners?: InputMaybe<Array<InputMaybe<EditComponentSectionsParnterInput>>>;
  price?: InputMaybe<Scalars['Float']>;
};

export type EditComponentSectionsExternalLinkInput = {
  descriptions?: InputMaybe<Array<InputMaybe<EditComponentAccordionItemsFlatTextInput>>>;
  externalLinks?: InputMaybe<Array<InputMaybe<EditComponentBlocksExternalLinkInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsFaqInput = {
  id?: InputMaybe<Scalars['ID']>;
  questions?: InputMaybe<Array<InputMaybe<EditComponentBlocksAccordionItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsFlatTextCenterInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
};

export type EditComponentSectionsFlatTextInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  media?: InputMaybe<Scalars['ID']>;
};

export type EditComponentSectionsFormInput = {
  id?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Enum_Componentsectionsform_Type>;
};

export type EditComponentSectionsGalleryInput = {
  Gallery?: InputMaybe<Array<InputMaybe<EditComponentLocalityPartsGalleryPartInput>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EditComponentSectionsLocalityDetailInput = {
  displayOnHomePage?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  isMainLocality?: InputMaybe<Scalars['Boolean']>;
  localityAddress?: InputMaybe<EditComponentAddressAddressInput>;
  localityCoverImage?: InputMaybe<Scalars['ID']>;
  localityDescription?: InputMaybe<Scalars['String']>;
  localityLatitude?: InputMaybe<Scalars['Float']>;
  localityLongitude?: InputMaybe<Scalars['Float']>;
  localityMap?: InputMaybe<Scalars['ID']>;
  localitySections?: InputMaybe<Array<InputMaybe<EditComponentLocalityPartsLocalityOpeningHourInput>>>;
  localityServices?: InputMaybe<Array<InputMaybe<EditComponentLocalityPartsLocalityServiceInput>>>;
  localityTitle?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsParnterInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsSiteUsefullnessInput = {
  id?: InputMaybe<Scalars['ID']>;
  thankYouMessage?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsSubListingInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsSubpageInput = {
  id?: InputMaybe<Scalars['ID']>;
  subpages?: InputMaybe<Array<InputMaybe<EditComponentBlocksSubpageInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsTableInput = {
  id?: InputMaybe<Scalars['ID']>;
  primaryTitle?: InputMaybe<Scalars['String']>;
  rows?: InputMaybe<Array<InputMaybe<EditComponentBlocksTableRowInput>>>;
  secondaryTitle?: InputMaybe<Scalars['String']>;
};

export type EditComponentSectionsVideoInput = {
  id?: InputMaybe<Scalars['ID']>;
  media?: InputMaybe<Scalars['ID']>;
  youtube_url?: InputMaybe<Scalars['String']>;
};

export type EditComponentSeoSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
};

export type EditEventCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditEventLocalityInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  eventAddress?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  navigateTo?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditEventTagInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditFooterInput = {
  copyrightText?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  footerColumns?: InputMaybe<Array<InputMaybe<EditComponentFooterFooterColumnInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  privacyLink?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  siteMapLink?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditHomePageInput = {
  Seo?: InputMaybe<EditComponentSeoSeoInput>;
  created_by?: InputMaybe<Scalars['ID']>;
  faqSection?: InputMaybe<EditComponentHomepageFaqSectionInput>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  newsSection?: InputMaybe<EditComponentHomepageNewsSectionInput>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  registrationInfoSection?: InputMaybe<EditComponentHomepageRegistrationInfoInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditMenuInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  menuSections?: InputMaybe<Array<InputMaybe<EditComponentMenuSectionInput>>>;
  menuSlug?: InputMaybe<Scalars['String']>;
  menuTitle?: InputMaybe<Scalars['String']>;
  menuTotalColumns?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditPageInput = {
  Seo?: InputMaybe<EditComponentSeoSeoInput>;
  blogPosts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  layout?: InputMaybe<Enum_Page_Layout>;
  listingImage?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  pageCategory?: InputMaybe<Scalars['ID']>;
  promoted?: InputMaybe<Scalars['Boolean']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  sections?: InputMaybe<Array<Scalars['PageSectionsDynamicZoneInput']>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditPartnerInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  logo?: InputMaybe<Scalars['ID']>;
  priority?: InputMaybe<Scalars['Float']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditPremiseInput = {
  address?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['String']>;
  localizations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateBasicDocumentInput = {
  data?: InputMaybe<EditBasicDocumentInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateBasicDocumentPayload = {
  __typename?: 'updateBasicDocumentPayload';
  basicDocument?: Maybe<BasicDocument>;
};

export type UpdateBlogPostInput = {
  data?: InputMaybe<EditBlogPostInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateBlogPostPayload = {
  __typename?: 'updateBlogPostPayload';
  blogPost?: Maybe<BlogPost>;
};

export type UpdateBookTagInput = {
  data?: InputMaybe<EditBookTagInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateBookTagPayload = {
  __typename?: 'updateBookTagPayload';
  bookTag?: Maybe<BookTags>;
};

export type UpdateCategoryInput = {
  data?: InputMaybe<EditCategoryInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
};

export type UpdateEventCategoryInput = {
  data?: InputMaybe<EditEventCategoryInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateEventCategoryPayload = {
  __typename?: 'updateEventCategoryPayload';
  eventCategory?: Maybe<EventCategories>;
};

export type UpdateEventLocalityInput = {
  data?: InputMaybe<EditEventLocalityInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateEventLocalityPayload = {
  __typename?: 'updateEventLocalityPayload';
  eventLocality?: Maybe<EventLocalities>;
};

export type UpdateEventTagInput = {
  data?: InputMaybe<EditEventTagInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateEventTagPayload = {
  __typename?: 'updateEventTagPayload';
  eventTag?: Maybe<EventTags>;
};

export type UpdateFileCategoryInput = {
  data?: InputMaybe<EditFileCategoryInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateFileCategoryPayload = {
  __typename?: 'updateFileCategoryPayload';
  fileCategory?: Maybe<FileCategory>;
};

export type UpdateFooterInput = {
  data?: InputMaybe<EditFooterInput>;
};

export type UpdateFooterPayload = {
  __typename?: 'updateFooterPayload';
  footer?: Maybe<Footer>;
};

export type UpdateHomePageInput = {
  data?: InputMaybe<EditHomePageInput>;
};

export type UpdateHomePagePayload = {
  __typename?: 'updateHomePagePayload';
  homePage?: Maybe<HomePage>;
};

export type UpdateMenuInput = {
  data?: InputMaybe<EditMenuInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateMenuPayload = {
  __typename?: 'updateMenuPayload';
  menu?: Maybe<Menu>;
};

export type UpdatePageInput = {
  data?: InputMaybe<EditPageInput>;
  where?: InputMaybe<InputId>;
};

export type UpdatePagePayload = {
  __typename?: 'updatePagePayload';
  page?: Maybe<Page>;
};

export type UpdatePartnerInput = {
  data?: InputMaybe<EditPartnerInput>;
  where?: InputMaybe<InputId>;
};

export type UpdatePartnerPayload = {
  __typename?: 'updatePartnerPayload';
  partner?: Maybe<Partner>;
};

export type UpdatePremiseInput = {
  data?: InputMaybe<EditPremiseInput>;
  where?: InputMaybe<InputId>;
};

export type UpdatePremisePayload = {
  __typename?: 'updatePremisePayload';
  premise?: Maybe<Premise>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Category', id: string, locale?: string | null, title?: string | null } | null> | null };


export const TestDocument = gql`
    query Test {
  categories {
    id
    locale
    title
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Test(variables?: TestQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TestQuery>(TestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Test', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;