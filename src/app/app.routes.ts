import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'scrollBottomTop',pathMatch:'full'},
    {path:'login',loadComponent:()=>import('./views/login/login.component').then(m=>m.LoginComponent)},
    {path:'home',loadComponent:()=>import('./views/home/home.component').then(m=>m.HomeComponent)},
    {path:'scrollBottomTop',loadComponent:()=>import('./views/scroll-bottom-top/scroll-bottom-top.component').then(m=>m.ScrollBottomTopComponent)}
];
