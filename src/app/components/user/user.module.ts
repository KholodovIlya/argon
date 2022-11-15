import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { GamesComponent } from './components/games/games.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent,
    FooterComponent,
    HeaderComponent,
    UserDashboardComponent,
    GamesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
