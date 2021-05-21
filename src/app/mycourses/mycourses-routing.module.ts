import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyCoursesComponent } from './mycourses.component';

const routes: Routes = [{
  path: '',
  component: MyCoursesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCoursesRoutingModule {
}
