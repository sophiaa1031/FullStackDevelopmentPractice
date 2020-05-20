import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NgForm } from '@angular/forms/src/directives/ng_form';

import { LogInComponent } from './pages/log-in/log-in.component';
import { AdminImportFilesComponent } from './pages/admin-import-files/admin-import-files.component';
import { AdminManageCompanyComponent } from './pages/admin-manage-company/admin-manage-company.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { UserCompareCompanyComponent } from './pages/user-compare-company/user-compare-company.component';
import { UserIposComponent } from './pages/user-ipos/user-ipos.component';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { UserHomepageComponent } from './pages/user-homepage/user-homepage.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { OptionalPageComponent } from './pages/optional-page/optional-page.component';
import { SearchPipe } from './pipe/search-pipe';

// Fusion chart start
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Powercharts from 'fusioncharts/fusioncharts.powercharts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionChartsModule.fcRoot(FusionCharts, Charts, Powercharts, FusionTheme);
// Fusion chart End

import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AdminImportFilesComponent,
    AdminManageCompanyComponent,
    ChangePasswordComponent,
    UserCompareCompanyComponent,
    UserIposComponent,
    AdminHomepageComponent,
    UserHomepageComponent,
    NavbarComponent,
    FooterComponent,
    OptionalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpModule,
    HttpClientModule,
    // NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
