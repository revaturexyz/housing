import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoordinatorNotificationsComponent } from './coordinator-notifications/coordinator-notifications.component';
import { AssignTenantToRoomComponent } from './assign-tenant-to-room/assign-tenant-to-room.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';
import { ProviderStatusComponent } from './provider-status/provider-status.component';
import { ManageComplexComponent } from './manage-complex/manage-complex.component';
import { SearchTenantComponent } from './search-tenant/search-tenant.component';
import { SelectTenantComponent } from './select-tenant/select-tenant.component';
import { AddTenantComponent } from './add-tenant/add-tenant.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewRoomComponent } from './view-room/view-room.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComplexComponent } from './manage-complex/add-complex/add-complex.component';
import { TenantProfileComponent } from './tenant-profile/tenant-profile.component';
import { TenantMaintenanceComponent } from './tenant-maintenance/tenant-maintenance.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
    /*provider routes*/
    { path: 'edit-provider', component: EditProviderComponent, canActivate: [OktaAuthGuard] },
    { path: 'provider-status', component: ProviderStatusComponent, canActivate: [OktaAuthGuard] },
    { path: 'manage-complex', component: ManageComplexComponent, canActivate: [OktaAuthGuard] },
    { path: 'add-complex', component: AddComplexComponent, canActivate: [OktaAuthGuard] },
    /*coordinator routes*/
    { path: 'assign-tenant-to-room', component: AssignTenantToRoomComponent, canActivate: [OktaAuthGuard] },
    { path: 'search-tenant', component: SearchTenantComponent , canActivate: [OktaAuthGuard]},
    { path: 'coordinator-notifications', component: CoordinatorNotificationsComponent, canActivate: [OktaAuthGuard] },
    { path: 'add-tenant', component: TenantProfileComponent , canActivate: [OktaAuthGuard] },
    { path: 'edit-tenant/:id', component: TenantProfileComponent , canActivate: [OktaAuthGuard] },
    { path: 'select-tenant/:id', component: TenantProfileComponent, canActivate: [OktaAuthGuard]},
    /*tenant routes*/
    { path: 'tenant-profile', component: TenantProfileComponent, canActivate: [OktaAuthGuard] },
    { path: 'tenant-maintenance', component: TenantMaintenanceComponent, canActivate: [OktaAuthGuard] },
    { path: 'view-room', component: ViewRoomComponent, canActivate: [OktaAuthGuard]},
  ], canActivate: [OktaAuthGuard]},

  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
