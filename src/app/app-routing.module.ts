import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: '', component: UsersListComponent },
    { path: ':userId', component: UserFormComponent }
  ] },
  { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
