import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { HostComponent } from './host/host.component';
import { HighLightDirective } from './high-light.directive';
import { MyServiceService } from './my-service.service';
import { HomeRouteComponent } from './home-route/home-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { ContactRouteComponent } from './contact-route/contact-route.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { UserComponent } from './user/user.component';
// import { UsersComponent } from './users/users.component';
// import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
export const API_URL = new InjectionToken<string>('API_URL');
export const API_NEW_URL=new InjectionToken<string>('API_NEW_URL')
@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ParentComponent,
    ChildComponent,
    HostComponent,
    HighLightDirective,
    HomeRouteComponent,
    AboutRouteComponent,
    ContactRouteComponent,
    NotFoundComponentComponent,
    UserComponent,
    // UsersComponent,
    // DependencyInjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // NgModule,
    FormsModule
  ],
  providers: [{ provide: API_URL, useValue: 'https://api.example.com' },{provide:API_NEW_URL,useValue:'google.com'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
