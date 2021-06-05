import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SchoolComponent } from './school.component';

const routes: Routes = [{
  path: '',
  component: SchoolComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolRoutingModule {
}
