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
                path:'comments',
                loadComponent: () => import('../administraitor/comments/comments.component'),
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
                path:'',
                        redirectTo:'home',
                        pathMatch:'full'
            }
        ]
    },
] as Routes
