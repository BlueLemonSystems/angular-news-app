import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { DataListComponent } from './shared/components/data-list/data-list.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodosListComponent } from './pages/todos/todos-list/todos-list.component';
import { TodoStatusDirective } from './shared/directives/todo-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UsersComponent,
    NotFoundComponent,
    UserFormComponent,
    UsersListComponent,
    DataListComponent,
    TodosComponent,
    TodosListComponent,
    TodoStatusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
