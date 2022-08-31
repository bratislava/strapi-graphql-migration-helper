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
exports.getSdk = exports.PageDocument = exports.PagesDocument = exports.PublicationState = exports.Enum_Page_Layout = exports.Enum_Componentsectionsform_Type = exports.Enum_Componentblockstablerow_Valuealign = exports.Enum_Componentaccordionitemstablerow_Valuealign = exports.Enum_Componentaccordionitemsform_Type = void 0;
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
    Enum_Page_Layout["Announcement"] = "announcement";
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
exports.PagesDocument = (0, graphql_tag_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query Pages($start: Int, $locale: String) {\n  pages(start: $start, limit: 100, locale: $locale) {\n    layout\n    listingImage {\n      id\n    }\n    id\n    title\n    slug\n    localizations {\n      slug\n    }\n    sections {\n      ... on ComponentSectionsEventDetails {\n        __typename\n        id\n        price\n        partners {\n          id\n        }\n        dateFrom\n        dateTo\n        eventCategory {\n          id\n        }\n        eventCoverImage {\n          id\n        }\n        eventDescription\n        eventLocality {\n          id\n        }\n        eventTags {\n          id\n        }\n        eventTitle\n        guests {\n          id\n        }\n      }\n      ... on ComponentSectionsForm {\n        __typename\n        id\n        type\n      }\n      ... on ComponentSectionsTable {\n        __typename\n        id\n        primaryTitle\n        rows {\n          id\n          label\n          valueAlign\n          value\n        }\n        secondaryTitle\n      }\n      ... on ComponentSectionsDocuments {\n        __typename\n        id\n        moreLink {\n          id\n          title\n          url\n          page {\n            id\n          }\n        }\n        title\n        basicDocuments {\n          id\n        }\n      }\n    }\n    relatedBlogPosts {\n      id\n    }\n    published_at\n    promoted\n    pageCategory {\n      id\n    }\n    description\n    date_added\n    created_at\n    blogPosts {\n      id\n    }\n    Seo {\n      canonicalURL\n      id\n      keywords\n      metaDescription\n      metaRobots\n      metaTitle\n      metaViewport\n    }\n  }\n}\n    "], ["\n    query Pages($start: Int, $locale: String) {\n  pages(start: $start, limit: 100, locale: $locale) {\n    layout\n    listingImage {\n      id\n    }\n    id\n    title\n    slug\n    localizations {\n      slug\n    }\n    sections {\n      ... on ComponentSectionsEventDetails {\n        __typename\n        id\n        price\n        partners {\n          id\n        }\n        dateFrom\n        dateTo\n        eventCategory {\n          id\n        }\n        eventCoverImage {\n          id\n        }\n        eventDescription\n        eventLocality {\n          id\n        }\n        eventTags {\n          id\n        }\n        eventTitle\n        guests {\n          id\n        }\n      }\n      ... on ComponentSectionsForm {\n        __typename\n        id\n        type\n      }\n      ... on ComponentSectionsTable {\n        __typename\n        id\n        primaryTitle\n        rows {\n          id\n          label\n          valueAlign\n          value\n        }\n        secondaryTitle\n      }\n      ... on ComponentSectionsDocuments {\n        __typename\n        id\n        moreLink {\n          id\n          title\n          url\n          page {\n            id\n          }\n        }\n        title\n        basicDocuments {\n          id\n        }\n      }\n    }\n    relatedBlogPosts {\n      id\n    }\n    published_at\n    promoted\n    pageCategory {\n      id\n    }\n    description\n    date_added\n    created_at\n    blogPosts {\n      id\n    }\n    Seo {\n      canonicalURL\n      id\n      keywords\n      metaDescription\n      metaRobots\n      metaTitle\n      metaViewport\n    }\n  }\n}\n    "])));
exports.PageDocument = (0, graphql_tag_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query Page($id: ID!) {\n  page(id: $id) {\n    layout\n    listingImage {\n      id\n    }\n    id\n    title\n    slug\n    localizations {\n      slug\n    }\n    sections {\n      ... on ComponentSectionsEventDetails {\n        __typename\n        id\n        price\n        partners {\n          id\n        }\n        dateFrom\n        dateTo\n        eventCategory {\n          id\n        }\n        eventCoverImage {\n          id\n        }\n        eventDescription\n        eventLocality {\n          id\n        }\n        eventTags {\n          id\n        }\n        eventTitle\n        guests {\n          id\n        }\n      }\n      ... on ComponentSectionsForm {\n        __typename\n        id\n        type\n      }\n      ... on ComponentSectionsTable {\n        __typename\n        id\n        primaryTitle\n        rows {\n          id\n          label\n          valueAlign\n          value\n        }\n        secondaryTitle\n      }\n      ... on ComponentSectionsDocuments {\n        __typename\n        id\n        moreLink {\n          id\n          title\n          url\n          page {\n            id\n          }\n        }\n        title\n        basicDocuments {\n          id\n        }\n      }\n    }\n    relatedBlogPosts {\n      id\n    }\n    published_at\n    promoted\n    pageCategory {\n      id\n    }\n    description\n    date_added\n    created_at\n    blogPosts {\n      id\n    }\n    Seo {\n      canonicalURL\n      id\n      keywords\n      metaDescription\n      metaRobots\n      metaTitle\n      metaViewport\n    }\n  }\n}\n    "], ["\n    query Page($id: ID!) {\n  page(id: $id) {\n    layout\n    listingImage {\n      id\n    }\n    id\n    title\n    slug\n    localizations {\n      slug\n    }\n    sections {\n      ... on ComponentSectionsEventDetails {\n        __typename\n        id\n        price\n        partners {\n          id\n        }\n        dateFrom\n        dateTo\n        eventCategory {\n          id\n        }\n        eventCoverImage {\n          id\n        }\n        eventDescription\n        eventLocality {\n          id\n        }\n        eventTags {\n          id\n        }\n        eventTitle\n        guests {\n          id\n        }\n      }\n      ... on ComponentSectionsForm {\n        __typename\n        id\n        type\n      }\n      ... on ComponentSectionsTable {\n        __typename\n        id\n        primaryTitle\n        rows {\n          id\n          label\n          valueAlign\n          value\n        }\n        secondaryTitle\n      }\n      ... on ComponentSectionsDocuments {\n        __typename\n        id\n        moreLink {\n          id\n          title\n          url\n          page {\n            id\n          }\n        }\n        title\n        basicDocuments {\n          id\n        }\n      }\n    }\n    relatedBlogPosts {\n      id\n    }\n    published_at\n    promoted\n    pageCategory {\n      id\n    }\n    description\n    date_added\n    created_at\n    blogPosts {\n      id\n    }\n    Seo {\n      canonicalURL\n      id\n      keywords\n      metaDescription\n      metaRobots\n      metaTitle\n      metaViewport\n    }\n  }\n}\n    "])));
var defaultWrapper = function (action, _operationName, _operationType) { return action(); };
function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        Pages: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.PagesDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'Pages', 'query');
        },
        Page: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.PageDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'Page', 'query');
        }
    };
}
exports.getSdk = getSdk;
var templateObject_1, templateObject_2;
