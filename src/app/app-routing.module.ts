import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { ParentComponent } from './parent/parent.component';
import { HostComponent } from './host/host.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { ContactRouteComponent } from './contact-route/contact-route.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeRouteComponent},
  {path:'notes',component:NotesComponent},
  {path:'parent',component:ParentComponent},
  {path:'host',component:HostComponent},
  {path:'about',component:AboutRouteComponent},
  {path:'contact',component:ContactRouteComponent},
  {path:'user/:id',component:UserComponent},
  {path:'**',component:NotFoundComponentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
