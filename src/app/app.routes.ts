import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'shop', component: HomepageComponent},
    {path: 'rules', component: HomepageComponent},
    {path: 'realms', component: HomepageComponent},
    {path: 'database', component: HomepageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: HomepageComponent}
];
