import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { UserHomepageComponent } from './pages/user-homepage/user-homepage.component';
import { AdminManageCompanyComponent } from './pages/admin-manage-company/admin-manage-company.component';
import { AdminImportFilesComponent } from './pages/admin-import-files/admin-import-files.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { UserCompareCompanyComponent } from './pages/user-compare-company/user-compare-company.component';
import { UserIposComponent } from './pages/user-ipos/user-ipos.component';
import { OptionalPageComponent } from './pages/optional-page/optional-page.component';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent},
  { path: 'admin-homepage', component: AdminHomepageComponent},
  {path: 'admin-manage-company', component: AdminManageCompanyComponent},
  {path: 'import-Excel', component: AdminImportFilesComponent},
  {path: 'user-homepage', component: UserHomepageComponent},
  {path: 'IPOs', component: UserIposComponent},
  {path: 'compareCompany', component: UserCompareCompanyComponent},
  {path: 'changepwd', component: ChangePasswordComponent}, 
  {path: 'optional-page', component: OptionalPageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






