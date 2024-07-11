import { Routes } from "@angular/router";

export default [
    {
        path:'',
        loadComponent:() => import('../layout-admin.component'),
        children:[
            {
                path: 'home',
                loadComponent: () => import('../../dashhome/dashhome.component'),
            },
            {
                path: 'estadisticas',
                loadComponent: () => import('../../ranking/ranking.component'),
            },
            {
                path:'',
                redirectTo:'home',
                pathMatch:'full'
            }
        ]
    }
] as Routes;