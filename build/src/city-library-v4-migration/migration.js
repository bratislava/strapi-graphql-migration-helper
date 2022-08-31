"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var gql_1 = require("../utils/gql");
var lodash_1 = require("lodash");
// - fixes issues after library v3 -> v4 migration
// - moves events out of pages model into their own
var events = function () { return __awaiter(void 0, void 0, void 0, function () {
    var firstPages, events, i, newPages, mappedEvents, problematicSlugs, problematicEng, _i, mappedEvents_1, e, slug, v4SvkEvent, result, enPages, enEvents, enMappedEvents, _a, enMappedEvents_1, e, v4SvkEvent, foundEvent, result;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, gql_1.sourceClient.Pages({ start: 0, locale: 'sk' })];
            case 1:
                firstPages = _d.sent();
                events = firstPages.pages.filter(
                // p => p.sections?.[0]?.__typename === 'ComponentSectionsEventDetails'
                function (p) { return p.layout === 'event'; });
                i = 1;
                _d.label = 2;
            case 2:
                if (!(i < 25)) return [3 /*break*/, 5];
                console.log('Collecting pages - ', i * 100);
                return [4 /*yield*/, gql_1.sourceClient.Pages({ start: i * 100, locale: 'sk' })];
            case 3:
                newPages = _d.sent();
                events = events.concat(newPages.pages.filter(
                // p => p.sections?.[0]?.__typename === 'ComponentSectionsEventDetails'
                function (p) { return p.layout === 'event'; }));
                _d.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                console.log('Filtered num of event pages: ', events.length);
                mappedEvents = events.map(function (e) {
                    var _a, _b, _c, _d, _e, _f, _g;
                    // validating assumptions from MKD-531:
                    // All of pages with the event layout should contain eventDetails section.
                    // Some of pages with event layout can contain 1 form section after eventDetails section.
                    // If the page contains form section, it should be just 1 form section.
                    // The type of form in form section should always be "detail_podujatia".
                    if (((_b = (_a = e.sections) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__typename) === 'ComponentSectionsEventDetails') {
                        e.sections.forEach(function (section) {
                            // validating
                            if (section.__typename === 'ComponentSectionsForm') {
                                console.log('Found form of a type: ', section.type);
                            }
                            if (section.__typename !== 'ComponentSectionsForm' &&
                                section.__typename !== 'ComponentSectionsEventDetails') {
                                console.log('Warning! Found event page with section: ', section.__typename);
                            }
                        });
                        if (((_c = e.sections) === null || _c === void 0 ? void 0 : _c.length) > 2) {
                            console.log('Warning! Found event page with more than 2 sections!');
                            console.log(e.sections);
                            console.log(e.slug);
                        }
                        return (0, lodash_1.pickBy)({
                            id: e.id,
                            Seo: (0, lodash_1.omit)(e.Seo, ['id', '__typename']),
                            coverImage: (_d = e.sections[0].eventCoverImage) === null || _d === void 0 ? void 0 : _d.id,
                            // TODO validate there are no events with multiple sections
                            dateFrom: e.sections[0].dateFrom,
                            dateTo: e.sections[0].dateTo,
                            date_added: e.date_added || e.published_at.toString().slice(0, 10),
                            description: e.sections[0].eventDescription,
                            eventCategory: (_e = e.sections[0].eventCategory) === null || _e === void 0 ? void 0 : _e.id,
                            eventLocality: (_f = e.sections[0].eventLocality) === null || _f === void 0 ? void 0 : _f.id,
                            eventTags: e.sections[0].eventTags.map(function (t) { return t.id; }),
                            guests: e.sections[0].guests.map(function (g) { return (0, lodash_1.omit)(g, 'id'); }),
                            listingImage: (_g = e.listingImage) === null || _g === void 0 ? void 0 : _g.id,
                            price: e.sections[0].price,
                            promoted: e.promoted,
                            publishedAt: e.published_at,
                            showForm: !!e.sections.find(function (s) { return s.__typename === 'ComponentSectionsForm'; }),
                            slug: e.slug,
                            title: e.sections[0].eventTitle
                        });
                        // else there is a layout === 'event' page without ComponentSectionsEventDetails section
                    }
                    else
                        throw new Error('Unexpected!');
                });
                console.log('Successfully mapped events: ', mappedEvents.length);
                problematicSlugs = [
                // enter any causing errors which should be skipped over
                ];
                problematicEng = [
                // enter any causing errors which should be skipped over
                ];
                _i = 0, mappedEvents_1 = mappedEvents;
                _d.label = 6;
            case 6:
                if (!(_i < mappedEvents_1.length)) return [3 /*break*/, 10];
                e = mappedEvents_1[_i];
                slug = e.slug;
                return [4 /*yield*/, gql_1.targetClient.EventsBySlug({
                        slug: slug
                    })];
            case 7:
                v4SvkEvent = _d.sent();
                if (problematicSlugs.indexOf(slug) !== -1) {
                    console.log('Skipping problematic! ', slug);
                    return [3 /*break*/, 9];
                }
                console.log('Fixing problematic: ', slug);
                if ((_b = v4SvkEvent.events) === null || _b === void 0 ? void 0 : _b.data.length) {
                    console.log('Duplicate slug: ', slug);
                    slug = "".concat(slug, "-").concat(e.id);
                    console.log('Appending v3 id, saving as: ', slug);
                    return [3 /*break*/, 9];
                }
                return [4 /*yield*/, gql_1.targetClient.CreateSvkLocaleEvent({
                        data: (0, lodash_1.omit)(e, 'id')
                    })];
            case 8:
                result = _d.sent();
                _d.label = 9;
            case 9:
                _i++;
                return [3 /*break*/, 6];
            case 10:
                // ENGLISH
                console.log('');
                console.log('###########');
                console.log('# ENGLISH #');
                console.log('###########');
                console.log('');
                return [4 /*yield*/, gql_1.sourceClient.Pages({ start: 0, locale: 'en' })];
            case 11:
                enPages = _d.sent();
                enEvents = enPages.pages.filter(function (p) { return p.layout === 'event'; });
                enMappedEvents = enEvents.map(function (e) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                    // same validation as above
                    if (((_b = (_a = e.sections) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__typename) === 'ComponentSectionsEventDetails') {
                        e.sections.forEach(function (section) {
                            // validating
                            if (section.__typename === 'ComponentSectionsForm') {
                                console.log('Found form of a type: ', section.type);
                            }
                            if (section.__typename !== 'ComponentSectionsForm' &&
                                section.__typename !== 'ComponentSectionsEventDetails') {
                                console.log('Warning! Found event page with section: ', section.__typename);
                            }
                        });
                        if (((_c = e.sections) === null || _c === void 0 ? void 0 : _c.length) > 2) {
                            console.log('Warning! Found event page with more than 2 sections!');
                            console.log(e.sections);
                        }
                        return (0, lodash_1.pickBy)({
                            Seo: (0, lodash_1.omit)(e.Seo, ['id', '__typename']),
                            coverImage: (_d = e.sections[0].eventCoverImage) === null || _d === void 0 ? void 0 : _d.id,
                            dateFrom: e.sections[0].dateFrom,
                            dateTo: e.sections[0].dateTo,
                            date_added: e.date_added || e.published_at.toString().slice(0, 10),
                            description: e.sections[0].eventDescription,
                            eventCategory: (_e = e.sections[0].eventCategory) === null || _e === void 0 ? void 0 : _e.id,
                            eventLocality: (_f = e.sections[0].eventLocality) === null || _f === void 0 ? void 0 : _f.id,
                            eventTags: e.sections[0].eventTags.map(function (t) { return t.id; }),
                            guests: e.sections[0].guests.map(function (g) { return (0, lodash_1.omit)(g, 'id'); }),
                            listingImage: (_g = e.listingImage) === null || _g === void 0 ? void 0 : _g.id,
                            price: e.sections[0].price,
                            promoted: e.promoted,
                            publishedAt: e.published_at,
                            showForm: !!e.sections.find(function (s) { return s.__typename === 'ComponentSectionsForm'; }),
                            slug: e.slug,
                            title: e.sections[0].eventTitle,
                            // this one is our custom used for matching and will be filtered out
                            svkLocalizationSlug: (_j = (_h = e.localizations) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.slug
                        });
                        // else there is a layout === 'event' page without ComponentSectionsEventDetails section
                    }
                    else
                        throw new Error('Unexpected!');
                });
                _a = 0, enMappedEvents_1 = enMappedEvents;
                _d.label = 12;
            case 12:
                if (!(_a < enMappedEvents_1.length)) return [3 /*break*/, 17];
                e = enMappedEvents_1[_a];
                if (problematicEng.indexOf(e.slug) !== -1) {
                    console.log('Skipping problematic! ', e.slug);
                    return [3 /*break*/, 16];
                }
                if (!e.svkLocalizationSlug) {
                    console.log('No svk slug for event: ', e.slug);
                }
                return [4 /*yield*/, gql_1.targetClient.EventsBySlug({
                        slug: e.svkLocalizationSlug
                    })];
            case 13:
                v4SvkEvent = _d.sent();
                if (!!((_c = v4SvkEvent.events) === null || _c === void 0 ? void 0 : _c.data.length)) return [3 /*break*/, 14];
                console.log('Warning! No svk event to assing this event to: ', e.slug);
                return [3 /*break*/, 16];
            case 14:
                foundEvent = v4SvkEvent.events.data[0];
                return [4 /*yield*/, gql_1.targetClient.CreateEnLocalizationEvent({
                        data: (0, lodash_1.omit)(e, 'svkLocalizationSlug'),
                        id: foundEvent.id
                    })];
            case 15:
                result = _d.sent();
                console.log('Written english event: ', e.title);
                _d.label = 16;
            case 16:
                _a++;
                return [3 /*break*/, 12];
            case 17: return [2 /*return*/];
        }
    });
}); };
var tables = function (locale) { return __awaiter(void 0, void 0, void 0, function () {
    var firstPages, tablePages, i, newPages, _loop_1, _i, tablePages_1, p;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, gql_1.sourceClient.Pages({ start: 0, locale: locale })];
            case 1:
                firstPages = _b.sent();
                tablePages = firstPages.pages.filter(function (p) { var _a; return (_a = p.sections) === null || _a === void 0 ? void 0 : _a.find(function (s) { return s.__typename === 'ComponentSectionsTable'; }); });
                i = 2;
                _b.label = 2;
            case 2:
                if (!(i < 25)) return [3 /*break*/, 5];
                console.log('Collecting pages - ', i * 100);
                return [4 /*yield*/, gql_1.sourceClient.Pages({ start: i * 100, locale: locale })];
            case 3:
                newPages = _b.sent();
                tablePages = tablePages.concat(newPages.pages.filter(function (p) { var _a; return (_a = p.sections) === null || _a === void 0 ? void 0 : _a.find(function (s) { return s.__typename === 'ComponentSectionsTable'; }); }));
                _b.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                console.log('Found pages with table sections: ', tablePages.length);
                _loop_1 = function (p) {
                    var v4SvkPage, v4Page, sections;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, gql_1.targetClient.PagesBySlug({
                                    slug: p.slug,
                                    locale: locale
                                })];
                            case 1:
                                v4SvkPage = _c.sent();
                                v4Page = (_a = v4SvkPage === null || v4SvkPage === void 0 ? void 0 : v4SvkPage.pages) === null || _a === void 0 ? void 0 : _a.data[0];
                                if (!!(v4Page === null || v4Page === void 0 ? void 0 : v4Page.id)) return [3 /*break*/, 2];
                                console.log('Warning! No page found for: ', p.slug);
                                return [3 /*break*/, 4];
                            case 2:
                                sections = v4Page.attributes.sections.map(function (s) {
                                    // appease the typescript gods
                                    // console.log(s.__typename);
                                    if (s.__typename === 'ComponentSectionsTable') {
                                        var v3Section = p.sections.find(function (ps) { return ps.__typename === 'ComponentSectionsTable' && ps.id === s.id; });
                                        if (!v3Section) {
                                            console.log('Warning! Did not find section for slug: ', p.slug);
                                            return s;
                                        }
                                        // appease ts gods
                                        if (v3Section.__typename === 'ComponentSectionsTable') {
                                            return {
                                                __typename: v3Section.__typename,
                                                primaryTitle: v3Section.primaryTitle,
                                                secondaryTitle: v3Section.secondaryTitle,
                                                rows: v3Section.rows.map(function (r) { return (0, lodash_1.omit)(r, ['id']); })
                                            };
                                        }
                                        else
                                            throw new Error('Unexpected!');
                                    }
                                    else {
                                        return s;
                                    }
                                });
                                return [4 /*yield*/, gql_1.targetClient.UpdatePageSections({ id: v4Page.id, sections: sections })];
                            case 3:
                                _c.sent();
                                console.log("Succesfully updated page id: ".concat(v4Page.id, " slug: ").concat(p.slug));
                                _c.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                };
                _i = 0, tablePages_1 = tablePages;
                _b.label = 6;
            case 6:
                if (!(_i < tablePages_1.length)) return [3 /*break*/, 9];
                p = tablePages_1[_i];
                return [5 /*yield**/, _loop_1(p)];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                _i++;
                return [3 /*break*/, 6];
            case 9: return [2 /*return*/];
        }
    });
}); };
var tables = function (locale) { return __awaiter(void 0, void 0, void 0, function () {
    var firstPages, tablePages, i, newPages, _loop_2, _i, tablePages_2, p;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, gql_1.sourceClient.Pages({ start: 0, locale: locale })];
            case 1:
                firstPages = _b.sent();
                tablePages = firstPages.pages.filter(function (p) { var _a; return (_a = p.sections) === null || _a === void 0 ? void 0 : _a.find(function (s) { return s.__typename === 'ComponentSectionsTable'; }); });
                i = 1;
                _b.label = 2;
            case 2:
                if (!(i < 25)) return [3 /*break*/, 5];
                console.log('Collecting pages - ', i * 100);
                return [4 /*yield*/, gql_1.sourceClient.Pages({ start: i * 100, locale: locale })];
            case 3:
                newPages = _b.sent();
                tablePages = tablePages.concat(newPages.pages.filter(function (p) { var _a; return (_a = p.sections) === null || _a === void 0 ? void 0 : _a.find(function (s) { return s.__typename === 'ComponentSectionsTable'; }); }));
                _b.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                console.log('Found pages with table sections: ', tablePages.length);
                _loop_2 = function (p) {
                    var v4SvkPage, v4Page, sections;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, gql_1.targetClient.PagesBySlug({
                                    slug: p.slug,
                                    locale: locale
                                })];
                            case 1:
                                v4SvkPage = _c.sent();
                                v4Page = (_a = v4SvkPage === null || v4SvkPage === void 0 ? void 0 : v4SvkPage.pages) === null || _a === void 0 ? void 0 : _a.data[0];
                                if (!!(v4Page === null || v4Page === void 0 ? void 0 : v4Page.id)) return [3 /*break*/, 2];
                                console.log('Warning! No page found for: ', p.slug);
                                return [3 /*break*/, 4];
                            case 2:
                                sections = v4Page.attributes.sections.map(function (s) {
                                    // appease the typescript gods
                                    // console.log(s.__typename);
                                    if (s.__typename === 'ComponentSectionsTable') {
                                        var v3Section = p.sections.find(function (ps) { return ps.__typename === 'ComponentSectionsTable' && ps.id === s.id; });
                                        if (!v3Section) {
                                            console.log('Warning! Did not find section for slug: ', p.slug);
                                            return s;
                                        }
                                        // appease ts gods
                                        if (v3Section.__typename === 'ComponentSectionsTable') {
                                            return {
                                                __typename: v3Section.__typename,
                                                primaryTitle: v3Section.primaryTitle,
                                                secondaryTitle: v3Section.secondaryTitle,
                                                rows: v3Section.rows.map(function (r) { return (0, lodash_1.omit)(r, ['id']); })
                                            };
                                        }
                                        else
                                            throw new Error('Unexpected!');
                                    }
                                    else {
                                        return s;
                                    }
                                });
                                return [4 /*yield*/, gql_1.targetClient.UpdatePageSections({ id: v4Page.id, sections: sections })];
                            case 3:
                                _c.sent();
                                console.log("Succesfully updated page id: ".concat(v4Page.id, " slug: ").concat(p.slug));
                                _c.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                };
                _i = 0, tablePages_2 = tablePages;
                _b.label = 6;
            case 6:
                if (!(_i < tablePages_2.length)) return [3 /*break*/, 9];
                p = tablePages_2[_i];
                return [5 /*yield**/, _loop_2(p)];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                _i++;
                return [3 /*break*/, 6];
            case 9: return [2 /*return*/];
        }
    });
}); };
// backup before omitDeepLodash
// const sections = p.sections
//   ?.filter(s => s.__typename === 'ComponentSectionsTable')
//   .map(s => {
//     // appease the typescript gods
//     if (s.__typename === 'ComponentSectionsTable') {
//       return {
//         __typename: s.__typename,
//         primaryTitle: s.primaryTitle,
//         secondaryTitle: s.secondaryTitle,
//         rows: s.rows.map(r => omit(r, ['id'])),
//       };
//     } else {
//       throw new Error('Unexpected!');
//     }
//   });
// events();
// tables('sk');
// tables('en');
//
