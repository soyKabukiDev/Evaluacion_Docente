import { Routes } from "@angular/router";
export default[
    {
        path:'',
        loadComponent: () => import('../admin.component'),
        children:[
            {
                path:'home',
                loadComponent: () => import('../administraitor/homeadmin/homeadmin.component'),
            },
            {
                path:'settingform',
                loadComponent: () => import('../administraitor/form-settings/form-settings.component'),
            },
            {
                path:'teachers',
                loadComponent: () => import('../administraitor/teachersdata/teachersdata.component'),
            },
            {
                path:'useradmin',
                loadComponent: () => import('../administraitor/useradmin/useradmin.component'),
            },
            {
                path:'login',
                loadComponent: () => import('../../auth/login/login.component'),
            },
            {
                path:'',
                        redirectTo:'home',
                        pathMatch:'full'
            }
        ]
    },
] as Routes
