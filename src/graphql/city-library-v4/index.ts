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
  I18NLocaleCode: any;
  JSON: any;
  PageSectionsDynamicZoneInput: any;
  Time: any;
  Upload: any;
};

export type BasicDocument = {
  __typename?: 'BasicDocument';
  attachment?: Maybe<UploadFileEntityResponse>;
  author?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date_added?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  file_category?: Maybe<FileCategoryEntityResponse>;
  link?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<Maybe<BasicDocumentMetadataDynamicZone>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BasicDocumentEntity = {
  __typename?: 'BasicDocumentEntity';
  attributes?: Maybe<BasicDocument>;
  id?: Maybe<Scalars['ID']>;
};

export type BasicDocumentEntityResponse = {
  __typename?: 'BasicDocumentEntityResponse';
  data?: Maybe<BasicDocumentEntity>;
};

export type BasicDocumentEntityResponseCollection = {
  __typename?: 'BasicDocumentEntityResponseCollection';
  data: Array<BasicDocumentEntity>;
  meta: ResponseCollectionMeta;
};

export type BasicDocumentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BasicDocumentFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date_added?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  file_category?: InputMaybe<FileCategoryFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BasicDocumentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BasicDocumentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BasicDocumentInput = {
  attachment?: InputMaybe<Scalars['ID']>;
  author?: InputMaybe<Scalars['String']>;
  date_added?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  file_category?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<Scalars['BasicDocumentMetadataDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BasicDocumentMetadataDynamicZone = ComponentMetadataFaktury | ComponentMetadataMetadata | ComponentMetadataObchodnaVerejnaSutaz | ComponentMetadataObjednavky | ComponentMetadataVerejneObstaravanie | ComponentMetadataZmluvy | Error;

export type BasicDocumentRelationResponseCollection = {
  __typename?: 'BasicDocumentRelationResponseCollection';
  data: Array<BasicDocumentEntity>;
};

export type BlogPost = {
  __typename?: 'BlogPost';
  Seo?: Maybe<ComponentSeoSeo>;
  coverMedia?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date_added?: Maybe<Scalars['Date']>;
  parentPage?: Maybe<PageEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sections?: Maybe<Array<Maybe<BlogPostSectionsDynamicZone>>>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogPostEntity = {
  __typename?: 'BlogPostEntity';
  attributes?: Maybe<BlogPost>;
  id?: Maybe<Scalars['ID']>;
};

export type BlogPostEntityResponse = {
  __typename?: 'BlogPostEntityResponse';
  data?: Maybe<BlogPostEntity>;
};

export type BlogPostEntityResponseCollection = {
  __typename?: 'BlogPostEntityResponseCollection';
  data: Array<BlogPostEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogPostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogPostFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date_added?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BlogPostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogPostFiltersInput>>>;
  parentPage?: InputMaybe<PageFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogPostInput = {
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  coverMedia?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['Date']>;
  parentPage?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sections?: InputMaybe<Array<Scalars['BlogPostSectionsDynamicZoneInput']>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BlogPostRelationResponseCollection = {
  __typename?: 'BlogPostRelationResponseCollection';
  data: Array<BlogPostEntity>;
};

export type BlogPostSectionsDynamicZone = ComponentSectionsAccordion | ComponentSectionsColumnedText | ComponentSectionsCta | ComponentSectionsDivider | ComponentSectionsDocuments | ComponentSectionsEventDetails | ComponentSectionsExternalLinks | ComponentSectionsFaq | ComponentSectionsFlatText | ComponentSectionsFlatTextCenter | ComponentSectionsForm | ComponentSectionsGallery | ComponentSectionsLocalityDetails | ComponentSectionsSiteUsefullness | ComponentSectionsSubListing | ComponentSectionsSubpages | ComponentSectionsTable | ComponentSectionsVideo | Error;

export type BookTag = {
  __typename?: 'BookTag';
  createdAt?: Maybe<Scalars['DateTime']>;
  displayName?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BookTagEntity = {
  __typename?: 'BookTagEntity';
  attributes?: Maybe<BookTag>;
  id?: Maybe<Scalars['ID']>;
};

export type BookTagEntityResponse = {
  __typename?: 'BookTagEntityResponse';
  data?: Maybe<BookTagEntity>;
};

export type BookTagEntityResponseCollection = {
  __typename?: 'BookTagEntityResponseCollection';
  data: Array<BookTagEntity>;
  meta: ResponseCollectionMeta;
};

export type BookTagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BookTagFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  displayName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BookTagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BookTagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BookTagInput = {
  displayName?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CategoryRelationResponseCollection>;
  pageLink?: Maybe<ComponentBlocksPageLink>;
  pages?: Maybe<Array<Maybe<ComponentBlocksPageLink>>>;
  parentCategory?: Maybe<CategoryEntityResponse>;
  priority?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  subCategories?: Maybe<CategoryRelationResponseCollection>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CategoryPagesArgs = {
  filters?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CategorySubCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  parentCategory?: InputMaybe<CategoryFiltersInput>;
  priority?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  subCategories?: InputMaybe<CategoryFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  pageLink?: InputMaybe<ComponentBlocksPageLinkInput>;
  pages?: InputMaybe<Array<InputMaybe<ComponentBlocksPageLinkInput>>>;
  parentCategory?: InputMaybe<Scalars['ID']>;
  priority?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  subCategories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentAccordionItemsFlatText = {
  __typename?: 'ComponentAccordionItemsFlatText';
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentAccordionItemsFlatTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsFlatTextFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAccordionItemsFlatTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsFlatTextFiltersInput>>>;
};

export type ComponentAccordionItemsForm = {
  __typename?: 'ComponentAccordionItemsForm';
  category?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  type?: Maybe<Enum_Componentaccordionitemsform_Type>;
};

export type ComponentAccordionItemsFormFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsFormFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAccordionItemsFormFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsFormFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
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

export type ComponentAccordionItemsTableRowFiltersInput = {
  accordionCategory?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsTableRowFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAccordionItemsTableRowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsTableRowFiltersInput>>>;
  tableCategory?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
  valueAlign?: InputMaybe<StringFilterInput>;
};

export type ComponentAddressAddress = {
  __typename?: 'ComponentAddressAddress';
  id: Scalars['ID'];
  navigateTo?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksAccordionItem = {
  __typename?: 'ComponentBlocksAccordionItem';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
};

export type ComponentBlocksAccordionItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksAccordionItemFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksAccordionItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksAccordionItemFiltersInput>>>;
};

export type ComponentBlocksExternalLink = {
  __typename?: 'ComponentBlocksExternalLink';
  category?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksExternalLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksExternalLinkFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksExternalLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksExternalLinkFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksPageLink = {
  __typename?: 'ComponentBlocksPageLink';
  id: Scalars['ID'];
  page?: Maybe<PageEntityResponse>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksPageLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksPageLinkFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksPageLinkFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksPageLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksSubpage = {
  __typename?: 'ComponentBlocksSubpage';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  page?: Maybe<PageEntityResponse>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksSubpageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksSubpageFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksSubpageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksSubpageFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksTableRow = {
  __typename?: 'ComponentBlocksTableRow';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  valueAlign?: Maybe<Enum_Componentblockstablerow_Valuealign>;
};

export type ComponentFooterFooterColumn = {
  __typename?: 'ComponentFooterFooterColumn';
  footerLink?: Maybe<Array<Maybe<ComponentFooterFooterLink>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentFooterFooterColumnFooterLinkArgs = {
  filters?: InputMaybe<ComponentFooterFooterLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentFooterFooterColumnFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFooterFooterColumnFiltersInput>>>;
  not?: InputMaybe<ComponentFooterFooterColumnFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterFooterColumnFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentFooterFooterColumnInput = {
  footerLink?: InputMaybe<Array<InputMaybe<ComponentFooterFooterLinkInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentFooterFooterLink = {
  __typename?: 'ComponentFooterFooterLink';
  id: Scalars['ID'];
  otherSite?: Maybe<Scalars['String']>;
  redirectTo?: Maybe<PageEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentFooterFooterLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFooterFooterLinkFiltersInput>>>;
  not?: InputMaybe<ComponentFooterFooterLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterFooterLinkFiltersInput>>>;
  otherSite?: InputMaybe<StringFilterInput>;
  redirectTo?: InputMaybe<PageFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentFooterFooterLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  otherSite?: InputMaybe<Scalars['String']>;
  redirectTo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentGuestsGuest = {
  __typename?: 'ComponentGuestsGuest';
  avatar?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

export type ComponentGuestsGuestFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentGuestsGuestFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentGuestsGuestFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGuestsGuestFiltersInput>>>;
  surname?: InputMaybe<StringFilterInput>;
};

export type ComponentGuestsGuestInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
};

export type ComponentHomepageBenefits = {
  __typename?: 'ComponentHomepageBenefits';
  benefit?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentHomepageBenefitsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomepageBenefitsFiltersInput>>>;
  benefit?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomepageBenefitsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomepageBenefitsFiltersInput>>>;
};

export type ComponentHomepageBenefitsInput = {
  benefit?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentHomepageCta = {
  __typename?: 'ComponentHomepageCta';
  ctaRedirectTo?: Maybe<PageEntityResponse>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentHomepageCtaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomepageCtaFiltersInput>>>;
  ctaRedirectTo?: InputMaybe<PageFiltersInput>;
  not?: InputMaybe<ComponentHomepageCtaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomepageCtaFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentHomepageCtaInput = {
  ctaRedirectTo?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomepageFaqSection = {
  __typename?: 'ComponentHomepageFaqSection';
  ctas?: Maybe<Array<Maybe<ComponentHomepageCta>>>;
  faqs?: Maybe<Array<Maybe<ComponentHomepageFaqs>>>;
  id: Scalars['ID'];
  redirectTo?: Maybe<PageEntityResponse>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentHomepageFaqSectionCtasArgs = {
  filters?: InputMaybe<ComponentHomepageCtaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentHomepageFaqSectionFaqsArgs = {
  filters?: InputMaybe<ComponentHomepageFaqsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomepageFaqSectionInput = {
  ctas?: InputMaybe<Array<InputMaybe<ComponentHomepageCtaInput>>>;
  faqs?: InputMaybe<Array<InputMaybe<ComponentHomepageFaqsInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  redirectTo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomepageFaqs = {
  __typename?: 'ComponentHomepageFaqs';
  answer?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  question?: Maybe<Scalars['String']>;
};

export type ComponentHomepageFaqsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomepageFaqsFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomepageFaqsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomepageFaqsFiltersInput>>>;
  question?: InputMaybe<StringFilterInput>;
};

export type ComponentHomepageFaqsInput = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  question?: InputMaybe<Scalars['String']>;
};

export type ComponentHomepageNewsSection = {
  __typename?: 'ComponentHomepageNewsSection';
  id: Scalars['ID'];
  redirectTo?: Maybe<PageEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentHomepageNewsSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  redirectTo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentHomepageRegistrationInfo = {
  __typename?: 'ComponentHomepageRegistrationInfo';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  redirectTo?: Maybe<PageEntityResponse>;
  registrationBenefits?: Maybe<Array<Maybe<ComponentHomepageBenefits>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentHomepageRegistrationInfoRegistrationBenefitsArgs = {
  filters?: InputMaybe<ComponentHomepageBenefitsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomepageRegistrationInfoInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  redirectTo?: InputMaybe<Scalars['ID']>;
  registrationBenefits?: InputMaybe<Array<InputMaybe<ComponentHomepageBenefitsInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentLocalityPartsGalleryParts = {
  __typename?: 'ComponentLocalityPartsGalleryParts';
  Description?: Maybe<Scalars['String']>;
  Photo?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentLocalityPartsGalleryPartsFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentLocalityPartsGalleryPartsFiltersInput>>>;
  not?: InputMaybe<ComponentLocalityPartsGalleryPartsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLocalityPartsGalleryPartsFiltersInput>>>;
};

export type ComponentLocalityPartsLocalitySection = {
  __typename?: 'ComponentLocalityPartsLocalitySection';
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

export type ComponentLocalityPartsLocalitySectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLocalityPartsLocalitySectionFiltersInput>>>;
  isMainSection?: InputMaybe<BooleanFilterInput>;
  localitySectionDescription?: InputMaybe<StringFilterInput>;
  localitySectionEmail?: InputMaybe<StringFilterInput>;
  localitySectionPhone?: InputMaybe<StringFilterInput>;
  localitySectionTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLocalityPartsLocalitySectionFiltersInput>;
  openingHoursFridayFrom?: InputMaybe<TimeFilterInput>;
  openingHoursFridayTo?: InputMaybe<TimeFilterInput>;
  openingHoursMondayFrom?: InputMaybe<TimeFilterInput>;
  openingHoursMondayTo?: InputMaybe<TimeFilterInput>;
  openingHoursSaturdayFrom?: InputMaybe<TimeFilterInput>;
  openingHoursSaturdayTo?: InputMaybe<TimeFilterInput>;
  openingHoursSundayFrom?: InputMaybe<TimeFilterInput>;
  openingHoursSundayTo?: InputMaybe<TimeFilterInput>;
  openingHoursThursdayFrom?: InputMaybe<TimeFilterInput>;
  openingHoursThursdayTo?: InputMaybe<TimeFilterInput>;
  openingHoursTuesdayFrom?: InputMaybe<TimeFilterInput>;
  openingHoursTuesdayTo?: InputMaybe<TimeFilterInput>;
  openingHoursWednesdayFrom?: InputMaybe<TimeFilterInput>;
  openingHoursWednesdayTo?: InputMaybe<TimeFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLocalityPartsLocalitySectionFiltersInput>>>;
};

export type ComponentLocalityPartsLocalityServices = {
  __typename?: 'ComponentLocalityPartsLocalityServices';
  id: Scalars['ID'];
  page?: Maybe<PageEntityResponse>;
};

export type ComponentLocalityPartsLocalityServicesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLocalityPartsLocalityServicesFiltersInput>>>;
  not?: InputMaybe<ComponentLocalityPartsLocalityServicesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLocalityPartsLocalityServicesFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
};

export type ComponentMenuSectionLinks = {
  __typename?: 'ComponentMenuSectionLinks';
  id: Scalars['ID'];
  sectionLinkPage?: Maybe<PageEntityResponse>;
  sectionLinkTitle?: Maybe<Scalars['String']>;
};

export type ComponentMenuSectionLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuSectionLinksFiltersInput>>>;
  not?: InputMaybe<ComponentMenuSectionLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuSectionLinksFiltersInput>>>;
  sectionLinkPage?: InputMaybe<PageFiltersInput>;
  sectionLinkTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentMenuSectionLinksInput = {
  id?: InputMaybe<Scalars['ID']>;
  sectionLinkPage?: InputMaybe<Scalars['ID']>;
  sectionLinkTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentMenuSections = {
  __typename?: 'ComponentMenuSections';
  id: Scalars['ID'];
  sectionColumnSpan?: Maybe<Scalars['Int']>;
  sectionLinks?: Maybe<Array<Maybe<ComponentMenuSectionLinks>>>;
  sectionPage?: Maybe<PageEntityResponse>;
  sectionTitle?: Maybe<Scalars['String']>;
};


export type ComponentMenuSectionsSectionLinksArgs = {
  filters?: InputMaybe<ComponentMenuSectionLinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentMenuSectionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuSectionsFiltersInput>>>;
  not?: InputMaybe<ComponentMenuSectionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuSectionsFiltersInput>>>;
  sectionColumnSpan?: InputMaybe<IntFilterInput>;
  sectionPage?: InputMaybe<PageFiltersInput>;
  sectionTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentMenuSectionsInput = {
  id?: InputMaybe<Scalars['ID']>;
  sectionColumnSpan?: InputMaybe<Scalars['Int']>;
  sectionLinks?: InputMaybe<Array<InputMaybe<ComponentMenuSectionLinksInput>>>;
  sectionPage?: InputMaybe<Scalars['ID']>;
  sectionTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentMenuSubsection = {
  __typename?: 'ComponentMenuSubsection';
  columnSpan?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  subsectionLinks?: Maybe<Array<Maybe<ComponentMenuSubsectionLinks>>>;
  subsectionTitle?: Maybe<Scalars['String']>;
};


export type ComponentMenuSubsectionSubsectionLinksArgs = {
  filters?: InputMaybe<ComponentMenuSubsectionLinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentMenuSubsectionLinks = {
  __typename?: 'ComponentMenuSubsectionLinks';
  id: Scalars['ID'];
  page?: Maybe<PageEntityResponse>;
  subsectionLinkTitle?: Maybe<Scalars['String']>;
};

export type ComponentMenuSubsectionLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuSubsectionLinksFiltersInput>>>;
  not?: InputMaybe<ComponentMenuSubsectionLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuSubsectionLinksFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  subsectionLinkTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentMetadataFaktury = {
  __typename?: 'ComponentMetadataFaktury';
  attachment?: Maybe<UploadFileEntityResponse>;
  date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
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

export type ComponentMetadataObchodnaVerejnaSutaz = {
  __typename?: 'ComponentMetadataObchodnaVerejnaSutaz';
  amount?: Maybe<Scalars['String']>;
  attachment?: Maybe<UploadFileEntityResponse>;
  date_added?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  number?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
};

export type ComponentMetadataObjednavky = {
  __typename?: 'ComponentMetadataObjednavky';
  attachment?: Maybe<UploadFileEntityResponse>;
  date_added?: Maybe<Scalars['Date']>;
  date_period?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentMetadataVerejneObstaravanie = {
  __typename?: 'ComponentMetadataVerejneObstaravanie';
  amount?: Maybe<Scalars['String']>;
  attachment?: Maybe<UploadFileEntityResponse>;
  date_added?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  number?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
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

export type ComponentSectionsAccordion = {
  __typename?: 'ComponentSectionsAccordion';
  flatText?: Maybe<Array<Maybe<ComponentAccordionItemsFlatText>>>;
  forms?: Maybe<Array<Maybe<ComponentAccordionItemsForm>>>;
  id: Scalars['ID'];
  tableRows?: Maybe<Array<Maybe<ComponentAccordionItemsTableRow>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsAccordionFlatTextArgs = {
  filters?: InputMaybe<ComponentAccordionItemsFlatTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsAccordionFormsArgs = {
  filters?: InputMaybe<ComponentAccordionItemsFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsAccordionTableRowsArgs = {
  filters?: InputMaybe<ComponentAccordionItemsTableRowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsColumnedText = {
  __typename?: 'ComponentSectionsColumnedText';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsCta = {
  __typename?: 'ComponentSectionsCta';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentSectionsDivider = {
  __typename?: 'ComponentSectionsDivider';
  id: Scalars['ID'];
  shown?: Maybe<Scalars['Boolean']>;
};

export type ComponentSectionsDocuments = {
  __typename?: 'ComponentSectionsDocuments';
  basicDocuments?: Maybe<BasicDocumentRelationResponseCollection>;
  id: Scalars['ID'];
  moreLink?: Maybe<Array<Maybe<ComponentBlocksPageLink>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsDocumentsBasicDocumentsArgs = {
  filters?: InputMaybe<BasicDocumentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsDocumentsMoreLinkArgs = {
  filters?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsEventDetails = {
  __typename?: 'ComponentSectionsEventDetails';
  dateFrom?: Maybe<Scalars['DateTime']>;
  dateTo?: Maybe<Scalars['DateTime']>;
  eventCategory?: Maybe<EventCategoryEntityResponse>;
  eventCoverImage?: Maybe<UploadFileEntityResponse>;
  eventDescription?: Maybe<Scalars['String']>;
  eventLocality?: Maybe<EventLocalityEntityResponse>;
  eventTags?: Maybe<EventTagRelationResponseCollection>;
  eventTitle?: Maybe<Scalars['String']>;
  guests?: Maybe<Array<Maybe<ComponentGuestsGuest>>>;
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
};


export type ComponentSectionsEventDetailsEventTagsArgs = {
  filters?: InputMaybe<EventTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsEventDetailsGuestsArgs = {
  filters?: InputMaybe<ComponentGuestsGuestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsExternalLinks = {
  __typename?: 'ComponentSectionsExternalLinks';
  descriptions?: Maybe<Array<Maybe<ComponentAccordionItemsFlatText>>>;
  externalLinks?: Maybe<Array<Maybe<ComponentBlocksExternalLink>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsExternalLinksDescriptionsArgs = {
  filters?: InputMaybe<ComponentAccordionItemsFlatTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsExternalLinksExternalLinksArgs = {
  filters?: InputMaybe<ComponentBlocksExternalLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsFaq = {
  __typename?: 'ComponentSectionsFaq';
  id: Scalars['ID'];
  questions?: Maybe<Array<Maybe<ComponentBlocksAccordionItem>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsFaqQuestionsArgs = {
  filters?: InputMaybe<ComponentBlocksAccordionItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsFlatText = {
  __typename?: 'ComponentSectionsFlatText';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSectionsFlatTextCenter = {
  __typename?: 'ComponentSectionsFlatTextCenter';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSectionsForm = {
  __typename?: 'ComponentSectionsForm';
  id: Scalars['ID'];
  type?: Maybe<Enum_Componentsectionsform_Type>;
};

export type ComponentSectionsGallery = {
  __typename?: 'ComponentSectionsGallery';
  Gallery?: Maybe<Array<Maybe<ComponentLocalityPartsGalleryParts>>>;
  id: Scalars['ID'];
};


export type ComponentSectionsGalleryGalleryArgs = {
  filters?: InputMaybe<ComponentLocalityPartsGalleryPartsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsLocalityDetails = {
  __typename?: 'ComponentSectionsLocalityDetails';
  displayOnHomePage?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isMainLocality?: Maybe<Scalars['Boolean']>;
  localityAddress?: Maybe<ComponentAddressAddress>;
  localityCoverImage?: Maybe<UploadFileEntityResponse>;
  localityDescription?: Maybe<Scalars['String']>;
  localityLatitude?: Maybe<Scalars['Float']>;
  localityLongitude?: Maybe<Scalars['Float']>;
  localityMap?: Maybe<UploadFileEntityResponse>;
  localitySections?: Maybe<Array<Maybe<ComponentLocalityPartsLocalitySection>>>;
  localityServices?: Maybe<Array<Maybe<ComponentLocalityPartsLocalityServices>>>;
  localityTitle?: Maybe<Scalars['String']>;
};


export type ComponentSectionsLocalityDetailsLocalitySectionsArgs = {
  filters?: InputMaybe<ComponentLocalityPartsLocalitySectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsLocalityDetailsLocalityServicesArgs = {
  filters?: InputMaybe<ComponentLocalityPartsLocalityServicesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsParnters = {
  __typename?: 'ComponentSectionsParnters';
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsSiteUsefullness = {
  __typename?: 'ComponentSectionsSiteUsefullness';
  id: Scalars['ID'];
  thankYouMessage?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsSubListing = {
  __typename?: 'ComponentSectionsSubListing';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentSectionsSubpages = {
  __typename?: 'ComponentSectionsSubpages';
  id: Scalars['ID'];
  subpages?: Maybe<Array<Maybe<ComponentBlocksSubpage>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsSubpagesSubpagesArgs = {
  filters?: InputMaybe<ComponentBlocksSubpageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsTable = {
  __typename?: 'ComponentSectionsTable';
  id: Scalars['ID'];
  primaryTitle?: Maybe<Scalars['String']>;
  rows?: Maybe<Array<Maybe<ComponentAccordionItemsTableRow>>>;
  secondaryTitle?: Maybe<Scalars['String']>;
};


export type ComponentSectionsTableRowsArgs = {
  filters?: InputMaybe<ComponentAccordionItemsTableRowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsVideo = {
  __typename?: 'ComponentSectionsVideo';
  id: Scalars['ID'];
  media?: Maybe<UploadFileEntityResponse>;
  youtube_url?: Maybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
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

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  Seo?: Maybe<ComponentSeoSeo>;
  coverImage?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateFrom?: Maybe<Scalars['DateTime']>;
  dateTo?: Maybe<Scalars['DateTime']>;
  date_added?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  eventCategory?: Maybe<EventCategoryEntityResponse>;
  eventLocality?: Maybe<EventLocalityEntityResponse>;
  eventTags?: Maybe<EventTagRelationResponseCollection>;
  guests?: Maybe<Array<Maybe<ComponentGuestsGuest>>>;
  listingImage?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<EventRelationResponseCollection>;
  price?: Maybe<Scalars['Float']>;
  promoted?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  showForm?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EventEventTagsArgs = {
  filters?: InputMaybe<EventTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EventGuestsArgs = {
  filters?: InputMaybe<ComponentGuestsGuestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EventLocalizationsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventCategory = {
  __typename?: 'EventCategory';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<EventCategoryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EventCategoryLocalizationsArgs = {
  filters?: InputMaybe<EventCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventCategoryEntity = {
  __typename?: 'EventCategoryEntity';
  attributes?: Maybe<EventCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type EventCategoryEntityResponse = {
  __typename?: 'EventCategoryEntityResponse';
  data?: Maybe<EventCategoryEntity>;
};

export type EventCategoryEntityResponseCollection = {
  __typename?: 'EventCategoryEntityResponseCollection';
  data: Array<EventCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type EventCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EventCategoryFiltersInput>;
  not?: InputMaybe<EventCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventCategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventCategoryInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EventCategoryRelationResponseCollection = {
  __typename?: 'EventCategoryRelationResponseCollection';
  data: Array<EventCategoryEntity>;
};

export type EventEntity = {
  __typename?: 'EventEntity';
  attributes?: Maybe<Event>;
  id?: Maybe<Scalars['ID']>;
};

export type EventEntityResponse = {
  __typename?: 'EventEntityResponse';
  data?: Maybe<EventEntity>;
};

export type EventEntityResponseCollection = {
  __typename?: 'EventEntityResponseCollection';
  data: Array<EventEntity>;
  meta: ResponseCollectionMeta;
};

export type EventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dateFrom?: InputMaybe<DateTimeFilterInput>;
  dateTo?: InputMaybe<DateTimeFilterInput>;
  date_added?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  eventCategory?: InputMaybe<EventCategoryFiltersInput>;
  eventLocality?: InputMaybe<EventLocalityFiltersInput>;
  eventTags?: InputMaybe<EventTagFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EventFiltersInput>;
  not?: InputMaybe<EventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  promoted?: InputMaybe<BooleanFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  showForm?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventInput = {
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  coverImage?: InputMaybe<Scalars['ID']>;
  dateFrom?: InputMaybe<Scalars['DateTime']>;
  dateTo?: InputMaybe<Scalars['DateTime']>;
  date_added?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  eventCategory?: InputMaybe<Scalars['ID']>;
  eventLocality?: InputMaybe<Scalars['ID']>;
  eventTags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  guests?: InputMaybe<Array<InputMaybe<ComponentGuestsGuestInput>>>;
  listingImage?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  promoted?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  showForm?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EventLocality = {
  __typename?: 'EventLocality';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventAddress?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<EventLocalityRelationResponseCollection>;
  navigateTo?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EventLocalityLocalizationsArgs = {
  filters?: InputMaybe<EventLocalityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventLocalityEntity = {
  __typename?: 'EventLocalityEntity';
  attributes?: Maybe<EventLocality>;
  id?: Maybe<Scalars['ID']>;
};

export type EventLocalityEntityResponse = {
  __typename?: 'EventLocalityEntityResponse';
  data?: Maybe<EventLocalityEntity>;
};

export type EventLocalityEntityResponseCollection = {
  __typename?: 'EventLocalityEntityResponseCollection';
  data: Array<EventLocalityEntity>;
  meta: ResponseCollectionMeta;
};

export type EventLocalityFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventLocalityFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  eventAddress?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EventLocalityFiltersInput>;
  navigateTo?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EventLocalityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventLocalityFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventLocalityInput = {
  eventAddress?: InputMaybe<Scalars['String']>;
  navigateTo?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EventLocalityRelationResponseCollection = {
  __typename?: 'EventLocalityRelationResponseCollection';
  data: Array<EventLocalityEntity>;
};

export type EventRelationResponseCollection = {
  __typename?: 'EventRelationResponseCollection';
  data: Array<EventEntity>;
};

export type EventSubscription = {
  __typename?: 'EventSubscription';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userMail?: Maybe<Scalars['String']>;
};

export type EventSubscriptionEntity = {
  __typename?: 'EventSubscriptionEntity';
  attributes?: Maybe<EventSubscription>;
  id?: Maybe<Scalars['ID']>;
};

export type EventSubscriptionEntityResponse = {
  __typename?: 'EventSubscriptionEntityResponse';
  data?: Maybe<EventSubscriptionEntity>;
};

export type EventSubscriptionEntityResponseCollection = {
  __typename?: 'EventSubscriptionEntityResponseCollection';
  data: Array<EventSubscriptionEntity>;
  meta: ResponseCollectionMeta;
};

export type EventSubscriptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventSubscriptionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EventSubscriptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventSubscriptionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  refreshToken?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  userMail?: InputMaybe<StringFilterInput>;
};

export type EventSubscriptionInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  userMail?: InputMaybe<Scalars['String']>;
};

export type EventTag = {
  __typename?: 'EventTag';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<EventTagRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EventTagLocalizationsArgs = {
  filters?: InputMaybe<EventTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventTagEntity = {
  __typename?: 'EventTagEntity';
  attributes?: Maybe<EventTag>;
  id?: Maybe<Scalars['ID']>;
};

export type EventTagEntityResponse = {
  __typename?: 'EventTagEntityResponse';
  data?: Maybe<EventTagEntity>;
};

export type EventTagEntityResponseCollection = {
  __typename?: 'EventTagEntityResponseCollection';
  data: Array<EventTagEntity>;
  meta: ResponseCollectionMeta;
};

export type EventTagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventTagFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EventTagFiltersInput>;
  not?: InputMaybe<EventTagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventTagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventTagInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EventTagRelationResponseCollection = {
  __typename?: 'EventTagRelationResponseCollection';
  data: Array<EventTagEntity>;
};

export type FileCategory = {
  __typename?: 'FileCategory';
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  page?: Maybe<PageEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileCategoryEntity = {
  __typename?: 'FileCategoryEntity';
  attributes?: Maybe<FileCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type FileCategoryEntityResponse = {
  __typename?: 'FileCategoryEntityResponse';
  data?: Maybe<FileCategoryEntity>;
};

export type FileCategoryEntityResponseCollection = {
  __typename?: 'FileCategoryEntityResponseCollection';
  data: Array<FileCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type FileCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FileCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<FileCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FileCategoryFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FileCategoryInput = {
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Footer = {
  __typename?: 'Footer';
  copyrightText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  footerColumns?: Maybe<Array<Maybe<ComponentFooterFooterColumn>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<FooterRelationResponseCollection>;
  privacyLink?: Maybe<PageEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  siteMapLink?: Maybe<PageEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type FooterFooterColumnsArgs = {
  filters?: InputMaybe<ComponentFooterFooterColumnFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FooterLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  copyrightText?: InputMaybe<Scalars['String']>;
  footerColumns?: InputMaybe<Array<InputMaybe<ComponentFooterFooterColumnInput>>>;
  privacyLink?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  siteMapLink?: InputMaybe<Scalars['ID']>;
};

export type FooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  data: Array<FooterEntity>;
};

export type GenericMorph = BasicDocument | BlogPost | BookTag | Category | ComponentAccordionItemsFlatText | ComponentAccordionItemsForm | ComponentAccordionItemsTableRow | ComponentAddressAddress | ComponentBlocksAccordionItem | ComponentBlocksExternalLink | ComponentBlocksPageLink | ComponentBlocksSubpage | ComponentBlocksTableRow | ComponentFooterFooterColumn | ComponentFooterFooterLink | ComponentGuestsGuest | ComponentHomepageBenefits | ComponentHomepageCta | ComponentHomepageFaqSection | ComponentHomepageFaqs | ComponentHomepageNewsSection | ComponentHomepageRegistrationInfo | ComponentLocalityPartsGalleryParts | ComponentLocalityPartsLocalitySection | ComponentLocalityPartsLocalityServices | ComponentMenuSectionLinks | ComponentMenuSections | ComponentMenuSubsection | ComponentMenuSubsectionLinks | ComponentMetadataFaktury | ComponentMetadataMetadata | ComponentMetadataObchodnaVerejnaSutaz | ComponentMetadataObjednavky | ComponentMetadataVerejneObstaravanie | ComponentMetadataZmluvy | ComponentSectionsAccordion | ComponentSectionsColumnedText | ComponentSectionsCta | ComponentSectionsDivider | ComponentSectionsDocuments | ComponentSectionsEventDetails | ComponentSectionsExternalLinks | ComponentSectionsFaq | ComponentSectionsFlatText | ComponentSectionsFlatTextCenter | ComponentSectionsForm | ComponentSectionsGallery | ComponentSectionsLocalityDetails | ComponentSectionsParnters | ComponentSectionsSiteUsefullness | ComponentSectionsSubListing | ComponentSectionsSubpages | ComponentSectionsTable | ComponentSectionsVideo | ComponentSeoSeo | Event | EventCategory | EventLocality | EventSubscription | EventTag | FileCategory | Footer | HomePage | I18NLocale | Menu | Page | Partner | Premise | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type HomePage = {
  __typename?: 'HomePage';
  Seo?: Maybe<ComponentSeoSeo>;
  createdAt?: Maybe<Scalars['DateTime']>;
  faqSection?: Maybe<ComponentHomepageFaqSection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  newsSection?: Maybe<ComponentHomepageNewsSection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  registrationInfoSection?: Maybe<ComponentHomepageRegistrationInfo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomePageLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  faqSection?: InputMaybe<ComponentHomepageFaqSectionInput>;
  newsSection?: InputMaybe<ComponentHomepageNewsSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  registrationInfoSection?: InputMaybe<ComponentHomepageRegistrationInfoInput>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Menu = {
  __typename?: 'Menu';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<MenuRelationResponseCollection>;
  menuSections?: Maybe<Array<Maybe<ComponentMenuSections>>>;
  menuSlug?: Maybe<Scalars['String']>;
  menuTitle?: Maybe<Scalars['String']>;
  menuTotalColumns?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type MenuLocalizationsArgs = {
  filters?: InputMaybe<MenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MenuMenuSectionsArgs = {
  filters?: InputMaybe<ComponentMenuSectionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MenuEntity = {
  __typename?: 'MenuEntity';
  attributes?: Maybe<Menu>;
  id?: Maybe<Scalars['ID']>;
};

export type MenuEntityResponse = {
  __typename?: 'MenuEntityResponse';
  data?: Maybe<MenuEntity>;
};

export type MenuEntityResponseCollection = {
  __typename?: 'MenuEntityResponseCollection';
  data: Array<MenuEntity>;
  meta: ResponseCollectionMeta;
};

export type MenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MenuFiltersInput>;
  menuSlug?: InputMaybe<StringFilterInput>;
  menuTitle?: InputMaybe<StringFilterInput>;
  menuTotalColumns?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<MenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenuFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenuInput = {
  menuSections?: InputMaybe<Array<InputMaybe<ComponentMenuSectionsInput>>>;
  menuSlug?: InputMaybe<Scalars['String']>;
  menuTitle?: InputMaybe<Scalars['String']>;
  menuTotalColumns?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MenuRelationResponseCollection = {
  __typename?: 'MenuRelationResponseCollection';
  data: Array<MenuEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBasicDocument?: Maybe<BasicDocumentEntityResponse>;
  createBlogPost?: Maybe<BlogPostEntityResponse>;
  createBookTag?: Maybe<BookTagEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createEvent?: Maybe<EventEntityResponse>;
  createEventCategory?: Maybe<EventCategoryEntityResponse>;
  createEventCategoryLocalization?: Maybe<EventCategoryEntityResponse>;
  createEventLocality?: Maybe<EventLocalityEntityResponse>;
  createEventLocalityLocalization?: Maybe<EventLocalityEntityResponse>;
  createEventLocalization?: Maybe<EventEntityResponse>;
  createEventSubscription?: Maybe<EventSubscriptionEntityResponse>;
  createEventTag?: Maybe<EventTagEntityResponse>;
  createEventTagLocalization?: Maybe<EventTagEntityResponse>;
  createFileCategory?: Maybe<FileCategoryEntityResponse>;
  createFooterLocalization?: Maybe<FooterEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createMenu?: Maybe<MenuEntityResponse>;
  createMenuLocalization?: Maybe<MenuEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createPartner?: Maybe<PartnerEntityResponse>;
  createPartnerLocalization?: Maybe<PartnerEntityResponse>;
  createPremise?: Maybe<PremiseEntityResponse>;
  createPremiseLocalization?: Maybe<PremiseEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBasicDocument?: Maybe<BasicDocumentEntityResponse>;
  deleteBlogPost?: Maybe<BlogPostEntityResponse>;
  deleteBookTag?: Maybe<BookTagEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteEvent?: Maybe<EventEntityResponse>;
  deleteEventCategory?: Maybe<EventCategoryEntityResponse>;
  deleteEventLocality?: Maybe<EventLocalityEntityResponse>;
  deleteEventSubscription?: Maybe<EventSubscriptionEntityResponse>;
  deleteEventTag?: Maybe<EventTagEntityResponse>;
  deleteFileCategory?: Maybe<FileCategoryEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteMenu?: Maybe<MenuEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deletePartner?: Maybe<PartnerEntityResponse>;
  deletePremise?: Maybe<PremiseEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBasicDocument?: Maybe<BasicDocumentEntityResponse>;
  updateBlogPost?: Maybe<BlogPostEntityResponse>;
  updateBookTag?: Maybe<BookTagEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateEvent?: Maybe<EventEntityResponse>;
  updateEventCategory?: Maybe<EventCategoryEntityResponse>;
  updateEventLocality?: Maybe<EventLocalityEntityResponse>;
  updateEventSubscription?: Maybe<EventSubscriptionEntityResponse>;
  updateEventTag?: Maybe<EventTagEntityResponse>;
  updateFileCategory?: Maybe<FileCategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateMenu?: Maybe<MenuEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updatePartner?: Maybe<PartnerEntityResponse>;
  updatePremise?: Maybe<PremiseEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateBasicDocumentArgs = {
  data: BasicDocumentInput;
};


export type MutationCreateBlogPostArgs = {
  data: BlogPostInput;
};


export type MutationCreateBookTagArgs = {
  data: BookTagInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateEventArgs = {
  data: EventInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateEventCategoryArgs = {
  data: EventCategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateEventCategoryLocalizationArgs = {
  data?: InputMaybe<EventCategoryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateEventLocalityArgs = {
  data: EventLocalityInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateEventLocalityLocalizationArgs = {
  data?: InputMaybe<EventLocalityInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateEventLocalizationArgs = {
  data?: InputMaybe<EventInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateEventSubscriptionArgs = {
  data: EventSubscriptionInput;
};


export type MutationCreateEventTagArgs = {
  data: EventTagInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateEventTagLocalizationArgs = {
  data?: InputMaybe<EventTagInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateFileCategoryArgs = {
  data: FileCategoryInput;
};


export type MutationCreateFooterLocalizationArgs = {
  data?: InputMaybe<FooterInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomePageLocalizationArgs = {
  data?: InputMaybe<HomePageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateMenuArgs = {
  data: MenuInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateMenuLocalizationArgs = {
  data?: InputMaybe<MenuInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageLocalizationArgs = {
  data?: InputMaybe<PageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePartnerArgs = {
  data: PartnerInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePartnerLocalizationArgs = {
  data?: InputMaybe<PartnerInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePremiseArgs = {
  data: PremiseInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePremiseLocalizationArgs = {
  data?: InputMaybe<PremiseInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteBasicDocumentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBlogPostArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBookTagArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteEventCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteEventLocalityArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteEventSubscriptionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEventTagArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteFileCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePartnerArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePremiseArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
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
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateBasicDocumentArgs = {
  data: BasicDocumentInput;
  id: Scalars['ID'];
};


export type MutationUpdateBlogPostArgs = {
  data: BlogPostInput;
  id: Scalars['ID'];
};


export type MutationUpdateBookTagArgs = {
  data: BookTagInput;
  id: Scalars['ID'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateEventArgs = {
  data: EventInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateEventCategoryArgs = {
  data: EventCategoryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateEventLocalityArgs = {
  data: EventLocalityInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateEventSubscriptionArgs = {
  data: EventSubscriptionInput;
  id: Scalars['ID'];
};


export type MutationUpdateEventTagArgs = {
  data: EventTagInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileCategoryArgs = {
  data: FileCategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateMenuArgs = {
  data: MenuInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePartnerArgs = {
  data: PartnerInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePremiseArgs = {
  data: PremiseInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Page = {
  __typename?: 'Page';
  Seo?: Maybe<ComponentSeoSeo>;
  blogPosts?: Maybe<BlogPostRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date_added?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  layout?: Maybe<Enum_Page_Layout>;
  listingImage?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PageRelationResponseCollection>;
  pageCategory?: Maybe<CategoryEntityResponse>;
  promoted?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageBlogPostsArgs = {
  filters?: InputMaybe<BlogPostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars['ID']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  blogPosts?: InputMaybe<BlogPostFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date_added?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  layout?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  pageCategory?: InputMaybe<CategoryFiltersInput>;
  promoted?: InputMaybe<BooleanFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  blogPosts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  date_added?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  layout?: InputMaybe<Enum_Page_Layout>;
  listingImage?: InputMaybe<Scalars['ID']>;
  pageCategory?: InputMaybe<Scalars['ID']>;
  promoted?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sections?: InputMaybe<Array<Scalars['PageSectionsDynamicZoneInput']>>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type PageSectionsDynamicZone = ComponentSectionsAccordion | ComponentSectionsColumnedText | ComponentSectionsCta | ComponentSectionsDivider | ComponentSectionsDocuments | ComponentSectionsEventDetails | ComponentSectionsExternalLinks | ComponentSectionsFaq | ComponentSectionsFlatText | ComponentSectionsFlatTextCenter | ComponentSectionsForm | ComponentSectionsGallery | ComponentSectionsLocalityDetails | ComponentSectionsSiteUsefullness | ComponentSectionsSubListing | ComponentSectionsSubpages | ComponentSectionsTable | ComponentSectionsVideo | Error;

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Partner = {
  __typename?: 'Partner';
  createdAt?: Maybe<Scalars['DateTime']>;
  featured?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PartnerRelationResponseCollection>;
  logo?: Maybe<UploadFileEntityResponse>;
  priority?: Maybe<Scalars['Float']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};


export type PartnerLocalizationsArgs = {
  filters?: InputMaybe<PartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PartnerEntity = {
  __typename?: 'PartnerEntity';
  attributes?: Maybe<Partner>;
  id?: Maybe<Scalars['ID']>;
};

export type PartnerEntityResponse = {
  __typename?: 'PartnerEntityResponse';
  data?: Maybe<PartnerEntity>;
};

export type PartnerEntityResponseCollection = {
  __typename?: 'PartnerEntityResponseCollection';
  data: Array<PartnerEntity>;
  meta: ResponseCollectionMeta;
};

export type PartnerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PartnerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  featured?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PartnerFiltersInput>;
  not?: InputMaybe<PartnerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PartnerFiltersInput>>>;
  priority?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type PartnerInput = {
  featured?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['ID']>;
  priority?: InputMaybe<Scalars['Float']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PartnerRelationResponseCollection = {
  __typename?: 'PartnerRelationResponseCollection';
  data: Array<PartnerEntity>;
};

export type Premise = {
  __typename?: 'Premise';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PremiseRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};


export type PremiseLocalizationsArgs = {
  filters?: InputMaybe<PremiseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PremiseEntity = {
  __typename?: 'PremiseEntity';
  attributes?: Maybe<Premise>;
  id?: Maybe<Scalars['ID']>;
};

export type PremiseEntityResponse = {
  __typename?: 'PremiseEntityResponse';
  data?: Maybe<PremiseEntity>;
};

export type PremiseEntityResponseCollection = {
  __typename?: 'PremiseEntityResponseCollection';
  data: Array<PremiseEntity>;
  meta: ResponseCollectionMeta;
};

export type PremiseFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PremiseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PremiseFiltersInput>;
  not?: InputMaybe<PremiseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PremiseFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type PremiseInput = {
  address?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PremiseRelationResponseCollection = {
  __typename?: 'PremiseRelationResponseCollection';
  data: Array<PremiseEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  basicDocument?: Maybe<BasicDocumentEntityResponse>;
  basicDocuments?: Maybe<BasicDocumentEntityResponseCollection>;
  blogPost?: Maybe<BlogPostEntityResponse>;
  blogPosts?: Maybe<BlogPostEntityResponseCollection>;
  bookTag?: Maybe<BookTagEntityResponse>;
  bookTags?: Maybe<BookTagEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  event?: Maybe<EventEntityResponse>;
  eventCategories?: Maybe<EventCategoryEntityResponseCollection>;
  eventCategory?: Maybe<EventCategoryEntityResponse>;
  eventLocalities?: Maybe<EventLocalityEntityResponseCollection>;
  eventLocality?: Maybe<EventLocalityEntityResponse>;
  eventSubscription?: Maybe<EventSubscriptionEntityResponse>;
  eventSubscriptions?: Maybe<EventSubscriptionEntityResponseCollection>;
  eventTag?: Maybe<EventTagEntityResponse>;
  eventTags?: Maybe<EventTagEntityResponseCollection>;
  events?: Maybe<EventEntityResponseCollection>;
  fileCategories?: Maybe<FileCategoryEntityResponseCollection>;
  fileCategory?: Maybe<FileCategoryEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menu?: Maybe<MenuEntityResponse>;
  menus?: Maybe<MenuEntityResponseCollection>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  partner?: Maybe<PartnerEntityResponse>;
  partners?: Maybe<PartnerEntityResponseCollection>;
  premise?: Maybe<PremiseEntityResponse>;
  premises?: Maybe<PremiseEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryBasicDocumentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBasicDocumentsArgs = {
  filters?: InputMaybe<BasicDocumentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBlogPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBlogPostsArgs = {
  filters?: InputMaybe<BlogPostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBookTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBookTagsArgs = {
  filters?: InputMaybe<BookTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryEventArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryEventCategoriesArgs = {
  filters?: InputMaybe<EventCategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEventCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryEventLocalitiesArgs = {
  filters?: InputMaybe<EventLocalityFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEventLocalityArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryEventSubscriptionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEventSubscriptionsArgs = {
  filters?: InputMaybe<EventSubscriptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEventTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryEventTagsArgs = {
  filters?: InputMaybe<EventTagFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFileCategoriesArgs = {
  filters?: InputMaybe<FileCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFileCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenuArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryMenusArgs = {
  filters?: InputMaybe<MenuFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPartnerArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPartnersArgs = {
  filters?: InputMaybe<PartnerFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPremiseArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPremisesArgs = {
  filters?: InputMaybe<PremiseFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  contains?: InputMaybe<Scalars['Time']>;
  containsi?: InputMaybe<Scalars['Time']>;
  endsWith?: InputMaybe<Scalars['Time']>;
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  ne?: InputMaybe<Scalars['Time']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']>;
  notContainsi?: InputMaybe<Scalars['Time']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  startsWith?: InputMaybe<Scalars['Time']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
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
  email?: Maybe<Scalars['String']>;
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

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };


export const TestDocument = gql`
    query Test {
  categories {
    meta {
      pagination {
        total
      }
    }
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