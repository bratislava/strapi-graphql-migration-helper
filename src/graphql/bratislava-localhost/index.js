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
exports.getSdk = exports.AllPagesDocument = exports.AllVzNsDocument = exports.AllFilesDocument = exports.DeleteRegulationTest1ByIdDocument = exports.NewRegulationTest1ByNameDocument = exports.AllRegulationtest1sDocument = exports.VznEntityFragmentDoc = exports.VznDetailFragmentDoc = exports.UploadFileEntityFragmentDoc = exports.PublicationState = exports.Enum_Vzn_Category = exports.Enum_Page_Pagecolor = exports.Enum_Pagesubcategory_Icon = exports.Enum_Pagecategory_Icon = exports.Enum_Pagecategory_Color = exports.Enum_Componentsectionswaves_Position = exports.Enum_Componentsectionstextwithimage_Imageposition = exports.Enum_Componentsectionsprosandconssection_Textalign = exports.Enum_Componentsectionsnumericallist_Variant = exports.Enum_Componentsectionsnarrowtext_Width = exports.Enum_Componentsectionsnarrowtext_Align = exports.Enum_Componentsectionsiframe_Iframewidth = exports.Enum_Componentsectionsfilelist_Variant = exports.Enum_Componentsectionsdivider_Style = exports.Enum_Componentsectionscontactssection_Type = exports.Enum_Componentsectionscomparisonsection_Textalign = exports.Enum_Componentsectionscolumnedtext_Contentalignment = exports.Enum_Componentsectionsbanner_Variant = exports.Enum_Componentsectionsbanner_Contentposition = exports.Enum_Componentmenumenusection_Icon = exports.Enum_Componentmenumenuitem_Icon = exports.Enum_Componentgeneralheaderlink_Icon = exports.Enum_Componentblockstopservicesitem_Icon = exports.Enum_Componentblocksspaceinfo_Imageposition = exports.Enum_Componentaccordionitemsflattext_Width = exports.Enum_Componentaccordionitemsflattext_Align = void 0;
var graphql_tag_1 = require("graphql-tag");
var Enum_Componentaccordionitemsflattext_Align;
(function (Enum_Componentaccordionitemsflattext_Align) {
    Enum_Componentaccordionitemsflattext_Align["Center"] = "center";
    Enum_Componentaccordionitemsflattext_Align["Left"] = "left";
    Enum_Componentaccordionitemsflattext_Align["Right"] = "right";
})(Enum_Componentaccordionitemsflattext_Align = exports.Enum_Componentaccordionitemsflattext_Align || (exports.Enum_Componentaccordionitemsflattext_Align = {}));
var Enum_Componentaccordionitemsflattext_Width;
(function (Enum_Componentaccordionitemsflattext_Width) {
    Enum_Componentaccordionitemsflattext_Width["Default"] = "default";
    Enum_Componentaccordionitemsflattext_Width["Full"] = "full";
    Enum_Componentaccordionitemsflattext_Width["Narrow"] = "narrow";
    Enum_Componentaccordionitemsflattext_Width["Wide"] = "wide";
})(Enum_Componentaccordionitemsflattext_Width = exports.Enum_Componentaccordionitemsflattext_Width || (exports.Enum_Componentaccordionitemsflattext_Width = {}));
var Enum_Componentblocksspaceinfo_Imageposition;
(function (Enum_Componentblocksspaceinfo_Imageposition) {
    Enum_Componentblocksspaceinfo_Imageposition["Left"] = "left";
    Enum_Componentblocksspaceinfo_Imageposition["Right"] = "right";
})(Enum_Componentblocksspaceinfo_Imageposition = exports.Enum_Componentblocksspaceinfo_Imageposition || (exports.Enum_Componentblocksspaceinfo_Imageposition = {}));
var Enum_Componentblockstopservicesitem_Icon;
(function (Enum_Componentblockstopservicesitem_Icon) {
    Enum_Componentblockstopservicesitem_Icon["BratislavskeKonto"] = "bratislavske_konto";
    Enum_Componentblockstopservicesitem_Icon["DaneAPoplatky"] = "dane_a_poplatky";
    Enum_Componentblockstopservicesitem_Icon["KampaneAProjekty"] = "kampane_a_projekty";
    Enum_Componentblockstopservicesitem_Icon["NahlaseniePodnetov"] = "nahlasenie_podnetov";
    Enum_Componentblockstopservicesitem_Icon["OrganizacnaStruktura"] = "organizacna_struktura";
    Enum_Componentblockstopservicesitem_Icon["PracovnePrilezitosti"] = "pracovne_prilezitosti";
    Enum_Componentblockstopservicesitem_Icon["PrenajomPriestorov"] = "prenajom_priestorov";
    Enum_Componentblockstopservicesitem_Icon["TuristomVHlavnomMeste"] = "turistom_v_hlavnom_meste";
    Enum_Componentblockstopservicesitem_Icon["UradneHodiny"] = "uradne_hodiny";
    Enum_Componentblockstopservicesitem_Icon["VerejnePriestory"] = "verejne_priestory";
})(Enum_Componentblockstopservicesitem_Icon = exports.Enum_Componentblockstopservicesitem_Icon || (exports.Enum_Componentblockstopservicesitem_Icon = {}));
var Enum_Componentgeneralheaderlink_Icon;
(function (Enum_Componentgeneralheaderlink_Icon) {
    Enum_Componentgeneralheaderlink_Icon["Esluzby"] = "esluzby";
    Enum_Componentgeneralheaderlink_Icon["Kontakt"] = "kontakt";
    Enum_Componentgeneralheaderlink_Icon["SomTurista"] = "som_turista";
    Enum_Componentgeneralheaderlink_Icon["Ukraina"] = "ukraina";
})(Enum_Componentgeneralheaderlink_Icon = exports.Enum_Componentgeneralheaderlink_Icon || (exports.Enum_Componentgeneralheaderlink_Icon = {}));
var Enum_Componentmenumenuitem_Icon;
(function (Enum_Componentmenumenuitem_Icon) {
    Enum_Componentmenumenuitem_Icon["DopravaMapy_02"] = "doprava_mapy_02";
    Enum_Componentmenumenuitem_Icon["Kultura_06"] = "kultura_06";
    Enum_Componentmenumenuitem_Icon["Mesto_01"] = "mesto_01";
    Enum_Componentmenumenuitem_Icon["SocialnaPomoc_04"] = "socialna_pomoc_04";
    Enum_Componentmenumenuitem_Icon["Vzdelavanie_05"] = "vzdelavanie_05";
    Enum_Componentmenumenuitem_Icon["ZpVystavba_03"] = "zp_vystavba_03";
})(Enum_Componentmenumenuitem_Icon = exports.Enum_Componentmenumenuitem_Icon || (exports.Enum_Componentmenumenuitem_Icon = {}));
var Enum_Componentmenumenusection_Icon;
(function (Enum_Componentmenumenusection_Icon) {
    Enum_Componentmenumenusection_Icon["Aktivity_04"] = "aktivity_04";
    Enum_Componentmenumenusection_Icon["Byvanie_04"] = "byvanie_04";
    Enum_Componentmenumenusection_Icon["Covid_06"] = "covid_06";
    Enum_Componentmenumenusection_Icon["Cyklo_02"] = "cyklo_02";
    Enum_Componentmenumenusection_Icon["Dane_01"] = "dane_01";
    Enum_Componentmenumenusection_Icon["Dedicstvo_06"] = "dedicstvo_06";
    Enum_Componentmenumenusection_Icon["DetiAMladez_05"] = "deti_a_mladez_05";
    Enum_Componentmenumenusection_Icon["Doprava_02"] = "doprava_02";
    Enum_Componentmenumenusection_Icon["Dotacie_05"] = "dotacie_05";
    Enum_Componentmenumenusection_Icon["Kalendar_06"] = "kalendar_06";
    Enum_Componentmenumenusection_Icon["Komunity_06"] = "komunity_06";
    Enum_Componentmenumenusection_Icon["Koncepcia_06"] = "koncepcia_06";
    Enum_Componentmenumenusection_Icon["Mapy_02"] = "mapy_02";
    Enum_Componentmenumenusection_Icon["Mhd_02"] = "mhd_02";
    Enum_Componentmenumenusection_Icon["Ocenovanie_05"] = "ocenovanie_05";
    Enum_Componentmenumenusection_Icon["Organizacie_06"] = "organizacie_06";
    Enum_Componentmenumenusection_Icon["Parkovanie_02"] = "parkovanie_02";
    Enum_Componentmenumenusection_Icon["Partnerstva_01"] = "partnerstva_01";
    Enum_Componentmenumenusection_Icon["Pomoc_04"] = "pomoc_04";
    Enum_Componentmenumenusection_Icon["Projekty_01"] = "projekty_01";
    Enum_Componentmenumenusection_Icon["RozvojMesta_03"] = "rozvoj_mesta_03";
    Enum_Componentmenumenusection_Icon["Skolstvo_05"] = "skolstvo_05";
    Enum_Componentmenumenusection_Icon["Sluzby_04"] = "sluzby_04";
    Enum_Componentmenumenusection_Icon["Sluzby_06"] = "sluzby_06";
    Enum_Componentmenumenusection_Icon["Sport_05"] = "sport_05";
    Enum_Componentmenumenusection_Icon["SpravaAUdrzba_02"] = "sprava_a_udrzba_02";
    Enum_Componentmenumenusection_Icon["SpravaMesta_01"] = "sprava_mesta_01";
    Enum_Componentmenumenusection_Icon["TransparentneMesto_01"] = "transparentne_mesto_01";
    Enum_Componentmenumenusection_Icon["UzemnyPlan_03"] = "uzemny_plan_03";
    Enum_Componentmenumenusection_Icon["VerejneOsvetlenie_03"] = "verejne_osvetlenie_03";
    Enum_Componentmenumenusection_Icon["VystavbaANehnutelnosti_03"] = "vystavba_a_nehnutelnosti_03";
    Enum_Componentmenumenusection_Icon["Zariadenia_04"] = "zariadenia_04";
    Enum_Componentmenumenusection_Icon["ZdielanaMobilita_02"] = "zdielana_mobilita_02";
    Enum_Componentmenumenusection_Icon["Zelen_03"] = "zelen_03";
    Enum_Componentmenumenusection_Icon["ZivotneProstredie_03"] = "zivotne_prostredie_03";
})(Enum_Componentmenumenusection_Icon = exports.Enum_Componentmenumenusection_Icon || (exports.Enum_Componentmenumenusection_Icon = {}));
var Enum_Componentsectionsbanner_Contentposition;
(function (Enum_Componentsectionsbanner_Contentposition) {
    Enum_Componentsectionsbanner_Contentposition["Left"] = "left";
    Enum_Componentsectionsbanner_Contentposition["Right"] = "right";
})(Enum_Componentsectionsbanner_Contentposition = exports.Enum_Componentsectionsbanner_Contentposition || (exports.Enum_Componentsectionsbanner_Contentposition = {}));
var Enum_Componentsectionsbanner_Variant;
(function (Enum_Componentsectionsbanner_Variant) {
    Enum_Componentsectionsbanner_Variant["Color"] = "color";
    Enum_Componentsectionsbanner_Variant["Dark"] = "dark";
    Enum_Componentsectionsbanner_Variant["WhiteCondensed"] = "white_condensed";
})(Enum_Componentsectionsbanner_Variant = exports.Enum_Componentsectionsbanner_Variant || (exports.Enum_Componentsectionsbanner_Variant = {}));
var Enum_Componentsectionscolumnedtext_Contentalignment;
(function (Enum_Componentsectionscolumnedtext_Contentalignment) {
    Enum_Componentsectionscolumnedtext_Contentalignment["Center"] = "center";
    Enum_Componentsectionscolumnedtext_Contentalignment["Left"] = "left";
    Enum_Componentsectionscolumnedtext_Contentalignment["Right"] = "right";
})(Enum_Componentsectionscolumnedtext_Contentalignment = exports.Enum_Componentsectionscolumnedtext_Contentalignment || (exports.Enum_Componentsectionscolumnedtext_Contentalignment = {}));
var Enum_Componentsectionscomparisonsection_Textalign;
(function (Enum_Componentsectionscomparisonsection_Textalign) {
    Enum_Componentsectionscomparisonsection_Textalign["Center"] = "center";
    Enum_Componentsectionscomparisonsection_Textalign["Left"] = "left";
})(Enum_Componentsectionscomparisonsection_Textalign = exports.Enum_Componentsectionscomparisonsection_Textalign || (exports.Enum_Componentsectionscomparisonsection_Textalign = {}));
var Enum_Componentsectionscontactssection_Type;
(function (Enum_Componentsectionscontactssection_Type) {
    Enum_Componentsectionscontactssection_Type["Horizontal"] = "horizontal";
    Enum_Componentsectionscontactssection_Type["Vertical"] = "vertical";
})(Enum_Componentsectionscontactssection_Type = exports.Enum_Componentsectionscontactssection_Type || (exports.Enum_Componentsectionscontactssection_Type = {}));
var Enum_Componentsectionsdivider_Style;
(function (Enum_Componentsectionsdivider_Style) {
    Enum_Componentsectionsdivider_Style["Bicykel_02FullWidth"] = "bicykel_02_full_width";
    Enum_Componentsectionsdivider_Style["Budovy_04FullWidth"] = "budovy_04_full_width";
    Enum_Componentsectionsdivider_Style["Byvanie_04FullWidth"] = "byvanie_04_full_width";
    Enum_Componentsectionsdivider_Style["Divadlo"] = "divadlo";
    Enum_Componentsectionsdivider_Style["Doprava_02FullWidth"] = "doprava_02_full_width";
    Enum_Componentsectionsdivider_Style["Hrad_01FullWidth"] = "hrad_01_full_width";
    Enum_Componentsectionsdivider_Style["Lod_02FullWidth"] = "lod_02_full_width";
    Enum_Componentsectionsdivider_Style["Mesto_01FullWidth"] = "mesto_01_full_width";
    Enum_Componentsectionsdivider_Style["Park_04FullWidth"] = "park_04_full_width";
    Enum_Componentsectionsdivider_Style["Parkovanie_02FullWidth"] = "parkovanie_02_full_width";
    Enum_Componentsectionsdivider_Style["Skola"] = "skola";
    Enum_Componentsectionsdivider_Style["Stromy_03FullWidth"] = "stromy_03_full_width";
    Enum_Componentsectionsdivider_Style["Vystavba_03FullWidth"] = "vystavba_03_full_width";
    Enum_Componentsectionsdivider_Style["Vzdelavanie"] = "vzdelavanie";
})(Enum_Componentsectionsdivider_Style = exports.Enum_Componentsectionsdivider_Style || (exports.Enum_Componentsectionsdivider_Style = {}));
var Enum_Componentsectionsfilelist_Variant;
(function (Enum_Componentsectionsfilelist_Variant) {
    Enum_Componentsectionsfilelist_Variant["Grid"] = "grid";
    Enum_Componentsectionsfilelist_Variant["Rows"] = "rows";
})(Enum_Componentsectionsfilelist_Variant = exports.Enum_Componentsectionsfilelist_Variant || (exports.Enum_Componentsectionsfilelist_Variant = {}));
var Enum_Componentsectionsiframe_Iframewidth;
(function (Enum_Componentsectionsiframe_Iframewidth) {
    Enum_Componentsectionsiframe_Iframewidth["Container"] = "container";
    Enum_Componentsectionsiframe_Iframewidth["Full"] = "full";
})(Enum_Componentsectionsiframe_Iframewidth = exports.Enum_Componentsectionsiframe_Iframewidth || (exports.Enum_Componentsectionsiframe_Iframewidth = {}));
var Enum_Componentsectionsnarrowtext_Align;
(function (Enum_Componentsectionsnarrowtext_Align) {
    Enum_Componentsectionsnarrowtext_Align["Center"] = "center";
    Enum_Componentsectionsnarrowtext_Align["Left"] = "left";
    Enum_Componentsectionsnarrowtext_Align["Right"] = "right";
})(Enum_Componentsectionsnarrowtext_Align = exports.Enum_Componentsectionsnarrowtext_Align || (exports.Enum_Componentsectionsnarrowtext_Align = {}));
var Enum_Componentsectionsnarrowtext_Width;
(function (Enum_Componentsectionsnarrowtext_Width) {
    Enum_Componentsectionsnarrowtext_Width["Default"] = "default";
    Enum_Componentsectionsnarrowtext_Width["Full"] = "full";
    Enum_Componentsectionsnarrowtext_Width["Narrow"] = "narrow";
    Enum_Componentsectionsnarrowtext_Width["Wide"] = "wide";
})(Enum_Componentsectionsnarrowtext_Width = exports.Enum_Componentsectionsnarrowtext_Width || (exports.Enum_Componentsectionsnarrowtext_Width = {}));
var Enum_Componentsectionsnumericallist_Variant;
(function (Enum_Componentsectionsnumericallist_Variant) {
    Enum_Componentsectionsnumericallist_Variant["Basic"] = "basic";
    Enum_Componentsectionsnumericallist_Variant["Combined"] = "combined";
    Enum_Componentsectionsnumericallist_Variant["Roadmap"] = "roadmap";
})(Enum_Componentsectionsnumericallist_Variant = exports.Enum_Componentsectionsnumericallist_Variant || (exports.Enum_Componentsectionsnumericallist_Variant = {}));
var Enum_Componentsectionsprosandconssection_Textalign;
(function (Enum_Componentsectionsprosandconssection_Textalign) {
    Enum_Componentsectionsprosandconssection_Textalign["Center"] = "center";
    Enum_Componentsectionsprosandconssection_Textalign["Left"] = "left";
})(Enum_Componentsectionsprosandconssection_Textalign = exports.Enum_Componentsectionsprosandconssection_Textalign || (exports.Enum_Componentsectionsprosandconssection_Textalign = {}));
var Enum_Componentsectionstextwithimage_Imageposition;
(function (Enum_Componentsectionstextwithimage_Imageposition) {
    Enum_Componentsectionstextwithimage_Imageposition["Left"] = "left";
    Enum_Componentsectionstextwithimage_Imageposition["Right"] = "right";
})(Enum_Componentsectionstextwithimage_Imageposition = exports.Enum_Componentsectionstextwithimage_Imageposition || (exports.Enum_Componentsectionstextwithimage_Imageposition = {}));
var Enum_Componentsectionswaves_Position;
(function (Enum_Componentsectionswaves_Position) {
    Enum_Componentsectionswaves_Position["Bottom"] = "bottom";
    Enum_Componentsectionswaves_Position["Top"] = "top";
})(Enum_Componentsectionswaves_Position = exports.Enum_Componentsectionswaves_Position || (exports.Enum_Componentsectionswaves_Position = {}));
var Enum_Pagecategory_Color;
(function (Enum_Pagecategory_Color) {
    Enum_Pagecategory_Color["Blue"] = "blue";
    Enum_Pagecategory_Color["Brown"] = "brown";
    Enum_Pagecategory_Color["Green"] = "green";
    Enum_Pagecategory_Color["Purple"] = "purple";
    Enum_Pagecategory_Color["Red"] = "red";
    Enum_Pagecategory_Color["Yellow"] = "yellow";
})(Enum_Pagecategory_Color = exports.Enum_Pagecategory_Color || (exports.Enum_Pagecategory_Color = {}));
var Enum_Pagecategory_Icon;
(function (Enum_Pagecategory_Icon) {
    Enum_Pagecategory_Icon["DopravaMapy_02"] = "doprava_mapy_02";
    Enum_Pagecategory_Icon["Kultura_06"] = "kultura_06";
    Enum_Pagecategory_Icon["Mesto_01"] = "mesto_01";
    Enum_Pagecategory_Icon["SocialnaPomoc_04"] = "socialna_pomoc_04";
    Enum_Pagecategory_Icon["Vzdelavanie_05"] = "vzdelavanie_05";
    Enum_Pagecategory_Icon["ZpVystavba_03"] = "zp_vystavba_03";
})(Enum_Pagecategory_Icon = exports.Enum_Pagecategory_Icon || (exports.Enum_Pagecategory_Icon = {}));
var Enum_Pagesubcategory_Icon;
(function (Enum_Pagesubcategory_Icon) {
    Enum_Pagesubcategory_Icon["Aktivity_04"] = "aktivity_04";
    Enum_Pagesubcategory_Icon["Byvanie_04"] = "byvanie_04";
    Enum_Pagesubcategory_Icon["Covid_06"] = "covid_06";
    Enum_Pagesubcategory_Icon["Cyklo_02"] = "cyklo_02";
    Enum_Pagesubcategory_Icon["Dane_01"] = "dane_01";
    Enum_Pagesubcategory_Icon["Dedicstvo_06"] = "dedicstvo_06";
    Enum_Pagesubcategory_Icon["DetiAMladez_05"] = "deti_a_mladez_05";
    Enum_Pagesubcategory_Icon["Doprava_02"] = "doprava_02";
    Enum_Pagesubcategory_Icon["Dotacie_05"] = "dotacie_05";
    Enum_Pagesubcategory_Icon["Kalendar_06"] = "kalendar_06";
    Enum_Pagesubcategory_Icon["Komunity_06"] = "komunity_06";
    Enum_Pagesubcategory_Icon["Koncepcia_06"] = "koncepcia_06";
    Enum_Pagesubcategory_Icon["Mapy_02"] = "mapy_02";
    Enum_Pagesubcategory_Icon["Mhd_02"] = "mhd_02";
    Enum_Pagesubcategory_Icon["Ocenovanie_05"] = "ocenovanie_05";
    Enum_Pagesubcategory_Icon["Organizacie_06"] = "organizacie_06";
    Enum_Pagesubcategory_Icon["Parkovanie_02"] = "parkovanie_02";
    Enum_Pagesubcategory_Icon["Partnerstva_01"] = "partnerstva_01";
    Enum_Pagesubcategory_Icon["Pomoc_04"] = "pomoc_04";
    Enum_Pagesubcategory_Icon["Projekty_01"] = "projekty_01";
    Enum_Pagesubcategory_Icon["RozvojMesta_03"] = "rozvoj_mesta_03";
    Enum_Pagesubcategory_Icon["Skolstvo_05"] = "skolstvo_05";
    Enum_Pagesubcategory_Icon["Sluzby_04"] = "sluzby_04";
    Enum_Pagesubcategory_Icon["Sluzby_06"] = "sluzby_06";
    Enum_Pagesubcategory_Icon["Sport_05"] = "sport_05";
    Enum_Pagesubcategory_Icon["SpravaAUdrzba_02"] = "sprava_a_udrzba_02";
    Enum_Pagesubcategory_Icon["SpravaMesta_01"] = "sprava_mesta_01";
    Enum_Pagesubcategory_Icon["TransparentneMesto_01"] = "transparentne_mesto_01";
    Enum_Pagesubcategory_Icon["UzemnyPlan_03"] = "uzemny_plan_03";
    Enum_Pagesubcategory_Icon["VerejneOsvetlenie_03"] = "verejne_osvetlenie_03";
    Enum_Pagesubcategory_Icon["VystavbaANehnutelnosti_03"] = "vystavba_a_nehnutelnosti_03";
    Enum_Pagesubcategory_Icon["Zariadenia_04"] = "zariadenia_04";
    Enum_Pagesubcategory_Icon["ZdielanaMobilita_02"] = "zdielana_mobilita_02";
    Enum_Pagesubcategory_Icon["Zelen_03"] = "zelen_03";
    Enum_Pagesubcategory_Icon["ZivotneProstredie_03"] = "zivotne_prostredie_03";
})(Enum_Pagesubcategory_Icon = exports.Enum_Pagesubcategory_Icon || (exports.Enum_Pagesubcategory_Icon = {}));
var Enum_Page_Pagecolor;
(function (Enum_Page_Pagecolor) {
    Enum_Page_Pagecolor["Blue"] = "blue";
    Enum_Page_Pagecolor["Brown"] = "brown";
    Enum_Page_Pagecolor["Green"] = "green";
    Enum_Page_Pagecolor["Purple"] = "purple";
    Enum_Page_Pagecolor["Red"] = "red";
    Enum_Page_Pagecolor["Yellow"] = "yellow";
})(Enum_Page_Pagecolor = exports.Enum_Page_Pagecolor || (exports.Enum_Page_Pagecolor = {}));
var Enum_Vzn_Category;
(function (Enum_Vzn_Category) {
    Enum_Vzn_Category["Archiv"] = "archiv";
    Enum_Vzn_Category["DaneAPoplatky"] = "daneAPoplatky";
    Enum_Vzn_Category["Hospodarenie"] = "hospodarenie";
    Enum_Vzn_Category["Ostatne"] = "ostatne";
    Enum_Vzn_Category["PomenovanieUlic"] = "pomenovanieUlic";
    Enum_Vzn_Category["PoriadokACistota"] = "poriadokACistota";
    Enum_Vzn_Category["SocialnaPomocASkolstvo"] = "socialnaPomocASkolstvo";
    Enum_Vzn_Category["UzemnePlanovanie"] = "uzemnePlanovanie";
})(Enum_Vzn_Category = exports.Enum_Vzn_Category || (exports.Enum_Vzn_Category = {}));
var PublicationState;
(function (PublicationState) {
    PublicationState["Live"] = "LIVE";
    PublicationState["Preview"] = "PREVIEW";
})(PublicationState = exports.PublicationState || (exports.PublicationState = {}));
exports.UploadFileEntityFragmentDoc = (0, graphql_tag_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment UploadFileEntity on UploadFileEntity {\n  id\n  attributes {\n    url\n    name\n    ext\n    size\n    createdAt\n    updatedAt\n  }\n}\n    "], ["\n    fragment UploadFileEntity on UploadFileEntity {\n  id\n  attributes {\n    url\n    name\n    ext\n    size\n    createdAt\n    updatedAt\n  }\n}\n    "])));
exports.VznDetailFragmentDoc = (0, graphql_tag_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    fragment VznDetail on Vzn {\n  title\n  validFrom\n  mainDocument {\n    data {\n      ...UploadFileEntity\n    }\n  }\n  cancellationDocument {\n    id\n    title\n    document {\n      data {\n        ...UploadFileEntity\n      }\n    }\n  }\n  amedmentDocument {\n    id\n    title\n    document {\n      data {\n        ...UploadFileEntity\n      }\n    }\n  }\n}\n    ", ""], ["\n    fragment VznDetail on Vzn {\n  title\n  validFrom\n  mainDocument {\n    data {\n      ...UploadFileEntity\n    }\n  }\n  cancellationDocument {\n    id\n    title\n    document {\n      data {\n        ...UploadFileEntity\n      }\n    }\n  }\n  amedmentDocument {\n    id\n    title\n    document {\n      data {\n        ...UploadFileEntity\n      }\n    }\n  }\n}\n    ", ""])), exports.UploadFileEntityFragmentDoc);
exports.VznEntityFragmentDoc = (0, graphql_tag_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    fragment VznEntity on VznEntity {\n  id\n  attributes {\n    title\n    validFrom\n    mainDocument {\n      data {\n        ...UploadFileEntity\n      }\n    }\n    cancellationDocument {\n      id\n      title\n      document {\n        data {\n          ...UploadFileEntity\n        }\n      }\n    }\n    amedmentDocument {\n      id\n      title\n      document {\n        data {\n          ...UploadFileEntity\n        }\n      }\n    }\n  }\n}\n    ", ""], ["\n    fragment VznEntity on VznEntity {\n  id\n  attributes {\n    title\n    validFrom\n    mainDocument {\n      data {\n        ...UploadFileEntity\n      }\n    }\n    cancellationDocument {\n      id\n      title\n      document {\n        data {\n          ...UploadFileEntity\n        }\n      }\n    }\n    amedmentDocument {\n      id\n      title\n      document {\n        data {\n          ...UploadFileEntity\n        }\n      }\n    }\n  }\n}\n    ", ""])), exports.UploadFileEntityFragmentDoc);
exports.AllRegulationtest1sDocument = (0, graphql_tag_1["default"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query allRegulationtest1s {\n  regulationtest1S(pagination: {limit: -1}) {\n    data {\n      id\n      attributes {\n        Title\n      }\n    }\n  }\n}\n    "], ["\n    query allRegulationtest1s {\n  regulationtest1S(pagination: {limit: -1}) {\n    data {\n      id\n      attributes {\n        Title\n      }\n    }\n  }\n}\n    "])));
exports.NewRegulationTest1ByNameDocument = (0, graphql_tag_1["default"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    mutation newRegulationTest1ByName($name: String) {\n  createRegulationtest1(data: {Title: $name}) {\n    data {\n      id\n      attributes {\n        Title\n      }\n    }\n  }\n}\n    "], ["\n    mutation newRegulationTest1ByName($name: String) {\n  createRegulationtest1(data: {Title: $name}) {\n    data {\n      id\n      attributes {\n        Title\n      }\n    }\n  }\n}\n    "])));
exports.DeleteRegulationTest1ByIdDocument = (0, graphql_tag_1["default"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    mutation deleteRegulationTest1ById($id: ID!) {\n  deleteRegulationtest1(id: $id) {\n    data {\n      id\n    }\n  }\n}\n    "], ["\n    mutation deleteRegulationTest1ById($id: ID!) {\n  deleteRegulationtest1(id: $id) {\n    data {\n      id\n    }\n  }\n}\n    "])));
exports.AllFilesDocument = (0, graphql_tag_1["default"])(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    query AllFiles {\n  uploadFiles(pagination: {limit: -1}, sort: \"id\") {\n    data {\n      id\n      attributes {\n        name\n        url\n      }\n    }\n  }\n}\n    "], ["\n    query AllFiles {\n  uploadFiles(pagination: {limit: -1}, sort: \"id\") {\n    data {\n      id\n      attributes {\n        name\n        url\n      }\n    }\n  }\n}\n    "])));
exports.AllVzNsDocument = (0, graphql_tag_1["default"])(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    query AllVZNs {\n  vzns(pagination: {limit: -1}) {\n    data {\n      id\n      attributes {\n        ...VznDetail\n      }\n    }\n  }\n}\n    ", ""], ["\n    query AllVZNs {\n  vzns(pagination: {limit: -1}) {\n    data {\n      id\n      attributes {\n        ...VznDetail\n      }\n    }\n  }\n}\n    ", ""])), exports.VznDetailFragmentDoc);
exports.AllPagesDocument = (0, graphql_tag_1["default"])(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    query AllPages($locale: I18NLocaleCode!) {\n  pages(locale: $locale, pagination: {start: 0, limit: -1}) {\n    data {\n      id\n      attributes {\n        title\n        sections {\n          __typename\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query AllPages($locale: I18NLocaleCode!) {\n  pages(locale: $locale, pagination: {start: 0, limit: -1}) {\n    data {\n      id\n      attributes {\n        title\n        sections {\n          __typename\n        }\n      }\n    }\n  }\n}\n    "])));
var defaultWrapper = function (action, _operationName, _operationType) { return action(); };
function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        allRegulationtest1s: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.AllRegulationtest1sDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'allRegulationtest1s', 'query');
        },
        newRegulationTest1ByName: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.NewRegulationTest1ByNameDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'newRegulationTest1ByName', 'mutation');
        },
        deleteRegulationTest1ById: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.DeleteRegulationTest1ByIdDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'deleteRegulationTest1ById', 'mutation');
        },
        AllFiles: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.AllFilesDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'AllFiles', 'query');
        },
        AllVZNs: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.AllVzNsDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'AllVZNs', 'query');
        },
        AllPages: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.AllPagesDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'AllPages', 'query');
        }
    };
}
exports.getSdk = getSdk;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
