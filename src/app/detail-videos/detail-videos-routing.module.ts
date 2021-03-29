import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailVideosComponent } from './detail-videos.component';

const routes: Routes = [{
  path: '',
  component: DetailVideosComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailVideosRoutingModule {
}
