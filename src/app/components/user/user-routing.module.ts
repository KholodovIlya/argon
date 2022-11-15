import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: "", component: UserDashboardComponent,
    children: [
      {path: "home", component: HomeComponent},
      {path: "games", component: GamesComponent},
      {path: "contacts", component: ContactsComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
