import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { AdminComponent } from './components/admin/admin.component';
import { PCTransacComponent } from './components/pctransac/pctransac.component';
import { GCTransacComponent } from './components/gctransac/gctransac.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { PointcardsComponent } from './components/pointcards/pointcards.component';

import { UserLoginGuard } from './guards/user-login.guard';
import { AfterLoginGuard } from './guards/after-login.guard';
import { AdminLoginGuard } from './guards/admin-login.guard';


const routes:Routes = [
    { path: '', component: LandingComponent, canActivate: [AfterLoginGuard]},
    { path: 'main', component: WorkspaceComponent, canActivate: [UserLoginGuard]},
    { path: 'admin', component: AdminComponent, canActivate: [AdminLoginGuard], children: [
        { path: 'pctransac', component: PCTransacComponent },
        { path: 'gctransac', component: GCTransacComponent },
        { path: 'pointcards', component: PointcardsComponent },
        { path: 'settings', component: SettingsComponent },
        { path: 'accounts', component: AccountsComponent }
    ]}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {};
export const routingComponents = [
    LandingComponent,
    WorkspaceComponent
]