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
var sample = {
    layout: 'event',
    id: '416',
    title: 'Letné folkovanie',
    slug: 'zazite/podujatia/Letne-folkovanie',
    sections: [
        {
            id: '211',
            price: 0,
            partners: [],
            dateFrom: '2014-07-23T18:00:00.000Z',
            dateTo: '2014-07-23T18:00:00.000Z',
            eventCategory: null,
            eventCoverImage: null,
            eventDescription: 'Účinkujú: Peter Janků, Soňa Horňáková, Mirka Miškechová Projekt Hudba U červeného raka S finančnou podporou MK SR',
            eventLocality: { id: '18' },
            eventTags: [],
            eventTitle: 'Letné folkovanie',
            guests: []
        },
    ],
    relatedBlogPosts: null,
    published_at: '2022-04-27T11:43:01.129Z',
    promoted: null,
    pageCategory: { id: '21' },
    description: 'Účinkujú: Peter Janků, Soňa Horňáková, Mirka Miškechová Projekt Hudba U červeného raka S finančnou podporou MK SR',
    date_added: null,
    created_at: '2022-04-27T11:43:01.212Z',
    blogPosts: [],
    Seo: {
        canonicalURL: null,
        id: '378',
        keywords: null,
        metaDescription: 'Účinkujú: Peter Janků, Soňa Horňáková, Mirka Miškechová Projekt Hudba U červeného raka S finančnou podporou MK SR',
        metaRobots: null,
        metaTitle: 'Letné folkovanie',
        metaViewport: null
    }
};
var a = null;
var events = function () { return __awaiter(void 0, void 0, void 0, function () {
    var firstPages, events, mappedEvents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, gql_1.sourceClient.Pages({ start: 100 })];
            case 1:
                firstPages = _a.sent();
                events = firstPages.pages.filter(function (p) { var _a, _b; return ((_b = (_a = p.sections) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__typename) === 'ComponentSectionsEventDetails'; });
                mappedEvents = (0, lodash_1.mapValues)(events, function (e) {
                    var _a, _b, _c, _d, _e, _f;
                    if (((_b = (_a = e.sections) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__typename) === 'ComponentSectionsEventDetails') {
                        return (0, lodash_1.pickBy)({
                            Seo: (0, lodash_1.omit)(e.Seo, ['id', '__typename']),
                            coverImage: (_c = e.sections[0].eventCoverImage) === null || _c === void 0 ? void 0 : _c.id,
                            // TODO validate there are no events with multiple sections
                            dateFrom: e.sections[0].dateFrom,
                            dateTo: e.sections[0].dateTo,
                            date_added: e.date_added || e.published_at.toString().slice(0, 10),
                            description: e.sections[0].eventDescription,
                            eventCategory: (_d = e.sections[0].eventCategory) === null || _d === void 0 ? void 0 : _d.id,
                            eventLocality: (_e = e.sections[0].eventLocality) === null || _e === void 0 ? void 0 : _e.id,
                            eventTags: e.sections[0].eventTags.map(function (t) { return t.id; }),
                            guests: e.sections[0].guests.map(function (g) { return g.id; }),
                            listingImage: (_f = e.listingImage) === null || _f === void 0 ? void 0 : _f.id,
                            price: e.sections[0].price,
                            promoted: e.promoted,
                            publishedAt: e.published_at,
                            showForm: !!e.sections.find(function (s) { return s.__typename === 'ComponentSectionsForm'; }),
                            slug: e.slug,
                            title: e.sections[0].eventTitle
                        });
                    }
                    else
                        throw new Error('Unexpected!');
                });
                // TODO fix localizations
                // const e = events[0]
                // for (let i = 0; i < 1; i++) {
                //   // TODO 24
                //   const newPages = await sourceClient.Pages({start: i});
                // }
                // console.log(events);
                console.dir(events[0], { depth: null });
                console.log('go!!!!!!!!!!!!!!!');
                return [4 /*yield*/, gql_1.targetClient.MyMutation({ data: mappedEvents[0] })];
            case 2:
                _a.sent();
                console.log('----------');
                return [2 /*return*/];
        }
    });
}); };
events();
