import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileChefComponent } from './profile-chef.component';

const routes: Routes = [{
  path: '',
  component: ProfileChefComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileChefRoutingModule {
}
