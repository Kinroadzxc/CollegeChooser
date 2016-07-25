"use strict";
var router_1 = require('@angular/router');
var index_1 = require("./Components/index");
var recommendation_1 = require("./Components/recommendation");
var evaluation_1 = require("./Components/evaluation");
var information_1 = require("./Components/information");
var routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: index_1.IndexComponent
    },
    {
        path: 'recommendation',
        component: recommendation_1.RecommendationComponent
    },
    {
        path: 'evaluation',
        component: evaluation_1.EvaluationComponent
    },
    {
        path: 'information',
        component: information_1.InformationComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=route.js.map