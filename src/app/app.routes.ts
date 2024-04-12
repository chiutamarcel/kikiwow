import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { ShopComponent } from './shop/shop.component';
import { RulesComponent } from './rules/rules.component';
import { RealmsComponent } from './realms/realms.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'rules', component: RulesComponent},
    {path: 'realms', component: RealmsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'account', component: AccountComponent},
];
