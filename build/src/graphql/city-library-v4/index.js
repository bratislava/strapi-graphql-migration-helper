"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.getSdk = exports.UpdatePageSectionsDocument = exports.DeleteEventDocument = exports.CreateDefaultLocaleEventDocument = exports.PagesBySlugDocument = exports.EventsBySlugDocument = exports.CreateEnLocalizationEventDocument = exports.CreateSvkLocaleEventDocument = exports.PublicationState = exports.Enum_Page_Layout = exports.Enum_Componentsectionsform_Type = exports.Enum_Componentblockstablerow_Valuealign = exports.Enum_Componentaccordionitemstablerow_Valuealign = exports.Enum_Componentaccordionitemsform_Type = void 0;
var graphql_tag_1 = require("graphql-tag");
var Enum_Componentaccordionitemsform_Type;
(function (Enum_Componentaccordionitemsform_Type) {
    Enum_Componentaccordionitemsform_Type["AkaKnihaVamVKnizniciChyba"] = "aka_kniha_vam_v_kniznici_chyba";
    Enum_Componentaccordionitemsform_Type["AkoSaPrihlasitDoKniznice"] = "ako_sa_prihlasit_do_kniznice";
    Enum_Componentaccordionitemsform_Type["BibliografiaAResers"] = "bibliografia_a_resers";
    Enum_Componentaccordionitemsform_Type["Cyklodonaska"] = "cyklodonaska";
    Enum_Componentaccordionitemsform_Type["DarcekovaPoukazka"] = "darcekova_poukazka";
    Enum_Componentaccordionitemsform_Type["DetailPodujatia"] = "detail_podujatia";
    Enum_Componentaccordionitemsform_Type["DivadelnaTechnika"] = "divadelna_technika";
    Enum_Componentaccordionitemsform_Type["HraNaHudobneNastroje"] = "hra_na_hudobne_nastroje";
    Enum_Componentaccordionitemsform_Type["KniharskaDielna"] = "kniharska_dielna";
    Enum_Componentaccordionitemsform_Type["MedzikniznicnaVypozicnaSluzbaCitatel"] = "medzikniznicna_vypozicna_sluzba_citatel";
    Enum_Componentaccordionitemsform_Type["MedzikniznicnaVypozicnaSluzbaKniznica"] = "medzikniznicna_vypozicna_sluzba_kniznica";
    Enum_Componentaccordionitemsform_Type["NapisteNam"] = "napiste_nam";
    Enum_Componentaccordionitemsform_Type["PracujteVPriestorochKniznice"] = "pracujte_v_priestoroch_kniznice";
    Enum_Componentaccordionitemsform_Type["PreSkoly"] = "pre_skoly";
    Enum_Componentaccordionitemsform_Type["PrenajmiteSiPriestor"] = "prenajmite_si_priestor";
    Enum_Componentaccordionitemsform_Type["Tablety"] = "tablety";
    Enum_Componentaccordionitemsform_Type["TabletyACitacky"] = "tablety_a_citacky";
})(Enum_Componentaccordionitemsform_Type = exports.Enum_Componentaccordionitemsform_Type || (exports.Enum_Componentaccordionitemsform_Type = {}));
var Enum_Componentaccordionitemstablerow_Valuealign;
(function (Enum_Componentaccordionitemstablerow_Valuealign) {
    Enum_Componentaccordionitemstablerow_Valuealign["Center"] = "center";
    Enum_Componentaccordionitemstablerow_Valuealign["Start"] = "start";
})(Enum_Componentaccordionitemstablerow_Valuealign = exports.Enum_Componentaccordionitemstablerow_Valuealign || (exports.Enum_Componentaccordionitemstablerow_Valuealign = {}));
var Enum_Componentblockstablerow_Valuealign;
(function (Enum_Componentblockstablerow_Valuealign) {
    Enum_Componentblockstablerow_Valuealign["Center"] = "center";
    Enum_Componentblockstablerow_Valuealign["Start"] = "start";
})(Enum_Componentblockstablerow_Valuealign = exports.Enum_Componentblockstablerow_Valuealign || (exports.Enum_Componentblockstablerow_Valuealign = {}));
var Enum_Componentsectionsform_Type;
(function (Enum_Componentsectionsform_Type) {
    Enum_Componentsectionsform_Type["AkaKnihaVamVKnizniciChyba"] = "aka_kniha_vam_v_kniznici_chyba";
    Enum_Componentsectionsform_Type["AkoSaPrihlasitDoKniznice"] = "ako_sa_prihlasit_do_kniznice";
    Enum_Componentsectionsform_Type["BibliografiaAResers"] = "bibliografia_a_resers";
    Enum_Componentsectionsform_Type["Cyklodonaska"] = "cyklodonaska";
    Enum_Componentsectionsform_Type["DarcekovaPoukazka"] = "darcekova_poukazka";
    Enum_Componentsectionsform_Type["DetailPodujatia"] = "detail_podujatia";
    Enum_Componentsectionsform_Type["DivadelnaTechnika"] = "divadelna_technika";
    Enum_Componentsectionsform_Type["HraNaHudobneNastroje"] = "hra_na_hudobne_nastroje";
    Enum_Componentsectionsform_Type["KniharskaDielna"] = "kniharska_dielna";
    Enum_Componentsectionsform_Type["MedzikniznicnaVypozicnaSluzbaCitatel"] = "medzikniznicna_vypozicna_sluzba_citatel";
    Enum_Componentsectionsform_Type["MedzikniznicnaVypozicnaSluzbaKniznica"] = "medzikniznicna_vypozicna_sluzba_kniznica";
    Enum_Componentsectionsform_Type["NapisteNam"] = "napiste_nam";
    Enum_Componentsectionsform_Type["PracujteVPriestorochKniznice"] = "pracujte_v_priestoroch_kniznice";
    Enum_Componentsectionsform_Type["PreSkoly"] = "pre_skoly";
    Enum_Componentsectionsform_Type["PrenajmiteSiPriestor"] = "prenajmite_si_priestor";
    Enum_Componentsectionsform_Type["Tablety"] = "tablety";
    Enum_Componentsectionsform_Type["TabletyACitacky"] = "tablety_a_citacky";
})(Enum_Componentsectionsform_Type = exports.Enum_Componentsectionsform_Type || (exports.Enum_Componentsectionsform_Type = {}));
var Enum_Page_Layout;
(function (Enum_Page_Layout) {
    Enum_Page_Layout["BlogPosts"] = "blog_posts";
    Enum_Page_Layout["BookNews"] = "book_news";
    Enum_Page_Layout["ContentWithSidebar"] = "content_with_sidebar";
    Enum_Page_Layout["Documents"] = "documents";
    Enum_Page_Layout["Event"] = "event";
    Enum_Page_Layout["EventsListing"] = "eventsListing";
    Enum_Page_Layout["FullContent"] = "full_content";
    Enum_Page_Layout["Listing"] = "listing";
    Enum_Page_Layout["LocalitiesListing"] = "localitiesListing";
    Enum_Page_Layout["Locality"] = "locality";
    Enum_Page_Layout["News"] = "news";
    Enum_Page_Layout["NewsListing"] = "newsListing";
    Enum_Page_Layout["Partners"] = "partners";
    Enum_Page_Layout["Premises"] = "premises";
    Enum_Page_Layout["Sublisting"] = "sublisting";
})(Enum_Page_Layout = exports.Enum_Page_Layout || (exports.Enum_Page_Layout = {}));
var PublicationState;
(function (PublicationState) {
    PublicationState["Live"] = "LIVE";
    PublicationState["Preview"] = "PREVIEW";
})(PublicationState = exports.PublicationState || (exports.PublicationState = {}));
exports.CreateSvkLocaleEventDocument = (0, graphql_tag_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation CreateSvkLocaleEvent($data: EventInput!) {\n  createEvent(data: $data, locale: \"sk\") {\n    data {\n      id\n    }\n  }\n}\n    "], ["\n    mutation CreateSvkLocaleEvent($data: EventInput!) {\n  createEvent(data: $data, locale: \"sk\") {\n    data {\n      id\n    }\n  }\n}\n    "])));
exports.CreateEnLocalizationEventDocument = (0, graphql_tag_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation CreateEnLocalizationEvent($data: EventInput!, $id: ID!) {\n  createEventLocalization(data: $data, id: $id, locale: \"en\") {\n    data {\n      id\n    }\n  }\n}\n    "], ["\n    mutation CreateEnLocalizationEvent($data: EventInput!, $id: ID!) {\n  createEventLocalization(data: $data, id: $id, locale: \"en\") {\n    data {\n      id\n    }\n  }\n}\n    "])));
exports.EventsBySlugDocument = (0, graphql_tag_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    query EventsBySlug($slug: String) {\n  events(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n    }\n  }\n}\n    "], ["\n    query EventsBySlug($slug: String) {\n  events(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n    }\n  }\n}\n    "])));
exports.PagesBySlugDocument = (0, graphql_tag_1["default"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query PagesBySlug($slug: String, $locale: I18NLocaleCode) {\n  pages(filters: {slug: {eq: $slug}}, locale: $locale) {\n    data {\n      id\n      attributes {\n        sections {\n          ... on ComponentSectionsVideo {\n            __typename\n            id\n          }\n          ... on ComponentSectionsExternalLinks {\n            __typename\n            id\n          }\n          ... on ComponentSectionsDocuments {\n            __typename\n            id\n          }\n          ... on ComponentSectionsLocalityDetails {\n            __typename\n            id\n          }\n          ... on ComponentSectionsSubListing {\n            __typename\n            id\n          }\n          ... on ComponentSectionsFlatTextCenter {\n            __typename\n            id\n          }\n          ... on ComponentSectionsCta {\n            __typename\n            id\n          }\n          ... on ComponentSectionsColumnedText {\n            __typename\n            id\n          }\n          ... on ComponentSectionsDivider {\n            __typename\n            id\n          }\n          ... on ComponentSectionsEventDetails {\n            __typename\n            id\n          }\n          ... on ComponentSectionsAccordion {\n            __typename\n            id\n          }\n          ... on ComponentSectionsTable {\n            __typename\n            id\n          }\n          ... on ComponentSectionsSubpages {\n            __typename\n            id\n          }\n          ... on ComponentSectionsForm {\n            __typename\n            id\n          }\n          ... on ComponentSectionsSiteUsefullness {\n            __typename\n            id\n          }\n          ... on ComponentSectionsFlatText {\n            __typename\n            id\n          }\n          ... on ComponentSectionsFaq {\n            __typename\n            id\n          }\n          ... on ComponentSectionsGallery {\n            __typename\n            id\n          }\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query PagesBySlug($slug: String, $locale: I18NLocaleCode) {\n  pages(filters: {slug: {eq: $slug}}, locale: $locale) {\n    data {\n      id\n      attributes {\n        sections {\n          ... on ComponentSectionsVideo {\n            __typename\n            id\n          }\n          ... on ComponentSectionsExternalLinks {\n            __typename\n            id\n          }\n          ... on ComponentSectionsDocuments {\n            __typename\n            id\n          }\n          ... on ComponentSectionsLocalityDetails {\n            __typename\n            id\n          }\n          ... on ComponentSectionsSubListing {\n            __typename\n            id\n          }\n          ... on ComponentSectionsFlatTextCenter {\n            __typename\n            id\n          }\n          ... on ComponentSectionsCta {\n            __typename\n            id\n          }\n          ... on ComponentSectionsColumnedText {\n            __typename\n            id\n          }\n          ... on ComponentSectionsDivider {\n            __typename\n            id\n          }\n          ... on ComponentSectionsEventDetails {\n            __typename\n            id\n          }\n          ... on ComponentSectionsAccordion {\n            __typename\n            id\n          }\n          ... on ComponentSectionsTable {\n            __typename\n            id\n          }\n          ... on ComponentSectionsSubpages {\n            __typename\n            id\n          }\n          ... on ComponentSectionsForm {\n            __typename\n            id\n          }\n          ... on ComponentSectionsSiteUsefullness {\n            __typename\n            id\n          }\n          ... on ComponentSectionsFlatText {\n            __typename\n            id\n          }\n          ... on ComponentSectionsFaq {\n            __typename\n            id\n          }\n          ... on ComponentSectionsGallery {\n            __typename\n            id\n          }\n        }\n      }\n    }\n  }\n}\n    "])));
exports.CreateDefaultLocaleEventDocument = (0, graphql_tag_1["default"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    mutation CreateDefaultLocaleEvent($data: EventInput!) {\n  createEvent(data: $data) {\n    data {\n      id\n    }\n  }\n}\n    "], ["\n    mutation CreateDefaultLocaleEvent($data: EventInput!) {\n  createEvent(data: $data) {\n    data {\n      id\n    }\n  }\n}\n    "])));
exports.DeleteEventDocument = (0, graphql_tag_1["default"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    mutation DeleteEvent {\n  deleteEvent(id: \"0\") {\n    data {\n      id\n    }\n  }\n}\n    "], ["\n    mutation DeleteEvent {\n  deleteEvent(id: \"0\") {\n    data {\n      id\n    }\n  }\n}\n    "])));
exports.UpdatePageSectionsDocument = (0, graphql_tag_1["default"])(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    mutation UpdatePageSections($sections: [PageSectionsDynamicZoneInput!], $id: ID!) {\n  updatePage(id: $id, data: {sections: $sections}) {\n    data {\n      id\n      attributes {\n        slug\n        title\n      }\n    }\n  }\n}\n    "], ["\n    mutation UpdatePageSections($sections: [PageSectionsDynamicZoneInput!], $id: ID!) {\n  updatePage(id: $id, data: {sections: $sections}) {\n    data {\n      id\n      attributes {\n        slug\n        title\n      }\n    }\n  }\n}\n    "])));
var defaultWrapper = function (action, _operationName, _operationType) { return action(); };
function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        CreateSvkLocaleEvent: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.CreateSvkLocaleEventDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'CreateSvkLocaleEvent', 'mutation');
        },
        CreateEnLocalizationEvent: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.CreateEnLocalizationEventDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'CreateEnLocalizationEvent', 'mutation');
        },
        EventsBySlug: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.EventsBySlugDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'EventsBySlug', 'query');
        },
        PagesBySlug: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.PagesBySlugDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'PagesBySlug', 'query');
        },
        CreateDefaultLocaleEvent: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.CreateDefaultLocaleEventDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'CreateDefaultLocaleEvent', 'mutation');
        },
        DeleteEvent: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.DeleteEventDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'DeleteEvent', 'mutation');
        },
        UpdatePageSections: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.UpdatePageSectionsDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'UpdatePageSections', 'mutation');
        }
    };
}
exports.getSdk = getSdk;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
