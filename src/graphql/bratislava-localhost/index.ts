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
  BlogPostSectionsDynamicZoneInput: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  PagePageHeaderSectionsDynamicZoneInput: any;
  PageSectionsDynamicZoneInput: any;
  /** A time string with format HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Alert = {
  __typename?: 'Alert';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AlertRelationResponseCollection>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AlertEntity = {
  __typename?: 'AlertEntity';
  attributes?: Maybe<Alert>;
  id?: Maybe<Scalars['ID']>;
};

export type AlertEntityResponse = {
  __typename?: 'AlertEntityResponse';
  data?: Maybe<AlertEntity>;
};

export type AlertEntityResponseCollection = {
  __typename?: 'AlertEntityResponseCollection';
  data: Array<AlertEntity>;
  meta: ResponseCollectionMeta;
};

export type AlertFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AlertFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<AlertFiltersInput>;
  not?: InputMaybe<AlertFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AlertFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AlertInput = {
  text?: InputMaybe<Scalars['String']>;
};

export type AlertRelationResponseCollection = {
  __typename?: 'AlertRelationResponseCollection';
  data: Array<AlertEntity>;
};

export type BlogPost = {
  __typename?: 'BlogPost';
  addedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  coverImage?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date_added?: Maybe<Scalars['DateTime']>;
  excerpt?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BlogPostRelationResponseCollection>;
  moreLink?: Maybe<ComponentBlocksBlogPostLink>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  sections?: Maybe<Array<Maybe<BlogPostSectionsDynamicZone>>>;
  slug?: Maybe<Scalars['String']>;
  tag?: Maybe<TagEntityResponse>;
  title?: Maybe<Scalars['String']>;
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
  addedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BlogPostFiltersInput>>>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date_added?: InputMaybe<DateTimeFilterInput>;
  excerpt?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BlogPostFiltersInput>;
  moreLink?: InputMaybe<ComponentBlocksBlogPostLinkFiltersInput>;
  not?: InputMaybe<BlogPostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogPostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tag?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogPostInput = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  author?: InputMaybe<Scalars['ID']>;
  coverImage?: InputMaybe<Scalars['ID']>;
  date_added?: InputMaybe<Scalars['DateTime']>;
  excerpt?: InputMaybe<Scalars['String']>;
  moreLink?: InputMaybe<ComponentBlocksBlogPostLinkInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sections?: InputMaybe<Array<Scalars['BlogPostSectionsDynamicZoneInput']>>;
  slug?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BlogPostRelationResponseCollection = {
  __typename?: 'BlogPostRelationResponseCollection';
  data: Array<BlogPostEntity>;
};

export type BlogPostSectionsDynamicZone = ComponentSectionsColumnedText | ComponentSectionsDivider | ComponentSectionsFileList | ComponentSectionsGallery | ComponentSectionsNarrowText | ComponentSectionsNumericalList | ComponentSectionsTextWithImage | ComponentSectionsVideos | Error;

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

export type ComponentAccordionItemsFlatText = {
  __typename?: 'ComponentAccordionItemsFlatText';
  align?: Maybe<Enum_Componentaccordionitemsflattext_Align>;
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  moreLinkPage?: Maybe<PageEntityResponse>;
  moreLinkTitle?: Maybe<Scalars['String']>;
  moreLinkUrl?: Maybe<Scalars['String']>;
  width?: Maybe<Enum_Componentaccordionitemsflattext_Width>;
};

export type ComponentAccordionItemsFlatTextFiltersInput = {
  align?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsFlatTextFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  moreLinkPage?: InputMaybe<PageFiltersInput>;
  moreLinkTitle?: InputMaybe<StringFilterInput>;
  moreLinkUrl?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAccordionItemsFlatTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsFlatTextFiltersInput>>>;
  width?: InputMaybe<StringFilterInput>;
};

export type ComponentAccordionItemsFlatTextInput = {
  align?: InputMaybe<Enum_Componentaccordionitemsflattext_Align>;
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  moreLinkPage?: InputMaybe<Scalars['ID']>;
  moreLinkTitle?: InputMaybe<Scalars['String']>;
  moreLinkUrl?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Enum_Componentaccordionitemsflattext_Width>;
};

export type ComponentAccordionItemsInstitution = {
  __typename?: 'ComponentAccordionItemsInstitution';
  category?: Maybe<Scalars['String']>;
  firstColumn?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  secondColumn?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  thirdColumn?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  urlLabel?: Maybe<Scalars['String']>;
};

export type ComponentAccordionItemsInstitutionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsInstitutionFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  firstColumn?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAccordionItemsInstitutionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsInstitutionFiltersInput>>>;
  secondColumn?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  thirdColumn?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  urlLabel?: InputMaybe<StringFilterInput>;
};

export type ComponentAccordionItemsInstitutionInput = {
  category?: InputMaybe<Scalars['String']>;
  firstColumn?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  secondColumn?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  thirdColumn?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  urlLabel?: InputMaybe<Scalars['String']>;
};

export type ComponentAccordionItemsInstitutionNarrow = {
  __typename?: 'ComponentAccordionItemsInstitutionNarrow';
  category?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  urlLabel?: Maybe<Scalars['String']>;
};

export type ComponentAccordionItemsInstitutionNarrowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsInstitutionNarrowFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAccordionItemsInstitutionNarrowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsInstitutionNarrowFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  urlLabel?: InputMaybe<StringFilterInput>;
};

export type ComponentAccordionItemsInstitutionNarrowInput = {
  category?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  urlLabel?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksBlogPostLink = {
  __typename?: 'ComponentBlocksBlogPostLink';
  blogPost?: Maybe<BlogPostEntityResponse>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksBlogPostLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksBlogPostLinkFiltersInput>>>;
  blogPost?: InputMaybe<BlogPostFiltersInput>;
  not?: InputMaybe<ComponentBlocksBlogPostLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksBlogPostLinkFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksBlogPostLinkInput = {
  blogPost?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksBookmarkLink = {
  __typename?: 'ComponentBlocksBookmarkLink';
  href?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksBookmarkLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksBookmarkLinkFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksBookmarkLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksBookmarkLinkFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksBookmarkLinkInput = {
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksCommonLink = {
  __typename?: 'ComponentBlocksCommonLink';
  blogPost?: Maybe<BlogPostEntityResponse>;
  id: Scalars['ID'];
  label: Scalars['String'];
  page?: Maybe<PageEntityResponse>;
  plausibleId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksCommonLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksCommonLinkFiltersInput>>>;
  blogPost?: InputMaybe<BlogPostFiltersInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksCommonLinkFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  plausibleId?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksCommonLinkInput = {
  blogPost?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['ID']>;
  plausibleId?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksComparisonCard = {
  __typename?: 'ComponentBlocksComparisonCard';
  iconMedia?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  items: Array<Maybe<ComponentBlocksComparisonItem>>;
  title: Scalars['String'];
};


export type ComponentBlocksComparisonCardItemsArgs = {
  filters?: InputMaybe<ComponentBlocksComparisonItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlocksComparisonCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksComparisonCardFiltersInput>>>;
  items?: InputMaybe<ComponentBlocksComparisonItemFiltersInput>;
  not?: InputMaybe<ComponentBlocksComparisonCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksComparisonCardFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksComparisonCardInput = {
  iconMedia?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  items?: InputMaybe<Array<InputMaybe<ComponentBlocksComparisonItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksComparisonItem = {
  __typename?: 'ComponentBlocksComparisonItem';
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type ComponentBlocksComparisonItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksComparisonItemFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksComparisonItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksComparisonItemFiltersInput>>>;
};

export type ComponentBlocksComparisonItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksDocListExtensions = {
  __typename?: 'ComponentBlocksDocListExtensions';
  document?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  validFrom?: Maybe<Scalars['Date']>;
};

export type ComponentBlocksDocListExtensionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksDocListExtensionsFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksDocListExtensionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksDocListExtensionsFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  validFrom?: InputMaybe<DateFilterInput>;
};

export type ComponentBlocksDocListExtensionsInput = {
  document?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  validFrom?: InputMaybe<Scalars['Date']>;
};

export type ComponentBlocksFile = {
  __typename?: 'ComponentBlocksFile';
  category?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksFileFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksFileFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksFileFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksFileInput = {
  category?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  media?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksFileItem = {
  __typename?: 'ComponentBlocksFileItem';
  id: Scalars['ID'];
  media: UploadFileEntityResponse;
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksFileItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksFileItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  media?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksFooterColumn = {
  __typename?: 'ComponentBlocksFooterColumn';
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentBlocksCommonLink>>>;
  title: Scalars['String'];
};


export type ComponentBlocksFooterColumnLinksArgs = {
  filters?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlocksFooterColumnFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksFooterColumnFiltersInput>>>;
  links?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  not?: InputMaybe<ComponentBlocksFooterColumnFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksFooterColumnFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksFooterColumnInput = {
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentBlocksCommonLinkInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksFooterSection = {
  __typename?: 'ComponentBlocksFooterSection';
  id: Scalars['ID'];
  pageLinks?: Maybe<Array<Maybe<ComponentBlocksPageLink>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentBlocksFooterSectionPageLinksArgs = {
  filters?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlocksFooterSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksFooterSectionFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksFooterSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksFooterSectionFiltersInput>>>;
  pageLinks?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksFooterSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  pageLinks?: InputMaybe<Array<InputMaybe<ComponentBlocksPageLinkInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksGalleryItem = {
  __typename?: 'ComponentBlocksGalleryItem';
  id: Scalars['ID'];
  imgSubtext?: Maybe<Scalars['String']>;
  imgSubtitle?: Maybe<Scalars['String']>;
  imgTitle?: Maybe<Scalars['String']>;
  media?: Maybe<UploadFileEntityResponse>;
};

export type ComponentBlocksGalleryItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksGalleryItemFiltersInput>>>;
  imgSubtext?: InputMaybe<StringFilterInput>;
  imgSubtitle?: InputMaybe<StringFilterInput>;
  imgTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksGalleryItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksGalleryItemFiltersInput>>>;
};

export type ComponentBlocksGalleryItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  imgSubtext?: InputMaybe<Scalars['String']>;
  imgSubtitle?: InputMaybe<Scalars['String']>;
  imgTitle?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlocksHomepageBookmark = {
  __typename?: 'ComponentBlocksHomepageBookmark';
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<ComponentBlocksBookmarkLink>;
  picture?: Maybe<UploadFileEntityResponse>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type ComponentBlocksHomepageBookmarkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksHomepageBookmarkFiltersInput>>>;
  headline?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentBlocksBookmarkLinkFiltersInput>;
  not?: InputMaybe<ComponentBlocksHomepageBookmarkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksHomepageBookmarkFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  variant?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksHomepageBookmarkInput = {
  headline?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<ComponentBlocksBookmarkLinkInput>;
  picture?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksHomepageHighlightsItem = {
  __typename?: 'ComponentBlocksHomepageHighlightsItem';
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  link: ComponentBlocksCommonLink;
};

export type ComponentBlocksHomepageHighlightsItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksHomepageHighlightsItemFiltersInput>>>;
  link?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  not?: InputMaybe<ComponentBlocksHomepageHighlightsItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksHomepageHighlightsItemFiltersInput>>>;
};

export type ComponentBlocksHomepageHighlightsItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<ComponentBlocksCommonLinkInput>;
};

export type ComponentBlocksIconWithTitleAndDescription = {
  __typename?: 'ComponentBlocksIconWithTitleAndDescription';
  desc?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksIconWithTitleAndDescriptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksIconWithTitleAndDescriptionFiltersInput>>>;
  desc?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksIconWithTitleAndDescriptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksIconWithTitleAndDescriptionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksIconWithTitleAndDescriptionInput = {
  desc?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksInBa = {
  __typename?: 'ComponentBlocksInBa';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksInBaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksInBaFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksInBaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksInBaFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksInBaInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksNumericalListItem = {
  __typename?: 'ComponentBlocksNumericalListItem';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksNumericalListItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksNumericalListItemFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksNumericalListItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksNumericalListItemFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksNumericalListItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksPageLink = {
  __typename?: 'ComponentBlocksPageLink';
  anchor?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  page?: Maybe<PageEntityResponse>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksPageLinkFiltersInput = {
  anchor?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksPageLinkFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksPageLinkFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksPageLinkInput = {
  anchor?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksProsAndConsCard = {
  __typename?: 'ComponentBlocksProsAndConsCard';
  id: Scalars['ID'];
  items: Array<Maybe<ComponentBlocksComparisonItem>>;
  title: Scalars['String'];
};


export type ComponentBlocksProsAndConsCardItemsArgs = {
  filters?: InputMaybe<ComponentBlocksComparisonItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlocksProsAndConsCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksProsAndConsCardFiltersInput>>>;
  items?: InputMaybe<ComponentBlocksComparisonItemFiltersInput>;
  not?: InputMaybe<ComponentBlocksProsAndConsCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksProsAndConsCardFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksProsAndConsCardInput = {
  id?: InputMaybe<Scalars['ID']>;
  items?: InputMaybe<Array<InputMaybe<ComponentBlocksComparisonItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksSpaceInfo = {
  __typename?: 'ComponentBlocksSpaceInfo';
  bigGapCapacity?: Maybe<Scalars['Long']>;
  buttonTitle?: Maybe<Scalars['String']>;
  footerText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  imagePosition?: Maybe<Enum_Componentblocksspaceinfo_Imageposition>;
  linkTitle?: Maybe<Scalars['String']>;
  smallGapCapacity?: Maybe<Scalars['Long']>;
  spaceTitle?: Maybe<Scalars['String']>;
  subText?: Maybe<Scalars['String']>;
};

export type ComponentBlocksSpaceInfoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksSpaceInfoFiltersInput>>>;
  bigGapCapacity?: InputMaybe<LongFilterInput>;
  buttonTitle?: InputMaybe<StringFilterInput>;
  footerText?: InputMaybe<StringFilterInput>;
  imagePosition?: InputMaybe<StringFilterInput>;
  linkTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksSpaceInfoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksSpaceInfoFiltersInput>>>;
  smallGapCapacity?: InputMaybe<LongFilterInput>;
  spaceTitle?: InputMaybe<StringFilterInput>;
  subText?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksSpaceInfoInput = {
  bigGapCapacity?: InputMaybe<Scalars['Long']>;
  buttonTitle?: InputMaybe<Scalars['String']>;
  footerText?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  imagePosition?: InputMaybe<Enum_Componentblocksspaceinfo_Imageposition>;
  linkTitle?: InputMaybe<Scalars['String']>;
  smallGapCapacity?: InputMaybe<Scalars['Long']>;
  spaceTitle?: InputMaybe<Scalars['String']>;
  subText?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksSubpage = {
  __typename?: 'ComponentBlocksSubpage';
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksSubpageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksSubpageFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksSubpageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksSubpageFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksSubpageInput = {
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksTimelineItem = {
  __typename?: 'ComponentBlocksTimelineItem';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksTimelineItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksTimelineItemFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksTimelineItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksTimelineItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksTimelineItemInput = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksTopServicesItem = {
  __typename?: 'ComponentBlocksTopServicesItem';
  icon: Enum_Componentblockstopservicesitem_Icon;
  id: Scalars['ID'];
  link: ComponentBlocksCommonLink;
};

export type ComponentBlocksTopServicesItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksTopServicesItemFiltersInput>>>;
  icon?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  not?: InputMaybe<ComponentBlocksTopServicesItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksTopServicesItemFiltersInput>>>;
};

export type ComponentBlocksTopServicesItemInput = {
  icon?: InputMaybe<Enum_Componentblockstopservicesitem_Icon>;
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<ComponentBlocksCommonLinkInput>;
};

export type ComponentBlocksVideo = {
  __typename?: 'ComponentBlocksVideo';
  id: Scalars['ID'];
  speaker?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksVideoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksVideoFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksVideoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksVideoFiltersInput>>>;
  speaker?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksVideoInput = {
  id?: InputMaybe<Scalars['ID']>;
  speaker?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentGeneralHeader = {
  __typename?: 'ComponentGeneralHeader';
  accountLink?: Maybe<ComponentBlocksCommonLink>;
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentGeneralHeaderLink>>>;
};


export type ComponentGeneralHeaderLinksArgs = {
  filters?: InputMaybe<ComponentGeneralHeaderLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentGeneralHeaderFiltersInput = {
  accountLink?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentGeneralHeaderFiltersInput>>>;
  links?: InputMaybe<ComponentGeneralHeaderLinkFiltersInput>;
  not?: InputMaybe<ComponentGeneralHeaderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGeneralHeaderFiltersInput>>>;
};

export type ComponentGeneralHeaderInput = {
  accountLink?: InputMaybe<ComponentBlocksCommonLinkInput>;
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentGeneralHeaderLinkInput>>>;
};

export type ComponentGeneralHeaderLink = {
  __typename?: 'ComponentGeneralHeaderLink';
  icon: Enum_Componentgeneralheaderlink_Icon;
  id: Scalars['ID'];
  label: Scalars['String'];
  page?: Maybe<PageEntityResponse>;
  showOnDesktop: Scalars['Boolean'];
  showOnMobile: Scalars['Boolean'];
  url?: Maybe<Scalars['String']>;
};

export type ComponentGeneralHeaderLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentGeneralHeaderLinkFiltersInput>>>;
  icon?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentGeneralHeaderLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGeneralHeaderLinkFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  showOnDesktop?: InputMaybe<BooleanFilterInput>;
  showOnMobile?: InputMaybe<BooleanFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentGeneralHeaderLinkInput = {
  icon?: InputMaybe<Enum_Componentgeneralheaderlink_Icon>;
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['ID']>;
  showOnDesktop?: InputMaybe<Scalars['Boolean']>;
  showOnMobile?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentMenuMenuItem = {
  __typename?: 'ComponentMenuMenuItem';
  icon: Enum_Componentmenumenuitem_Icon;
  id: Scalars['ID'];
  label: Scalars['String'];
  page?: Maybe<PageEntityResponse>;
  sections?: Maybe<Array<Maybe<ComponentMenuMenuSection>>>;
};


export type ComponentMenuMenuItemSectionsArgs = {
  filters?: InputMaybe<ComponentMenuMenuSectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentMenuMenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuMenuItemFiltersInput>>>;
  icon?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMenuMenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuMenuItemFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  sections?: InputMaybe<ComponentMenuMenuSectionFiltersInput>;
};

export type ComponentMenuMenuItemInput = {
  icon?: InputMaybe<Enum_Componentmenumenuitem_Icon>;
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['ID']>;
  sections?: InputMaybe<Array<InputMaybe<ComponentMenuMenuSectionInput>>>;
};

export type ComponentMenuMenuLink = {
  __typename?: 'ComponentMenuMenuLink';
  id: Scalars['ID'];
  label: Scalars['String'];
  page?: Maybe<PageEntityResponse>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentMenuMenuLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMenuMenuLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentMenuMenuLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentMenuMenuSection = {
  __typename?: 'ComponentMenuMenuSection';
  icon: Enum_Componentmenumenusection_Icon;
  id: Scalars['ID'];
  label: Scalars['String'];
  links?: Maybe<Array<Maybe<ComponentMenuMenuLink>>>;
  page?: Maybe<PageEntityResponse>;
};


export type ComponentMenuMenuSectionLinksArgs = {
  filters?: InputMaybe<ComponentMenuMenuLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentMenuMenuSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuMenuSectionFiltersInput>>>;
  icon?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  links?: InputMaybe<ComponentMenuMenuLinkFiltersInput>;
  not?: InputMaybe<ComponentMenuMenuSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuMenuSectionFiltersInput>>>;
  page?: InputMaybe<PageFiltersInput>;
};

export type ComponentMenuMenuSectionInput = {
  icon?: InputMaybe<Enum_Componentmenumenusection_Icon>;
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkInput>>>;
  page?: InputMaybe<Scalars['ID']>;
};

export type ComponentOsItemsAdvancedAccordionDepartment = {
  __typename?: 'ComponentOsItemsAdvancedAccordionDepartment';
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<ComponentOsItemsAdvancedAccordionSubItem>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentOsItemsAdvancedAccordionDepartmentItemsArgs = {
  filters?: InputMaybe<ComponentOsItemsAdvancedAccordionSubItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentOsItemsAdvancedAccordionDepartmentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionDepartmentFiltersInput>>>;
  items?: InputMaybe<ComponentOsItemsAdvancedAccordionSubItemFiltersInput>;
  not?: InputMaybe<ComponentOsItemsAdvancedAccordionDepartmentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionDepartmentFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentOsItemsAdvancedAccordionDepartmentInput = {
  id?: InputMaybe<Scalars['ID']>;
  items?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionSubItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentOsItemsAdvancedAccordionItem = {
  __typename?: 'ComponentOsItemsAdvancedAccordionItem';
  departments?: Maybe<Array<Maybe<ComponentOsItemsAdvancedAccordionDepartment>>>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};


export type ComponentOsItemsAdvancedAccordionItemDepartmentsArgs = {
  filters?: InputMaybe<ComponentOsItemsAdvancedAccordionDepartmentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentOsItemsAdvancedAccordionItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionItemFiltersInput>>>;
  departments?: InputMaybe<ComponentOsItemsAdvancedAccordionDepartmentFiltersInput>;
  not?: InputMaybe<ComponentOsItemsAdvancedAccordionItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentOsItemsAdvancedAccordionItemInput = {
  departments?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionDepartmentInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentOsItemsAdvancedAccordionSubItem = {
  __typename?: 'ComponentOsItemsAdvancedAccordionSubItem';
  id: Scalars['ID'];
  isGroupTitle?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<ComponentOsItemsAdvancedAccordionSubSubItem>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentOsItemsAdvancedAccordionSubItemItemsArgs = {
  filters?: InputMaybe<ComponentOsItemsAdvancedAccordionSubSubItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentOsItemsAdvancedAccordionSubItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionSubItemFiltersInput>>>;
  isGroupTitle?: InputMaybe<BooleanFilterInput>;
  items?: InputMaybe<ComponentOsItemsAdvancedAccordionSubSubItemFiltersInput>;
  not?: InputMaybe<ComponentOsItemsAdvancedAccordionSubItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionSubItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentOsItemsAdvancedAccordionSubItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  isGroupTitle?: InputMaybe<Scalars['Boolean']>;
  items?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionSubSubItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentOsItemsAdvancedAccordionSubSubItem = {
  __typename?: 'ComponentOsItemsAdvancedAccordionSubSubItem';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentOsItemsAdvancedAccordionSubSubItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionSubSubItemFiltersInput>>>;
  not?: InputMaybe<ComponentOsItemsAdvancedAccordionSubSubItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionSubSubItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentOsItemsAdvancedAccordionSubSubItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsAccordion = {
  __typename?: 'ComponentSectionsAccordion';
  flatText?: Maybe<Array<Maybe<ComponentAccordionItemsFlatText>>>;
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  institutions?: Maybe<Array<Maybe<ComponentAccordionItemsInstitution>>>;
  institutionsNarrow?: Maybe<Array<Maybe<ComponentAccordionItemsInstitutionNarrow>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsAccordionFlatTextArgs = {
  filters?: InputMaybe<ComponentAccordionItemsFlatTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsAccordionInstitutionsArgs = {
  filters?: InputMaybe<ComponentAccordionItemsInstitutionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsAccordionInstitutionsNarrowArgs = {
  filters?: InputMaybe<ComponentAccordionItemsInstitutionNarrowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsAccordionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsAccordionFiltersInput>>>;
  flatText?: InputMaybe<ComponentAccordionItemsFlatTextFiltersInput>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  institutions?: InputMaybe<ComponentAccordionItemsInstitutionFiltersInput>;
  institutionsNarrow?: InputMaybe<ComponentAccordionItemsInstitutionNarrowFiltersInput>;
  not?: InputMaybe<ComponentSectionsAccordionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsAccordionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsAccordionInput = {
  flatText?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsFlatTextInput>>>;
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  institutions?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsInstitutionInput>>>;
  institutionsNarrow?: InputMaybe<Array<InputMaybe<ComponentAccordionItemsInstitutionNarrowInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsArticlesList = {
  __typename?: 'ComponentSectionsArticlesList';
  category?: Maybe<PageCategoryEntityResponse>;
  filtering?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsArticlesListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsArticlesListFiltersInput>>>;
  category?: InputMaybe<PageCategoryFiltersInput>;
  filtering?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSectionsArticlesListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsArticlesListFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsArticlesListInput = {
  category?: InputMaybe<Scalars['ID']>;
  filtering?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsBanner = {
  __typename?: 'ComponentSectionsBanner';
  content?: Maybe<Scalars['String']>;
  contentPosition: Enum_Componentsectionsbanner_Contentposition;
  id: Scalars['ID'];
  media: UploadFileEntityResponse;
  primaryLink?: Maybe<ComponentBlocksCommonLink>;
  secondaryLink?: Maybe<ComponentBlocksCommonLink>;
  tertiaryLink?: Maybe<ComponentBlocksCommonLink>;
  title: Scalars['String'];
  variant: Enum_Componentsectionsbanner_Variant;
};

export type ComponentSectionsBannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsBannerFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  contentPosition?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionsBannerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsBannerFiltersInput>>>;
  primaryLink?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  secondaryLink?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  tertiaryLink?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  variant?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsBannerInput = {
  content?: InputMaybe<Scalars['String']>;
  contentPosition?: InputMaybe<Enum_Componentsectionsbanner_Contentposition>;
  id?: InputMaybe<Scalars['ID']>;
  media?: InputMaybe<Scalars['ID']>;
  primaryLink?: InputMaybe<ComponentBlocksCommonLinkInput>;
  secondaryLink?: InputMaybe<ComponentBlocksCommonLinkInput>;
  tertiaryLink?: InputMaybe<ComponentBlocksCommonLinkInput>;
  title?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<Enum_Componentsectionsbanner_Variant>;
};

export type ComponentSectionsBlogPostsList = {
  __typename?: 'ComponentSectionsBlogPostsList';
  id: Scalars['ID'];
  tags?: Maybe<TagRelationResponseCollection>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsBlogPostsListTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsBlogPostsListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsBlogPostsListFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsBlogPostsListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsBlogPostsListFiltersInput>>>;
  tags?: InputMaybe<TagFiltersInput>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsBlogPostsListInput = {
  id?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsCalculator = {
  __typename?: 'ComponentSectionsCalculator';
  another_adult_value?: Maybe<Scalars['Float']>;
  child_value?: Maybe<Scalars['Float']>;
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  single_adult_value?: Maybe<Scalars['Float']>;
};

export type ComponentSectionsCalculatorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsCalculatorFiltersInput>>>;
  another_adult_value?: InputMaybe<FloatFilterInput>;
  child_value?: InputMaybe<FloatFilterInput>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSectionsCalculatorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsCalculatorFiltersInput>>>;
  single_adult_value?: InputMaybe<FloatFilterInput>;
};

export type ComponentSectionsCalculatorInput = {
  another_adult_value?: InputMaybe<Scalars['Float']>;
  child_value?: InputMaybe<Scalars['Float']>;
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  single_adult_value?: InputMaybe<Scalars['Float']>;
};

export type ComponentSectionsColumnedText = {
  __typename?: 'ComponentSectionsColumnedText';
  content?: Maybe<Scalars['String']>;
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type ComponentSectionsColumnedTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsColumnedTextFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSectionsColumnedTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsColumnedTextFiltersInput>>>;
};

export type ComponentSectionsColumnedTextInput = {
  content?: InputMaybe<Scalars['String']>;
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentSectionsComparisonSection = {
  __typename?: 'ComponentSectionsComparisonSection';
  cards: Array<Maybe<ComponentBlocksComparisonCard>>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  textAlign: Enum_Componentsectionscomparisonsection_Textalign;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsComparisonSectionCardsArgs = {
  filters?: InputMaybe<ComponentBlocksComparisonCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsComparisonSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsComparisonSectionFiltersInput>>>;
  cards?: InputMaybe<ComponentBlocksComparisonCardFiltersInput>;
  not?: InputMaybe<ComponentSectionsComparisonSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsComparisonSectionFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  textAlign?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsComparisonSectionInput = {
  cards?: InputMaybe<Array<InputMaybe<ComponentBlocksComparisonCardInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  textAlign?: InputMaybe<Enum_Componentsectionscomparisonsection_Textalign>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsContact = {
  __typename?: 'ComponentSectionsContact';
  address?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailLabel?: Maybe<Scalars['String']>;
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  phoneLabel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsContactFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsContactFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  emailLabel?: InputMaybe<StringFilterInput>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSectionsContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsContactFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  phoneLabel?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsContactInput = {
  address?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  emailLabel?: InputMaybe<Scalars['String']>;
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneLabel?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsDivider = {
  __typename?: 'ComponentSectionsDivider';
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  style?: Maybe<Enum_Componentsectionsdivider_Style>;
};

export type ComponentSectionsDividerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsDividerFiltersInput>>>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSectionsDividerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsDividerFiltersInput>>>;
  style?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsDividerInput = {
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  style?: InputMaybe<Enum_Componentsectionsdivider_Style>;
};

export type ComponentSectionsDocumentList = {
  __typename?: 'ComponentSectionsDocumentList';
  id: Scalars['ID'];
  vzns?: Maybe<VznRelationResponseCollection>;
};


export type ComponentSectionsDocumentListVznsArgs = {
  filters?: InputMaybe<VznFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsDocumentListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsDocumentListFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsDocumentListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsDocumentListFiltersInput>>>;
  vzns?: InputMaybe<VznFiltersInput>;
};

export type ComponentSectionsDocumentListInput = {
  id?: InputMaybe<Scalars['ID']>;
  vzns?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentSectionsFeaturedBlogPosts = {
  __typename?: 'ComponentSectionsFeaturedBlogPosts';
  first_blog?: Maybe<BlogPostEntityResponse>;
  id: Scalars['ID'];
  second_blog?: Maybe<BlogPostEntityResponse>;
  third_blog?: Maybe<BlogPostEntityResponse>;
};

export type ComponentSectionsFeaturedBlogPostsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsFeaturedBlogPostsFiltersInput>>>;
  first_blog?: InputMaybe<BlogPostFiltersInput>;
  not?: InputMaybe<ComponentSectionsFeaturedBlogPostsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsFeaturedBlogPostsFiltersInput>>>;
  second_blog?: InputMaybe<BlogPostFiltersInput>;
  third_blog?: InputMaybe<BlogPostFiltersInput>;
};

export type ComponentSectionsFeaturedBlogPostsInput = {
  first_blog?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  second_blog?: InputMaybe<Scalars['ID']>;
  third_blog?: InputMaybe<Scalars['ID']>;
};

export type ComponentSectionsFileList = {
  __typename?: 'ComponentSectionsFileList';
  fileList?: Maybe<Array<Maybe<ComponentBlocksFile>>>;
  files?: Maybe<Array<Maybe<ComponentBlocksFileItem>>>;
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  variant?: Maybe<Enum_Componentsectionsfilelist_Variant>;
};


export type ComponentSectionsFileListFileListArgs = {
  filters?: InputMaybe<ComponentBlocksFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsFileListFilesArgs = {
  filters?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsFileListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsFileListFiltersInput>>>;
  fileList?: InputMaybe<ComponentBlocksFileFiltersInput>;
  files?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSectionsFileListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsFileListFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  variant?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsFileListInput = {
  fileList?: InputMaybe<Array<InputMaybe<ComponentBlocksFileInput>>>;
  files?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemInput>>>;
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<Enum_Componentsectionsfilelist_Variant>;
};

export type ComponentSectionsGallery = {
  __typename?: 'ComponentSectionsGallery';
  galleryItems?: Maybe<Array<Maybe<ComponentBlocksGalleryItem>>>;
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsGalleryGalleryItemsArgs = {
  filters?: InputMaybe<ComponentBlocksGalleryItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsGalleryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsGalleryFiltersInput>>>;
  galleryItems?: InputMaybe<ComponentBlocksGalleryItemFiltersInput>;
  not?: InputMaybe<ComponentSectionsGalleryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsGalleryFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsGalleryInput = {
  galleryItems?: InputMaybe<Array<InputMaybe<ComponentBlocksGalleryItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsHomepageEvents = {
  __typename?: 'ComponentSectionsHomepageEvents';
  eventsPageLink?: Maybe<ComponentBlocksCommonLink>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsHomepageEventsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsHomepageEventsFiltersInput>>>;
  eventsPageLink?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  not?: InputMaybe<ComponentSectionsHomepageEventsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsHomepageEventsFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsHomepageEventsInput = {
  eventsPageLink?: InputMaybe<ComponentBlocksCommonLinkInput>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsHomepageHighlights = {
  __typename?: 'ComponentSectionsHomepageHighlights';
  cards?: Maybe<Array<Maybe<ComponentBlocksHomepageHighlightsItem>>>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsHomepageHighlightsCardsArgs = {
  filters?: InputMaybe<ComponentBlocksHomepageHighlightsItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsHomepageHighlightsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsHomepageHighlightsFiltersInput>>>;
  cards?: InputMaybe<ComponentBlocksHomepageHighlightsItemFiltersInput>;
  not?: InputMaybe<ComponentSectionsHomepageHighlightsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsHomepageHighlightsFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsHomepageHighlightsInput = {
  cards?: InputMaybe<Array<InputMaybe<ComponentBlocksHomepageHighlightsItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsHomepageMayorAndCouncil = {
  __typename?: 'ComponentSectionsHomepageMayorAndCouncil';
  councilCard?: Maybe<ComponentBlocksCommonLink>;
  id: Scalars['ID'];
  mayorCard?: Maybe<ComponentBlocksCommonLink>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsHomepageMayorAndCouncilFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsHomepageMayorAndCouncilFiltersInput>>>;
  councilCard?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  mayorCard?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  not?: InputMaybe<ComponentSectionsHomepageMayorAndCouncilFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsHomepageMayorAndCouncilFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsHomepageMayorAndCouncilInput = {
  councilCard?: InputMaybe<ComponentBlocksCommonLinkInput>;
  id?: InputMaybe<Scalars['ID']>;
  mayorCard?: InputMaybe<ComponentBlocksCommonLinkInput>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsHomepageTabs = {
  __typename?: 'ComponentSectionsHomepageTabs';
  id: Scalars['ID'];
  leftNewsItem?: Maybe<BlogPostEntityResponse>;
  newsPageLink?: Maybe<ComponentBlocksCommonLink>;
  officialBoardPageLink?: Maybe<ComponentBlocksCommonLink>;
  rightNewsItem?: Maybe<BlogPostEntityResponse>;
  roadClosuresPageLink?: Maybe<ComponentBlocksCommonLink>;
};

export type ComponentSectionsHomepageTabsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsHomepageTabsFiltersInput>>>;
  leftNewsItem?: InputMaybe<BlogPostFiltersInput>;
  newsPageLink?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  not?: InputMaybe<ComponentSectionsHomepageTabsFiltersInput>;
  officialBoardPageLink?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsHomepageTabsFiltersInput>>>;
  rightNewsItem?: InputMaybe<BlogPostFiltersInput>;
  roadClosuresPageLink?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
};

export type ComponentSectionsHomepageTabsInput = {
  id?: InputMaybe<Scalars['ID']>;
  leftNewsItem?: InputMaybe<Scalars['ID']>;
  newsPageLink?: InputMaybe<ComponentBlocksCommonLinkInput>;
  officialBoardPageLink?: InputMaybe<ComponentBlocksCommonLinkInput>;
  rightNewsItem?: InputMaybe<Scalars['ID']>;
  roadClosuresPageLink?: InputMaybe<ComponentBlocksCommonLinkInput>;
};

export type ComponentSectionsIconTitleDesc = {
  __typename?: 'ComponentSectionsIconTitleDesc';
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  list?: Maybe<Array<Maybe<ComponentBlocksIconWithTitleAndDescription>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsIconTitleDescListArgs = {
  filters?: InputMaybe<ComponentBlocksIconWithTitleAndDescriptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsIconTitleDescFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsIconTitleDescFiltersInput>>>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  list?: InputMaybe<ComponentBlocksIconWithTitleAndDescriptionFiltersInput>;
  not?: InputMaybe<ComponentSectionsIconTitleDescFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsIconTitleDescFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsIconTitleDescInput = {
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  list?: InputMaybe<Array<InputMaybe<ComponentBlocksIconWithTitleAndDescriptionInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsIframe = {
  __typename?: 'ComponentSectionsIframe';
  allowFullscreen: Scalars['Boolean'];
  allowGeolocation?: Maybe<Scalars['Boolean']>;
  css?: Maybe<Scalars['String']>;
  fullHeight: Scalars['Boolean'];
  id: Scalars['ID'];
  iframeHeight: Scalars['String'];
  iframeWidth: Enum_Componentsectionsiframe_Iframewidth;
  url: Scalars['String'];
};

export type ComponentSectionsIframeFiltersInput = {
  allowFullscreen?: InputMaybe<BooleanFilterInput>;
  allowGeolocation?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsIframeFiltersInput>>>;
  css?: InputMaybe<StringFilterInput>;
  fullHeight?: InputMaybe<BooleanFilterInput>;
  iframeHeight?: InputMaybe<StringFilterInput>;
  iframeWidth?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSectionsIframeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsIframeFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsIframeInput = {
  allowFullscreen?: InputMaybe<Scalars['Boolean']>;
  allowGeolocation?: InputMaybe<Scalars['Boolean']>;
  css?: InputMaybe<Scalars['String']>;
  fullHeight?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  iframeHeight?: InputMaybe<Scalars['String']>;
  iframeWidth?: InputMaybe<Enum_Componentsectionsiframe_Iframewidth>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsLinks = {
  __typename?: 'ComponentSectionsLinks';
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  pageLinks?: Maybe<Array<Maybe<ComponentBlocksPageLink>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsLinksPageLinksArgs = {
  filters?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsLinksFiltersInput>>>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSectionsLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsLinksFiltersInput>>>;
  pageLinks?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsLinksInput = {
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  pageLinks?: InputMaybe<Array<InputMaybe<ComponentBlocksPageLinkInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsNarrowText = {
  __typename?: 'ComponentSectionsNarrowText';
  align?: Maybe<Enum_Componentsectionsnarrowtext_Align>;
  content?: Maybe<Scalars['String']>;
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  width?: Maybe<Enum_Componentsectionsnarrowtext_Width>;
};

export type ComponentSectionsNarrowTextFiltersInput = {
  align?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsNarrowTextFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSectionsNarrowTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsNarrowTextFiltersInput>>>;
  width?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsNarrowTextInput = {
  align?: InputMaybe<Enum_Componentsectionsnarrowtext_Align>;
  content?: InputMaybe<Scalars['String']>;
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  width?: InputMaybe<Enum_Componentsectionsnarrowtext_Width>;
};

export type ComponentSectionsNewsletter = {
  __typename?: 'ComponentSectionsNewsletter';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsNewsletterFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsNewsletterFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsNewsletterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsNewsletterFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsNewsletterInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsNumericalList = {
  __typename?: 'ComponentSectionsNumericalList';
  buttonLink?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<ComponentBlocksNumericalListItem>>>;
  title?: Maybe<Scalars['String']>;
  variant?: Maybe<Enum_Componentsectionsnumericallist_Variant>;
};


export type ComponentSectionsNumericalListItemsArgs = {
  filters?: InputMaybe<ComponentBlocksNumericalListItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsNumericalListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsNumericalListFiltersInput>>>;
  buttonLink?: InputMaybe<StringFilterInput>;
  buttonText?: InputMaybe<StringFilterInput>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  items?: InputMaybe<ComponentBlocksNumericalListItemFiltersInput>;
  not?: InputMaybe<ComponentSectionsNumericalListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsNumericalListFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  variant?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsNumericalListInput = {
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  items?: InputMaybe<Array<InputMaybe<ComponentBlocksNumericalListItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<Enum_Componentsectionsnumericallist_Variant>;
};

export type ComponentSectionsOfficialBoard = {
  __typename?: 'ComponentSectionsOfficialBoard';
  id: Scalars['ID'];
};

export type ComponentSectionsOfficialBoardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsOfficialBoardFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsOfficialBoardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsOfficialBoardFiltersInput>>>;
};

export type ComponentSectionsOfficialBoardInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentSectionsOrganizationalStructure = {
  __typename?: 'ComponentSectionsOrganizationalStructure';
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<ComponentOsItemsAdvancedAccordionItem>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsOrganizationalStructureItemsArgs = {
  filters?: InputMaybe<ComponentOsItemsAdvancedAccordionItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsOrganizationalStructureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsOrganizationalStructureFiltersInput>>>;
  items?: InputMaybe<ComponentOsItemsAdvancedAccordionItemFiltersInput>;
  not?: InputMaybe<ComponentSectionsOrganizationalStructureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsOrganizationalStructureFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsOrganizationalStructureInput = {
  id?: InputMaybe<Scalars['ID']>;
  items?: InputMaybe<Array<InputMaybe<ComponentOsItemsAdvancedAccordionItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsProsAndConsSection = {
  __typename?: 'ComponentSectionsProsAndConsSection';
  cons: ComponentBlocksProsAndConsCard;
  id: Scalars['ID'];
  pros: ComponentBlocksProsAndConsCard;
  text?: Maybe<Scalars['String']>;
  textAlign: Enum_Componentsectionsprosandconssection_Textalign;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsProsAndConsSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsProsAndConsSectionFiltersInput>>>;
  cons?: InputMaybe<ComponentBlocksProsAndConsCardFiltersInput>;
  not?: InputMaybe<ComponentSectionsProsAndConsSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsProsAndConsSectionFiltersInput>>>;
  pros?: InputMaybe<ComponentBlocksProsAndConsCardFiltersInput>;
  text?: InputMaybe<StringFilterInput>;
  textAlign?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsProsAndConsSectionInput = {
  cons?: InputMaybe<ComponentBlocksProsAndConsCardInput>;
  id?: InputMaybe<Scalars['ID']>;
  pros?: InputMaybe<ComponentBlocksProsAndConsCardInput>;
  text?: InputMaybe<Scalars['String']>;
  textAlign?: InputMaybe<Enum_Componentsectionsprosandconssection_Textalign>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsSpace = {
  __typename?: 'ComponentSectionsSpace';
  id: Scalars['ID'];
  sectionTitle?: Maybe<Scalars['String']>;
  spaceInfo?: Maybe<Array<Maybe<ComponentBlocksSpaceInfo>>>;
};


export type ComponentSectionsSpaceSpaceInfoArgs = {
  filters?: InputMaybe<ComponentBlocksSpaceInfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsSpaceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsSpaceFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsSpaceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsSpaceFiltersInput>>>;
  sectionTitle?: InputMaybe<StringFilterInput>;
  spaceInfo?: InputMaybe<ComponentBlocksSpaceInfoFiltersInput>;
};

export type ComponentSectionsSpaceInput = {
  id?: InputMaybe<Scalars['ID']>;
  sectionTitle?: InputMaybe<Scalars['String']>;
  spaceInfo?: InputMaybe<Array<InputMaybe<ComponentBlocksSpaceInfoInput>>>;
};

export type ComponentSectionsSubpageList = {
  __typename?: 'ComponentSectionsSubpageList';
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  subpageList?: Maybe<Array<Maybe<ComponentBlocksPageLink>>>;
};


export type ComponentSectionsSubpageListSubpageListArgs = {
  filters?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsSubpageListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsSubpageListFiltersInput>>>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSectionsSubpageListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsSubpageListFiltersInput>>>;
  subpageList?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
};

export type ComponentSectionsSubpageListInput = {
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  subpageList?: InputMaybe<Array<InputMaybe<ComponentBlocksPageLinkInput>>>;
};

export type ComponentSectionsTextWithImage = {
  __typename?: 'ComponentSectionsTextWithImage';
  content?: Maybe<Scalars['String']>;
  hasBackground?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  imagePosition?: Maybe<Enum_Componentsectionstextwithimage_Imageposition>;
  imageShadow?: Maybe<Scalars['Boolean']>;
  imageSrc?: Maybe<UploadFileEntityResponse>;
};

export type ComponentSectionsTextWithImageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsTextWithImageFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  hasBackground?: InputMaybe<BooleanFilterInput>;
  imagePosition?: InputMaybe<StringFilterInput>;
  imageShadow?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSectionsTextWithImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsTextWithImageFiltersInput>>>;
};

export type ComponentSectionsTextWithImageInput = {
  content?: InputMaybe<Scalars['String']>;
  hasBackground?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  imagePosition?: InputMaybe<Enum_Componentsectionstextwithimage_Imageposition>;
  imageShadow?: InputMaybe<Scalars['Boolean']>;
  imageSrc?: InputMaybe<Scalars['ID']>;
};

export type ComponentSectionsTimeline = {
  __typename?: 'ComponentSectionsTimeline';
  id: Scalars['ID'];
  timelineItems?: Maybe<Array<Maybe<ComponentBlocksTimelineItem>>>;
};


export type ComponentSectionsTimelineTimelineItemsArgs = {
  filters?: InputMaybe<ComponentBlocksTimelineItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsTimelineFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsTimelineFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsTimelineFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsTimelineFiltersInput>>>;
  timelineItems?: InputMaybe<ComponentBlocksTimelineItemFiltersInput>;
};

export type ComponentSectionsTimelineInput = {
  id?: InputMaybe<Scalars['ID']>;
  timelineItems?: InputMaybe<Array<InputMaybe<ComponentBlocksTimelineItemInput>>>;
};

export type ComponentSectionsTopServices = {
  __typename?: 'ComponentSectionsTopServices';
  id: Scalars['ID'];
  services: Array<Maybe<ComponentBlocksTopServicesItem>>;
  title: Scalars['String'];
};


export type ComponentSectionsTopServicesServicesArgs = {
  filters?: InputMaybe<ComponentBlocksTopServicesItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsTopServicesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsTopServicesFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsTopServicesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsTopServicesFiltersInput>>>;
  services?: InputMaybe<ComponentBlocksTopServicesItemFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsTopServicesInput = {
  id?: InputMaybe<Scalars['ID']>;
  services?: InputMaybe<Array<InputMaybe<ComponentBlocksTopServicesItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsVideos = {
  __typename?: 'ComponentSectionsVideos';
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Maybe<ComponentBlocksVideo>>>;
};


export type ComponentSectionsVideosVideosArgs = {
  filters?: InputMaybe<ComponentBlocksVideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsVideosFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsVideosFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsVideosFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsVideosFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  videos?: InputMaybe<ComponentBlocksVideoFiltersInput>;
};

export type ComponentSectionsVideosInput = {
  id?: InputMaybe<Scalars['ID']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  videos?: InputMaybe<Array<InputMaybe<ComponentBlocksVideoInput>>>;
};

export type ComponentSectionsWaves = {
  __typename?: 'ComponentSectionsWaves';
  id: Scalars['ID'];
  position?: Maybe<Enum_Componentsectionswaves_Position>;
};

export type ComponentSectionsWavesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsWavesFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsWavesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsWavesFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsWavesInput = {
  id?: InputMaybe<Scalars['ID']>;
  position?: InputMaybe<Enum_Componentsectionswaves_Position>;
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

export enum Enum_Componentaccordionitemsflattext_Align {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentaccordionitemsflattext_Width {
  Default = 'default',
  Full = 'full',
  Narrow = 'narrow',
  Wide = 'wide'
}

export enum Enum_Componentblocksspaceinfo_Imageposition {
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentblockstopservicesitem_Icon {
  BratislavskeKonto = 'bratislavske_konto',
  DaneAPoplatky = 'dane_a_poplatky',
  KampaneAProjekty = 'kampane_a_projekty',
  NahlaseniePodnetov = 'nahlasenie_podnetov',
  OrganizacnaStruktura = 'organizacna_struktura',
  PracovnePrilezitosti = 'pracovne_prilezitosti',
  PrenajomPriestorov = 'prenajom_priestorov',
  TuristomVHlavnomMeste = 'turistom_v_hlavnom_meste',
  UradneHodiny = 'uradne_hodiny',
  VerejnePriestory = 'verejne_priestory'
}

export enum Enum_Componentgeneralheaderlink_Icon {
  Esluzby = 'esluzby',
  Kontakt = 'kontakt',
  SomTurista = 'som_turista',
  Ukraina = 'ukraina'
}

export enum Enum_Componentmenumenuitem_Icon {
  DopravaMapy_02 = 'doprava_mapy_02',
  Kultura_06 = 'kultura_06',
  Mesto_01 = 'mesto_01',
  SocialnaPomoc_04 = 'socialna_pomoc_04',
  Vzdelavanie_05 = 'vzdelavanie_05',
  ZpVystavba_03 = 'zp_vystavba_03'
}

export enum Enum_Componentmenumenusection_Icon {
  Aktivity_04 = 'aktivity_04',
  Byvanie_04 = 'byvanie_04',
  Covid_06 = 'covid_06',
  Cyklo_02 = 'cyklo_02',
  Dane_01 = 'dane_01',
  Dedicstvo_06 = 'dedicstvo_06',
  DetiAMladez_05 = 'deti_a_mladez_05',
  Doprava_02 = 'doprava_02',
  Dotacie_05 = 'dotacie_05',
  Kalendar_06 = 'kalendar_06',
  Komunity_06 = 'komunity_06',
  Koncepcia_06 = 'koncepcia_06',
  Mapy_02 = 'mapy_02',
  Mhd_02 = 'mhd_02',
  Ocenovanie_05 = 'ocenovanie_05',
  Organizacie_06 = 'organizacie_06',
  Parkovanie_02 = 'parkovanie_02',
  Partnerstva_01 = 'partnerstva_01',
  Pomoc_04 = 'pomoc_04',
  Projekty_01 = 'projekty_01',
  RozvojMesta_03 = 'rozvoj_mesta_03',
  Skolstvo_05 = 'skolstvo_05',
  Sluzby_04 = 'sluzby_04',
  Sluzby_06 = 'sluzby_06',
  Sport_05 = 'sport_05',
  SpravaAUdrzba_02 = 'sprava_a_udrzba_02',
  SpravaMesta_01 = 'sprava_mesta_01',
  TransparentneMesto_01 = 'transparentne_mesto_01',
  UzemnyPlan_03 = 'uzemny_plan_03',
  VerejneOsvetlenie_03 = 'verejne_osvetlenie_03',
  VystavbaANehnutelnosti_03 = 'vystavba_a_nehnutelnosti_03',
  Zariadenia_04 = 'zariadenia_04',
  ZdielanaMobilita_02 = 'zdielana_mobilita_02',
  Zelen_03 = 'zelen_03',
  ZivotneProstredie_03 = 'zivotne_prostredie_03'
}

export enum Enum_Componentsectionsbanner_Contentposition {
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentsectionsbanner_Variant {
  Color = 'color',
  Dark = 'dark',
  WhiteCondensed = 'white_condensed'
}

export enum Enum_Componentsectionscomparisonsection_Textalign {
  Center = 'center',
  Left = 'left'
}

export enum Enum_Componentsectionsdivider_Style {
  Bicykel_02FullWidth = 'bicykel_02_full_width',
  Budovy_04FullWidth = 'budovy_04_full_width',
  Byvanie_04FullWidth = 'byvanie_04_full_width',
  Divadlo = 'divadlo',
  Doprava_02FullWidth = 'doprava_02_full_width',
  Hrad_01FullWidth = 'hrad_01_full_width',
  Lod_02FullWidth = 'lod_02_full_width',
  Mesto_01FullWidth = 'mesto_01_full_width',
  Park_04FullWidth = 'park_04_full_width',
  Parkovanie_02FullWidth = 'parkovanie_02_full_width',
  Skola = 'skola',
  Stromy_03FullWidth = 'stromy_03_full_width',
  Vystavba_03FullWidth = 'vystavba_03_full_width',
  Vzdelavanie = 'vzdelavanie'
}

export enum Enum_Componentsectionsfilelist_Variant {
  Grid = 'grid',
  Rows = 'rows'
}

export enum Enum_Componentsectionsiframe_Iframewidth {
  Container = 'container',
  Full = 'full'
}

export enum Enum_Componentsectionsnarrowtext_Align {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentsectionsnarrowtext_Width {
  Default = 'default',
  Full = 'full',
  Narrow = 'narrow',
  Wide = 'wide'
}

export enum Enum_Componentsectionsnumericallist_Variant {
  Basic = 'basic',
  Combined = 'combined',
  Roadmap = 'roadmap'
}

export enum Enum_Componentsectionsprosandconssection_Textalign {
  Center = 'center',
  Left = 'left'
}

export enum Enum_Componentsectionstextwithimage_Imageposition {
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentsectionswaves_Position {
  Bottom = 'bottom',
  Top = 'top'
}

export enum Enum_Pagecategory_Color {
  Blue = 'blue',
  Brown = 'brown',
  Green = 'green',
  Purple = 'purple',
  Red = 'red',
  Yellow = 'yellow'
}

export enum Enum_Pagecategory_Icon {
  DopravaMapy_02 = 'doprava_mapy_02',
  Kultura_06 = 'kultura_06',
  Mesto_01 = 'mesto_01',
  SocialnaPomoc_04 = 'socialna_pomoc_04',
  Vzdelavanie_05 = 'vzdelavanie_05',
  ZpVystavba_03 = 'zp_vystavba_03'
}

export enum Enum_Pagesubcategory_Icon {
  Aktivity_04 = 'aktivity_04',
  Byvanie_04 = 'byvanie_04',
  Covid_06 = 'covid_06',
  Cyklo_02 = 'cyklo_02',
  Dane_01 = 'dane_01',
  Dedicstvo_06 = 'dedicstvo_06',
  DetiAMladez_05 = 'deti_a_mladez_05',
  Doprava_02 = 'doprava_02',
  Dotacie_05 = 'dotacie_05',
  Kalendar_06 = 'kalendar_06',
  Komunity_06 = 'komunity_06',
  Koncepcia_06 = 'koncepcia_06',
  Mapy_02 = 'mapy_02',
  Mhd_02 = 'mhd_02',
  Ocenovanie_05 = 'ocenovanie_05',
  Organizacie_06 = 'organizacie_06',
  Parkovanie_02 = 'parkovanie_02',
  Partnerstva_01 = 'partnerstva_01',
  Pomoc_04 = 'pomoc_04',
  Projekty_01 = 'projekty_01',
  RozvojMesta_03 = 'rozvoj_mesta_03',
  Skolstvo_05 = 'skolstvo_05',
  Sluzby_04 = 'sluzby_04',
  Sluzby_06 = 'sluzby_06',
  Sport_05 = 'sport_05',
  SpravaAUdrzba_02 = 'sprava_a_udrzba_02',
  SpravaMesta_01 = 'sprava_mesta_01',
  TransparentneMesto_01 = 'transparentne_mesto_01',
  UzemnyPlan_03 = 'uzemny_plan_03',
  VerejneOsvetlenie_03 = 'verejne_osvetlenie_03',
  VystavbaANehnutelnosti_03 = 'vystavba_a_nehnutelnosti_03',
  Zariadenia_04 = 'zariadenia_04',
  ZdielanaMobilita_02 = 'zdielana_mobilita_02',
  Zelen_03 = 'zelen_03',
  ZivotneProstredie_03 = 'zivotne_prostredie_03'
}

export enum Enum_Page_Pagecolor {
  Blue = 'blue',
  Brown = 'brown',
  Green = 'green',
  Purple = 'purple',
  Red = 'red',
  Yellow = 'yellow'
}

export enum Enum_Vzn_Category {
  Archiv = 'archiv',
  DaneAPoplatky = 'daneAPoplatky',
  Hospodarenie = 'hospodarenie',
  Ostatne = 'ostatne',
  PomenovanieUlic = 'pomenovanieUlic',
  PoriadokACistota = 'poriadokACistota',
  SocialnaPomocASkolstvo = 'socialnaPomocASkolstvo',
  UzemnePlanovanie = 'uzemnePlanovanie'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
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
  accessibilityPageLink?: Maybe<ComponentBlocksCommonLink>;
  address?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<ComponentBlocksFooterColumn>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  facebookUrl?: Maybe<Scalars['String']>;
  innovationsLink?: Maybe<ComponentBlocksCommonLink>;
  instagramUrl?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<FooterRelationResponseCollection>;
  mediaEmail?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type FooterColumnsArgs = {
  filters?: InputMaybe<ComponentBlocksFooterColumnFiltersInput>;
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

export type FooterEntityResponseCollection = {
  __typename?: 'FooterEntityResponseCollection';
  data: Array<FooterEntity>;
  meta: ResponseCollectionMeta;
};

export type FooterFiltersInput = {
  accessibilityPageLink?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<FooterFiltersInput>>>;
  columns?: InputMaybe<ComponentBlocksFooterColumnFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  facebookUrl?: InputMaybe<StringFilterInput>;
  innovationsLink?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  instagramUrl?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<FooterFiltersInput>;
  mediaEmail?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<FooterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FooterFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FooterInput = {
  accessibilityPageLink?: InputMaybe<ComponentBlocksCommonLinkInput>;
  address?: InputMaybe<Scalars['String']>;
  columns?: InputMaybe<Array<InputMaybe<ComponentBlocksFooterColumnInput>>>;
  email?: InputMaybe<Scalars['String']>;
  facebookUrl?: InputMaybe<Scalars['String']>;
  innovationsLink?: InputMaybe<ComponentBlocksCommonLinkInput>;
  instagramUrl?: InputMaybe<Scalars['String']>;
  mediaEmail?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FooterRelationResponseCollection = {
  __typename?: 'FooterRelationResponseCollection';
  data: Array<FooterEntity>;
};

export type General = {
  __typename?: 'General';
  createdAt?: Maybe<Scalars['DateTime']>;
  header?: Maybe<ComponentGeneralHeader>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GeneralRelationResponseCollection>;
  newsPage?: Maybe<PageEntityResponse>;
  officialBoardPage?: Maybe<PageEntityResponse>;
  privacyPolicyPage?: Maybe<PageEntityResponse>;
  showUaChatPages?: Maybe<PageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vznPage?: Maybe<PageEntityResponse>;
};


export type GeneralShowUaChatPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type GeneralEntityResponseCollection = {
  __typename?: 'GeneralEntityResponseCollection';
  data: Array<GeneralEntity>;
  meta: ResponseCollectionMeta;
};

export type GeneralFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GeneralFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  header?: InputMaybe<ComponentGeneralHeaderFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<GeneralFiltersInput>;
  newsPage?: InputMaybe<PageFiltersInput>;
  not?: InputMaybe<GeneralFiltersInput>;
  officialBoardPage?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GeneralFiltersInput>>>;
  privacyPolicyPage?: InputMaybe<PageFiltersInput>;
  showUaChatPages?: InputMaybe<PageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  vznPage?: InputMaybe<PageFiltersInput>;
};

export type GeneralInput = {
  header?: InputMaybe<ComponentGeneralHeaderInput>;
  newsPage?: InputMaybe<Scalars['ID']>;
  officialBoardPage?: InputMaybe<Scalars['ID']>;
  privacyPolicyPage?: InputMaybe<Scalars['ID']>;
  showUaChatPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  vznPage?: InputMaybe<Scalars['ID']>;
};

export type GeneralRelationResponseCollection = {
  __typename?: 'GeneralRelationResponseCollection';
  data: Array<GeneralEntity>;
};

export type GenericMorph = Alert | BlogPost | ComponentAccordionItemsFlatText | ComponentAccordionItemsInstitution | ComponentAccordionItemsInstitutionNarrow | ComponentBlocksBlogPostLink | ComponentBlocksBookmarkLink | ComponentBlocksCommonLink | ComponentBlocksComparisonCard | ComponentBlocksComparisonItem | ComponentBlocksDocListExtensions | ComponentBlocksFile | ComponentBlocksFileItem | ComponentBlocksFooterColumn | ComponentBlocksFooterSection | ComponentBlocksGalleryItem | ComponentBlocksHomepageBookmark | ComponentBlocksHomepageHighlightsItem | ComponentBlocksIconWithTitleAndDescription | ComponentBlocksInBa | ComponentBlocksNumericalListItem | ComponentBlocksPageLink | ComponentBlocksProsAndConsCard | ComponentBlocksSpaceInfo | ComponentBlocksSubpage | ComponentBlocksTimelineItem | ComponentBlocksTopServicesItem | ComponentBlocksVideo | ComponentGeneralHeader | ComponentGeneralHeaderLink | ComponentMenuMenuItem | ComponentMenuMenuLink | ComponentMenuMenuSection | ComponentOsItemsAdvancedAccordionDepartment | ComponentOsItemsAdvancedAccordionItem | ComponentOsItemsAdvancedAccordionSubItem | ComponentOsItemsAdvancedAccordionSubSubItem | ComponentSectionsAccordion | ComponentSectionsArticlesList | ComponentSectionsBanner | ComponentSectionsBlogPostsList | ComponentSectionsCalculator | ComponentSectionsColumnedText | ComponentSectionsComparisonSection | ComponentSectionsContact | ComponentSectionsDivider | ComponentSectionsDocumentList | ComponentSectionsFeaturedBlogPosts | ComponentSectionsFileList | ComponentSectionsGallery | ComponentSectionsHomepageEvents | ComponentSectionsHomepageHighlights | ComponentSectionsHomepageMayorAndCouncil | ComponentSectionsHomepageTabs | ComponentSectionsIconTitleDesc | ComponentSectionsIframe | ComponentSectionsLinks | ComponentSectionsNarrowText | ComponentSectionsNewsletter | ComponentSectionsNumericalList | ComponentSectionsOfficialBoard | ComponentSectionsOrganizationalStructure | ComponentSectionsProsAndConsSection | ComponentSectionsSpace | ComponentSectionsSubpageList | ComponentSectionsTextWithImage | ComponentSectionsTimeline | ComponentSectionsTopServices | ComponentSectionsVideos | ComponentSectionsWaves | Footer | General | Homepage | I18NLocale | Menu | Page | PageCategory | PageSubcategory | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Vzn;

export type Homepage = {
  __typename?: 'Homepage';
  bookmarkTourists?: Maybe<ComponentBlocksHomepageBookmark>;
  bookmarkUkraine?: Maybe<ComponentBlocksHomepageBookmark>;
  cards?: Maybe<Array<Maybe<ComponentBlocksHomepageBookmark>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  eventsSection?: Maybe<ComponentSectionsHomepageEvents>;
  highlights?: Maybe<ComponentSectionsHomepageHighlights>;
  inba?: Maybe<ComponentBlocksInBa>;
  inbaFrontImage: UploadFileEntityResponse;
  inbaRearImage: UploadFileEntityResponse;
  inbaUrl?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomepageRelationResponseCollection>;
  mayorAndCouncil?: Maybe<ComponentSectionsHomepageMayorAndCouncil>;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  tabs?: Maybe<ComponentSectionsHomepageTabs>;
  topServices?: Maybe<ComponentSectionsTopServices>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  welcomeHeadline: Scalars['String'];
  welcomeMedia: UploadFileEntityResponse;
};


export type HomepageCardsArgs = {
  filters?: InputMaybe<ComponentBlocksHomepageBookmarkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomepageLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageEntityResponseCollection = {
  __typename?: 'HomepageEntityResponseCollection';
  data: Array<HomepageEntity>;
  meta: ResponseCollectionMeta;
};

export type HomepageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HomepageFiltersInput>>>;
  bookmarkTourists?: InputMaybe<ComponentBlocksHomepageBookmarkFiltersInput>;
  bookmarkUkraine?: InputMaybe<ComponentBlocksHomepageBookmarkFiltersInput>;
  cards?: InputMaybe<ComponentBlocksHomepageBookmarkFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  eventsSection?: InputMaybe<ComponentSectionsHomepageEventsFiltersInput>;
  highlights?: InputMaybe<ComponentSectionsHomepageHighlightsFiltersInput>;
  inba?: InputMaybe<ComponentBlocksInBaFiltersInput>;
  inbaUrl?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<HomepageFiltersInput>;
  mayorAndCouncil?: InputMaybe<ComponentSectionsHomepageMayorAndCouncilFiltersInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<HomepageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HomepageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  tabs?: InputMaybe<ComponentSectionsHomepageTabsFiltersInput>;
  topServices?: InputMaybe<ComponentSectionsTopServicesFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  welcomeHeadline?: InputMaybe<StringFilterInput>;
};

export type HomepageInput = {
  bookmarkTourists?: InputMaybe<ComponentBlocksHomepageBookmarkInput>;
  bookmarkUkraine?: InputMaybe<ComponentBlocksHomepageBookmarkInput>;
  cards?: InputMaybe<Array<InputMaybe<ComponentBlocksHomepageBookmarkInput>>>;
  eventsSection?: InputMaybe<ComponentSectionsHomepageEventsInput>;
  highlights?: InputMaybe<ComponentSectionsHomepageHighlightsInput>;
  inba?: InputMaybe<ComponentBlocksInBaInput>;
  inbaFrontImage?: InputMaybe<Scalars['ID']>;
  inbaRearImage?: InputMaybe<Scalars['ID']>;
  inbaUrl?: InputMaybe<Scalars['String']>;
  mayorAndCouncil?: InputMaybe<ComponentSectionsHomepageMayorAndCouncilInput>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  tabs?: InputMaybe<ComponentSectionsHomepageTabsInput>;
  topServices?: InputMaybe<ComponentSectionsTopServicesInput>;
  welcomeHeadline?: InputMaybe<Scalars['String']>;
  welcomeMedia?: InputMaybe<Scalars['ID']>;
};

export type HomepageRelationResponseCollection = {
  __typename?: 'HomepageRelationResponseCollection';
  data: Array<HomepageEntity>;
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

export type I18NLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type I18NLocaleRelationResponseCollection = {
  __typename?: 'I18NLocaleRelationResponseCollection';
  data: Array<I18NLocaleEntity>;
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

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  contains?: InputMaybe<Scalars['Long']>;
  containsi?: InputMaybe<Scalars['Long']>;
  endsWith?: InputMaybe<Scalars['Long']>;
  eq?: InputMaybe<Scalars['Long']>;
  eqi?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  ne?: InputMaybe<Scalars['Long']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']>;
  notContainsi?: InputMaybe<Scalars['Long']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  startsWith?: InputMaybe<Scalars['Long']>;
};

export type Menu = {
  __typename?: 'Menu';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<MenuRelationResponseCollection>;
  menus?: Maybe<Array<Maybe<ComponentMenuMenuItem>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type MenuMenusArgs = {
  filters?: InputMaybe<ComponentMenuMenuItemFiltersInput>;
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
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MenuFiltersInput>;
  menus?: InputMaybe<ComponentMenuMenuItemFiltersInput>;
  not?: InputMaybe<MenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenuFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenuInput = {
  menus?: InputMaybe<Array<InputMaybe<ComponentMenuMenuItemInput>>>;
};

export type MenuRelationResponseCollection = {
  __typename?: 'MenuRelationResponseCollection';
  data: Array<MenuEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAlertLocalization?: Maybe<AlertEntityResponse>;
  createBlogPost?: Maybe<BlogPostEntityResponse>;
  createBlogPostLocalization?: Maybe<BlogPostEntityResponse>;
  createFooterLocalization?: Maybe<FooterEntityResponse>;
  createGeneralLocalization?: Maybe<GeneralEntityResponse>;
  createHomepageLocalization?: Maybe<HomepageEntityResponse>;
  createMenuLocalization?: Maybe<MenuEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageCategory?: Maybe<PageCategoryEntityResponse>;
  createPageCategoryLocalization?: Maybe<PageCategoryEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createPageSubcategory?: Maybe<PageSubcategoryEntityResponse>;
  createPageSubcategoryLocalization?: Maybe<PageSubcategoryEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createTagLocalization?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVzn?: Maybe<VznEntityResponse>;
  deleteAlert?: Maybe<AlertEntityResponse>;
  deleteBlogPost?: Maybe<BlogPostEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteGeneral?: Maybe<GeneralEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteMenu?: Maybe<MenuEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deletePageCategory?: Maybe<PageCategoryEntityResponse>;
  deletePageSubcategory?: Maybe<PageSubcategoryEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVzn?: Maybe<VznEntityResponse>;
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
  updateAlert?: Maybe<AlertEntityResponse>;
  updateBlogPost?: Maybe<BlogPostEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateGeneral?: Maybe<GeneralEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateMenu?: Maybe<MenuEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updatePageCategory?: Maybe<PageCategoryEntityResponse>;
  updatePageSubcategory?: Maybe<PageSubcategoryEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVzn?: Maybe<VznEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAlertLocalizationArgs = {
  data?: InputMaybe<AlertInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationCreateHomepageLocalizationArgs = {
  data?: InputMaybe<HomepageInput>;
  id?: InputMaybe<Scalars['ID']>;
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


export type MutationCreatePageCategoryArgs = {
  data: PageCategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageCategoryLocalizationArgs = {
  data?: InputMaybe<PageCategoryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageLocalizationArgs = {
  data?: InputMaybe<PageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageSubcategoryArgs = {
  data: PageSubcategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageSubcategoryLocalizationArgs = {
  data?: InputMaybe<PageSubcategoryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTagArgs = {
  data: TagInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTagLocalizationArgs = {
  data?: InputMaybe<TagInput>;
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


export type MutationCreateVznArgs = {
  data: VznInput;
};


export type MutationDeleteAlertArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteBlogPostArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteGeneralArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePageCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePageSubcategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteTagArgs = {
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


export type MutationDeleteVznArgs = {
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


export type MutationUpdateAlertArgs = {
  data: AlertInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateBlogPostArgs = {
  data: BlogPostInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateMenuArgs = {
  data: MenuInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePageCategoryArgs = {
  data: PageCategoryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePageSubcategoryArgs = {
  data: PageSubcategoryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
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


export type MutationUpdateVznArgs = {
  data: VznInput;
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
  childPages?: Maybe<PageRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  headerLinks?: Maybe<Array<Maybe<ComponentBlocksCommonLink>>>;
  keywords?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PageRelationResponseCollection>;
  metaDiscription?: Maybe<Scalars['String']>;
  pageBackgroundImage?: Maybe<UploadFileEntityResponse>;
  pageCategory?: Maybe<PageCategoryEntityResponse>;
  pageColor?: Maybe<Enum_Page_Pagecolor>;
  pageHeaderSections?: Maybe<Array<Maybe<PagePageHeaderSectionsDynamicZone>>>;
  parentPage?: Maybe<PageEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  relatedContents?: Maybe<TagRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>;
  slug?: Maybe<Scalars['String']>;
  subtext?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageChildPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PageHeaderLinksArgs = {
  filters?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PageRelatedContentsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageCategory = {
  __typename?: 'PageCategory';
  color?: Maybe<Enum_Pagecategory_Color>;
  createdAt?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<Enum_Pagecategory_Icon>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PageCategoryRelationResponseCollection>;
  pages?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shortTitle?: Maybe<Scalars['String']>;
  subcategories?: Maybe<PageSubcategoryRelationResponseCollection>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageCategoryLocalizationsArgs = {
  filters?: InputMaybe<PageCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PageCategoryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PageCategorySubcategoriesArgs = {
  filters?: InputMaybe<PageSubcategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageCategoryEntity = {
  __typename?: 'PageCategoryEntity';
  attributes?: Maybe<PageCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type PageCategoryEntityResponse = {
  __typename?: 'PageCategoryEntityResponse';
  data?: Maybe<PageCategoryEntity>;
};

export type PageCategoryEntityResponseCollection = {
  __typename?: 'PageCategoryEntityResponseCollection';
  data: Array<PageCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type PageCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageCategoryFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  icon?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageCategoryFiltersInput>;
  not?: InputMaybe<PageCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageCategoryFiltersInput>>>;
  pages?: InputMaybe<PageFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortTitle?: InputMaybe<StringFilterInput>;
  subcategories?: InputMaybe<PageSubcategoryFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageCategoryInput = {
  color?: InputMaybe<Enum_Pagecategory_Color>;
  icon?: InputMaybe<Enum_Pagecategory_Icon>;
  pages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  shortTitle?: InputMaybe<Scalars['String']>;
  subcategories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageCategoryRelationResponseCollection = {
  __typename?: 'PageCategoryRelationResponseCollection';
  data: Array<PageCategoryEntity>;
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
  childPages?: InputMaybe<PageFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  headerLinks?: InputMaybe<ComponentBlocksCommonLinkFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  metaDiscription?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  pageCategory?: InputMaybe<PageCategoryFiltersInput>;
  pageColor?: InputMaybe<StringFilterInput>;
  parentPage?: InputMaybe<PageFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  relatedContents?: InputMaybe<TagFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  subtext?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  childPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  headerLinks?: InputMaybe<Array<InputMaybe<ComponentBlocksCommonLinkInput>>>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDiscription?: InputMaybe<Scalars['String']>;
  pageBackgroundImage?: InputMaybe<Scalars['ID']>;
  pageCategory?: InputMaybe<Scalars['ID']>;
  pageColor?: InputMaybe<Enum_Page_Pagecolor>;
  pageHeaderSections?: InputMaybe<Array<Scalars['PagePageHeaderSectionsDynamicZoneInput']>>;
  parentPage?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  relatedContents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sections?: InputMaybe<Array<Scalars['PageSectionsDynamicZoneInput']>>;
  slug?: InputMaybe<Scalars['String']>;
  subtext?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PagePageHeaderSectionsDynamicZone = ComponentSectionsSubpageList | Error;

export type PageRelationResponseCollection = {
  __typename?: 'PageRelationResponseCollection';
  data: Array<PageEntity>;
};

export type PageSectionsDynamicZone = ComponentSectionsAccordion | ComponentSectionsArticlesList | ComponentSectionsBanner | ComponentSectionsBlogPostsList | ComponentSectionsCalculator | ComponentSectionsColumnedText | ComponentSectionsComparisonSection | ComponentSectionsContact | ComponentSectionsDivider | ComponentSectionsDocumentList | ComponentSectionsFeaturedBlogPosts | ComponentSectionsFileList | ComponentSectionsGallery | ComponentSectionsIconTitleDesc | ComponentSectionsIframe | ComponentSectionsLinks | ComponentSectionsNarrowText | ComponentSectionsNewsletter | ComponentSectionsNumericalList | ComponentSectionsOfficialBoard | ComponentSectionsOrganizationalStructure | ComponentSectionsProsAndConsSection | ComponentSectionsSpace | ComponentSectionsTextWithImage | ComponentSectionsTimeline | ComponentSectionsVideos | ComponentSectionsWaves | Error;

export type PageSubcategory = {
  __typename?: 'PageSubcategory';
  createdAt?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<Enum_Pagesubcategory_Icon>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PageSubcategoryRelationResponseCollection>;
  moreLink?: Maybe<ComponentBlocksPageLink>;
  pages?: Maybe<Array<Maybe<ComponentBlocksPageLink>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageSubcategoryLocalizationsArgs = {
  filters?: InputMaybe<PageSubcategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PageSubcategoryPagesArgs = {
  filters?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageSubcategoryEntity = {
  __typename?: 'PageSubcategoryEntity';
  attributes?: Maybe<PageSubcategory>;
  id?: Maybe<Scalars['ID']>;
};

export type PageSubcategoryEntityResponse = {
  __typename?: 'PageSubcategoryEntityResponse';
  data?: Maybe<PageSubcategoryEntity>;
};

export type PageSubcategoryEntityResponseCollection = {
  __typename?: 'PageSubcategoryEntityResponseCollection';
  data: Array<PageSubcategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type PageSubcategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageSubcategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  icon?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageSubcategoryFiltersInput>;
  moreLink?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  not?: InputMaybe<PageSubcategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageSubcategoryFiltersInput>>>;
  pages?: InputMaybe<ComponentBlocksPageLinkFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageSubcategoryInput = {
  icon?: InputMaybe<Enum_Pagesubcategory_Icon>;
  moreLink?: InputMaybe<ComponentBlocksPageLinkInput>;
  pages?: InputMaybe<Array<InputMaybe<ComponentBlocksPageLinkInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageSubcategoryRelationResponseCollection = {
  __typename?: 'PageSubcategoryRelationResponseCollection';
  data: Array<PageSubcategoryEntity>;
};

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

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  alert?: Maybe<AlertEntityResponse>;
  blogPost?: Maybe<BlogPostEntityResponse>;
  blogPosts?: Maybe<BlogPostEntityResponseCollection>;
  footer?: Maybe<FooterEntityResponse>;
  general?: Maybe<GeneralEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menu?: Maybe<MenuEntityResponse>;
  page?: Maybe<PageEntityResponse>;
  pageCategories?: Maybe<PageCategoryEntityResponseCollection>;
  pageCategory?: Maybe<PageCategoryEntityResponse>;
  pageSubcategories?: Maybe<PageSubcategoryEntityResponseCollection>;
  pageSubcategory?: Maybe<PageSubcategoryEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  vzn?: Maybe<VznEntityResponse>;
  vzns?: Maybe<VznEntityResponseCollection>;
};


export type QueryAlertArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type QueryFooterArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryGeneralArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryHomepageArgs = {
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
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPageCategoriesArgs = {
  filters?: InputMaybe<PageCategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPageCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPageSubcategoriesArgs = {
  filters?: InputMaybe<PageSubcategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPageSubcategoryArgs = {
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


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
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


export type QueryVznArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryVznsArgs = {
  filters?: InputMaybe<VznFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<TagRelationResponseCollection>;
  pageCategory?: Maybe<PageCategoryEntityResponse>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TagLocalizationsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TagFiltersInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  pageCategory?: InputMaybe<PageCategoryFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  pageCategory?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  contains?: InputMaybe<Scalars['Time']>;
  containsi?: InputMaybe<Scalars['Time']>;
  endsWith?: InputMaybe<Scalars['Time']>;
  eq?: InputMaybe<Scalars['Time']>;
  eqi?: InputMaybe<Scalars['Time']>;
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

export type UsersPermissionsPermissionEntityResponse = {
  __typename?: 'UsersPermissionsPermissionEntityResponse';
  data?: Maybe<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsPermissionEntityResponseCollection = {
  __typename?: 'UsersPermissionsPermissionEntityResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
  meta: ResponseCollectionMeta;
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

export type UsersPermissionsPermissionInput = {
  action?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
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

export type UsersPermissionsRoleRelationResponseCollection = {
  __typename?: 'UsersPermissionsRoleRelationResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
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
  posts?: Maybe<BlogPostEntityResponse>;
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
  posts?: InputMaybe<BlogPostFiltersInput>;
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
  posts?: InputMaybe<Scalars['ID']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Vzn = {
  __typename?: 'Vzn';
  amedmentDocument?: Maybe<Array<Maybe<ComponentBlocksDocListExtensions>>>;
  cancellationDocument?: Maybe<Array<Maybe<ComponentBlocksDocListExtensions>>>;
  category?: Maybe<Enum_Vzn_Category>;
  consolidatedText?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['String']>;
  mainDocument?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  validFrom?: Maybe<Scalars['Date']>;
};


export type VznAmedmentDocumentArgs = {
  filters?: InputMaybe<ComponentBlocksDocListExtensionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type VznCancellationDocumentArgs = {
  filters?: InputMaybe<ComponentBlocksDocListExtensionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VznEntity = {
  __typename?: 'VznEntity';
  attributes?: Maybe<Vzn>;
  id?: Maybe<Scalars['ID']>;
};

export type VznEntityResponse = {
  __typename?: 'VznEntityResponse';
  data?: Maybe<VznEntity>;
};

export type VznEntityResponseCollection = {
  __typename?: 'VznEntityResponseCollection';
  data: Array<VznEntity>;
  meta: ResponseCollectionMeta;
};

export type VznFiltersInput = {
  amedmentDocument?: InputMaybe<ComponentBlocksDocListExtensionsFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<VznFiltersInput>>>;
  cancellationDocument?: InputMaybe<ComponentBlocksDocListExtensionsFiltersInput>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  details?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<VznFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VznFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  validFrom?: InputMaybe<DateFilterInput>;
};

export type VznInput = {
  amedmentDocument?: InputMaybe<Array<InputMaybe<ComponentBlocksDocListExtensionsInput>>>;
  cancellationDocument?: InputMaybe<Array<InputMaybe<ComponentBlocksDocListExtensionsInput>>>;
  category?: InputMaybe<Enum_Vzn_Category>;
  consolidatedText?: InputMaybe<Scalars['ID']>;
  details?: InputMaybe<Scalars['String']>;
  mainDocument?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  validFrom?: InputMaybe<Scalars['Date']>;
};

export type VznRelationResponseCollection = {
  __typename?: 'VznRelationResponseCollection';
  data: Array<VznEntity>;
};

export type AllPagesQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type AllPagesQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', title?: string | null, sections?: Array<{ __typename: 'ComponentSectionsAccordion' } | { __typename: 'ComponentSectionsArticlesList' } | { __typename: 'ComponentSectionsBanner' } | { __typename: 'ComponentSectionsBlogPostsList' } | { __typename: 'ComponentSectionsCalculator' } | { __typename: 'ComponentSectionsColumnedText' } | { __typename: 'ComponentSectionsComparisonSection' } | { __typename: 'ComponentSectionsContact' } | { __typename: 'ComponentSectionsDivider' } | { __typename: 'ComponentSectionsDocumentList' } | { __typename: 'ComponentSectionsFeaturedBlogPosts' } | { __typename: 'ComponentSectionsFileList' } | { __typename: 'ComponentSectionsGallery' } | { __typename: 'ComponentSectionsIconTitleDesc' } | { __typename: 'ComponentSectionsIframe' } | { __typename: 'ComponentSectionsLinks' } | { __typename: 'ComponentSectionsNarrowText' } | { __typename: 'ComponentSectionsNewsletter' } | { __typename: 'ComponentSectionsNumericalList' } | { __typename: 'ComponentSectionsOfficialBoard' } | { __typename: 'ComponentSectionsOrganizationalStructure' } | { __typename: 'ComponentSectionsProsAndConsSection' } | { __typename: 'ComponentSectionsSpace' } | { __typename: 'ComponentSectionsTextWithImage' } | { __typename: 'ComponentSectionsTimeline' } | { __typename: 'ComponentSectionsVideos' } | { __typename: 'ComponentSectionsWaves' } | { __typename: 'Error' } | null> | null } | null }> } | null };


export const AllPagesDocument = gql`
    query AllPages($locale: I18NLocaleCode!) {
  pages(locale: $locale, pagination: {start: 0, limit: -1}) {
    data {
      id
      attributes {
        title
        sections {
          __typename
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllPages(variables: AllPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllPagesQuery>(AllPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllPages', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;