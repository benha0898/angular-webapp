import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { DateTimeComponent } from './components/date-time/date-time.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CardInputDialog } from './components/cardInputDialog/cardInputDialog.component';
import { CardMenuDialog } from './components/cardMenuDialog/cardMenuDialog.component';
import { ConfirmDialog } from './components/confirmDialog/confirmDialog.component';
import { AmountInputDialog } from './components/amountInputDialog/amountInputDialog.component';
import { SuccessSnackBar } from './components/successSnackBar/successSnackBar.component';
import { ErrorSnackBar } from './components/errorSnackBar/errorSnackBar.component';
import { LandingComponent } from './components/landing/landing.component';
import { AdminComponent } from './components/admin/admin.component';
import { PCTransacComponent } from './components/pctransac/pctransac.component';
import { GCTransacComponent } from './components/gctransac/gctransac.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { EditAccountDialog } from './components/editAccountDialog/editAccountDialog.component';
import { CreateAccountDialog } from './components/createAccountDialog/createAccountDialog.component';
import { MainLoginFormComponent } from './components/main-login-form/main-login-form.component';

import { UserLoginService } from './services/user-login.service';
import { CardLoginService } from './services/card-login.service';
import { CardTransacService } from './services/card-transac.service';
import { LogTableService } from './services/log-table.service';
import { SettingsService } from './services/settings.service';
import { AccountsService } from './services/accounts.service';
import { PointcardsComponent } from './components/pointcards/pointcards.component';

@NgModule({
  // For Components
  declarations: [
    AppComponent,
    routingComponents,
    DateTimeComponent,
    LoginFormComponent,
    CardInputDialog,
    CardMenuDialog,
    ConfirmDialog,
    AmountInputDialog,
    SuccessSnackBar,
    ErrorSnackBar,
    LandingComponent,
    AdminComponent,
    PCTransacComponent,
    GCTransacComponent,
    AdminNavComponent,
    SettingsComponent,
    AccountsComponent,
    EditAccountDialog,
    CreateAccountDialog,
    MainLoginFormComponent,
    PointcardsComponent
  ],

  entryComponents: [
    CardInputDialog,
    CardMenuDialog,
    ConfirmDialog,
    AmountInputDialog,
    SuccessSnackBar,
    ErrorSnackBar,
    LoginFormComponent,
    PCTransacComponent,
    GCTransacComponent,
    EditAccountDialog,
    CreateAccountDialog,
    MainLoginFormComponent
  ],
  
  // For Modules
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  // For Services
  providers: [
    UserLoginService,
    CardLoginService,
    CardTransacService,
    LogTableService,
    SettingsService,
    AccountsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
