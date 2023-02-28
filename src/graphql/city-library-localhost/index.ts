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
  slug: Scalars['String'];
  title: Scalars['String'];
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
  coverMedia?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BlogPostRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sections?: Maybe<Array<Maybe<BlogPostSectionsDynamicZone>>>;
  seo?: Maybe<ComponentCommonSeo>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BlogPostLocalizationsArgs = {
  filters?: InputMaybe<BlogPostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BlogPostFiltersInput>;
  not?: InputMaybe<BlogPostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogPostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentCommonSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogPostInput = {
  coverMedia?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sections?: InputMaybe<Array<Scalars['BlogPostSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentCommonSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BlogPostRelationResponseCollection = {
  __typename?: 'BlogPostRelationResponseCollection';
  data: Array<BlogPostEntity>;
};

export type BlogPostSectionsDynamicZone = ComponentSectionsAccordion | ComponentSectionsColumnedText | ComponentSectionsCta | ComponentSectionsDivider | ComponentSectionsDocuments | ComponentSectionsExternalLinks | ComponentSectionsFaq | ComponentSectionsFlatText | ComponentSectionsFlatTextCenter | ComponentSectionsForm | ComponentSectionsGallery | ComponentSectionsMap | ComponentSectionsRental | ComponentSectionsSiteUsefullness | ComponentSectionsSubListing | ComponentSectionsSubpages | ComponentSectionsTable | ComponentSectionsVideo | Error;

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
  eqi?: InputMaybe<Scalars['Boolean']>;
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

export type Branch = {
  __typename?: 'Branch';
  address?: Maybe<Scalars['String']>;
  barrierFreeInfo?: Maybe<Scalars['String']>;
  barrierFreeState?: Maybe<Enum_Branch_Barrierfreestate>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  events?: Maybe<EventRelationResponseCollection>;
  latitude?: Maybe<Scalars['Float']>;
  listingImage?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BranchRelationResponseCollection>;
  longitude?: Maybe<Scalars['Float']>;
  medias?: Maybe<UploadFileRelationResponseCollection>;
  openingHours?: Maybe<ComponentBlocksOpeningHours>;
  phone?: Maybe<Scalars['String']>;
  publicTransportInfo?: Maybe<Scalars['String']>;
  seo?: Maybe<ComponentCommonSeo>;
  servicePages?: Maybe<PageRelationResponseCollection>;
  slug: Scalars['String'];
  subBranches?: Maybe<BranchRelationResponseCollection>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BranchEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BranchLocalizationsArgs = {
  filters?: InputMaybe<BranchFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BranchMediasArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BranchServicePagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type BranchSubBranchesArgs = {
  filters?: InputMaybe<BranchFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BranchEntity = {
  __typename?: 'BranchEntity';
  attributes?: Maybe<Branch>;
  id?: Maybe<Scalars['ID']>;
};

export type BranchEntityResponse = {
  __typename?: 'BranchEntityResponse';
  data?: Maybe<BranchEntity>;
};

export type BranchEntityResponseCollection = {
  __typename?: 'BranchEntityResponseCollection';
  data: Array<BranchEntity>;
  meta: ResponseCollectionMeta;
};

export type BranchFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BranchFiltersInput>>>;
  barrierFreeInfo?: InputMaybe<StringFilterInput>;
  barrierFreeState?: InputMaybe<StringFilterInput>;
  body?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  events?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  latitude?: InputMaybe<FloatFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BranchFiltersInput>;
  longitude?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<BranchFiltersInput>;
  openingHours?: InputMaybe<ComponentBlocksOpeningHoursFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BranchFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  publicTransportInfo?: InputMaybe<StringFilterInput>;
  seo?: InputMaybe<ComponentCommonSeoFiltersInput>;
  servicePages?: InputMaybe<PageFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  subBranches?: InputMaybe<BranchFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BranchInput = {
  address?: InputMaybe<Scalars['String']>;
  barrierFreeInfo?: InputMaybe<Scalars['String']>;
  barrierFreeState?: InputMaybe<Enum_Branch_Barrierfreestate>;
  body?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  latitude?: InputMaybe<Scalars['Float']>;
  listingImage?: InputMaybe<Scalars['ID']>;
  longitude?: InputMaybe<Scalars['Float']>;
  medias?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  openingHours?: InputMaybe<ComponentBlocksOpeningHoursInput>;
  phone?: InputMaybe<Scalars['String']>;
  publicTransportInfo?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<ComponentCommonSeoInput>;
  servicePages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  subBranches?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type BranchRelationResponseCollection = {
  __typename?: 'BranchRelationResponseCollection';
  data: Array<BranchEntity>;
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
  pageLink?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  pages?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
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

export type ComponentBlocksBranchItem = {
  __typename?: 'ComponentBlocksBranchItem';
  branch?: Maybe<BranchEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentBlocksBranchItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksBranchItemFiltersInput>>>;
  branch?: InputMaybe<BranchFiltersInput>;
  not?: InputMaybe<ComponentBlocksBranchItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksBranchItemFiltersInput>>>;
};

export type ComponentBlocksBranchItemInput = {
  branch?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlocksBranchItemWithPage = {
  __typename?: 'ComponentBlocksBranchItemWithPage';
  branch?: Maybe<BranchEntityResponse>;
  id: Scalars['ID'];
  page?: Maybe<PageEntityResponse>;
};

export type ComponentBlocksBranchItemWithPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksBranchItemWithPageFiltersInput>>>;
  branch?: InputMaybe<BranchFiltersInput>;
  not?: InputMaybe<ComponentBlocksBranchItemWithPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksBranchItemWithPageFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
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

export type ComponentBlocksFileItem = {
  __typename?: 'ComponentBlocksFileItem';
  attachment: UploadFileEntityResponse;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ComponentBlocksFileItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemFiltersInput>>>;
};

export type ComponentBlocksNoticeFiles = {
  __typename?: 'ComponentBlocksNoticeFiles';
  files?: Maybe<Array<Maybe<ComponentBlocksFileItem>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentBlocksNoticeFilesFilesArgs = {
  filters?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlocksOpeningHours = {
  __typename?: 'ComponentBlocksOpeningHours';
  days: Array<Maybe<ComponentBlocksOpeningHoursItem>>;
  id: Scalars['ID'];
};


export type ComponentBlocksOpeningHoursDaysArgs = {
  filters?: InputMaybe<ComponentBlocksOpeningHoursItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlocksOpeningHoursFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksOpeningHoursFiltersInput>>>;
  days?: InputMaybe<ComponentBlocksOpeningHoursItemFiltersInput>;
  not?: InputMaybe<ComponentBlocksOpeningHoursFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksOpeningHoursFiltersInput>>>;
};

export type ComponentBlocksOpeningHoursInput = {
  days?: InputMaybe<Array<InputMaybe<ComponentBlocksOpeningHoursItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlocksOpeningHoursItem = {
  __typename?: 'ComponentBlocksOpeningHoursItem';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  time: Scalars['String'];
};

export type ComponentBlocksOpeningHoursItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksOpeningHoursItemFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksOpeningHoursItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksOpeningHoursItemFiltersInput>>>;
  time?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksOpeningHoursItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
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

export type ComponentCommonSeo = {
  __typename?: 'ComponentCommonSeo';
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type ComponentCommonSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonSeoFiltersInput>>>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonSeoFiltersInput>>>;
};

export type ComponentCommonSeoInput = {
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
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
  footerLink?: InputMaybe<ComponentFooterFooterLinkFiltersInput>;
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

export type ComponentLocalityPartsLocalityServices = {
  __typename?: 'ComponentLocalityPartsLocalityServices';
  id: Scalars['ID'];
  page?: Maybe<PageEntityResponse>;
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
  sectionLinks?: InputMaybe<ComponentMenuSectionLinksFiltersInput>;
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

export type ComponentSectionsBlogPostsListing = {
  __typename?: 'ComponentSectionsBlogPostsListing';
  id: Scalars['ID'];
};

export type ComponentSectionsChildrenListing = {
  __typename?: 'ComponentSectionsChildrenListing';
  depth: Enum_Componentsectionschildrenlisting_Depth;
  id: Scalars['ID'];
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
};

export type ComponentSectionsDocuments = {
  __typename?: 'ComponentSectionsDocuments';
  basicDocuments?: Maybe<BasicDocumentRelationResponseCollection>;
  documents?: Maybe<DocumentRelationResponseCollection>;
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


export type ComponentSectionsDocumentsDocumentsArgs = {
  filters?: InputMaybe<DocumentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsDocumentsMoreLinkArgs = {
  filters?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsDocumentsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsDocumentsFiltersInput>>>;
  basicDocuments?: InputMaybe<BasicDocumentFiltersInput>;
  documents?: InputMaybe<DocumentFiltersInput>;
  moreLink?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  not?: InputMaybe<ComponentSectionsDocumentsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsDocumentsFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsDocumentsInput = {
  basicDocuments?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  moreLink?: InputMaybe<Array<InputMaybe<ComponentBlocksPageLinkInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsDocumentsListing = {
  __typename?: 'ComponentSectionsDocumentsListing';
  id: Scalars['ID'];
};

export type ComponentSectionsEventsListing = {
  __typename?: 'ComponentSectionsEventsListing';
  id: Scalars['ID'];
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
};

export type ComponentSectionsFlatTextCenter = {
  __typename?: 'ComponentSectionsFlatTextCenter';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
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

export type ComponentSectionsMap = {
  __typename?: 'ComponentSectionsMap';
  branches?: Maybe<Array<Maybe<ComponentBlocksBranchItem>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsMapBranchesArgs = {
  filters?: InputMaybe<ComponentBlocksBranchItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsMapInput = {
  branches?: InputMaybe<Array<InputMaybe<ComponentBlocksBranchItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsNewBooksListing = {
  __typename?: 'ComponentSectionsNewBooksListing';
  id: Scalars['ID'];
};

export type ComponentSectionsNewsListing = {
  __typename?: 'ComponentSectionsNewsListing';
  id: Scalars['ID'];
};

export type ComponentSectionsPartners = {
  __typename?: 'ComponentSectionsPartners';
  id: Scalars['ID'];
};

export type ComponentSectionsRental = {
  __typename?: 'ComponentSectionsRental';
  branches?: Maybe<Array<Maybe<ComponentBlocksBranchItemWithPage>>>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsRentalBranchesArgs = {
  filters?: InputMaybe<ComponentBlocksBranchItemWithPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
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
  eqi?: InputMaybe<Scalars['DateTime']>;
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

export type Disclosure = {
  __typename?: 'Disclosure';
  addedAt: Scalars['DateTime'];
  amount?: Maybe<Scalars['Float']>;
  contractor?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateFrom?: Maybe<Scalars['Date']>;
  dateTo?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  file: UploadFileEntityResponse;
  grantProvider?: Maybe<Scalars['String']>;
  grantYear?: Maybe<Scalars['String']>;
  idNumber?: Maybe<Scalars['String']>;
  originalSlug?: Maybe<Scalars['String']>;
  originalTitle?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: Enum_Disclosure_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DisclosureEntity = {
  __typename?: 'DisclosureEntity';
  attributes?: Maybe<Disclosure>;
  id?: Maybe<Scalars['ID']>;
};

export type DisclosureEntityResponse = {
  __typename?: 'DisclosureEntityResponse';
  data?: Maybe<DisclosureEntity>;
};

export type DisclosureEntityResponseCollection = {
  __typename?: 'DisclosureEntityResponseCollection';
  data: Array<DisclosureEntity>;
  meta: ResponseCollectionMeta;
};

export type DisclosureFiltersInput = {
  addedAt?: InputMaybe<DateTimeFilterInput>;
  amount?: InputMaybe<FloatFilterInput>;
  and?: InputMaybe<Array<InputMaybe<DisclosureFiltersInput>>>;
  contractor?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dateFrom?: InputMaybe<DateFilterInput>;
  dateTo?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  grantProvider?: InputMaybe<StringFilterInput>;
  grantYear?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  idNumber?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DisclosureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DisclosureFiltersInput>>>;
  originalSlug?: InputMaybe<StringFilterInput>;
  originalTitle?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DisclosureInput = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  amount?: InputMaybe<Scalars['Float']>;
  contractor?: InputMaybe<Scalars['String']>;
  dateFrom?: InputMaybe<Scalars['Date']>;
  dateTo?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['ID']>;
  grantProvider?: InputMaybe<Scalars['String']>;
  grantYear?: InputMaybe<Scalars['String']>;
  idNumber?: InputMaybe<Scalars['String']>;
  originalSlug?: InputMaybe<Scalars['String']>;
  originalTitle?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Disclosure_Type>;
};

export type Document = {
  __typename?: 'Document';
  addedAt: Scalars['DateTime'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  documentCategory?: Maybe<DocumentCategoryEntityResponse>;
  file: UploadFileEntityResponse;
  originalSlug?: Maybe<Scalars['String']>;
  originalTitle?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentCategory = {
  __typename?: 'DocumentCategory';
  createdAt?: Maybe<Scalars['DateTime']>;
  documents?: Maybe<DocumentRelationResponseCollection>;
  label: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type DocumentCategoryDocumentsArgs = {
  filters?: InputMaybe<DocumentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DocumentCategoryEntity = {
  __typename?: 'DocumentCategoryEntity';
  attributes?: Maybe<DocumentCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type DocumentCategoryEntityResponse = {
  __typename?: 'DocumentCategoryEntityResponse';
  data?: Maybe<DocumentCategoryEntity>;
};

export type DocumentCategoryEntityResponseCollection = {
  __typename?: 'DocumentCategoryEntityResponseCollection';
  data: Array<DocumentCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type DocumentCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DocumentCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documents?: InputMaybe<DocumentFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DocumentCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DocumentCategoryFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DocumentCategoryInput = {
  documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  label?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type DocumentEntity = {
  __typename?: 'DocumentEntity';
  attributes?: Maybe<Document>;
  id?: Maybe<Scalars['ID']>;
};

export type DocumentEntityResponse = {
  __typename?: 'DocumentEntityResponse';
  data?: Maybe<DocumentEntity>;
};

export type DocumentEntityResponseCollection = {
  __typename?: 'DocumentEntityResponseCollection';
  data: Array<DocumentEntity>;
  meta: ResponseCollectionMeta;
};

export type DocumentFiltersInput = {
  addedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<DocumentFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentCategory?: InputMaybe<DocumentCategoryFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<DocumentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DocumentFiltersInput>>>;
  originalSlug?: InputMaybe<StringFilterInput>;
  originalTitle?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DocumentInput = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  documentCategory?: InputMaybe<Scalars['ID']>;
  file?: InputMaybe<Scalars['ID']>;
  originalSlug?: InputMaybe<Scalars['String']>;
  originalTitle?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DocumentRelationResponseCollection = {
  __typename?: 'DocumentRelationResponseCollection';
  data: Array<DocumentEntity>;
};

export enum Enum_Branch_Barrierfreestate {
  CiastocnePristupny = 'ciastocne_pristupny',
  Nepristupny = 'nepristupny',
  Pristupny = 'pristupny'
}

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

export enum Enum_Componentsectionschildrenlisting_Depth {
  Depth_1 = 'depth_1',
  Depth_2 = 'depth_2'
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

export enum Enum_Disclosure_Type {
  Faktury = 'Faktury',
  Grant = 'Grant',
  ObchodnaVerejnaSutaz = 'Obchodna_verejna_sutaz',
  Objednavky = 'Objednavky',
  Ostatne = 'Ostatne',
  VerejneObstaravanie = 'Verejne_obstaravanie',
  Zmluva = 'Zmluva'
}

export enum Enum_Page_Layout {
  ContentWithSidebar = 'content_with_sidebar',
  FullContent = 'full_content',
  Listing = 'listing',
  Sublisting = 'sublisting'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  branch?: Maybe<BranchEntityResponse>;
  coverImage?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateFrom?: Maybe<Scalars['DateTime']>;
  dateTo?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  documents?: Maybe<ComponentSectionsDocuments>;
  eventCategory?: Maybe<EventCategoryEntityResponse>;
  eventTags?: Maybe<EventTagRelationResponseCollection>;
  gallery?: Maybe<UploadFileRelationResponseCollection>;
  guests?: Maybe<Array<Maybe<ComponentGuestsGuest>>>;
  listingImage?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<EventRelationResponseCollection>;
  price?: Maybe<Scalars['Float']>;
  promoted?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentCommonSeo>;
  showForm?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EventEventTagsArgs = {
  filters?: InputMaybe<EventTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EventGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
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
  branch?: InputMaybe<BranchFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dateFrom?: InputMaybe<DateTimeFilterInput>;
  dateTo?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documents?: InputMaybe<ComponentSectionsDocumentsFiltersInput>;
  eventCategory?: InputMaybe<EventCategoryFiltersInput>;
  eventTags?: InputMaybe<EventTagFiltersInput>;
  guests?: InputMaybe<ComponentGuestsGuestFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<EventFiltersInput>;
  not?: InputMaybe<EventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  promoted?: InputMaybe<BooleanFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentCommonSeoFiltersInput>;
  showForm?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventInput = {
  branch?: InputMaybe<Scalars['ID']>;
  coverImage?: InputMaybe<Scalars['ID']>;
  dateFrom?: InputMaybe<Scalars['DateTime']>;
  dateTo?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<ComponentSectionsDocumentsInput>;
  eventCategory?: InputMaybe<Scalars['ID']>;
  eventTags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  guests?: InputMaybe<Array<InputMaybe<ComponentGuestsGuestInput>>>;
  listingImage?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  promoted?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentCommonSeoInput>;
  showForm?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EventRelationResponseCollection = {
  __typename?: 'EventRelationResponseCollection';
  data: Array<EventEntity>;
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
  eqi?: InputMaybe<Scalars['Float']>;
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

export type General = {
  __typename?: 'General';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventsPage?: Maybe<PageEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GeneralRelationResponseCollection>;
  newBooksPage?: Maybe<PageEntityResponse>;
  noticesPage?: Maybe<PageEntityResponse>;
  openingHoursPage?: Maybe<PageEntityResponse>;
  privacyTermsAndConditionsPage?: Maybe<PageEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GeneralEntity = {
  __typename?: 'GeneralEntity';
  attributes?: Maybe<General>;
  id?: Maybe<Scalars['ID']>;
};

export type GeneralEntityResponse = {
  __typename?: 'GeneralEntityResponse';
  data?: Maybe<GeneralEntity>;
};

export type GeneralInput = {
  eventsPage?: InputMaybe<Scalars['ID']>;
  newBooksPage?: InputMaybe<Scalars['ID']>;
  noticesPage?: InputMaybe<Scalars['ID']>;
  openingHoursPage?: InputMaybe<Scalars['ID']>;
  privacyTermsAndConditionsPage?: InputMaybe<Scalars['ID']>;
};

export type GeneralRelationResponseCollection = {
  __typename?: 'GeneralRelationResponseCollection';
  data: Array<GeneralEntity>;
};

export type GenericMorph = BasicDocument | BlogPost | BookTag | Branch | Category | ComponentAccordionItemsFlatText | ComponentAccordionItemsForm | ComponentAccordionItemsTableRow | ComponentAddressAddress | ComponentBlocksAccordionItem | ComponentBlocksBranchItem | ComponentBlocksBranchItemWithPage | ComponentBlocksExternalLink | ComponentBlocksFileItem | ComponentBlocksNoticeFiles | ComponentBlocksOpeningHours | ComponentBlocksOpeningHoursItem | ComponentBlocksPageLink | ComponentBlocksSubpage | ComponentBlocksTableRow | ComponentCommonSeo | ComponentFooterFooterColumn | ComponentFooterFooterLink | ComponentGuestsGuest | ComponentHomepageBenefits | ComponentHomepageCta | ComponentHomepageFaqSection | ComponentHomepageFaqs | ComponentHomepageNewsSection | ComponentHomepageRegistrationInfo | ComponentLocalityPartsGalleryParts | ComponentLocalityPartsLocalitySection | ComponentLocalityPartsLocalityServices | ComponentMenuSectionLinks | ComponentMenuSections | ComponentMenuSubsection | ComponentMenuSubsectionLinks | ComponentMetadataFaktury | ComponentMetadataMetadata | ComponentMetadataObchodnaVerejnaSutaz | ComponentMetadataObjednavky | ComponentMetadataVerejneObstaravanie | ComponentMetadataZmluvy | ComponentSectionsAccordion | ComponentSectionsBlogPostsListing | ComponentSectionsChildrenListing | ComponentSectionsColumnedText | ComponentSectionsCta | ComponentSectionsDivider | ComponentSectionsDocuments | ComponentSectionsDocumentsListing | ComponentSectionsEventsListing | ComponentSectionsExternalLinks | ComponentSectionsFaq | ComponentSectionsFlatText | ComponentSectionsFlatTextCenter | ComponentSectionsForm | ComponentSectionsGallery | ComponentSectionsMap | ComponentSectionsNewBooksListing | ComponentSectionsNewsListing | ComponentSectionsPartners | ComponentSectionsRental | ComponentSectionsSiteUsefullness | ComponentSectionsSubListing | ComponentSectionsSubpages | ComponentSectionsTable | ComponentSectionsVideo | Disclosure | Document | DocumentCategory | Event | EventCategory | EventTag | FileCategory | Footer | General | HomePage | I18NLocale | Menu | NavikronosNavikronosStorage | Notice | Page | Partner | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  faqSection?: Maybe<ComponentHomepageFaqSection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  mapSection?: Maybe<ComponentSectionsMap>;
  newsSection?: Maybe<ComponentHomepageNewsSection>;
  registrationInfoSection?: Maybe<ComponentHomepageRegistrationInfo>;
  seo?: Maybe<ComponentCommonSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  faqSection?: InputMaybe<ComponentHomepageFaqSectionInput>;
  mapSection?: InputMaybe<ComponentSectionsMapInput>;
  newsSection?: InputMaybe<ComponentHomepageNewsSectionInput>;
  registrationInfoSection?: InputMaybe<ComponentHomepageRegistrationInfoInput>;
  seo?: InputMaybe<ComponentCommonSeoInput>;
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
  eqi?: InputMaybe<Scalars['ID']>;
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
  eqi?: InputMaybe<Scalars['Int']>;
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
  eqi?: InputMaybe<Scalars['JSON']>;
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
  menuSections?: InputMaybe<ComponentMenuSectionsFiltersInput>;
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
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBasicDocument?: Maybe<BasicDocumentEntityResponse>;
  createBlogPost?: Maybe<BlogPostEntityResponse>;
  createBlogPostLocalization?: Maybe<BlogPostEntityResponse>;
  createBookTag?: Maybe<BookTagEntityResponse>;
  createBranch?: Maybe<BranchEntityResponse>;
  createBranchLocalization?: Maybe<BranchEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createDisclosure?: Maybe<DisclosureEntityResponse>;
  createDocument?: Maybe<DocumentEntityResponse>;
  createDocumentCategory?: Maybe<DocumentCategoryEntityResponse>;
  createEvent?: Maybe<EventEntityResponse>;
  createEventCategory?: Maybe<EventCategoryEntityResponse>;
  createEventCategoryLocalization?: Maybe<EventCategoryEntityResponse>;
  createEventLocalization?: Maybe<EventEntityResponse>;
  createEventTag?: Maybe<EventTagEntityResponse>;
  createEventTagLocalization?: Maybe<EventTagEntityResponse>;
  createFileCategory?: Maybe<FileCategoryEntityResponse>;
  createFooterLocalization?: Maybe<FooterEntityResponse>;
  createGeneralLocalization?: Maybe<GeneralEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createMenu?: Maybe<MenuEntityResponse>;
  createMenuLocalization?: Maybe<MenuEntityResponse>;
  createNotice?: Maybe<NoticeEntityResponse>;
  createNoticeLocalization?: Maybe<NoticeEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createPartner?: Maybe<PartnerEntityResponse>;
  createPartnerLocalization?: Maybe<PartnerEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBasicDocument?: Maybe<BasicDocumentEntityResponse>;
  deleteBlogPost?: Maybe<BlogPostEntityResponse>;
  deleteBookTag?: Maybe<BookTagEntityResponse>;
  deleteBranch?: Maybe<BranchEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteDisclosure?: Maybe<DisclosureEntityResponse>;
  deleteDocument?: Maybe<DocumentEntityResponse>;
  deleteDocumentCategory?: Maybe<DocumentCategoryEntityResponse>;
  deleteEvent?: Maybe<EventEntityResponse>;
  deleteEventCategory?: Maybe<EventCategoryEntityResponse>;
  deleteEventTag?: Maybe<EventTagEntityResponse>;
  deleteFileCategory?: Maybe<FileCategoryEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteGeneral?: Maybe<GeneralEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteMenu?: Maybe<MenuEntityResponse>;
  deleteNavikronosNavikronosStorage?: Maybe<NavikronosNavikronosStorageEntityResponse>;
  deleteNotice?: Maybe<NoticeEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deletePartner?: Maybe<PartnerEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
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
  updateBranch?: Maybe<BranchEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateDisclosure?: Maybe<DisclosureEntityResponse>;
  updateDocument?: Maybe<DocumentEntityResponse>;
  updateDocumentCategory?: Maybe<DocumentCategoryEntityResponse>;
  updateEvent?: Maybe<EventEntityResponse>;
  updateEventCategory?: Maybe<EventCategoryEntityResponse>;
  updateEventTag?: Maybe<EventTagEntityResponse>;
  updateFileCategory?: Maybe<FileCategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateGeneral?: Maybe<GeneralEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateMenu?: Maybe<MenuEntityResponse>;
  updateNavikronosNavikronosStorage?: Maybe<NavikronosNavikronosStorageEntityResponse>;
  updateNotice?: Maybe<NoticeEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updatePartner?: Maybe<PartnerEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateBasicDocumentArgs = {
  data: BasicDocumentInput;
};


export type MutationCreateBlogPostArgs = {
  data: BlogPostInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBlogPostLocalizationArgs = {
  data?: InputMaybe<BlogPostInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBookTagArgs = {
  data: BookTagInput;
};


export type MutationCreateBranchArgs = {
  data: BranchInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBranchLocalizationArgs = {
  data?: InputMaybe<BranchInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationCreateDisclosureArgs = {
  data: DisclosureInput;
};


export type MutationCreateDocumentArgs = {
  data: DocumentInput;
};


export type MutationCreateDocumentCategoryArgs = {
  data: DocumentCategoryInput;
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


export type MutationCreateEventLocalizationArgs = {
  data?: InputMaybe<EventInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationCreateGeneralLocalizationArgs = {
  data?: InputMaybe<GeneralInput>;
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


export type MutationCreateNoticeArgs = {
  data: NoticeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateNoticeLocalizationArgs = {
  data?: InputMaybe<NoticeInput>;
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


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
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
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteBookTagArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBranchArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteDisclosureArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDocumentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDocumentCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteEventCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationDeleteGeneralArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteNoticeArgs = {
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


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
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
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateBookTagArgs = {
  data: BookTagInput;
  id: Scalars['ID'];
};


export type MutationUpdateBranchArgs = {
  data: BranchInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateDisclosureArgs = {
  data: DisclosureInput;
  id: Scalars['ID'];
};


export type MutationUpdateDocumentArgs = {
  data: DocumentInput;
  id: Scalars['ID'];
};


export type MutationUpdateDocumentCategoryArgs = {
  data: DocumentCategoryInput;
  id: Scalars['ID'];
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


export type MutationUpdateGeneralArgs = {
  data: GeneralInput;
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


export type MutationUpdateNavikronosNavikronosStorageArgs = {
  data: NavikronosNavikronosStorageInput;
};


export type MutationUpdateNoticeArgs = {
  data: NoticeInput;
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


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
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

export type NavikronosNavikronosStorage = {
  __typename?: 'NavikronosNavikronosStorage';
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NavikronosNavikronosStorageEntity = {
  __typename?: 'NavikronosNavikronosStorageEntity';
  attributes?: Maybe<NavikronosNavikronosStorage>;
  id?: Maybe<Scalars['ID']>;
};

export type NavikronosNavikronosStorageEntityResponse = {
  __typename?: 'NavikronosNavikronosStorageEntityResponse';
  data?: Maybe<NavikronosNavikronosStorageEntity>;
};

export type NavikronosNavikronosStorageInput = {
  data?: InputMaybe<Scalars['JSON']>;
};

export type Notice = {
  __typename?: 'Notice';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateAdded?: Maybe<Scalars['Date']>;
  documents?: Maybe<ComponentSectionsDocuments>;
  listingImage?: Maybe<UploadFileRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<NoticeRelationResponseCollection>;
  promoted?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentCommonSeo>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NoticeListingImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NoticeLocalizationsArgs = {
  filters?: InputMaybe<NoticeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NoticeEntity = {
  __typename?: 'NoticeEntity';
  attributes?: Maybe<Notice>;
  id?: Maybe<Scalars['ID']>;
};

export type NoticeEntityResponse = {
  __typename?: 'NoticeEntityResponse';
  data?: Maybe<NoticeEntity>;
};

export type NoticeEntityResponseCollection = {
  __typename?: 'NoticeEntityResponseCollection';
  data: Array<NoticeEntity>;
  meta: ResponseCollectionMeta;
};

export type NoticeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NoticeFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dateAdded?: InputMaybe<DateFilterInput>;
  documents?: InputMaybe<ComponentSectionsDocumentsFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<NoticeFiltersInput>;
  not?: InputMaybe<NoticeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NoticeFiltersInput>>>;
  promoted?: InputMaybe<BooleanFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentCommonSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NoticeInput = {
  body?: InputMaybe<Scalars['String']>;
  dateAdded?: InputMaybe<Scalars['Date']>;
  documents?: InputMaybe<ComponentSectionsDocumentsInput>;
  listingImage?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  promoted?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentCommonSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type NoticeRelationResponseCollection = {
  __typename?: 'NoticeRelationResponseCollection';
  data: Array<NoticeEntity>;
};

export type Page = {
  __typename?: 'Page';
  branchesServicesTo?: Maybe<BranchRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  layout?: Maybe<Enum_Page_Layout>;
  listingImage?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PageRelationResponseCollection>;
  newSlug: Scalars['String'];
  pageCategory?: Maybe<CategoryEntityResponse>;
  perex?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentCommonSeo>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageBranchesServicesToArgs = {
  filters?: InputMaybe<BranchFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
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
  branchesServicesTo?: InputMaybe<BranchFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  layout?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  newSlug?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  pageCategory?: InputMaybe<CategoryFiltersInput>;
  perex?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentCommonSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  branchesServicesTo?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  layout?: InputMaybe<Enum_Page_Layout>;
  listingImage?: InputMaybe<Scalars['ID']>;
  newSlug?: InputMaybe<Scalars['String']>;
  pageCategory?: InputMaybe<Scalars['ID']>;
  perex?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sections?: InputMaybe<Array<Scalars['PageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentCommonSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type PageSectionsDynamicZone = ComponentSectionsAccordion | ComponentSectionsBlogPostsListing | ComponentSectionsChildrenListing | ComponentSectionsColumnedText | ComponentSectionsCta | ComponentSectionsDivider | ComponentSectionsDocuments | ComponentSectionsDocumentsListing | ComponentSectionsEventsListing | ComponentSectionsExternalLinks | ComponentSectionsFaq | ComponentSectionsFlatText | ComponentSectionsFlatTextCenter | ComponentSectionsForm | ComponentSectionsGallery | ComponentSectionsMap | ComponentSectionsNewBooksListing | ComponentSectionsNewsListing | ComponentSectionsPartners | ComponentSectionsRental | ComponentSectionsSiteUsefullness | ComponentSectionsSubListing | ComponentSectionsSubpages | ComponentSectionsTable | ComponentSectionsVideo | Error;

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
  branch?: Maybe<BranchEntityResponse>;
  branches?: Maybe<BranchEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  disclosure?: Maybe<DisclosureEntityResponse>;
  disclosures?: Maybe<DisclosureEntityResponseCollection>;
  document?: Maybe<DocumentEntityResponse>;
  documentCategories?: Maybe<DocumentCategoryEntityResponseCollection>;
  documentCategory?: Maybe<DocumentCategoryEntityResponse>;
  documents?: Maybe<DocumentEntityResponseCollection>;
  event?: Maybe<EventEntityResponse>;
  eventCategories?: Maybe<EventCategoryEntityResponseCollection>;
  eventCategory?: Maybe<EventCategoryEntityResponse>;
  eventTag?: Maybe<EventTagEntityResponse>;
  eventTags?: Maybe<EventTagEntityResponseCollection>;
  events?: Maybe<EventEntityResponseCollection>;
  fileCategories?: Maybe<FileCategoryEntityResponseCollection>;
  fileCategory?: Maybe<FileCategoryEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  general?: Maybe<GeneralEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menu?: Maybe<MenuEntityResponse>;
  menus?: Maybe<MenuEntityResponseCollection>;
  navikronosNavikronosStorage?: Maybe<NavikronosNavikronosStorageEntityResponse>;
  notice?: Maybe<NoticeEntityResponse>;
  notices?: Maybe<NoticeEntityResponseCollection>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  partner?: Maybe<PartnerEntityResponse>;
  partners?: Maybe<PartnerEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
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
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBlogPostsArgs = {
  filters?: InputMaybe<BlogPostFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type QueryBranchArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBranchesArgs = {
  filters?: InputMaybe<BranchFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
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


export type QueryDisclosureArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDisclosuresArgs = {
  filters?: InputMaybe<DisclosureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDocumentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDocumentCategoriesArgs = {
  filters?: InputMaybe<DocumentCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDocumentCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDocumentsArgs = {
  filters?: InputMaybe<DocumentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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


export type QueryGeneralArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type QueryNoticeArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryNoticesArgs = {
  filters?: InputMaybe<NoticeFiltersInput>;
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


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
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
  eqi?: InputMaybe<Scalars['String']>;
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
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
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
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
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

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
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

export type AllLocalhostEventsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type AllLocalhostEventsQuery = { __typename?: 'Query', events?: { __typename?: 'EventEntityResponseCollection', data: Array<{ __typename: 'EventEntity', id?: string | null, attributes?: { __typename?: 'Event', slug: string, title: string } | null }> } | null };

export type EventsWithNoSlugQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type EventsWithNoSlugQuery = { __typename?: 'Query', events?: { __typename?: 'EventEntityResponseCollection', data: Array<{ __typename: 'EventEntity', id?: string | null, attributes?: { __typename?: 'Event', slug: string, title: string } | null }> } | null };

export type UpdateEventNewSlugMutationVariables = Exact<{
  id: Scalars['ID'];
  newSlug: Scalars['String'];
  newTitle?: InputMaybe<Scalars['String']>;
}>;


export type UpdateEventNewSlugMutation = { __typename?: 'Mutation', updateEvent?: { __typename?: 'EventEntityResponse', data?: { __typename?: 'EventEntity', id?: string | null, attributes?: { __typename?: 'Event', slug: string, title: string } | null } | null } | null };

export type EventsBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type EventsBySlugQuery = { __typename?: 'Query', events?: { __typename?: 'EventEntityResponseCollection', data: Array<{ __typename?: 'EventEntity', id?: string | null }> } | null };

export type AllPagesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type AllPagesQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', title: string, slug: string } | null }> } | null };

export type AllPagesWithSectionsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type AllPagesWithSectionsQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', title: string, slug: string, sections?: Array<{ __typename: 'ComponentSectionsAccordion' } | { __typename: 'ComponentSectionsBlogPostsListing' } | { __typename: 'ComponentSectionsChildrenListing' } | { __typename: 'ComponentSectionsColumnedText' } | { __typename: 'ComponentSectionsCta' } | { __typename: 'ComponentSectionsDivider' } | { __typename: 'ComponentSectionsDocuments' } | { __typename: 'ComponentSectionsDocumentsListing' } | { __typename: 'ComponentSectionsEventsListing' } | { __typename: 'ComponentSectionsExternalLinks' } | { __typename: 'ComponentSectionsFaq' } | { __typename: 'ComponentSectionsFlatText' } | { __typename: 'ComponentSectionsFlatTextCenter' } | { __typename: 'ComponentSectionsForm' } | { __typename: 'ComponentSectionsGallery' } | { __typename: 'ComponentSectionsMap' } | { __typename: 'ComponentSectionsNewBooksListing' } | { __typename: 'ComponentSectionsNewsListing' } | { __typename: 'ComponentSectionsPartners' } | { __typename: 'ComponentSectionsRental' } | { __typename: 'ComponentSectionsSiteUsefullness' } | { __typename: 'ComponentSectionsSubListing' } | { __typename: 'ComponentSectionsSubpages' } | { __typename: 'ComponentSectionsTable' } | { __typename: 'ComponentSectionsVideo' } | { __typename: 'Error' } | null> | null } | null }> } | null };

export type CreateBranchMutationVariables = Exact<{
  data: BranchInput;
}>;


export type CreateBranchMutation = { __typename?: 'Mutation', createBranch?: { __typename?: 'BranchEntityResponse', data?: { __typename?: 'BranchEntity', id?: string | null } | null } | null };

export type AllBranchesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type AllBranchesQuery = { __typename?: 'Query', branches?: { __typename?: 'BranchEntityResponseCollection', data: Array<{ __typename?: 'BranchEntity', id?: string | null, attributes?: { __typename?: 'Branch', title: string, slug: string } | null }> } | null };

export type UpdateEventPlaceMutationVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  id: Scalars['ID'];
  branchId: Scalars['ID'];
}>;


export type UpdateEventPlaceMutation = { __typename?: 'Mutation', updateEvent?: { __typename?: 'EventEntityResponse', data?: { __typename?: 'EventEntity', id?: string | null, attributes?: { __typename?: 'Event', branch?: { __typename?: 'BranchEntityResponse', data?: { __typename?: 'BranchEntity', attributes?: { __typename?: 'Branch', title: string } | null } | null } | null } | null } | null } | null };

export type UpdateBranchMediasMutationVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  id: Scalars['ID'];
  mediaIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type UpdateBranchMediasMutation = { __typename?: 'Mutation', updateBranch?: { __typename?: 'BranchEntityResponse', data?: { __typename?: 'BranchEntity', id?: string | null, attributes?: { __typename?: 'Branch', medias?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null }> } | null } | null } | null } | null };

export type UpdateMediaCaptionAndAltMutationVariables = Exact<{
  id: Scalars['ID'];
  caption?: InputMaybe<Scalars['String']>;
  alternativeText?: InputMaybe<Scalars['String']>;
}>;


export type UpdateMediaCaptionAndAltMutation = { __typename?: 'Mutation', updateUploadFile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', caption?: string | null, alternativeText?: string | null, name: string } | null } | null } | null };

export type AllNewsPagesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type AllNewsPagesQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null }> } | null };

export type DeletePageMutationVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
  id: Scalars['ID'];
}>;


export type DeletePageMutation = { __typename?: 'Mutation', deletePage?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null } | null } | null };

export type AllPagesSlugsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type AllPagesSlugsQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', slug: string } | null }> } | null };

export type CreateDocumentCategoryMutationVariables = Exact<{
  data: DocumentCategoryInput;
}>;


export type CreateDocumentCategoryMutation = { __typename?: 'Mutation', createDocumentCategory?: { __typename?: 'DocumentCategoryEntityResponse', data?: { __typename?: 'DocumentCategoryEntity', id?: string | null } | null } | null };

export type AllDocumentCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDocumentCategoriesQuery = { __typename?: 'Query', documentCategories?: { __typename?: 'DocumentCategoryEntityResponseCollection', data: Array<{ __typename?: 'DocumentCategoryEntity', id?: string | null, attributes?: { __typename?: 'DocumentCategory', slug: string } | null }> } | null };

export type DocumentCategoryBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type DocumentCategoryBySlugQuery = { __typename?: 'Query', documentCategories?: { __typename?: 'DocumentCategoryEntityResponseCollection', data: Array<{ __typename?: 'DocumentCategoryEntity', id?: string | null }> } | null };

export type CreateDocumentMutationVariables = Exact<{
  data: DocumentInput;
}>;


export type CreateDocumentMutation = { __typename?: 'Mutation', createDocument?: { __typename?: 'DocumentEntityResponse', data?: { __typename?: 'DocumentEntity', id?: string | null } | null } | null };

export type CreateDisclosureMutationVariables = Exact<{
  data: DisclosureInput;
}>;


export type CreateDisclosureMutation = { __typename?: 'Mutation', createDisclosure?: { __typename?: 'DisclosureEntityResponse', data?: { __typename?: 'DisclosureEntity', id?: string | null } | null } | null };

export type UpdatePageSlugMutationVariables = Exact<{
  id: Scalars['ID'];
  newSlug: Scalars['String'];
}>;


export type UpdatePageSlugMutation = { __typename?: 'Mutation', updatePage?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', slug: string, newSlug: string } | null } | null } | null };

export type DeleteDisclosureMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteDisclosureMutation = { __typename?: 'Mutation', deleteDisclosure?: { __typename?: 'DisclosureEntityResponse', data?: { __typename?: 'DisclosureEntity', id?: string | null } | null } | null };

export type AllDisclosuresQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDisclosuresQuery = { __typename?: 'Query', disclosures?: { __typename?: 'DisclosureEntityResponseCollection', data: Array<{ __typename?: 'DisclosureEntity', id?: string | null, attributes?: { __typename?: 'Disclosure', title: string, slug: string, originalTitle?: string | null, originalSlug?: string | null, file: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null } | null } } | null }> } | null };

export type UpdateDisclosureMutationVariables = Exact<{
  id: Scalars['ID'];
  data: DisclosureInput;
}>;


export type UpdateDisclosureMutation = { __typename?: 'Mutation', updateDisclosure?: { __typename?: 'DisclosureEntityResponse', data?: { __typename?: 'DisclosureEntity', id?: string | null } | null } | null };

export type UpdateDocumentMutationVariables = Exact<{
  id: Scalars['ID'];
  data: DocumentInput;
}>;


export type UpdateDocumentMutation = { __typename?: 'Mutation', updateDocument?: { __typename?: 'DocumentEntityResponse', data?: { __typename?: 'DocumentEntity', id?: string | null } | null } | null };

export type DocumentBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type DocumentBySlugQuery = { __typename?: 'Query', documents?: { __typename?: 'DocumentEntityResponseCollection', data: Array<{ __typename?: 'DocumentEntity', id?: string | null, attributes?: { __typename?: 'Document', slug: string } | null }> } | null };

export type AllDocumentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDocumentsQuery = { __typename?: 'Query', documents?: { __typename?: 'DocumentEntityResponseCollection', data: Array<{ __typename?: 'DocumentEntity', id?: string | null, attributes?: { __typename?: 'Document', title: string, slug: string, originalTitle?: string | null, originalSlug?: string | null } | null }> } | null };

export type CreateSkNoticeMutationVariables = Exact<{
  data: NoticeInput;
}>;


export type CreateSkNoticeMutation = { __typename?: 'Mutation', createNotice?: { __typename?: 'NoticeEntityResponse', data?: { __typename?: 'NoticeEntity', id?: string | null } | null } | null };

export type CreateEnLocalizationNoticeMutationVariables = Exact<{
  data: NoticeInput;
  id: Scalars['ID'];
}>;


export type CreateEnLocalizationNoticeMutation = { __typename?: 'Mutation', createNoticeLocalization?: { __typename?: 'NoticeEntityResponse', data?: { __typename?: 'NoticeEntity', id?: string | null } | null } | null };

export type NoticeByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type NoticeByIdQuery = { __typename?: 'Query', notice?: { __typename?: 'NoticeEntityResponse', data?: { __typename?: 'NoticeEntity', id?: string | null, attributes?: { __typename?: 'Notice', slug: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null } | null } | null } | null };

export type NoticeBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Scalars['I18NLocaleCode'];
}>;


export type NoticeBySlugQuery = { __typename?: 'Query', notices?: { __typename?: 'NoticeEntityResponseCollection', data: Array<{ __typename?: 'NoticeEntity', id?: string | null, attributes?: { __typename?: 'Notice', slug: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null } | null }> } | null };

export type UpdatePageMutationVariables = Exact<{
  data: PageInput;
  id: Scalars['ID'];
  locale: Scalars['I18NLocaleCode'];
}>;


export type UpdatePageMutation = { __typename?: 'Mutation', updatePage?: { __typename?: 'PageEntityResponse', data?: { __typename?: 'PageEntity', id?: string | null } | null } | null };

export type UpdateEventMutationVariables = Exact<{
  data: EventInput;
  id: Scalars['ID'];
  locale: Scalars['I18NLocaleCode'];
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent?: { __typename?: 'EventEntityResponse', data?: { __typename?: 'EventEntity', id?: string | null } | null } | null };

export type UpdateNoticeMutationVariables = Exact<{
  data: NoticeInput;
  id: Scalars['ID'];
  locale: Scalars['I18NLocaleCode'];
}>;


export type UpdateNoticeMutation = { __typename?: 'Mutation', updateNotice?: { __typename?: 'NoticeEntityResponse', data?: { __typename?: 'NoticeEntity', id?: string | null } | null } | null };

export type UpdateBlogPostMutationVariables = Exact<{
  data: BlogPostInput;
  id: Scalars['ID'];
  locale: Scalars['I18NLocaleCode'];
}>;


export type UpdateBlogPostMutation = { __typename?: 'Mutation', updateBlogPost?: { __typename?: 'BlogPostEntityResponse', data?: { __typename?: 'BlogPostEntity', id?: string | null } | null } | null };


export const AllLocalhostEventsDocument = gql`
    query AllLocalhostEvents($locale: I18NLocaleCode!) {
  events(locale: $locale, pagination: {start: 0, limit: 10000}) {
    data {
      id
      __typename
      attributes {
        slug
        title
      }
    }
  }
}
    `;
export const EventsWithNoSlugDocument = gql`
    query EventsWithNoSlug($locale: I18NLocaleCode!) {
  events(
    locale: $locale
    pagination: {start: 0, limit: 10000}
    filters: {slug: {null: true}}
  ) {
    data {
      id
      __typename
      attributes {
        slug
        title
      }
    }
  }
}
    `;
export const UpdateEventNewSlugDocument = gql`
    mutation UpdateEventNewSlug($id: ID!, $newSlug: String!, $newTitle: String) {
  updateEvent(id: $id, data: {slug: $newSlug, title: $newTitle}) {
    data {
      id
      attributes {
        slug
        title
      }
    }
  }
}
    `;
export const EventsBySlugDocument = gql`
    query EventsBySlug($slug: String) {
  events(filters: {slug: {eq: $slug}}) {
    data {
      id
    }
  }
}
    `;
export const AllPagesDocument = gql`
    query AllPages($locale: I18NLocaleCode!) {
  pages(locale: $locale, pagination: {start: 0, limit: -1}) {
    data {
      id
      attributes {
        title
        slug
      }
    }
  }
}
    `;
export const AllPagesWithSectionsDocument = gql`
    query AllPagesWithSections($locale: I18NLocaleCode!) {
  pages(locale: $locale, pagination: {start: 0, limit: -1}) {
    data {
      id
      attributes {
        title
        slug
        sections {
          __typename
        }
      }
    }
  }
}
    `;
export const CreateBranchDocument = gql`
    mutation CreateBranch($data: BranchInput!) {
  createBranch(data: $data, locale: "sk") {
    data {
      id
    }
  }
}
    `;
export const AllBranchesDocument = gql`
    query AllBranches($locale: I18NLocaleCode!) {
  branches(locale: $locale, pagination: {start: 0, limit: -1}) {
    data {
      id
      attributes {
        title
        slug
      }
    }
  }
}
    `;
export const UpdateEventPlaceDocument = gql`
    mutation UpdateEventPlace($locale: I18NLocaleCode!, $id: ID!, $branchId: ID!) {
  updateEvent(id: $id, locale: $locale, data: {branch: $branchId}) {
    data {
      id
      attributes {
        branch {
          data {
            attributes {
              title
            }
          }
        }
      }
    }
  }
}
    `;
export const UpdateBranchMediasDocument = gql`
    mutation UpdateBranchMedias($locale: I18NLocaleCode!, $id: ID!, $mediaIds: [ID!]) {
  updateBranch(id: $id, locale: $locale, data: {medias: $mediaIds}) {
    data {
      id
      attributes {
        medias {
          data {
            id
          }
        }
      }
    }
  }
}
    `;
export const UpdateMediaCaptionAndAltDocument = gql`
    mutation UpdateMediaCaptionAndAlt($id: ID!, $caption: String, $alternativeText: String) {
  updateUploadFile(
    id: $id
    data: {caption: $caption, alternativeText: $alternativeText}
  ) {
    data {
      id
      attributes {
        caption
        alternativeText
        name
      }
    }
  }
}
    `;
export const AllNewsPagesDocument = gql`
    query AllNewsPages($locale: I18NLocaleCode!) {
  pages(
    locale: $locale
    pagination: {start: 0, limit: -1}
    filters: {layout: {eq: "news"}}
  ) {
    data {
      id
    }
  }
}
    `;
export const DeletePageDocument = gql`
    mutation DeletePage($locale: I18NLocaleCode!, $id: ID!) {
  deletePage(locale: $locale, id: $id) {
    data {
      id
    }
  }
}
    `;
export const AllPagesSlugsDocument = gql`
    query AllPagesSlugs($locale: I18NLocaleCode!) {
  pages(locale: $locale, pagination: {start: 0, limit: -1}) {
    data {
      id
      attributes {
        slug
      }
    }
  }
}
    `;
export const CreateDocumentCategoryDocument = gql`
    mutation CreateDocumentCategory($data: DocumentCategoryInput!) {
  createDocumentCategory(data: $data) {
    data {
      id
    }
  }
}
    `;
export const AllDocumentCategoriesDocument = gql`
    query AllDocumentCategories {
  documentCategories(pagination: {start: 0, limit: -1}) {
    data {
      id
      attributes {
        slug
      }
    }
  }
}
    `;
export const DocumentCategoryBySlugDocument = gql`
    query DocumentCategoryBySlug($slug: String) {
  documentCategories(filters: {slug: {eq: $slug}}) {
    data {
      id
    }
  }
}
    `;
export const CreateDocumentDocument = gql`
    mutation CreateDocument($data: DocumentInput!) {
  createDocument(data: $data) {
    data {
      id
    }
  }
}
    `;
export const CreateDisclosureDocument = gql`
    mutation CreateDisclosure($data: DisclosureInput!) {
  createDisclosure(data: $data) {
    data {
      id
    }
  }
}
    `;
export const UpdatePageSlugDocument = gql`
    mutation UpdatePageSlug($id: ID!, $newSlug: String!) {
  updatePage(id: $id, data: {newSlug: $newSlug}) {
    data {
      id
      attributes {
        slug
        newSlug
      }
    }
  }
}
    `;
export const DeleteDisclosureDocument = gql`
    mutation DeleteDisclosure($id: ID!) {
  deleteDisclosure(id: $id) {
    data {
      id
    }
  }
}
    `;
export const AllDisclosuresDocument = gql`
    query AllDisclosures {
  disclosures(pagination: {start: 0, limit: -1}) {
    data {
      id
      attributes {
        title
        slug
        originalTitle
        originalSlug
        file {
          data {
            id
          }
        }
      }
    }
  }
}
    `;
export const UpdateDisclosureDocument = gql`
    mutation UpdateDisclosure($id: ID!, $data: DisclosureInput!) {
  updateDisclosure(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export const UpdateDocumentDocument = gql`
    mutation UpdateDocument($id: ID!, $data: DocumentInput!) {
  updateDocument(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export const DocumentBySlugDocument = gql`
    query DocumentBySlug($slug: String!) {
  documents(filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        slug
      }
    }
  }
}
    `;
export const AllDocumentsDocument = gql`
    query AllDocuments {
  documents(pagination: {start: 0, limit: -1}) {
    data {
      id
      attributes {
        title
        slug
        originalTitle
        originalSlug
      }
    }
  }
}
    `;
export const CreateSkNoticeDocument = gql`
    mutation CreateSkNotice($data: NoticeInput!) {
  createNotice(data: $data, locale: "sk") {
    data {
      id
    }
  }
}
    `;
export const CreateEnLocalizationNoticeDocument = gql`
    mutation CreateEnLocalizationNotice($data: NoticeInput!, $id: ID!) {
  createNoticeLocalization(data: $data, id: $id, locale: "en") {
    data {
      id
    }
  }
}
    `;
export const NoticeByIdDocument = gql`
    query NoticeById($id: ID!) {
  notice(id: $id) {
    data {
      id
      attributes {
        slug
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
    `;
export const NoticeBySlugDocument = gql`
    query NoticeBySlug($slug: String!, $locale: I18NLocaleCode!) {
  notices(locale: $locale, filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        slug
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
    `;
export const UpdatePageDocument = gql`
    mutation UpdatePage($data: PageInput!, $id: ID!, $locale: I18NLocaleCode!) {
  updatePage(id: $id, locale: $locale, data: $data) {
    data {
      id
    }
  }
}
    `;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($data: EventInput!, $id: ID!, $locale: I18NLocaleCode!) {
  updateEvent(id: $id, locale: $locale, data: $data) {
    data {
      id
    }
  }
}
    `;
export const UpdateNoticeDocument = gql`
    mutation UpdateNotice($data: NoticeInput!, $id: ID!, $locale: I18NLocaleCode!) {
  updateNotice(id: $id, locale: $locale, data: $data) {
    data {
      id
    }
  }
}
    `;
export const UpdateBlogPostDocument = gql`
    mutation UpdateBlogPost($data: BlogPostInput!, $id: ID!, $locale: I18NLocaleCode!) {
  updateBlogPost(id: $id, locale: $locale, data: $data) {
    data {
      id
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllLocalhostEvents(variables: AllLocalhostEventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllLocalhostEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllLocalhostEventsQuery>(AllLocalhostEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllLocalhostEvents', 'query');
    },
    EventsWithNoSlug(variables: EventsWithNoSlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventsWithNoSlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventsWithNoSlugQuery>(EventsWithNoSlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'EventsWithNoSlug', 'query');
    },
    UpdateEventNewSlug(variables: UpdateEventNewSlugMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateEventNewSlugMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateEventNewSlugMutation>(UpdateEventNewSlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateEventNewSlug', 'mutation');
    },
    EventsBySlug(variables?: EventsBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventsBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventsBySlugQuery>(EventsBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'EventsBySlug', 'query');
    },
    AllPages(variables: AllPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllPagesQuery>(AllPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllPages', 'query');
    },
    AllPagesWithSections(variables: AllPagesWithSectionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllPagesWithSectionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllPagesWithSectionsQuery>(AllPagesWithSectionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllPagesWithSections', 'query');
    },
    CreateBranch(variables: CreateBranchMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateBranchMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateBranchMutation>(CreateBranchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateBranch', 'mutation');
    },
    AllBranches(variables: AllBranchesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllBranchesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllBranchesQuery>(AllBranchesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllBranches', 'query');
    },
    UpdateEventPlace(variables: UpdateEventPlaceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateEventPlaceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateEventPlaceMutation>(UpdateEventPlaceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateEventPlace', 'mutation');
    },
    UpdateBranchMedias(variables: UpdateBranchMediasMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateBranchMediasMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateBranchMediasMutation>(UpdateBranchMediasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateBranchMedias', 'mutation');
    },
    UpdateMediaCaptionAndAlt(variables: UpdateMediaCaptionAndAltMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateMediaCaptionAndAltMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateMediaCaptionAndAltMutation>(UpdateMediaCaptionAndAltDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateMediaCaptionAndAlt', 'mutation');
    },
    AllNewsPages(variables: AllNewsPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllNewsPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllNewsPagesQuery>(AllNewsPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllNewsPages', 'query');
    },
    DeletePage(variables: DeletePageMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeletePageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePageMutation>(DeletePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeletePage', 'mutation');
    },
    AllPagesSlugs(variables: AllPagesSlugsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllPagesSlugsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllPagesSlugsQuery>(AllPagesSlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllPagesSlugs', 'query');
    },
    CreateDocumentCategory(variables: CreateDocumentCategoryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateDocumentCategoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateDocumentCategoryMutation>(CreateDocumentCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateDocumentCategory', 'mutation');
    },
    AllDocumentCategories(variables?: AllDocumentCategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllDocumentCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllDocumentCategoriesQuery>(AllDocumentCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllDocumentCategories', 'query');
    },
    DocumentCategoryBySlug(variables?: DocumentCategoryBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DocumentCategoryBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DocumentCategoryBySlugQuery>(DocumentCategoryBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DocumentCategoryBySlug', 'query');
    },
    CreateDocument(variables: CreateDocumentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateDocumentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateDocumentMutation>(CreateDocumentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateDocument', 'mutation');
    },
    CreateDisclosure(variables: CreateDisclosureMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateDisclosureMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateDisclosureMutation>(CreateDisclosureDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateDisclosure', 'mutation');
    },
    UpdatePageSlug(variables: UpdatePageSlugMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdatePageSlugMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePageSlugMutation>(UpdatePageSlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdatePageSlug', 'mutation');
    },
    DeleteDisclosure(variables: DeleteDisclosureMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteDisclosureMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteDisclosureMutation>(DeleteDisclosureDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteDisclosure', 'mutation');
    },
    AllDisclosures(variables?: AllDisclosuresQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllDisclosuresQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllDisclosuresQuery>(AllDisclosuresDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllDisclosures', 'query');
    },
    UpdateDisclosure(variables: UpdateDisclosureMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDisclosureMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateDisclosureMutation>(UpdateDisclosureDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateDisclosure', 'mutation');
    },
    UpdateDocument(variables: UpdateDocumentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDocumentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateDocumentMutation>(UpdateDocumentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateDocument', 'mutation');
    },
    DocumentBySlug(variables: DocumentBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DocumentBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DocumentBySlugQuery>(DocumentBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DocumentBySlug', 'query');
    },
    AllDocuments(variables?: AllDocumentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllDocumentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllDocumentsQuery>(AllDocumentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllDocuments', 'query');
    },
    CreateSkNotice(variables: CreateSkNoticeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateSkNoticeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateSkNoticeMutation>(CreateSkNoticeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateSkNotice', 'mutation');
    },
    CreateEnLocalizationNotice(variables: CreateEnLocalizationNoticeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateEnLocalizationNoticeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateEnLocalizationNoticeMutation>(CreateEnLocalizationNoticeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateEnLocalizationNotice', 'mutation');
    },
    NoticeById(variables: NoticeByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NoticeByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NoticeByIdQuery>(NoticeByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'NoticeById', 'query');
    },
    NoticeBySlug(variables: NoticeBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NoticeBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NoticeBySlugQuery>(NoticeBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'NoticeBySlug', 'query');
    },
    UpdatePage(variables: UpdatePageMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdatePageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePageMutation>(UpdatePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdatePage', 'mutation');
    },
    UpdateEvent(variables: UpdateEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateEventMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateEventMutation>(UpdateEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateEvent', 'mutation');
    },
    UpdateNotice(variables: UpdateNoticeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateNoticeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateNoticeMutation>(UpdateNoticeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateNotice', 'mutation');
    },
    UpdateBlogPost(variables: UpdateBlogPostMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateBlogPostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateBlogPostMutation>(UpdateBlogPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateBlogPost', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;