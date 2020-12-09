import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { PersonListComponent } from './components/person-list/person-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/person-list', pathMatch: 'full' },
  {path: 'person-list', component: PersonListComponent},
  {path: 'person-create', component: PersonCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
