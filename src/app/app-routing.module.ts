import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { ParentComponent } from './parent/parent.component';
import { HostComponent } from './host/host.component';

const routes: Routes = [
  {path:'notes',component:NotesComponent},
  {path:'parent',component:ParentComponent},
  {path:'host',component:HostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
