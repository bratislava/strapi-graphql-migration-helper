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
  AboutUsPageSectionsDynamicZoneInput: any;
  CollectionsPageSectionsDynamicZoneInput: any;
  ContentPageMainContentDynamicZoneInput: any;
  Date: any;
  DateTime: any;
  GetInvolvedPageSectionsDynamicZoneInput: any;
  HomePageSectionsDynamicZoneInput: any;
  I18NLocaleCode: any;
  JSON: any;
  Time: any;
  Upload: any;
  VisitUsPageSectionsDynamicZoneInput: any;
};

export type AboutUsPage = {
  __typename?: 'AboutUsPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AboutUsPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<AboutUsPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AboutUsPageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AboutUsPageEntity = {
  __typename?: 'AboutUsPageEntity';
  attributes?: Maybe<AboutUsPage>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutUsPageEntityResponse = {
  __typename?: 'AboutUsPageEntityResponse';
  data?: Maybe<AboutUsPageEntity>;
};

export type AboutUsPageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  sections?: InputMaybe<Array<Scalars['AboutUsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type AboutUsPageRelationResponseCollection = {
  __typename?: 'AboutUsPageRelationResponseCollection';
  data: Array<AboutUsPageEntity>;
};

export type AboutUsPageSectionsDynamicZone = ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | Error;

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

export type CollectionsPage = {
  __typename?: 'CollectionsPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<CollectionsPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<CollectionsPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CollectionsPageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CollectionsPageEntity = {
  __typename?: 'CollectionsPageEntity';
  attributes?: Maybe<CollectionsPage>;
  id?: Maybe<Scalars['ID']>;
};

export type CollectionsPageEntityResponse = {
  __typename?: 'CollectionsPageEntityResponse';
  data?: Maybe<CollectionsPageEntity>;
};

export type CollectionsPageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  sections?: InputMaybe<Array<Scalars['CollectionsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type CollectionsPageRelationResponseCollection = {
  __typename?: 'CollectionsPageRelationResponseCollection';
  data: Array<CollectionsPageEntity>;
};

export type CollectionsPageSectionsDynamicZone = ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | Error;

export type ComponentBlocksContactCardItem = {
  __typename?: 'ComponentBlocksContactCardItem';
  contactCard?: Maybe<ContactCardEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentBlocksContactCardItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksContactCardItemFiltersInput>>>;
  contactCard?: InputMaybe<ContactCardFiltersInput>;
  not?: InputMaybe<ComponentBlocksContactCardItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksContactCardItemFiltersInput>>>;
};

export type ComponentBlocksContentPageItem = {
  __typename?: 'ComponentBlocksContentPageItem';
  contentPage?: Maybe<ContentPageEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentBlocksContentPageItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemFiltersInput>>>;
  contentPage?: InputMaybe<ContentPageFiltersInput>;
  not?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemFiltersInput>>>;
};

export type ComponentBlocksContentPageItemInput = {
  contentPage?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlocksExhibitionArchive = {
  __typename?: 'ComponentBlocksExhibitionArchive';
  color?: Maybe<Scalars['String']>;
  coverMedia?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  perex?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ComponentBlocksExhibitionArchiveInput = {
  color?: InputMaybe<Scalars['String']>;
  coverMedia?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  perex?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksFileItem = {
  __typename?: 'ComponentBlocksFileItem';
  file: UploadFileEntityResponse;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksFileItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksFileItemInput = {
  file?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksHighlightOverride = {
  __typename?: 'ComponentBlocksHighlightOverride';
  highlightContent?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentBlocksHighlightOverrideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksHighlightOverrideFiltersInput>>>;
  highlightContent?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksHighlightOverrideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksHighlightOverrideFiltersInput>>>;
};

export type ComponentBlocksHighlightOverrideInput = {
  highlightContent?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlocksLinkItem = {
  __typename?: 'ComponentBlocksLinkItem';
  id: Scalars['ID'];
  newWindow?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ComponentBlocksLinkItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksLinkItemFiltersInput>>>;
  newWindow?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentBlocksLinkItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksLinkItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksLinkItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  newWindow?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksLinks = {
  __typename?: 'ComponentBlocksLinks';
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentBlocksLinkItem>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentBlocksLinksLinksArgs = {
  filters?: InputMaybe<ComponentBlocksLinkItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlocksLinksInput = {
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentBlocksLinkItemInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksPalace = {
  __typename?: 'ComponentBlocksPalace';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type ComponentBlocksPalaceInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksPartnerItem = {
  __typename?: 'ComponentBlocksPartnerItem';
  id: Scalars['ID'];
  partner?: Maybe<PartnerEntityResponse>;
};

export type ComponentBlocksPartnerItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemFiltersInput>>>;
  not?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemFiltersInput>>>;
  partner?: InputMaybe<PartnerFiltersInput>;
};

export type ComponentBlocksPartnerItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  partner?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlocksPositionItem = {
  __typename?: 'ComponentBlocksPositionItem';
  id: Scalars['ID'];
  names?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentBlocksPositionItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemFiltersInput>>>;
  names?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksPositionItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksPositionItemInput = {
  id?: InputMaybe<Scalars['ID']>;
  names?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentBlocksSeo = {
  __typename?: 'ComponentBlocksSeo';
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type ComponentBlocksSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksSeoFiltersInput>>>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksSeoFiltersInput>>>;
};

export type ComponentBlocksSeoInput = {
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsArchiveSection = {
  __typename?: 'ComponentSectionsArchiveSection';
  archiveCard?: Maybe<ComponentBlocksExhibitionArchive>;
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsArchiveSectionInput = {
  archiveCard?: InputMaybe<ComponentBlocksExhibitionArchiveInput>;
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsAudioSection = {
  __typename?: 'ComponentSectionsAudioSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentSectionsContactCardsSection = {
  __typename?: 'ComponentSectionsContactCardsSection';
  contacts?: Maybe<Array<Maybe<ComponentBlocksContactCardItem>>>;
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsContactCardsSectionContactsArgs = {
  filters?: InputMaybe<ComponentBlocksContactCardItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsDownloadSection = {
  __typename?: 'ComponentSectionsDownloadSection';
  files?: Maybe<Array<Maybe<ComponentBlocksFileItem>>>;
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsDownloadSectionFilesArgs = {
  filters?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsDownloadSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsDownloadSectionFiltersInput>>>;
  files?: InputMaybe<ComponentBlocksFileItemFiltersInput>;
  not?: InputMaybe<ComponentSectionsDownloadSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsDownloadSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsDownloadSectionInput = {
  files?: InputMaybe<Array<InputMaybe<ComponentBlocksFileItemInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  submenuTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsGallerySection = {
  __typename?: 'ComponentSectionsGallerySection';
  id: Scalars['ID'];
  medias?: Maybe<UploadFileRelationResponseCollection>;
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsGallerySectionMediasArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsMapSection = {
  __typename?: 'ComponentSectionsMapSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsNewsSection = {
  __typename?: 'ComponentSectionsNewsSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsNewsletterSection = {
  __typename?: 'ComponentSectionsNewsletterSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsOpeningHoursSection = {
  __typename?: 'ComponentSectionsOpeningHoursSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsPageSection = {
  __typename?: 'ComponentSectionsPageSection';
  contentPages?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  id: Scalars['ID'];
  layout?: Maybe<Enum_Componentsectionspagesection_Layout>;
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentSectionsPageSectionContentPagesArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsRichtextSection = {
  __typename?: 'ComponentSectionsRichtextSection';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
};

export type ComponentSectionsSliderSection = {
  __typename?: 'ComponentSectionsSliderSection';
  id: Scalars['ID'];
  medias?: Maybe<UploadFileRelationResponseCollection>;
  submenuTitle?: Maybe<Scalars['String']>;
};


export type ComponentSectionsSliderSectionMediasArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsSliderSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsSliderSectionFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsSliderSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsSliderSectionFiltersInput>>>;
  submenuTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsSliderSectionInput = {
  id?: InputMaybe<Scalars['ID']>;
  medias?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  submenuTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentSectionsTicketsSection = {
  __typename?: 'ComponentSectionsTicketsSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentSectionsVideoSection = {
  __typename?: 'ComponentSectionsVideoSection';
  id: Scalars['ID'];
  submenuTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContactCard = {
  __typename?: 'ContactCard';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ContactCardRelationResponseCollection>;
  name: Scalars['String'];
  phone1?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ContactCardLocalizationsArgs = {
  filters?: InputMaybe<ContactCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactCardEntity = {
  __typename?: 'ContactCardEntity';
  attributes?: Maybe<ContactCard>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactCardEntityResponse = {
  __typename?: 'ContactCardEntityResponse';
  data?: Maybe<ContactCardEntity>;
};

export type ContactCardEntityResponseCollection = {
  __typename?: 'ContactCardEntityResponseCollection';
  data: Array<ContactCardEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactCardFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ContactCardFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactCardFiltersInput>>>;
  phone1?: InputMaybe<StringFilterInput>;
  phone2?: InputMaybe<StringFilterInput>;
  position?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactCardInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone1?: InputMaybe<Scalars['String']>;
  phone2?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
};

export type ContactCardRelationResponseCollection = {
  __typename?: 'ContactCardRelationResponseCollection';
  data: Array<ContactCardEntity>;
};

export type ContentPage = {
  __typename?: 'ContentPage';
  addedAt?: Maybe<Scalars['DateTime']>;
  childPages?: Maybe<ContentPageRelationResponseCollection>;
  color?: Maybe<Scalars['String']>;
  coverMedia?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateFrom?: Maybe<Scalars['Date']>;
  dateTo?: Maybe<Scalars['Date']>;
  downloadSection?: Maybe<ComponentSectionsDownloadSection>;
  inheritColorFromParent?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ContentPageRelationResponseCollection>;
  mainContent?: Maybe<Array<Maybe<ContentPageMainContentDynamicZone>>>;
  override?: Maybe<ComponentBlocksHighlightOverride>;
  parentPage?: Maybe<ContentPageEntityResponse>;
  partners?: Maybe<Array<Maybe<ComponentBlocksPartnerItem>>>;
  perex?: Maybe<Scalars['String']>;
  place?: Maybe<PlaceEntityResponse>;
  placeAddress?: Maybe<Scalars['String']>;
  placeTitle?: Maybe<Scalars['String']>;
  positions?: Maybe<Array<Maybe<ComponentBlocksPositionItem>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  purchaseId?: Maybe<Scalars['String']>;
  relatedContentSubmenuTitle?: Maybe<Scalars['String']>;
  relatedContentTitle?: Maybe<Scalars['String']>;
  sellTickets?: Maybe<Scalars['Boolean']>;
  seo?: Maybe<ComponentBlocksSeo>;
  showRemainingTime?: Maybe<Scalars['Boolean']>;
  showShareButtons?: Maybe<Scalars['Boolean']>;
  slider?: Maybe<ComponentSectionsSliderSection>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelationResponseCollection>;
  timeFrom?: Maybe<Scalars['Time']>;
  timeTo?: Maybe<Scalars['Time']>;
  title: Scalars['String'];
  titleToShow?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  useDatetimeAsSubtitle?: Maybe<Scalars['Boolean']>;
};


export type ContentPageChildPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContentPageLocalizationsArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContentPagePartnersArgs = {
  filters?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContentPagePositionsArgs = {
  filters?: InputMaybe<ComponentBlocksPositionItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContentPageTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentPageEntity = {
  __typename?: 'ContentPageEntity';
  attributes?: Maybe<ContentPage>;
  id?: Maybe<Scalars['ID']>;
};

export type ContentPageEntityResponse = {
  __typename?: 'ContentPageEntityResponse';
  data?: Maybe<ContentPageEntity>;
};

export type ContentPageEntityResponseCollection = {
  __typename?: 'ContentPageEntityResponseCollection';
  data: Array<ContentPageEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentPageFiltersInput = {
  addedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContentPageFiltersInput>>>;
  childPages?: InputMaybe<ContentPageFiltersInput>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dateFrom?: InputMaybe<DateFilterInput>;
  dateTo?: InputMaybe<DateFilterInput>;
  downloadSection?: InputMaybe<ComponentSectionsDownloadSectionFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  inheritColorFromParent?: InputMaybe<BooleanFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ContentPageFiltersInput>;
  not?: InputMaybe<ContentPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentPageFiltersInput>>>;
  override?: InputMaybe<ComponentBlocksHighlightOverrideFiltersInput>;
  parentPage?: InputMaybe<ContentPageFiltersInput>;
  partners?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  perex?: InputMaybe<StringFilterInput>;
  place?: InputMaybe<PlaceFiltersInput>;
  placeAddress?: InputMaybe<StringFilterInput>;
  placeTitle?: InputMaybe<StringFilterInput>;
  positions?: InputMaybe<ComponentBlocksPositionItemFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  purchaseId?: InputMaybe<StringFilterInput>;
  relatedContentSubmenuTitle?: InputMaybe<StringFilterInput>;
  relatedContentTitle?: InputMaybe<StringFilterInput>;
  sellTickets?: InputMaybe<BooleanFilterInput>;
  seo?: InputMaybe<ComponentBlocksSeoFiltersInput>;
  showRemainingTime?: InputMaybe<BooleanFilterInput>;
  showShareButtons?: InputMaybe<BooleanFilterInput>;
  slider?: InputMaybe<ComponentSectionsSliderSectionFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  subtitle?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  timeFrom?: InputMaybe<TimeFilterInput>;
  timeTo?: InputMaybe<TimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  titleToShow?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  useDatetimeAsSubtitle?: InputMaybe<BooleanFilterInput>;
};

export type ContentPageInput = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  childPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  color?: InputMaybe<Scalars['String']>;
  coverMedia?: InputMaybe<Scalars['ID']>;
  dateFrom?: InputMaybe<Scalars['Date']>;
  dateTo?: InputMaybe<Scalars['Date']>;
  downloadSection?: InputMaybe<ComponentSectionsDownloadSectionInput>;
  inheritColorFromParent?: InputMaybe<Scalars['Boolean']>;
  mainContent?: InputMaybe<Array<Scalars['ContentPageMainContentDynamicZoneInput']>>;
  override?: InputMaybe<ComponentBlocksHighlightOverrideInput>;
  parentPage?: InputMaybe<Scalars['ID']>;
  partners?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemInput>>>;
  perex?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['ID']>;
  placeAddress?: InputMaybe<Scalars['String']>;
  placeTitle?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<Array<InputMaybe<ComponentBlocksPositionItemInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  purchaseId?: InputMaybe<Scalars['String']>;
  relatedContentSubmenuTitle?: InputMaybe<Scalars['String']>;
  relatedContentTitle?: InputMaybe<Scalars['String']>;
  sellTickets?: InputMaybe<Scalars['Boolean']>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
  showRemainingTime?: InputMaybe<Scalars['Boolean']>;
  showShareButtons?: InputMaybe<Scalars['Boolean']>;
  slider?: InputMaybe<ComponentSectionsSliderSectionInput>;
  slug?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  timeFrom?: InputMaybe<Scalars['Time']>;
  timeTo?: InputMaybe<Scalars['Time']>;
  title?: InputMaybe<Scalars['String']>;
  titleToShow?: InputMaybe<Scalars['String']>;
  useDatetimeAsSubtitle?: InputMaybe<Scalars['Boolean']>;
};

export type ContentPageMainContentDynamicZone = ComponentSectionsAudioSection | ComponentSectionsContactCardsSection | ComponentSectionsGallerySection | ComponentSectionsRichtextSection | ComponentSectionsVideoSection | Error;

export type ContentPageRelationResponseCollection = {
  __typename?: 'ContentPageRelationResponseCollection';
  data: Array<ContentPageEntity>;
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

export enum Enum_Componentsectionspagesection_Layout {
  Cards = 'cards',
  Chessboard = 'chessboard',
  Fullwidth = 'fullwidth'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type ExhibitionsPage = {
  __typename?: 'ExhibitionsPage';
  archiveSection?: Maybe<ComponentSectionsArchiveSection>;
  archiveSeo?: Maybe<ComponentBlocksSeo>;
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ExhibitionsPageRelationResponseCollection>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ExhibitionsPageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ExhibitionsPageEntity = {
  __typename?: 'ExhibitionsPageEntity';
  attributes?: Maybe<ExhibitionsPage>;
  id?: Maybe<Scalars['ID']>;
};

export type ExhibitionsPageEntityResponse = {
  __typename?: 'ExhibitionsPageEntityResponse';
  data?: Maybe<ExhibitionsPageEntity>;
};

export type ExhibitionsPageInput = {
  archiveSection?: InputMaybe<ComponentSectionsArchiveSectionInput>;
  archiveSeo?: InputMaybe<ComponentBlocksSeoInput>;
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type ExhibitionsPageRelationResponseCollection = {
  __typename?: 'ExhibitionsPageRelationResponseCollection';
  data: Array<ExhibitionsPageEntity>;
};

export type ExplorePage = {
  __typename?: 'ExplorePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ExplorePageRelationResponseCollection>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ExplorePageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ExplorePageEntity = {
  __typename?: 'ExplorePageEntity';
  attributes?: Maybe<ExplorePage>;
  id?: Maybe<Scalars['ID']>;
};

export type ExplorePageEntityResponse = {
  __typename?: 'ExplorePageEntityResponse';
  data?: Maybe<ExplorePageEntity>;
};

export type ExplorePageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type ExplorePageRelationResponseCollection = {
  __typename?: 'ExplorePageRelationResponseCollection';
  data: Array<ExplorePageEntity>;
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

export type General = {
  __typename?: 'General';
  createdAt?: Maybe<Scalars['DateTime']>;
  disclosureMoreFiles?: Maybe<ComponentSectionsDownloadSection>;
  email?: Maybe<Scalars['String']>;
  footerLinks1?: Maybe<ComponentBlocksLinks>;
  footerLinks2?: Maybe<ComponentBlocksLinks>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GeneralRelationResponseCollection>;
  mirbach?: Maybe<ComponentBlocksPalace>;
  name?: Maybe<Scalars['String']>;
  openingHours?: Maybe<Scalars['String']>;
  palffy?: Maybe<ComponentBlocksPalace>;
  socialLinks?: Maybe<ComponentBlocksLinks>;
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
  disclosureMoreFiles?: InputMaybe<ComponentSectionsDownloadSectionInput>;
  email?: InputMaybe<Scalars['String']>;
  footerLinks1?: InputMaybe<ComponentBlocksLinksInput>;
  footerLinks2?: InputMaybe<ComponentBlocksLinksInput>;
  mirbach?: InputMaybe<ComponentBlocksPalaceInput>;
  name?: InputMaybe<Scalars['String']>;
  openingHours?: InputMaybe<Scalars['String']>;
  palffy?: InputMaybe<ComponentBlocksPalaceInput>;
  socialLinks?: InputMaybe<ComponentBlocksLinksInput>;
};

export type GeneralRelationResponseCollection = {
  __typename?: 'GeneralRelationResponseCollection';
  data: Array<GeneralEntity>;
};

export type GenericMorph = AboutUsPage | CollectionsPage | ComponentBlocksContactCardItem | ComponentBlocksContentPageItem | ComponentBlocksExhibitionArchive | ComponentBlocksFileItem | ComponentBlocksHighlightOverride | ComponentBlocksLinkItem | ComponentBlocksLinks | ComponentBlocksPalace | ComponentBlocksPartnerItem | ComponentBlocksPositionItem | ComponentBlocksSeo | ComponentSectionsArchiveSection | ComponentSectionsAudioSection | ComponentSectionsContactCardsSection | ComponentSectionsDownloadSection | ComponentSectionsGallerySection | ComponentSectionsMapSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | ComponentSectionsRichtextSection | ComponentSectionsSliderSection | ComponentSectionsTicketsSection | ComponentSectionsVideoSection | ContactCard | ContentPage | ExhibitionsPage | ExplorePage | General | GetInvolvedPage | HomePage | I18NLocale | Partner | Place | Tag | TagCategory | Ticket | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VisitUsPage;

export type GetInvolvedPage = {
  __typename?: 'GetInvolvedPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GetInvolvedPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<GetInvolvedPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type GetInvolvedPageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GetInvolvedPageEntity = {
  __typename?: 'GetInvolvedPageEntity';
  attributes?: Maybe<GetInvolvedPage>;
  id?: Maybe<Scalars['ID']>;
};

export type GetInvolvedPageEntityResponse = {
  __typename?: 'GetInvolvedPageEntityResponse';
  data?: Maybe<GetInvolvedPageEntity>;
};

export type GetInvolvedPageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  sections?: InputMaybe<Array<Scalars['GetInvolvedPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type GetInvolvedPageRelationResponseCollection = {
  __typename?: 'GetInvolvedPageRelationResponseCollection';
  data: Array<GetInvolvedPageEntity>;
};

export type GetInvolvedPageSectionsDynamicZone = ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | Error;

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  partners?: Maybe<Array<Maybe<ComponentBlocksPartnerItem>>>;
  sections?: Maybe<Array<Maybe<HomePageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomePageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomePagePartnersArgs = {
  filters?: InputMaybe<ComponentBlocksPartnerItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  partners?: InputMaybe<Array<InputMaybe<ComponentBlocksPartnerItemInput>>>;
  sections?: InputMaybe<Array<Scalars['HomePageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type HomePageSectionsDynamicZone = ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | Error;

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

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAboutUsPageLocalization?: Maybe<AboutUsPageEntityResponse>;
  createCollectionsPageLocalization?: Maybe<CollectionsPageEntityResponse>;
  createContactCard?: Maybe<ContactCardEntityResponse>;
  createContactCardLocalization?: Maybe<ContactCardEntityResponse>;
  createContentPage?: Maybe<ContentPageEntityResponse>;
  createContentPageLocalization?: Maybe<ContentPageEntityResponse>;
  createExhibitionsPageLocalization?: Maybe<ExhibitionsPageEntityResponse>;
  createExplorePageLocalization?: Maybe<ExplorePageEntityResponse>;
  createGeneralLocalization?: Maybe<GeneralEntityResponse>;
  createGetInvolvedPageLocalization?: Maybe<GetInvolvedPageEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createPartner?: Maybe<PartnerEntityResponse>;
  createPartnerLocalization?: Maybe<PartnerEntityResponse>;
  createPlace?: Maybe<PlaceEntityResponse>;
  createPlaceLocalization?: Maybe<PlaceEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createTagCategory?: Maybe<TagCategoryEntityResponse>;
  createTagCategoryLocalization?: Maybe<TagCategoryEntityResponse>;
  createTagLocalization?: Maybe<TagEntityResponse>;
  createTicket?: Maybe<TicketEntityResponse>;
  createTicketLocalization?: Maybe<TicketEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVisitUsPageLocalization?: Maybe<VisitUsPageEntityResponse>;
  deleteAboutUsPage?: Maybe<AboutUsPageEntityResponse>;
  deleteCollectionsPage?: Maybe<CollectionsPageEntityResponse>;
  deleteContactCard?: Maybe<ContactCardEntityResponse>;
  deleteContentPage?: Maybe<ContentPageEntityResponse>;
  deleteExhibitionsPage?: Maybe<ExhibitionsPageEntityResponse>;
  deleteExplorePage?: Maybe<ExplorePageEntityResponse>;
  deleteGeneral?: Maybe<GeneralEntityResponse>;
  deleteGetInvolvedPage?: Maybe<GetInvolvedPageEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deletePartner?: Maybe<PartnerEntityResponse>;
  deletePlace?: Maybe<PlaceEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteTagCategory?: Maybe<TagCategoryEntityResponse>;
  deleteTicket?: Maybe<TicketEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVisitUsPage?: Maybe<VisitUsPageEntityResponse>;
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
  updateAboutUsPage?: Maybe<AboutUsPageEntityResponse>;
  updateCollectionsPage?: Maybe<CollectionsPageEntityResponse>;
  updateContactCard?: Maybe<ContactCardEntityResponse>;
  updateContentPage?: Maybe<ContentPageEntityResponse>;
  updateExhibitionsPage?: Maybe<ExhibitionsPageEntityResponse>;
  updateExplorePage?: Maybe<ExplorePageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGeneral?: Maybe<GeneralEntityResponse>;
  updateGetInvolvedPage?: Maybe<GetInvolvedPageEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updatePartner?: Maybe<PartnerEntityResponse>;
  updatePlace?: Maybe<PlaceEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateTagCategory?: Maybe<TagCategoryEntityResponse>;
  updateTicket?: Maybe<TicketEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVisitUsPage?: Maybe<VisitUsPageEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAboutUsPageLocalizationArgs = {
  data?: InputMaybe<AboutUsPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCollectionsPageLocalizationArgs = {
  data?: InputMaybe<CollectionsPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContactCardArgs = {
  data: ContactCardInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContactCardLocalizationArgs = {
  data?: InputMaybe<ContactCardInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContentPageArgs = {
  data: ContentPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContentPageLocalizationArgs = {
  data?: InputMaybe<ContentPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateExhibitionsPageLocalizationArgs = {
  data?: InputMaybe<ExhibitionsPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateExplorePageLocalizationArgs = {
  data?: InputMaybe<ExplorePageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateGeneralLocalizationArgs = {
  data?: InputMaybe<GeneralInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateGetInvolvedPageLocalizationArgs = {
  data?: InputMaybe<GetInvolvedPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomePageLocalizationArgs = {
  data?: InputMaybe<HomePageInput>;
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


export type MutationCreatePlaceArgs = {
  data: PlaceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePlaceLocalizationArgs = {
  data?: InputMaybe<PlaceInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTagArgs = {
  data: TagInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTagCategoryArgs = {
  data: TagCategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTagCategoryLocalizationArgs = {
  data?: InputMaybe<TagCategoryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTagLocalizationArgs = {
  data?: InputMaybe<TagInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTicketArgs = {
  data: TicketInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateTicketLocalizationArgs = {
  data?: InputMaybe<TicketInput>;
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


export type MutationCreateVisitUsPageLocalizationArgs = {
  data?: InputMaybe<VisitUsPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteAboutUsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCollectionsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteContactCardArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteContentPageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteExhibitionsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteExplorePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteGeneralArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteGetInvolvedPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePartnerArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePlaceArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteTagCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteTicketArgs = {
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


export type MutationDeleteVisitUsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationUpdateAboutUsPageArgs = {
  data: AboutUsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCollectionsPageArgs = {
  data: CollectionsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateContactCardArgs = {
  data: ContactCardInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateContentPageArgs = {
  data: ContentPageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateExhibitionsPageArgs = {
  data: ExhibitionsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateExplorePageArgs = {
  data: ExplorePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGeneralArgs = {
  data: GeneralInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateGetInvolvedPageArgs = {
  data: GetInvolvedPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePartnerArgs = {
  data: PartnerInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePlaceArgs = {
  data: PlaceInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateTagCategoryArgs = {
  data: TagCategoryInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateTicketArgs = {
  data: TicketInput;
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


export type MutationUpdateVisitUsPageArgs = {
  data: VisitUsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
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

export type Partner = {
  __typename?: 'Partner';
  createdAt?: Maybe<Scalars['DateTime']>;
  link?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PartnerRelationResponseCollection>;
  logo: UploadFileEntityResponse;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PartnerLocalizationsArgs = {
  filters?: InputMaybe<PartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
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
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PartnerFiltersInput>;
  not?: InputMaybe<PartnerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PartnerFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PartnerInput = {
  link?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PartnerRelationResponseCollection = {
  __typename?: 'PartnerRelationResponseCollection';
  data: Array<PartnerEntity>;
};

export type Place = {
  __typename?: 'Place';
  address: Scalars['String'];
  contentPages?: Maybe<ContentPageRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<PlaceRelationResponseCollection>;
  purchaseId?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PlaceContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PlaceLocalizationsArgs = {
  filters?: InputMaybe<PlaceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PlaceEntity = {
  __typename?: 'PlaceEntity';
  attributes?: Maybe<Place>;
  id?: Maybe<Scalars['ID']>;
};

export type PlaceEntityResponse = {
  __typename?: 'PlaceEntityResponse';
  data?: Maybe<PlaceEntity>;
};

export type PlaceEntityResponseCollection = {
  __typename?: 'PlaceEntityResponseCollection';
  data: Array<PlaceEntity>;
  meta: ResponseCollectionMeta;
};

export type PlaceFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PlaceFiltersInput>>>;
  contentPages?: InputMaybe<ContentPageFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PlaceFiltersInput>;
  not?: InputMaybe<PlaceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PlaceFiltersInput>>>;
  purchaseId?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PlaceInput = {
  address?: InputMaybe<Scalars['String']>;
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  purchaseId?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PlaceRelationResponseCollection = {
  __typename?: 'PlaceRelationResponseCollection';
  data: Array<PlaceEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutUsPage?: Maybe<AboutUsPageEntityResponse>;
  collectionsPage?: Maybe<CollectionsPageEntityResponse>;
  contactCard?: Maybe<ContactCardEntityResponse>;
  contactCards?: Maybe<ContactCardEntityResponseCollection>;
  contentPage?: Maybe<ContentPageEntityResponse>;
  contentPageBySlug?: Maybe<ContentPageEntityResponse>;
  contentPages?: Maybe<ContentPageEntityResponseCollection>;
  exhibitionsPage?: Maybe<ExhibitionsPageEntityResponse>;
  explorePage?: Maybe<ExplorePageEntityResponse>;
  general?: Maybe<GeneralEntityResponse>;
  getInvolvedPage?: Maybe<GetInvolvedPageEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  partner?: Maybe<PartnerEntityResponse>;
  partners?: Maybe<PartnerEntityResponseCollection>;
  place?: Maybe<PlaceEntityResponse>;
  placeBySlug?: Maybe<PlaceEntityResponse>;
  places?: Maybe<PlaceEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tagBySlug?: Maybe<TagEntityResponse>;
  tagCategories?: Maybe<TagCategoryEntityResponseCollection>;
  tagCategory?: Maybe<TagCategoryEntityResponse>;
  tagCategoryBySlug?: Maybe<TagCategoryEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  ticket?: Maybe<TicketEntityResponse>;
  tickets?: Maybe<TicketEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  visitUsPage?: Maybe<VisitUsPageEntityResponse>;
};


export type QueryAboutUsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCollectionsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContactCardArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContactCardsArgs = {
  filters?: InputMaybe<ContactCardFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContentPageBySlugArgs = {
  isPublished?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryExhibitionsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryExplorePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryGeneralArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryGetInvolvedPageArgs = {
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


export type QueryPartnerArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPartnersArgs = {
  filters?: InputMaybe<PartnerFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPlaceArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryPlaceBySlugArgs = {
  isPublished?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPlacesArgs = {
  filters?: InputMaybe<PlaceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryTagBySlugArgs = {
  isPublished?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryTagCategoriesArgs = {
  filters?: InputMaybe<TagCategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTagCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryTagCategoryBySlugArgs = {
  isPublished?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTicketArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryTicketsArgs = {
  filters?: InputMaybe<TicketFiltersInput>;
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


export type QueryVisitUsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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
  contentPages?: Maybe<ContentPageRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<TagRelationResponseCollection>;
  slug: Scalars['String'];
  tagCategory?: Maybe<TagCategoryEntityResponse>;
  title: Scalars['String'];
  titleInternal?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TagContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TagLocalizationsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TagCategory = {
  __typename?: 'TagCategory';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<TagCategoryRelationResponseCollection>;
  slug: Scalars['String'];
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TagCategoryLocalizationsArgs = {
  filters?: InputMaybe<TagCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TagCategoryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TagCategoryEntity = {
  __typename?: 'TagCategoryEntity';
  attributes?: Maybe<TagCategory>;
  id?: Maybe<Scalars['ID']>;
};

export type TagCategoryEntityResponse = {
  __typename?: 'TagCategoryEntityResponse';
  data?: Maybe<TagCategoryEntity>;
};

export type TagCategoryEntityResponseCollection = {
  __typename?: 'TagCategoryEntityResponseCollection';
  data: Array<TagCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type TagCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TagCategoryFiltersInput>;
  not?: InputMaybe<TagCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagCategoryFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagCategoryInput = {
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type TagCategoryRelationResponseCollection = {
  __typename?: 'TagCategoryRelationResponseCollection';
  data: Array<TagCategoryEntity>;
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
  contentPages?: InputMaybe<ContentPageFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TagFiltersInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  tagCategory?: InputMaybe<TagCategoryFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  titleInternal?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  contentPages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  tagCategory?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type Ticket = {
  __typename?: 'Ticket';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<TicketRelationResponseCollection>;
  price?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  purchaseIdGift?: Maybe<Scalars['String']>;
  purchaseIdSelf?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TicketLocalizationsArgs = {
  filters?: InputMaybe<TicketFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TicketEntity = {
  __typename?: 'TicketEntity';
  attributes?: Maybe<Ticket>;
  id?: Maybe<Scalars['ID']>;
};

export type TicketEntityResponse = {
  __typename?: 'TicketEntityResponse';
  data?: Maybe<TicketEntity>;
};

export type TicketEntityResponseCollection = {
  __typename?: 'TicketEntityResponseCollection';
  data: Array<TicketEntity>;
  meta: ResponseCollectionMeta;
};

export type TicketFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TicketFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TicketFiltersInput>;
  not?: InputMaybe<TicketFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TicketFiltersInput>>>;
  price?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  purchaseIdGift?: InputMaybe<StringFilterInput>;
  purchaseIdSelf?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TicketInput = {
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  purchaseIdGift?: InputMaybe<Scalars['String']>;
  purchaseIdSelf?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TicketRelationResponseCollection = {
  __typename?: 'TicketRelationResponseCollection';
  data: Array<TicketEntity>;
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

export type VisitUsPage = {
  __typename?: 'VisitUsPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  highlights?: Maybe<Array<Maybe<ComponentBlocksContentPageItem>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<VisitUsPageRelationResponseCollection>;
  sections?: Maybe<Array<Maybe<VisitUsPageSectionsDynamicZone>>>;
  seo?: Maybe<ComponentBlocksSeo>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type VisitUsPageHighlightsArgs = {
  filters?: InputMaybe<ComponentBlocksContentPageItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VisitUsPageEntity = {
  __typename?: 'VisitUsPageEntity';
  attributes?: Maybe<VisitUsPage>;
  id?: Maybe<Scalars['ID']>;
};

export type VisitUsPageEntityResponse = {
  __typename?: 'VisitUsPageEntityResponse';
  data?: Maybe<VisitUsPageEntity>;
};

export type VisitUsPageInput = {
  highlights?: InputMaybe<Array<InputMaybe<ComponentBlocksContentPageItemInput>>>;
  sections?: InputMaybe<Array<Scalars['VisitUsPageSectionsDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentBlocksSeoInput>;
};

export type VisitUsPageRelationResponseCollection = {
  __typename?: 'VisitUsPageRelationResponseCollection';
  data: Array<VisitUsPageEntity>;
};

export type VisitUsPageSectionsDynamicZone = ComponentSectionsMapSection | ComponentSectionsNewsSection | ComponentSectionsNewsletterSection | ComponentSectionsOpeningHoursSection | ComponentSectionsPageSection | ComponentSectionsRichtextSection | ComponentSectionsTicketsSection | Error;

export type AllContentPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllContentPagesQuery = { __typename?: 'Query', contentPages?: { __typename?: 'ContentPageEntityResponseCollection', data: Array<{ __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, slug: string, subtitle?: string | null, dateFrom?: any | null, dateTo?: any | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', title: string, slug: string } | null }> } | null } | null }> } | null };

export type TagCategoriesQueryVariables = Exact<{
  ids: Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>;
}>;


export type TagCategoriesQuery = { __typename?: 'Query', tagCategories?: { __typename?: 'TagCategoryEntityResponseCollection', data: Array<{ __typename?: 'TagCategoryEntity', id?: string | null, attributes?: { __typename?: 'TagCategory', title: string, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', title: string } | null }> } | null } | null }> } | null };

export type UpdateContentPageMutationVariables = Exact<{
  id: Scalars['ID'];
  data: ContentPageInput;
}>;


export type UpdateContentPageMutation = { __typename?: 'Mutation', updateContentPage?: { __typename?: 'ContentPageEntityResponse', data?: { __typename?: 'ContentPageEntity', id?: string | null, attributes?: { __typename?: 'ContentPage', title: string, slug: string, dateFrom?: any | null, dateTo?: any | null, addedAt?: any | null } | null } | null } | null };

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = { __typename?: 'Query', tags?: { __typename?: 'TagEntityResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', title: string, slug: string, tagCategory?: { __typename?: 'TagCategoryEntityResponse', data?: { __typename?: 'TagCategoryEntity', id?: string | null, attributes?: { __typename?: 'TagCategory', title: string } | null } | null } | null } | null }> } | null };

export type UpdateTagMutationVariables = Exact<{
  id: Scalars['ID'];
  data: TagInput;
}>;


export type UpdateTagMutation = { __typename?: 'Mutation', updateTag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', title: string, slug: string, titleInternal?: string | null } | null } | null } | null };


export const AllContentPagesDocument = gql`
    query AllContentPages {
  contentPages(pagination: {start: 0, limit: -1}, locale: "all") {
    data {
      id
      attributes {
        title
        slug
        subtitle
        tags {
          data {
            id
            attributes {
              title
              slug
            }
          }
        }
        dateFrom
        dateTo
      }
    }
  }
}
    `;
export const TagCategoriesDocument = gql`
    query TagCategories($ids: [ID]!) {
  tagCategories(
    pagination: {start: 0, limit: -1}
    locale: "all"
    filters: {id: {in: $ids}}
  ) {
    data {
      id
      attributes {
        title
        tags {
          data {
            id
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
export const UpdateContentPageDocument = gql`
    mutation UpdateContentPage($id: ID!, $data: ContentPageInput!) {
  updateContentPage(id: $id, data: $data) {
    data {
      id
      attributes {
        title
        slug
        dateFrom
        dateTo
        addedAt
      }
    }
  }
}
    `;
export const AllTagsDocument = gql`
    query AllTags {
  tags(pagination: {start: 0, limit: -1}, locale: "all") {
    data {
      id
      attributes {
        title
        slug
        tagCategory {
          data {
            id
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
export const UpdateTagDocument = gql`
    mutation UpdateTag($id: ID!, $data: TagInput!) {
  updateTag(id: $id, data: $data) {
    data {
      id
      attributes {
        title
        slug
        titleInternal
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllContentPages(variables?: AllContentPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllContentPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllContentPagesQuery>(AllContentPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllContentPages', 'query');
    },
    TagCategories(variables: TagCategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TagCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TagCategoriesQuery>(TagCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TagCategories', 'query');
    },
    UpdateContentPage(variables: UpdateContentPageMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateContentPageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateContentPageMutation>(UpdateContentPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateContentPage', 'mutation');
    },
    AllTags(variables?: AllTagsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllTagsQuery>(AllTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllTags', 'query');
    },
    UpdateTag(variables: UpdateTagMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTagMutation>(UpdateTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateTag', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;