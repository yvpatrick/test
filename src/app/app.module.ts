import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PserviceService} from './pservice.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { Routes,RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserComponent } from './user/user.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AddtechComponent } from './addtech/addtech.component';
import { ViewtechComponent } from './viewtech/viewtech.component';
import { SafePipe } from './safe.pipe'

const myrouts: Routes = [
  { path: 'Home', component: UserhomeComponent },
  { path: 'User', component: UserComponent },
  { path: 'Admin', component: AdminLoginComponent },
  { path: 'AdminHome', component: AdminComponent },
  { path: 'AddTech', component: AddtechComponent },
  { path: 'ViewTech', component: ViewtechComponent },



  { path: '', redirectTo: '/Home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MaincontentComponent,
    ContactComponent,
    FooterComponent,
    AdminComponent,
    AdminLoginComponent,
    UserComponent,
    UserhomeComponent,
    AddtechComponent,
    ViewtechComponent,
    SafePipe
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(myrouts),
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
