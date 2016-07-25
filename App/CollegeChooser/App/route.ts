import { provideRouter, RouterConfig }  from '@angular/router';
import {IndexComponent} from "./Components/index";
import {RecommendationComponent} from "./Components/recommendation";
import {EvaluationComponent} from "./Components/evaluation";
import {InformationComponent} from "./Components/information";

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'recommendation',
        component: RecommendationComponent
    },
    {
        path: 'evaluation',
        component: EvaluationComponent
    },
    {
        path: 'information',
        component: InformationComponent
    }

];

export const appRouterProviders = [
    provideRouter(routes)
];